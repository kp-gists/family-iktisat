import axios from 'axios'

/**
 * Service for interacting with the Stress Quiz API.
 */
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

/**
 * Get stress quiz questions.
 * @returns {Promise<any[]>} A promise that resolves with an array of stress quiz questions.
 */
export const authWithToken = async (token: string) => {
  apiClient.interceptors.request.use(
    config => {
      if (token) {
        config.headers['Authorization'] = token
      }
      return config
    },
    function (error) {
      console.error(`${error}`)
      return Promise.reject(error)
    }
  )
  const response = await apiClient.post('/api/iktisat-user/auth-with-token')
  return response.data
}

export const updateStripeCustomerId = async (
  customerId: string,
  token: string
) => {
  apiClient.interceptors.request.use(
    config => {
      if (token) {
        config.headers['Authorization'] = token
      }
      return config
    },
    function (error) {
      console.error(`${error}`)
      return Promise.reject(error)
    }
  )
  const response = await apiClient.post('/api/iktisat-user-update', {
    stripe_customer_id: customerId
  })
  return response.data
}
