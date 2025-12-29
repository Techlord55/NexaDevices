// src/components/home/CategoryGrid.jsx
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function CategoryGrid({ categories }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.slice(0, 8).map((category, index) => (
        <Link
          key={category.id}
          href={`/products?category=${category.slug}`}
          data-aos="fade-up"
          data-aos-delay={index * 50}
          className="card group overflow-hidden"
        >
          <div className="aspect-square relative bg-dark-light">
            {category.image && (
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-semibold mb-1 group-hover:text-electric transition-colors">
                {category.name}
              </h3>
              <div className="flex items-center text-sm text-gray-400">
                <span>{category.product_count} products</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}