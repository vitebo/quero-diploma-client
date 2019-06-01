<template>
  <section class="row">
    <div class="col-4" v-for="card in cards">
      <q-card :card="card" class="qcard" />
    </div>
  </section>
</template>

<script>
import QCard from '~/components/QCard.vue';

export default {
  components: {
    QCard
  },
  props: [ 'cards' ]
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.qcard {
  margin-bottom: map-get($spacers, 3);
}
</style>
