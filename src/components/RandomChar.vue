<template>
  <div class="data">
    <img v-bind:src="data.image" />
    <h1>{{ data.name }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RandomChar',
  props: {
    data: String
  },
   created() {
    axios.get(`https://rickandmortyapi.com/api/character/`+Math.floor(Math.random()*423))
    .then(response => {
      this.data = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>