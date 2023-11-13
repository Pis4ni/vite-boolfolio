<script>
// import MyComponent from "./components/MyComponent.vue";

export default {

  props:{
    pagination: Array,
  },

  emits: ['change-page']
};
</script>

<template>
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item" v-for="(link,index) in pagination"  @click="fetchProjects(link.url)">
          
          <a class="page-link" href="#" v-html="link.label" ></a>

        </li>

      </ul>
    </nav>
</template>

<style lang="scss" scoped>

</style>