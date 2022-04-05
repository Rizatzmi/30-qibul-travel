<template>
  <v-app-bar app elevation="5" elevate-on-scroll dark color="#000" id="navbar">
    <div class="container">
      <v-row>
        <h1>QTravel</h1>

        <ul>
          <li><router-link to="/" class="link">Home</router-link></li>
          <li><router-link to="/" class="link">Destination</router-link></li>
          <li><router-link to="/blog" class="link">Blog</router-link></li>
          <li><router-link to="/" class="link">About</router-link></li>
          <li><router-link to="/" class="link">Contact</router-link></li>
        </ul>
      </v-row>
    </div>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  color: inherit;
  text-decoration: none;
}

ul {
  font-weight: 700;
  font-size: 18px;
  list-style: none;
  display: flex;
  width: 40%;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
}
</style>
