<template>
    <div>
        <label>Title</label>
        <input :value="title" @change="(event)=>{inputHandler('title', event.target.value)}" type="text"/><br>

        <label>Subtitle</label>
        <input :value="subtitle" @change="(event)=>{inputHandler('subtitle', event.target.value)}" type="text"/><br>
        
        <label>Text</label>
        <textarea
            :value="text" 
            @change="(event)=>{inputHandler('text', event.target.value)}"
            rows="4" 
            cols="50" 
            placeholder="Escribe el maldito texto aquí..."
        /><br>
        
        <button type="submit" @click="buttonHandler">Save</button>
        
    </div>
</template>


<script>
export default {
    name:'Form',
    props:[
        'article',
        'submitEvent'
    ],
    data: () =>({
        id: 0,
        title: '',
        subtitle: '',
        text: ''
    }),
    methods: {
        buttonHandler(){
            this.submitEvent({
                id:this.id,
                title:this.title,
                subtitle:this.subtitle,
                text:this.text
            })
        },
        inputHandler(propStr, value){
            this[propStr] = value
        },
        updateProps(){
            if(this.article){
                this.id = this.article.id
                this.title = this.article.title
                this.subtitle = this.article.subtitle
                this.text = this.article.text
            }else{
                this.id = 0,
                this.title = ''
                this.subtitle = ''
                this.text = ''
            }
        }
    },
    created(){
        this.updateProps()
    },
    watch:{
        article(){
            this.updateProps()
        }
    }
}
</script>

<style>

</style>
