<template>
<!-- intro -->
  <div class="w-5/6 xl:w-2/3 2xl:w-3/5 max-w-5xl lg:flex mx-auto my-14">   
  <!-- text container-->
    <div class="text-center lg:text-left lg:w-1/2 mx-7 flex flex-col justify-center">  
      <h1 class="text-3xl sm:text-6xl font-bogart font-semibold sm:leading-snug">Hi. I'm Ashley.</h1>
      <h1 class="text-3xl sm:text-6xl font-bogart font-semibold sm:leading-snug">A developer</h1>
      <p class="text-left font-biotif text-gray-500 md:text-2xl my-5">I'm passionate about creating IT solutions. My career has been involving fullstack and data development. Below are some of my work.</p>
    </div>

    <!-- gif -->
      <div class= "lg:w-1/2 bg-black h-auto pt-28 pb-16 rounded-4xl lg:ml-10">  
        <!-- eyes -->
        <div class="flex justify-between w-2/5 m-auto">  
          <div class="eye w-9 h-11 rounded-full bg-white"></div>
          <div class="eye w-9 h-11 rounded-full bg-white"></div>
        </div>
          <img src="@/assets/smile.png" class="object-contain h-auto">
      </div>
  </div>

    <!--project 1-->
    <a href="https://caulong-phuocthien.web.app/en-nz">
    <div ref="project1" class="bg-white h-56 sm:h-72 lg:h-[30rem] w-5/6 md:w-3/5 max-w-3xl mx-auto my-24 rounded-3xl overflow-hidden border border-red-200 hover:shadow-2xl transition ease duration-300">
      <div class="cursor-pointer hover:-translate-y-3 transition ease duration-300">
        <h3 class="pb-3 pt-6 sm:text-xl text-center font-bold text-gray-600"> Badminton court booking web app </h3>
        <img class="projectImg object-fit w-full" src="@/assets/badminton.jpg" alt="badminton">
      </div>
    </div>
  </a>
  <!--project 2-->
  <a href="https://simple-games-95942.web.app/">
    <div ref="project2" class="bg-white h-56 sm:h-72 lg:h-[30rem] w-5/6 md:w-3/5 max-w-3xl mx-auto my-24 rounded-3xl overflow-hidden border border-red-200 hover:shadow-2xl transition ease duration-300">
      <div class="cursor-pointer hover:-translate-y-3 transition ease duration-300">
        <h3 class="pb-3 pt-6 sm:text-xl text-center font-bold text-gray-600"> My simple game website </h3>
        <img class="projectImg object-fit w-full" src="@/assets/game.png" alt="arcade">
      </div>
    </div>
  </a>
  <!-- project 3 -->
  <div class="bg-white h-56 sm:h-72 lg:h-[30rem] w-5/6 md:w-3/5 max-w-3xl mx-auto my-24 rounded-3xl overflow-hidden border border-red-200 hover:shadow-2xl transition ease duration-300" @click= "goQuiz">  
    <!-- project content (so it can move up when hover)-->
    <div class="cursor-pointer hover:-translate-y-3 transition ease duration-300">                                                    
    <h3 class="pb-3 pt-6 sm:text-xl text-center font-bold text-gray-600">Quiz: What kind of bean are you? </h3>
    <img class="projectImg object-cover w-full" src="@/assets/quiz/mixedBean.jpg" alt="beans">
    </div>
  </div>
</template>

<script setup>
  import router from '@/router'
  import {watch, ref} from 'vue'
  const props = defineProps({projectClick: Number})
  const project1 = ref(null)
  //wait for user to click on project on nav
  watch(() => props.projectClick, ()=>{
    project1.value.scrollIntoView({ behavior: 'smooth', block: 'center' })  //scroll to the first project
  })
  function goQuiz() {
    router.push({name:'quiz'})
  }
  function goReactionGame() {
    router.push({name:'reactionGame'})
  }
  
</script>

<style scoped>
  .eye {
    animation: blink 3s linear 0.0001s infinite;
  }
   @keyframes blink {
    0% {transform: scaleY(0.1) scaleX(1.4);}
    5% {transform: scaleY(1) scaleX(1);}
    10% {transform: scaleY(0.1) scaleX(1.4);}
    15% {transform: scaleY(1) scaleX(1);}
  }
</style>