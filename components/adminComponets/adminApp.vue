<template>
    <div>
        <ABMnav
            :buttonClickedEvent="newArticleButtonHandler"
        />
        <Form
            v-show="componentShow=='articleForm'"
            :article = "articleFinded"
            :submitEvent = "submitEventForm"
        />

        <ArticleList
            v-show="componentShow=='articleList'"
            :articleList = "articleList"
            :userEvent = "userEventArticleList"
        />
    </div>

</template>

<script>
import ABMnav from '@/components/adminComponets/ABMnav.vue'
import Form from '@/components/adminComponets/Form.vue'
import ArticleList from '@/components/adminComponets/ArticleList.vue'


const services = {
    addArticle(){
        return new Promise((resolve, reject)=>{

            resolve(new Date().getTime())
        })
    }
}

export default {
    name: "AdminApp",
    components:{ 
       ABMnav,
       Form,
       ArticleList
    },
    data:()=>({
        articleList:[
            {
                id:2,
                title:'dsfsd',
                subtitle:'dsdfd',
                text:'zxczxc'
            },
            {
                id:6,
                title:'sdds',
                subtitle:'',
                text:''
            }
        ],
        articleFocusID:0,
        componentShow:'articleList'
    }),
    
    methods:{

        createArticle(form){
            services.addArticle(form)
            .then( responseID => {
                setTimeout(()=>{
                    form.id = responseID
                    this.articleList.push(form)
                },1500)                
            })
            .catch(err=>{
                console.log("error 404")
            })
        },
        updateArticle(form){
            let newArray = this.articleList.map( article => {   
                if(article.id == form.id){
                    article = form
                }
                return article
            })
            this.articleList = newArray
        },
        submitEventForm(form){
            this.changeShowComponent('articleList')
            if(form.id){
                this.updateArticle(form)
            }else{
                this.createArticle(form)
            }
        },
        newArticleButtonHandler(){
            this.changeShowComponent('articleForm')
            this.updateArticleFocus(0)
        },
        deleteArticle(articleID){  
            this.articleList = this.articleList.filter( article => article.id != articleID )
        },
        updateArticleFocus(articleID){
            this.articleFocusID = articleID
        },
        changeShowComponent(componentName){
            this.componentShow = componentName
        },
        userEventArticleList(action, articleID){
            if(action == 'edit'){
                this.changeShowComponent('articleForm')
                this.updateArticleFocus(articleID)
            }else if(action == 'delete'){
                this.deleteArticle(articleID)
            }
        }
    },
    
    computed:{
        articleFinded(){
            return this.articleList.find(article => ( article.id == this.articleFocusID ))
        }
    }
}
</script>
