<template>
    <div>
        <div class="order-header">
	        <div class="order-header__topbar">
		        <div class="container">
			        <div class="order-header__back-button-col">
				        <a href="javascript:void(0)" class="order-back-button--header js-back-button-header"> <span class="icon-left-arrow order-back-button__icon"></span></a>
			        </div>
			        <div class="order-header__logo-col">
				        <div class="site-logo-responsive"></div>
			        </div>
		        </div>
	        </div>
	        <div class="container order-header__heading" data-step="5">
		        <div class="order-header__row">
			        <div class="order-header__col">
				        <a href="javascript:void(0)" class="order-back-button js-back-button" onclick="window.location.href='/kullanici-girisi'"> <span class="icon-left-arrow order-back-button__icon"></span>Geri</a>
				        <div class="order-progress show-card-message-progress " data-step="5">
					        <div class="order-progress__bar-wrapper">
						        <div class="order-progress__bar pre-step-3 step-5"></div>
						        <div class="order-progress__bar-passive step-5 pre-step-3"></div>
					        </div>
					        <ul class="order-progress__steps">
                                <li data-step="5" class="order-progress__steps-item js-progress-step      is-active">Sipariş Bilgileri</li>
                                <li data-step="6" class="order-progress__steps-item js-progress-step ">Fatura Bilgileri</li>
                                <li data-step="7" class="order-progress__steps-item js-progress-step ">Ödeme</li>
                                <li data-step="8" class="order-progress__steps-item js-progress-step order-message__card">Mesaj Kartı
							        <div class="tooltip fade top js-order-message-tooltip order-message-tooltip">
								        <div class="icon icon-circle-cross"></div>
								        <div class="tooltip-arrow"></div>
								        <div class="tooltip-inner">Kart notunuzu ödeme adımından sonra ekleyeceksiniz.</div>
							        </div>
						        </li>
					        </ul>
				        </div>
			        </div>
		        </div>
	        </div>

                    <button v-if="step != 1" @click.prevent="prevStep">Previous Step</button>
                    <button v-if="step != totalsteps" @click.prevent="nextStep">Next Step</button>    
        </div>

        <main class = "order receiver">
            <div class = "container">
                <form>

                    <section v-if="step == 1">

                        <form action="/teslimat-adresi" class="form-receiver js-form-order-steps" method="post" novalidate="novalidate">
			                <div class="row order-receiver ">
				<div class="order-left">
					<input data-val="true" data-val-required="The SelectedAddressId field is required." id="SelectedAddressId" name="SelectedAddressId" type="hidden" value="0">
					<input data-val="true" data-val-required="The ShoppingCartItemIdentifier field is required." id="DeliveryAddressList_0__ShoppingCartItemIdentifier" name="DeliveryAddressList[0].ShoppingCartItemIdentifier" type="hidden" value="d723a6cf-403a-411b-a413-2dacc477a681">
					<div class="js-main-product" data-main-product-id="d723a6cf-403a-411b-a413-2dacc477a681">
						<div class="order-receiver__container">
							<div class=" order-receiver__full-col">
								<div class="form-group">
									<div class="fast-address-wrapper"></div>
								</div>
							</div>
							<div class="order-receiver__left-col">
								<div class="form-group form-group__label is-hidden">
									<label for="DeliveryAddressList_0__Address_AddressId">Adreslerim</label>
								</div>
								<div class="form-group is-hidden">
									<select class="receiver__address framed-selectbox js-selectize js-address-book selectized" id="DeliveryAddressList_0__Address_AddressId" name="DeliveryAddressList[0].Address.AddressId" tabindex="-1" style="display: none;">
										<option value="" selected="selected"></option>
									</select>
									<div class="selectize-control receiver__address framed-selectbox js-selectize js-address-book single plugin-start_typing">
										<div class="selectize-input items not-full">
											<input type="text" autocomplete="off" tabindex="" placeholder="Kayıtlı Adreslerimden Seç" style="width: 182px;">
										</div>
										<div class="selectize-dropdown single receiver__address framed-selectbox js-selectize js-address-book plugin-start_typing" style="display: none; width: 100px; top: 55px; left: 0px;">
											<div class="selectize-dropdown-content"></div>
											<div data-selectable="" class="option js-add-address">+ Yeni Adres Ekle</div>
										</div>
									</div>
								</div>
								<div class="form-group form-group__label">
									<label for="DeliveryAddressList_0__Address_AddressName">Alıcının Adı Soyadı</label>
								</div>
								<div class="form-group">
									<input class="form-control js-address-name js-placeholder js-html-tag-replace" data-val="true" data-val-length="Lütfen en az 5 ve en fazla 100 karakter uzunluğunda bir değer giriniz." data-val-length-max="100" data-val-length-min="5" data-val-required="Bu bilginin doldurulması zorunludur." id="DeliveryAddressList_0__Address_AddressName" name="DeliveryAddressList[0].Address.AddressName" placeholder="Alıcının Adı Soyadı" type="text" value=""> <span class="field-validation-valid" data-valmsg-for="DeliveryAddressList[0].Address.AddressName" data-valmsg-replace="true"></span>
									<span class="form-icon icon-love"></span>
								</div>
								<div class="form-group form-group__label">
									<label for="DeliveryAddressList_0__Address_Phone_Phone">Alıcının Telefon Numarası</label>
								</div>
								<div class="form-group">
									<input class="form-control js-only-number js-address-phone js-placeholder js-phone-number-validation" data-val="true" data-val-length="Lütfen en az {0} ve en fazla {1} karakter uzunluğunda bir değer giriniz." data-val-length-max="14" data-val-length-min="10" data-val-required="Bu bilginin doldurulması zorunludur." id="DeliveryAddressList_0__Address_Phone_Phone" name="DeliveryAddressList[0].Address.Phone.Phone" placeholder="Alıcının Telefon Numarası" type="tel" value=""> <span class="field-validation-valid" data-valmsg-for="DeliveryAddressList[0].Address.Phone.Phone" data-valmsg-replace="true"></span>
									<span class="form-icon icon-mobile"></span>
								</div>
								<div class="form-group form-group__label">
									<label for="DeliveryAddressList_0__Address_AddressLine">Alıcının Adresi</label>
								</div>
								<div class="form-group">
									<textarea class="form-control js-address-line no-resize js-placeholder js-html-tag-replace" cols="20" data-val="true" data-val-length="Lütfen en az 10 ve en fazla 250 karakter uzunluğunda bir değer giriniz." data-val-length-max="250" data-val-length-min="10" data-val-required="Bu bilginin doldurulması zorunludur." id="DeliveryAddressList_0__Address_AddressLine" name="DeliveryAddressList[0].Address.AddressLine" placeholder="Mahalle, sokak, cadde ve diğer bilgilerinizi giriniz." rows="4"></textarea> <span class="form-icon form-icon--textarea icon-pin"></span>
									<span class="field-validation-valid" data-valmsg-for="DeliveryAddressList[0].Address.AddressLine" data-valmsg-replace="true"></span>
								</div>
								<input id="DeliveryAddressList_0__AddressWithQuarter" name="DeliveryAddressList[0].AddressWithQuarter" type="hidden" value="Yeşilova,Osmangazi">
								<input id="DeliveryAddressList_0__VerifyCityName" name="DeliveryAddressList[0].VerifyCityName" type="hidden" value="Bursa">
								<input id="isSelectedAddress0" name="isSelectedAddress0" type="hidden" value="False">
							</div>
							<div class="order-receiver__right-col">
								<div class="form-group form-group__label"></div>
								<div class="form-group">
									<div class="js-sending-place-value">
										<input class="form-control form-control--no-icon js-placeholder js-address-sending-place js-html-tag-replace" data-val="true" data-val-length="Lütfen en az 2 ve en fazla 100 karakter uzunluğunda bir değer giriniz." data-val-length-max="100" data-val-length-min="2" id="DeliveryAddressList_0__Address_SendingPlaceValue" name="DeliveryAddressList[0].Address.SendingPlaceValue" placeholder="Şirket veya Okul İsmi (İsteğe Bağlı)" type="text" value=""> <span class="field-validation-valid" data-valmsg-for="DeliveryAddressList[0].Address.SendingPlaceValue" data-valmsg-replace="true"></span>
									</div>
								</div>
								<div class="form-group ">
									<select class="js-selectize framed-selectbox js-sending-reason selectized" id="DeliveryAddressList_0__Address_SendingReasonId" name="DeliveryAddressList[0].Address.SendingReasonId" tabindex="-1" style="display: none;">
										<option value="" selected="selected"></option>
									</select>
									<div class="selectize-control js-selectize framed-selectbox js-sending-reason single plugin-start_typing">
										<div class="selectize-input items not-full has-options">
											<input type="text" autocomplete="off" tabindex="" placeholder="Gönderim Nedeni" style="width: 132px;">
										</div>
										<div class="selectize-dropdown single js-selectize framed-selectbox js-sending-reason plugin-start_typing" style="display: none; width: 751px; top: 55px; left: 0px;">
											<div class="selectize-dropdown-content"></div>
										</div>
									</div> <span class="field-validation-valid" data-valmsg-for="DeliveryAddressList[0].Address.SendingReasonId" data-valmsg-replace="true"></span>
								</div>
								<div class="form-group">
									<select class="framed-selectbox js-selectize selectized" id="DeliveryAddressList_0__DeliveryOptionId" name="DeliveryAddressList[0].DeliveryOptionId" placeholder="Teslimat Seçenekleri" tabindex="-1" style="display: none;">
										<option value="" selected="selected"></option>
									</select>
									<div class="selectize-control framed-selectbox js-selectize single plugin-start_typing">
										<div class="selectize-input items not-full has-options">
											<input type="text" autocomplete="off" tabindex="" placeholder="Teslimat Seçenekleri" style="width: 144px;">
										</div>
										<div class="selectize-dropdown single framed-selectbox js-selectize plugin-start_typing" style="display: none; width: 751px; top: 55px; left: 0px;">
											<div class="selectize-dropdown-content"></div>
										</div>
									</div> <span class="field-validation-valid" data-valmsg-for="DeliveryAddressList[0].DeliveryOptionId" data-valmsg-replace="true"></span>
								</div>
								<div class="form-group form-group__label">
									<label class="ex" for="DeliveryAddressList_0__DeliveryOptionId">Teslimat Seçenekleri</label>
								</div>
								<div class="form-group"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="order-right">
					<div class="btn-wrapper">
						<button type="button" class="btn btn-lg btn-primary order-next-button js-submit-form"><span class="order-next-button__text">İleri</span><span class="icon-right-arrow order-next-button__icon"></span>
						</button>
					</div>
					<div class="js-order-summary">
						<div class="order-summary">
							<h3 class="order-summary__heading">Sipariş Özeti</h3>
							<h3 class="order-summary__price-table-heading">Ürün</h3>
							<div class="price-table js-main-product-summary" data-main-product-id="d723a6cf-403a-411b-a413-2dacc477a681">
								<a href="#" class="price-table__delete-item icon-close js-main-product-delete" data-brand="Çiçek Sepeti" data-category="çiçek" data-id="at773" data-name="2 Dal Beyaz Orkide Çiçeği" data-price="63.55" data-quantity="1" data-code="at773-1" data-url="/RemoveFromCart/d723a6cf-403a-411b-a413-2dacc477a681"></a>
								<div class="price-table__row price-table__row--main-product">
									<div class="price-table__cell-left">Çiçek
										<br> <span class="small">2 Dal Beyaz Orkide Çiçeği</span>
									</div>
									<div class="price-table__cell-right js-main-product-price" data-main-product-price="74.99">74,99 TL</div>
								</div>
								<div class="price-table__row price-table__row--inner">
									<div class="price-table__cell-left"> <span class="small">Teslimat Tarihi:</span>
									</div>
									<div class="price-table__cell-right"> <span class="small">27 Nisan 09:00&nbsp;-&nbsp;14:00 </span>
									</div>
								</div>
								<div class="price-table__row  js-extra-products-row is-hidden">
									<div class="price-table__cell-left ">Ek Ürünler
										<br> <span class="small"><span class="js-extra-products-quantity">0</span> adet</span>
									</div>
									<div class="price-table__cell-right js-extra-products-price" data-extra-products-price="0">0,00 TL</div>
								</div>
								<div class="price-table__row js-extra-cards-row is-hidden">
									<div class="price-table__cell-left ">Ek Kartlar
										<br> <span class="small"><span class="js-extra-cards-quantity">0</span> adet</span>
									</div>
									<div class="price-table__cell-right  js-extra-cards-price" data-extra-cards-price="0">0,00 TL</div>
								</div>
								<div class="price-table__row is-hidden">
									<div class="price-table__cell-left ">Uzun Mesafe Yol
										<br> <a href="javascript:;" data-toggle="tooltip" data-placement="top" title="" data-original-title="Siparişinizin teslimi için ödenmesi gereken yol ücreti. Seçtiğiniz bölge merkeze uzak olduğundan ek yol ücreti gerekmektedir."><span class="small"><u>Bu nereden çıktı?</u></span></a>
									</div>
									<div class="price-table__cell-right js-delivery-price" data-delivery-price="0,00">0,00 TL</div>
								</div>
								<div class="price-table__row is-hidden">
									<div class="price-table__cell-left ">Ara Toplam</div>
									<div class="price-table__cell-right js-without-discount-price" data-without-discount-price="74,99">74,99 TL</div>
								</div>
							</div>
							<div class="price-table__row js-cargo-charge-row is-hidden">
								<div class=" price-table__cell-left ">Teslimat Ücreti
									<br>
								</div>
								<div class="price-table__cell-right js-cargo-charge" data-cargo-charge="0.00">0,00 TL</div>
							</div>
							<div class="discount-area is-hidden">
								<div class="discount-area__left"> <span class="icon-price discount-area__icon"></span>İndiriminiz</div>
								<div class="discount-area__right js-discount-price" data-discount-price="0,0">-0,00 TL</div>
								<p class="discount-area__text">İndiriminize ek ürünler dahil değildir.</p>
							</div>
							<div class="total-price-area">
								<div class="total-price-area__inner">
									<div class="total-price-area__left">Toplam Fiyat <span class="total-price-area__tax">(KDV Dahil)</span>
									</div>
									<div class="total-price-area__right js-general-total-price" data-total-price="74" data-secon-price="99">
										<p class="price"> <span class="price__integer-value js-integer-value">74</span>, <span class="price__decimal-value js-decimal-value">99</span>
											<span class="price__currency-with-tax">TL</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="btn-wrapper">
						<button type="button" class="btn btn-lg btn-primary order-next-button js-submit-form"><span class="order-next-button__text">İleri</span><span class="icon-right-arrow order-next-button__icon"></span>
						</button>
					</div>
				</div>
			</div>
			<input class="js-isFranchise" type="hidden" value="False">
			<input name="__RequestVerificationToken" type="hidden" value="CfDJ8Gl4nXrV0qNFqSI9-b9pRtj2S3awRvJ1MJNztvd4LldVI760lW1Ig2_gPOhVv7MYDAHzxK1KtUgjhelym1B1XvkTsdDMmCZtwKtBuZZhdsN1cQuieC98vYUyN_qso14xrkEdaGyd5ecoa0-M7U5UmhY">
		</form>

                    </section>



                </form>

            </div>
            
        </main>
    





    </div>
</template>


<script>
export default {
    name: 'Odeme',
    data () {
    return {
        step:1,
        totalsteps:4,
    };
  },
  methods:{
      nextStep:function()
      {
          this.step++;
      },
      prevStep:function()
      {
          this.step--;
      }
  }
}
</script>