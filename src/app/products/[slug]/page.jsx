// src/app/products/[slug]/page.jsx
import { fetchProduct } from '@/lib/api'
import ProductDetail from '@/components/products/ProductDetail'

export async function generateMetadata({ params }) {
  try {
    const product = await fetchProduct(params.slug)
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
  const product = await fetchProduct(params.slug)
  
  return <ProductDetail product={product} />
}