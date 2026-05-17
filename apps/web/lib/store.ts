import { create } from "zustand"

interface User {
  id: string
  name: string
  email: string
  role: string
  tenantId: string
  gymName: string
}

interface AuthStore {
  user: User | null
  token: string | null
  setAuth: (user: User, token: string) => void
  clearAuth: () => void
  isAuthenticated: () => boolean
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  token: null,

  setAuth: (user, token) => {
    localStorage.setItem("primefit_token", token)
    localStorage.setItem("primefit_user", JSON.stringify(user))
    set({ user, token })
  },

  clearAuth: () => {
    localStorage.removeItem("primefit_token")
    localStorage.removeItem("primefit_user")
    set({ user: null, token: null })
  },

  isAuthenticated: () => {
  const token = get().token ?? localStorage.getItem("primefit_token")
  if (!token) return false

  // Check if token is expired
  try {
    const payload = JSON.parse(atob(token.split(".")[1]))
    if (payload.exp * 1000 < Date.now()) {
      localStorage.removeItem("primefit_token")
      localStorage.removeItem("primefit_user")
      return false
    }
  } catch {
    return false
  }

  return true
},
}))