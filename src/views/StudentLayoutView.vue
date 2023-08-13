<script setup lang="ts">
import type { Ref } from 'vue'
import type { StudentDetail} from '@/type';
import { ref, type PropType } from 'vue';
import StudentService from '@/services/StudentService';
import { useRouter } from 'vue-router';

const student = ref<StudentDetail | null>(null)
const router = useRouter()

const props = defineProps({
    id: String
})


StudentService.getStudentById(Number(props.id)).then((response) => {
    student.value = response.data
}).catch(error => {
    console.log(error)
    if (error.response && error.response.status === 404) {
        router.push({ name: '404-resource', params: { resource: 'student' } })
    } else {
        router.push({ name: 'network-error' })
    }
})

</script>

<template>
    <div>
      <div v-if="student">
        <h1 class="text-2xl font-bold -mt-10 mb-5">{{ `${student.FirstName} ${student.LastName}` }}</h1>
        <img class="mb-5" :src = "student.stu_pic" alt="img">
        <hr class="mb-5">
        <div id="nav">
            <RouterLink class="mb-2 block w-11" :to="{ name: 'student-detail', params: { id } }">Details</RouterLink>
            <RouterLink class="mb-2 block w-11" :to="{ name: 'student-advisor', params: { id } }">Advisor</RouterLink>
        </div>
        <p>
            <span class="font-bold">First Name :</span> {{ student.FirstName }}
        </p>
        <p>
            <span class="font-bold">Last Name :</span> {{ student.LastName }}
        </p>
        <p>
            <span class="font-bold">Student ID :</span> {{ student.Student_ID }}
        </p>
        <p>
            <span class="font-bold mb-10">Registered on :</span> {{ student.registered }}
        </p>
      </div>
    </div>
  </template>