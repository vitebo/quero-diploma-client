<template>
  <main class="container">
    <header class="profile-header card">
      <div class="user">
        <div class="user__photo">
          <img src="http://lorempixel.com/130/130/people/9" />
        </div>
        <div class="user__info">
          <strong>Juliana Ladeira</strong>
          <p>Estagiária - Médica do hospital do centro</p>
          <p>São José dos Campos, São Paulo, Brasil</p>
        </div>
      </div>
      <button class="card__edit">
        <i class="far fa-edit"></i>
      </button>
    </header>
    <h2 class="title">Meus diplomas</h2>
    <q-card-list :courses="courses" />
  </main>
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
        new Course(
          'Ciências da Computação',
          'O curso de Ciência da Computação forma profissionais capazes de trabalhar no desenvolvimento de programas de informática.',
          'Unip',
          '11/10/2016',
          'https://d2my3dgdogz33p.cloudfront.net/logos/colorido/large/25/logo_1489432787.png'
        ),
        new Course(
          'Engenharia de Controle e Automação',
          'O curso de Engenharia de Controle e Automação forma profissionais capacitados para atuar com os equipamentos utilizados na indústria',
          'Etep',
          '11/10/2012',
          'https://d2my3dgdogz33p.cloudfront.net/logos/colorido/large/171/logo_1489433651.png'
        ),
        new Course(
          'Farmácia',
          'O curso de Farmácia forma profissionais de saúde para atuar nas áreas de medicamentos, alimentos, cosméticos e análises clínicas',
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

.title {
  margin-bottom: map-get($spacers, 4);
}

.profile-header {
  background: linear-gradient(90deg, #05869B 0%, #18ACC4 100%);
  border: 2px solid #EBEBEB;
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-bottom: map-get($spacers, 5);
}

.user {
  display: flex;
  background-color: rgba(255, 255, 255, .3);
  padding: map-get($spacers, 4);
  width: 100%;
  color: #fff;
}

.user__photo {
  border: 3px solid #fff;
  border-radius: 50%;
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 130px;
  width: 130px;
  overflow: hidden;
}

.user__info {
  display: inline-block;
  margin-left: map-get($spacers, 3);

  strong {
    display: inline-block;
    margin-bottom: map-get($spacers, 2);
    font-size: 22px;
  }

  p {
    margin-bottom: map-get($spacers, 1);
    font-size: 16px;
  }
}

.card__edit {
  border: none;
  background-color: transparent;
  color: #fff;
  position: absolute;
  top: map-get($spacers, 3);
  right: map-get($spacers, 3);
  font-size: 18px;
  transition: transform 250ms ease;

  &:hover {
    transform: scale(1.1);
  }
}

</style>
