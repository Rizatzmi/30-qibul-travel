<template>
  <div class="form">
    <header-component></header-component>
    <form-component></form-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "FormView",
  components: {
    HeaderComponent,
    FormComponent,
    FooterComponent,
  },
};
</script>

<style></style>
