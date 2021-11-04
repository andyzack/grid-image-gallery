<template>
  <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">
    <div
      class="
        c-event-card
        p-10
        border-gray-300 border-2
        bg-white bg-opacity-25
        text-teal-600
      "
    >
      <span>@{{ event.time }} {{ event.date }}</span>
      <h4 class="font-bold">{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss"></style>
