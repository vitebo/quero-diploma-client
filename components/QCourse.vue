<template>
  <div class="qcard">
    <header class="qcard__header">
      <img class="qcard__image" :src="course.school_logo" />
    </header>
    <div class="qcard__body">
      <h5 class="qcard__title">{{ course.course_name }}</h5>
      <h6 class="qcard__subtitle">{{ course.school }}</h6>
      <p class="qcard__time">{{ course.conclusion }}</p>
        <div v-if="course.is_validated" class="groupgroup">
          <p class="qcard__status">
            verificado
          </p>
          <i class="qcard__status-icon fas fa-check"></i>
        </div>
        <div v-if="!course.is_validated" class="groupgroup">
          <p class="qcard__status">
            Pendente
          </p>
          <i class="qcard__status-icon qcard__status-icon--time far fa-clock"></i>
        </div>
      </p>
    </div>
    <button type="button" class="qcard__edit" @click="edit">
      <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon icon"><g class="large-icon" style="fill: currentColor" id="pencil-icon-large">
        <path d="M21.71,5L19,2.29a1,1,0,0,0-1.41,0L4,15.85,2,22l6.15-2L21.71,6.45A1,1,0,0,0,22,5.71,1,1,0,0,0,21.71,5ZM6.87,18.64l-1.5-1.5L15.92,6.57l1.5,1.5ZM18.09,7.41l-1.5-1.5,1.67-1.67,1.5,1.5Z"></path>
      </g></svg>
    </button>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: [ 'course' ],
  data() {
    return {
      edit() {
        this.$router.push('/login');
      }
    }
  },
  methods: {
    getLogo(url) {
      return `/assets/${url}`;
    }
  },
  computed: {
    urlLogo() {
      return `${this.course.school_logo}`;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.groupgroup {
  align-items: center;
  display: flex;
}

.qcard {
  align-items: flex-start;
  display: flex;
  flex-direction: row !important;
  margin-bottom: map-get($spacers, 3);
  position: relative;

}

.course-col:last-child {
  .qcard {
    .qcard__body {
      border-bottom: none;
    }
  }
}

.qcard__header {
  padding: map-get($spacers, 1);
}

.qcard__title {
  font-size: 1.4rem;
  font-weight: bold;
}

.qcard__subtitle {
  font-size: 1.4rem;
}

.qcard__time {
  font-size: 1.4rem;
  color: rgba(0,0,0,0.6);
  margin-bottom: 0;
}

.qcard__status {
  font-size: 1.4rem;
  color: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  margin: 0;
}

.qcard__status-icon {
  color: #10C979;
  display: inline-block;
  margin-top: 2px;
  margin-left: 8px;
}

.qcard__body {
  margin-right: map-get($spacers, 1);
  border-bottom: 1px solid #ccc;
  padding: 0 36px 12px 0;
  width: 100%;
}

.qcard__image {
  max-width: 48px;
  height: auto;
  margin-right: 16px;
}

.qcard__edit {
  border: none;
  background-color: transparent;
  color: #3d9eae;
  position: absolute;
  top: 8px;
  right: 8px;
  transition: transform 250ms ease;

  &:hover {
    transform: scale(1.1);
  }
}

.qcard__status-icon--time {
  color: #aaa;
  font-size: 1.6rem;
}
</style>
