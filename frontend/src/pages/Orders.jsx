import React from 'react'

const Orders = () => {
  return (
    <div className="min-h-screen bg-background-base py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-content-primary mb-8">Your Orders</h1>
        
        {/* Orders List */}
        <div className="space-y-6">
          {[1, 2, 3].map((order) => (
            <div key={order} className="card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-content-primary">
                    Order #{order}00{order}
                  </h3>
                  <p className="text-content-secondary">Restaurant Name</p>
                </div>
                <span className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                  Delivered
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-content-secondary">2x Margherita Pizza</span>
                  <span className="text-content-primary">$24.98</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-content-secondary">1x Caesar Salad</span>
                  <span className="text-content-primary">$12.99</span>
                </div>
              </div>
              
              <div className="border-t border-border-light pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-content-secondary">Total: $37.97</span>
                  <div className="space-x-2">
                    <button className="btn-secondary">Reorder</button>
                    <button className="btn-primary">Rate</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {false && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📦</div>
            <h2 className="text-2xl font-semibold text-content-primary mb-2">No orders yet</h2>
            <p className="text-content-secondary mb-6">Start ordering from your favorite restaurants!</p>
            <button className="btn-primary">Browse Restaurants</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders
