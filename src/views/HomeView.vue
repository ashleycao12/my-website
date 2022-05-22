<template>
  <div class="mx-5 lg:flex md:mx-32 my-14"> <!-- intro -->
    <div class="text-center lg:text-left lg:w-1/2 mx-7 flex flex-col justify-center">
      <h1 class="text-3xl sm:text-6xl font-bogart font-semibold sm:leading-snug">Hi. I'm Ashley.</h1>
      <h1 class="text-3xl sm:text-6xl font-bogart font-semibold sm:leading-snug">A developer</h1>
      <p class="text-left font-biotif text-gray-500 md:text-2xl my-5">I'm passionate about programming and creating IT solutions. Below are some mini projects that I did for fun.</p>
    </div>
      <div class= "lg:w-1/2 bg-black h-auto pt-28 pb-16 rounded-4xl lg:ml-10">  <!-- gif -->
        <div class="flex justify-between w-2/5 m-auto">  <!-- eyes -->
          <div class="eye w-9 h-11 rounded-full bg-white"></div>
          <div class="eye w-9 h-11 rounded-full bg-white"></div>
        </div>
          <img src="@/assets/smile.png" class="object-contain h-auto">
      </div>
  </div>
  <div class="bg-white h-44 md:h-80 lg:h-96 w-3/5 mx-auto my-24 rounded-3xl overflow-hidden border border-red-200 hover:shadow-2xl transition ease duration-300" ref="project1" @click= "goQuiz">  <!-- project container -->
    <div class="cursor-pointer hover:-translate-y-3 transition ease duration-300">                                                    <!-- project content (so it can move up when hover)-->
    <h3 class="pb-3 pt-6 sm:text-xl text-center font-bold text-gray-600">Quiz: What kind of bean are you? </h3>
    <img class="projectImg object-cover w-full" src="@/assets/quiz/mixedBean.jpg" alt="no image">
    </div>
  </div>
  <div class="bg-white h-44 md:h-80 lg:h-96 w-3/5 mx-auto my-24 rounded-3xl overflow-hidden border border-red-200 hover:shadow-2xl transition ease duration-300" @click= "goReactionGame">
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
  /* .eyes {
    background-color: rgb(0, 0, 0);
    margin: 30% 30% 0;
    display: flex;
    justify-content: space-between;
    position: static;
  }
  .eyes div{
    background-color: white;
    position: inherit;
    height: 3.7vw;
    width: 3vw;
    border-radius: 2vw;
    animation: blink 3s linear 0.0001s infinite;
  }
  @keyframes blink {
    0% {transform: scaleY(0.1) scaleX(1.4);}
    5% {transform: scaleY(1) scaleX(1);}
    10% {transform: scaleY(0.1) scaleX(1.4);}
    15% {transform: scaleY(1) scaleX(1);}
     
  }
  .intro {
    display: flex;
    flex-direction: row;
    margin: 50px;
    
  }
  .intro>.text {
    flex: 1;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }

  .text p {
    margin: 0;
    padding: 0;
    font-size: 22px;
  }
  .text h1 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 5vw;
    text-align: left;
    line-height: 6vw;
  }
  .gif {
    flex:1;
    height: auto;
    overflow: hidden;
    background-color: rgb(0, 0, 0);
    border-radius: 3vw;
  }
  .gif img {
    height: auto;
    object-fit: contain;
    padding-bottom: 5vw;
  }
  .project {
    background: white;
    margin: 100px 150px;
    height: 30vw;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.15s;
    border: solid;
    border-width: 1px;
    border-color: rgb(221, 202, 202);
  }
  .project:hover{
    box-shadow: 0px 40px 40px 20px rgba(0, 0, 0, 0.141);
  }
  .projectImg {
    width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
  .projectContent h3 {
    padding: 25px 10px 0;
  }
  .projectContent {
    transition: 0.3s ease;
  }
  .projectContent:hover {
    transform: translate(0,-10px);
    
  } */
</style>