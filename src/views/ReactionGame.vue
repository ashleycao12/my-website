<template>
  <!-- contend wrapper -->
  <div class="bg-white w-11/12 md:w-3/5 mx-auto rounded-3xl border border-red-200 overflow-hidden">  
  
  <div class="text-center">  <!-- game area-->
    <!-- characters-->
    <div class="flex justify-end px-20 py-12 ">
      <img class="h-14 sm:h-20 md:h-28 w-auto object-scale-down" id="ghost" :src="ghostImg" alt="no image">
      <div id="gap"></div>
      <img class="h-14 sm:h-20 md:h-28 w-auto object-scale-down" id="human" :src="humanImg" alt="no image">
    </div>
    <!-- buttons -->
    <button class="py-4 px-7 bg-rose-400 border-2 border-rose-600 mt-12 rounded-lg" @click="startGame" v-if="gameStage==='start'">Start</button>
    <button class="py-4 px-7 bg-lime-300 border-2 border-lime-600 mt-12 rounded-lg " @click="stop" v-if="gameStage==='playing'">FLASH!</button>
    <p class="text-center font-biotif text-gray-500" v-if="gameStage==='finished'">Score: {{score}}</p>
    <button class="pt-4 pb-5 px-7 bg-rose-400 border-2 border-rose-600 rounded-lg mt-5" @click="restart" v-if="gameStage === 'finished'">Restart</button>
  </div>

  <!-- instruction -->
    <div class="">
      <button class="mt-5 ml-1 p-1 border-2 bg-slate-100 border-gray-400 rounded-full" @click="toggleInstruction">{{instButtonName}}</button>
      <p class="p-6 pt-2" v-if="showInstruction">Use your flashlight to stop the ghost from getting you. The closer you let it, the higher score you get.</p>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
import {ref} from 'vue'
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
}
function restart(){
  router.go()
}
</script>

<style scoped>
  #gap {
    flex: 1;
    border-radius: 0;
    animation: shrink 0.52s ease-in; 
    animation-fill-mode: both;
    animation-play-state: paused;
  }
  @keyframes shrink {
    0% {}
    100% {flex: 0;}
  }
</style>
