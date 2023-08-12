<template>

    <div class="StudentDetail-class
                border-2 border-slate-600 w20-h20
                rounded-lg
                shadow-lg
                m-5
                bg-slate-100 px-10 py-8
                text-slate-800 
                text-base
                font-mono
                hover:bg-slate-300 
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
