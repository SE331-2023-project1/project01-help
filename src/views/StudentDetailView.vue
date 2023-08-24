<script setup lang="ts">
import type { Ref } from 'vue'
import type { StudentDetail } from '@/type';
import { ref, type PropType, computed } from 'vue';
import StudentService from '@/services/StudentService';
import { useMessageStore } from '@/stores/message';

const props = defineProps({
  student: {
    type: Object as PropType<StudentDetail>,
    require: true
  }
})

const store = useMessageStore();
const message = computed(() => store.getMessage(String(props.student?.id)));
const detail = computed(() => store.getDetail(String(props.student?.id)));
const newDetail = ref("");
const flashMessage = ref({
  text: '',
  isVisible: false,
});

function addDetail() {
  store.addDetail(String(props.student?.id), newDetail.value);
  //clear input box
  newDetail.value = "";
}

flashMessage.value.text = 'The Student Details Are Here....';
flashMessage.value.isVisible = true;

setTimeout(() => {
  flashMessage.value.isVisible = false;
}, 2000);


</script>

<template>
  <div class="text-center">
    <div v-if="student">
      <p>
        <span class="font-mono font-semibold">First Name :</span> {{ student.FirstName }}
      </p>
      <p>
        <span class="font-mono font-semibold">Last Name :</span> {{ student.LastName }}
      </p>
      <p>
        <span class="font-mono font-semibold">Student ID :</span> {{ student.Student_ID }}
      </p>
      <p>
        <span class="font-mono font-semibold mb-10">Registered on :</span> {{ student.registered }}
      </p>
    </div>
  </div>

  <!-- Add Comment Box ... -->
  <div v-if="detail && detail.length">
    <h1 class=" text-center font-mono font-semibold">Comment :</h1>
    <p v-for="(details, index) in detail" :key="index">" {{ details }} "</p>
  </div>
  <div class="mt-4 ">
    <div class="addDetail">
      <input class="border-2 border-inherit" type="text" v-model="newDetail" placeholder="Type your comment .." />

      <button @click="addDetail" class="mt-2 w-36 text-center ml-px px-3 py-0.5 bg-gray-800  font-bold text-white rounded-md  hover:bg-gray-500 transition-colors duration-200 ease-in-out font-mono ">Add Comment</button>

    </div>
  </div>
  <div>
    
  </div>
  <!-- Flash Message -->

  <div v-if="flashMessage.isVisible" class="mt-4">
    <div class="bg-orange-200 text-orange-800 p-2 rounded">
      {{ flashMessage.text }}
    </div>
  </div>
</template>