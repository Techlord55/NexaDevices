// src/components/home/PromoSection.tsx
import { Truck, Shield, Headphones, CreditCard } from 'lucide-react'

export default function PromoSection() {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $50',
    },
    {
      icon: Shield,
      title: '2 Year Warranty',
      description: 'On all products',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated support team',
    },
    {
      icon: CreditCard,
      title: 'Secure Payment',
      description: 'Multiple payment options',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-lighter">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-electric/10 rounded-full mb-4">
                <feature.icon className="text-electric" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
