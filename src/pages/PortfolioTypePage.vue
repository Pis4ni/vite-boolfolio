<script>
// import MyComponent from "../components/projects/MyComponent.vue";
import { store } from "../data/store";
import  axios  from "axios";
import ProjectTypeList  from "../components/projects/ProjectTypeList.vue";
export default {
  data() {
    return {
        title:'Project by Type ',
        type:{
          label:'',
          id:'',
          color:'',
        }
    }
  },
  components: {
    ProjectTypeList,
  },
  methods:{

  },
  created(){
    console.log(store.api.baseUrl + 'types/' + this.$route.params.type_id);
    axios.get(store.api.baseUrl + 'types/' + this.$route.params.type_id)
    .then((response) => {
      this.type = response.data;
    })
    .catch((error) => {
      // this.$router.push({ name: 'not-found'})
    });
  }
};
</script>

<template>
    <div class="container">
      <h1>{{ title }}<span class="badge fs-5" :style="{ backgroundColor: this.type.color }">
          {{ this.type.label }}
        </span>
      </h1>
      
        <ProjectTypeList :type_id="type.id" v-if="type.id"/>

    </div>
</template>

<style lang="scss" scoped>

</style>