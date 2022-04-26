<template>
  <div class="intro">
    <div class="text">
      <h1>Hi I'm Ashley</h1>
      <p>I'm a programming enthusiast who would love to become a web developer.</p>
    </div>
      <div class= "gif">Place holder</div>
  </div>
  <div class="project1">place holder</div>
  <div class="project1">place holder</div>
</template>

<script>
export default {

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
    border-radius: 20px;
    flex: 1;
  }
  .project1 {
    background: pink;
    margin: 50px 150px;
    height: 400px;
  }
</style>