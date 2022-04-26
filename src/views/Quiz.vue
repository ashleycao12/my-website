<template>
 <!-- <h3>This is the Quiz page</h3> -->
 <Question v-if= "isPlaying" @endGame= "showResult"/>
 <QuizResult v-if= "isPlaying === false" :resultName= "resultName"/>
</template>


<script>
  import {ref} from 'vue'
  import Question from '@/components/quiz/Question.vue'
  import QuizResult from '@/components/quiz/QuizResult.vue'
  export default{
    components: {Question, QuizResult},
    setup(){
      const isPlaying = ref(true)
      const resultName = ref()
      function showResult(result0) {
        isPlaying.value = false
        resultName.value = result0
        console.log(resultName.value);
      }

      return {isPlaying, showResult, resultName}
    }
  }
</script>


<style>
 /* body{
   background-color: rgb(228, 242, 244);
 }  */
</style>
