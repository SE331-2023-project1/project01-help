<template>
  <RouterLink :to="{ name: 'student-detail', params: { id: student.id } }">
    <div v-if="student" class="StudentDetail-class">
      <div class="StudentDetail-class
                  border-2 border-blue-950 w20-h20
                  rounded-lg
                  shadow-lg
                  mt-5 mb-5 w-250px
                  bg-white pd-10 py-8
                  text-blue-950 
                  text-base
                  font-mono
                  hover:bg-blue-50 
                  cursor-pointer
                  flex flex-col justify-center items-center" >
          <span class="font-bold text-xl"> {{ `${student.FirstName.toUpperCase()} ${student.LastName.toUpperCase()}` }}</span>
          <hr class="font-bold w-20 mt-4 border-blue-950">
          <img class="mt-5 w-20 h-20" :src = "student.stu_pic" alt="img">
      </div>
    </div>
  </RouterLink>
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
  
<!-- <style scoped>
.StudentDetail-class {
  width: 300px;
  cursor: pointer;
}
  
.StudentDetail-class:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style> -->