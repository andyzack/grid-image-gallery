<template>
  <div class="c-gallery p-4 md:p-10 mx-auto max-w-6xl">
    <h1 class="text-2xl font-bold my-4 md:my-10">Nature Photo Gallery</h1>
    <div
      class="
        c-gallery__grid
        grid
        gap-4
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        grid-flow-row-dense
      "
    >
      <GalleryCard v-for="photo in photos" :key="photo.id" :photo="photo" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GalleryCard from '@/components/GalleryCard.vue'
import GalleryService from '@/services/GalleryService.js'

export default {
  name: 'Home',
  components: {
    GalleryCard,
  },
  data() {
    return {
      photos: null,
    }
  },
  created() {
    GalleryService.getPhotos()
      .then((response) => {
        this.photos = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    randomNumber: function () {
      return Math.floor(Math.random() * 16) + 1
    },
  },
}
</script>
