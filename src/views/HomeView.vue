<template>
<!-- intro -->
  <div class="w-5/6 xl:w-2/3 2xl:w-3/5 max-w-5xl lg:flex mx-auto my-14">   
  <!-- text container-->
    <div class="text-center lg:text-left lg:w-1/2 mx-7 flex flex-col justify-center">  
      <h1 class="text-3xl sm:text-6xl font-bogart font-semibold sm:leading-snug">Hi. I'm Ashley.</h1>
      <h1 class="text-3xl sm:text-6xl font-bogart font-semibold sm:leading-snug">A developer</h1>
      <p class="text-left font-biotif text-gray-500 md:text-2xl my-5">I'm passionate about programming and creating IT solutions. Below are some mini projects that I did for fun.</p>
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

  <!-- projects -->
  <div class="bg-white h-56 sm:h-72 lg:h-96 w-5/6 md:w-3/5 max-w-3xl mx-auto my-24 rounded-3xl overflow-hidden border border-red-200 hover:shadow-2xl transition ease duration-300" ref="project1" @click= "goQuiz">  
    <!-- project content (so it can move up when hover)-->
    <div class="cursor-pointer hover:-translate-y-3 transition ease duration-300">                                                    
    <h3 class="pb-3 pt-6 sm:text-xl text-center font-bold text-gray-600">Quiz: What kind of bean are you? </h3>
    <img class="projectImg object-cover w-full" src="@/assets/quiz/mixedBean.jpg" alt="no image">
    </div>
  </div>
  <!--project 2-->
  <div class="bg-white h-56 sm:h-72 lg:h-96 w-5/6 md:w-3/5 max-w-3xl mx-auto my-24 rounded-3xl overflow-hidden border border-red-200 hover:shadow-2xl transition ease duration-300" @click= "goReactionGame">
    <div class="cursor-pointer hover:-translate-y-3 transition ease duration-300">
    <h3 class="pb-3 pt-6 sm:text-xl text-center font-bold text-gray-600">Mini game: How close can you get? </h3>
    <img class="projectImg object-cover w-full" src="@/assets/reaction-game/thumbnail.png" alt="no image">
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