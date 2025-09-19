import { createContext, useState, useEffect, ReactNode } from 'react'

// Types
export interface User {
  id: string
  username: string
  email: string
  avatar?: string
}

export interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (credentials: LoginCredentials) => Promise<boolean>
  logout: () => void
}

export interface LoginCredentials {
  username: string
  password: string
}

// Create Context
const AuthContext = createContext<AuthContextType | null>(null)

// AuthProvider Component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check for saved auth on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('manga-user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch {
        localStorage.removeItem('manga-user')
      }
    }
    setIsLoading(false)
  }, [])

  // Mock login function - accepts any credentials for now
  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock user data - accept any username/password
    if (credentials.username && credentials.password) {
      const mockUser: User = {
        id: '1',
        username: credentials.username,
        email: `${credentials.username}@manga.com`,
        avatar: undefined
      }
      
      setUser(mockUser)
      localStorage.setItem('manga-user', JSON.stringify(mockUser))
      setIsLoading(false)
      return true
    }
    
    setIsLoading(false)
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('manga-user')
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }