<template>
<div class="container">
    <h1>Edit</h1>
    <div class="text-left">
    <div class="form-group">
        <label for="No">No :</label>
        <input type="text" v-model="id" class="form-control">        
    </div>
    <div class="form-group">
        <label for="name">Name :</label>
        <input type="text" v-model="uname" class="form-control">
    </div>
    <div class="form-group">
        <label for="password">Password :</label>
        <input type="password" v-model="pass" class="form-control">
    </div>
        <button type="submit" class="btn btn-success" @click.prevent="GoBack(id,uname,pass)">Submit</button>
    </div>
    <p>{{ msg }} </p><p>{{ id }}</p><p>{{ uname }}</p><p>{{ pass }}</p>
</div>
</template>

<script>
//import router from '../router'
import axios from 'axios'
export default {
    name: 'Edit',
    data () {
        return {
            id: 0,
            uname: '',
            pass: '',
            msg: 'Hey com here !'
        }
    },
    created() {
        this.id = this.$route.params.id
        this.uname = this.$route.params.uname
        this.pass = this.$route.params.password
    },
    methods: {
        navigate() {
            router.go(-1)
        },
        GoBack: function(event,event1,event2){
            //alert("name:" + event)
         axios.post('http://192.168.0.124:3000/update',{
          id: event,
          uname: event1,
          pass: event2
        })
        .then(result => {
         // this.msg = result.data
         this.$router.push('/page1')
        })
            //this.$router.push('/page1')
        }
    }
}
</script>
