<template>
    <div class="border-2 border-slate-600 w20-h20
                rounded-lg
                shadow-lg
                m-5
              bg-white px-10 py-8
              text-slate-800 
                text-base
                font-mono
              hover:bg-slate-300 
                cursor-pointer" >
      <span> First Name: {{ advisor.FirstName }}</span>
    <p>Last Name: {{ advisor.LastName }}</p>
    <p>Department: {{ advisor.Department}}</p>
    <p>Email: {{ advisor.Email }}</p>
    <p>Office: {{ advisor.Office}}</p>
    <img class="mt-5" :src = "advisor.advisor_pic" alt="img">
    </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import {type AdvisorDetail } from '@/type';

const AdvisorDetail= ref({})
const props = defineProps({
  advisor:{
  type: Object as PropType<AdvisorDetail>,
  required:true
}
})
</script>

<style scoped>
.advisorDetail-class {
padding: 20px;
width: 250px;
cursor: pointer;
border: 1 px solid #39495c;
margin-top: 20px;
margin-bottom: 18px;
}

.advisorDetail-class:hover {
transform: scale(1.01);
box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>