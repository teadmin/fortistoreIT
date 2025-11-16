-- FortiStore Italia - Supabase Database Schema
-- Esegui questo script nel SQL Editor di Supabase
-- Tutte le tabelle hanno il prefisso fs_ (FortiStore)

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabella Prodotti
CREATE TABLE fs_products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  model TEXT NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT,
  description TEXT NOT NULL,
  short_description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
  discount_price DECIMAL(10,2) CHECK (discount_price >= 0 AND discount_price < price),
  features JSONB NOT NULL DEFAULT '[]',
  specifications JSONB NOT NULL DEFAULT '{}',
  image_url TEXT,
  images JSONB DEFAULT '[]',
  in_stock BOOLEAN DEFAULT true,
  popular BOOLEAN DEFAULT false,
  new BOOLEAN DEFAULT false,
  meta_title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  meta_keywords JSONB DEFAULT '[]',
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indici per prodotti
CREATE INDEX idx_fs_products_category ON fs_products(category);
CREATE INDEX idx_fs_products_slug ON fs_products(slug);
CREATE INDEX idx_fs_products_popular ON fs_products(popular) WHERE popular = true;
CREATE INDEX idx_fs_products_new ON fs_products(new) WHERE new = true;
CREATE INDEX idx_fs_products_in_stock ON fs_products(in_stock) WHERE in_stock = true;

-- Tabella Categorie
CREATE TABLE fs_categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  parent_id UUID REFERENCES fs_categories(id) ON DELETE CASCADE,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indici per categorie
CREATE INDEX idx_fs_categories_slug ON fs_categories(slug);
CREATE INDEX idx_fs_categories_parent ON fs_categories(parent_id);

-- Tabella Form di Contatto
CREATE TABLE fs_contact_forms (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  product_interest TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'closed')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indici per contact forms
CREATE INDEX idx_fs_contact_forms_status ON fs_contact_forms(status);
CREATE INDEX idx_fs_contact_forms_created_at ON fs_contact_forms(created_at DESC);

-- Tabella Newsletter Subscribers
CREATE TABLE fs_newsletter_subscribers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  active BOOLEAN DEFAULT true,
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Indici per newsletter
CREATE INDEX idx_fs_newsletter_active ON fs_newsletter_subscribers(active) WHERE active = true;
CREATE UNIQUE INDEX idx_fs_newsletter_email ON fs_newsletter_subscribers(email);

-- Tabella Reviews (opzionale - per recensioni prodotti)
CREATE TABLE fs_product_reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  product_id UUID REFERENCES fs_products(id) ON DELETE CASCADE,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title TEXT,
  review TEXT NOT NULL,
  verified_purchase BOOLEAN DEFAULT false,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indici per reviews
CREATE INDEX idx_fs_reviews_product ON fs_product_reviews(product_id);
CREATE INDEX idx_fs_reviews_approved ON fs_product_reviews(approved) WHERE approved = true;

-- Tabella Orders (opzionale - per gestire ordini)
CREATE TABLE fs_orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  company TEXT,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled')),
  items JSONB NOT NULL,
  shipping_address JSONB,
  billing_address JSONB,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indici per orders
CREATE INDEX idx_fs_orders_status ON fs_orders(status);
CREATE INDEX idx_fs_orders_created_at ON fs_orders(created_at DESC);
CREATE INDEX idx_fs_orders_customer_email ON fs_orders(customer_email);

-- Function per aggiornare updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger per aggiornare updated_at
CREATE TRIGGER update_fs_products_updated_at BEFORE UPDATE ON fs_products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_fs_contact_forms_updated_at BEFORE UPDATE ON fs_contact_forms
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_fs_orders_updated_at BEFORE UPDATE ON fs_orders
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS)
-- Abilita RLS su tutte le tabelle
ALTER TABLE fs_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE fs_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE fs_contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE fs_newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE fs_product_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE fs_orders ENABLE ROW LEVEL SECURITY;

-- Policy per lettura pubblica dei prodotti
CREATE POLICY "Allow public read access to fs_products"
ON fs_products FOR SELECT
USING (true);

-- Policy per lettura pubblica delle categorie
CREATE POLICY "Allow public read access to fs_categories"
ON fs_categories FOR SELECT
USING (true);

-- Policy per lettura pubblica delle recensioni approvate
CREATE POLICY "Allow public read access to approved fs_reviews"
ON fs_product_reviews FOR SELECT
USING (approved = true);

-- Policy per inserimento form di contatto (pubblico)
CREATE POLICY "Allow public insert to fs_contact_forms"
ON fs_contact_forms FOR INSERT
WITH CHECK (true);

-- Policy per inserimento newsletter (pubblico)
CREATE POLICY "Allow public insert to fs_newsletter"
ON fs_newsletter_subscribers FOR INSERT
WITH CHECK (true);

-- Inserimento categorie iniziali
INSERT INTO fs_categories (name, slug, description, display_order) VALUES
('FortiGate', 'fortigate', 'Firewall di nuova generazione con protezione dalle minacce integrate', 1),
('FortiWiFi', 'fortiwifi', 'Firewall con WiFi integrato per sicurezza rete e wireless', 2),
('FortiSwitch', 'fortiswitch', 'Switch gestiti con integrazione Security Fabric', 3),
('FortiAP', 'fortiap', 'Access Point WiFi 6 per reti wireless sicure', 4),
('Management', 'management', 'Soluzioni di gestione, logging e analisi', 5),
('Email & Web Security', 'security', 'Protezione email e applicazioni web', 6);

-- Commenti per documentazione
COMMENT ON TABLE fs_products IS 'Catalogo prodotti Fortinet disponibili';
COMMENT ON TABLE fs_categories IS 'Categorie di prodotti';
COMMENT ON TABLE fs_contact_forms IS 'Richieste di contatto e preventivi';
COMMENT ON TABLE fs_newsletter_subscribers IS 'Iscritti alla newsletter';
COMMENT ON TABLE fs_product_reviews IS 'Recensioni dei prodotti';
COMMENT ON TABLE fs_orders IS 'Ordini clienti';
