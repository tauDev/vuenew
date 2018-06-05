<template>
  <div class="container">
    <h1>Edit</h1>
    <div class="text-left">
      <div class="form-group">
        <label for="Id">Id :</label>
        <input
          v-model="id"
          type="text"
          class="form-control">
      </div>
      <div class="form-group">
        <label for="No">No :</label>
        <input
          v-model="No"
          type="text"
          class="form-control">
      </div>
      <div class="form-group">
        <label for="name">Name :</label>
        <input
          v-model="uname"
          type="text"
          class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password :</label>
        <input
          v-model="pass"
          type="password"
          class="form-control">
      </div>
      <button
        type="submit"
        class="btn btn-success"
        @click.prevent="GoBack(id,uname,pass)">Submit
      </button>
    </div>
    <p>{{ msg }} </p><p>{{ id }}</p><p>{{ uname }}</p><p>{{ pass }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Edit',
  data () {
    return {
      id: '',
      No: '',
      uname: '',
      pass: '',
      msg: 'Hey com here !'
    }
  },
  created () {
    this.id = this.$route.params.id
    this.No = this.$route.params.No
    this.uname = this.$route.params.uname
    this.pass = this.$route.params.password
  },
  methods: {
    navigate () { this.$router.go(-1) },
    GoBack: function (event, event1, event2) {
      axios.post('http://192.168.0.124:3000/update', {
        id: event,
        uname: event1,
        pass: event2
      }).then(result => { this.$router.push('/page1') })
    }
  }
}
</script>
