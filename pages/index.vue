<template>
  <main class="">
    <q-card-list :courses="courses" />
  </main>
</template>

<script>
import QCardList from '~/components/QCardList.vue';
import Course from '~/model/course';

export default {
  components: {
    QCardList,
  },
  data () {
    return {
      courses: [
        new Course(
          'Ciências da Computação',
          '',
          'Unip',
          '11/10/2016',
          'https://d2my3dgdogz33p.cloudfront.net/logos/colorido/large/25/logo_1489432787.png'
        ),
        new Course(
          'Engenharia de Controle e Automação',
          '',
          'Etep',
          '11/10/2012',
          'https://d2my3dgdogz33p.cloudfront.net/logos/colorido/large/171/logo_1489433651.png'
        ),
        new Course(
          'Farmácia',
          '',
          'Anhanguera',
          '11/10/2016',
          'https://d2my3dgdogz33p.cloudfront.net/logos/colorido/large/24/logo_1489432769.png'
        ),
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
