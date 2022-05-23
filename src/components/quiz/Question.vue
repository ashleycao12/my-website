<template>
  <!-- content box -->
  <div class ="bg-white py-10 px-5 sm:px-16 border border-red-200 rounded-xl shadow-lg w-5/6 md:w-3/5 max-w-3xl mx-auto">
    <!-- question tracker -->
    <div class="pb-7 w-2/3 sm:w-1/2 mx-auto flex justify-between items-center">      
      <div class="border-2 border-gray-600 rounded-full" :class="dotStyle(index,questionID)" v-for="(question,index) in questionTrack" :key="index"></div>
    </div>

    <!-- Question and options -->
    <TransitionGroup tag="div" :name="transitionQ">  
      <h3 class="pb-2 sm:text-lg font-bold text-gray-600" :key="questionID">{{questionText}}</h3>
      <div class="cursor-pointer mt-3 bg-zinc-100 hover:bg-warmPink-3 px-3 py-2 rounded-md shadow-md shadow-gray-300" :class="{'selected':option.selected}" v-for ="option in options" @click="nextQ(option.association)" :key="option"> {{option.text}} </div>
    </TransitionGroup>

    <!-- back & next buttons -->
    <div class="w-full flex justify-between mt-5">  
      <button class="py-1 px-3 bg-zinc-100 hover:bg-zinc-200 border-2 border-gray-300 rounded-lg" @click="changeQ(-1)">&lt;</button>
      <button class="py-1 px-3 bg-zinc-100 hover:bg-zinc-200 border-2 border-gray-300 rounded-lg" @click="changeQ(1)">&gt;</button>
    </div>
  </div>

</template>
<script>
  import {ref} from 'vue'
  import questionListJson from '@/assets/quiz/question-list.json'
  import resultListJson from '@/assets/quiz/result-list.json'

  export default {
    setup(props,context){
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

      //get the first question
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
  .activeQ {
    height: 20px;
    width: 20px;
  }
  .inactiveQ {
    width: 12px;
    height: 12px;
  }
  .answered {
      background-color: rgb(238, 107, 107);
    }
  .selected {
      background: rgb(211, 121, 113) !important;
    }

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

</style>