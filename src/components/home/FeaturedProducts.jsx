// src/components/home/FeaturedProducts.jsx
import ProductCard from '../products/ProductCard'

export default function FeaturedProducts({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div key={product.id} data-aos="fade-up" data-aos-delay={index * 50}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}