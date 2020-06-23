<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Header,
    Home
  }
};
</script>

<style>
html {
  overflow-y: hidden;
}
#app {
  background-color: #5f3eb3;
  width: 100vw;
  height: 100vh;
}
</style>
