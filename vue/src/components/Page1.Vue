<template>
  <div class="container">
    <!-- <p>{{ items }}</p>-->
    <form>
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
            <tr
              v-for="item in items"
              :key="item._id">
              <td>{{ item._id }}</td>
              <td>{{ item.No }}</td>
              <td>{{ item.Uname }}</td>
              <td>{{ item.Password }}</td>
              <td>
                <button
                  class="btn btn-warning"
                  @click="setUpdate(item._id,item.No,item.Uname,item.Password)">edit
                </button>
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  @click="remove(item)">delete
                </button>
              </td>
              <td style="display:none;">{{ No = items.length +1 }}</td>
            </tr>
          </table>
        </div>
      </div>
    </form>
    <hr>
    <div class="row">
      <div class="form-group">
        <input
          v-model="No"
          class="form-control"
          style="margin-bottom: 20px"
          type="text"
          name="No"
          placeholder="No">
        <input
          v-model="Uname"
          class="form-control"
          style="margin-bottom: 20px"
          type="text"
          name="Uname"
          placeholder="name">
        <input
          v-model="Password"
          class="form-control"
          style="margin-bottom: 20px"
          type="password"
          name="Password"
          placeholder="Password">
        <button
          class="btn btn-outline-success"
          type="submit"
          @click="postPost()">
          create
        </button>
      </div>
    </div>
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
      msg: '',
      backup: {}// used to save old value to search
    }
  },
  created () {
    this.loadData().then(response => { this.items = response.data })
  },
  methods: {
    postPost: function (event) {
      axios.post('http://192.168.0.124:3000/insert', {
        No: this.No,
        Uname: this.Uname,
        Password: this.Password
      }).then(result => { window.location.reload(true) })
    },
    setUpdate: function (event, event1, event2, event3) {
      this.$router.push('Edit/' + event + '/' + event1 + '/' + event2 + '/' + event3)
    },
    loadData () {
      return axios.get('http://192.168.0.124:3000/show')
    }
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
