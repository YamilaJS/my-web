<template>
    <div class="login">

        <h1>Sign in</h1>
        <label>Id</label>
        <p v-if="id == ''">*Este campo es obligatorio</p>
        <input  v-model="id" type="text" placeholder="id"/><br>

        <p v-if="password == ''">*Este campo es obligatorio</p>
        <input  v-model="password" type="password" placeholder="Password"/>
        <hr/>

        <button type="submit" @click = "buttonHandler">Login</button>
        
    </div>
</template>


<script>
export default {
    name: "Login",
    props: ["summitEvent"],
    data : () => ({
        id: "",
        password: "",
        isLogin:true
       
    }),
    methods: {
      buttonHandler(){
          if( this.id && this.password){
           this.summitEvent({
                id:this.id,
                pass: this.password
           })          
        }else{
            this.isLogin = false
        }
      }
  }
}

</script>
