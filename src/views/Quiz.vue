<template>
<!-- <div class="content"> -->

 <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
 <div class="content" v-if="status === 'intro'">
   <!-- <div class="startPhoto">Place holder</div> -->
   <img src="@/assets/quiz/mixedBean.jpg" alt="no image">
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis voluptates unde harum, atque, quae a, vel quaerat repudiandae molestiae modi quia culpa velit architecto rerum eum officia veniam aperiam quasi. Ducimus ut neque quo amet, odio rem delectus nam deleniti illo animi iste assumenda quasi recusandae rerum perspiciatis non cumque repudiandae distinctio blanditiis dignissimos aperiam quam accusamus ipsam laudantium. Minus autem enim aspernatur cumque praesentium perferendis a provident maiores magnam quaerat? Voluptas, dolore dolor? Dolorum, magni! Iure repellendus veritatis eligendi, fuga dignissimos magni debitis assumenda ratione error rem magnam asperiores itaque pariatur aspernatur a animi qui quaerat quos non illo!</p>
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
    padding: 10px 20px;
    background-color: palevioletred;
    border: none;
  }
</style>
