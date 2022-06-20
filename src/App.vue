<template>
  <div id="app">
    <b-card title="Card Title" no-body>
      <b-card-header
        style="background-color: rgb(220, 110, 120)"
        header-tag="nav"
      >
        <b-nav card-header>
          <b-navbar-brand tag="h1" class="mb-0">被粉饰的迷局</b-navbar-brand>
          <b-nav-item to="/" exact exact-active-class="active">首页</b-nav-item>
          <b-nav-item to="/PricePage" exact exact-active-class="active"
            >价格实时</b-nav-item
          >
          <!-- <b-nav-item to="/CommPage" exact exact-active-class="active"
            >舆情实时(组件备注)</b-nav-item
          > -->
        </b-nav>
      </b-card-header>

      <b-card-body>
        <router-view></router-view>
        <!-- <nuxt-child></nuxt-child> -->
      </b-card-body>
      <b-card-footer
        style="background-color: rgb(220, 110, 120); color: whitesmoke"
      >
        2022 © 深圳大学传播学院
      </b-card-footer>
    </b-card>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-item.nav-item.nav-item a {
  color: whitesmoke;
}
nav {
  padding: 30px;
  color: whitesmoke;
}
.card-body {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-size: cover; */
  /* background-position: top center; */
}
nav a {
  font-weight: bold;
  color: whitesmoke;
}
.white-text {
  color: whitesmoke;
}
nav a.router-link-exact-active {
  color: #42b983;
}
html {
  overflow-y: scroll;
}

:root {
  overflow-y: auto;
  overflow-x: hidden;
}

:root body {
  position: absolute;
}

body {
  width: 100vw;
  overflow: hidden;
}
</style>
