<template>
  <div class ="Q">
    <div class="Q2">
     <div class="QTrack">
      <div :class="dotStyle(index,questionID)" v-for="(question,index) in questionTrack" :key="index"></div>
      <!-- <div class="inactiveQ"></div>  -->
    </div>

    <TransitionGroup tag="div" :name="transitionQ">
      <h3 class="Q-text" :key="questionID">{{questionText}}</h3>
      <div class="option" :class="{'selected':option.selected}" v-for ="option in options" @click="nextQ(option.association)" :key="option"> {{option.text}} </div>
    </TransitionGroup>
    <div class="changeQ">
      <button @click="changeQ(-1)">&lt;</button>
      <button @click="changeQ(1)">&gt;</button>
    </div>
    </div>
  </div>

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
      const questionTrack = ref(questionListJson)  //to track quiz progress and allow revisting past questions
      const transitionQ = ref('slide-left')
      //create an array of object base on the list of result each with starting score of 0. The score will increase as user click
      resultListJson.forEach((result) => {   
        resultTrack.value.push({
          name:result.name,
          score:0
        })
      })

      // put the question list to a new variable
      questionTrack.value.forEach(question=>{
        question.answered = false,
        question.options.forEach(option=>{
        option.selected = false
        })
      })

      // decide the style of the tracking dots
      function dotStyle(index, questionID) {return{
        answered:questionTrack.value[index].answered,
        activeQ: questionID === index, 
        inactiveQ:questionID != index
      }}


      getQ()

      //get text, list of options and weight of the current question.
      function getQ (){
        questionText.value = questionListJson[questionID.value].text
        options.value = questionListJson[questionID.value].options
        weight.value = Number(questionListJson[questionID.value].weight)
      }

      function changeQ(direction) {
        const newID = questionID.value + direction
        if (direction === -1) {transitionQ.value = 'slide-right'} else {transitionQ.value = 'slide-left'}
        if(newID >=0 && newID <= numQ.value-1){
        questionID.value = questionID.value + direction
        getQ()
        }
      }

      function top() {   //calculate the result
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


      function nextQ (selectedAssociation) {
        //update questionTracking
        const association = selectedAssociation
        const currentQ = questionTrack.value[questionID.value]
        currentQ.answered = true;
        currentQ.options.forEach(option=>{
          if(option.association === association) {
            option.selected = true
          } 
          else {if (option.selected === true){   //check if other option have been selected before, if yes then make it unselected
            option.selected = false
          }}
        })

        //check if all questions are answered
        const finished = questionTrack.value.every((question)=>question.answered === true)
        if (finished) {
          context.emit('endGame', top())  //if all are answered then trigger end game
        } else {changeQ(1)}   //if not, move to next question
      }

      return{
        nextQ, questionText, options, numQ, questionTrack, questionID, changeQ,
        dotStyle, transitionQ
      }
    },
  }
</script>

<style>
  @keyframes slide-left {
    0% {opacity:0; transform: translate(55px, 0);}
    100% {opacity:1; transform: translate(0, 0);}

  } 
  @keyframes slide-right {
    0% {opacity:0; transform: translate(-55px, 0);}
    100% {opacity:1; transform: translate(0, 0);}

  } 
    .slide-left-enter-active{
      animation: slide-left 0.3s ease 0.0001s;
    }
    .slide-right-enter-active{
      animation: slide-right 0.3s ease 0.0001s;
    }
    .slide-left-leave-active{
      display: none;
    }
    .slide-right-leave-active{
      display: none;
    }
  .Q2 {
    margin-left: 40px;
    margin-right: 40px;
  }
  .activeQ {
    height: 20px;
    width: 20px;
    /* margin: 0 7px; */
  }
  .inactiveQ {
    width: 12px;
    height: 12px;
    /* margin: 0 5px; */
  }
  .answered {
    background-color: rgb(238, 107, 107);
  }
  .QTrack {
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* background-color: blue; */
    
  }
  .QTrack div {
    border: solid;
    margin: 0 5px;
    border-width: 2px;
  }
  .Q {
    background-color: white;
    padding: 25px;
    margin-left: 20%;
    margin-right: 20%;
    border: solid;
    border-width: 0.5px;
    border-color: rgb(199, 168, 168);
    border-radius: 10px;
    text-align: left;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.10);
    display: flex;
    flex-direction: column;
    /* height: 250px; */
  }

  .Q h3 {
    /* background: blue; */
    height: 40px;
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
    cursor: pointer;
    transition: 0.2ms;
  }
  .option:active{
    background: rgb(211, 121, 113);
    transition: 1s;
  }
  .selected {
    background: rgb(211, 121, 113);
  }
  .changeQ {
    margin-top: 20px;
    /* background-color: blue; */
    display: flex;
    justify-content: space-between;
  }
  .changeQ button {
    padding: 5px 10px;
    border: solid;
    border-color: rgb(203, 203, 203);
    border-width: 2px;
  }

  .changeQ button:hover {
    background-color: rgb(238, 238, 238);
  }
  h3{
    margin: 5px 0 15px 0;
  }
</style>