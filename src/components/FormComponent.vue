<template>
  <div class="container">
    <h1>Form</h1>
    <form action="" method="POST">
      <div>
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Your title here..."
        />
      </div>
      <div>
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="50"
          rows="10"
          placeholder="Your description here..."
        ></textarea>
      </div>
      <div>
        <button type="submit" class="cta btn-blue">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}

form > div {
  margin: 20px 0;
}

form input,
form textarea {
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px;
}

form label {
  display: block;
  margin-bottom: 10px;
}
</style>
