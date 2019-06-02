<template>
  <div class="card">
    <header class="card__header">
      <img class="card__image" :src="course.image" />
    </header>
    <div class="card-body">
      <h5 class="card-title">{{ course.name }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ course.conclusion }}</h6>
      <p class="card-text">{{ course.description }}</p>
    </div>
    <button class="card__edit">
      <i class="far fa-edit"></i>
    </button>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: [ 'course' ],
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.card {
  align-items: center;
  display: flex;
  flex-direction: row !important;
  margin-bottom: map-get($spacers, 3);

  &:hover {
  }
}

.card__header {
  padding: map-get($spacers, 3);
}

.card-body {
  margin-right: map-get($spacers, 1);
}

.card__image {
  max-width: 150px;
  max-height: 80px;
}

.card__edit {
  border: none;
  background-color: transparent;
  color: #3d9eae;
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
