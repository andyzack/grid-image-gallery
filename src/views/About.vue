<template>
  <div
    class="
      c-about
      p-10
      mt-10
      border-gray-300 border-2
      max-w-lg
      mx-auto
      bg-white bg-opacity-25
    "
  >
    <h1 class="text-2xl font-bold my-10">Nature</h1>
    <p>
      Let’s celebrate the magic of Mother Earth — with images of everything our
      planet has to offer, from stunning seascapes, starry skies, and everything
      in between.
    </p>

    <div class="container">
      <div class="items">1</div>
      <div class="items">2</div>
      <div class="items">3</div>
      <div class="items">4</div>
      <div class="items">5</div>
      <div class="items">6</div>
      <div class="items">7</div>
      <div class="items">8</div>
      <div class="items">9</div>
      <div class="items">10</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
}

.items {
  background: rgb(223, 223, 37);
  padding: 1rem;
}
</style>
