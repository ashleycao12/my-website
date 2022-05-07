<template>
  <div class="content">
  <img class="resultImg" :src= "imgSrc" alt="No image available"/>
  <h2>This is the result:{{result}} </h2>
  <p>{{description}}</p>
  </div>
</template>

<script>
import {ref} from 'vue'
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
        imgSrc.value = require('@/assets/result-images/' + currentItem.imgSrc)
        console.log(currentItem.imgSrc);
      }
    });    
    return{result, description,imgSrc}
  }
}
</script>

<style>
.resultImg {
  
  
}
</style>