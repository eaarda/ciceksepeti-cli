<template>
<div>
    <header><ust/></header>
        <a href="#"><img alt="Yukarı Çık" class="yukarikaydir" src="../img/yc.png" style="display: block;"></a>
        
        <main class="membership-thanks">
            <div class="container">
                <div class="membership-thanks__intro"> <span class="membership-thanks__icon-balloon"></span>
			        <h2 class="membership-thanks__heading">Teşekkürler!</h2>
			        <p class="membership-thanks__heading-text" style="margin-top: 40px;font-size: 2rem;"></p>
		        </div>
		        <div class="membership-thanks__description" style="padding-top: 30px;">
			        <p>Mutlu Etmenin Adresi ÇiçekSepeti'ne Hoş Geldiniz.
				    <br>
				    <br>Çiçek aranjmanları, lezzetli sürprizler ve kişiye özel binlerce hediye alternatifi ve Türkiye'nin dört bir yanına
				    <br>hızlı teslimat ayrıcalığı ile sevdiklerinizi mutlu etmek istediğiniz her an yanınızdayız.</p>
		        </div>
		        <div class="membership-thanks__btn"> <a href="/" class="btn btn-primary btn-lg">Alışverişe Başla</a>
		        </div>
	        </div>
        </main>

        <alt/>  
</div>
</template>

<script>
import Ust from './Ust.vue'
import Alt from './Alt.vue'

export default {
   name:'UyelikBasarili',
   components:{
       Ust,
       Alt,
   } 
}
</script>