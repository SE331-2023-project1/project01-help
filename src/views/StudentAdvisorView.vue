<script setup lang="ts">
import AdvisorCard from '@/components/AdvisorCard.vue'
import { ref, onMounted } from 'vue'
import AdvisorService from '@/services/AdvisorService'
import type { AdvisorDetail } from '@/type'
import { useRouter, useRoute } from 'vue-router'

const advisorId = useRoute().params.advisorId
const advisor = ref<AdvisorDetail | null>(null)

AdvisorService.getAdvisorById(Number(advisorId))
  .then((response) => {
    advisor.value = response.data as AdvisorDetail // Explicitly cast the type
  })
  .catch((error) => {
    console.error('Error fetching advisor:', error)
  })
</script>

<template>
    <div class="flex justify-start -ml-5">
      <AdvisorCard :advisor="advisor"></AdvisorCard>
    </div>
</template>

<!-- <style scoped>
.advisor-card-container {
  display: flex;
  justify-content: flex-start;
  margin-left: -20px;
}
</style> -->