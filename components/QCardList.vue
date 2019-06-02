<template>
  <div class="card">
    <h2 class="card__title">Meus Cursos</h2>
    <nuxt-link class="add-course nav-link" to="/registering">
      <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon icon"><g class="small-icon" style="fill-opacity: 1" id="plus-icon-small">
        <path d="M14,9H9v5H7V9H2V7H7V2H9V7h5V9Z"></path>
      </g></svg>
      Adicionar curso
    </nuxt-link>
    <div class="course-col" v-for="course in courses">
      <q-course :course="course" />
    </div>
  </div>
</template>

<script>
import QCourse from '~/components/QCourse.vue';

export default {
  components: {
    QCourse
  },
  props: [ 'courses' ],
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.course-col {
  margin-bottom: 8px;
}

.card {
  border: none;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
  margin-bottom: 0;
  padding: 16px 0 0 16px;
  border-top: 1px solid rgba(0,0,0,0.15);
;
}

.card__title {
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 400;
  color: rgba(0,0,0,0.9);
}

.add-course {
  color: #0073b1;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 12px 0;

  svg {
    fill: #0073b1;
    margin-right: -8px;
    margin-bottom: -4px;
  }
}
</style>


