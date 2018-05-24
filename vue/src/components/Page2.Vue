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
  data: {
    info: null,
    err: null
  },
  created: function () {
     this.init();
    },
    methods: {
        init: function(){
            this.loadData();
        },
        loadData: function(){

            this.$http.get(url).then((response) => {
                if(!!response.body) {
                    this.info = response.body;
                }
            }, (response) => {
                this.err = response;
            });
        }
    }
  }
</script>