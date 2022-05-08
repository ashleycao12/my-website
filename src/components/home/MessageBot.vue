<template>
<div class="messageIcon" @click="toggleShowMes">
  <img class="mesIconImg"  src="@/assets/messageIcon.png" alt="no image">
</div>
<!-- <MessageBot v-if="showMes"/> -->
  <div class="mesBox" v-if="showMes">
    <div class="nameBar">
      <div class="botName">
        <h3>
          Ashley Bot
        </h3> 
        <p>Ask me a question</p>
        </div>
      <button class="closeButton" @click="toggleShowMes">&#10006;</button>
    </div>
  <div class="mesContent">

      <div :class="item.style" v-for="item in mesList" :key="item">{{item.text}}</div>
    <!-- <div class="reply" v-for="item in reply"  :key="item">{{item}}</div> -->
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>

    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import mesList from '@/assets/home/messages.json' 

// const mesList2 = ref(mesList)
console.log(mesList);

const showMes = ref(true)
// const mes = ref(['a','b','c'])
// const reply = ref(['d','e','f'])
function toggleShowMes(){
  showMes.value = !showMes.value
}

</script>

<style>
.mesContent {
  background-color: blue;
  flex: 1;
  height: 900px;
  overflow: auto;
  
}
.mesContent div {
  border: solid;
  border-color: rgb(177, 177, 177);
  border-width: 1px;
  padding: 15px;
  margin: 2px;
  border-radius: 10px;
  width: fit-content;
  

}
.question {
 max-width: 70%;
  /* float: right; */
  background-color: black;
  color: white;
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