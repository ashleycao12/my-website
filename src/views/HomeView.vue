<template>
  <div class="intro">
    <div class="text">
      <h1>Hi. I'm Ashley.</h1>
      <h1>A developer</h1>
      <p>I'm passionate about programming and creating IT solutions. Below are some mini projects that I did for fun.</p>
    </div>
      <div class= "gif">
        <div class="eyes">
          <div></div>
          <div></div>
        </div>
          <img src="@/assets/smile.png" alt="">
      </div>
  </div>
  <div class="project" ref="project1" @click= "goQuiz">
    <div class="projectContent">
    <h3>Quiz: What kind of bean are you? </h3>
    <img class="projectImg" src="@/assets/quiz/mixedBean.jpg" alt="no image">
    </div>
  </div>
  <div class="project" @click= "goReactionGame">
    <div class="projectContent">
    <h3>Mini game: How close can you get? </h3>
    <img class="projectImg" src="@/assets/reaction-game/thumbnail.png" alt="no image">
    </div>
  </div>
</template>

<script setup>
  import router from '@/router'
  import {watch, ref} from 'vue'
  const props = defineProps({projectClick: Number})
  const project1 = ref(null)
  watch(() => props.projectClick, ()=>{
    project1.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
  })
  function goQuiz() {
    router.push({name:'quiz'})
  }
  function goReactionGame() {
    router.push({name:'reactionGame'})
  }
  
</script>

<style scoped>
  .eyes {
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
     
    /* 100% {transform: scaleY(1);} */
  }
  .intro {
    display: flex;
    flex-direction: row;
    margin: 50px;
    
    /* font-family:  system-ui, Biotif-Regular,Helvetica Neue,Helvetica,Arial,sans-serif; */
    /* height: 500px; */
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
    /* height: 500px; */
    background-color: rgb(0, 0, 0);
    border-radius: 3vw;
  }
  .gif img {
    /* max-width: 80%; */
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
    /* height: 90%; */
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
    
  }
</style>