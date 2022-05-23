<template>
<!-- content wrapper to get body bg color-->
<div class="bg-warmPink-1 pt-28 pb-20 absolute w-full min-h-full">  
  
  <nav class="flex fixed top-0 w-full z-40 bg-warmPink-1 pt-5 h-20">
    <!-- internal navigation links -->
    <div class="flex-1 flex justify-evenly lg:justify-center items-center">
      <router-link to="/" class="md:mx-5 py-2 px-4 rounded-lg sm:text-xl font-biotif sm:hover:text-2xl sm:hover:mx-10 hover:bg-warmPink-2 transition-all duration-150">Home</router-link> 
      <router-link to="/" class="md:mx-5 py-2 px-4 rounded-lg sm:text-xl font-biotif sm:hover:text-2xl sm:hover:mx-10 hover:bg-warmPink-2 transition-all duration-150" :class="projectClass" @click="scrollProject">My projects</router-link>
      <router-link to="/about" class="md:mx-5 py-2 px-4 rounded-lg sm:text-xl font-biotif sm:hover:text-2xl sm:hover:mx-10 hover:bg-warmPink-2 transition-all duration-150">About</router-link>
    </div>
    <!-- external links-->
    <div class="md:w-1/3 lg:w-1/2 flex justify-end items-center">
      <a href="https://www.linkedin.com/in/ashley-cao/">
        <img src="@/assets/linkedin-icon.png" alt="" class="sm:w-6 w-5">
      </a>
      <a href="https://github.com/ashleycao12">
        <img src="@/assets/github-icon.png" alt="" class="sm:w-6 w-5 sm:mx-20 mx-4">
      </a>
    </div>
  </nav>

  <!--page content-->
  <router-view :projectClick="projectClick"/>

  <MessageBot/>
  </div>
</template>

<script setup>
  import {ref, computed} from 'vue'
  import { useRoute } from 'vue-router';
  import MessageBot from './components/MessageBot.vue'
  const projectClick = ref(0)
  const route = useRoute()
  const projectClass = computed(()=>{
    const projectRoutes = ['quiz', 'reactionGame']
    if (projectRoutes.includes(route.name)) {return 'active'} else {return 'inactive'}
  })

  function scrollProject(){
    setTimeout(()=> {projectClick.value++},50)
    console.log(route.name);
  }

</script>

<style>
nav a.router-link-exact-active {
  text-decoration: underline;  
} 
.active {
  text-decoration: underline !important;
}
.inactive {
  text-decoration: none !important;
}
</style> 
