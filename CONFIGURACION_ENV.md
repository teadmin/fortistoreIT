# Configuración de Variables de Entorno

## Variables Requeridas

Para que la aplicación FortiStore Italia funcione correctamente, necesitas configurar las siguientes variables de entorno:

### 1. Crear el archivo `.env.local`

En la raíz del proyecto, crea un archivo llamado `.env.local` (este archivo NO se subirá a Git por seguridad).

```bash
# Copiar el archivo de ejemplo
cp .env.local.example .env.local
```

O crear manualmente con el siguiente contenido:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://fortistore.it
NEXT_PUBLIC_SITE_NAME=FortiStore Italia
```

---

## 📋 Detalle de las Variables

### Variables de Supabase (OBLIGATORIAS)

#### `NEXT_PUBLIC_SUPABASE_URL`
**Descripción:** URL de tu proyecto Supabase
**Dónde obtenerla:**
1. Ve a [supabase.com](https://supabase.com)
2. Abre tu proyecto
3. Ve a **Settings** → **API**
4. Copia la URL del proyecto (Project URL)

**Ejemplo:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
```

#### `NEXT_PUBLIC_SUPABASE_ANON_KEY`
**Descripción:** Clave pública anónima de Supabase
**Dónde obtenerla:**
1. Ve a [supabase.com](https://supabase.com)
2. Abre tu proyecto
3. Ve a **Settings** → **API**
4. Copia la clave **anon / public** (NO la service_role)

**Ejemplo:**
```env
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3M...
```

⚠️ **IMPORTANTE:** Usa la clave `anon` (pública), NO la `service_role` (privada)

---

### Variables de Configuración del Sitio (OPCIONALES)

#### `NEXT_PUBLIC_SITE_URL`
**Descripción:** URL principal de tu sitio web
**Valor por defecto:** `https://fortistore.it`
**Uso:** Se usa para generar URLs absolutas, meta tags y sitemap

**Ejemplos:**
```env
# Producción
NEXT_PUBLIC_SITE_URL=https://fortistore.it

# Desarrollo local
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Staging
NEXT_PUBLIC_SITE_URL=https://staging.fortistore.it
```

#### `NEXT_PUBLIC_SITE_NAME`
**Descripción:** Nombre del sitio
**Valor por defecto:** `FortiStore Italia`
**Uso:** Se usa en meta tags y títulos

```env
NEXT_PUBLIC_SITE_NAME=FortiStore Italia
```

---

## 🚀 Pasos para Configurar Supabase

### Paso 1: Crear Proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com) y crea una cuenta (gratis)
2. Haz clic en **"New Project"**
3. Completa los datos:
   - **Name:** FortiStore Italia
   - **Database Password:** (guarda esta contraseña de forma segura)
   - **Region:** Europe West (o la más cercana a Italia)
4. Espera unos minutos mientras se crea el proyecto

### Paso 2: Obtener las Credenciales

1. Una vez creado el proyecto, ve a **Settings** (⚙️) → **API**
2. Encontrarás:
   - **Project URL** → Copia esto en `NEXT_PUBLIC_SUPABASE_URL`
   - **Project API keys** → Copia `anon/public` en `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Paso 3: Crear las Tablas

1. Ve a **SQL Editor** en el panel de Supabase
2. Abre el archivo `supabase-schema.sql` de este proyecto
3. Copia todo el contenido
4. Pégalo en el SQL Editor de Supabase
5. Haz clic en **Run** o presiona `Ctrl + Enter`
6. Verifica que todas las tablas se crearon correctamente:
   - `fs_products`
   - `fs_categories`
   - `fs_contact_forms`
   - `fs_newsletter_subscribers`
   - `fs_product_reviews`
   - `fs_orders`

### Paso 4: Verificar las Políticas RLS

Las políticas de Row Level Security ya están configuradas en el script SQL:
- ✅ Lectura pública de productos y categorías
- ✅ Inserción pública de formularios de contacto
- ✅ Inserción pública de suscripciones newsletter
- ✅ Solo lecturas aprobadas de reviews

---

## 🔍 Verificar la Configuración

Después de configurar las variables de entorno:

```bash
# 1. Detener el servidor de desarrollo si está corriendo
# Presiona Ctrl + C

# 2. Reiniciar el servidor
npm run dev

# 3. Verificar en la consola que no hay errores de Supabase
```

### Comprobar Conexión a Supabase

Puedes verificar que la conexión funciona abriendo la consola del navegador y ejecutando:

```javascript
// En la consola del navegador
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
```

Si ves tu URL de Supabase, la configuración es correcta.

---

## 🔒 Seguridad

### ✅ Variables Públicas (NEXT_PUBLIC_*)
- Estas variables son seguras de exponer al cliente
- Se incluyen en el bundle JavaScript del navegador
- La clave `anon` de Supabase está protegida por Row Level Security (RLS)

### ❌ NO expongas estas variables
Si en el futuro necesitas variables privadas:
- `SUPABASE_SERVICE_ROLE_KEY` → Solo para backend/API routes
- Claves de API privadas
- Credenciales de bases de datos
- Secrets de autenticación

---

## 📝 Ejemplo Completo de `.env.local`

```env
# ===========================================
# SUPABASE CONFIGURATION
# ===========================================
# Obtén estas credenciales en: https://supabase.com → Tu Proyecto → Settings → API
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkxMjM0NTYsImV4cCI6MjAwNDY5OTQ1Nn0.1234567890abcdefghijklmnopqrstuvwxyz

# ===========================================
# SITE CONFIGURATION
# ===========================================
NEXT_PUBLIC_SITE_URL=https://fortistore.it
NEXT_PUBLIC_SITE_NAME=FortiStore Italia
```

---

## 🆘 Problemas Comunes

### Error: "supabaseUrl is required"
**Solución:** Verifica que `NEXT_PUBLIC_SUPABASE_URL` esté configurado correctamente en `.env.local`

### Error: "Invalid API key"
**Solución:** Asegúrate de usar la clave `anon`, no la `service_role`

### Los cambios en .env.local no se reflejan
**Solución:**
1. Detén el servidor (`Ctrl + C`)
2. Reinicia con `npm run dev`
3. Next.js solo lee las variables de entorno al iniciar

### Error: "Failed to fetch"
**Solución:**
1. Verifica que las tablas existan en Supabase
2. Comprueba que RLS esté configurado correctamente
3. Revisa la consola de Supabase para errores

---

## 📚 Referencias

- [Documentación de Supabase](https://supabase.com/docs)
- [Variables de Entorno en Next.js](https://nextjs.org/docs/basic-features/environment-variables)
- [Archivo de documentación de tablas](./SUPABASE_TABLES.md)
