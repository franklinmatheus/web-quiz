<template>
  <div id="app">
    <VotingCard :title="this.title" :state="'open'" :votes="this.votes"/>
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
      {option:"Sim",count:10},
      {option:'Não',count:2}
    ]
  })
};
</script>

<style>
.vote {
  padding: 1em;
  border-radius: 0.2em;
  border: 0.1em solid gray;
}

.vote.card {
  background-color: lightblue;
}

.vote.result {
  background-color: lightgray;
}

button {
  margin: 0.4em;
}
</style>
