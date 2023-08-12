<template>

    <div class="StudentDetail-class
                border-2 border-blue-950 w20-h20
                rounded-lg
                shadow-lg
                m-5
                bg-white px-10 py-8
                text-blue-950 
                text-base
                font-mono
                hover:bg-blue-50 
                cursor-pointer" >
      <span> First Name: {{ StudentDetail.name }}</span>
      <p>Last Name: {{ StudentDetail.surName }}</p>
      <p>Student ID: {{ StudentDetail.id }}</p>
      <p>Registered: {{ StudentDetail.register }}</p>
      <p>Advisor: {{ StudentDetail.advisor }}</p>
    </div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'
const StudentDetail = ref({})
</script>

<style scoped>
/* .StudentDetail-class {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1 px solid #39495c;
  margin-top: 20px;
  margin-bottom: 18px;
}

.StudentDetail-class:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
} */
</style>
