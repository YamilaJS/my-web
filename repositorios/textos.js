var articles = [
	{
		id:1,
		title:"Pellentesque habitant morbi tristique",
		image:"https://i.pinimg.com/originals/b2/c2/fa/b2c2fa8138c6fdfecede3617a0f12ada.jpg",
		resumen: "Praesent cursus lorem a libero facilisis, eget euismod urna congue. Phasellus ut suscipit elit, eu fermentum risus. Suspendisse tristique dictum volutpat. Suspendisse rutrum massa eu dui eleifend, eu tristique dolor ullamcorper. Maecenas tristique diam ipsum, sed interdum urna porta eget. Vivamus vehicula nunc vel tristique placerat.",
		detalle:'fdgdfg'
	},
	{
		id:2,
		title:"Aliquam gravida elit eget placerat facilisis",
		image:"https://i.pinimg.com/originals/b2/c2/fa/b2c2fa8138c6fdfecede3617a0f12ada.jpg",
		resumen: "Praesent cursus lorem a libero facilisis, eget euismod urna congue. Phasellus ut suscipit elit, eu fermentum risus. Suspendisse tristique dictum volutpat. Suspendisse rutrum massa eu dui eleifend, eu tristique dolor ullamcorper. Maecenas tristique diam ipsum, sed interdum urna porta eget. Vivamus vehicula nunc vel tristique placerat.",
		detalle:'fdgdfg'
	},
	{
		id:3,
		title:"Proin quis nibh et lacus varius aliquam",
		image:"https://i.pinimg.com/originals/b2/c2/fa/b2c2fa8138c6fdfecede3617a0f12ada.jpg",
		resumen: "Praesent cursus lorem a libero facilisis, eget euismod urna congue. Phasellus ut suscipit elit, eu fermentum risus. Suspendisse tristique dictum volutpat. Suspendisse rutrum massa eu dui eleifend, eu tristique dolor ullamcorper. Maecenas tristique diam ipsum, sed interdum urna porta eget. Vivamus vehicula nunc vel tristique placerat.",
		detalle:'fdgdfg'
	}
]


export default{
 
    getAbaut(){

	},
	getIndex(){
		return new Promise( resolve => {
			resolve({
				title: "Pellentesque habitant morbi tristique",
				image:"",
				description: "Praesent cursus lorem a libero facilisis, eget euismod urna congue. Phasellus ut suscipit elit, eu fermentum risus. Suspendisse tristique dictum volutpat. Suspendisse rutrum massa eu dui eleifend, eu tristique dolor ullamcorper. Maecenas tristique diam ipsum, sed interdum urna porta eget. Vivamus vehicula nunc vel tristique placerat.",
			})
		})
	},
	getArticles(){
		return new Promise( resolve =>{
			var articulosSinDetalle = []
			
			articles.map(article => {
				articulosSinDetalle.push({
					id:article.id,
					title:article.title,
					image:article.image,
					resumen:article.resumen
				})
			})

			resolve(articulosSinDetalle)
			
		})
	},
	getArticle(title){ // sin guiones
		return new Promise((resolve, reject)=>{
			var articleFinded = articles.find( article =>{
				return article.title == title
			})
			resolve(articleFinded )
		})
	},
	login(id,pass){
		return new Promise((resolve, reject)=>{
			if (id == "leo" && pass == "123"){
			 	resolve(true)
			}else{
				resolve(false)
			}
		})
	}
}
