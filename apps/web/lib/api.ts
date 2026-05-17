import axios from "axios"
import { toast } from "sonner"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Add token to every request
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("primefit_token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

// Handle 401 globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      // Network error
      toast.error("Network error — check your connection")
      return Promise.reject(error)
    }

    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("primefit_token")
        localStorage.removeItem("primefit_user")
        window.location.href = "/login"
      }
    }

    if (error.response?.status === 429) {
      toast.error("Too many requests — please slow down")
    }

    if (error.response?.status >= 500) {
      toast.error("Server error — please try again")
    }

    return Promise.reject(error)
  }
)

export default api