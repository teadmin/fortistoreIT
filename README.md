# FortiStore Italia - E-commerce Fortinet

FortiStore Italia è un sito e-commerce completo per la vendita di prodotti Fortinet nel mercato italiano.

## 🚀 Caratteristiche

- **Next.js 14** con App Router
- **TypeScript** per type safety
- **Tailwind CSS** per styling moderno e responsive
- **Supabase** per backend e database
- **SEO Ottimizzato** per Google e Bing con keywords italiane
- **Responsive Design** ottimizzato per mobile, tablet e desktop
- **Performance Elevate** con ottimizzazioni Next.js

## 📦 Prodotti Disponibili

- **FortiGate** - Firewall di nuova generazione
- **FortiWiFi** - Firewall con WiFi integrato
- **FortiSwitch** - Switch gestiti Layer 2/3
- **FortiAP** - Access Point WiFi 6
- **FortiAnalyzer** - Logging e analytics
- **FortiManager** - Gestione centralizzata
- **FortiMail** - Email security
- **FortiWeb** - Web application firewall

## 🛠️ Installazione

### Prerequisiti

- Node.js 18+
- npm o yarn
- Account Supabase (per il database)

### Setup

1. Clona il repository:
```bash
git clone [repository-url]
cd fortistoreIT
```

2. Installa le dipendenze:
```bash
npm install
```

3. Configura le variabili d'ambiente:
Crea un file `.env.local` basato su `.env.local.example`:
```bash
cp .env.local.example .env.local
```

Modifica `.env.local` con le tue credenziali Supabase:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Avvia il server di sviluppo:
```bash
npm run dev
```

5. Apri [http://localhost:3000](http://localhost:3000) nel browser

## 📊 Configurazione Supabase

### Database Schema

Crea le seguenti tabelle in Supabase:

#### Tabella `products`
```sql
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  model TEXT NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT,
  description TEXT NOT NULL,
  short_description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  discount_price DECIMAL(10,2),
  features JSONB NOT NULL,
  specifications JSONB NOT NULL,
  image_url TEXT,
  images JSONB,
  in_stock BOOLEAN DEFAULT true,
  popular BOOLEAN DEFAULT false,
  new BOOLEAN DEFAULT false,
  meta_title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  meta_keywords JSONB,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Tabella `categories`
```sql
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  parent_id UUID REFERENCES categories(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Tabella `contact_forms`
```sql
CREATE TABLE contact_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  product_interest TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Tabella `newsletter_subscribers`
```sql
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  active BOOLEAN DEFAULT true
);
```

## 🎨 Personalizzazione

### Colori Brand
I colori Fortinet sono definiti in `tailwind.config.ts`:
- Rosso Fortinet: `#EE3124`
- Dark: `#1A1A1A`
- Gray: `#F5F5F5`

### Keywords SEO
Le keywords SEO per il mercato italiano sono definite in `lib/seo-keywords.ts`.
Modifica questo file per aggiungere nuove keywords o regioni.

## 📈 SEO

Il sito è ottimizzato per:
- ✅ Google Search
- ✅ Bing Search
- ✅ Metadata OpenGraph
- ✅ Twitter Cards
- ✅ Schema.org structured data
- ✅ Sitemap XML automatico
- ✅ Robots.txt
- ✅ Keywords italiane localizzate

### Keywords Principali
- fortinet italia
- fortinet roma
- fortinet milano
- comprare fortinet italia
- fortigate italia
- firewall fortinet

## 🚢 Deploy

### Vercel (Raccomandato)

1. Fai push del codice su GitHub
2. Importa il progetto su [Vercel](https://vercel.com)
3. Configura le variabili d'ambiente
4. Deploy automatico

### Altri Hosting
Il sito può essere deployato su qualsiasi piattaforma che supporta Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## 📱 Responsive Design

Il sito è completamente responsive e ottimizzato per:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## ⚡ Performance

Ottimizzazioni implementate:
- Image optimization con Next.js Image
- Code splitting automatico
- Lazy loading componenti
- CSS ottimizzato con Tailwind
- Caching headers
- Compressione Gzip/Brotli

## 📄 Licenza

© 2024 FortiStore Italia. Tutti i diritti riservati.

Fortinet, FortiGate e altri marchi sono proprietà di Fortinet, Inc.

## 🤝 Supporto

Per supporto tecnico o domande:
- Email: info@fortistore.it
- Telefono: +39 02 1234 5678
- Orari: Lun-Ven 9:00-18:00

## 🔄 Aggiornamenti

Controlla regolarmente per aggiornamenti e nuove funzionalità.
