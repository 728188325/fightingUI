<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <ft-button>测试</ft-button>
    <ft-card
      imgSrc="a.jpg"
      :width="500"
      :imgHeight="300"
      summary="vue框架"
    ></ft-card>
    <br>
    <ft-card imgSrc="b.jpg" summary="vue框架">
      <template v-slot:footer>
        <p>三大框架之一</p>
      </template>
    </ft-card>
    <br>
    <ft-card imgSrc="c.jpg">
      react学习大法
      <template v-slot:footer>
        <p>三大框架之一</p>
      </template>
    </ft-card>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
