import StudentService from '@/services/StudentService'
import type { StudentDetail } from '@/type'
import axios from 'axios'
import { defineStore } from 'pinia'
import { useTeacherStore } from './teacher'

export const useStudentStore = defineStore('student', {
  state: () => ({
    students: [] as StudentDetail[]
  }),
  getters: {
    getStudent: (state) => state.students,
    getStudentByPage: (state) => (perPage: number, page: number) => {
      const startIndex = (page - 1) * perPage
      const endIndex = startIndex + perPage
      return state.students.slice(startIndex, endIndex)
    },
    getStudentById: (state) => async (id: number) => {
      const response = state.students.find((student) => student.id === id)
      // console.log(response.data)
      return new Promise<StudentDetail | null>((resolve) => {
        resolve(response || null)
      })
    },
    getStudentsByTeacherId: (state) => async (teacherId: string) => {
      const teacherStore = useTeacherStore()
      const teacher = teacherStore.getTeacherById(teacherId)

      if (!teacher) {
        return Promise.resolve([])
      }

      const students = state.students.filter((student) => student.teacherID === teacherId)
      return Promise.resolve(students)
    }
  },
  actions: {
    setStudent(students: StudentDetail[]) {
      this.students = students
    },
    async fetchStudents() {
      try {
        return this.students
      } catch (error) {
        console.log(error)
        return null
      }
    },
    async fetchStudentsFromDB() {
      const response = await StudentService.getStudent()
      this.setStudent(response.data)
    },
    async fetchStudentById(id: string) {
      try {
        const response = this.getStudentById(id)
        return response
      } catch (error) {
        console.log(error)
        return null
      }
    },
    async addStudent(student: StudentDetail) {
      try {
        console.log(student)
        // ส่ง POST request ไปยัง URL ของ API สำหรับการเพิ่มนักเรียน
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/student', student)

        if (response.status === 201) {
          // การเพิ่มนักเรียนสำเร็จ
          this.students.push(student) // เพิ่ม student ใน array
        } else {
          // การเพิ่มนักเรียนไม่สำเร็จ
          console.error('การเพิ่มนักเรียนไม่สำเร็จ')
        }
      } catch (error) {
        console.error(error)
        console.error('เกิดข้อผิดพลาดในการส่งคำขอหรือตอบกลับจาก API:', error)
      }
    }
  }
})
