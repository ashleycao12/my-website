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
    <div :class="showOptions1"> 
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
  import {ref, nextTick} from 'vue'
  import messagesJson from '@/assets/home/messages.json' 

  const showMesBox = ref(true)   
  const messages = ref([])  //all messages (both questions and answers) that will show in the chatbox
  const options = ref([])  //all of the options that user can click on
  const quesList = ref(messagesJson.questions)
  const quesList_unfiltered = ref(messagesJson.questions)  //to filter out the chosen option
  // const answers = ref([])
  const showOptions = ref(true)
  const showOptions1 = ref('visible')
  const contentRef = ref(null)
  const lastReply = ref('')
  const atSubQues = ref('false')
  
  //non-reactive variables
  const backOutOption = {text: "No, I want to ask more general questions", answers: ["Sure. How can I help?"]}
  const anythingElse = 'Anything else I can help?'
  const anythingElse1 = 'Anything other question in this topic?'

  lastReply.value = anythingElse

  messagesJson.greeting.forEach(item => {
    messages.value.push(
      {
        style:"answer",
        text: item
      }
    )
  });
  getOptions()
  

  /////// ***Reactive functions*** ///////
  function toggleShowMes(){   //show and hide chatbox
    showMesBox.value = !showMesBox.value
  }

  function reply(selection, index){
    // showOptions.value = false
    showOptions1.value = 'invisible'
    //show user's selection in the chat box as a message
    messages.value.push({
      style:"question",
      text: selection
    })
    //show all the answers for the question in the chat box 
    const answers =  quesList.value[index].answers.slice() // get a new list of answers from the selected question
    
    /// decide if the user is in sub questions series and choose to go back
    if (atSubQues.value && selection === backOutOption.text){ 
      quesList_unfiltered.value = messagesJson.questions  //reset to the original question list
      quesList.value = quesList_unfiltered.value.slice()  //reset to the original question list
      atSubQues.value = false
      lastReply.value = anythingElse
      getOptions()
    }

    /// decide if the chosen question has sub questions inside
    else if (quesList.value[index].questions != undefined) {
      quesList_unfiltered.value = quesList_unfiltered.value[index].questions.slice()    // if yes, move to the new question level
      quesList_unfiltered.value.push(backOutOption)
      quesList.value = quesList_unfiltered.value.slice()
      atSubQues.value = true
      lastReply.value = anythingElse1
      getOptions()
    } 
    //if none of the above special cases are true
    else { 
      answers.push(lastReply.value)
      //reset the quesList back to unfiltered list, so that the final list only exclude the current selection
      quesList.value = quesList_unfiltered.value.slice()
      //filter out the chosen option
      quesList.value = quesList.value.filter((question)=>question.text != selection)
      console.log(quesList.value);
      getOptions()
    }

    addMes(answers)
    scroll()
  }

 ////*** Contributing functions ***//// 
  function getOptions (){
    options.value = quesList.value.map((item)=>item.text)
  }

  function scroll() {
    nextTick(()=>{
    contentRef.value.scrollTop = contentRef.value.scrollHeight
    // console.log(contentRef.value.scrollTop)
  })
  }
   

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
          showOptions1.value = 'visible'
          scroll()
        }, 1500)
        
      }
      // console.log(content.scrollHeight);
    },1500)
    
  }

</script>

<style>
.invisible {
  visibility: hidden;
}
.visible {
  visibility:visible;
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