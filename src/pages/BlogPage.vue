<script>
import ProjectList from "./components/projects/ProjectList.vue";

export default {
  data() {
    return {
      title: "Blog Page"
    }
  },
  components: {
    ProjectList,
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <ProjectList />
</template>

<style lang="scss" scoped>

</style>