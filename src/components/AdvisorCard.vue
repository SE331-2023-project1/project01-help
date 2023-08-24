<template>
    <div class=" AdviorDetail-class
                  border-2 border-blue-950 w20-h20
                  rounded-lg
                  shadow-lg
                  mt-5 mb-5 w-250px
                  bg-white pd-10 py-8
                  text-blue-950 
                  text-base
                  font-mono
                  flex flex-col justify-center items-center" >
      <span class="font-bold"> First Name: </span>{{ advisor.FirstName }}
    <p class="font-bold">Last Name: </p>{{ advisor.LastName }}
    <p class="font-bold">Department: </p>{{ advisor.Department}}
    <p class="font-bold">Email: </p>{{ advisor.Email }}
    <p class="font-bold">Office: </p>{{ advisor.Office}}
    <img class="mt-5 w-20 h-20" :src = "advisor.advisor_pic" alt="img">
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

