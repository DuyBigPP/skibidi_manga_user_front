export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-extrabold text-foreground mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">Key metrics at a glance</p>
      </header>

      {/* Cards Section */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-card-foreground">Card 1</h2>
            <p className="text-sm text-muted-foreground">Key metric details</p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-card-foreground">Card 2</h2>
            <p className="text-sm text-muted-foreground">Key metric details</p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-card-foreground">Card 3</h2>
            <p className="text-sm text-muted-foreground">Key metric details</p>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-card-foreground">Sales Chart</h2>
          <div className="h-64 flex items-center justify-center text-muted-foreground">[Chart Placeholder]</div>
        </div>
      </section>

      {/* Table Section */}
      <section>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-card-foreground">Recent Activity</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-muted-foreground">User</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-muted-foreground">Action</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-muted-foreground">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2 text-sm text-foreground">Alice</td>
                  <td className="px-4 py-2 text-sm text-foreground">Login</td>
                  <td className="px-4 py-2 text-sm text-foreground">2025-03-25</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-foreground">Bob</td>
                  <td className="px-4 py-2 text-sm text-foreground">Update Profile</td>
                  <td className="px-4 py-2 text-sm text-foreground">2025-03-24</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
