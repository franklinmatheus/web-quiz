<template>
  <div>
    <ol>
      <li v-for="(item, index) in votes" :key="index">
        {{ item.option }}: {{ item.count }} ({{ perc(index) }}%)
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    votes: Array,
  },
  methods: {
    perc(index) {
      let total = this.votes.reduce((sum, item) => {return sum + item['count']}, 0)
      return (this.votes[index]['count']/total*100).toFixed(2) 
    }
  }
};
</script>
