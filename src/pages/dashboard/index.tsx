import { DataTable } from "@/components/common/DataTable"
import { 
  createSortableColumn, 
  createActionsColumn, 
  createStatusColumn,
  createDateColumn 
} from "@/components/common/DataTableHelpers"
import { ColumnDef } from "@tanstack/react-table"

// Sample data type
type User = {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "inactive" | "pending"
  createdAt: string
  lastLogin: string
}

// Sample data
const sampleUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "active",
    createdAt: "2024-01-15",
    lastLogin: "2024-09-04"
  },
  {
    id: "2", 
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "active",
    createdAt: "2024-02-20",
    lastLogin: "2024-09-03"
  },
  {
    id: "3",
    name: "Mike Johnson", 
    email: "mike@example.com",
    role: "Editor",
    status: "inactive",
    createdAt: "2024-03-10",
    lastLogin: "2024-08-15"
  },
  {
    id: "4",
    name: "Sarah Wilson",
    email: "sarah@example.com", 
    role: "User",
    status: "pending",
    createdAt: "2024-08-28",
    lastLogin: "2024-09-01"
  },
  {
    id: "5",
    name: "David Brown",
    email: "david@example.com",
    role: "Admin", 
    status: "active",
    createdAt: "2024-06-12",
    lastLogin: "2024-09-04"
  }
]

export default function DashboardPage() {
  // Define columns with better alignment and sizing using helpers
  const columns: ColumnDef<User>[] = [
    createSortableColumn("name", "Name", {
      size: 150,
      className: "font-medium"
    }),
    createSortableColumn("email", "Email", {
      size: 200,
      className: "text-muted-foreground"
    }),
    createSortableColumn("role", "Role", {
      size: 100,
      className: "font-medium"
    }),
    createStatusColumn("status", {
      active: { label: "Active", variant: "default" },
      inactive: { label: "Inactive", variant: "secondary" }, 
      pending: { label: "Pending", variant: "outline" }
    }, { size: 100 }),
    createDateColumn("createdAt", "Created At", { size: 120 }),
    createDateColumn("lastLogin", "Last Login", { size: 120 }),
    createActionsColumn<User>({
      onView: (user) => console.log("View user:", user),
      onEdit: (user) => console.log("Edit user:", user),
      onDelete: (user) => console.log("Delete user:", user)
    }, { size: 80 })
  ]

  return (
    <div className="space-y-8">

      {/* Cards Section */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-card-foreground">Total Users</h2>
            <p className="text-2xl font-bold text-primary">{sampleUsers.length}</p>
            <p className="text-sm text-muted-foreground">Active users in system</p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-card-foreground">Active Users</h2>
            <p className="text-2xl font-bold text-green-600">
              {sampleUsers.filter(u => u.status === 'active').length}
            </p>
            <p className="text-sm text-muted-foreground">Currently online</p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-card-foreground">Pending Users</h2>
            <p className="text-2xl font-bold text-yellow-600">
              {sampleUsers.filter(u => u.status === 'pending').length}
            </p>
            <p className="text-sm text-muted-foreground">Awaiting approval</p>
          </div>
        </div>
      </section>

      {/* DataTable Section */}
      <section>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-card-foreground">User Management</h2>
          <DataTable
            columns={columns}
            data={sampleUsers}
            searchKey="name"
            searchPlaceholder="Search users..."
            onRowClick={(row) => console.log("Row clicked:", row.original)}
          />
        </div>
      </section>
    </div>
  )
}
