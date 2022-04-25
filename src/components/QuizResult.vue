<template>
  <h2>This is the result:{{result}} </h2>
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
    resultList.forEach(currentItem => {
      if (currentItem.name === result.value) {
        description.value = currentItem.description
      }
    });    
    return{result, description}
  }
}
</script>

<style>

</style>