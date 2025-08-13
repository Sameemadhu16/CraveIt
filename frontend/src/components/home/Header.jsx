import React, { useState, useEffect, useRef } from 'react'
import { MapPin, Menu, X, ChevronDown, Search, User, LogIn, LogOut } from 'lucide-react'
import logo from '../../assets/home/logo.svg'
import locations from '../../list/location.js'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { toast } from 'react-toastify'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState('Select Location')
  const [searchTerm, setSearchTerm] = useState('')
  const locationRef = useRef(null)

  const navigate = useNavigate()
  const { currentUser, logout } = useAuth()

  const hadleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  const handleLogout = async () => {
    try {
      await logout()
      toast.success('Logged out successfully!')
      navigate('/')
    } catch (error) {
      toast.error('Failed to log out')
    }
  }

  // Filter locations based on search term
  const filteredLocations = locations.filter(location =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleLocationSelect = (location) => {
    setSelectedLocation(location)
    setIsLocationOpen(false)
    setSearchTerm('')
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
      <div className="max-w-full mx-auto pl-2 sm:pl-4 lg:pl-6 pr-0">
        <div className="flex justify-between items-center h-16 relative">
          {/* Left side - Menu and Location */}
          <div className="flex items-center space-x-2 absolute left-2 sm:left-4 lg:left-6">
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-content-secondary hover:text-brand-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Location Selector */}
            <div className="hidden sm:flex items-center relative ml-4" ref={locationRef}>
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
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-border-light rounded-lg shadow-lg z-50">
                  {/* Search input */}
                  <div className="p-3 border-b border-border-light">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-content-tertiary w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search for your location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm"
                        autoFocus
                      />
                    </div>
                  </div>
                  
                  {/* Location list */}
                  <div className="py-2 max-h-64 overflow-y-auto">
                    {filteredLocations.length > 0 ? (
                      filteredLocations.map((location, index) => (
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
                      ))
                    ) : (
                      <div className="px-4 py-2 text-sm text-content-tertiary">
                        No locations found
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center - Logo */}
          <div className="flex items-center absolute left-1/2 transform -translate-x-1/2">
            <img 
              src={logo} 
              alt="CraveIt Logo" 
              className="h-32 w-64"
            />
          </div>

          {/* Right side - Login and Sign up / User Menu */}
          <div className="flex items-center space-x-2 absolute right-2 sm:right-4 lg:right-6">
            {currentUser ? (
              // Show user info and logout when authenticated
              <>
                <span className="hidden sm:block text-sm text-gray-700">
                  Welcome, {currentUser.displayName || currentUser.email}
                </span>
                <button 
                  onClick={handleLogout}
                  className="hidden sm:flex items-center space-x-2 px-3 py-2 text-red-600 font-medium border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              // Show login/signup when not authenticated
              <>
                <button onClick={hadleLoginClick} 
                className="hidden sm:flex items-center space-x-2 px-3 py-2 text-brand-primary font-medium border border-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition-colors">
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </button>
                <button onClick={handleSignUpClick} 
                className="hidden sm:flex items-center space-x-2 px-3 py-2 bg-brand-primary text-white font-medium rounded-lg hover:bg-orange-500 transition-colors">
                  <User className="w-4 h-4" />
                  <span>Sign up</span>
                </button>
              </>
            )}
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
                    {/* Mobile Search input */}
                    <div className="p-3 border-b border-gray-200">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-content-tertiary w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search for your location..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm bg-white"
                        />
                      </div>
                    </div>
                    
                    {/* Mobile Location list */}
                    <div className="py-2 max-h-48 overflow-y-auto">
                      {filteredLocations.length > 0 ? (
                        filteredLocations.map((location, index) => (
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
                        ))
                      ) : (
                        <div className="px-4 py-2 text-sm text-content-tertiary">
                          No locations found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Mobile auth buttons */}
              <div className="flex flex-col space-y-2 sm:hidden">
                {currentUser ? (
                  // Mobile logout when authenticated
                  <>
                    <div className="text-center text-sm text-gray-700 py-2">
                      Welcome, {currentUser.displayName || currentUser.email}
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-red-600 font-medium border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  // Mobile login/signup when not authenticated
                  <>
                    <button 
                      onClick={hadleLoginClick}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-brand-primary font-medium border border-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition-colors"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </button>
                    <button 
                      onClick={handleSignUpClick}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-brand-primary text-white font-medium rounded-lg hover:bg-orange-500 transition-colors"
                    >
                      <User className="w-4 h-4" />
                      <span>Sign up</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
