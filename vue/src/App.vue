<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar">
            <span class="icon-bar"/>
            <span class="icon-bar"/>
            <span class="icon-bar"/>
          </button>
          <a
            class="navbar-brand"
            href="#">WebSiteName
          </a>
        </div>
        <div
          id="myNavbar"
          class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><router-link to="/">Home</router-link></li>
            <li class="dropdown">
              <a
                class="dropdown-toggle"
                data-toggle="dropdown"
                href="#">Page 1<span class="caret"/>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link
                    to="/page1"
                    @click="movie()">page 1-1
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/page2"
                    @click="music()">page 1-2
                  </router-link>
                </li>
                <li><a href="#">page 1-3</a></li>
              </ul>
            </li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#"><span
                class="glyphicon glyphicon-user"/>Sign Up</a>
            </li>
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-log-in"/>Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
    movie () {
      this.$router.push({path: '/page1'})
    },
    music () {
      this.$router.push({path: '/page2'})
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
