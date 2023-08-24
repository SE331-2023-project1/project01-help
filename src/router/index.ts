import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import AdvisorView from '../views/AdvisorView.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import StudentLayoutView from '../views/StudentLayoutView.vue'
import StudentDetailView from '../views/StudentDetailView.vue'
import StudentAdvisorView from '../views/StudentAdvisorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'students',
      component: StudentView
    },
    {
      path: '/advisor',
      name: 'advisor',
      component: AdvisorView
    },
    {
      path: '/student/:id',
      name: 'student-layout',
      component: StudentLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'student-detail',
          component: StudentDetailView,
          props: true
        },
        {
          path: 'advisor/:advisorId',
          name: 'student-advisor',
          component: StudentAdvisorView,
          props: true
        }
      ]
    }
  ]
});

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
