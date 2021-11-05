<template>
  <div class="c-photo-list p-10 mx-auto">
    <h1 class="text-2xl font-bold my-10">Nature Photo Gallery</h1>
    <div class="grid grid-cols-3 gap-4">
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
