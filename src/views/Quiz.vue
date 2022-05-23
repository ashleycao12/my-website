<template>
<h1 class="pb-5 sm:text-2xl text-center font-bold text-gray-600" v-if="status === 'playing'">Quiz time!</h1>
<!-- intro --> 
<div class="bg-white overflow-hidden w-5/6 md:w-3/5 mx-auto rounded-3xl border border-red-200" v-if="status === 'intro'">
  <img class="object-cover w-full" src="@/assets/quiz/mixedBean.jpg" alt="no image">
  <div class="px-8 pb-8 md:px-16 text-center">
      <h1 class="pt-6 sm:text-2xl text-center font-bold text-gray-600">What kind of bean are you?</h1>
      <p class="text-left font-biotif text-gray-500 md:text-lg my-5">Don't we all like beans? Let's do a fun little quiz to find out what kind of bean you are.</p>
    <button class="bg-red-400 hover:bg-red-300 text-lg md:text-2xl py-2 px-7 rounded-xl" @click="start">Start</button>
   </div> 
</div>

<Question v-if="status === 'playing'" @endGame="showResult"/>
<QuizResult v-if="status === 'finished'" :resultName="resultName"/>
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

