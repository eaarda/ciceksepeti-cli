<template>
    <div>
        <div class="order-header">
	        <div class="order-header__topbar">
		        <div class="container">
			        <div class="order-header__back-button-col">
				        <a href="javascript:void(0)" class="order-back-button--header js-back-button-header"> <span class="icon-left-arrow order-back-button__icon"></span></a>
			        </div>
			        <div class="order-header__logo-col">
				        <div class="site-logo-responsive">
						</div>
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
        </div>

		<button v-if="step != 1" @click.prevent="prevStep">Previous Step</button>
		<button v-if="step != totalsteps" @click.prevent="nextStep">Next Step</button>

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

					<section v-if="step == 2">

						<form action="/fatura-bilgileri" class="form-invoice js-form-order-steps" id="billing-form" method="post" novalidate="novalidate">
										<div class="form-group form-group__label">
											<label for="BuyerName">Adınız Soyadınız</label>
										</div>
										<div class="form-group">
											<input class="form-control js-placeholder js-html-tag-replace valid" data-val="true" data-val-length="Lütfen en az 2 ve en fazla 75 karakter uzunluğunda bir değer giriniz." data-val-length-max="75" data-val-length-min="2" data-val-required="Bu bilginin doldurulması zorunludur." id="BuyerName" name="BuyerName" placeholder="Adınız Soyadınız" type="text" value="elif" aria-required="true" aria-invalid="false" aria-describedby="BuyerName-error"> <span class="field-validation-valid" data-valmsg-for="BuyerName" data-valmsg-replace="true"></span>
											<span class="form-icon icon-user"></span>
											<span class="form-group__placeholder js-validation-label" style="display: block;">Adınız Soyadınız</span>
										</div>
										<div class="form-group form-group__label">
											<label for="Email">E-posta</label>
										</div>
										<div class="form-group">
											<input class="form-control js-placeholder js-billing-address-email valid" data-val="true" data-val-email="Lütfen geçerli bir e-posta adresi giriniz." data-val-length="'Email', 0 ve 100 arasında karakter uzunluğunda olmalı." data-val-length-max="100" data-val-length-min="0" data-val-required="Bu bilginin doldurulması zorunludur." id="Email" name="Email" placeholder="E-posta" type="email" value="elifaarda@gmail.com" aria-required="true" aria-invalid="false" aria-describedby="Email-error"> <span class="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true"></span>
											<span class="form-icon icon-mail"></span>
											<span class="form-group__placeholder js-validation-label" style="display: block;">E-posta</span>
										</div>
										<div class="form-group form-group__label">
											<label for="PhoneNumber">Telefon Numarası</label>
										</div>
										<div class="form-group">
											<input class="form-control js-only-number js-placeholder js-phone-number-validation valid" data-val="true" data-val-length="Lütfen en az {0} ve en fazla {1} karakter uzunluğunda bir değer giriniz." data-val-length-max="14" data-val-length-min="10" data-val-regex="Lütfen geçerli bir telefon numarası giriniz." data-val-regex-pattern="(^[0-9]*$)" data-val-required="Bu bilginin doldurulması zorunludur." id="PhoneNumber" name="PhoneNumber" placeholder="Telefon Numarası" type="tel" value="53888101580" aria-required="true" aria-invalid="false" aria-describedby="PhoneNumber-error"> <span class="field-validation-valid" data-valmsg-for="PhoneNumber" data-valmsg-replace="true"></span>
											<span class="form-icon icon-mobile"></span>
											<span class="form-group__placeholder js-validation-label" style="display: block;">Telefon Numarası</span>
										</div>
										<div class="form-group form-invoice__hidden-section-wrapper"> <a id="ToggleEditInvoiceInfo" class="form-invoice__toggle" role="button" data-toggle="collapse" href="#billingCollapse" aria-expanded="true" aria-controls="collapseExample">
                               				Fatura bilgilerimi düzenle
                               				 <span class="small js-add-caret icon-down-arrow"></span>
                            				</a>
												<div class="collapse form-invoice__hidden-section" id="billingCollapse">
								<div class="form-group">
									<input checked="checked" class="js-bill-type" data-val="true" data-val-required="The IsCorporate field is required." id="personalBill" name="IsCorporate" type="radio" value="False">
									<label class="gray-radio form-invoice__type-radio" for="personalBill">Kişi Adına</label>
									<input class="js-bill-type" id="corporateBill" name="IsCorporate" type="radio" value="True">
									<label class="gray-radio form-invoice__type-radio" for="corporateBill">Şirket Adına</label>
								</div>
								<div class="form-group form-group__label" style="display: block;">
									<label for="AddressText">Adres</label>
								</div>
								<div class="form-group">
									<textarea class="form-control form-control--no-icon js-placeholder js-html-tag-replace" id="AddressText" name="AddressText" placeholder="Adres" row="5"></textarea> <span class="field-validation-valid" data-valmsg-for="AddressText" data-valmsg-replace="true"></span>
								</div>
								<div class="form-group form-group__label corporate-from-group js-just-corporate is-hidden">
									<label for="CompanyName">Kurum Adı</label>
								</div>
								<div class="form-group corporate-from-group js-just-corporate is-hidden">
									<input class="form-control corporate-from-field form-control--no-icon js-placeholder js-html-tag-replace" id="CompanyName" name="CompanyName" placeholder="Kurum Adı" type="text" value="" disabled="disabled"> <span class="field-validation-valid" data-valmsg-for="CompanyName" data-valmsg-replace="true"></span>
								</div>
								<div class="form-group form-group__label corporate-from-group js-just-corporate is-hidden">
									<label for="TaxOfficeName">Vergi Dairesi</label>
								</div>
								<div class="form-group corporate-from-group js-just-corporate is-hidden">
									<input class="form-control corporate-from-field form-control--no-icon js-placeholder js-html-tag-replace" data-val="true" data-val-length="Lütfen en az 2 ve en fazla 100 karakter uzunluğunda bir değer giriniz." data-val-length-max="100" data-val-length-min="2" id="TaxOfficeName" name="TaxOfficeName" placeholder="Vergi Dairesi" type="text" value="" disabled="disabled"> <span class="field-validation-valid" data-valmsg-for="TaxOfficeName" data-valmsg-replace="true"></span>
								</div>
								<div class="form-group form-group__label corporate-from-group js-just-corporate is-hidden">
									<label for="TaxNumber">Vergi No</label>
								</div>
								<div class="form-group corporate-from-group js-just-corporate is-hidden">
									<input class="form-control js-only-number corporate-from-field form-control--no-icon js-placeholder" data-val="true" data-val-length="Lütfen en az 10 ve en fazla 11 karakter uzunluğunda bir değer giriniz." data-val-length-max="11" data-val-length-min="10" id="TaxNumber" maxlength="11" name="TaxNumber" placeholder="Vergi No" type="text" value="" disabled="disabled"> <span class="field-validation-valid" data-valmsg-for="TaxNumber" data-valmsg-replace="true"></span>
								</div>
							</div>
						</div>
						<div class="form-group js-is-check-all-contact" hidden="" style="display: block;">
							<input type="checkbox" name="IsCheckAllContact" id="IsCheckAllContact" value="false">
							<label class="black-checkbox customer-permisson js-customer-permisson-label" for="IsCheckAllContact">Çiçeksepeti.com tarafından tarafıma <a class="js-customer-consent-contract" href="javascript:void(0);">ticari elektronik ileti</a> gönderilmesine izin veriyorum.</label>
						</div>
						<div class="form-group js-is-check-permitted-personal" hidden="" style="display: block;">
							<input type="checkbox" id="IsPermittedPersonalData" name="IsPermittedPersonalData" value="true">
							<label for="IsPermittedPersonalData" class="black-checkbox">
								<p> <a href="javascript:;" class="preliminary-info__confirmation-link type js-pre-info">Kişisel Bilgi Toplama Prosedürü Gizlilik Politikası</a>'nı okudum ve kabul ediyorum.</p>
							</label>
						</div>
						<input data-val="true" data-val-required="The EInvoiceSend field is required." id="EInvoiceSend" name="EInvoiceSend" type="hidden" value="False">
						<input name="__RequestVerificationToken" type="hidden" value="CfDJ8Gl4nXrV0qNFqSI9-b9pRtjL7D8rq4KXfAvn_5uFfVnL88pAyYFUGbTPvDef7erhaglyblyQx_crhRmBXA0KADj32-L2qCGrKCpad40ES3gMUsRaGM3MwxZigBFDF8OhGm4zI8NijGTwOqB1RnNebGs">
						</form>
				
					</section>

					<section v-if="step == 3">
						<div class="row">
						<div class="order-left">
							<form action="/odeme-sec" autocomplete="off" class="form-confirm-order" id="confirm-order-form" method="post" novalidate="novalidate">
								<div class="payment__types-wrapper">
									<ul class="payment__types">
										<li class="payment__types-item is-active">
											<input checked="checked" class="payment__types-radio js-payment-radio js-credit-card-payment-method" data-val="true" data-val-required="Lütfen bir ödeme tipi seçiniz." id="radio1" name="SelectedPaymentMethod" type="radio" value="Pay.CreditCard.Web_1">
											<label class="payment__types-label" for="radio1">Kredi Kartı / Banka Kartı</label>
										</li>
										<li class="payment__types-item">
											<input class="payment__types-radio js-payment-radio" id="radio2" name="SelectedPaymentMethod" type="radio" value="Pay.MoneyOrder.Web_2">
											<label class="payment__types-label" for="radio2">Havale</label>
										</li>
									</ul>
								</div>
						<span class="field-validation-valid" data-valmsg-for="SelectedPaymentMethod" data-valmsg-replace="true"></span> 
								<div class="payment__details--wrapper">
									<div class="payment-details__full ab-payment-message-danger is-hidden"></div>
									<div class="payment-details__left  ">
										<div class="payment__details">
											<div class="payment-details__item payment-details__item-1">
												<div class="payment-details__credit-card">
													<div id="creditCardInfo" class="form-horizontal form-credit-card js-credit-cart-info">
														<div class="payment__registered-card-toggle--saved"><a href="#" class="payment__registered-card-title payment__registered-card-title--registered js-registered-card-pay is-hidden">Kayıtlı Kart ile Öde</a>
														</div>
														<div class="form-group">
															<label class="form-credit-card__label form-credit-card__label--number" for="CreditCardNumber">Kart Numarası</label>
															<div class="form-credit-card__number">
																<div class="js-credit-card-output form-credit-card__number-output"></div>
																<input autocomplete="off" class="form-control js-only-number js-credit-card-number form-control--no-icon" id="CreditCardNumber" maxlength="16" name="CreditCardNumber" pattern="[0-9]*" placeholder="" type="text" value=""> <span class="field-validation-valid" data-valmsg-for="CreditCardNumber" data-valmsg-replace="true"></span>
															</div>
														</div>
														<div class="form-group">
															<label class="form-credit-card__label" for="ExpMonth">Son Kullanma Tarihi</label>
															<div class="form-credit-card__select">
																<select class="form-control form-credit-card__exp-month form-control--no-icon" id="ExpMonth" name="ExpMonth">
																	<option selected="selected" value="">Ay</option>
																	<option value="01">01</option>
																	<option value="02">02</option>
																	<option value="03">03</option>
																	<option value="04">04</option>
																	<option value="05">05</option>
																	<option value="06">06</option>
																	<option value="07">07</option>
																	<option value="08">08</option>
																	<option value="09">09</option>
																	<option value="10">10</option>
																	<option value="11">11</option>
																	<option value="12">12</option>
																</select> <span class="field-validation-valid" data-valmsg-for="ExpMonth" data-valmsg-replace="true"></span>
															</div>
															<div class="form-credit-card__select">
																<select class="form-control form-credit-card__exp-year form-control--no-icon" id="ExpYear" name="ExpYear">
																	<option selected="selected" value="">Yıl</option>
																	<option value="20">20</option>
																	<option value="21">21</option>
																	<option value="22">22</option>
																	<option value="23">23</option>
																	<option value="24">24</option>
																	<option value="25">25</option>
																	<option value="26">26</option>
																	<option value="27">27</option>
																	<option value="28">28</option>
																	<option value="29">29</option>
																	<option value="30">30</option>
																	<option value="31">31</option>
																	<option value="32">32</option>
																</select> <span class="field-validation-valid" data-valmsg-for="ExpYear" data-valmsg-replace="true"></span>
															</div>
														</div>
														<div class="form-group">
															<label for="Cvv" class="form-credit-card__label label_cvv">CVV/CVC2 <span class="icon-question what-is-cvv-icon" data-toggle="tooltip">
									<img class="what-is-cvv-icon__item" src="//cdn03.ciceksepeti.com/Content/Assets/images/CVV1.png">
									<img class="what-is-cvv-icon__item" src="//cdn03.ciceksepeti.com/Content/Assets/images/cvv.png">
								</span>
															</label>
															<div class="form-credit-card__cvc">
																<input class="form-control js-only-number form-control--no-icon" id="Cvv" maxlength="3" name="Cvv" pattern="[0-9]*" placeholder="" type="text" value=""> <span class="field-validation-valid" data-valmsg-for="Cvv" data-valmsg-replace="true"></span>
															</div>
														</div>
													</div>
												</div>
												<div class="payment-details__registered-card"> <span class="icon icon-card"></span>
													<p>Ödemeniz <span></span> numaralı kartınızdan tahsil edilecektir.</p>
												</div>
											</div>
											
										</div>
										<div class="js-subscription-card-message payment-details__subscription-message hide"> <span class="icon-warning"></span>
										</div>
										<div class="preliminary-info__confirmation">
											<input type="checkbox" id="IsCheckedContract" name="IsCheckedContract" value="true">
											<label for="IsCheckedContract" class="black-checkbox js-isCheckedContract">
												<p>Ön Bilgilendirme Formu <a href="javascript:;" class="preliminary-info__confirmation-link type js-pre-notification">(1)</a> ve Mesafeli Satış Sözleşmesini <a href="javascript:;" class="preliminary-info__confirmation-link type js-distance-sales">(2)</a> okudum ve kabul ediyorum.</p>
											</label> <span class="field-validation-valid" data-valmsg-for="IsCheckedContract" data-valmsg-replace="true"></span>
										</div>
										<div class="payment__button-wrapper ">
											<button name="nextstep" class="payment__button js-confirm-basket btn btn-lg btn-primary" type="button">Ödeme Yap</button>
										</div>
									</div>
									<div class="payment-details__right ">
										<div class="js-installment-container-all js-installment-container"></div>
										<div class="hidden">
											<!-- Required parameters for finding installments -->
											<div class="js-installment-parameters" data-total-price="74,99" data-product-group-ids="1" data-axproduct-group-ids="1" data-product-ids="1166" data-branch-ids="1500004443" data-extra-product-ids=""></div>
										</div>
										<div class="js-payment-details-right-before"></div>
										<div class="total-price js-total-price" id="total-price">
											<div class="total-price__row">Toplam <span class="total-price__amount">74<span>,</span>99 TL</span>
											</div>
										</div>
										<div class="total-price total-price-ab" id="total-price-ab"></div>
										<div class="payment__button-wrapper payment__button-wrapper--responsive">
											<button name="nextstep" class="payment__button js-confirm-basket btn btn-lg btn-primary" type="button">Ödeme Yap</button>
										</div>
									</div>
									<div class="clearfix"></div>
									<div class="hidden"> <span class="js-order-price-stable">74</span>
										<span class="js-order-price-decimal-stable">99</span>
									</div> <span class="field-validation-valid" data-valmsg-for="IsCheckedContract" data-valmsg-replace="true"></span>
								</div>
								<div class="hidden js-installment-ab">
									<div class="installment-details mock-installment">
										<table class="installment-table">
											<thead>
												<tr class="installment-table__row">
													<th class="installment-table__cell">Taksit Sayısı</th>
													<th class="installment-table__cell">Aylık Ödeme</th>
													<th class="installment-table__cell">Toplam</th>
												</tr>
											</thead>
											<tbody>
												<tr class="installment-table__row">
													<td class="installment-table__cell">
														<input class="" type="radio" name="InstallmentId" id="41" value="41" disabled="">
														<label for="41" class="white-radio">Tek Çekim</label>
													</td>
													<td class="installment-table__cell">74,99 TL</td>
													<td class="installment-table__cell">74,99 TL</td>
												</tr>
												<tr class="installment-table__row">
													<td class="installment-table__cell">
														<input class="" type="radio" name="InstallmentId" id="42" value="42" disabled="">
														<label for="42" class="white-radio">2 Taksit</label>
													</td>
													<td class="installment-table__cell">41,24 TL</td>
													<td class="installment-table__cell">82,49 TL</td>
												</tr>
												<tr class="installment-table__row">
													<td class="installment-table__cell">
														<input class="" type="radio" name="InstallmentId" id="43" value="43" disabled="">
														<label for="43" class="white-radio">4 Taksit</label>
													</td>
													<td class="installment-table__cell">21,56 TL</td>
													<td class="installment-table__cell">86,24 TL</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<input id="LinkEcId" name="LinkEcId" type="hidden" value="">
								<input id="LinkEoId" name="LinkEoId" type="hidden" value="">
								<input id="LinkPch" name="LinkPch" type="hidden" value="">
								<input data-val="true" data-val-required="The HasCustomerCard field is required." id="HasCustomerCard" name="HasCustomerCard" type="hidden" value="False">
								<input type="hidden" class="js-page-payment-fingerprint-id hidden" name="fpVisitorId" value="fU614zFPmuMWXJS7FpTQ">
								<input name="__RequestVerificationToken" type="hidden" value="CfDJ8Gl4nXrV0qNFqSI9-b9pRtiBWvVQa-N2ooYyvKeJlom6YXUbohIBCuCW4KfKKjd8MACa2pc4Qpn9tTcUvFiNu08Nq6NmAuXxwLaLnDQQgh2qeLf7mJRu4IL-md-5Fq_6g9wkBaeY-E2_8fdqtt5wOGg">
							</form>
						</div>
						<div class="order-right">
							<div class="js-order-summary">
								<div class="order-summary">
									<h3 class="order-summary__heading">Sipariş Özeti</h3>
									<h3 class="order-summary__price-table-heading">Ürün</h3>
									<div class="price-table js-main-product-summary" data-main-product-id="d723a6cf-403a-411b-a413-2dacc477a681">
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
						</div>
						</div>


					</section>

					<section v-if="step == 4">

						     <div class = "section wrapper checkout-wrap checkout-cart">
               					<svg id="checkmark-svg" class="runanimation" data-name="Layer 1" viewBox="0 0 193.3 193.3"><circle class="cls-1 circle" cx="96.65" cy="96.65" r="94.15"/><polyline class="cls-1 checkmark" points="46.9 101.4 76.9 131.4 146.4 61.9"/></svg>  
                   				
                    				<div class="pTxt"> Siparişiniz Alındı </div>
            					
						     </div>

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

