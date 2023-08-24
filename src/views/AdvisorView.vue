<script setup lang="ts">
import AdvisorCard from '@/components/AdvisorCard.vue'
import AdvisorService from '@/services/AdvisorService'
import type { AdvisorDetail } from '@/type'
import { ref , computed } from 'vue'
import type { Ref } from 'vue'

const advisors: Ref<Array<AdvisorDetail>> = ref([])
const itemsPerPage = 5; 
const currentPage = ref(1);

AdvisorService.getAdvisor()
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
    <AdvisorCard v-for="advisor in displayedadvisors" :key="advisor.id" :advisor="advisor"></AdvisorCard>
    <div class="pagination">
      <button v-if="currentPage > 1" @click="prevPage" 
        class="ml-5 mb-5 px-3 py-2 bg-green-700 font-bold text-white rounded-md hover:bg-red-500 transition-colors duration-200 ease-in-out">
        ◀ Back
      </button>
      <button v-if="currentPage < Math.ceil(advisors.length / itemsPerPage)" @click="nextPage"
        class="ml-5 mb-5 px-3 py-2 bg-green-700 font-bold text-white rounded-md hover:bg-red-500 transition-colors duration-200 ease-in-out">
        Next ▶
      </button>
    </div>
  </div>
</template>