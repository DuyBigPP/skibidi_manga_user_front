export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reading History</h1>
        <p className="text-muted-foreground">
          Track your reading progress and continue where you left off
        </p>
      </div>
      
      <div className="flex items-center justify-center min-h-[400px] border-2 border-dashed border-muted rounded-lg">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-medium">Reading History</h3>
          <p className="text-muted-foreground">No reading history yet. Start exploring manga!</p>
        </div>
      </div>
    </div>
  )
}