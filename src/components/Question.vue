<template>
  <div class ="Q">
    <h3 class="Q-text" >{{question}}</h3>
    <div class="option" v-for = "option in options" @click= "nextQ" :id= "option.association"> {{option.text}} </div>
  </div>
    <!-- <button @click= "nextQ">change question</button> -->
    <!-- <Question :questionID="currentQ"/> -->
  <!-- <p v-for="question in questionList" :key="question.id">
    {{question.text}}
  </p> -->

</template>
<script>
  import {ref} from 'vue'
  import questionList from '@/assets/question-list.json'
  import resultList from '@/assets/result-list.json'

  export default {
    setup(){
      const questionID = ref(0)
      const question = ref()
      const options = ref()
      const resultTrack = ref([])   //to track the current stage of the result based on user's selection

      //create an array of object base on the list of result each with starting score of 0. The score will increase as user click
      resultList.forEach((result) => {   
        resultTrack.value.push({
          name:result.name,
          score:0
        })
      })
      // console.log(resultTrack.value[0])

      function getQ (){
        question.value = questionList[questionID.value].text
      }

      function getOption (){
        options.value = questionList[questionID.value].options
      }

      getQ()
      getOption()
      // question.value = questionList[questionID.value].text
      // options.value = questionList[questionID.value].options
      
      function nextQ (event) {
        //update resultTracking
        console.log("id", event.target.id)
        // const association = event.target.id
        // const association = questionList[questionID.value].options

        //move to the next question
        questionID.value++
        getQ()
        getOption()
        // question.value = questionList[questionID.value].text
      }

      return{
        question, questionID, nextQ, options, getQ, getOption
      }
    },

    // data(){
    //   return{
    //     questionList : questionList
    //   }
    // }
  }
</script>

<style>
  .Q {
    background-color: white;
    padding: 25px;
    margin: 20px 250px;
    border-radius: 10px;
    text-align: left;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.10);
  }
  .option{
    margin: 10px 0 0 0;
    background: rgb(248, 248, 248);
    padding: 10px;
    border-radius: 5px;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.15);
  }
  .option:hover{
    background: rgb(144, 196, 212);
    transition: 0.2ms;
  }
  h3{
    margin: 5px 0 15px 0;
  }
</style>