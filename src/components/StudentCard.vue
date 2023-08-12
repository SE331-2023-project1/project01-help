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
                <span> First Name: {{ student.FirstName }}</span>
      <p>Last Name: {{ student.LastName }}</p>
      <p>Student ID: {{ student.Student_ID}}</p>
      <p>Registered: {{ student.registered }}</p>
      <p>Advisor: {{ student.advisor}}</p>
      <!-- <img src="Student." alt=""> -->
</div>

</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import {type StudentDetail } from '@/type';

const StudentDetail= ref({})
const props = defineProps({
  student:{
    type: Object as PropType<StudentDetail>,
    required:true
  }
})
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
