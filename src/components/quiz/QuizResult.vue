<template>
  <div class="content">
  <img class="resultImg" :src= "imgSrc" alt="No image available"/>
  <h2>{{result}} <span v-if="result==='Beansprouts'">(boomer bean)</span> </h2>
  <p>{{description}}</p>
  </div>
    <div class="buttons">
      <button @click="goHome">back to homepage</button>
      <button @click="restart">restart quiz</button>
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
    router.go(0)
  }
  function goHome() {
    router.push({name:'home'})
  }  
    return{result, description,imgSrc, restart,goHome}
  }
}
</script>

<style scoped>

.buttons {
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
}
</style>