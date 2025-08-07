import React from 'react'
import { Star, Plus } from 'lucide-react'

const PopularItems = () => {
  const popularItems = [
    {
      id: 1,
      name: 'Smoked Beef Burger',
      price: '$12.99',
      rating: 4.5,
      image: '🍔',
      category: 'Burgers'
    },
    {
      id: 2,
      name: 'Classic Pancakes',
      price: '$8.99',
      rating: 4.8,
      image: '🥞',
      category: 'Breakfast'
    },
    {
      id: 3,
      name: 'Fish Sandwich',
      price: '$15.99',
      rating: 4.3,
      image: '🥪',
      category: 'Seafood'
    },
    {
      id: 4,
      name: 'Grilled Sandwich',
      price: '$9.99',
      rating: 4.6,
      image: '🥙',
      category: 'Sandwiches'
    },
    {
      id: 5,
      name: 'Cheese Pizza',
      price: '$18.99',
      rating: 4.7,
      image: '🍕',
      category: 'Pizza'
    },
    {
      id: 6,
      name: 'Soup Bowl',
      price: '$7.99',
      rating: 4.4,
      image: '🍲',
      category: 'Soups'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-content-primary mb-4">
            Popular Items
          </h2>
          <p className="text-content-secondary max-w-2xl mx-auto">
            Discover the most loved dishes from our restaurant partners
          </p>
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {popularItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-border-light group cursor-pointer"
            >
              {/* Image */}
              <div className="relative bg-surface-tertiary h-32 flex items-center justify-center">
                <div className="text-4xl">{item.image}</div>
                
                {/* Add button */}
                <button className="absolute bottom-2 right-2 bg-brand-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-600">
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="text-xs text-content-tertiary mb-1">{item.category}</div>
                <h3 className="font-semibold text-content-primary mb-2 text-sm leading-tight">
                  {item.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="font-bold text-brand-primary">{item.price}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-content-secondary">{item.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button className="bg-brand-primary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View All Items
          </button>
        </div>
      </div>
    </section>
  )
}

export default PopularItems
