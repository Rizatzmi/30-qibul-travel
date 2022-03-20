<template>
  <footer>
    <section id="contact">
      <div class="container">
        <div class="form-contact">
          <h1>Subscribe</h1>
          <p>Enter your email here!</p>
          <form action="" method="POST">
            <input
              type="text"
              name="subscribe"
              id="subscribe"
              placeholder="Your email here..."
            />
            <button
              type="submit"
              name="submit"
              id="submit"
              class="cta btn-blue"
            >
              Subscribe
            </button>
            <!-- <input
              type="email"
              class="form__email"
              placeholder="Enter your email address"
            />
            <button class="form__button">Send</button> -->
          </form>
        </div>
        <div class="list-contact">
          <h1>Contact</h1>
          <ul>
            <li>Dolanwae@gmail.com</li>
            <li>(+62) 812345678912</li>
            <li>Karangploso, Kabupaten Malang</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="company">
      <div class="container">
        <span> 2022 - Qibul</span>
      </div>
    </section>
  </footer>
</template>

<style scoped>
section#contact {
  background: #e8f0f2;
  padding: 100px 0;
}

section#company {
  background: #222725;
  color: white;
  text-align: center;
  padding: 30px 0;
}

section#contact > div.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.form-contact p {
  width: 500px;
}

.list-contact li {
  display: flex;
}

.list-contact li > svg {
  margin-right: 10px;
}

.form-contact h1,
.list-contact h1 {
  margin: 20px 0;
}

.form-contact p,
.form-contact form,
.list-contact li,
.list-contact ul {
  margin: 30px 0;
}

.form-contact input {
  padding: 12px 10px;
  margin-right: 20px;
  border: none;
  border-radius: 5px;
  outline: none;
}

</style>
