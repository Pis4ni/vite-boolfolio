<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world"
    }
  },
  props:{ 
    project:Object,
    isDetail: Boolean
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  
<div class="card h-100">
    <div class="card-header">
        <div class="row row-cols-2">
            <!--* type badge -->
            <div class="col" v-if="project.type">
                <router-link
                  :to="{
                    name: 'Project-by-type',
                    params:  
                    {
                        type_id: project.type_id
                    }
                  }"
                    class="badge"
                    :style="{ backgroundColor: project.type.color }">
                    {{ project.type.label }}
                    
                </router-link>
            </div>
            <!--* technologies badge -->
            <div class="col">
                <span class="badge rounded-pill"
                    v-for="(technology, index) in project.technologies"
                    :key="index"
                    :style="{ backgroundColor: technology.color }">
                    {{ technology.label }}
                </span>
            </div>
          </div>
    </div>
    <div class="card-body">
        <h4>{{ project.title }}</h4>

        <p v-if="project.description">{{ project.description }}</p>
    </div>
    <div class="card-footer">
        <!-- <a href="#" class="btn btn-outline-primary py-0 me-1">Vedi</a> -->
        <router-link v-if="!isDetail" :to="{ name: 'ProjectPage', params: {id: project.id}  }" class="btn btn-outline-primary py-0 me-1">Vedi</router-link>
    </div>
</div>
  
</template>

<style lang="scss" scoped>

</style>