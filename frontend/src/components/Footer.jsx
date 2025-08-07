import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-surface-secondary border-t border-border-light mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-brand-primary mb-4">CraveIt</h3>
            <p className="text-content-secondary">
              Your favorite food delivery app. Order from the best restaurants in your area.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-content-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-content-secondary hover:text-brand-primary transition-colors">Home</a></li>
              <li><a href="/restaurants" className="text-content-secondary hover:text-brand-primary transition-colors">Restaurants</a></li>
              <li><a href="/about" className="text-content-secondary hover:text-brand-primary transition-colors">About</a></li>
              <li><a href="/contact" className="text-content-secondary hover:text-brand-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-content-primary mb-4">Contact Info</h4>
            <p className="text-content-secondary">
              Email: support@craveit.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        <div className="border-t border-border-light mt-8 pt-6 text-center text-content-tertiary">
          <p>&copy; 2025 CraveIt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
