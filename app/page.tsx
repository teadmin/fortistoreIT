import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import Categories from '@/components/Categories'
import WhyChooseUs from '@/components/WhyChooseUs'
import TrustBadges from '@/components/TrustBadges'
import Newsletter from '@/components/Newsletter'
import SEOContent from '@/components/SEOContent'
import { productsData } from '@/lib/products-data'

export default function Home() {
  // Filtra prodotti popolari e nuovi
  const popularProducts = productsData.filter(p => p.popular).slice(0, 8)
  const newProducts = productsData.filter(p => p.new).slice(0, 4)

  // Structured Data for AI and Search Engines
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://fortistoreit.com/#organization",
        "name": "FortiStore IT",
        "url": "https://fortistoreit.com",
        "logo": "https://fortistoreit.com/logo.png",
        "description": "Rivenditore autorizzato Fortinet specializzato in soluzioni di sicurezza di rete per aziende in Italia. FortiGate, FortiSwitch, FortiAP, FortiAnalyzer, FortiManager, FortiMail, FortiWeb.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IT"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "availableLanguage": ["Italian", "English"]
        },
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://fortistoreit.com/#website",
        "url": "https://fortistoreit.com",
        "name": "FortiStore IT - Soluzioni Fortinet per Aziende",
        "publisher": {
          "@id": "https://fortistoreit.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://fortistoreit.com/prodotti?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://fortistoreit.com/#webpage",
        "url": "https://fortistoreit.com",
        "name": "FortiStore IT - Rivenditore Fortinet Italia | FortiGate, Switch, WiFi",
        "isPartOf": {
          "@id": "https://fortistoreit.com/#website"
        },
        "about": {
          "@id": "https://fortistoreit.com/#organization"
        },
        "description": "Rivenditore autorizzato Fortinet in Italia. FortiGate firewall, FortiSwitch, FortiAP WiFi 6, FortiAnalyzer, FortiManager. Preventivi personalizzati, supporto tecnico, licensing FortiGuard."
      },
      {
        "@type": "ItemList",
        "name": "Categorie Prodotti Fortinet",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "FortiGate Firewall",
            "description": "Next-Generation Firewall con IPS, antivirus, SD-WAN, VPN",
            "url": "https://fortistoreit.com/categoria/fortigate"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "FortiSwitch",
            "description": "Switch gestiti Layer 2/3 con PoE e FortiLink",
            "url": "https://fortistoreit.com/categoria/fortiswitch"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "FortiAP",
            "description": "Access Point WiFi 6 enterprise",
            "url": "https://fortistoreit.com/categoria/fortiap"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "FortiAnalyzer",
            "description": "Security analytics e logging centralizzato",
            "url": "https://fortistoreit.com/categoria/fortianalyzer"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "FortiManager",
            "description": "Gestione centralizzata dispositivi Fortinet",
            "url": "https://fortistoreit.com/categoria/fortimanager"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "FortiMail",
            "description": "Email security gateway anti-spam e anti-phishing",
            "url": "https://fortistoreit.com/categoria/fortimail"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "FortiWeb",
            "description": "Web Application Firewall (WAF)",
            "url": "https://fortistoreit.com/categoria/fortiweb"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://fortistoreit.com"
          }
        ]
      }
    ]
  }

  return (
    <>
      {/* Structured Data for AI and SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Prodotti Più Venduti</h2>
          <p className="section-subtitle text-center">
            Le soluzioni Fortinet più richieste dalle aziende italiane
          </p>
          <FeaturedProducts products={popularProducts} />
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Esplora per Categoria</h2>
          <p className="section-subtitle text-center">
            Trova la soluzione perfetta per la tua infrastruttura di sicurezza
          </p>
          <Categories />
        </div>
      </section>

      {/* New Products */}
      {newProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center">Novità</h2>
            <p className="section-subtitle text-center">
              Gli ultimi prodotti Fortinet disponibili
            </p>
            <FeaturedProducts products={newProducts} />
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* SEO Content */}
      <SEOContent />

      {/* Newsletter */}
      <Newsletter />
    </>
  )
}
