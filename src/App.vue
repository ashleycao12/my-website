<template>
<div class="bg-warmPink-1 pt-28 pb-20 absolute w-full">  <!-- content wrapper to get body bg color-->
  <nav class="flex fixed top-0 w-full z-40 bg-warmPink-1 pt-5 h-20">
    <div class="flex-1 flex justify-evenly lg:justify-center items-center">
      <router-link to="/" class="md:mx-5 py-2 px-4 rounded-lg sm:text-xl font-biotif hover:text-2xl hover:mx-10 hover:bg-warmPink-2 transition-all duration-150">Home</router-link> 
      <router-link to="/" class="md:mx-5 py-2 px-4 rounded-lg sm:text-xl font-biotif hover:text-2xl hover:mx-10 hover:bg-warmPink-2 transition-all duration-150" :class="projectClass" @click="scrollProject">My projects</router-link>
      <router-link to="/about" class="md:mx-5 py-2 px-4 rounded-lg sm:text-xl font-biotif hover:text-2xl hover:mx-10 hover:bg-warmPink-2 transition-all duration-150">About</router-link>
    </div>
    <div class="md:w-1/3 lg:w-1/2 flex justify-end items-center">
      <a href="https://www.linkedin.com/in/ashley-cao/">
        <img src="@/assets/linkedin-icon.png" alt="" class="sm:w-6 w-5">
      </a>
      <a href="https://github.com/ashleycao12">
        <img src="@/assets/github-icon.png" alt="" class="sm:w-6 w-5 sm:mx-20 mx-4">
      </a>
        </div>
  </nav>
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
// const projectActive = ref(false)
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
/* body {
  background-color: rgb(255 251 235);
} */
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}
.nav1 {
  flex: 1;
  text-align: right;
  margin-right: 3vw;
  padding: 0.5vw 1vw;
}
.nav1 a {
  margin: 0 2vw;
}
a img {
  width: 22px;
}
.nav {
  flex: 0.9;
  display: flex;
  justify-content: center;
  
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color:rgb(255, 250, 247);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 7px;
  padding: 10px 12px;
  border-radius: 10px;
  text-decoration: none;
  margin-left:2vw ;
  margin-right:2vw ;
  color: rgb(0, 0, 0);
  font-family:  "Biotif", system-ui, Helvetica Neue, Helvetica,Arial,sans-serif;
  font-size: 20px;
  font-weight: 500;
  transition: all 0.15s;
}

.nav a:hover{
  background: rgb(255, 217, 195);
  color: rgb(50, 50, 50);
  margin-left:3vw ;
  margin-right:3vw ;
  font-size: 24px;
  
}
*/
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
