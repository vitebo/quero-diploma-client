<template>
  <main class="">
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
      ],
    }
  },
  async mounted() {
    const { data } = await this.$axios.get(
      'http://ec2-18-217-117-80.us-east-2.compute.amazonaws.com/cards/show?google_id=104197408546369361824',
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
        }
      }
    );
    console.log(data);
    this.courses = data;
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

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
    //background: linear-gradient(90deg, #05869B 0%, #18ACC4 100%);
    background-image: url(https://static-exp2.licdn.com/sc/h/3chad3rzxalsf65nuo7hxciac);
    width: 100%;
    position: absolute;
  }
}

</style>
