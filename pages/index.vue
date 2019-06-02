<template>
  <main class="">
    <header class="profile-header card">
      <q-user />
    </header>
    <q-card-list :courses="courses" />
  </main>
</template>

<script>
import QCardList from '~/components/QCardList.vue';
import QUser from '~/components/QUser.vue';
import Course from '~/model/course';

export default {
  components: {
    QCardList,
    QUser
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

.profile-header {
  border: none;
  border-bottom: 2px solid #EBEBEB;
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-bottom: 6px;

  &::before {
    content: '';
    height: 120px;
    background: linear-gradient(90deg, #05869B 0%, #18ACC4 100%);
    //background-image: url(https://static-exp2.licdn.com/sc/h/3chad3rzxalsf65nuo7hxciac);
    width: 100%;
    position: absolute;
  }
}

</style>