<style>
.cls-1 {
  fill: none;
  stroke: #231f20;
  stroke-miterlimit: 10;
  stroke-width: 5px;
}

svg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 150px;
  height: 150px;
  display: block;
}
svg .cls-1 {
  stroke: green;
}

.circle {
  stroke-dasharray: 700;
  stroke-dashoffset: 700;
}

.checkmark {
  stroke-dasharray: 150;
  stroke-dashoffset: 150;
}

.runanimation .circle {
  -webkit-animation: 2.5s circleDraw forwards;
          animation: 2.5s circleDraw forwards;
}
.runanimation .checkmark {
  -webkit-animation: 0.75s checkmarkDraw forwards;
          animation: 0.75s checkmarkDraw forwards;
  -webkit-animation-delay: 1s;
          animation-delay: 1s;
}

@-webkit-keyframes circleDraw {
  from {
    stroke-dashoffset: 700;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes circleDraw {
  from {
    stroke-dashoffset: 700;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@-webkit-keyframes checkmarkDraw {
  from {
    stroke-dashoffset: 150;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes checkmarkDraw {
  from {
    stroke-dashoffset: 150;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@import url('https://fonts.googleapis.com/css?family=Open+Sans');


.pTxt{
	  text-align:center;
  margin-top: 150px;
	position: relative;
	top:35px;
  font-size:40px;
  color: green;
}


.checkmark-circle {
  width: 150px;
  height: 150px;
  position: relative;
  display: inline-block;
  vertical-align: top;
}
.checkmark-circle .background {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #2EB150;
  position: absolute;
}
.checkmark-circle .checkmark {
  border-radius: 5px;
}
.checkmark-circle .checkmark.draw:after {
  -webkit-animation-delay: 100ms;
  -moz-animation-delay: 100ms;
  animation-delay: 100ms;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease;
  -moz-animation-timing-function: ease;
  animation-timing-function: ease;
  -webkit-animation-name: checkmark;
  -moz-animation-name: checkmark;
  animation-name: checkmark;
  -webkit-transform: scaleX(-1) rotate(135deg);
  -moz-transform: scaleX(-1) rotate(135deg);
  -ms-transform: scaleX(-1) rotate(135deg);
  -o-transform: scaleX(-1) rotate(135deg);
  transform: scaleX(-1) rotate(135deg);
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.checkmark-circle .checkmark:after {
  opacity: 1;
  height: 75px;
  width: 37.5px;
  -webkit-transform-origin: left top;
  -moz-transform-origin: left top;
  -ms-transform-origin: left top;
  -o-transform-origin: left top;
  transform-origin: left top;
  border-right: 15px solid white;
  border-top: 15px solid white;
  border-radius: 2.5px !important;
  content: '';
  left: 25px;
  top: 75px;
  position: absolute;
}

@-webkit-keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: 37.5px;
    opacity: 1;
  }
  40% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
  100% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
}
@-moz-keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: 37.5px;
    opacity: 1;
  }
  40% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
  100% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
}
@keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: 37.5px;
    opacity: 1;
  }
  40% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
  100% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
}



</style>