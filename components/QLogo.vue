<template>
  <a class="logo navbar-brand" href="#">
    <div class="logo">
      Carteira <span class="logo__symbol">Edu</span>
    </div>
  </a>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.logo {
  display: inline-block;
  color: #3d9eae;
  font-weight: bold;
}

.logo__symbol {
  background-color: #de9e1f;
  border-radius: 4px;
  color: #fff;
  padding: map-get($spacers, 2);
  font-weight: lighter;
}

</style>
