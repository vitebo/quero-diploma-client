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
    const googleid = localStorage.getItem('googleId');
    const { data } = await this.$axios.get(
      `http://ec2-18-217-117-80.us-east-2.compute.amazonaws.com/cards/show?google_id=${googleid}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
        }
      }
    );
    this.courses = data;
    console.log(data);
  }
}
</script>

<style lang="scss">

</style>
