<template>
  <div class="contact">
    <div class="d-flex">
      <div class="subscribe">
        <h2>Subscribe</h2>
        <form action="" method="post">
          <label for="email" class="d-block">Enter yout email...</label>
          <input type="email" name="email" id="email" />
          <v-btn
            type="submit"
            style="background: #333333; color: white; padding: 10px 20px"
            >Subscribe</v-btn
          >
        </form>
      </div>
      <div class="sosmed">
        <h2>Contact</h2>
        <ul>
          <li>mail@qtravel.com</li>
          <li>0812-1978-8445</li>
          <li>Malang, Jawa Timur, Indonesia</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact {
  border: solid 8px black;
  padding: 28px;
  margin: 60px 0;
}

.contact h2 {
  font-size: 36px;
  font-weight: bold;
}

.subscribe {
  margin-right: 70px;
}

.contact > .d-flex {
  justify-content: space-around;
}

.sosmed ul {
  list-style: none;
}

.sosmed ul li {
  font-size: 24px;
}

form input {
  border: 3px solid black;
  height: 37px;
  width: 250px;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 10px !important;
}

.subscribe > * > *,
.sosmed > * > * {
  margin: 15px 0;
}
</style>
