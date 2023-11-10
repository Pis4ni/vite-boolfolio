<script>
import Navbar from "./components/ui/Navbar.vue";

import { store } from "./data/store";
export default {
  data() {
    return {
      title: "Vite Boolfolio",

    };
  },

  components: {
    Navbar,
  },

};
</script>

<template>
  <Navbar />
  <router-view />
  
</template>

<style lang="scss" scoped>

</style>
