import React from 'react'

const FeaturedRestaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: 'Taco Bell',
      logo: '🌮',
      bgColor: 'bg-purple-600',
      textColor: 'text-white'
    },
    {
      id: 2,
      name: 'Baskin Robbins',
      logo: '🍦',
      bgColor: 'bg-pink-500',
      textColor: 'text-white'
    },
    {
      id: 3,
      name: 'Starbucks',
      logo: '☕',
      bgColor: 'bg-green-700',
      textColor: 'text-white'
    },
    {
      id: 4,
      name: 'Burger King',
      logo: '👑',
      bgColor: 'bg-blue-600',
      textColor: 'text-white'
    },
    {
      id: 5,
      name: "McDonald's",
      logo: '🍟',
      bgColor: 'bg-yellow-500',
      textColor: 'text-black'
    },
    {
      id: 6,
      name: 'Dunkin Donuts',
      logo: '🍩',
      bgColor: 'bg-pink-600',
      textColor: 'text-white'
    },
    {
      id: 7,
      name: 'Popeyes',
      logo: '🍗',
      bgColor: 'bg-orange-600',
      textColor: 'text-white'
    },
    {
      id: 8,
      name: 'KFC',
      logo: '🍗',
      bgColor: 'bg-red-600',
      textColor: 'text-white'
    }
  ]

  return (
    <section className="py-16 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-content-primary mb-4">
            Featured Restaurants
          </h2>
          <p className="text-content-secondary max-w-2xl mx-auto">
            Order from your favorite restaurant brands
          </p>
        </div>

        {/* Restaurants grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className={`${restaurant.bgColor} ${restaurant.textColor} rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg`}
            >
              <div className="text-4xl mb-4">{restaurant.logo}</div>
              <h3 className="font-bold text-lg">{restaurant.name}</h3>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button className="bg-brand-primary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View All Restaurants
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedRestaurants
