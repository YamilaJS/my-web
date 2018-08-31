import repoText from '@/repositorios/textos.js'

export default function actions(){
    return {
        userLogin(userData){
            repoText.login(userData.id, userData.pass)
           .then(res =>{
             if(res){
                this.changeIsLogin()
                return repoText.getArticles()
             }else{
                this.changeIsNotLogin()
             }
           })
           .then(articleList => {
                this.addArticles(articleList)
           })
        }
    }
}