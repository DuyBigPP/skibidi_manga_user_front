import { TrendingUp, Star, Eye, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { trendingManga } from '@/mockdata'

export function TrendingSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 text-white">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Trending This Week</h2>
              <p className="text-muted-foreground">Most popular manga right now</p>
            </div>
          </div>
          <Button variant="outline">View All</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {trendingManga.map((manga, index) => (
            <Card key={manga.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img
                  src={manga.coverImage}
                  alt={manga.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Trending rank badge */}
                <div className="absolute top-2 left-2">
                  <Badge 
                    variant={index === 0 ? "destructive" : index === 1 ? "default" : "secondary"}
                    className="shadow-lg font-bold"
                  >
                    #{index + 1}
                  </Badge>
                </div>

                {/* Status badge */}
                <div className="absolute top-2 right-2">
                  <Badge 
                    variant={manga.status === 'ongoing' ? 'default' : 'secondary'}
                    className="shadow-lg text-xs"
                  >
                    {manga.status}
                  </Badge>
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Read button on hover */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <Button size="sm" className="shadow-lg">
                    <BookOpen className="h-3 w-3 mr-1" />
                    Read Now
                  </Button>
                </div>
              </div>

              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {manga.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    by {manga.author}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{manga.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Eye className="h-3 w-3" />
                    <span>{(manga.viewCount / 1000000).toFixed(1)}M</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {manga.genres.slice(0, 2).map((genre) => (
                    <Badge key={genre} variant="outline" className="text-xs py-0 px-1">
                      {genre}
                    </Badge>
                  ))}
                  {manga.genres.length > 2 && (
                    <Badge variant="outline" className="text-xs py-0 px-1">
                      +{manga.genres.length - 2}
                    </Badge>
                  )}
                </div>

                <div className="text-xs text-muted-foreground">
                  Chapter {manga.latestChapter}
                  {manga.status === 'ongoing' && (
                    <span className="text-green-500 ml-1">• Updated</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}