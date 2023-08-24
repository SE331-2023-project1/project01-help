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


const newComment = ref('');
const flashMessage = ref({
  text: '',
  isVisible: false,
});


const comments = ref<string[]>([]);
const addComment = () => {
  if (newComment.value.trim() !== '') {
    comments.value.push(newComment.value);
    newComment.value = ''; 
  
    flashMessage.value.text = 'Comment added successfully';
    flashMessage.value.isVisible = true;
    
    setTimeout(() => {
      flashMessage.value.isVisible = false;
    }, 2000);
  }
};

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

    <!-- Add Comment Box -->
    <div class="mt-5 ">
      <textarea class="text-black border-2 border-slate-800" v-model="newComment" rows="5" placeholder="Type your comment"></textarea>
      <div class="mt-2 "><button class="ml-px px-3 py-0.5 bg-cyan-950 font-bold text-white rounded-md  "  @click="addComment">Add Comment</button></div>
    </div>

    <!-- Show Comments -->
    <div v-if="comments.length > 0" class="comment-list">
      <div v-for="comment in comments" :key="comment" class="comment">
        {{ comment }}
      </div>
    </div>

     <!-- Flash Message -->
     <div class="text-orange-300">
     <div v-if="flashMessage.isVisible" class="flash-message">
      {{ flashMessage.text }}
    </div></div>
  
 
    
</template>