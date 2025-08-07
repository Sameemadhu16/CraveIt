import React from 'react'

const Restaurants = () => {
  return (
    <div className="min-h-screen bg-background-base py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-content-primary mb-8">Restaurants</h1>
        
        {/* Search and Filter */}
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search restaurants..."
              className="flex-1 px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
            <select className="px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary">
              <option>All Cuisines</option>
              <option>Italian</option>
              <option>Chinese</option>
              <option>Indian</option>
              <option>Mexican</option>
            </select>
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="card hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-full h-48 bg-surface-tertiary rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold text-content-primary mb-2">
                Restaurant {item}
              </h3>
              <p className="text-content-secondary mb-3">
                Delicious food with great service and amazing atmosphere.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-brand-primary font-medium">⭐ 4.5</span>
                <span className="text-content-tertiary">30-45 min</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Restaurants
