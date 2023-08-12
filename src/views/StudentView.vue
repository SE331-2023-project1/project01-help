<template>
  <div class="student">
    <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
  </div>
</template>

<script setup lang="ts">
import StudentCard from '../components/StudentCard.vue'
import StudentService from '@/services/StudentService'
import type { StudentDetail } from '@/type'
import { ref } from 'vue'
import type { Ref } from 'vue'
const students: Ref<Array<StudentDetail>> = ref([])
StudentService.getStudent()
  .then((response) => {
    students.value = response.data
  })
  .catch((error) => {
    console.error('Error fetching students:', error)
  })
</script>