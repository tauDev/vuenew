<template>
<div id="p2">
    <h1>Page2</h1>
    <p>Original message: "{{ tickets }}"</p>
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
        created() {
            axios.get('http://localhost:3000/show')
            //http://jsonplaceholder.typicode.com/todos
            .then(response => {
                this.tickets = response.data
            })
        }
}
</script>
