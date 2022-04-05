<template>
  <div class="form">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Buat Kiriman Baru</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p>
            Setiap kiriman yang ditambahkan,akan ditampilkan pada halaman depan
          </p>
        </v-col>
      </v-row>
      <form action="" method="post">
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Judul"
              id="judul"
              name="judul"
              placeholder="Type here..."
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-textarea
              name="konten"
              label="Konten"
              id="konten"
              placeholder="Type here..."
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-btn
              type="submit"
              style="background: #000; color: white; padding: 20px 30px"
              >Submit</v-btn
            >
          </v-col>
        </v-row>
      </form>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "BlogView",
};
</script>

<style scoped>
.form {
  margin: 60px 0;
}
</style>
