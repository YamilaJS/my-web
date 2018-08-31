<template>
         <nav>
            <button @click="buttonClickedEvent">Nuevo Articulo</button>
        </nav>
</template>

<script>
export default {
    name:'ABMnav',
    props:['buttonClickedEvent'],
}
</script>
