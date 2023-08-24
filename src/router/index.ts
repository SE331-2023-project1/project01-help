import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import TeacherView from '../views/TeacherView.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import StudentService from '@/services/StudentService'
import type { StudentDetail, TeacherDetail } from '@/type'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'students',
      component: StudentView
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: TeacherView
    }
  ]
})

// Start the progress bar on navigation
router.beforeEach(() => {
  NProgress.start()
})

// Complete the progress bar after navigation
router.afterEach(() => {
  NProgress.done()
})


// const fetchStudents = async () => {
//   try {
//     const response = await StudentService.getStudent();
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching students:', error);
//     return [];
//   }
// };

// router.beforeEach(async () => {
//   const studentData: StudentDetail[] = await fetchStudents();
//   StudentService.getStudent(studentData);
// })

// const fetchTeacher = async () => {
//   try {
//     const response = await TeacherService.getTeacher();
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching Teacher:', error);
//     return [];
//   }
// };

// router.beforeEach(async () => {
//   const TeacherData: TeacherDetail[] = await fetchTeacher();
//   StudentService.getStudent(TeacherData);
// })





export default router
