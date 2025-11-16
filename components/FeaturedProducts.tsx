import Link from 'next/link'
import { Product } from '@/lib/supabase'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

interface FeaturedProductsProps {
  products: Product[]
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/prodotto/${product.slug}`}
          className="product-card group"
        >
          {/* Image Placeholder */}
          <div className="relative bg-gray-100 aspect-square flex items-center justify-center overflow-hidden">
            <div className="text-6xl font-bold text-gray-300">
              {product.model.split('-')[0]}
            </div>

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.new && (
                <span className="badge-new">Novità</span>
              )}
              {product.popular && (
                <span className="badge-popular">Più Venduto</span>
              )}
              {product.discount_price && (
                <span className="badge-discount">
                  Sconto {Math.round((1 - product.discount_price / product.price) * 100)}%
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="absolute bottom-3 right-3">
              {product.in_stock ? (
                <span className="flex items-center gap-1 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  <FiCheckCircle size={12} />
                  Disponibile
                </span>
              ) : (
                <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                  Non disponibile
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="text-xs text-gray-500 mb-1">{product.category}</div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-fortinet-red transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {product.short_description}
            </p>

            {/* Features */}
            <ul className="text-xs text-gray-600 space-y-1 mb-4">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-fortinet-red mt-0.5">•</span>
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-4">
              {product.discount_price ? (
                <>
                  <span className="text-2xl font-bold text-fortinet-red">
                    €{product.discount_price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    €{product.price}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-gray-900">
                  €{product.price}
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between text-fortinet-red group-hover:translate-x-1 transition-transform">
              <span className="text-sm font-semibold">Visualizza Dettagli</span>
              <FiArrowRight />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default FeaturedProducts
