<template>
  <div class="card card-autocomplete">
    <h1 class="card-autocomplete__title">Cadastre um novo curso</h1>
    <form>
      <div class="form-group">
        <label>Universidades</label>
        <md-autocomplete v-model="selectedCountry" :md-options="countries">
        </md-autocomplete>
      </div>

      <div class="form-group">
        <label>Cursos</label>
        <md-autocomplete v-model="selectedEmployee" :md-options="employees" md-dense>
        </md-autocomplete>
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Data de inicio</label>
        <input type="date" class="">
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Data de fim</label>
        <input type="date" class="">
      </div>

      <div class="pos-button">
        <button type="button" class="button button--back" @click="back">Voltar</button>
        <button type="button" class="button">Salvar</button>
      </div>
    </form>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        selectedCountry: null,
        selectedEmployee: null,
        countries: [
          'Algeria',
          'Argentina',
          'Brazil',
          'Canada',
          'Italy',
          'Japan',
          'United Kingdom',
          'United States'
        ],
        employees: [
          'Jim Halpert',
          'Dwight Schrute',
          'Michael Scott',
          'Pam Beesly',
          'Angela Martin',
          'Kelly Kapoor',
          'Ryan Howard',
          'Kevin Malone',
          'Creed Bratton',
          'Oscar Nunez',
          'Toby Flenderson',
          'Stanley Hudson',
          'Meredith Palmer',
          'Phyllis Lapin-Vance',
          'Algeria',
          'Argentina',
          'Brazil',
          'Canada',
          'Italy',
          'Japan',
          'United Kingdom',
          'United States'
        ]
      }
    },
    methods: {
      back () {
        this.$router.push('/');
      }
    }
  }
</script>

<style lang="scss">
.card-autocomplete {
  font-size: 1.5rem;
  padding: 16px;
  margin: 0;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
  border: none;
  border-top: none !important;
}

.card-autocomplete__title {
  margin-bottom: 16px;
}

.form-group {
  label {
    margin-bottom: 0;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.3rem;
    opacity: .9;
  }

  input {
    width: 100%;
    border: 2px solid rgb(238, 238, 238);
    height: 3rem;
  }
}

.md-input {
  width: 100%;
}

.md-list {
  padding-left: 0;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
}

.md-field {
  position: relative;
}

.md-autocomplete-items {
  background-color: #fff;
  width: 100%;
  list-style: none;
  margin-top: 8px;
  max-height: 150px;
  overflow-y: auto;
}

.md-list-item {

  button {
    width: 100%;
    display: block;
    text-align: left;
    border: none;
    background-color: transparent;
    font-size: 1.4rem;
    padding: 8px;
  }
}

.md-button {
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
}

.pos-button {
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
  width: 100%;
}

.button {
  background-color: rgb(253, 203, 19);
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold;
  display: inline-block;
  border: 1px solid rgb(222, 158, 31);

  &.button--back {
    color: #05869b;
    border-color: #05869b;
    background-color: #fff;
  }
}

</style>
