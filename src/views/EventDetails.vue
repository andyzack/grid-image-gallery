<template>
  <div
    v-if="event"
    class="
      c-event-card
      p-10
      mt-10
      border-gray-300 border-2
      max-w-lg
      mx-auto
      bg-white bg-opacity-25
      text-gray-700
    "
  >
    <h1 class="font-bold text-lg pb-2">{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  props: ['id'],
  data() {
    return {
      event: null,
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
