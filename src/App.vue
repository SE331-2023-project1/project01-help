
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <header>

    <nav>
      <ul class="flex border-b">
  <li class="-mb-px mr-1">
    <div class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" >
      <RouterLink to="/">Student</RouterLink>
    </div>
  </li>

  <li class="mr-1">
    <div class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">
      <RouterLink to="/advisor">Advisor</RouterLink>
    </div>
  </li>

  <li class="ml-auto mt-3 " >
    <div class="w-4 h-4">
      <RouterLink to="/addPerson"><img src="./assets/add.png" alt="addButton"></RouterLink>
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

  <RouterView />
</template>


