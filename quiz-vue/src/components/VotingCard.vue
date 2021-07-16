<template>
  <div
    class="vote card"
    :class="{ 'vote result': this.quizState === 'closed' }"
  >
    <h3>
      <b>{{ title }}</b>
    </h3>
    <div v-if="this.quizState === 'open'">
      <VotingBooth :options="quizOptions" @onVote="vote" />
    </div>
    <div v-else-if="this.quizState === 'closed'">
      <VotingResult :votes="quizOptions" />
    </div>
    <div v-else>
      <p>[wrong state] {{ quizState }}</p>
    </div>
  </div>
</template>

<script>
import VotingBooth from "./VotingBooth.vue";
import VotingResult from "./VotingResult.vue";

export default {
  props: {
    title: String,
    state: String,
    votes: Array,
  },
  components: { VotingBooth, VotingResult },
  data: (props) => ({
    quizState: props.state,
    quizOptions: props.votes,
  }),
  methods: {
    vote(voteIndex) {
      this.quizOptions[voteIndex]["count"] =
        this.quizOptions[voteIndex]["count"] + 1;
      this.quizState = "closed";
    },
  },
};
</script>
