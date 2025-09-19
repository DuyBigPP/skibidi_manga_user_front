import { BookOpen, Clock, MoreHorizontal } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { userReadingProgress, mangas } from '@/mockdata'

function formatTimeAgo(dateString: string): string {
  const now = new Date()
  const date = new Date(dateString)
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
  
  if (diffInHours < 1) return 'Just now'
  if (diffInHours < 24) return `${diffInHours}h ago`
  const diffInDays = Math.floor(diffInHours / 24)
  return `${diffInDays}d ago`
}

export function ContinueReading() {
  const continueReadingData = userReadingProgress.map(progress => {
    const manga = mangas.find(m => m.id === progress.mangaId)
    return { ...progress, manga }
  }).filter(item => item.manga)

  if (continueReadingData.length === 0) {
    return (
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No reading history yet</h3>
            <p className="text-muted-foreground mb-4">Start reading some manga to see your progress here</p>
            <Button>Browse Manga</Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white">
              <BookOpen className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Continue Reading</h2>
              <p className="text-muted-foreground">Pick up where you left off</p>
            </div>
          </div>
          <Button variant="outline">View All History</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {continueReadingData.map((item) => (
            <Card key={item.mangaId} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={item.manga!.coverImage}
                    alt={item.manga!.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Progress overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-white text-xs">
                        <span>Chapter {item.chapterNumber}</span>
                        <span>{Math.round(item.totalProgress)}%</span>
                      </div>
                      <Progress value={item.totalProgress} className="h-1" />
                    </div>
                  </div>

                  {/* Menu button */}
                  <div className="absolute top-2 right-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-black/50 hover:bg-black/70 text-white">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Mark as Read</DropdownMenuItem>
                        <DropdownMenuItem>Remove from History</DropdownMenuItem>
                        <DropdownMenuItem>Add to Favorites</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                      {item.manga!.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {item.manga!.genres[0]}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {formatTimeAgo(item.lastReadAt)}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    Chapter {item.chapterNumber} • Page {item.pageNumber}
                  </div>

                  <Button size="sm" className="w-full">
                    <BookOpen className="h-3 w-3 mr-2" />
                    Continue Reading
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reading stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-background rounded-lg border">
            <div className="text-2xl font-bold text-primary">
              {userReadingProgress.length}
            </div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </div>
          <div className="text-center p-4 bg-background rounded-lg border">
            <div className="text-2xl font-bold text-green-500">45</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
          <div className="text-center p-4 bg-background rounded-lg border">
            <div className="text-2xl font-bold text-blue-500">1,850</div>
            <div className="text-sm text-muted-foreground">Chapters Read</div>
          </div>
          <div className="text-center p-4 bg-background rounded-lg border">
            <div className="text-2xl font-bold text-purple-500">15</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </div>
        </div>
      </div>
    </section>
  )
}