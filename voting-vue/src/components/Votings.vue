<template>
  <div v-if="state === 'open'">
    <VotingCard :title="votings[current].title" :state="votings[current].state" :votes="votings[current].votes" />
    <button @click="goBack()">Voltar</button>
  </div>
  <div v-else-if="state === 'new' || state === 'edit'">
    <h1>Formulário de votação</h1>
    <VotingForm 
      :voting="votings[current]" 
      @canceled="cancelChanges"
      @updated="updateChanges"
    />
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
import { ref } from "vue"
import VotingCard from "./VotingCard.vue"
import VotingForm from "./VotingForm.vue"

import {
  votings,
  createVoting,
  updateVoting,
  deleteVoting,
} from "../api/votings"

export default {
  components: {
    VotingCard,
    VotingForm
  },
  setup: () => {
    const state = ref("listing")
    const current = ref(0)
    
    const newVoting = () => {
      createVoting()
      current.value = votings.length - 1
      state.value = "new"
    }
    const editVoting = (index) => {
      current.value = index
      state.value = "edit"
    }
    const removeVoting = (index) => {
      deleteVoting(index)
    }
    const openVoting = (index) => {
      current.value = index
      state.value = "open"
    }
    const updateChanges = (voting) => {
      updateVoting(voting, current.value)
      state.value = "listing"
    }
    const cancelChanges = () => {
      if (state.value === "new") deleteVoting(votings.length - 1)
      state.value = "listing"
    }
    const goBack = () => { state.value = "listing" }

    return {
      votings,
      state,
      current,
      newVoting,
      editVoting,
      removeVoting,
      openVoting,
      updateVoting,
      updateChanges,
      cancelChanges,
      goBack
    }
  },
}
</script>
