<template>
  <div id="app">
    <VotingCard :title="this.title" :state="'open'" :votes="this.votes" />
  </div>
</template>

<script>
import VotingCard from "./components/VotingCard.vue";

export default {
  name: "App",
  components: {
    VotingCard,
  },
  data: () => ({
    title: "Pink Floyd é a melhor banda de Rock britânica?",
    votes: [
      { option: "Sim", count: 10 },
      { option: "Não", count: 2 },
    ],
  }),
};
</script>

<style>
@import "./App.css";
</style>
