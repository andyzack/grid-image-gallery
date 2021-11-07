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
      relative
    "
  >
    <div
      class="
        absolute
        left-0
        right-0
        top-0
        grid
        w-full
        justify-center
        items-center
        p-3
      "
    >
      <button @click="handlePrev" class="text-teal-600 hidden">&lt;</button>
      <router-link :to="{ name: 'GalleryList' }" class="text-teal-600"
        >Home</router-link
      >
      <button @click="handleNext" class="text-teal-600 hidden">&gt;</button>
    </div>
    <h1 class="text-2xl font-bold my-4 pt-5">{{ photo.title }}</h1>
    <p class="pb-4">{{ photo.description }}</p>
    <img
      :src="require('@/assets/images/gallery/' + photo.image)"
      alt=""
      class="object-cover object-center w-full h-64 max-w-full"
    />
    <p class="text-xs text-gray-700 pt-3">
      Photo by
      <a :href="photo.profile"><span v-html="photo.photographer"></span></a>
      on
      <a
        class="text-teal-600"
        href="https://unsplash.com/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >Unsplash</a
      ><br />
      {{ photo.time }} on {{ photo.date }} @ {{ photo.location }}
    </p>
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
  methods: {
    handlePrev() {
      GalleryService.getPhotoPrev(this.id)
        .then((response) => {
          this.photo = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    handleNext() {
      GalleryService.getPhotoNext(this.id)
        .then((response) => {
          this.photo = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
