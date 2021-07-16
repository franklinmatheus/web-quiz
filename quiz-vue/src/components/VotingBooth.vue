<template>
  <div>
    <button
      v-for="(item, index) in options"
      :key="index"
      @click="$emit('onVote', index)"
    >
      {{ item.option }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    onVote: Function,
  },
};
</script>
