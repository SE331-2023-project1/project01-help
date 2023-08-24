import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { AdvisorDetail } from '@/type'

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
    getAdvisor(): Promise<AxiosResponse<AdvisorDetail[]>> {
      return apiClient.get<AdvisorDetail[]>('/advisor')
    },
    getAdvisorById(id : number) : Promise<AxiosResponse<AdvisorDetail>>{
      return apiClient.get<AdvisorDetail>('advisor/'+ id.toString())
    }
  }