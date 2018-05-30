<template>
<div class="container">
 <!-- <p>{{ items }}</p>-->
    <div class="row">
      <!--<p v-if="items" v-for="item in items" :key="item">item : {{ item }}</p>-->
               <div class="col-md-8">
                <table class="table table-bordered table-striped">
                    <thead>
                      <th style="text-align: center">ID</th>
                      <th style="text-align: center">NO</th>
                      <th style="text-align: center">NAME</th>
                       <th style="text-align: center">PASSWORD</th>
                    </thead>
                    <tr v-for="item in items" :key="item._id">
                      <td>{{ item._id }}</td>
                      <td>{{ item.No }}</td>
                      <td>{{ item.Uname }}</td>
                      <td>{{ item.Password }}</td>
                      <td><button class="btn btn-warning" v-on:click="setUpdate(item)">edit</button></td>
                      <td><button class="btn btn-danger" v-on:click="remove(item)">delete</button></td>
                    </tr>
                </table>
            </div>
            </div>
             <hr>
             <div class="row">
               <div class="form-group">
               <input class="form-control" style="margin-bottom: 20px" type="text" name="No" v-model="No" placeholder="No" />
                <input class="form-control" style="margin-bottom: 20px" type="text" name="Uname" v-model="Uname" placeholder="name" />
                <input class="form-control" style="margin-bottom: 20px" name="Password" v-model="Password" placeholder="Password" type="password" />
              </div>
               </div>
            <!-- {{ items }} -->
           <!-- <div class="col-md-4">
              <div class="form-group">
                <span><b>{{ action }}</b></span>
                <hr>
                <input class="form-control" style="margin-bottom: 20px" type="text" name="No" v-model="No" placeholder="No" />
                <input class="form-control" style="margin-bottom: 20px" type="text" name="Uname" v-model="Uname" placeholder="name" />
                <input class="form-control" style="margin-bottom: 20px" name="Password" v-model="Password" placeholder="Password" type="password" />
                <button class="btn btn-outline-primary" v-on:click="createItem">create</button>
                <button class="btn btn-outline-warning" v-on:click="updateItem">update</button>
                <button class="btn btn-outline-danger">delete</button>
              </div>
            </div>-->
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Page1',
 data () {
   return {
     items: [],
     No: '',
     Uname: '',
     Password: '',
     updateId: '',
     action: 'New item',
    update_id: '',
     backup: {} //used to save old value to search
   }
 },
 methods:{
   loadData () {
     return axios.get('http://localhost:3000/show')
   } 
 },
   created () {
     this.loadData()
            //http://jsonplaceholder.typicode.com/todos
            .then(response => {
                this.items = response.data
          })
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
