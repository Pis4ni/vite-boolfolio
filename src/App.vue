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

  <router-view />
  
</template>

<style lang="scss" scoped></style>
