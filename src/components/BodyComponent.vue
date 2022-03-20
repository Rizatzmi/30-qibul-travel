<template>
  <main>
    <div class="container">
      <div class="hero-primary">
        <div class="hero">
          <div class="hero-image" id="hero-1">
            <div class="overlay"></div>
            <div class="hero-text">
              <h1 style="font-size:200%;">Let's explore incridible<br>
                place with us.
              </h1>
              <button type="button" class="cta btn-yellow">Explore</button>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-secondary">
        <div class="hero">
          <div class="hero-image" id="hero-2">
            <div class="overlay"></div>
            <div class="hero-text">
              <button type="button" class="btn-badge btn-grey">Travel</button>
              <h3>Mountain</h3>
              <p>Bromo Tengger Semeru</p>
            </div>
          </div>
        </div>
        <div class="hero">
          <div class="hero-image" id="hero-3">
            <div class="overlay"></div>
            <div class="hero-text">
              <button type="button" class="btn-badge btn-grey">Travel</button>
              <h3>Island</h3>
              <p>Labuan Bajo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  margin-bottom: 100px;
}

.hero-secondary {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.hero-secondary .hero {
  flex-grow: 1;
}

.hero-secondary .hero:last-child {
  margin-left: 20px;
}

.container img {
  width: 100%;
}

.btn-badge.btn-grey {
  background-color: #4f4f4f;
  color: white;
}

#hero-1 {
  background-image: url("../assets/1.jpg");
}

#hero-2 {
  background-image: url("../assets/2.jpg");
}

#hero-3 {
  background-image: url("../assets/3.jpg");
}

.hero .hero-image {
  border-radius: 5px;
  width: 100%;
  height: 355px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-primary .hero-text {
  color: white;
  position: absolute;
  top: 40%;
  left: 45%;
}

.hero-secondary .hero-text {
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  text-align: right;
  margin: 20px 40px;
}

.hero-text > * {
  margin: 5px 0;
}
</style>
