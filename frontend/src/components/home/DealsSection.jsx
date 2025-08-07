import React from 'react'

const DealsSection = () => {
  const deals = [
    {
      id: 1,
      title: 'Best deals',
      subtitle: 'Crispy',
      description: 'Check out our latest deals and tasty restaurant options.',
      buttonText: 'Order now',
      bgColor: 'bg-green-600',
      image: '🥗'
    },
    {
      id: 2,
      title: 'Celebrate parties with',
      subtitle: 'Fried Chicken',
      description: 'Check out our latest deals and tasty restaurant options.',
      buttonText: 'Order now',
      bgColor: 'bg-orange-600',
      image: '🍗'
    },
    {
      id: 3,
      title: 'Wanna eat hot & spicy',
      subtitle: 'Pizza?',
      description: 'Check out our latest deals and tasty restaurant options.',
      buttonText: 'Order now',
      bgColor: 'bg-red-600',
      image: '🍕'
    }
  ]

  return (
    <section className="py-16 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {deals.map((deal, index) => (
          <div
            key={deal.id}
            className={`${deal.bgColor} rounded-3xl overflow-hidden shadow-lg`}
          >
            <div className={`grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12 ${
              index % 2 === 1 ? 'lg:grid-cols-2' : ''
            }`}>
              {/* Text content */}
              <div className={`text-white ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  {deal.title}
                </h3>
                <h4 className="text-3xl lg:text-4xl font-bold mb-4 text-yellow-300">
                  {deal.subtitle}
                </h4>
                <p className="text-white/90 mb-6 text-lg">
                  {deal.description}
                </p>
                <button className="bg-white text-content-primary px-8 py-3 rounded-lg font-medium hover:bg-surface-secondary transition-colors">
                  {deal.buttonText}
                </button>
              </div>

              {/* Image */}
              <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="text-8xl">{deal.image}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DealsSection
