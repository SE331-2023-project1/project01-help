import AdvisorService from "@/services/AdvisorService";
import type { AdvisorDetail } from "@/type";
import axios from "axios";
import { defineStore } from "pinia";

export const useTeacherStore = defineStore('teacher', {
    state: () => ({
        teachers: [] as AdvisorDetail []
    }),
    getters: {
        getTeachers: (state) => state.teachers,
        getTeacherByPage: (state) => (perPage: number, page: number) => {
            const startIndex = (page - 1) * perPage;
            const endIndex = startIndex + perPage;
            return state.teachers.slice(startIndex, endIndex);
        },
        getTeacherById: (state) => async (id: string) => {
            const response = state.teachers.find(teacher => teacher.id === id)
            console.log(response)
            return new Promise<AdvisorDetail | null>((resolve) => {
                resolve(response || null)
            })
        }
       
    },
    actions: {
        setTeacher(teachers: AdvisorDetail[]) {
            this.teachers = teachers
        },
        async fetchTeachersFromDB() {
            const response = await AdvisorService.getAdvisor()

            this.setTeacher(response.data)
            
        },
        async fetchTeacherById(id: number) {
            try {
                const response = this.getTeacherById(id)
                return response
            } catch (error) {
                console.log(error)
                return null
            }
        },
        async fetchTeacherByPage(perPage: number, page: number) {
            try {
                const response = this.getTeacherByPage(perPage, page)
                return response
            } catch (error) {
                console.log(error)
                return null
            }
        },
        
        async addTeacher(advisor: AdvisorDetail) {
            try {
              
              const requestData = {
                id: advisor.id,
                name: advisor.FirstName,
                surname: advisor.LastName,
                profileimage: advisor.advisor_pic,
              };
          
              const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/advisor', advisor);
          
              if (response.status === 201) {
                this.teachers.push(advisor)
                
              } else {
                console.error('Can not add advisor');
              }

            } catch (error) {
                console.error(error)
                console.error('Have error with request or API:', error);
            }
          },
  
        
    }
})