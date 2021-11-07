<template>
  <div
    v-if="photo"
    class="
      c-photo-card
      p-4
      md:p-10
      mt-10
      border-gray-300 border-2
      max-w-lg
      mx-4
      md:mx-auto
      bg-white bg-opacity-25
    "
  >
    <h1 class="text-2xl font-bold my-4 md:my-10">{{ photo.title }}</h1>
    <p>{{ photo.time }} on {{ photo.date }} @ {{ photo.location }}</p>
    <p>{{ photo.description }}</p>

    Photo by <a :href="photo.profile">{{ photo.photographer }}</a> on
    <a
      href="https://unsplash.com/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      >Unsplash</a
    >
  </div>
</template>

<script>
import GalleryService from '@/services/GalleryService.js'
export default {
  props: ['id'],
  data() {
    return {
      photo: null,
    }
  },
  created() {
    GalleryService.getPhoto(this.id)
      .then((response) => {
        this.photo = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
