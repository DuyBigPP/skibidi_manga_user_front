import { Tag, ArrowRight, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { genres } from '@/mockdata'

export function PopularGenres() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500 text-white">
              <Tag className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Popular Genres</h2>
              <p className="text-muted-foreground">Explore by your favorite categories</p>
            </div>
          </div>
          <Button variant="outline">
            All Genres
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
          {genres.map((genre) => (
            <Card key={genre.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 text-center space-y-3">
                {/* Genre Icon/Color */}
                <div className={`mx-auto w-12 h-12 rounded-full ${genre.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  <BookOpen className="h-5 w-5" />
                </div>

                {/* Genre Name */}
                <div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {genre.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {(genre.mangaCount / 1000).toFixed(1)}k titles
                  </p>
                </div>

                {/* Description (hidden on small screens) */}
                <p className="text-xs text-muted-foreground line-clamp-2 hidden sm:block">
                  {genre.description}
                </p>

                {/* Hover effect */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="ghost" className="h-7 text-xs">
                    Explore
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Browse by mood section */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-lg font-semibold mb-4">Browse by Mood</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: '🔥 Action-Packed', count: 1250 },
              { label: '💕 Romance', count: 890 },
              { label: '😂 Comedy', count: 650 },
              { label: '🌟 Fantasy Adventure', count: 920 },
              { label: '😱 Horror Thriller', count: 340 },
              { label: '🌸 Slice of Life', count: 560 },
              { label: '🚀 Sci-Fi', count: 420 },
              { label: '⚔️ Historical', count: 380 }
            ].map((mood) => (
              <Button
                key={mood.label}
                variant="outline"
                size="sm"
                className="h-8 text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {mood.label}
                <span className="ml-2 text-muted-foreground">
                  ({mood.count})
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}