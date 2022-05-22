<template>
  <div class="bg-white overflow-hidden w-5/6 md:w-3/5 mx-auto rounded-3xl border border-red-200">
  <img class="object-cover w-full" :src= "imgSrc" alt="No image available"/>
  <div class="px-8 pb-8 md:px-16 text-center">
    <h1 class="pt-6 sm:text-2xl text-center font-bold text-gray-600">{{result}} <span v-if="result==='Beansprouts'">(boomer bean)</span> </h1>
    <p class="text-left font-biotif text-gray-500 md:text-lg my-5">{{description}}</p>
  </div>
  </div>
    <div class="mt-11 text-center font-biotif text-zinc-500">
      <button class="text-lg mx-5 underline" @click="goHome">back to homepage</button>
      <button class="text-lg mx-5 underline" @click="restart">restart quiz</button>
    </div>
</template>

<script>
import {ref} from 'vue'
import router from '@/router'
import resultList from '@/assets/quiz/result-list.json'
export default {
  props: ['resultName'],
  setup(props){
    const result = ref(props.resultName)
    const description = ref()
    const imgSrc = ref()
    // find result description and image name
    resultList.forEach(currentItem => {
      if (currentItem.name === result.value) {
        description.value = currentItem.description
        imgSrc.value = require('@/assets/quiz/' + currentItem.imgSrc)
        console.log(currentItem.imgSrc);
      }
    });  
  function restart(){
    router.go()
  }
  function goHome() {
    router.push({name:'home'})
  }  
    return{result, description,imgSrc, restart,goHome}
  }
}
</script>

<style scoped>

/* .buttons {
  margin-bottom: 30px;
}
button {
  padding: 0 20px;
  border: none;
  font-family: "Biotif", system-ui, Helvetica Neue, Helvetica,Arial,sans-serif;
  background-color: transparent;
  font-size: 17px;
  color: rgb(100, 100, 100);
  text-decoration: underline;
}
p {
  padding: 0 20px 0;
} */
</style>