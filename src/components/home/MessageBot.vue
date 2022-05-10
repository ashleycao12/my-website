<template>
<div class="messageIcon" @click="toggleShowMes">
  <img class="mesIconImg"  src="@/assets/messageIcon.png" alt="no image">
</div>
<!-- <MessageBot v-if="showMesBox"/> -->
  <div class="mesBox" v-if="showMesBox">
    <div class="nameBar">
      <div class="botName">
        <h3>
          Ashley Bot
        </h3> 
        <p>Ask me a question</p>
        </div>
      <button class="closeButton" @click="toggleShowMes">&#10006;</button>
    </div>
  <div id="mesContent" ref="contentRef">
    <transition-group name="delay">
      <div class="textBubble" :class="item.style" v-for="(item,index) in messages" :key="index">{{item.text}}</div>
    </transition-group>
    <div v-if="showOptions">
      <div class="options" @click="reply(item,index)" v-for="(item,index) in options" :key="item">{{item}}</div>
    </div>
     <!-- <div class="textBubble" :class="item.style" v-for="item in messages" :key="item">{{item.text}}</div>
      <div class="options" v-for="item in chatOptions" :key="item">{{item}}</div> -->
    <!-- <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p> -->
    </div>
  </div>
</template>

<script setup>
  import {ref, onMounted, nextTick} from 'vue'
  import messagesJson from '@/assets/home/messages.json' 

  const showMesBox = ref(true)   
  const messages = ref([])  //all messages (both questions and answers) that will show in the chatbox
  const options = ref([])  //all of the options that user can click on
  const quesList = ref(messagesJson.questions)
  const showOptions = ref(true)
  
  const contentRef = ref(null)
  onMounted(() => {
    console.log(contentRef.value.id); 
  })
//  questions.value.forEach((item,index) => {
//     options.value.push(item.text)
//   });

  messagesJson.greeting.forEach(item => {
    messages.value.push(
      {
        style:"answer",
        text: item
      }
    )
  });
  getOptions()
  
  // messages.value =  messagesJson.greeting.map(getAnswer)

  function toggleShowMes(){   //show and hide chatbox
    showMesBox.value = !showMesBox.value
  }
  

  function reply(question, index){
    showOptions.value = false
    //show user's selection in the chat box as a message
    messages.value.push({
      style:"question",
      text: question
    })
    //show all the answers for the question in the chat box 
    const answers =  quesList.value[index].answers // get a list of answer
    addMes(answers)
    
    
    // decide if the chosen question has more sub question
    if (quesList.value[index].questions != undefined) {
      quesList.value = quesList.value[index].questions
      getOptions()
    }
    scroll()
  }

  
  
  function getQuesText(question){
    return question.text
  }

  function getOptions (){
    options.value = quesList.value.map(getQuesText)
  }
  function scroll() {
    nextTick(()=>{
    contentRef.value.scrollTop = contentRef.value.scrollHeight
    // console.log(contentRef.value.scrollTop)
  })
  }
   


  // function getAnswer(answer) {
  //   return {
  //     style:"answer",
  //     text: answer
  //   }
  // }

  function addMes(mesList) {      //function to add new message to the chain one by one with a delay
    let i = 0
    const intervalID = setInterval(()=>{
      messages.value.push({
      style:"answer",
      text: mesList[i]
      })
      // scroll the chatbox to bottom
      scroll()
      i++
      if (i === mesList.length) {   // check if the all new messages are added
        clearInterval(intervalID)
        setTimeout(() => {
          showOptions.value = true
          scroll()
        }, 1200)
        
      }
      // console.log(content.scrollHeight);
    },1200)
    
  }

</script>

<style>
.invisible {
  visibility: hidden;
}
.delay-enter-active {
  animation-name: popup;
  /* animation-duration: 1s; */
  }
@keyframes popup {
  0% {opacity: 0;}
  99%{opacity: 0;}
  100% {opacity: 1;}
}
.options {
  background-color: rgba(255, 208, 173, 0.525);
  margin: 10px;
  padding: 10px;
  width: fit-content;
  max-width: 70%;
  text-align: left;
}
.options:hover {
  cursor: pointer;
  background-color: rgb(255, 208, 173);
}
#mesContent {
  /* background-color: blue; */
  flex: 1;
  /* height: 900px; */
  overflow-y: scroll;
}
.textBubble {
  border: solid;
  border-color: rgb(177, 177, 177);
  border-width: 1px;
  padding: 20px;
  margin: 2px;
  border-radius: 10px;
  width: fit-content;
  max-width: 70%;
  text-align: left;
  transition: 1s;

}
.question {
  background-color: black;
  color: white;
  margin-left: auto;
  margin-right: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.answer {
  margin-left: 15px;
  margin-top:7px;
  margin-bottom:7px;
}
.closeButton {
  height:45px ;
  width: 45px;
  margin-right: 10px;
}
.botName {
  flex: 1;
  color: white;
}
.nameBar {
  height: 80px;
  border-radius: 0;
  background-color: rgb(33, 33, 33);
  display: flex;
 align-items: center;
}
.mesBox {
  display: flex;
  flex-direction: column;

  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 30%;
  height: 90%;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.139);
  font-size: 15px;
  font-family: Calibri, sans-serif
}
.messageIcon {
  background-color: white;
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 65px;
  height: 65px;
  border-radius: 32.5px;
  overflow: hidden;
  
}

.messageIcon img {
  object-fit:cover;

}
.messageIcon img:hover {
  opacity: 0.9;
  cursor: pointer;
}
</style>