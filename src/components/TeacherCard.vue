<template>
    <div class="border-2 border-white-w20-h20 bg-blue-500">
      <span> First Name: {{ teacherDetail.name }}</span>
      <p>Last Name: {{ teacherDetail.surName }}</p>
      <p>Advisor ID: {{ teacherDetail.id }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  const teacherDetail = ref({})
  </script>
  
  <style scoped>
  /* .teacherDetail-class {
    width: 250px;
    cursor: pointer;
    border: 1 px solid #39495c;
    margin-top: 20px;
    margin-bottom: 18px;
  } */
  
  .teacherDetail-class:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
  </style>
  