<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ card.name }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ card.university }}</h6>
      <p class="card-text">{{ card.description }}</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'card' ],
  components: {
  }
}
</script>

<style lang="scss">
</style>
