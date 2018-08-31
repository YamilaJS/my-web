export default function mutators(){
    return {
        changeIsLogin(){
            this.isLogin = true
        },
        changeIsNotLogin(){
            this.isLogin = false
        },
        addArticles(articleList){
            this.articleList = articleList
        }
    }

}