import React from "react"
import { Route, Navigate } from "react-router-dom"
import { MenuItem } from "@/config/menu"

// Use Vite's glob import to get all page components
const modules = import.meta.glob('../pages/**/index.tsx')

// Generate routes recursively from menu items
export const generateRoutes = (items: MenuItem[]): React.ReactElement[] => {
  const routes: React.ReactElement[] = []

  items.forEach((item) => {
    // Skip items that are just parents with children
    if (!item.children || item.children.length === 0) {
      const modulePath = `../pages${item.path}/index.tsx`
      const moduleLoader = modules[modulePath]
      
      if (moduleLoader) {
        const Component = React.lazy(() => moduleLoader() as Promise<{ default: React.ComponentType }>)
        
        routes.push(
          <Route 
            key={item.path} 
            path={item.path.replace(/^\/+/, '')} 
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Component />
              </React.Suspense>
            } 
          />
        )
      } else {
        console.warn(`No component found for path: ${item.path}`)
      }
    } else {
      // Handle parent with children - redirect to first child
      routes.push(
        <Route 
          key={item.path} 
          path={item.path.replace(/^\/+/, '')} 
          element={<Navigate to={item.children[0].path} replace />} 
        />
      )
      
      // Generate routes for children
      const childRoutes = generateRoutes(item.children)
      routes.push(...childRoutes)
    }
  })

  return routes
}
