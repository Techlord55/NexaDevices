// src/lib/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

// Helper function to create authenticated API instance for client components
export const createAuthenticatedApi = (token) => {
  const authApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  })
  return authApi
}

// Client-side API functions that accept optional token
export const fetchCategories = async (token = null) => {
  const apiInstance = token ? createAuthenticatedApi(token) : api
  const { data } = await apiInstance.get('/categories/')
  return data
}

export const fetchProducts = async (params, token = null) => {
  const apiInstance = token ? createAuthenticatedApi(token) : api
  const { data } = await apiInstance.get('/products/', { params })
  return data
}

export const fetchProduct = async (slug, token = null) => {
  const apiInstance = token ? createAuthenticatedApi(token) : api
  const { data } = await apiInstance.get(`/products/${slug}/`)
  return data
}

export const createOrder = async (orderData, token) => {
  const apiInstance = createAuthenticatedApi(token)
  const { data } = await apiInstance.post('/orders/', orderData)
  return data
}

export const fetchOrders = async (token) => {
  const apiInstance = createAuthenticatedApi(token)
  const { data } = await apiInstance.get('/orders/')
  return data
}

export const fetchAddresses = async (token) => {
  const apiInstance = createAuthenticatedApi(token)
  const { data } = await apiInstance.get('/addresses/')
  return data
}

export const createAddress = async (address, token) => {
  const apiInstance = createAuthenticatedApi(token)
  const { data } = await apiInstance.post('/addresses/', address)
  return data
}

export default api