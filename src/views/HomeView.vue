<template>
  <div class="intro">
    <div class="text">
      <h1>Hi I'm Ashley</h1>
      <p>I'm a programming enthusiast who would love to become a web developer.</p>
    </div>
      <div class= "gif placeholder">
        <div class="eyes">
          <div></div>
          <div></div>
        </div>
          <img src="@/assets/home/smile.png" alt="">
      </div>
  </div>
  <div class="project" @click= "goQuiz">
    <div class="projectQuiz">
    <h3>What type of bean are you? </h3>
    <img class="quizImg" src="@/assets/quiz/mixedBean.jpg" alt="no image">
    </div>
  </div>
  <div class="project" @click="goReactionGame">place holder</div>
</template>

<script>
import router from '@/router'
export default {
  setup(){
    function goQuiz() {
      router.push({name:'quiz'})
    }
    function goReactionGame() {
      router.push({name:'reactionGame'})
    }
    return{goQuiz,goReactionGame}
  }
}
</script>

<style>

  .eyes {
    background-color: rgb(0, 0, 0);
    margin: 35% 32% 0;
    display: flex;
    justify-content: space-between;
  }
  .eyes div{
    background-color: white;
    height: 40px;
    width: 30px;
    animation: blink 3s linear 0.0001s infinite forwards;
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
    /* background-color: orange; */
    height: 500px;
  }
  .intro>.text {
    flex: 1;
    padding: 150px 50px;
  }
  .gif {
    width: 450px;
    /* height: 500px; */
    background-color: rgb(0, 0, 0);
  }
  .gif img {
    max-width: 80%;
    height: auto;
    object-fit: contain;
  }
  .project {
    background: white;
    margin: 50px 150px;
    height: 400px;
    overflow: hidden;
    cursor: pointer;
  }
  .quizImg {
    /* height: 90%; */
    width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
  .projectQuiz h3 {
    padding: 25px 10px 0;
  }
  .projectQuiz {
    transition: 0.3s ease;
  }
  .projectQuiz:hover {
    transform: translate(0,-10px);
  }
</style>