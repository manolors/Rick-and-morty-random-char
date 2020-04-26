<template>
  <div id="app">
    <img alt="Rick And Morty logo" src="./assets/logo.png">
    <RandomChar />
  </div>
</template>

<script>
import RandomChar from './components/RandomChar.vue'

export default {
  name: 'App',
  components: {
    RandomChar
  },
}
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
