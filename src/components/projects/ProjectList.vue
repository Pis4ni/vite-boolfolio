<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    ProjectCard,
  },
  props: {
    projects: Array,
  },
};
</script>

<template>
  <div class="container">
    <h1>Projects List</h1>
    <hr />
    <div class="row row-cols-3 g-4">
      <div class="col" v-for="project in projects" >
        <ProjectCard :project="project"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
