<script>
// import MyComponent from "./components/MyComponent.vue";
import projectList from "./components/projects/projectList.vue";
import { store } from "./data/store";
export default {
  data() {
    return {
      title: "Vite Boolfolio",

    };
  },

  components: {
    projectList,
  },

};
</script>

<template>
  <h1>{{ title }}</h1>

  <br />
<!-- min 45 per eventuali correzioni -->
  <projectList />
  
</template>

<style lang="scss" scoped></style>
