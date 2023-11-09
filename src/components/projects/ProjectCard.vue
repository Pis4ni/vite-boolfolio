<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world"
    }
  },
  props:{ 
    project:Object
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
            <div class="col">
                <span
                    class="badge"
                    :style="{ backgroundColor: project.type.color }">
                    {{ project.type.label }}
                </span>
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
    </div>
    <div class="card-footer">
        <a href="#" class="btn btn-outline-primary py-0 me-1">Vedi</a>
    </div>
</div>
  
</template>

<style lang="scss" scoped>

</style>