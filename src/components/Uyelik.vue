<template>
<div>
    <header><ust/></header>

    <main class="membership">
	    <div class="container">
		<h2 class="login__heading">Yeni Üyelik</h2>
		<div class="row">
			<div class="membership__left">
				<div>
					<div class="tab-content">
						<div role="tabpanel" class="tab-pane active" id="bireyselUyelik">
							<form action="/Customer/RegisterIndividualUser" class="membership__form js-individual-register-form" id="newMemberFormIndividual" method="post" novalidate="novalidate">
								
								<input class="js-login-user-agent" id="UserAgent" name="UserAgent" type="hidden" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36">
								<div class="form-group form-group__label">
									<label for="NameIndivual">Adınız Soyadınız</label>
								</div>
								<div class="form-group"> <span class="form-required-icon">*</span>
									<input class="form-control js-placeholder js-html-tag-replace" v-model="username" data-val="true" data-val-length="Lütfen en az 5 ve en fazla 50 karakter uzunluğunda bir değer giriniz." data-val-length-max="50" data-val-length-min="5" data-val-required="Bu bilginin doldurulması zorunludur." id="NameIndivual" maxlength="50" name="Name" placeholder="Adınız Soyadınız" required="required" type="text" value="" aria-required="true"> <span class="form-icon icon-user"></span>
									<span class="field-validation-valid" data-valmsg-for="Name" data-valmsg-replace="true"></span>
								</div>
								<div class="form-group form-group__label">
									<label for="EmailIndivual">E-posta</label>
								</div>
								<div class="form-group"> <span class="form-required-icon">*</span>
									<input class="form-control js-placeholder" v-model="email" data-val="true" data-val-email="Lütfen geçerli bir e-posta adresi giriniz." data-val-length="Lütfen en fazla 100 karakter uzunluğunda bir değer giriniz." data-val-length-max="100" data-val-length-min="0" data-val-maxlength="The field Email must be a string or array type with a maximum length of '100'." data-val-maxlength-max="100" data-val-required="Bu bilginin doldurulması zorunludur." id="EmailIndivual" maxlength="100" name="Email" placeholder="E-posta" required="required" type="email" value="" aria-required="true"> <span class="form-icon icon-mail"></span>
									<span class="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true"></span>
								</div>
								<div class="form-group form-group__label">
									<label for="PasswordIndivual">Şifre</label>
								</div>
								<div class="form-group"> <span class="form-required-icon">*</span>
									<span class="form-group__show-type js-show-type icon-eye"></span>
									<input class="form-control form-control--password js-placeholder js-html-tag-replace" v-model="password" data-val="true" data-val-length="Lütfen en az 3 ve en fazla 20 karakter uzunluğunda bir değer giriniz." data-val-length-max="20" data-val-length-min="3" data-val-required="Bu bilginin doldurulması zorunludur." id="PasswordIndivual" name="Password" placeholder="Şifre" required="required" type="password" value="" aria-required="true"> <span class="form-icon icon-lock"></span>
									<span class="field-validation-valid" data-valmsg-for="Password" data-valmsg-replace="true"></span>
								</div>
								
								<div class="form-group ">
									<input type="checkbox" name="IsCheckAllContact" id="IsCheckAllContact" value="true">
									<label for="IsCheckAllContact">Çiçeksepeti.com tarafından tarafıma <a class="js-customer-consent-contract" href="javascript:void(0);">ticari elektronik ileti</a> gönderilmesine izin veriyorum.</label>
									</div>
									<div class="form-group">
									<input data-val="true" data-val-required="The IsCustomerContractConfirmed field is required." id="IsCustomerContractConfirmed" name="IsCustomerContractConfirmed" type="checkbox" value="true">
									<label class="required-label" for="IsCustomerContractConfirmed"><a class="js-customer-contract" href="javascript:void(0);">Üyelik Sözleşmesi
           								 </a>'ni ve <a class="js-customer-privacy" href="javascript:void(0);">Gizlilik Sözleşmesi
            										</a>'ni okudum, onaylıyorum.<span class="form-required-icon">*</span>
									</label> <span class="field-validation-valid" data-valmsg-for="IsCustomerContractConfirmed" data-valmsg-replace="true"></span>
									</div>
									<div class="form-group text-right">
									<button type="button" class="btn btn-primary btn-lg membership__btn js-individual-register-button" @click="uye">Üye Ol</button>
									</div>
									<div class="form-group">
										<p class="small membership__required-field-text"> <span class="form-required-icon membership__required-icon">*</span> Yıldızlı alanların doldurulması zorunludur.</p>
									</div>
									<input name="__RequestVerificationToken" type="hidden" value="CfDJ8Gl4nXrV0qNFqSI9-b9pRtiMIXKV-GIavWWsm9XH4vxx44V9goYz1CebPVducM-ZdkZEw96eZqh6-nlDcKaXeHzx11IZXg_eB2gJuN_cEOvKC_6ChFBaUK41hTBOIlh5kbxyxjkEQPrRz0IxOybjj8o">
									<input name="IsCustomerContractConfirmed" type="hidden" value="false">
									</form>
									</div>
					</div>
				</div>
			</div>
			<div class="membership__right membership__right--register">
				<h3 class="membership-advantages-title">Neden Üye Olmalıyım?</h3>
				<div class="membership-advantages">
					<div class="membership-advantages__left">
						<ul class="member-advantages-list member-advantages-list--register">
							<li class="member-advantages-list__item"> <span class="icon icon-cargo-track member-advantages-list__icon"></span>
								Kolay Sipariş Takibi</li>
							<li class="member-advantages-list__item"> <span class="icon icon-discount50 member-advantages-list__icon"></span>
								Hediye Çeki Fırsatları</li>
							<li class="member-advantages-list__item"> <span class="icon icon-reminder member-advantages-list__icon"></span>
								Hatırlatma Servisi</li>
						</ul>
						<p class="membership-advantages__text">Ve daha fazlası için üye ol</p>
					</div>
					<div class="membership-advantages__right">
						<img class="membership-advantages__image" src="//cdn03.ciceksepeti.com/Themes/Ciceksepeti/Assets/images/uyelik-avantajlari.jpg">
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="membership__bottom">
				<p class="membership__bottom-text">Zaten üye misiniz?</p> <a class="membership-advantages__button--member-login btn btn-warning btn-lg" href="/userlogin">Üye Girişi</a>
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
import UyelikBasarili from './UyelikBasarili.vue'

export default{
	name:'Uyelik',
	components:{
		Ust,
		Alt,
	},
	methods:{
		uye:function(){
			axios.post('http://localhost:5000/kayit', {
				username: this.username,
				email: this.email,
				password: this.password
			})
			.then(function(resp){
				console.log(resp);
				window.location.href="/uyelikbasarili"
			})
			.catch(function (error){
				console.log(error);
			})
		}
	},
}
</script>


