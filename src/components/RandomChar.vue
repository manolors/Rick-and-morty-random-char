<template>
  <div class="data">
    <img v-bind:src="data.image" />
    <h1>{{ data.name }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

console.log(process.env)
let MAX_CHARS = process.env.MAX_CHARS || 423;
let charId = process.env.CHAR_ID || Math.floor(Math.random()*MAX_CHARS)

export default {
  name: 'RandomChar',
  props: {
    data: String
  },
   created() {
    axios.get(`https://rickandmortyapi.com/api/character/` + charId)
    .then(response => {
      this.data = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>