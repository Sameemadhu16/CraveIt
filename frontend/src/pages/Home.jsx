import React from 'react'
import HeroSection from '../components/home/HeroSection'
import FoodCategories from '../components/home/FoodCategories'
import PopularItems from '../components/home/PopularItems'
import FeaturedRestaurants from '../components/home/FeaturedRestaurants'
import CuisineSearch from '../components/home/CuisineSearch'
import DealsSection from '../components/home/DealsSection'
import CallToAction from '../components/home/CallToAction'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FoodCategories />
      <PopularItems />
      <FeaturedRestaurants />
      <CuisineSearch />
      <DealsSection />
      <CallToAction />
    </div>
  )
}
