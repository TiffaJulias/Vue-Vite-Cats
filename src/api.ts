import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.api-ninjas.com/v1',
  headers: {
    'X-Api-Key': import.meta.env.VITE_API_KEY as string
  },
  timeout: 5000
})

