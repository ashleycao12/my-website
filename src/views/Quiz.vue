<template>
<h2 v-if="status === 'playing'">Quiz time!</h2>
 <div class="content" v-if="status === 'intro'">
   <!-- <div class="startPhoto">Place holder</div> -->
   <img src="@/assets/quiz/mixedBean.jpg" alt="no image">
   <h2>What kind of bean are you?</h2>
   <p>Don't we all like beans? Let's do a fun little quiz to find out what kind of bean you are.</p>
   <button class="startButton" @click="start">Start</button>
 </div>
 <Question v-if="status === 'playing'" @endGame="showResult"/>
 <QuizResult v-if="status === 'finished'" :resultName="resultName"/>
<!-- </div> -->
</template>


<script>
  import {ref} from 'vue'
  import Question from '@/components/quiz/Question.vue'
  import QuizResult from '@/components/quiz/QuizResult.vue'
  export default{
    components: {Question, QuizResult},
    setup(){
      const status = ref('intro')
      const resultName = ref()
      function showResult(result0) {
        status.value = 'finished'
        resultName.value = result0
        console.log(resultName.value);
      }
      function start() {
        status.value = 'playing'
      }
      return {status, showResult, resultName, start}
    }
  }
</script>


<style>
  .startPhoto {
    background-color: black;
    height: 300px;
    margin: 20px 200px 20px;
  }
  .startButton {
    padding: 15px 35px;
    background-color:  rgb(225, 103, 117);
    border: none;
    font-size: 20px;
  }
  .startButton:hover {
    background-color: rgba(234, 134, 134, 0.849);
  }
</style>
