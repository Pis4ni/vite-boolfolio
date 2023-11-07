<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world"
    }
  },

  // components: {
  //   MyComponent,
  // },
  props: {
    projects: Array,
  },
};
</script>

<template>
  <div class="container">
    <h1>Projects List</h1>
    <hr>
    <div class="row row-cols-3 g-4">
      
      <div class="col" v-for="project in projects">
            <div class="card">
                <div class="card-body">
                    <h4>Project Title</h4>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>