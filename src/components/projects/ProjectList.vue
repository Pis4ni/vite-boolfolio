<script>
import ProjectCard from "./ProjectCard.vue";
import { store } from "../../data/store";
import axios from "axios";


export default {
  data() {
    return {
      title: "Hello world",
      projects: [],
      pagination :{
        next: null,
        prev: null,
      }
    };
  },

  components: {
    ProjectCard,
  },
  methods: {
    fetchProjects(url = store.api.baseUrl + 'projects') {
      axios.get(url).then((response) => {
        // console.log(response);
        this.projects = response.data.data;
        this.pagination.prev =response.data.prev_page_url;
        this.pagination.next =response.data.next_page_url;

      });
    },
  },
  // props: {
  //   projects: Array,
  // },  
  created() {
    this.fetchProjects();
    console.log(this.projects);
  }
};
</script>

<template>
  <div class="container">
    <h1>Projects List</h1>
    <hr />
    <div class="row row-cols-4 g-4">
      <div class="col" v-for="project in projects" >
        <ProjectCard :project="project"/>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <span v-if="this.pagination.prev != null" class="btn btn-outline-secondary py-0 me-1 my-3" @click="fetchProjects(this.pagination.prev)">prev Page</span>
      <span v-if="this.pagination.next != null" class="btn btn-outline-secondary py-0 me-1 my-3" @click="fetchProjects(this.pagination.next)">Next Page</span>

    </div>
  </div>

</template>

<style lang="scss" scoped></style>
