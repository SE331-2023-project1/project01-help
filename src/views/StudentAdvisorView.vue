<script setup lang="ts">
import type { Ref } from 'vue'
import type { TeacherDetail } from '@/type';
import { ref, type PropType } from 'vue';
import AdvisorService from '@/services/AdvisorService';

const advisor = ref<TeacherDetail| null>(null)

defineProps({
    advisor: {
        type: Object as PropType<TeacherDetail>,
        require: true
    }
})
</script>

<template>
    <div>
        <div v-if="advisor">
            <p>
                <span class="font-bold">Student ID:</span> {{ advisor.FirstName }}
            </p>
            <p>
                <span class="font-bold">Registered on:</span> {{ advisor.LastName }}
            </p>
            <p>
                <span class="font-bold">Advisor teacher:</span> {{ advisor.Department }}
            </p>
        </div>
    </div>
</template>