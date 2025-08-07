import React from 'react'

const CuisineSearch = () => {
  const cuisines = [
    {
      id: 1,
      name: 'Italian',
      emoji: '🍝',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-300'
    },
    {
      id: 2,
      name: 'Mexican',
      emoji: '🌮',
      bgColor: 'bg-red-100',
      borderColor: 'border-red-300'
    },
    {
      id: 3,
      name: 'Chinese',
      emoji: '🥢',
      bgColor: 'bg-yellow-100',
      borderColor: 'border-yellow-300'
    },
    {
      id: 4,
      name: 'Thai',
      emoji: '🍜',
      bgColor: 'bg-orange-100',
      borderColor: 'border-orange-300'
    },
    {
      id: 5,
      name: 'Indian',
      emoji: '🍛',
      bgColor: 'bg-purple-100',
      borderColor: 'border-purple-300'
    },
    {
      id: 6,
      name: 'Japanese',
      emoji: '🍱',
      bgColor: 'bg-pink-100',
      borderColor: 'border-pink-300'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-content-primary mb-2">
              Search by Cuisines
            </h2>
            <p className="text-content-secondary">
              Explore different food cultures
            </p>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex space-x-2">
            <button className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
              ←
            </button>
            <button className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
              →
            </button>
          </div>
        </div>

        {/* Cuisines grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {cuisines.map((cuisine) => (
            <div
              key={cuisine.id}
              className={`${cuisine.bgColor} ${cuisine.borderColor} border-2 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer`}
            >
              <div className="text-4xl mb-3">{cuisine.emoji}</div>
              <h3 className="font-semibold text-content-primary text-sm">
                {cuisine.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CuisineSearch
