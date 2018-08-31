<template>
  <section class="container">
      <Menu/>
      <h1>Nosotros</h1>
  </section>
</template>


<script>
import Menu from "@/components/Menu.vue";
import repoText from "@/repositorios/textos.js";

export default {
  name: "nosotros",
  components: {
    Menu
  },
  asyncData() {
    
    return repoText.getIndex().then(res => {
      return {
        title: res.title,
        image: res.image,
        description: res.description
      };
    });
  }
};
</script>







<style>
</style>

