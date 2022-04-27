<template>
  <div class ="Q">
    <h3 class="Q-text" >{{questionText}}</h3>
    <div class="option" v-for = "option in options" @click= "nextQ" :id= "option.association"> {{option.text}} </div>
    <div class="changeQ-parent">
      <button class="changeQ">&lt;</button>
      <button class="changeQ">&gt;</button>
    </div>
  </div>
    <!-- <button @click= "nextQ">change question</button> -->
    <!-- <Question :questionID="currentQ"/> -->
  <!-- <p v-for="question in questionListJson" :key="question.id">
    {{question.text}}
  </p> -->

</template>
<script>
  import {ref} from 'vue'
  import questionListJson from '@/assets/quiz/question-list.json'
  import resultListJson from '@/assets/quiz/result-list.json'

  export default {
    setup(props, context){
      // declare and initialise variable
      const questionID = ref(0)
      const questionText = ref()
      const options = ref()
      const resultTrack = ref([])   //to track the current stage of the result based on user's selection
      const weight = ref()
      const numQ = ref(questionListJson.length)
      const questionTrack = ref()  //to track quiz progress and allow revisting past questions

      //create an array of object base on the list of result each with starting score of 0. The score will increase as user click
      resultListJson.forEach((result) => {   
        resultTrack.value.push({
          name:result.name,
          score:0
        })
      })

      // put the question list to a new variable
      questionTrack.value = questionListJson
      questionTrack.value.forEach(question=>{
        question.answered = false,
        question.options.forEach(option=>{
          option.selected = false
        })
      })
      console.log(questionTrack.value[0].options);

      getQ()

      //get text, list of options and weight of the current question.
      function getQ (){
        questionText.value = questionListJson[questionID.value].text
        options.value = questionListJson[questionID.value].options
        weight.value = Number(questionListJson[questionID.value].weight)
      }
      
      // function top(result) {
      //   const scoreList = []        
      //   result.forEach(currentItem =>{scoreList.push(currentItem.score)})
      //   const max = Math.max(...scoreList)
      //   let top0 = ""
      //   result.forEach(currentItem => {
      //     if (currentItem.score === max) {
      //       top0 = currentItem.name
      //     }
      //   });
      //     return top0
      // }

      function top() {
        //extract quiz result from questionTrack
        resultTrack.value.forEach(result => {
          questionTrack.value.forEach(question=>{
            question.options.forEach(option=>{              
              if((result.name === option.association) && (option.selected === true)){
                result.score = result.score+Number(question.weight)
              }
            })
          })
        });

        const scoreList = []        
        resultTrack.value.forEach(currentItem =>{scoreList.push(currentItem.score)})
        const max = Math.max(...scoreList)
        let top0 = ""
        resultTrack.value.forEach(currentItem => {
          if (currentItem.score === max) {
            top0 = currentItem.name
          }
        });
          return top0
      }


      function nextQ (event) {
        //update questionTracking
        const association = event.target.id
        const currentQ = questionTrack.value[questionID.value]
        
        currentQ.answered = true;
        currentQ.options.forEach(option=>{
          if(option.association === association) {
            option.selected = true
          } 
          // else {if (option.selected === true){
          //   option.selected = false
          // }}
        })

        //move to the next question
        if (questionID.value != numQ.value - 1) {
          questionID.value++
          getQ()
        } else {
          console.log(resultTrack.value);
          console.log(questionTrack.value);
          context.emit('endGame', top())
        }
      }

      return{
        nextQ, questionText, options, 
        // getQ, questionID,
      }
    },
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
    background: rgb(239, 166, 144);
    transition: 0.2ms;
  }
  .changeQ-parent {
    margin-top: 20px;
    /* background-color: blue; */
    display: flex;
    justify-content: space-between;
  }
  .changeQ {
    padding: 5px 10px;
    border: solid;
    border-color: rgb(167, 167, 167);
    border-width: 2px;
  }
  h3{
    margin: 5px 0 15px 0;
  }
</style>