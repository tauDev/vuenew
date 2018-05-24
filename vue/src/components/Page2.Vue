<template>
<div>
    <h1>Page2</h1>
    <p>{{info}}</p>
 </div>
</template>

<script>
export default {
  name: 'Page2',
  data () {
    return {
      info: []
    }
  },
  created () {
     this.axios.get('').then((response) => {
         console.log(response.data.Uname)
     })
    }
  }
</script>