<template>
  <h2>This is the result:{{result}} </h2>
  <img :src= "imgSrc" alt="No image available"/>
  <p>{{description}}</p>
</template>

<script>
import {ref} from 'vue'
import resultList from '@/assets/result-list.json'
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
    // imgSrc.value = require("@/assets/result-images/Soya-bean.jpg")
    return{result, description,imgSrc}
  }
}
</script>

<style>

</style>