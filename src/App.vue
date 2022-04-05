<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/NavbarComponent.vue";
import Footer from "./components/FooterComponent.vue";

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
  },

  data: () => ({}),
};
</script>

<style>
.overlay {
  width: 100%;
  height: 100%;
  background: #3c45497c;
}
</style>
