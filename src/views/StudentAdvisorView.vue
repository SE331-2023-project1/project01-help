<script setup lang="ts">
import type { Ref } from 'vue'
import type { TeacherDetail } from '@/type';
import { ref, type PropType } from 'vue';
import StudentService from '@/services/StudentService';

const advisor = ref<TeacherDetail | null>(null)

defineProps({
    advisor: {
        type: Object as PropType<TeacherDetail>,
        required: true
    }
})
</script>


<template>
    <p>Registration from here</p>
    <div>
        <div v-if="advisor">
            <p>
                <span class="font-bold">First Name :</span> {{ advisor.FirstName }}
            </p>
            <p>
                <span class="font-bold">Last Name :</span> {{ advisor.LastName }}
            </p>
            <p>
                <span class="font-bold">Student ID :</span> {{ advisor.Office }}
            </p>
            <p>
                <span class="font-bold mb-10">Registered on :</span> {{ advisor.Email }}
            </p>
        </div>
    </div>
</template>