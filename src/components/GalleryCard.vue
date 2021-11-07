<template>
  <router-link
    :to="{ name: 'GalleryDetails', params: { id: photo.id } }"
    class="c-gallery__card"
    :class="masonary"
  >
    <div
      class="
        duration-300
        border-gray-300 border-2
        bg-white bg-opacity-25
        relative
        shadow-xs
        transition-opacity
        hover:shadow-md hover:opacity-75
        text-white
      "
    >
      <div
        class="
          grid
          justify-items-start
          absolute
          px-4
          py-3
          bg-gray-300 bg-opacity-25
          right-0
          bottom-0
        "
      >
        <h4 class="font-bold text-lg">{{ photo.title }}</h4>
        <span class="text-xs">@{{ photo.time }} {{ photo.date }}</span>
      </div>
      <img
        :src="require('@/assets/images/gallery/' + photo.image)"
        alt=""
        class="object-cover object-center w-full h-64 max-w-full"
      />
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
  data() {
    return {
      masonary: null,
    }
  },
  created() {
    const items = [1, 3, 12, 13]

    if (window.matchMedia('(min-width: 600px)').matches) {
      items.filter((item) => {
        if (item == this.photo.id) {
          this.masonary = 'row-span-2 col-span-2 c-gallery__double-height'
        }
      })
    }
  },
}
</script>

<style scoped lang="scss">
.c-gallery__card {
  &:hover {
    img {
      @apply scale-110;
    }
  }
}
.c-gallery__double-height {
  img {
    height: calc(33rem + 4px);
  }
}
</style>
