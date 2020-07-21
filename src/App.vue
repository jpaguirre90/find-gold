<template>
  <div id="app">
    <ninjaOro/>
  </div>
</template>

<script>
import ninjaOro from './components/ninjaOro'

export default {
  name: 'App',
  components: {
    ninjaOro
  }
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
