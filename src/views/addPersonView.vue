<template>
  <div
    class="flex flex-col p-3 w-3/4 h-4/5 border border-gray-700 rounded-lg mb-4 bg-white shadow-md my-5 mx-auto"
  >
    <div class="font-fig mx-5 text-black">
      <h1 class="flex justify-center font-bold text-2xl mb-3 text-green-600">Add Person</h1>
      <div class="flex mb-3">
        <label class="my-auto" for="personType">Select Person Type:</label>
        <select
          v-model="selectedPersonType"
          id="personType"
          class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
        >
          <option value="student">Student</option>
          <option value="teacher">Advisor</option>
        </select>
      </div>

      <!-- แสดงแบบฟอร์มขึ้นอย่างใดอย่างหนึ่งขึ้นอยู่กับ selectedPersonType -->
      <div v-if="selectedPersonType === 'student'">
        <!-- แบบฟอร์มสำหรับเพิ่มนักเรียน -->
        <form @submit.prevent="addStudent">
          <div class="grid grid-cols-2 gap-4">
            <div class="flex mb-3">
              <label for="studentName" class="my-auto mr-2">Name:</label>
              <input
                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
                v-model="studentName"
                type="text"
                id="studentName"
                required
                pattern="[A-Za-z]+"
                title="Please enter a valid name (only alphabetic characters are allowed)."
              />
            </div>

            <div class="flex mb-3">
              <label for="studentSurname" class="my-auto mx-2">Surname:</label>
              <input
                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
                v-model="studentSurname"
                type="text"
                id="studentSurname"
                required
                pattern="[A-Za-z]+"
                title="Please enter a valid name (only alphabetic characters are allowed)."
              />
            </div>
          </div>

          <div class="mb-3">
            <label for="studentProfileImage" class="mr-2">Profile Image URL:</label>
            <input
              class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
              v-model="studentProfileImage"
              type="text"
              id="studentProfileImage"
              required
              pattern="https?://.+"
              placeholder="Add link of your picture ('http://..' or 'https://..)"
              title="Must start with 'http://' or 'https://'"
            />
          </div>

          <div class="flex mb-3">
            <!-- สร้าง input fields สำหรับรายการคอร์ส -->
            <label for="studentCourseList" class="my-auto mr-2">Course List:</label>
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
              v-model="studentCourseList"
              id="studentCourseList"
              required
            >
              <option value disabled>Select Course</option>
              <!-- วนลูปเพื่อแสดงรายชื่อครูที่มีใน store ของครู -->
              <option value="Psychology">Psychology</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Economics">Economics</option>
              <option value="History">History</option>
              <option value="Physics">Physics</option>
              <option value="Biology">Biology</option>
              <option value="English Literature">English Literature</option>
              <option value="Physical Education">Physical Education</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Mathematics">Mathematics</option>
              <option value="French">French</option>
              <option value="Geography">Geography</option>
              <option value="Art">Art</option>
              <option value="Music">Music</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
            <!-- <input
                class="w-full bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
                v-model="studentCourseList" type="text" id="studentCourseList" required> -->
          </div>

          <div class="flex mb-3">
            <!-- เลือกครูจาก dropdown list (ให้นำมาจาก store ของครู) -->
            <label for="studentAdvisor" class="my-auto mr-2">Advisor:</label>
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
              v-model="studentTeacher"
              id="studentAdvisor"
            >
              <option value="" disabled>Select a Advisor</option>
              <option value="101">Dr. Sarah</option>
              <option value="102">Prof. David</option>
              <option value="103">Dr. Maria</option>
              <option value="104">Prof. John</option>
              <option value="105">Dr. Emil</option>
              <option value="106">Prof. Michael</option>
              <option value="107">Dr. Laura</option>
              <option value="108">Prof. Jessica</option>
              <option value="109">Dr. Robert</option>
              <option value="110">Prof. Sarah</option>

              <!-- วนลูปเพื่อแสดงรายชื่อครูที่มีใน store ของครู -->
              <!-- <option v-for="teacher in teachers" :key="teacher.id" :value="teacher.id">{{ teacher.name }} {{
                  teacher.surname
                }}</option> -->
            </select>
          </div>

          <div
            id="flashMessage"
            class="mb-2 animate-pulse text-center text-base font-fig bg-green-500 font-fig text-white"
            v-if="message"
          >
            <h4>{{ message }}</h4>
          </div>
          <FlashMessage />
          <div class="flex justify-center mb-2">
            <button
              class="bg-green-500 hover:bg-green-700 shadow-md px-2 py-1 rounded-lg font-bold text-white"
              type="submit"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>

      <div v-else-if="selectedPersonType === 'teacher'">
        <!-- แบบฟอร์มสำหรับเพิ่มครู -->
        <form @submit.prevent="addTeacher">
          <div class="grid grid-cols-2 gap-4">
            <div class="flex mb-3">
              <label for="teacherName" class="mr-2 my-auto">Name:</label>
              <input
                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
                v-model="teacherName"
                type="text"
                id="teacherName"
                required
                pattern="[A-Za-z]+"
                title="Please enter a valid name (only alphabetic characters are allowed)."
              />
            </div>

            <div class="flex mb-3">
              <label for="teacherSurname" class="mr-2 my-auto">Surname:</label>
              <input
                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
                v-model="teacherSurname"
                type="text"
                id="teacherSurname"
                required
                pattern="[A-Za-z]+"
                title="Please enter a valid name (only alphabetic characters are allowed)."
              />
            </div>
          </div>

          <div class="mb-3">
            <label for="teacherProfileImage" class="mr-2">Profile Image URL:</label>
            <input
              placeholder="Add link of your picture ('http://..' or 'https://..)"
              class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
              v-model="teacherProfileImage"
              type="text"
              id="teacherProfileImage"
              required
              pattern="https?://.+"
              title="Must start with 'http://' or 'https://'"
            />
          </div>

          <div
            id="flashMessage"
            class="mb-2 animate-pulse text-center text-base font-fig bg-green-500 font-fig text-white"
            v-if="message"
          >
            <h4>{{ message }}</h4>
          </div>
          <FlashMessage />
          <div class="flex justify-center mb-2">
            <button
              class="bg-green-500 hover:bg-green-700 shadow-md px-2 py-1 rounded-lg font-bold text-white"
              type="submit"
            >
              Add Teacher
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStudentStore } from '@/stores/student'
import { useTeacherStore } from '@/stores/teacher'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
import type { StudentDetail, AdvisorDetail } from '@/type'

