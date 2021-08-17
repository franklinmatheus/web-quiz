<template>
  <div id="app">
    <Votings />
  </div>
</template>

<script>
import Votings from "./components/Votings.vue";

export default {
  name: "App",
  components: {
    Votings
  }
};
</script>

<style>
@import "./App.css";
</style>
