<template>
  <div
    class="vote card"
    :class="{ 'vote result': this.votingState === 'closed' }"
  >
    <h3>
      <b>{{ title }}</b>
    </h3>
    <div v-if="this.votingState === 'open'">
      <VotingBooth :options="votingOptions" @onVote="vote" />
    </div>
    <div v-else-if="this.votingState === 'closed'">
      <VotingResult :votes="votingOptions" />
    </div>
    <div v-else>
      <p>[wrong state] {{ votingState }}</p>
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
    votingState: props.state,
    votingOptions: props.votes,
  }),
  methods: {
    vote(voteIndex) {
      this.votingOptions[voteIndex]["count"] =
        this.votingOptions[voteIndex]["count"] + 1;
      this.votingState = "closed";
    },
  },
};
</script>
