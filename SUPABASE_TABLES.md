# Tabelle Supabase - FortiStore Italia

Tutte le tabelle del database hanno il prefisso `fs_` (FortiStore) per facilitare l'identificazione e evitare conflitti.

## Tabelle Principali

### 1. fs_products
Catalogo completo dei prodotti Fortinet disponibili.

**Campi principali:**
- `id` (UUID) - Identificatore univoco
- `name` - Nome prodotto
- `model` - Codice modello
- `category` - Categoria principale
- `subcategory` - Sottocategoria
- `price` - Prezzo base
- `discount_price` - Prezzo scontato (opzionale)
- `slug` - URL-friendly identifier
- `in_stock` - Disponibilità
- `popular` - Flag prodotto popolare
- `new` - Flag nuovo prodotto

**Esempi di utilizzo:**
```typescript
// Ottenere tutti i prodotti
const { data: products } = await supabase
  .from('fs_products')
  .select('*')
  .eq('in_stock', true)

// Ottenere un prodotto specifico
const { data: product } = await supabase
  .from('fs_products')
  .select('*')
  .eq('slug', 'fortigate-60f')
  .single()

// Prodotti per categoria
const { data: products } = await supabase
  .from('fs_products')
  .select('*')
  .eq('category', 'FortiGate')
```

### 2. fs_categories
Categorie e sottocategorie dei prodotti.

**Campi principali:**
- `id` (UUID) - Identificatore univoco
- `name` - Nome categoria
- `slug` - URL-friendly identifier
- `description` - Descrizione
- `parent_id` - ID categoria padre (per sotto-categorie)
- `display_order` - Ordine di visualizzazione

**Esempi di utilizzo:**
```typescript
// Ottenere tutte le categorie principali
const { data: categories } = await supabase
  .from('fs_categories')
  .select('*')
  .is('parent_id', null)
  .order('display_order')

// Ottenere categoria per slug
const { data: category } = await supabase
  .from('fs_categories')
  .select('*')
  .eq('slug', 'fortigate')
  .single()
```

### 3. fs_contact_forms
Form di contatto e richieste preventivi.

**Campi principali:**
- `id` (UUID) - Identificatore univoco
- `name` - Nome cliente
- `email` - Email
- `phone` - Telefono
- `company` - Azienda (opzionale)
- `message` - Messaggio
- `product_interest` - Prodotto di interesse
- `status` - Stato ('new', 'contacted', 'quoted', 'closed')

**Esempi di utilizzo:**
```typescript
// Inserire nuovo form di contatto
const { data, error } = await supabase
  .from('fs_contact_forms')
  .insert({
    name: 'Mario Rossi',
    email: 'mario@example.com',
    phone: '+39 123 456 7890',
    company: 'Acme Corp',
    message: 'Vorrei un preventivo per FortiGate 60F',
    product_interest: 'FortiGate 60F'
  })
```

### 4. fs_newsletter_subscribers
Iscritti alla newsletter.

**Campi principali:**
- `id` (UUID) - Identificatore univoco
- `email` - Email (unica)
- `subscribed_at` - Data iscrizione
- `active` - Stato attivo
- `unsubscribed_at` - Data disiscrizione

**Esempi di utilizzo:**
```typescript
// Iscrivere alla newsletter
const { data, error } = await supabase
  .from('fs_newsletter_subscribers')
  .insert({
    email: 'user@example.com'
  })

// Verificare se email è già iscritta
const { data } = await supabase
  .from('fs_newsletter_subscribers')
  .select('email')
  .eq('email', 'user@example.com')
  .eq('active', true)
  .single()
```

### 5. fs_product_reviews
Recensioni dei prodotti (opzionale).

**Campi principali:**
- `id` (UUID) - Identificatore univoco
- `product_id` - ID prodotto
- `customer_name` - Nome cliente
- `customer_email` - Email cliente
- `rating` - Valutazione (1-5)
- `review` - Testo recensione
- `approved` - Approvata dal moderatore

**Esempi di utilizzo:**
```typescript
// Ottenere recensioni approvate di un prodotto
const { data: reviews } = await supabase
  .from('fs_product_reviews')
  .select('*')
  .eq('product_id', productId)
  .eq('approved', true)
  .order('created_at', { ascending: false })
```

### 6. fs_orders
Ordini clienti (opzionale - per e-commerce completo).

**Campi principali:**
- `id` (UUID) - Identificatore univoco
- `order_number` - Numero ordine (unico)
- `customer_name` - Nome cliente
- `customer_email` - Email
- `total_amount` - Totale ordine
- `status` - Stato ('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled')
- `items` - Prodotti ordinati (JSONB)

**Esempi di utilizzo:**
```typescript
// Creare nuovo ordine
const { data, error } = await supabase
  .from('fs_orders')
  .insert({
    order_number: 'ORD-2025-0001',
    customer_name: 'Mario Rossi',
    customer_email: 'mario@example.com',
    customer_phone: '+39 123 456 7890',
    total_amount: 899.00,
    items: JSON.stringify([
      { product_id: 'xxx', quantity: 1, price: 899.00 }
    ])
  })
```

## Row Level Security (RLS)

Tutte le tabelle hanno RLS abilitato con le seguenti policy:

- **fs_products**: Lettura pubblica
- **fs_categories**: Lettura pubblica
- **fs_product_reviews**: Lettura pubblica solo recensioni approvate
- **fs_contact_forms**: Solo inserimento pubblico
- **fs_newsletter_subscribers**: Solo inserimento pubblico
- **fs_orders**: Nessun accesso pubblico (solo backend/admin)

## Indici

Tutti gli indici utilizzano il prefisso `idx_fs_` seguito dal nome della tabella:

- `idx_fs_products_category` - Ricerca per categoria
- `idx_fs_products_slug` - Ricerca per slug
- `idx_fs_products_popular` - Filtro prodotti popolari
- `idx_fs_products_new` - Filtro nuovi prodotti
- `idx_fs_products_in_stock` - Filtro prodotti disponibili
- E altri...

## Trigger

I seguenti trigger aggiornano automaticamente il campo `updated_at`:

- `update_fs_products_updated_at`
- `update_fs_contact_forms_updated_at`
- `update_fs_orders_updated_at`

## Note Importanti

1. **Prefisso fs_**: Tutte le tabelle usano il prefisso `fs_` (FortiStore)
2. **UUID**: Tutti gli ID sono UUID generati automaticamente
3. **Timestamp**: I campi timestamp usano `TIMESTAMP WITH TIME ZONE`
4. **JSONB**: Features, specifications e altri dati strutturati usano JSONB
5. **Slug**: Ogni prodotto e categoria ha uno slug univoco per URL SEO-friendly
