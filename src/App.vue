
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <div class="flex flex-col items-center justify-start  ">
  <header>

    <nav class="mt-6">
      <ul class="flex border-b">
  <li class=" m-2">
    <div class="bg-white border-white rounded-lg py-2 px-4 text-blue-500 hover:text-blue-800 font-mono font-semibold" >
      <RouterLink to="/">Student</RouterLink>
    </div>
  </li>

  <li class="m-2">
    <div class="bg-white border-white rounded-lg py-2 px-4 text-blue-500 hover:text-blue-800 font-mono font-semibold ">
      <RouterLink to="/advisor">Advisor</RouterLink>
    </div>
  </li>

  <li class="mt-3 " >
    <div class="w-8 h-8">
      <RouterLink to="/addPerson"><img src="./assets/add-friend.png" alt="addButton"></RouterLink>
    </div>
  </li>
  
</ul>
    </nav>

    <!-- <img alt="Vue logo" class="logo" src="@/assets/management.png" width="125" height="125" />
    <div class="wrapper">
      <nav class="font-mono text-yellow-300" >
        <RouterLink to="/">Student</RouterLink>
        <RouterLink to="/advisor">Advisor</RouterLink>
      </nav>
    </div> -->
  </header>
</div>

  <RouterView />
</template>


