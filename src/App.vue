<template>
  <nav>
    <div class="nav">

      <router-link to="/">Home</router-link> 
      <router-link to="/" :class="projectClass" @click="scrollProject">My projects</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="nav1">

      <a href="https://www.linkedin.com/in/ashley-cao/">
        <img src="@/assets/linkedin-icon.png" alt="">
      </a>
      <a href="https://github.com/ashleycao12">
        <img src="@/assets/github-icon.png" alt="">
      </a>
        </div>

  </nav>
  <router-view :projectClick="projectClick"/>
  <MessageBot/>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}
.nav1 {
  flex: 1;
  text-align: right;
}
a img {
  width: 22px;
}
.nav {
  flex: 1.2;
  
  /* background-color: blue; */
}
nav {
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
  padding: 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 20px;
  background-color:rgb(255, 251, 219);
}

nav a {
  /* font-weight: bold; */
  /* color: #2c3e50; */
  /* padding: 7px; */
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  margin-left:28px ;
  margin-right:28px ;
  color: rgb(0, 0, 0);
  font-family:  "Biotif", system-ui, Helvetica Neue, Helvetica,Arial,sans-serif;
  font-size: 18px;
  font-weight: 550;
  transition: all 0.15s;
}

.nav a:hover{
  background: rgb(255, 215, 172);
  color: rgb(50, 50, 50);
  margin-left:50px ;
  margin-right:50px ;
  font-size: 22px;
}

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
