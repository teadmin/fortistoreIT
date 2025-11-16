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

  return (
    <>
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
