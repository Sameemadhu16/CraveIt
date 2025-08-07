import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-brand-primary">CraveIt</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-content-secondary hover:text-brand-primary transition-colors">
              Home
            </a>
            <a href="/restaurants" className="text-content-secondary hover:text-brand-primary transition-colors">
              Restaurants
            </a>
            <a href="/orders" className="text-content-secondary hover:text-brand-primary transition-colors">
              Orders
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="btn-primary">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
