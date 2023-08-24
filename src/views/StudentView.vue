<script setup lang="ts">
import StudentCard from '../components/StudentCard.vue'
import StudentService from '@/services/StudentService'
import type { StudentDetail } from '@/type'
import { ref , computed } from 'vue'
import type { Ref } from 'vue'

const students: Ref<Array<StudentDetail>> = ref([])
const itemsPerPage = 6; 
const currentPage = ref(1);

StudentService.getStudent()
  .then((response) => {
    students.value = response.data;
  })
  .catch((error) => {
    console.error('Error fetching students:', error);
  });

const nextPage = () => {
  if (currentPage.value < Math.ceil(students.value.length / itemsPerPage)) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const displayedStudents = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return students.value.slice(startIndex, endIndex);
});
</script>

<template>
  <div class="student">
    <div class="grid gap-10 grid-cols-3 grid-row-3">
    <StudentCard  v-for="student in displayedStudents" :key="student.id" :student="student"></StudentCard></div>
    <div class="pagination">
      <button  v-if="currentPage > 1" @click="prevPage" 
        class=" ml-px mb-5 px-3 py-2 bg-green-700 font-bold text-white rounded-md hover:bg-red-500 transition-colors duration-200 ease-in-out ">
        ◀ Back</button>
      <button v-if="currentPage < Math.ceil(students.length / itemsPerPage)" @click="nextPage"
        :class="['mb-5 px-3 py-2 bg-green-700 font-bold text-white rounded-md hover:bg-red-500 transition-colors duration-200 ease-in-out', currentPage > 1 ? 'ml-5' : '']">
        Next ▶
      </button>
    </div>
  </div>
</template>