<template>
    <div>
        <article v-for="(article, index) in articleList" :key="'artLista'+index">
            <h1 v-text="article.title"/>
            <button @click="userEvent('edit', article.id)">Editar</button>
            <button @click="userEvent('delete',article.id)">Borrar</button>
        </article>
    </div>
</template>

<script>

export default {
    name: "ArticleList",
    props:['articleList','userEvent'],
}
</script>
