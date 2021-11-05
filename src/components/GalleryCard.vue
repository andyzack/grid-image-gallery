<template>
  <router-link :to="{ name: 'GalleryDetails', params: { id: photo.id } }">
    <div
      class="
        c-photo-card
        p-10
        border-gray-300 border-2
        bg-white bg-opacity-25
        text-teal-600
      "
    >
      <span>@{{ photo.time }} {{ photo.date }}</span>
      <h4 class="font-bold">{{ photo.title }}</h4>
      <img :src="require('@/assets/images/gallery/' + photo.image)" alt="" />
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss"></style>
