<template>
  <div class="container">
    <div class="form-group">
      <label for="course">Curso</label>
      <input type="email" class="form-control" id="course" placeholder="Busque pelo nome do curso">
    </div>
    <div class="form-group">
      <label for="course">IES</label>
      <input type="email" class="form-control" id="course" placeholder="Busque pelo nome da ies">
    </div>
  </div>
</template>

<script>
import QLogo from '~/components/QLogo.vue'

export default {
  components: {
    QLogo
  },
  data () {
    return {
      form: {

      }
    }
  }
}
</script>

<style>
.navbar-collapse {
  justify-content: flex-end;
}
</style>
