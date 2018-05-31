<template>
<div class="container">
    <h1>Edit</h1>
    <form class="text-left">
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
        <input type="submit" text="Submit">
    </form>
    <p>{{ msg }} </p><p>{{ id }}</p><p>{{ uname }}</p><p>{{ pass }}</p>
</div>
</template>

<script>
//import router from '../router'
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
        }
    }
}
</script>
