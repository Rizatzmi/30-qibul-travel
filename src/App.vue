<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 75%;
  margin: 0 auto;
}

.cta {
  padding: 12px 22px;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
}

.btn-blue {
  background-color: #395165;
  color: white;
}

.btn-yellow {
  background-color: #395165;
  color: white;
}

.btn-badge {
  padding: 5px 10px;
  border: none;
  outline: none;
  border-radius: 5px;
}

.overlay {
  width: 100%;
  height: 100%;
  background: rgba(92, 92, 92, 0.32);
}

a {
  text-decoration: none;
  color: inherit;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
