import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { productsData } from '@/lib/products-data'
import { FiShoppingCart, FiMail, FiPhone, FiCheckCircle, FiTruck, FiShield, FiAward } from 'react-icons/fi'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = productsData.find((p) => p.slug === params.slug)

  if (!product) {
    return {
      title: 'Prodotto non trovato',
    }
  }

  return {
    title: product.meta_title,
    description: product.meta_description,
    keywords: product.meta_keywords,
    openGraph: {
      title: product.meta_title,
      description: product.meta_description,
      type: 'product',
      images: [
        {
          url: product.image_url,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = productsData.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="container-custom">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-fortinet-red">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/prodotti" className="hover:text-fortinet-red">Prodotti</Link>
            <span className="mx-2">/</span>
            <Link href={`/categoria/${product.category.toLowerCase()}`} className="hover:text-fortinet-red">
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Main Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center mb-4">
                <div className="text-9xl font-bold text-gray-300">
                  {product.model.split('-')[0]}
                </div>
              </div>

              {/* Badges */}
              <div className="flex gap-2 mb-4">
                {product.new && <span className="badge-new">Novità</span>}
                {product.popular && <span className="badge-popular">Più Venduto</span>}
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FiShield className="text-fortinet-red" />
                  <span>Prodotto Originale</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FiTruck className="text-fortinet-red" />
                  <span>Spedizione Gratuita</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FiAward className="text-fortinet-red" />
                  <span>Garanzia Ufficiale</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FiCheckCircle className="text-fortinet-red" />
                  <span>Supporto Tecnico</span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-gray-500">{product.category}</span>
                {product.subcategory && (
                  <span className="text-sm text-gray-500"> • {product.subcategory}</span>
                )}
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="mb-6">
                <span className="text-sm text-gray-600">Modello: </span>
                <span className="text-sm font-semibold text-gray-900">{product.model}</span>
              </div>

              <p className="text-lg text-gray-600 mb-6">
                {product.description}
              </p>

              {/* Stock Status */}
              <div className="mb-6">
                {product.in_stock ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <FiCheckCircle size={20} />
                    <span className="font-semibold">Disponibile in magazzino</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="font-semibold">Non disponibile</span>
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl">
                <div className="flex items-baseline gap-3 mb-2">
                  {product.discount_price ? (
                    <>
                      <span className="text-4xl font-bold text-fortinet-red">
                        €{product.discount_price.toLocaleString('it-IT')}
                      </span>
                      <span className="text-xl text-gray-400 line-through">
                        €{product.price.toLocaleString('it-IT')}
                      </span>
                      <span className="badge-discount">
                        Risparmi €{(product.price - product.discount_price).toLocaleString('it-IT')}
                      </span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-gray-900">
                      €{product.price.toLocaleString('it-IT')}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">IVA esclusa</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 mb-8">
                <Link
                  href={`/preventivo?prodotto=${product.slug}`}
                  className="btn-primary text-center text-lg"
                >
                  <FiMail className="inline mr-2" />
                  Richiedi Preventivo Gratuito
                </Link>
                <a
                  href="tel:+390212345678"
                  className="btn-outline text-center text-lg"
                >
                  <FiPhone className="inline mr-2" />
                  Chiama per Ordinare
                </a>
              </div>

              {/* Additional Info */}
              <div className="border-t pt-6 space-y-3 text-sm text-gray-600">
                <p>✓ Spedizione gratuita per ordini superiori a €500</p>
                <p>✓ Consegna in 24-48 ore nelle principali città</p>
                <p>✓ Assistenza tecnica specializzata in italiano</p>
                <p>✓ Installazione e configurazione disponibile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specifications */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Caratteristiche Principali</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="text-fortinet-red flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Specifiche Tecniche</h2>
              <div className="bg-white rounded-xl p-6">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr key={index} className="border-b last:border-b-0">
                        <td className="py-3 pr-4 font-semibold text-gray-900">{key}</td>
                        <td className="py-3 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">
              {product.name}: La Scelta Ideale per la Tua Azienda
            </h2>
            <p className="text-gray-600 mb-4">
              {product.description}
            </p>
            <p className="text-gray-600">
              Disponibile per acquisto immediato con consegna rapida in tutta Italia, incluse le principali città
              come Roma, Milano, Torino, Napoli, Bologna, Firenze e molte altre. FortiStore Italia offre supporto
              completo pre e post vendita, assistenza tecnica specializzata e servizi di installazione professionali.
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Prodotti Correlati</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/prodotto/${relatedProduct.slug}`}
                  className="product-card group"
                >
                  <div className="bg-gray-100 aspect-square flex items-center justify-center">
                    <div className="text-4xl font-bold text-gray-300">
                      {relatedProduct.model.split('-')[0]}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2 group-hover:text-fortinet-red transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      {relatedProduct.discount_price ? (
                        <>
                          <span className="text-lg font-bold text-fortinet-red">
                            €{relatedProduct.discount_price}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            €{relatedProduct.price}
                          </span>
                        </>
                      ) : (
                        <span className="text-lg font-bold">
                          €{relatedProduct.price}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
