<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
    <router-link to="/">My project</router-link>
  </nav>
  <router-view/>
  <!-- <img class="messageIcon" @click="openMes" src="@/assets/messageIcon.png" alt="no image"> -->
  <MessageBot/>
</template>

<script setup>
// import {ref} from 'vue'
import MessageBot from './components/home/MessageBot.vue'
// const showMes = ref(false)
// function openMes(){
//   showMes.value = true
// }
</script>

<style>
/* .messageIcon {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 65px;
  height: auto;
  border-radius: 32.5px;
}
.messageIcon:hover {
  opacity: 0.9;
  cursor: pointer;
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  
}

nav {
  padding: 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 20px;
  background-color: rgb(255, 240, 220);
}

nav a {
  /* font-weight: bold; */
  /* color: #2c3e50; */
  /* padding: 7px; */
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  margin-left:15px ;
  margin-right:15px ;
  color: rgb(83, 83, 83)
}

nav a:hover{
  background: rgb(253, 210, 150);
  color: rgb(50, 50, 50);
  margin-left:50px ;
  margin-right:50px ;
}

nav a.router-link-exact-active {
  text-decoration: underline;
  
}

</style>
