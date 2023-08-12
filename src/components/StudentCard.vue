<template>
  <div class="detailStudent-class">
    <div class="detailStudent-class">
      <span> First Name: {{ detailStudent.name }}</span>
      <p>Last Name: {{ detailStudent.surName }}</p>
      <p>Student ID: {{ detailStudent.id }}</p>
      <p>Registered: {{ detailStudent.register }}</p>
      <p>Advisor: {{ detailStudent.advisor }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const detailStudent = ref({})
</script>

<style scoped>
.detailStudent-class {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1 px solid #39495c;
  margin-top: 20px;
  margin-bottom: 18px;
}

.detailStudent-class:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
