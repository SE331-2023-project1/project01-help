<script setup lang="ts">
import TeacherCard from '../components/TeacherCard.vue';


</script>
<template>
  <main>
    <TeacherCard />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .teacher {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
