<template>
  <div>
    That's new course page
    <vue-bootstrap-typeahead
      v-model="query"
      :data="['Canada', 'USA', 'Mexico']"
    />
  </div>
</template>

<script>
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

export default {
  componenets: {
    VueBootstrapTypeahead
  },
  data() {
    return {
      query: '',
    }
  },
}
</script>
