<template>
  <div>
    <ol>
      <li v-for="(item, index) in votes" :key="index">
        {{ item.option }}: {{ item.count }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    votes: Array,
  },
};
</script>
