<template>
  <transition name="fade">
    <WelcomePage></WelcomePage>
  </transition>
  
</template>

<script>

import WelcomePage from './components/WelcomePage.vue'

export default {
  name: 'App',
  components: {
    WelcomePage,
  }
}
</script>

<style>

#app {
  font-family: Droid Sans Mono;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
  display: flex;
  flex-direction: column;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #060709;
  max-height: 100vh; /* Minimum height to cover the whole viewport */


}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

header h1 {
  margin: 0;
}

main {
  flex: 1; /* Take remaining vertical space */
  padding: 20px;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
</style>
