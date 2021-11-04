<template>
  <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">
    <div class="event-card">
      <span>@{{ event.time }} {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
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
