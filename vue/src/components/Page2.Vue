<template>
<div>
    <h1>Page2</h1>
    <p>{{info}}</p>
 </div>
</template>

<script>
var url = 'http://localhost:3000/show'
export default {
  name: 'Page2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>