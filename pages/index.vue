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

    this.courses = data.courses;
  }
}
</script>

<style lang="scss">
</style>
