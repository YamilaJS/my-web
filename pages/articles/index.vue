<template>
     <div>
          <Menu/>
          <section>
                <article v-for="(article, index) in articleLista" :key="'artLista'+index">
                  <h1 v-text="article.title"/>
                  <img :src="article.image"/>
                  <h3 v-text="article.resumen"/>
                  <nuxt-link :to="createLink(article.title)">Ver</nuxt-link>
                </article>
          </section>
     </div>
</template>


<script>
import repoText from '@/repositorios/textos.js';
import Menu from '@/components/Menu.vue';

export default {
    components: { 
    Menu  
  },
  data:()=>({
    articleLista:[]
  }),
  asyncData() {
      return repoText.getArticles()
      .then(resultadoArticulo => {
        return {
          articleLista: resultadoArticulo
        }
      })
  },
  methods:{
    createLink(title){
      var link = '/articles/'
      var tituloFormatiado = title.replace(/ /g,'_');
      return link + tituloFormatiado
    }
  }
}
</script>

