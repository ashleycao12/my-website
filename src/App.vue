<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
    <router-link to="/">My project</router-link>
  </nav>
  <router-view/>
  <MessageBot/>
</template>

<script setup>

import MessageBot from './components/home/MessageBot.vue'

</script>

<style>
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
  z-index: 100;
  height: 20px;
  background-color: rgb(255, 245, 238);
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
  color: rgb(0, 0, 0);
  font-family:  "Biotif", system-ui, Helvetica Neue, Helvetica,Arial,sans-serif;
  font-size: 18px;
  font-weight: 550;
  transition: all 0.15s;
}

nav a:hover{
  background: rgb(255, 233, 176);
  color: rgb(50, 50, 50);
  margin-left:50px ;
  margin-right:50px ;
  font-size: 22px;
}

nav a.router-link-exact-active {
  text-decoration: underline;
  
}

</style>
