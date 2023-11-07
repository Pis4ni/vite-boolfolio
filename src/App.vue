<script>
// import MyComponent from "./components/MyComponent.vue";
import projectList from "./components/projects/projectList.vue";
import axios from "axios";
export default {
  data() {
    return {
      title: "Vite Boolfolio",
      projects: [],
      api: {
        baseUrl: 'http://localhost:8000/api/'
      }
    };
  },
  methods: {
    fetchProjects(url = this.api.baseUrl + 'projects') {
      axios.get(url).then((response) => {

        console.log(response);
        this.projects = response.data.data;
      });
    },
  },
  components: {
    projectList,
  },
  created() {
    this.fetchProjects();
    console.log(this.projects);
  },
};
</script>

<template>
  <h1>{{ title }}</h1>

  <br />
<!-- min 45 per eventuali correzioni -->
  <projectList :projects="projects" />
</template>

<style lang="scss" scoped></style>
