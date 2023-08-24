
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
    <div class="">
      <button class="w-4 h-4"><img src="./assets/add.png" alt="addButton">
      <RouterLink to="/addPerson"></RouterLink>
      </button>
        
    </div>
  </li>
  
</ul>
    </nav>



    <!-- <div> เป็นไรไม่รู้ เข้า studentDetail แล้วขึ้น 2อัน
    <nav>
      <ul class="flex border-b">
        <li class="-mb-px mr-1">
          <div class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
            <router-link to="/">Student</router-link>
          </div>
        </li>

        <li class="mr-1">
          <div class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">
            <router-link to="/advisor">Advisor</router-link>
          </div>
        </li>

      </ul>
    </nav>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div> -->





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

<!-- <style scoped>
  header {
  line-height: 1.5;
  max-height: 100vh;
} 

  .logo {
  display: block;
  margin: 0 auto 2rem;
} 

  nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
} 

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
