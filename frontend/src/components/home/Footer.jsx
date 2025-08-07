import React from 'react'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-content-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">CraveIt</h3>
            <p className="text-white/80 mb-6 max-w-md">
              CraveIt is a food delivery service that brings your favorite meals right to your doorstep. 
              Order from thousands of restaurants and enjoy fast, reliable delivery.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-primary" />
                <span className="text-white/80">123 Food Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-primary" />
                <span className="text-white/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-primary" />
                <span className="text-white/80">support@craveit.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-primary transition-colors">Restaurants</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-brand-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-primary transition-colors">Safety</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-primary transition-colors">Partner with us</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/80 hover:text-brand-primary transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-white/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-white/80">Follow us:</span>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-brand-primary transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-brand-primary transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-brand-primary transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex items-center space-x-4">
              <span className="text-white/80">Get updates:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
                <button className="bg-brand-primary hover:bg-orange-600 px-6 py-2 rounded-r-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 mt-8 text-center">
          <p className="text-white/60">
            © 2025 CraveIt. All rights reserved. | Made with ❤️ for food lovers
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
