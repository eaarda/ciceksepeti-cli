<template>
<div>
    <header><ust/></header>


        <main class="membership loginpage">
	            <div class="container">
		    <div class="row">
			<div class="membership__full">
				<h2 class="login__heading">Giriş</h2>
				<form action="/Customer/Login" class="form-user-login js-login-form" id="userLogin" method="post" novalidate="novalidate">
					<div class="form-group form-group__label">
						<label for="EmailLogin">E-posta Adresiniz</label>
					</div>
					<div class="form-group">
						<input class="form-control js-placeholder" data-val="true" data-val-email="Lütfen geçerli bir e-posta adresi giriniz." data-val-length="'Email', 0 ve 100 arasında karakter uzunluğunda olmalı." data-val-length-max="100" data-val-length-min="0" data-val-required="Bu bilginin doldurulması zorunludur." id="EmailLogin" name="Email" placeholder="E-posta Adresiniz" required="required" type="email" value="" aria-required="true"> <span class="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true"></span>
						<span class="form-icon icon-user"></span>
					</div>
					<div class="form-group form-group__label">
						<label for="Password">Şifre</label>
					</div>
					<div class="form-group"> <span class="form-group__show-type js-show-type icon-eye"></span>
						<input class="form-control js-placeholder js-html-tag-replace" data-val="true" data-val-length="Lütfen en az 3 ve en fazla 20 karakter uzunluğunda bir değer giriniz." data-val-length-max="20" data-val-length-min="3" data-val-required="Bu bilginin doldurulması zorunludur." id="Password" name="Password" placeholder="Şifre" required="required" type="password" value="" aria-required="true"> <span class="field-validation-valid" data-valmsg-for="Password" data-valmsg-replace="true"></span>
						<span class="form-icon icon-lock"></span>
					</div>
					
				
					<div class="form-group form-user-login__action">
						<button type="button" class="btn btn-primary btn-lg pull-right login__btn js-login-button">Giriş</button> <a href="Javascript:void(0);" class="login__forgot-password js-forgot-password">Şifremi Unuttum</a>
						<input class="js-favorite-list-add" name="favoriteList" value="" hidden="">
					</div>
					<input name="__RequestVerificationToken" type="hidden" value="CfDJ8Gl4nXrV0qNFqSI9-b9pRtjxulpp93pn2UK6uFZUzcN6kY8jdNCxMuAjEpgO3LbTmaUzu9Xr-3NARZgeOm6M8N-8OHpjnGJue4g0JrARey54MzfCXocRY0H_Pc3YA8pbYw2b4xA3G9_zhdAxC_pexTE">
				</form>
				<form class="form-password-recovery js-password-recovery is-hidden" novalidate="novalidate">
					<div class="form-group">Lütfen üye olduğunuz e-posta adresini girin</div>
					<div class="form-group">
						<input class="form-control js-placeholder js-password-recovery-input" data-val="true" data-val-email="Lütfen geçerli bir e-posta adresi giriniz." data-val-length="Lütfen en fazla 100 karakter uzunluğunda bir değer giriniz." data-val-length-max="100" data-val-length-min="0" data-val-required="Bu bilginin doldurulması zorunludur." id="Mail" name="Mail" placeholder="E-posta" type="email" value=""> <span class="form-icon icon-mail"></span>
						<span class="field-validation-valid" data-valmsg-for="Mail" data-valmsg-replace="true"></span>
					</div>
					<div class="form-group">
						<div>
							<div class="js-recaptcha-container-"></div>
						</div>
						<button type="button" class="btn btn-lg btn-primary form-password-recovery__btn js-password-recovery-button">Gönder</button>
					</div>
				</form>
				<div class="password-recovery-result js-password-recovery-result is-hidden"> <span class="password-recovery-result__icon icon-check"></span>
					Şifreniz belirttiğiniz e-posta adresine gönderildi.</div>
			</div>
		    </div>
		    <div class="row">
			<div class="membership__bottom">
				<p class="membership__bottom-text">ya da</p>
				<div class="membership__facebook-button">
					<a class="login__facebook btn btn-info btn-xlg full-width" href="#" onclick="$.publish('click-facebook-login', null); window.open('/Plugins/ExternalAuthFacebook/Login', 'fbLogin', 'width=750,height=500'); return false;"> <span class="login__facebook-icon icon-facebook"></span>Facebook ile Bağlan</a>
				</div> <a class="membership__bottom-login btn btn-warning btn-lg" href="/uyelik">Üye Ol</a>
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
import axios from "axios";

export default {
    name: 'Userlogin',
    components:{
        Ust,
        Alt,
    },
    data () {
	return {};
}
}
</script>
