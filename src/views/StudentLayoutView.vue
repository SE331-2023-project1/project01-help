<script setup lang="ts">
import type { Ref } from 'vue'
import type { StudentDetail, AdvisorDetail} from '@/type';
import { ref, type PropType } from 'vue';
import { useRouter } from 'vue-router';
import StudentService from '@/services/StudentService';
import AdvisorService from '@/services/AdvisorService';

const student = ref<StudentDetail | null>(null)
const advisor = ref<AdvisorDetail | null>(null);

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

AdvisorService.getAdvisorById(Number(props.id)).then((response) => {
    advisor.value = response.data
}).catch(error => {
    console.log(error)
    if (error.response && error.response.status === 404) {
        router.push({ name: '404-resource', params: { resource: 'advisor' } })
    } else {
        router.push({ name: 'network-error' })
    }
});

</script>

<template>
    <div class="text-center">
      <div v-if="student">
        <h1 class="text-2xl font-mono font-semibold mt-5 mb-5">{{ `${student.FirstName} ${student.LastName}` }}</h1>
        <img class="mb-5 max-w-full mx-auto" :src="student.stu_pic" alt="img">
        <hr class="mb-5">
        <div id="nav">
            <RouterLink class="w-1/2 mr-3 text-blue-100 font-mono font-semibold py-2 rounded text-center " 
            :to="{ name: 'student-detail', params: { id } }">Details</RouterLink>
            <span class="text-gray-350">|</span>
            <RouterLink class="w-1/2 ml-3 text-blue-100 font-mono font-semibold py-2 rounded text-center"
            :to="{ name: 'student-advisor', params: { id, advisorId: student.advisor } }">Advisor</RouterLink>
        </div>
    </div>
    <RouterView class="mt-3 mb-6" :student="student"></RouterView>
    <div class="mt-10"><RouterLink class=" ml-px px-3 py-2 bg-sky-800  font-bold text-white rounded-md  hover:bg-sky-300 transition-colors duration-200 ease-in-out" to="/">◀ Back to Students</RouterLink></div>
  </div>
</template>