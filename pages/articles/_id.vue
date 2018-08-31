<template>
     <div>
        <Menu/>
        <section>
                <h1 v-text = "article.title"/>
                <img :src = "article.image"/>
                <h3 v-text = "article.resumen"/>
                <h2 v-text = "article.detalle"/>   
        </section>
     </div>
</template>

<script>
import repoText from "@/repositorios/textos.js";
import Menu from "@/components/Menu.vue";

function createTitlesParams(paramsTitle) {
  var title = paramsTitle.replace(/_/g, " ");
  return title;
}

export default {
  components: { 
      Menu  
  },
  async asyncData({ params }) {
    var titleFormated = createTitlesParams(params.id);

     return repoText.getArticle(titleFormated)
     .then(article => {

        console.log(article)
        return {article:article}
      })
  },
};
</script>

