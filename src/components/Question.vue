<template>
  <div class ="Q">
    <h3 class="Q-text" >{{question}}</h3>
    <div class="option" v-for = "option in options" @click= "nextQ" :id= "option.association"> {{option.text}} </div>
  </div>
    <!-- <button @click= "nextQ">change question</button> -->
    <!-- <Question :questionID="currentQ"/> -->
  <!-- <p v-for="question in questionListJson" :key="question.id">
    {{question.text}}
  </p> -->

</template>
<script>
  import {ref} from 'vue'
  import questionListJson from '@/assets/question-list.json'
  import resultListJson from '@/assets/result-list.json'

  export default {
    setup(){
      const questionID = ref(0)
      const question = ref()
      const options = ref()
      const resultTrack = ref([])   //to track the current stage of the result based on user's selection
      const weight = ref()
      const numQ = ref(questionListJson.length)
      
      //create an array of object base on the list of result each with starting score of 0. The score will increase as user click
      resultListJson.forEach((result) => {   
        resultTrack.value.push({
          name:result.name,
          score:1
        })
      })
      // resultTrack.value.forEach((result => console.log(result.name)))

      function getQ (){
        question.value = questionListJson[questionID.value].text
        options.value = questionListJson[questionID.value].options
        weight.value = Number(questionListJson[questionID.value].weight)
      }
      

      getQ()
      // question.value = questionListJson[questionID.value].text
      // options.value = questionListJson[questionID.value].options
      
      function nextQ (event) {
        //update resultTracking
        const association = event.target.id
        resultTrack.value.forEach((result) =>{
          if (result.name === association) {
            result.score = result.score + weight.value
            console.log (result.score)
          }
        })
        // const association = questionListJson[questionID.value].options

        //move to the next question
        console.log(questionID.value != numQ.value - 1)
        if (questionID.value != numQ.value - 1) {
          questionID.value++
          getQ()
        }
       
        // question.value = questionListJson[questionID.value].text
      }

      return{
        question, questionID, nextQ, options, getQ
      }
    },

    // data(){
    //   return{
    //     questionListJson : questionListJson
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