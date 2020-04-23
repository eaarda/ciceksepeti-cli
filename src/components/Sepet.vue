<template>
<div>
    <header><ust/></header>
        <main class="cart">
            <div class="container">
                <div class="cart__empty">
                    <span class="cart__empty-icon icon-cart"></span>
                    <h1 class="cart__empty-title">Sepetiniz henüz boş</h1>
                    <a href="/" class="cart__back-link btn btn-primary btn-lg" title="Alışverişe Devam Et">Alışverişe Devam Et</a>
                </div>
            </div>
                <!--container-->
        </main>
        <alt/>  
</div>
    
</template>
<script>
import Ust from './Ust.vue'
import Alt from './Alt.vue'
export default {
    name: 'Sepet',
    components:{
        Ust,
        Alt,
    },
    data () {
    return {};
  }
}
</script>