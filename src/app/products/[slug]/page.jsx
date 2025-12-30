// src/app/products/[slug]/page.jsx
import { fetchProduct } from '@/lib/api'
import ProductDetail from '@/components/products/ProductDetail'

export async function generateMetadata({ params }) {
  // FIXED: Await params in Next.js 15+
  const resolvedParams = await params
  
  try {
    const product = await fetchProduct(resolvedParams.slug)
    return {
      title: `${product.name} | ElectroStore`,
      description: product.description.substring(0, 160),
      openGraph: {
        images: [product.primary_image || ''],
      },
    }
  } catch {
    return {
      title: 'Product Not Found | ElectroStore',
    }
  }
}

export default async function ProductPage({ params }) {
  // FIXED: Await params in Next.js 15+
  const resolvedParams = await params
  
  try {
    const product = await fetchProduct(resolvedParams.slug)
    return <ProductDetail product={product} />
  } catch (error) {
    // Handle error gracefully
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <a
          href="/products"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Browse All Products
        </a>
      </div>
    )
  }
}