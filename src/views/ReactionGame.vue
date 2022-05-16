<template>
  <div class="whole">
  <div class="game">
    <div class="char">
      
      <!-- <div class="ghostBox" id="ghost2"> -->

      <img id="ghost" :src="ghostImg" alt="no image">
      <div id="gap"></div>
      <!-- </div> -->
      
      <img id="human" :src="humanImg" alt="no image">
    </div>
    <button class="button start" @click="startGame" v-if="gameStage==='start'">Start</button>
    <button class="button flash" @click="stop" v-if="gameStage==='playing'">FLASH!</button>
    <p v-if="gameStage==='finished'">Score: {{score}}</p>
    <button class="button restart" @click="restart" v-if="gameStage === 'finished'">Restart</button>
  </div>
    <div class="instruction">
      <button class="buttonInst" @click="toggleInstruction">{{instButtonName}}</button>
      <p v-if="showInstruction">Use your flashlight to stop the ghost from getting you. The closer you let it, the higher score you get.</p>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
import {ref,computed} from 'vue'
const showInstruction = ref(false)
const instButtonName = ref('Show instruction')
const gameStage = ref('start')
const timeStart = ref(0)
const time = ref(0)
const score = ref(0)
const lostGame = ref(false)
const humanImg = ref(require('@/assets/reaction-game/human.png'))
const ghostImg = ref(require('@/assets/reaction-game/ghost.png'))
const timeOutID = ref()

function toggleInstruction() {
  showInstruction.value = !showInstruction.value
  if (showInstruction.value) {
    instButtonName.value = 'Hide instruction'
  } else {instButtonName.value = 'Show instruction'}
}

function startGame(){
  // interval.value = setInterval(function(){time.value++},10)
  timeOutID.value = setTimeout(gameOver,500)
  timeStart.value = Date.now()
  document.getElementById('gap').style.animationPlayState = 'running';
  gameStage.value = 'playing'
}

function gameOver() {
  humanImg.value = require('@/assets/reaction-game/humanDead.png')
  ghostImg.value = require('@/assets/reaction-game/ghostSmile.png')
  lostGame.value = true
  console.log('game over');
  gameStage.value = 'finished'
}

function stop(){
  clearTimeout(timeOutID.value)
  if (lostGame.value === false) {
    document.getElementById('gap').style.animationPlayState = 'paused';
  document.getElementById('human').style.transform = 'scaleX(-1)';
    time.value = Date.now() - timeStart.value
    score.value = Math.trunc(100000*Math.pow(time.value/520,2))
  }
  gameStage.value = 'finished'
  // console.log(document.getElementById('gap').style.animation);
}
function restart(){
  router.go(0)
}
</script>

<style scoped>
p {
  text-align: center;
}
.button {
  padding: 15px 25px;
  background-color: rgb(237, 93, 93);
  border: none;
  margin-top: 30px;
}
.button:hover {
  opacity: 0.9;
}
.whole {
  background-color: white;
  width: 700px;
  margin: auto;
  border-radius: 20px;
  overflow: hidden;
}
.instruction {
  border-radius: 0;
  /* background-color: white; */
  text-align: left;
  width: 700px;
  padding-left: 10px;
  /* margin: auto; */
}
.instruction button {
  border: solid;
  border-color: rgb(139, 133, 138);
  background-color: rgb(237, 227, 240);
}
.instruction p {
  margin-top: 0;
  padding: 10px;
  /* padding: 10px; */
}
.restart {
  margin-top: 0;
  /* padding: 15px 25px;
  background-color: rgb(237, 93, 93); */
  /* border: none; */
  /* margin-bottom: 20px; */
}
/* .button1:hover {
  opacity: 0.9;
} */
.flash{
  /* padding: 20px 30px; */
  background-color: rgb(163, 233, 93);
  border: solid;
  border-color: rgb(102, 150, 19);
}
.game  {
  /* background-color: white; */
  height: 330px;
  /* width: 700px; */
  border-radius: 0;
  /* margin: auto; */
  text-align: center;
}
#gap {
  /* background-color: red; */
  flex: 1;
  border-radius: 0;
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  animation: shrink 0.52s ease-in; 
  animation-fill-mode: both;
  animation-play-state: paused;
}
@keyframes shrink {
  0% {}
  100% {flex: 0;}
}
.char {
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 50px 100px 30px;
  /* margin-bottom: 50px; */
  /* margin-top: 50px; */
  /* background-color: blue; */
  /* width: 50%; */
  /* margin: auto; */
}
img {
  height: 100px;
  width: auto;
  object-fit:scale-down;
}
.human {
  /* margin-left: auto; */
}
/* .ghostBox {
  background-color: red;
  flex: 1;
  text-align: right;
  border-radius: 0;
} */
</style>
