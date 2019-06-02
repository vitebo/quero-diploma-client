<template>
  <section class="row">
    <div class="col-4" v-for="course in courses">
      <b-card class="card" :title="course.name" :sub-title="course.university">
        <b-card-text>
          {{ course.description }}
        </b-card-text>
        <b-link href="#" class="card-link">Another link</b-link>
      </b-card>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  },
  props: [ 'courses' ],
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.card {
  margin-bottom: map-get($spacers, 3);
}
</style>
