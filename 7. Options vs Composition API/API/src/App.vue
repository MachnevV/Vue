<template>
  <div class="nav">
    <router-link to="/">Options API</router-link> | 
    <router-link to="/composition">Composition API</router-link> | 
    <router-link to="/reactiveobj">Reactive Objects</router-link>
  </div>
  <router-view/>
</template>



<style>
.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

.logo {
  height: 12em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
