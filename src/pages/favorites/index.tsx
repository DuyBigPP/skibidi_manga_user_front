export default function FavoritesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Favorites</h1>
        <p className="text-muted-foreground">
          Your favorite manga collection
        </p>
      </div>
      
      <div className="flex items-center justify-center min-h-[400px] border-2 border-dashed border-muted rounded-lg">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-medium">Favorites List</h3>
          <p className="text-muted-foreground">No favorites yet. Start reading some manga!</p>
        </div>
      </div>
    </div>
  )
}