<template>
 <h3>This is the Quiz page</h3>
 <Question/>
</template>


<script>
  import {ref} from 'vue'
  import Question from '@/components/Question.vue'
  export default{
    components: {Question},
    
    }
</script>


<style>
 body{
   background-color: rgb(228, 242, 244);
 } 
</style>
