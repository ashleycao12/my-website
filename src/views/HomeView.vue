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
  <div class="project" @click= "goQuiz">Quiz</div>
  <div class="project">place holder</div>
</template>

<script>
import router from '@/router'
export default {
  setup(){
    function goQuiz() {
      router.push({name:'quiz'})
    }
    return{goQuiz}
  }
}
</script>

<style>
  div {
    border-radius: 20px;
  }
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
    animation: blink 2s linear 0.0001s infinite forwards;
  }
  @keyframes blink {
    0% {transform: scaleY(0.1) scaleX(1.4);}
    10% {transform: scaleY(1) scaleX(1);}
    20% {transform: scaleY(0.1) scaleX(1.4);}
    30% {transform: scaleY(1) scaleX(1);}
     
    /* 100% {transform: scaleY(1);} */
  }
  .intro {
    display: flex;
    flex-direction: row;
    margin: 50px;
    background-color: orange;
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
    background: pink;
    margin: 50px 150px;
    height: 400px;
  }
</style>