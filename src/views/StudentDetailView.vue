<script setup lang="ts">
import type { Ref } from 'vue'
import type { StudentDetail } from '@/type';
import { ref, type PropType } from 'vue';
import StudentService from '@/services/StudentService';

defineProps({
    student: {
        type: Object as PropType<StudentDetail>,
        require: true
    }
})
</script>

<template>
    <div>
        <div v-if="student">
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