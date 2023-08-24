<script setup lang="ts">
import type { Ref } from 'vue'
import type { StudentDetail } from '@/type';
import { ref, type PropType, computed } from 'vue';
import StudentService from '@/services/StudentService';
import { useMessageStore } from '@/stores/message';

const props=defineProps({
    student: {
        type: Object as PropType<StudentDetail>,
        require: true
    }
})

const store = useMessageStore();
const message = computed(() => store.getMessage(String(props.student?.id)));
const detail = computed(() => store.getDetail(String(props.student?.id)));
const newDetail = ref("");
function addDetail() {
  store.addDetail(String(props.student?.id), newDetail.value);
  //clear input box
  newDetail.value = "";
}



</script>

<template>

    <div>
        <div v-if="student ">
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
 <!-- Add Comment Box ... -->
    <div v-if="detail && detail.length">
    <h1 class=" text-center font-mono font-semibold">Student Detail</h1>
    <p v-for="(details, index) in detail" :key="index">" {{ details }} "</p>
  </div>
  <div class="addDetail">
    <input type="text" v-model="newDetail" placeholder="Add Student Detail.." />
    <button @click="addDetail">Add Detail</button>
  </div>
 
\
    
</template>