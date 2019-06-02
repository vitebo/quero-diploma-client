<template>
  <section class="row">
    <div class="course-col col-6" v-for="course in courses">
      <q-card :course="course" />
    </div>
    <div class="course-col col-6">
      <div class="empty-card">
        <button class="empty-card__button">
          Adicionar um novo curso
          <i class="empty-card__icon fas fa-plus"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import QCard from '~/components/QCard.vue';

export default {
  components: {
    QCard
  },
  props: [ 'courses' ],
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.course-col {
  margin-bottom: map-get($spacers, 4);
}

.card {
  height: 100%;
}

.empty-card {
  color: #575757;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

.empty-card__button {
  background-color: transparent;
  border: none;

  &:hover {
    .empty-card__icon {
      transform: scale(1.2);
    }
  }
}

.empty-card__icon {
  color: #fff;
  background-color: #3d9eae;
  padding: map-get($spacers, 2);
  border-radius: 50%;
  font-size: 18px;
  margin-left: map-get($spacers, 2);
  transition: transform 250ms ease;
}
</style>


