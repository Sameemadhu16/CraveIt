import React, { useState, useEffect, useRef } from 'react'
import { MapPin, Menu, X, ChevronDown } from 'lucide-react'
import logo from '../../assets/home/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState('UCSC Building Complex,35')
  const locationRef = useRef(null)
  
  const locations = [
    'UCSC Building Complex,35',
    'Colombo Central Station',
    'Galle Road, Bambalapitiya',
    'Independence Square',
    'Kandy City Center',
    'Negombo Beach Road',
    'Mount Lavinia Hotel Area',
    'Rajagiriya Junction'
  ]

  const handleLocationSelect = (location) => {
    setSelectedLocation(location)
    setIsLocationOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setIsLocationOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white shadow-sm border-b border-border-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Menu and Location */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-content-secondary hover:text-brand-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Location Selector */}
            <div className="hidden sm:flex items-center relative" ref={locationRef}>
              <button 
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="flex items-center space-x-2 text-content-secondary cursor-pointer hover:text-brand-primary transition-colors"
              >
                <MapPin className="w-5 h-5 text-brand-primary" />
                <span className="text-sm font-medium text-content-secondary">{selectedLocation}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLocationOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Location Dropdown */}
              {isLocationOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-border-light rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    {locations.map((location, index) => (
                      <button
                        key={index}
                        onClick={() => handleLocationSelect(location)}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                          selectedLocation === location ? 'bg-brand-secondary text-brand-primary' : 'text-content-primary'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-brand-primary" />
                          <span className="text-sm">{location}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center - Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="CraveIt Logo" 
              className="h-16 w-36"
            />
          </div>

          {/* Right side - Login and Sign up */}
          <div className="flex items-center space-x-3">
            <button className="hidden sm:block px-4 py-2 text-brand-primary font-medium border border-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition-colors">
              Login
            </button>
            <button className="hidden sm:block px-4 py-2 bg-brand-primary text-white font-medium rounded-lg hover:bg-orange-500 transition-colors">
              Sign up
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="border-t border-border-light py-4">
            <div className="space-y-4">
              {/* Mobile location for small screens */}
              <div className="sm:hidden">
                <button 
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                  className="flex items-center space-x-2 text-content-secondary w-full"
                >
                  <MapPin className="w-5 h-5 text-brand-primary" />
                  <span className="text-sm font-medium text-content-primary">{selectedLocation}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLocationOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Mobile Location Dropdown */}
                {isLocationOpen && (
                  <div className="mt-2 bg-gray-50 rounded-lg">
                    <div className="py-2">
                      {locations.map((location, index) => (
                        <button
                          key={index}
                          onClick={() => handleLocationSelect(location)}
                          className={`w-full text-left px-4 py-2 hover:bg-white transition-colors ${
                            selectedLocation === location ? 'bg-brand-secondary text-brand-primary' : 'text-content-primary'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-brand-primary" />
                            <span className="text-sm">{location}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Mobile auth buttons */}
              <div className="flex flex-col space-y-2 sm:hidden">
                <button className="w-full px-4 py-2 text-brand-primary font-medium border border-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition-colors">
                  Login
                </button>
                <button className="w-full px-4 py-2 bg-brand-primary text-white font-medium rounded-lg hover:bg-orange-500 transition-colors">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
