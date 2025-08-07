import React from 'react'

const FoodCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Pizza Hut',
      discount: '20%',
      emoji: '🍕',
      subtitle: 'Fast Delivery'
    },
    {
      id: 2,
      name: 'Spicy Bites',
      discount: '10%',
      emoji: '🌶️',
      subtitle: 'Spicy Collection'
    },
    {
      id: 3,
      name: 'Green Vegi',
      discount: '25%',
      emoji: '🥗',
      subtitle: 'Fresh Vegetables'
    },
    {
      id: 4,
      name: 'Tasty Plate',
      discount: '20%',
      emoji: '🍽️',
      subtitle: 'Special Items'
    }
  ]

  return (
    <section className="py-12 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              {/* Discount badge */}
              <div className="absolute top-4 left-4 bg-brand-primary text-white text-sm font-bold px-2 py-1 rounded-lg">
                {category.discount} OFF
              </div>
              
              {/* Content */}
              <div className="text-center mt-8">
                <div className="text-4xl mb-3">{category.emoji}</div>
                <h3 className="font-bold text-content-primary mb-1 group-hover:text-brand-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-content-tertiary">{category.subtitle}</p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-brand-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoodCategories
