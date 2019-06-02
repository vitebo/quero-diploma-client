<template>
  <div class="container">
    <h1 class="title">Meus diplomas</h1>
    <q-card-list :courses="courses" />
  </div>
</template>

<script>
import QCardList from '~/components/QCardList.vue';
import Course from '~/model/course';

export default {
  components: {
    QCardList
  },
  data () {
    return {
      courses: [
        new Course('ADM', 'curso de administração 1', 'Unip'),
        new Course('ADM', 'curso de administração 2', 'Unip'),
        new Course('ADM', 'curso de administração 3', 'Unip'),
        new Course('ADM', 'curso de administração 4', 'Unip'),
        new Course('ADM', 'curso de administração 5', 'Unip'),
        new Course('ADM', 'curso de administração 6', 'Unip'),
        new Course('ADM', 'curso de administração 7', 'Unip'),
        new Course('ADM', 'curso de administração 8', 'Unip'),
        new Course('ADM', 'curso de administração 9', 'Unip'),
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.title {
  margin-bottom: map-get($spacers, 4);
}
</style>
