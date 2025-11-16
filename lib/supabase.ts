import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos de datos
export interface Product {
  id: string
  name: string
  model: string
  category: string
  subcategory?: string
  description: string
  short_description: string
  price: number
  discount_price?: number
  features: string[]
  specifications: Record<string, string>
  image_url: string
  images?: string[]
  in_stock: boolean
  popular: boolean
  new: boolean
  meta_title: string
  meta_description: string
  meta_keywords: string[]
  slug: string
  created_at?: string
  updated_at?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon?: string
  parent_id?: string
}

export interface ContactForm {
  id?: string
  name: string
  email: string
  phone: string
  company?: string
  message: string
  product_interest?: string
  created_at?: string
}
