<template>
  <nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">
      <q-logo />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">
            Perfil
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/registering">
            Adcionar
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import QLogo from '~/components/QLogo.vue'

export default {
  components: {
    QLogo
  }
}
</script>

<style>
.navbar {
  background-color: #fff;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,0.09);
}

.navbar-collapse {
  justify-content: flex-end;
}

.nav-link {
  color: #3d9eae;
}

.nuxt-link-active {
  font-weight: bold;
}
</style>
