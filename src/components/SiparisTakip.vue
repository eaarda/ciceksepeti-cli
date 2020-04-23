<template>
<div>
    <header><ust/></header>
        <main class="custom">
    <div class="container">
        <div class="custom__inner">
            <div class="custom__full-col">
                <h1 class="order-tracking__title">Sipariş Takip</h1>
            </div>
            <div class="custom__middle-col js-tracking-page">
                <form class="js-order-tracking-anonymous" novalidate="novalidate">
                    <input name="__RequestVerificationToken" type="hidden" value="CfDJ8Gl4nXrV0qNFqSI9-b9pRtjN7x1RSTYXpC_lpi6Q8w_mdUZzzMKLzh1sY3ho0xV_4e_CCqL4cXId_2WFIc80eW7KEdDs8eUA1L7p_uhUeSwEMs0Y4xULkkxh2_8nsNfu9BljpTYijlrEPazG7RfGIH8">
                    <div class="form-group form-group__label">
                        <label for="OrderCode">Sipariş Numaranız</label>
                    </div>
                    <div class="form-group clearfix">
                        <input class="form-control js-only-number js-placeholder js-order-code" data-val="true" data-val-length="Lütfen en fazla 100 karakter uzunluğunda bir değer giriniz." data-val-length-max="100" data-val-length-min="0" data-val-required="Bu bilginin doldurulması zorunludur."
                            name="OrderCode" pattern="[0-9]*" placeholder="Sipariş Numaranız" required="required" type="text" value="" aria-required="true">
                        <span class="field-validation-valid" data-valmsg-for="OrderCode" data-valmsg-replace="true"></span>
                        <span class="form-icon icon-cart"></span>
                    </div>
                    <div class="form-group form-group__label">
                        <label for="CustomerEmail">E-posta Adresiniz</label>
                    </div>
                    <div class="form-group clearfix">
                        <input class="form-control js-placeholder js-order-customer-email" data-val="true" data-val-email="Lütfen geçerli bir e-posta adresi giriniz." data-val-length="Lütfen en fazla 100 karakter uzunluğunda bir değer giriniz." data-val-length-max="100" data-val-length-min="0"
                            data-val-required="Bu bilginin doldurulması zorunludur." name="CustomerEmail" placeholder="E-posta adresiniz" required="required" type="text" value="" aria-required="true">
                        <span class="field-validation-valid" data-valmsg-for="CustomerEmail" data-valmsg-replace="true"></span>
                        <span class="form-icon icon-mail"></span>
                    </div>
                    <div class="form-group clearfix">
                        <p class="order-tracking-form__message js-order-tracking-message"></p>
                    </div>
                    <div class="form-group clearfix">
                        <div class="js-recaptcha-container-">
                        </div>
                        <button type="button" class="order-tracking-form__btn btn btn-primary btn-lg js-order-tracking-button" style="display: inline-block;">Sipariş Takip</button>
                    </div>
                </form>
            </div>
            <div class="custom__middle-col">
                Çiçek Sepeti sipariş takip sayfasından, alışverişlerinizin takibini anlık olarak yapabilirsiniz. Sipariş no ve e-mail adresi bilgileriniz ile sorgulama yaparak, ürününüzün hazırlanma aşamasından teslimatına kadar olan süreçteki işlem basamaklarını ve
                bilgilendirme iletilerini anlık takip edebilirsiniz.Dilerseniz hesabınıza giriş yaparak da <a href="https://www.ciceksepeti.com/hesabim/siparislerim">"Hesabım"</a> sayfasından da siparişinizin son durumunu kontrol edebilirsiniz.
            </div>
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
    name: 'SiparisTakip',
    components:{
        Ust,
        Alt,
    },
    data () {
    return {};
  }
}
</script>