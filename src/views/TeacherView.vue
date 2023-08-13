<script setup lang="ts">
import TeacherCard from '@/components/TeacherCard.vue'
import TeacherService from '@/services/TeacherService'
import type { TeacherDetail } from '@/type'
import { ref , computed } from 'vue'
import type { Ref } from 'vue'

const advisors: Ref<Array<TeacherDetail>> = ref([])
const itemsPerPage = 5; 
const currentPage = ref(1);

TeacherService.getTeacher()
  .then((response) => {
    advisors.value = response.data;
  })
  .catch((error) => {
    console.error('Error fetching advisors:', error);
  });

const nextPage = () => {
  if (currentPage.value < Math.ceil(advisors.value.length / itemsPerPage)) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const displayedadvisors = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return advisors.value.slice(startIndex, endIndex);
});
</script>

<template>
  <div class="advisor">
    <TeacherCard v-for="advisor in displayedadvisors" :key="advisor.id" :advisor="advisor"></TeacherCard>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">PrevPage</button>
      <button @click="nextPage" :disabled="currentPage === Math.ceil(advisors.length / itemsPerPage)">NextPage</button>
    </div>
  </div>
</template>

