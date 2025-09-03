import React from "react"
import { Route, Navigate } from "react-router-dom"
import { MenuItem } from "@/config/menu"

// Function to convert path to component path
const pathToComponentPath = (path: string): string => {
  // Remove leading slash and convert to component path
  const cleanPath = path.replace(/^\/+/, '')
  return `../pages/${cleanPath}/index.tsx`
}

// Function to dynamically import component
const importComponent = (componentPath: string) => {
  return React.lazy(() => import(componentPath))
}

// Generate routes recursively from menu items
export const generateRoutes = (items: MenuItem[]): React.ReactElement[] => {
  const routes: React.ReactElement[] = []

  items.forEach((item) => {
    // Skip items that are just parents with children
    if (!item.children || item.children.length === 0) {
      const Component = importComponent(pathToComponentPath(item.path))
      
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
