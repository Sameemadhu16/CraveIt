import React from 'react'

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-primary to-orange-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Are you ready to order with the best deals?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get amazing discounts and fastest delivery right to your doorstep
            </p>
            <button className="bg-white text-brand-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-secondary transition-colors shadow-lg">
              PROCEED TO ORDER
            </button>
          </div>

          {/* Right side - Food illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <div className="text-8xl mb-4">🍔</div>
                  <p className="text-white text-lg font-medium">Delicious Food</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                🍟
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-red-400 rounded-full flex items-center justify-center animate-bounce delay-300">
                🍕
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
