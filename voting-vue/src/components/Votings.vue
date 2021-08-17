<template>
  <div v-if="state === 'open'">
    <button @click="goBack()">Voltar</button>
  </div>
  <div v-else-if="state === 'new' || state === 'edit'">
    <h1>Formulário de votação</h1>
  </div>
  <div v-else-if="state === 'listing'">
    <h1>Votações</h1>
    <p><button @click="newVoting()">Nova votação</button></p>
    <p class="vote" v-for="(voting, index) in votings" :key="index">
      {{ voting.title }}
      <span class="option" v-for="(option, index) in voting.votes" :key="index">
        {{ option.option }} ({{ option.count }})
      </span>
      <br />
      <button class="listing" @click="editVoting(index)">Editar</button>
      <button class="listing" @click="removeVoting(index)">Remover</button>
      <button class="listing" @click="openVoting(index)">Abrir</button>
    </p>
  </div>
</template>

<script>
import { ref } from "vue";

import {
  votings,
  createVoting,
  updateVoting,
  deleteVoting,
} from "../api/votings";

export default {
  components: {},
  data: () => ({
    state: ref("listing"),
    current: ref(0),
  }),
  methods: {
    newVoting() {
      createVoting();
      this.current.value = votings.length - 1;
      this.state.value = "new";
    },
    editVoting(index) {
      this.current.value = index;
      this.state.value = "edit";
    },
    removeVoting(index) {
      deleteVoting(index);
    },
    openVoting(index) {
      this.current.value = index;
      this.state.value = "open";
    },
    updateChanges(voting) {
      updateVoting(voting, this.current.value);
    },
    cancelChanges() {
      if (this.state.value === "new") deleteVoting(votings.length - 1);
      this.state.value = "listing";
    },
    goBack() {
      this.state.value = "listing";
    },
  },
};
</script>
