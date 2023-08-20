import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { StudentDetail } from '@/type'

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
    getStudent(): Promise<AxiosResponse<StudentDetail[]>> {
      return apiClient.get<StudentDetail[]>('/student')
    },
    getStudentById(id : number) : Promise<AxiosResponse<StudentDetail>>{
      return apiClient.get<StudentDetail>('student/'+ id.toString())
    }
  }