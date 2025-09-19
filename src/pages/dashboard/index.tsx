import { HeroSection } from './components/HeroSection'
import { TrendingSection } from './components/TrendingSection'
import { RecentlyUpdated } from './components/RecentlyUpdated'
import { PopularGenres } from './components/PopularGenres'
import { ContinueReading } from './components/ContinueReading'

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Continue Reading Section */}
      <ContinueReading />
      
      {/* Trending Section */}
      <TrendingSection />
      
      {/* Recently Updated Section */}
      <RecentlyUpdated />
      
      {/* Popular Genres Section */}
      <PopularGenres />
    </div>
  )
}
