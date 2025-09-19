import { Clock, BookOpen, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { recentlyUpdated } from '@/mockdata'

function formatTimeAgo(dateString: string): string {
  const now = new Date()
  const date = new Date(dateString)
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
  
  if (diffInHours < 1) return 'Just now'
  if (diffInHours < 24) return `${diffInHours}h ago`
  const diffInDays = Math.floor(diffInHours / 24)
  return `${diffInDays}d ago`
}

export function RecentlyUpdated() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Recently Updated</h2>
              <p className="text-muted-foreground">Fresh chapters just released</p>
            </div>
          </div>
          <Button variant="outline">
            View All Updates
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentlyUpdated.map((manga) => (
            <Card key={manga.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex gap-4 p-4">
                  {/* Cover Image */}
                  <div className="relative overflow-hidden rounded-lg flex-shrink-0">
                    <img
                      src={manga.coverImage}
                      alt={manga.title}
                      className="w-16 h-20 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 space-y-2">
                    <div>
                      <h3 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {manga.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Chapter {manga.latestChapter}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {manga.genres[0]}
                      </Badge>
                      <span className="text-xs text-green-500 font-medium">
                        {formatTimeAgo(manga.updatedAt)}
                      </span>
                    </div>

                    <Button size="sm" variant="ghost" className="h-7 px-2 text-xs w-full justify-start">
                      <BookOpen className="h-3 w-3 mr-1" />
                      Continue Reading
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Updates
          </Button>
        </div>
      </div>
    </section>
  )
}