const selectedPersonType = ref('student')
const studentName = ref('')
const studentSurname = ref('')
const studentProfileImage = ref('')
const studentCourseList = ref('')
const studentTeacher = ref('')
// const studentComment = ref('');

const teacherName = ref('')
const teacherSurname = ref('')
const teacherProfileImage = ref('')
const teacherStudents = ref('')

const router = useRouter()

const storeMessage = useMessageStore()
const { message } = storeToRefs(storeMessage)

const addStudent = () => {
  const store = useStudentStore()

  const generateRandomID = () => {
    const min = 100000 // Minimum 6-digit number
    const max = 999999 // Maximum 6-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const newStudent: StudentDetail = {
    id: generateRandomID(), // สร้าง ID ใหม่ตามต้องการ
    Student_ID: generateRandomID().toString(), // สร้าง ID ใหม่ตามต้องการ
    FirstName: studentName.value,
    LastName: studentSurname.value,
    stu_pic: studentProfileImage.value,
    registered: studentCourseList.value
      .split(',')
      .map((course) => course.trim())
      .join(', '),
    advisor: parseInt(studentTeacher.value)
    // comment: studentComment.value.split(',').map(comment => comment.trim()),
  }

  store.addStudent(newStudent) // หรือ store.addTeacher(newTeacher);

  console.log(newStudent)

  storeMessage.updateMessage('You are successfully for adding student.')
  setTimeout(() => {
    storeMessage.resetMessage()
  }, 4000)

  // ล้างค่าฟอร์ม
  clearStudentForm()
}

const fetchTeachers = () => {
  // นำเข้า useTeacherStore เพื่อเรียกใช้ฟังก์ชัน fetchTeachers จาก store
  const teacherStore = useTeacherStore()
  teacherStore.fetchTeachersFromDB()
  // teacherStore.getTeachers
  console.log(teacherStore.getTeachers)
}

const addTeacher = () => {
  const storeTeacher = useTeacherStore()

  const generateRandomTID = () => {
    const min = 100 // Minimum 3-digit number
    const max = 999 // Maximum 3-digit number
    const randomThreeDigitNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return randomThreeDigitNumber
  }

  const newTeacher: AdvisorDetail = {
    id: generateRandomTID(), // สร้าง ID ใหม่ตามต้องการ
    FirstName: teacherName.value,
    LastName: teacherSurname.value,
    advisor_pic: teacherProfileImage.value
  }

  storeTeacher.addTeacher(newTeacher) // เพิ่มครูใหม่ลงในสถานะของครู
  console.log(newTeacher)

  // เรียกใช้ fetchTeachers() เพื่ออัปเดตรายการครูในหน้า TeacherListView.vue
  fetchTeachers()

  storeMessage.updateMessage('You are successfully for adding teacher.')
  setTimeout(() => {
    storeMessage.resetMessage()
  }, 4000)
  // ล้างค่าฟอร์ม
  clearTeacherForm()
}

const clearStudentForm = () => {
  studentName.value = ''
  studentSurname.value = ''
  studentProfileImage.value = ''
  studentCourseList.value = ''
  studentTeacher.value = ''
  // studentComment.value = '';
}

const clearTeacherForm = () => {
  teacherName.value = ''
  teacherSurname.value = ''
  teacherProfileImage.value = ''
  teacherStudents.value = ''
}
</script>
