<template>
  <div class="home">
    <header-component></header-component>
    <body-component></body-component>
    <about-us></about-us>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import BodyComponent from "@/components/BodyComponent.vue";
import AboutUs from "@/components/AboutUs.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    BodyComponent,
    AboutUs,
    FooterComponent,
  },
};
</script>

<style></style>
