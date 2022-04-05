<template>
  <header>
    <div class="hero">
      <div class="overlay"></div>
      <div class="hero-text">
        <p>Virginia, USA</p>
        <h1>Mountain Lake</h1>
        <v-btn
          x-large
          outlined
          elevation="0"
          color="#00A2CC"
          style="color: white"
          >Explore</v-btn
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.hero {
  background-image: url("@/assets/hero.jpg");
  background-size: cover;
  background-position: top;
  height: 100vh;
  position: relative;
}

.hero .hero-text {
  position: absolute;
  bottom: 15%;
  left: 10%;
}

.hero .hero-text h1 {
  font-weight: 800;
  font-size: 64px;
  line-height: 75px;
  color: #ffffff;
  margin-bottom: 40px;
}

.hero .hero-text p {
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.05em;
  color: #ffffff;
}
</style>
