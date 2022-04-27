<template>
  <div class="intro">
    <div class="text">
      <h1>Hi I'm Ashley</h1>
      <p>I'm a programming enthusiast who would love to become a web developer.</p>
    </div>
      <div class= "gif placeholder">Place holder</div>
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
  .intro {
    display: flex;
    flex-direction: row;
    margin: 50px;
  }
  .intro>.text {
    flex: 1;
    padding: 100px 50px;
  }
  .gif {
    height: 500px;
    background-color: black;
    flex: 1;
  }
  .project {
    background: pink;
    margin: 50px 150px;
    height: 400px;
  }
</style>