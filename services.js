export default{

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

    }

}