<script>
import ProjectCard from "../components/projects/ProjectCard.vue";
import  axios  from "axios";
import { store } from "../data/store";

export default {
  data() {
    return {
      title: "Dettaglio Progetto",
      project:{}

    }
  },
  props:{

  },

  components: {
    ProjectCard,
  },
  created(){
    console.log(store.api.baseUrl + 'projects/' + this.$route.params.id);
    axios.get(store.api.baseUrl + 'projects/' + this.$route.params.id)
    .then((response) => {
      console.log(response.data);
      this.project = response.data
    });
  }
};
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <!-- this.$route.params.id -->
    <ProjectCard v-if="project" :isDetail="true" :project="project"/>

  </div>
</template>

<style lang="scss" scoped></style>