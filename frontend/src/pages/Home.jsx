import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background-base">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-light to-brand-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-content-primary mb-6">
            Craving Something Delicious?
          </h1>
          <p className="text-xl text-content-secondary mb-8 max-w-2xl mx-auto">
            Order from your favorite restaurants and get it delivered fresh to your door.
          </p>
          <button className="btn-primary text-lg px-8 py-3">
            Order Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-content-primary mb-12">
            Why Choose CraveIt?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-content-primary mb-2">Fast Delivery</h3>
              <p className="text-content-secondary">Get your food delivered in 30 minutes or less.</p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍕</span>
              </div>
              <h3 className="text-xl font-semibold text-content-primary mb-2">Quality Food</h3>
              <p className="text-content-secondary">Fresh ingredients from the best restaurants in town.</p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold text-content-primary mb-2">Easy Payment</h3>
              <p className="text-content-secondary">Multiple payment options for your convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Browse our restaurant partners and find your next meal.
          </p>
          <button className="bg-white text-brand-primary font-medium py-3 px-8 rounded-lg hover:bg-surface-secondary transition-colors">
            Browse Restaurants
          </button>
        </div>
      </section>
    </div>
  )
}
