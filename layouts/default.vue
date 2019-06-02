<template>
  <div>
    <q-header class="header"/>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import QHeader from '~/components/QHeader.vue';
import '@/assets/scss/main.scss';

export default {
  components: {
    QHeader
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';

html {
  font-family: proxima-nova, Arial, Helvetica, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: #FAFAF9;
}

.header {
  margin-bottom: map-get($spacers, 4);
}
</style>
