<template>
     <div>              
            <Login v-show = "!getLogin" :summitEvent="userLogin"/>

            <div v-show ="getLogin">              
              <AdminApp/>
            </div>  
     </div>
</template>

<script>

import Login from '@/components/adminComponets/Login.vue'
import AdminApp from '@/components/adminComponets/adminApp.vue'
import actions from '@/store/actions.js'
import mutators from '@/store/mutators.js'
import states from '@/store/states.js'
import getters from '@/store/getters.js'

export default {
  name: "Administracion",
  components:{
    Login,
    AdminApp
  },
  data:states,
  methods:{...actions(), ...mutators()},
  computed:getters()
}

</script>

