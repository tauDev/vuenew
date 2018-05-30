<template>
<div class="pageEdit">
    <h1>Edit</h1>
    <p>{{ msg }} </p><p>{{ id }}</p>
    </div>
</template>

<script>
//import router from '../router'
export default {
    name: 'Edit',
    data () {
        return {
            id: 0,
            msg: 'Hey com here !'
        }
    },
    created() {
        this.id = this.$route.params.id
    },
    methods: {
        navigate() {
            router.go(-1)
        }
    }
}
</script>
