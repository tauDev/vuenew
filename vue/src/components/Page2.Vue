<template>
<div class="page2">
    <h1>Page2</h1>
    <p v-for="tic in tickets" :key="tic">Original message: "{{ tic.No }}"</p>
 </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Page2',
    data () {
        return {
            tickets: []
        }
    },
        mounted() {
            axios.get('http://localhost:3000/display')
            //http://jsonplaceholder.typicode.com/todos
            .then(response => {
                this.tickets = response.data
            })
        }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
