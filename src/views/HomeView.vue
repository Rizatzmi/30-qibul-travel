<template>
  <div class="application">
    <Header />
    <v-container>
      <div class="home">
        <v-row class="about">
          <v-col cols="12">
            <h1 class="mb-3">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
              viverra nisl faucibus sed facilisi in. Ipsum urna, facilisis
              suspendisse venenatis placerat ut. Fames morbi mauris pulvinar
              integer vivamus vitae. Velit semper auctor faucibus arcu sagittis
              tellus mauris in lorem.
            </p>
          </v-col>
        </v-row>
        <Contact />
      </div>
    </v-container>
  </div>
</template>

<script>
import Contact from "@/components/ContactComponent.vue";
import Header from "@/components/HeaderComponent.vue";

export default {
  components: {
    Header,
    Contact,
  },
};
</script>

<style scoped>
.hero h1 {
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
}

.hero h1 span {
  font-weight: 800;
  line-height: 80px;
  letter-spacing: 5px;
  color: #ffb766;
}

.hero p {
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 35px;
}

div.about h1 {
  font-weight: 700;
  font-size: 32px;
  line-height: 77px;
  /* identical to box height */
  letter-spacing: 0.5px;
}

div.about p {
  font-size: 18px;
  letter-spacing: 0.5px;
}
</style>
