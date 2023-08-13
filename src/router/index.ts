import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import TeacherView from '../views/TeacherView.vue'
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
      path: '/teacher',
      name: 'teacher',
      component: TeacherView
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
          path: 'advisor',
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

export default router
