# Guida al Deployment - FortiStore Italia

## 📋 Pre-requisiti

Prima di deployare il sito, assicurati di avere:

1. ✅ Account Supabase configurato
2. ✅ Database creato con lo schema fornito
3. ✅ Credenziali Supabase (URL e Anon Key)
4. ✅ Dominio fortistore.it configurato

## 🗄️ Configurazione Supabase

### 1. Crea un nuovo progetto Supabase

1. Vai su [supabase.com](https://supabase.com)
2. Crea un nuovo progetto
3. Annota l'URL del progetto e la chiave Anon

### 2. Esegui lo schema SQL

1. Apri il SQL Editor in Supabase
2. Copia il contenuto di `supabase-schema.sql`
3. Esegui lo script
4. Verifica che tutte le tabelle siano state create

### 3. Popola i dati iniziali

Opzione A - Tramite interfaccia Supabase:
1. Vai nella sezione "Table Editor"
2. Inserisci manualmente i prodotti dalla lista in `lib/products-data.ts`

Opzione B - Tramite API (dopo il deploy):
1. Crea uno script di migrazione
2. Usa il client Supabase per inserire i prodotti

## 🚀 Deploy su Vercel (Raccomandato)

### 1. Prepara il repository

```bash
git init
git add .
git commit -m "Initial commit - FortiStore Italia"
git remote add origin [your-github-repo]
git push -u origin main
```

### 2. Importa su Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Clicca "New Project"
3. Importa il tuo repository GitHub
4. Configura le variabili d'ambiente:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_SITE_URL=https://fortistore.it
NEXT_PUBLIC_SITE_NAME=FortiStore Italia
```

5. Clicca "Deploy"

### 3. Configura il dominio personalizzato

1. Vai in Settings → Domains
2. Aggiungi `fortistore.it`
3. Configura i DNS come indicato da Vercel:

```
A Record:    @    →  76.76.21.21
CNAME:       www  →  cname.vercel-dns.com
```

## 🔧 Configurazione Post-Deploy

### 1. Google Search Console

1. Vai su [Google Search Console](https://search.google.com/search-console)
2. Aggiungi la proprietà `fortistore.it`
3. Verifica la proprietà (metodo DNS o meta tag)
4. Invia la sitemap: `https://fortistore.it/sitemap.xml`

### 2. Bing Webmaster Tools

1. Vai su [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Aggiungi `fortistore.it`
3. Verifica il sito
4. Invia la sitemap: `https://fortistore.it/sitemap.xml`

### 3. Google Analytics (Opzionale)

1. Crea una proprietà GA4
2. Aggiungi il tracking code in `app/layout.tsx`

### 4. Aggiorna i meta tag di verifica

In `app/layout.tsx`, aggiorna:
```typescript
verification: {
  google: 'your-actual-google-verification-code',
  yandex: 'your-actual-yandex-verification-code',
},
```

E in `<head>`:
```typescript
<meta name="msvalidate.01" content="your-bing-verification-code" />
```

## 📧 Configurazione Email

### Opzione 1: Supabase Auth (per newsletter)

1. Configura SMTP in Supabase
2. Abilita Email Auth

### Opzione 2: SendGrid/Mailgun

1. Crea account SendGrid o Mailgun
2. Ottieni API key
3. Configura in `.env.local`:

```
EMAIL_SERVICE_API_KEY=your-api-key
EMAIL_FROM=info@fortistore.it
```

## 🔒 Sicurezza

### 1. Configurazione CORS

In Supabase Settings → API:
- Aggiungi `fortistore.it` agli allowed origins

### 2. Rate Limiting

Considera l'aggiunta di rate limiting per:
- Form di contatto
- Newsletter signup
- API calls

### 3. SSL/TLS

Vercel fornisce SSL automatico, ma verifica:
- ✅ HTTPS enabled
- ✅ Redirect HTTP → HTTPS
- ✅ HSTS headers (già configurato in `next.config.js`)

## 📊 Monitoraggio

### 1. Vercel Analytics

Abilita Vercel Analytics per:
- Performance monitoring
- Web Vitals
- Real User Monitoring

### 2. Error Tracking

Considera l'integrazione di:
- Sentry (error tracking)
- LogRocket (session replay)

## 🔄 CI/CD

Il deploy automatico è configurato con Vercel:

- ✅ Push to `main` → Deploy to production
- ✅ Pull requests → Deploy preview
- ✅ Automatic builds

## 📱 Test Post-Deploy

### Checklist:

- [ ] Homepage carica correttamente
- [ ] Tutte le pagine di categoria funzionano
- [ ] Pagine prodotto visualizzano i dettagli
- [ ] Form di contatto invia correttamente
- [ ] Newsletter signup funziona
- [ ] SEO meta tags presenti
- [ ] Sitemap accessibile (`/sitemap.xml`)
- [ ] Robots.txt accessibile (`/robots.txt`)
- [ ] Mobile responsive
- [ ] Performance > 90 su PageSpeed Insights
- [ ] SSL certificato attivo
- [ ] Nessun errore console

### Test SEO:

1. Google PageSpeed Insights: https://pagespeed.web.dev/
2. Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
3. Google Rich Results Test: https://search.google.com/test/rich-results

### Test Performance:

```bash
npm run build
npm run start
```

Poi testa con Lighthouse:
- Performance > 90
- Accessibility > 90
- Best Practices > 90
- SEO > 95

## 🐛 Troubleshooting

### Build Errors

Se il build fallisce:
1. Controlla i log di Vercel
2. Verifica che tutte le dipendenze siano installate
3. Controlla TypeScript errors localmente: `npm run build`

### Database Connection Issues

Se Supabase non si connette:
1. Verifica le variabili d'ambiente
2. Controlla che l'URL Supabase sia corretto
3. Verifica che la chiave Anon sia valida

### 404 Errors

Se le pagine dinamiche danno 404:
1. Verifica che `generateStaticParams` funzioni
2. Controlla i dati in `lib/products-data.ts`
3. Ricompila il sito

## 📞 Supporto

Per problemi di deployment:
1. Controlla la documentazione Vercel
2. Controlla la documentazione Supabase
3. Contatta il team di sviluppo

## 🎉 Go Live!

Una volta completati tutti i test:

1. ✅ Configura Google Analytics
2. ✅ Configura Google Search Console
3. ✅ Configura Bing Webmaster
4. ✅ Annuncia il lancio
5. ✅ Monitora le prime 24-48 ore

Buon lancio! 🚀
