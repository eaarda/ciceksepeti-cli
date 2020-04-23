<template>
<div>
    <header><ust/></header>
        <a href="#"><img alt="Yukarı Çık" class="yukarikaydir" src="../img/yc.png" style="display: block;"></a>
        <orta/>
        <alt/>  
</div>
</template>

<script>
import Ust from './Ust.vue'
import Orta from './Orta.vue'
import Alt from './Alt.vue'

export default {
   name:'Home',
   components:{
       Ust,
       Orta,
       Alt,
   } 
}
</script>
