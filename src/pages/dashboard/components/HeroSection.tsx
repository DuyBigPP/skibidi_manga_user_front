import { useState } from 'react'
import { Search, Play, BookOpen, Star, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { featuredManga } from '@/mockdata'

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to search page with query
      console.log('Searching for:', searchQuery)
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="relative container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-3 py-1">
                ✨ Featured Today
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Discover Amazing
                <span className="block text-primary">Manga Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Read thousands of manga titles from your favorite genres. 
                Start your journey into incredible worlds today.
              </p>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex gap-2 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search manga titles, authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Button type="submit" size="lg" className="h-12 px-6">
                Search
              </Button>
            </form>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <span><strong>10,000+</strong> Manga</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-primary" />
                <span><strong>50M+</strong> Reads</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                <span><strong>4.8/5</strong> Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Manga */}
          <div className="lg:justify-self-end">
            <Card className="overflow-hidden max-w-sm mx-auto shadow-2xl border-2">
              <div className="relative">
                <img
                  src={featuredManga.coverImage}
                  alt={featuredManga.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="destructive" className="shadow-lg">
                    #{1} Trending
                  </Badge>
                  <Badge variant="secondary" className="shadow-lg">
                    {featuredManga.status}
                  </Badge>
                </div>

                {/* Play button overlay */}
                <Button
                  size="lg"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full h-16 w-16 shadow-2xl"
                >
                  <Play className="h-6 w-6 ml-1" />
                </Button>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{featuredManga.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {featuredManga.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{featuredManga.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({(featuredManga.bookmarkCount / 1000).toFixed(0)}k)
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Ch. {featuredManga.latestChapter}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {featuredManga.genres.slice(0, 3).map((genre) => (
                    <Badge key={genre} variant="outline" className="text-xs">
                      {genre}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full" size="lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Start Reading
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}