import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import FeaturedProducts from '@/components/FeaturedProducts'
import { productsData, categories } from '@/lib/products-data'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categories.find((c) => c.slug === params.slug)

  if (!category) {
    return {
      title: 'Categoria non trovata',
    }
  }

  const categoryProducts = productsData.filter(
    (p) => p.category.toLowerCase().includes(category.id) ||
           category.id.toLowerCase().includes(p.category.toLowerCase())
  )

  return {
    title: `${category.name} Fortinet Italia`,
    description: `${category.description}. ${categoryProducts.length} prodotti disponibili con spedizione gratuita in Italia.`,
    keywords: [
      `${category.name.toLowerCase()} italia`,
      `comprare ${category.name.toLowerCase()}`,
      `${category.name.toLowerCase()} prezzo`,
      'fortinet italia',
    ],
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((c) => c.slug === params.slug)

  if (!category) {
    notFound()
  }

  // Filter products by category
  const categoryProducts = productsData.filter(
    (p) => p.category.toLowerCase().includes(category.id) ||
           category.id.toLowerCase().includes(p.category.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-fortinet-dark to-gray-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            {category.description}
          </p>
          <div className="inline-block bg-white/10 px-4 py-2 rounded-full">
            <span className="text-sm">
              {categoryProducts.length} prodotti disponibili
            </span>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      {category.subcategories && category.subcategories.length > 0 && (
        <section className="bg-white border-b border-gray-200 py-4">
          <div className="container-custom">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 py-2">Filtra per:</span>
              {category.subcategories.map((subcat) => (
                <button
                  key={subcat}
                  className="px-4 py-2 text-sm bg-gray-100 hover:bg-fortinet-red hover:text-white rounded-full transition-colors"
                >
                  {subcat}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products */}
      <section className="py-16">
        <div className="container-custom">
          {categoryProducts.length > 0 ? (
            <FeaturedProducts products={categoryProducts} />
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                Nessun prodotto disponibile in questa categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Category Info */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">
              Informazioni su {category.name}
            </h2>
            <p className="text-gray-600">
              {getCategoryDescription(category.id)}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

function getCategoryDescription(categoryId: string): string {
  const descriptions: Record<string, string> = {
    fortigate: 'I firewall FortiGate rappresentano il cuore della sicurezza di rete Fortinet. Con prestazioni che vanno da 5 Gbps fino a oltre 100 Gbps, i FortiGate offrono protezione completa dalle minacce, VPN, SD-WAN, controllo applicazioni e molto altro. Disponibili in modelli per piccole imprese, PMI e grandi organizzazioni, i FortiGate sono la scelta ideale per proteggere la tua rete aziendale in Italia.',
    fortiwifi: 'Le soluzioni FortiWiFi combinano la potenza dei firewall FortiGate con access point WiFi 6 integrati. Perfetti per piccoli uffici e filiali che necessitano di una soluzione all-in-one per sicurezza di rete e connettività wireless. Gestione semplificata e protezione completa in un unico dispositivo.',
    fortiswitch: 'Gli switch FortiSwitch offrono switching sicuro con integrazione completa nel Security Fabric Fortinet. Disponibili con PoE+ per alimentare access point e telecamere IP, supportano Layer 2 e Layer 3 con gestione centralizzata via FortiGate. Ideali per costruire una rete aziendale sicura e performante.',
    fortiap: 'Gli access point FortiAP WiFi 6 offrono connettività wireless aziendale sicura e ad alte prestazioni. Gestiti centralmente via FortiGate o controller dedicato, supportano le più recenti tecnologie wireless inclusi MU-MIMO, OFDMA e protezione wireless avanzata. Disponibili sia per installazioni indoor che outdoor.',
    management: 'Le soluzioni di management Fortinet includono FortiAnalyzer per logging e analytics centralizzati, e FortiManager per configurazione e gestione multi-dispositivo. Essenziali per reti enterprise e multi-sede, offrono visibilità completa e automazione avanzata.',
    security: 'FortiMail e FortiWeb proteggono rispettivamente email e applicazioni web. FortiMail offre protezione anti-spam, anti-phishing e sandboxing email. FortiWeb è un Web Application Firewall (WAF) che protegge le tue applicazioni web dalle vulnerabilità OWASP Top 10 e attacchi DDoS.',
  }

  return descriptions[categoryId] || 'Esplora i nostri prodotti Fortinet di alta qualità con consegna rapida in tutta Italia.'
}
