import React from 'react'
import { Search } from 'lucide-react'
import heroImage from '../../assets/home/image1.png'

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
             style={{
               backgroundImage: `url(${heroImage})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat'
             }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-orange-500/10 to-orange-600/20"></div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main content centered */}
        <div className="flex flex-col items-center justify-center space-y-6 py-16">
          {/* Location pin icon */}
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Search bar */}
          <div className="bg-white rounded-full w-full max-w-2xl shadow-2xl">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search for dishes or restaurants..."
                className="flex-1 px-8 py-5 text-content-primary placeholder-content-secondary focus:outline-none text-lg font-fontFamily-primary bg-transparent"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white p-3 mr-2 rounded-full font-small transition-colors shrink-0">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
