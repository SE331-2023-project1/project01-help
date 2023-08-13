import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import TeacherView from '../views/TeacherView.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

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

export default router
