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
            <RouterLink class="w-1/2 mr-3 text-green-500 py-2 rounded text-center" :to="{ name: 'student-detail', params: { id } }">Details</RouterLink>
            <span class="text-gray-350">|</span>
            <RouterLink class="w-1/2 ml-3 text-green-500 py-2 rounded text-center" :to="{ name: 'student-advisor', params: { id } }">Advisor</RouterLink>
        </div>
      </div>
      <RouterView class="mt-3" :student="student"></RouterView>
    </div>
</template>