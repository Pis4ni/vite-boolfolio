<script>
// import MyComponent from "./components/MyComponent.vue";
import { store } from "../../data/store";
import  axios  from "axios";

import  ProjectCard  from "./ProjectCard.vue";
import  PaginationUi  from "../ui/PaginationUi.vue";


export default {
    data() {
    return {
        title:'Project by Type ',
        projects: [],
        pagination: []
    }
  },
  props: {
    type_id: Number
  },
  created(){
    axios.get(store.api.baseUrl + 'projects-by-type/' + this.type_id)
    .then((response)=> {
        this.projects = response.data.data
    })
    console.log(store.api.baseUrl + '' + this.type_id);
  },

  components: {
    ProjectCard,PaginationUi
  },
};
</script>

<template>

    <hr />
    <div class="row row-cols-4 g-4">
      <div class="col" v-for="project in projects" >
        <ProjectCard :project="project" :isDetail="false"/>
      </div>
    </div>
    <hr>
    <PaginationUi :pagination="this.pagination"/>
</template>

<style lang="scss" scoped></style>