import { Metadata } from 'next'
import FeaturedProducts from '@/components/FeaturedProducts'
import { productsData } from '@/lib/products-data'
import { italianKeywords } from '@/lib/seo-keywords'

export const metadata: Metadata = {
  title: 'Tutti i Prodotti Fortinet',
  description: 'Catalogo completo prodotti Fortinet: FortiGate, FortiWiFi, FortiSwitch, FortiAP, FortiAnalyzer, FortiMail. Acquista online con spedizione gratuita in Italia.',
  keywords: [...italianKeywords.primary, ...italianKeywords.secondary],
}

export default function ProdottiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-fortinet-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Catalogo Prodotti Fortinet
          </h1>
          <p className="text-xl text-gray-300">
            Esplora la gamma completa di soluzioni di sicurezza Fortinet disponibili in Italia
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-gray-600">
                Trovati <strong>{productsData.length}</strong> prodotti
              </p>
            </div>

            {/* Filters could be added here */}
          </div>

          <FeaturedProducts products={productsData} />
        </div>
      </section>
    </div>
  )
}
