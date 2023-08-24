import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import AdvisorView from '../views/AdvisorView.vue'
import addPersonView from '../views/addPersonView.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import StudentLayoutView from '../views/StudentLayoutView.vue'
import StudentDetailView from '../views/StudentDetailView.vue'
import StudentAdvisorView from '../views/StudentAdvisorView.vue'

import { useTeacherStore } from '@/stores/teacher'
import { useStudentStore } from '@/stores/student'


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
        },
        {
          path: '/addPerson',
          name: 'addPerson',
          component: addPersonView,
          props: true
        }
      ]
    },
    {
        path: '/addPerson',
        name: 'addPerson',
        component: addPersonView,
        props: true
    }
  ]
});

router.beforeEach(async () => {
  NProgress.start()
  const teacherStore = useTeacherStore()
  const studentStore = useStudentStore()
  if (teacherStore.teachers.length === 0) {
    await teacherStore.fetchTeachersFromDB()
  }
  if (studentStore.students.length === 0) {
    await studentStore.fetchStudentsFromDB()
  }
})

// Start the progress bar on navigation
router.beforeEach(() => {
  NProgress.start()
})

// Complete the progress bar after navigation
router.afterEach(() => {
  NProgress.done()
})

export default router