<template>
    <div>
        <header><ust/></header>
        <a href="#"><img alt="Yukarı Çık" class="yukarikaydir" src="../img/yc.png" style="display: block;"></a>

        <main class="category js-category-detail category-page">
	<div class="container">
		<div class="js-category-container">
			<div class=" responsive-filter js-responsive-filtering "> <span class="responsive-filter__close-icon js-close-responsive-filter icon-close-line"></span>
				<a class="responsive-filter__clear-link js-clear-filter-button" href="/tum-urunler">Temizle</a>
				<h3 class="responsive-filter__title">
        Filtrele
    </h3>
				<div class="filter navbar-nav js-filter">
					<div class="filter__inner">
						<div class="dropdown filter__item js-filter-item" @click='drop' v-bind:class="{'open':open}"> <a class="dropdown-toggle btn filter__button is-active" data-toggle="dropdown">
                        	Kategori
                        	<span class="filter__icon-right-arrow icon-down-arrow js-add-caret"></span>
                    		</a>
							<ul class="dropdown-menu filter__dropdown">
								<li class="filter__dropdown-list checked">
									<input id="filter2000266_2007099" name="categoryRadio" data-val="true" data-id="df" data-value="2007099" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="radio" checked="" data-url="tum-urunler" data-ajaxfilter="" value="tum-urunler">
									<label class="filter__dropdown-label" for="filter2000266_2007099">Çiçek</label>
									<!--True-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000266_2007100" name="categoryRadio" data-val="true" data-id="df" data-value="2007100" data-hide="True" class="filter__dropdown-checkbox js-apply-filter" type="radio" data-url="bonnyfood" data-ajaxfilter="?df=2007100" value="bonnyfood">
									<label class="filter__dropdown-label" for="filter2000266_2007100">Yenilebilir Çiçek</label>
									<!--True-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000266_2007101" name="categoryRadio" data-val="true" data-id="df" data-value="2007101" data-hide="True" class="filter__dropdown-checkbox js-apply-filter" type="radio" data-url="hediye" data-ajaxfilter="?df=2007101" value="hediye">
									<label class="filter__dropdown-label" for="filter2000266_2007101">Hediye</label>
									<!--True-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop2' v-bind:class="{'open':open2}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
                        	Ürün Grubu
                        	<span class="filter__icon-right-arrow icon-down-arrow js-add-caret"></span>
                   			 </a>
							<ul class="dropdown-menu filter__dropdown">
								<li class="filter__dropdown-input-wrapper" style="display: none;"> <span class="filter__dropdown-input-icon icon-search"></span>
									<input type="text" class="form-control filter__dropdown-input js-category-filter-input js-only-alphanumeric-characters" placeholder="Ara">
									<div class="filter__dropdown-input__remove-button download"> <span class="icon-close filter__dropdown-input__remove-button-icon"></span>
									</div>
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000308_2007147" data-val="true" data-id="df" data-value="2007147" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2007147" data-ajaxfilter="?df=2007099,2007147" value="tum-urunler?df=2007099,2007147">
									<label class="filter__dropdown-label" for="filter2000308_2007147">Ev Yaşam</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000308_2009390" data-val="true" data-id="df" data-value="2009390" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2009390" data-ajaxfilter="?df=2007099,2009390" value="tum-urunler?df=2007099,2009390">
									<label class="filter__dropdown-label" for="filter2000308_2009390">Takı-Saat-Aksesuar</label>
									<!--False-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop3' v-bind:class="{'open':open3}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
                        	Ürün Çeşitleri
                        	<span class="filter__icon-right-arrow icon-down-arrow js-add-caret"></span>
                    		</a>
							<ul class="dropdown-menu filter__dropdown">
								<li class="filter__dropdown-input-wrapper" style="display: block;"> <span class="filter__dropdown-input-icon icon-search"></span>
									<input type="text" class="form-control filter__dropdown-input js-category-filter-input js-only-alphanumeric-characters" placeholder="Ara">
									<div class="filter__dropdown-input__remove-button download"> <span class="icon-close filter__dropdown-input__remove-button-icon"></span>
									</div>
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007110" data-val="true" data-id="df" data-value="2007110" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="bonsai" data-ajaxfilter="?df=2007099,2007110" value="bonsai">
									<label class="filter__dropdown-label" for="filter2000267_2007110">Bonsai</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2069055" data-val="true" data-id="df" data-value="2069055" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2069055" data-ajaxfilter="?df=2007099,2069055" value="tum-urunler?df=2007099,2069055">
									<label class="filter__dropdown-label" for="filter2000267_2069055">Kalanchoe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2069054" data-val="true" data-id="df" data-value="2069054" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2069054" data-ajaxfilter="?df=2007099,2069054" value="tum-urunler?df=2007099,2069054">
									<label class="filter__dropdown-label" for="filter2000267_2069054">Tillendsia</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2069053" data-val="true" data-id="df" data-value="2069053" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2069053" data-ajaxfilter="?df=2007099,2069053" value="tum-urunler?df=2007099,2069053">
									<label class="filter__dropdown-label" for="filter2000267_2069053">Chamadora</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2069052" data-val="true" data-id="df" data-value="2069052" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2069052" data-ajaxfilter="?df=2007099,2069052" value="tum-urunler?df=2007099,2069052">
									<label class="filter__dropdown-label" for="filter2000267_2069052">Krizantem</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2069056" data-val="true" data-id="df" data-value="2069056" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2069056" data-ajaxfilter="?df=2007099,2069056" value="tum-urunler?df=2007099,2069056">
									<label class="filter__dropdown-label" for="filter2000267_2069056">Nandina</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007109" data-val="true" data-id="df" data-value="2007109" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="cicek-buketleri" data-ajaxfilter="?df=2007099,2007109" value="cicek-buketleri">
									<label class="filter__dropdown-label" for="filter2000267_2007109">Buket Çiçek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007105" data-val="true" data-id="df" data-value="2007105" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="celenk" data-ajaxfilter="?df=2007099,2007105" value="celenk">
									<label class="filter__dropdown-label" for="filter2000267_2007105">Cenaze Çelenkleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007277" data-val="true" data-id="df" data-value="2007277" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2007277" data-ajaxfilter="?df=2007099,2007277" value="tum-urunler?df=2007099,2007277">
									<label class="filter__dropdown-label" for="filter2000267_2007277">Dekoratif Çiçekler</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007106" data-val="true" data-id="df" data-value="2007106" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="dugun-celenkleri" data-ajaxfilter="?df=2007099,2007106" value="dugun-celenkleri">
									<label class="filter__dropdown-label" for="filter2000267_2007106">Düğün Çelenkleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007120" data-val="true" data-id="df" data-value="2007120" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2007120" data-ajaxfilter="?df=2007099,2007120" value="tum-urunler?df=2007099,2007120">
									<label class="filter__dropdown-label" for="filter2000267_2007120">Ferforje</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007122" data-val="true" data-id="df" data-value="2007122" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="frezyalar" data-ajaxfilter="?df=2007099,2007122" value="frezyalar">
									<label class="filter__dropdown-label" for="filter2000267_2007122">Frezya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007103" data-val="true" data-id="df" data-value="2007103" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2007103" data-ajaxfilter="?df=2007099,2007103" value="tum-urunler?df=2007099,2007103">
									<label class="filter__dropdown-label" for="filter2000267_2007103">Güller</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007112" data-val="true" data-id="df" data-value="2007112" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="kaktus" data-ajaxfilter="?df=2007099,2007112" value="kaktus">
									<label class="filter__dropdown-label" for="filter2000267_2007112">Kaktüs</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007117" data-val="true" data-id="df" data-value="2007117" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="cicek-aranjmanlari" data-ajaxfilter="?df=2007117,2007099" value="cicek-aranjmanlari">
									<label class="filter__dropdown-label" for="filter2000267_2007117">Karışık Aranjmanlar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013201" data-val="true" data-id="df" data-value="2013201" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2013201" data-ajaxfilter="?df=2007099,2013201" value="tum-urunler?df=2007099,2013201">
									<label class="filter__dropdown-label" for="filter2000267_2013201">Ev Yaşam Hediye Setleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007107" data-val="true" data-id="df" data-value="2007107" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="lilyum-zambak" data-ajaxfilter="?df=2007099,2007107" value="lilyum-zambak">
									<label class="filter__dropdown-label" for="filter2000267_2007107">Lilyum</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007216" data-val="true" data-id="df" data-value="2007216" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2007216" data-ajaxfilter="?df=2007099,2007216" value="tum-urunler?df=2007099,2007216">
									<label class="filter__dropdown-label" for="filter2000267_2007216">Minyatür Bahçeler</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007102" data-val="true" data-id="df" data-value="2007102" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="orkide" data-ajaxfilter="?df=2007102,2007099" value="orkide">
									<label class="filter__dropdown-label" for="filter2000267_2007102">Orkide</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2010649" data-val="true" data-id="df" data-value="2010649" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2010649" data-ajaxfilter="?df=2007099,2010649" value="tum-urunler?df=2007099,2010649">
									<label class="filter__dropdown-label" for="filter2000267_2010649">Astomerya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2010689" data-val="true" data-id="df" data-value="2010689" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2010689" data-ajaxfilter="?df=2007099,2010689" value="tum-urunler?df=2007099,2010689">
									<label class="filter__dropdown-label" for="filter2000267_2010689">Şakayık</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007104" data-val="true" data-id="df" data-value="2007104" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="papatya-gerbera" data-ajaxfilter="?df=2007099,2007104" value="papatya-gerbera">
									<label class="filter__dropdown-label" for="filter2000267_2007104">Papatya - Gerbera</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007108" data-val="true" data-id="df" data-value="2007108" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="saksi-cicekleri" data-ajaxfilter="?df=2007099,2007108" value="saksi-cicekleri">
									<label class="filter__dropdown-label" for="filter2000267_2007108">Saksı Çiçek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2008793" data-val="true" data-id="df" data-value="2008793" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="sukulentler" data-ajaxfilter="?df=2007099,2008793" value="sukulentler">
									<label class="filter__dropdown-label" for="filter2000267_2008793">Sukulent</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007314" data-val="true" data-id="df" data-value="2007314" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2007314" data-ajaxfilter="?df=2007099,2007314" value="tum-urunler?df=2007099,2007314">
									<label class="filter__dropdown-label" for="filter2000267_2007314">Takı</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007115" data-val="true" data-id="df" data-value="2007115" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="taraftarlara-cicek-urunleri" data-ajaxfilter="?df=2007099,2007115" value="taraftarlara-cicek-urunleri">
									<label class="filter__dropdown-label" for="filter2000267_2007115">Taraftar Çiçek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007111" data-val="true" data-id="df" data-value="2007111" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="teraryum" data-ajaxfilter="?df=2007099,2007111" value="teraryum">
									<label class="filter__dropdown-label" for="filter2000267_2007111">Teraryum</label>
									<!--False-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop4' v-bind:class="{'open':open4}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
                        	Ne İçin
                        	<span class="filter__icon-right-arrow icon-down-arrow js-add-caret"></span>
                    		</a>
							<ul class="dropdown-menu filter__dropdown">
								<li class="filter__dropdown-input-wrapper" style="display: block;"> <span class="filter__dropdown-input-icon icon-search"></span>
									<input type="text" class="form-control filter__dropdown-input js-category-filter-input js-only-alphanumeric-characters" placeholder="Ara">
									<div class="filter__dropdown-input__remove-button download"> <span class="icon-close filter__dropdown-input__remove-button-icon"></span>
									</div>
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006840" data-val="true" data-id="df" data-value="2006840" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="acilis-toren-cicekleri" data-ajaxfilter="?df=2007099,2006840" value="acilis-toren-cicekleri">
									<label class="filter__dropdown-label" for="filter2000254_2006840">Açılış-Tören</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006838" data-val="true" data-id="df" data-value="2006838" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="cenaze-cicekleri" data-ajaxfilter="?df=2007099,2006838" value="cenaze-cicekleri">
									<label class="filter__dropdown-label" for="filter2000254_2006838">Cenaze</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006821" data-val="true" data-id="df" data-value="2006821" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="dogum-gunu-cicekleri" data-ajaxfilter="?df=2007099,2006821" value="dogum-gunu-cicekleri">
									<label class="filter__dropdown-label" for="filter2000254_2006821">Doğum Günü</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2007193" data-val="true" data-id="df" data-value="2007193" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="gecmis-olsun-cicekleri" data-ajaxfilter="?df=2007099,2007193" value="gecmis-olsun-cicekleri">
									<label class="filter__dropdown-label" for="filter2000254_2007193">Geçmiş Olsun</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006828" data-val="true" data-id="df" data-value="2006828" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="icimden-geldi-cicek" data-ajaxfilter="?df=2007099,2006828" value="icimden-geldi-cicek">
									<label class="filter__dropdown-label" for="filter2000254_2006828">İçimden Geldi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2010275" data-val="true" data-id="df" data-value="2010275" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2010275" data-ajaxfilter="?df=2007099,2010275" value="tum-urunler?df=2007099,2010275">
									<label class="filter__dropdown-label" for="filter2000254_2010275">Okula Dönüş</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006818" data-val="true" data-id="df" data-value="2006818" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="ozur-cicekleri" data-ajaxfilter="?df=2007099,2006818" value="ozur-cicekleri">
									<label class="filter__dropdown-label" for="filter2000254_2006818">Özür Dilerim</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006827" data-val="true" data-id="df" data-value="2006827" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006827" data-ajaxfilter="?df=2007099,2006827" value="tum-urunler?df=2007099,2006827">
									<label class="filter__dropdown-label" for="filter2000254_2006827">Parti - Kutlama</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006816" data-val="true" data-id="df" data-value="2006816" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006816" data-ajaxfilter="?df=2007099,2006816" value="tum-urunler?df=2007099,2006816">
									<label class="filter__dropdown-label" for="filter2000254_2006816">Sevgili</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006839" data-val="true" data-id="df" data-value="2006839" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="soz-nisan-dugun-cicekleri" data-ajaxfilter="?df=2007099,2006839" value="soz-nisan-dugun-cicekleri">
									<label class="filter__dropdown-label" for="filter2000254_2006839">Söz-Nişan- Düğün</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006820" data-val="true" data-id="df" data-value="2006820" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006820" data-ajaxfilter="?df=2007099,2006820" value="tum-urunler?df=2007099,2006820">
									<label class="filter__dropdown-label" for="filter2000254_2006820">Tebrik</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006834" data-val="true" data-id="df" data-value="2006834" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006834" data-ajaxfilter="?df=2007099,2006834" value="tum-urunler?df=2007099,2006834">
									<label class="filter__dropdown-label" for="filter2000254_2006834">Teşekkür Ederim</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006826" data-val="true" data-id="df" data-value="2006826" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="yeni-bebek-cicekleri" data-ajaxfilter="?df=2007099,2006826" value="yeni-bebek-cicekleri">
									<label class="filter__dropdown-label" for="filter2000254_2006826">Yeni Bebek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006819" data-val="true" data-id="df" data-value="2006819" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="yeni-ise-cicek" data-ajaxfilter="?df=2007099,2006819" value="yeni-ise-cicek">
									<label class="filter__dropdown-label" for="filter2000254_2006819">Yeni İş/Terfi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006817" data-val="true" data-id="df" data-value="2006817" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="yildonumu-cicekleri" data-ajaxfilter="?df=2007099,2006817" value="yildonumu-cicekleri">
									<label class="filter__dropdown-label" for="filter2000254_2006817">Yıl Dönümü</label>
									<!--False-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop5' v-bind:class="{'open':open5}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
                        	Cinsiyet
                       	 	<span class="filter__icon-right-arrow icon-down-arrow js-add-caret"></span>
                    		</a>
							<ul class="dropdown-menu filter__dropdown">
								<li class="filter__dropdown-input-wrapper" style="display: none;"> <span class="filter__dropdown-input-icon icon-search"></span>
									<input type="text" class="form-control filter__dropdown-input js-category-filter-input js-only-alphanumeric-characters" placeholder="Ara">
									<div class="filter__dropdown-input__remove-button download"> <span class="icon-close filter__dropdown-input__remove-button-icon"></span>
									</div>
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2006847" data-val="true" data-id="df" data-value="2006847" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006847" data-ajaxfilter="?df=2007099,2006847" value="tum-urunler?df=2007099,2006847">
									<label class="filter__dropdown-label" for="filter2000256_2006847">Kadın</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2007326" data-val="true" data-id="df" data-value="2007326" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2007326" data-ajaxfilter="?df=2007099,2007326" value="tum-urunler?df=2007099,2007326">
									<label class="filter__dropdown-label" for="filter2000256_2007326">Unisex</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2006848" data-val="true" data-id="df" data-value="2006848" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006848" data-ajaxfilter="?df=2007099,2006848" value="tum-urunler?df=2007099,2006848">
									<label class="filter__dropdown-label" for="filter2000256_2006848">Erkek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2010781" data-val="true" data-id="df" data-value="2010781" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2010781" data-ajaxfilter="?df=2007099,2010781" value="tum-urunler?df=2007099,2010781">
									<label class="filter__dropdown-label" for="filter2000256_2010781">Erkek Bebek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2010782" data-val="true" data-id="df" data-value="2010782" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2010782" data-ajaxfilter="?df=2007099,2010782" value="tum-urunler?df=2007099,2010782">
									<label class="filter__dropdown-label" for="filter2000256_2010782">Kız Bebek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2010783" data-val="true" data-id="df" data-value="2010783" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2010783" data-ajaxfilter="?df=2007099,2010783" value="tum-urunler?df=2007099,2010783">
									<label class="filter__dropdown-label" for="filter2000256_2010783">Erkek Çocuk</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2010784" data-val="true" data-id="df" data-value="2010784" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2010784" data-ajaxfilter="?df=2007099,2010784" value="tum-urunler?df=2007099,2010784">
									<label class="filter__dropdown-label" for="filter2000256_2010784">Kız Çocuk</label>
									<!--False-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop6' v-bind:class="{'open':open6}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown" style="display: none;">
                        	Kime
                        	<span class="filter__icon-right-arrow icon-down-arrow js-add-caret"></span>
                    		</a>
							<ul class="dropdown-menu filter__dropdown">
								<li class="filter__dropdown-input-wrapper" style="display: block;"> <span class="filter__dropdown-input-icon icon-search"></span>
									<input type="text" class="form-control filter__dropdown-input js-category-filter-input js-only-alphanumeric-characters" placeholder="Ara">
									<div class="filter__dropdown-input__remove-button download"> <span class="icon-close filter__dropdown-input__remove-button-icon"></span>
									</div>
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006799" data-val="true" data-id="df" data-value="2006799" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="anneye-cicek" data-ajaxfilter="?df=2007099,2006799" value="anneye-cicek">
									<label class="filter__dropdown-label" for="filter2000253_2006799">Anneye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006798" data-val="true" data-id="df" data-value="2006798" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="arkadasa-cicek" data-ajaxfilter="?df=2007099,2006798" value="arkadasa-cicek">
									<label class="filter__dropdown-label" for="filter2000253_2006798">Arkadaşa</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006810" data-val="true" data-id="df" data-value="2006810" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006810" data-ajaxfilter="?df=2007099,2006810" value="tum-urunler?df=2007099,2006810">
									<label class="filter__dropdown-label" for="filter2000253_2006810">Avukata</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006800" data-val="true" data-id="df" data-value="2006800" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="babaya-cicek" data-ajaxfilter="?df=2007099,2006800" value="babaya-cicek">
									<label class="filter__dropdown-label" for="filter2000253_2006800">Babaya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006802" data-val="true" data-id="df" data-value="2006802" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006802" data-ajaxfilter="?df=2007099,2006802" value="tum-urunler?df=2007099,2006802">
									<label class="filter__dropdown-label" for="filter2000253_2006802">Bebeğe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006803" data-val="true" data-id="df" data-value="2006803" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006803" data-ajaxfilter="?df=2007099,2006803" value="tum-urunler?df=2007099,2006803">
									<label class="filter__dropdown-label" for="filter2000253_2006803">Büyükanneye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006804" data-val="true" data-id="df" data-value="2006804" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006804" data-ajaxfilter="?df=2007099,2006804" value="tum-urunler?df=2007099,2006804">
									<label class="filter__dropdown-label" for="filter2000253_2006804">Büyükbabaya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006801" data-val="true" data-id="df" data-value="2006801" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006801" data-ajaxfilter="?df=2007099,2006801" value="tum-urunler?df=2007099,2006801">
									<label class="filter__dropdown-label" for="filter2000253_2006801">Çocuğa</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006815" data-val="true" data-id="df" data-value="2006815" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006815" data-ajaxfilter="?df=2007099,2006815" value="tum-urunler?df=2007099,2006815">
									<label class="filter__dropdown-label" for="filter2000253_2006815">Dayı-Amcaya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006812" data-val="true" data-id="df" data-value="2006812" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006812" data-ajaxfilter="?df=2007099,2006812" value="tum-urunler?df=2007099,2006812">
									<label class="filter__dropdown-label" for="filter2000253_2006812">Diş Hekimine</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006809" data-val="true" data-id="df" data-value="2006809" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006809" data-ajaxfilter="?df=2007099,2006809" value="tum-urunler?df=2007099,2006809">
									<label class="filter__dropdown-label" for="filter2000253_2006809">Doktora</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006805" data-val="true" data-id="df" data-value="2006805" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006805" data-ajaxfilter="?df=2007099,2006805" value="tum-urunler?df=2007099,2006805">
									<label class="filter__dropdown-label" for="filter2000253_2006805">Eşe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006808" data-val="true" data-id="df" data-value="2006808" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006808" data-ajaxfilter="?df=2007099,2006808" value="tum-urunler?df=2007099,2006808">
									<label class="filter__dropdown-label" for="filter2000253_2006808">Hemşireye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006806" data-val="true" data-id="df" data-value="2006806" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006806" data-ajaxfilter="?df=2007099,2006806" value="tum-urunler?df=2007099,2006806">
									<label class="filter__dropdown-label" for="filter2000253_2006806">İş Arkadaşına</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006797" data-val="true" data-id="df" data-value="2006797" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006797" data-ajaxfilter="?df=2007099,2006797" value="tum-urunler?df=2007099,2006797">
									<label class="filter__dropdown-label" for="filter2000253_2006797">Kardeşe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2007192" data-val="true" data-id="df" data-value="2007192" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2007192" data-ajaxfilter="?df=2007099,2007192" value="tum-urunler?df=2007099,2007192">
									<label class="filter__dropdown-label" for="filter2000253_2007192">Kendime</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006813" data-val="true" data-id="df" data-value="2006813" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006813" data-ajaxfilter="?df=2007099,2006813" value="tum-urunler?df=2007099,2006813">
									<label class="filter__dropdown-label" for="filter2000253_2006813">Mühendise</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006811" data-val="true" data-id="df" data-value="2006811" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006811" data-ajaxfilter="?df=2007099,2006811" value="tum-urunler?df=2007099,2006811">
									<label class="filter__dropdown-label" for="filter2000253_2006811">Öğretmene</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2007316" data-val="true" data-id="df" data-value="2007316" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2007316" data-ajaxfilter="?df=2007099,2007316" value="tum-urunler?df=2007099,2007316">
									<label class="filter__dropdown-label" for="filter2000253_2007316">Polis</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006796" data-val="true" data-id="df" data-value="2006796" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="sevgiliye-cicek" data-ajaxfilter="?df=2007099,2006796" value="sevgiliye-cicek">
									<label class="filter__dropdown-label" for="filter2000253_2006796">Sevgiliye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006814" data-val="true" data-id="df" data-value="2006814" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006814" data-ajaxfilter="?df=2007099,2006814" value="tum-urunler?df=2007099,2006814">
									<label class="filter__dropdown-label" for="filter2000253_2006814">Teyze-Halaya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006807" data-val="true" data-id="df" data-value="2006807" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2006807" data-ajaxfilter="?df=2007099,2006807" value="tum-urunler?df=2007099,2006807">
									<label class="filter__dropdown-label" for="filter2000253_2006807">Yöneticiye</label>
									<!--False-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop7' v-bind:class="{'open':open7}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
                        	Renk
                        	<span class="filter__icon-right-arrow icon-down-arrow js-add-caret"></span>
                   			 </a>
							<ul class="dropdown-menu filter__dropdown">
								<li class="filter__dropdown-input-wrapper" style="display: block;"> <span class="filter__dropdown-input-icon icon-search"></span>
									<input type="text" class="form-control filter__dropdown-input js-category-filter-input js-only-alphanumeric-characters" placeholder="Ara">
									<div class="filter__dropdown-input__remove-button download"> <span class="icon-close filter__dropdown-input__remove-button-icon"></span>
									</div>
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_151" data-val="true" data-id="df" data-value="151" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,151" data-ajaxfilter="?df=2007099,151" value="tum-urunler?df=2007099,151">
									<label class="filter__dropdown-label" for="filter10_151">Beyaz</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_2010794" data-val="true" data-id="df" data-value="2010794" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2010794" data-ajaxfilter="?df=2007099,2010794" value="tum-urunler?df=2007099,2010794">
									<label class="filter__dropdown-label" for="filter10_2010794">Bej</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_155" data-val="true" data-id="df" data-value="155" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,155" data-ajaxfilter="?df=2007099,155" value="tum-urunler?df=2007099,155">
									<label class="filter__dropdown-label" for="filter10_155">Gri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_157" data-val="true" data-id="df" data-value="157" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,157" data-ajaxfilter="?df=2007099,157" value="tum-urunler?df=2007099,157">
									<label class="filter__dropdown-label" for="filter10_157">Kahverengi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_158" data-val="true" data-id="df" data-value="158" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,158" data-ajaxfilter="?df=2007099,158" value="tum-urunler?df=2007099,158">
									<label class="filter__dropdown-label" for="filter10_158">Kırmızı</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_166" data-val="true" data-id="df" data-value="166" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,166" data-ajaxfilter="?df=2007099,166" value="tum-urunler?df=2007099,166">
									<label class="filter__dropdown-label" for="filter10_166">Mavi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_2007325" data-val="true" data-id="df" data-value="2007325" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,2007325" data-ajaxfilter="?df=2007099,2007325" value="tum-urunler?df=2007099,2007325">
									<label class="filter__dropdown-label" for="filter10_2007325">Mix</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_167" data-val="true" data-id="df" data-value="167" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,167" data-ajaxfilter="?df=2007099,167" value="tum-urunler?df=2007099,167">
									<label class="filter__dropdown-label" for="filter10_167">Mor</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_168" data-val="true" data-id="df" data-value="168" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,168" data-ajaxfilter="?df=2007099,168" value="tum-urunler?df=2007099,168">
									<label class="filter__dropdown-label" for="filter10_168">Pembe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_171" data-val="true" data-id="df" data-value="171" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,171" data-ajaxfilter="?df=2007099,171" value="tum-urunler?df=2007099,171">
									<label class="filter__dropdown-label" for="filter10_171">Sarı</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_172" data-val="true" data-id="df" data-value="172" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,172" data-ajaxfilter="?df=2007099,172" value="tum-urunler?df=2007099,172">
									<label class="filter__dropdown-label" for="filter10_172">Siyah</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_176" data-val="true" data-id="df" data-value="176" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,176" data-ajaxfilter="?df=2007099,176" value="tum-urunler?df=2007099,176">
									<label class="filter__dropdown-label" for="filter10_176">Turuncu</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_178" data-val="true" data-id="df" data-value="178" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007099,178" data-ajaxfilter="?df=2007099,178" value="tum-urunler?df=2007099,178">
									<label class="filter__dropdown-label" for="filter10_178">Yeşil</label>
									<!--False-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop8' v-bind:class="{'open':open8}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
                        	Fiyat
                        	<span class="filter__icon-right-arrow icon-down-arrow js-add-caret"></span>
                   			 </a>
							<ul class="dropdown-menu filter__dropdown">
								<li class="filter__dropdown-input-wrapper" style="display: block;"> <span class="filter__dropdown-input-icon icon-search"></span>
									<input type="text" class="form-control filter__dropdown-input js-category-filter-input js-only-alphanumeric-characters" placeholder="Ara">
									<div class="filter__dropdown-input__remove-button download"> <span class="icon-close filter__dropdown-input__remove-button-icon"></span>
									</div>
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_1" data-val="true" data-id="priceId" data-value="1" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="cicek?priceId=1" data-ajaxfilter="?priceId=1&amp;df=2007099" value="cicek?priceId=1">
									<label class="filter__dropdown-label" for="filter23_1">0-50 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_2" data-val="true" data-id="priceId" data-value="2" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="cicek?priceId=2" data-ajaxfilter="?priceId=2&amp;df=2007099" value="cicek?priceId=2">
									<label class="filter__dropdown-label" for="filter23_2">50-100 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_3" data-val="true" data-id="priceId" data-value="3" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="cicek?priceId=3" data-ajaxfilter="?priceId=3&amp;df=2007099" value="cicek?priceId=3">
									<label class="filter__dropdown-label" for="filter23_3">100-150 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_4" data-val="true" data-id="priceId" data-value="4" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="cicek?priceId=4" data-ajaxfilter="?priceId=4&amp;df=2007099" value="cicek?priceId=4">
									<label class="filter__dropdown-label" for="filter23_4">150-200 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_5" data-val="true" data-id="priceId" data-value="5" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="cicek?priceId=5" data-ajaxfilter="?priceId=5&amp;df=2007099" value="cicek?priceId=5">
									<label class="filter__dropdown-label" for="filter23_5">200-250 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_6" data-val="true" data-id="priceId" data-value="6" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="cicek?priceId=6" data-ajaxfilter="?priceId=6&amp;df=2007099" value="cicek?priceId=6">
									<label class="filter__dropdown-label" for="filter23_6">250-500 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_7" data-val="true" data-id="priceId" data-value="7" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="cicek?priceId=7" data-ajaxfilter="?priceId=7&amp;df=2007099" value="cicek?priceId=7">
									<label class="filter__dropdown-label" for="filter23_7">500-1000 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_8" data-val="true" data-id="priceId" data-value="8" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="cicek?priceId=8" data-ajaxfilter="?priceId=8&amp;df=2007099" value="cicek?priceId=8">
									<label class="filter__dropdown-label" for="filter23_8">1000- TL</label>
									<!--False-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop9' v-bind:class="{'open':open9}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
                   			 Sıralama
                    		<span class="filter__icon-right-sort icon-sort  js-add-caret"></span>
                			</a>
							<ul class="dropdown-menu filter__dropdown">
								<li class="filter__dropdown-list">
									<input class="filter__dropdown-checkbox js-sort-products" type="radio" checked="" data-url="cicek?orderby=1" data-ajaxfilter="?df=2007099&amp;orderby=1" data-id="orderby" data-value="1" id="1" name="sortRadio">
									<label class="filter__dropdown-label" for="1">Çok Satılana Göre</label>
								</li>
								<li class="filter__dropdown-list">
									<input class="filter__dropdown-checkbox js-sort-products" type="radio" data-url="cicek?orderby=2" data-ajaxfilter="?df=2007099&amp;orderby=2" data-id="orderby" data-value="2" id="2" name="sortRadio">
									<label class="filter__dropdown-label" for="2">Pahalıdan Ucuza</label>
								</li>
								<li class="filter__dropdown-list">
									<input class="filter__dropdown-checkbox js-sort-products" type="radio" data-url="cicek?orderby=3" data-ajaxfilter="?df=2007099&amp;orderby=3" data-id="orderby" data-value="3" id="3" name="sortRadio">
									<label class="filter__dropdown-label" for="3">Ucuzdan Pahalıya</label>
								</li>
							</ul>
							</div>
						<div class="filter__item  filter__item--checkbox">
							<input class="filter__checkbox js-apply-filter" id="check_2000271" data-ajaxfilter="?df=2007218,2007099" data-value="2007218" data-id="df" data-url="butik-cicekciler" type="checkbox">
							<label class="filter__label" for="check_2000271">Tasarım Çiçekleri</label>
						</div>
						<div class="filter__item  filter__item--checkbox">
							<input class="filter__checkbox js-apply-filter" id="check_2000272" data-ajaxfilter="?df=2007217,2007099" data-value="2007217" data-id="df" data-url="kisiye-ozel-cicekler" type="checkbox">
							<label class="filter__label" for="check_2000272">Kişiye Özel</label>
						</div>
					</div>
					</div>
				<div class="sticky-filter-button js-sticky-filter-button is-sticky">
					<button class="btn btn-lg btn-success js-apply-filter-button">Sonuçları Göster</button>
				</div>
			</div>
			<ul class="category-order js-tag-list is-visible">
				<li class="category-order__filter filter__selected js-tags-area"> <a class="filter__selected-tag js-filter-tag" href="javascript:void(0)" data-url="tum-urunler" data-ajaxfilter="">
                    Çiçek
                    <span class="icon-close filter__selected-tag-icon" data-url="tum-urunler" data-ajaxfilter=""></span>
                </a>
				</li>
				<li class="category-order__filter js-clean-filter"> <span class="is-hidden filter__ellipsis">...</span>
					<a class="filter__clean-btn" href="/tum-urunler">Temizle</a>
				</li>
				<li class="category-order__text">11943 ürün bulundu.</li>
			</ul>
			<div class="featured">
				<div class="main-banner__row">
					<div class="main-banner__col main-banner__col--1">
						<a class="main-banner__link" href="/frezyalar" title="">
							<img alt="Doğum Günü" class="main-banner__image" src="//cdn03.ciceksepeti.com/slider/580x416-cicek-kartegorianabanner637211738303765521.jpg">
						</a>
					</div>
					<div class="main-banner__col main-banner__col--2">
						<div class="main-banner__col-inner">
							<div class="main-banner__col-inner-col">
								<a class="main-banner__link" href="/orkide" title="">
									<picture>
										<source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
											<img alt="orkide" class="main-banner__image" height="197" src="//cdn03.ciceksepeti.com/slider/280x197-smallbanner-orkide637063339255613772637198179789367240.jpg" width="280">
									</picture>
								</a>
							</div>
							<div class="main-banner__col-inner-col">
								<a class="main-banner__link" href="/papatya-gerbera" title="">
									<picture>
										<source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
											<img alt="papatya-gerbera" class="main-banner__image" height="197" src="//cdn03.ciceksepeti.com/slider/280x197-cicek-1637173108294963280.jpg" width="280">
									</picture>
								</a>
							</div>
						</div>
					</div>
					<div class="main-banner__col main-banner__col--3">
						<div class="main-banner__col-inner">
							<div class="main-banner__col-inner-col">
								<a class="main-banner__link" href="/cicek-buketleri" title="">
									<picture>
										<source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
											<img alt="Çiçek Buketleri" class="main-banner__image" height="197" src="//cdn03.ciceksepeti.com/slider/280x197-smallbanner-çiçekbuketler637063346741055292637173107188719810.jpg" width="280">
									</picture>
								</a>
							</div>
							<div class="main-banner__col-inner-col">
								<a class="main-banner__link" href="/butik-cicekciler" title="">
									<picture>
										<source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
											<img alt="butik-cicekciler" class="main-banner__image" height="197" src="//cdn03.ciceksepeti.com/slider/280x197-smallbanner-tasarımçiçekler637063348321329891637173108811053763.jpg" width="280">
									</picture>
								</a>
							</div>
						</div>
					</div>
					<div class="main-banner__col main-banner__col--4">
						<a class="main-banner__link" href="/teraryum" title="">
							<picture>
								<source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
									<img alt="teraryum" class="main-banner__image" height="197" src="//cdn03.ciceksepeti.com/slider/280x197-smallbanner-teraryum637063347784896653637173107566256550.jpg" width="280">
							</picture>
						</a>
						<a class="main-banner__link" href="/kisiye-ozel-cicekler" title="">
							<picture>
								<source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
									<img alt="kisiye-ozel-cicekler" class="main-banner__image" height="197" src="//cdn03.ciceksepeti.com/slider/280x197-smallbanner-köçiçek637063348579287547637173109211312837.jpg" width="280">
							</picture>
						</a>
					</div>
				</div>
			</div>
			<div class="products products--category">
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 10; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at773" data-category="çiçek" href="/seramik-vazoda-phalaenopsis-orkide" tabindex="0" data-position="1">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="1166">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at773-1/S/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 255w" alt="2 Dal Beyaz Orkide Çiçeği" src="https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at773-1/S/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">2 Dal Beyaz Orkide Çiçeği</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="79.99">
												<div class="price__left"> <span class="price__integer-value">79</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">22,99 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">22,99 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=1166&amp;productgroupid=1&amp;variantcode=at773-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 20; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3458" data-category="çiçek" href="/cift-dal-eflatun-orkide-ve-spesiyal-cikolata" tabindex="0" data-position="2">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2298982">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3458-1/M/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3458-1/S/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3458-1/M/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg 255w" alt="Çift Dal Mor Orkide ve Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at3458-1/M/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3458-1/S/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3458-1/M/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Çift Dal Mor Orkide ve Çikolata</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="109.00">
												<div class="price__left"> <span class="price__integer-value">109</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">31,33 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">31,33 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2298982&amp;productgroupid=1&amp;variantcode=at3458-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 30; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3709" data-category="çiçek" href="/dogal-ahsap-kutukte-papatya-aranjmani-at3709" tabindex="0" data-position="3">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3230782">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3709-1/M/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3709-1/S/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3709-1/M/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg 255w" alt="Doğal Ahşap Kütükte Papatya Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3709-1/M/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3709-1/S/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3709-1/M/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Doğal Ahşap Kütükte Papatya Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%20</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">49</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,98 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="39.99">
												<div class="price__left"> <span class="price__integer-value">39</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">11,49 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">11,49 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3230782&amp;productgroupid=1&amp;variantcode=at3709-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order:40; -webkit-order:40; -moz-order:40; -ms-order:40">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3632" data-category="çiçek" href="/2-dal-orkide-ve-premium-cikolata-at3632" tabindex="0" data-position="4">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2746232">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3632-1/M/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3632-1/S/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3632-1/M/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg 255w" alt="2 Dal Orkide ve Premium Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at3632-1/M/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3632-1/S/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3632-1/M/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">2 Dal Orkide ve Premium Çikolata</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%16</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">119</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="99.99">
												<div class="price__left"> <span class="price__integer-value">99</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">28,74 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">28,74 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2746232&amp;productgroupid=1&amp;variantcode=at3632-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 50; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at2360" data-category="çiçek" href="/asaletin-simgesi-mor-orkide-at2360" tabindex="0" data-position="5">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="134516">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at2360-1/S/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 255w" alt="Asaletli Mor 2 Dal Orkide" src="https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at2360-1/S/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Asaletli Mor 2 Dal Orkide</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="89.99">
												<div class="price__left"> <span class="price__integer-value">89</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=134516&amp;productgroupid=1&amp;variantcode=at2360-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order:60; -webkit-order:60; -moz-order:60; -ms-order:60">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="sbat4068" data-category="çiçek" href="/mix-valley-renkli-papatyalar-sbat4068" tabindex="0" data-position="6">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4404138">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/sbat4068-1/M/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/sbat4068-1/S/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg 186w,https://cdn03.ciceksepeti.com/cicek/sbat4068-1/M/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg 255w" alt="Mix Valley" src="https://cdn03.ciceksepeti.com/cicek/sbat4068-1/M/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/sbat4068-1/S/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg 186w,https://cdn03.ciceksepeti.com/cicek/sbat4068-1/M/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Mix Valley</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%10</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">39</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="34.99">
												<div class="price__left"> <span class="price__integer-value">34</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(61)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper">
									<div class="products__subscription-price-wrapper__inner"> <span class="products__subscription-price">
                                 <span class="products__subscription-price__text">Abonelikte %14 İndirim </span>
										<span class="products__subscription-price__integer">29</span>
										<span class="products__subscription-price__decimal">,99 TL</span>
										</span>
									</div>
								</div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4404138&amp;productgroupid=1&amp;variantcode=sbat4068-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:70; -webkit-order:70; -moz-order:70; -ms-order:70">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3184" data-category="çiçek" href="/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184" tabindex="0" data-position="7">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2235131">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3184-1/S/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 255w" alt="Yeni Umutlar Gerbera ve Beyaz Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3184-1/S/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Yeni Umutlar Gerbera ve Beyaz Gül Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="64.99">
												<div class="price__left"> <span class="price__integer-value">64</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(654)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">18,68 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">18,68 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2235131&amp;productgroupid=1&amp;variantcode=at3184-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:80; -webkit-order:80; -moz-order:80; -ms-order:80">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at2940" data-category="çiçek" href="/cikolatali-papatya-kuresi-at2940" tabindex="0" data-position="8">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2200876">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at2940-1/M/at2940-1-8d794ead6586bd3-e16a6c0f.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at2940-1/S/at2940-1-8d794ead6586bd3-e16a6c0f.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2940-1/M/at2940-1-8d794ead6586bd3-e16a6c0f.jpg 255w" alt="Çikolatalı Papatya Küresi" src="https://cdn03.ciceksepeti.com/cicek/at2940-1/M/at2940-1-8d794ead6586bd3-e16a6c0f.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at2940-1/S/at2940-1-8d794ead6586bd3-e16a6c0f.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2940-1/M/at2940-1-8d794ead6586bd3-e16a6c0f.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Çikolatalı Papatya Küresi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="79.99">
												<div class="price__left"> <span class="price__integer-value">79</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">22,99 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">22,99 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2200876&amp;productgroupid=1&amp;variantcode=at2940-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:90; -webkit-order:90; -moz-order:90; -ms-order:90">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3464" data-category="çiçek" href="/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464" tabindex="0" data-position="9">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2321345">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3464-1/S/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 255w" alt="Kişiye Özel Vazolu Hüsnüyusuf ve Gerbera Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3464-1/S/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Vazolu Hüsnüyusuf ve Gerbera Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="69.99">
												<div class="price__left"> <span class="price__integer-value">69</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">20,12 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">20,12 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2321345&amp;productgroupid=1&amp;variantcode=at3464-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:100; -webkit-order:100; -moz-order:100; -ms-order:100">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3662" data-category="çiçek" href="/damali-vazoda-2-dal-orkide-cicegi-at3662" tabindex="0" data-position="10">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2853780">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3662-1/M/damali-vazoda-2-dal-orkide-cicegi-at3662-1-8d61190419f728e-fc87b57a.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3662-1/S/damali-vazoda-2-dal-orkide-cicegi-at3662-1-8d61190419f728e-fc87b57a.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3662-1/M/damali-vazoda-2-dal-orkide-cicegi-at3662-1-8d61190419f728e-fc87b57a.jpg 255w" alt="Damalı Vazoda 2 Dal Orkide Çiçeği" src="https://cdn03.ciceksepeti.com/cicek/at3662-1/M/damali-vazoda-2-dal-orkide-cicegi-at3662-1-8d61190419f728e-fc87b57a.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3662-1/S/damali-vazoda-2-dal-orkide-cicegi-at3662-1-8d61190419f728e-fc87b57a.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3662-1/M/damali-vazoda-2-dal-orkide-cicegi-at3662-1-8d61190419f728e-fc87b57a.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Damalı Vazoda 2 Dal Orkide Çiçeği</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="79.99">
												<div class="price__left"> <span class="price__integer-value">79</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">22,99 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">22,99 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2853780&amp;productgroupid=1&amp;variantcode=at3662-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:110; -webkit-order:110; -moz-order:110; -ms-order:110">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3739" data-category="çiçek" href="/gold-cizgili-vazoda-2-dal-orkide-cicegi-at3739" tabindex="0" data-position="11">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3391349">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3739-1/M/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3739-1/S/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3739-1/M/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg 255w" alt="Gold Çizgili Vazoda 2 Dal Orkide Çiçeği" src="https://cdn03.ciceksepeti.com/cicek/at3739-1/M/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3739-1/S/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3739-1/M/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Gold Çizgili Vazoda 2 Dal Orkide Çiçeği</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="89.99">
												<div class="price__left"> <span class="price__integer-value">89</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391349&amp;productgroupid=1&amp;variantcode=at3739-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:120; -webkit-order:120; -moz-order:120; -ms-order:120">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3774" data-category="çiçek" href="/incili-pembe-kutuda-beyaz-papatya-aranjmani-at3774" tabindex="0" data-position="12">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3391380">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3774-1/M/at3774-1-8d6be8b7047d682-e2745724.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3774-1/S/at3774-1-8d6be8b7047d682-e2745724.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3774-1/M/at3774-1-8d6be8b7047d682-e2745724.jpg 255w" alt="İncili Pembe Kutuda Beyaz Papatya Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3774-1/M/at3774-1-8d6be8b7047d682-e2745724.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3774-1/S/at3774-1-8d6be8b7047d682-e2745724.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3774-1/M/at3774-1-8d6be8b7047d682-e2745724.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">İncili Pembe Kutuda Beyaz Papatya Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="89.99">
												<div class="price__left"> <span class="price__integer-value">89</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391380&amp;productgroupid=1&amp;variantcode=at3774-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:130; -webkit-order:130; -moz-order:130; -ms-order:130">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at727" data-category="çiçek" href="/akvaryumda-7-kirmizi-gul" tabindex="0" data-position="13">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="1053">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at727-1/M/akvaryum-vazo-icerisinde-gul-buketi-at727-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at727-1/S/akvaryum-vazo-icerisinde-gul-buketi-at727-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at727-1/M/akvaryum-vazo-icerisinde-gul-buketi-at727-1-1.jpg 255w" alt="Akvaryum Vazoda 7 Kırmızı Gül" src="https://cdn03.ciceksepeti.com/cicek/at727-1/M/akvaryum-vazo-icerisinde-gul-buketi-at727-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at727-1/S/akvaryum-vazo-icerisinde-gul-buketi-at727-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at727-1/M/akvaryum-vazo-icerisinde-gul-buketi-at727-1-1.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Akvaryum Vazoda 7 Kırmızı Gül</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%14</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">69</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="59.99">
												<div class="price__left"> <span class="price__integer-value">59</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">17,24 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">17,24 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=1053&amp;productgroupid=1&amp;variantcode=at727-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:140; -webkit-order:140; -moz-order:140; -ms-order:140">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3032" data-category="çiçek" href="/bahar-kuresi-at3032" tabindex="0" data-position="14">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2204697">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3032-1/M/bahar-kuresi-at3032-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3032-1/S/bahar-kuresi-at3032-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3032-1/M/bahar-kuresi-at3032-1-1.jpg 255w" alt="Bahar Küresi" src="https://cdn03.ciceksepeti.com/cicek/at3032-1/M/bahar-kuresi-at3032-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3032-1/S/bahar-kuresi-at3032-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3032-1/M/bahar-kuresi-at3032-1-1.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Bahar Küresi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%9</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">54</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="49.99">
												<div class="price__left"> <span class="price__integer-value">49</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(508)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">14,37 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">14,37 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2204697&amp;productgroupid=1&amp;variantcode=at3032-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:150; -webkit-order:150; -moz-order:150; -ms-order:150">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at1741" data-category="çiçek" href="/romantik-kalpler-at1741" tabindex="0" data-position="15">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="5841">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at1741-1/M/at1741-1-8d714dd6e0ce959-9f0598c8.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at1741-1/S/at1741-1-8d714dd6e0ce959-9f0598c8.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at1741-1/M/at1741-1-8d714dd6e0ce959-9f0598c8.jpg 255w" alt="15'li Kırmızı Gül - Paşabahçe Vazoda" src="https://cdn03.ciceksepeti.com/cicek/at1741-1/M/at1741-1-8d714dd6e0ce959-9f0598c8.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at1741-1/S/at1741-1-8d714dd6e0ce959-9f0598c8.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at1741-1/M/at1741-1-8d714dd6e0ce959-9f0598c8.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">15'li Kırmızı Gül - Paşabahçe Vazoda</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="59.99">
												<div class="price__left"> <span class="price__integer-value">59</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">17,24 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">17,24 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=5841&amp;productgroupid=1&amp;variantcode=at1741-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:160; -webkit-order:160; -moz-order:160; -ms-order:160">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at1892" data-category="çiçek" href="/bonsai-at1892" tabindex="0" data-position="16">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="6250">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at1892-1/M/at1892-1-8d6f587ca27e95f-15a2161b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at1892-1/S/at1892-1-8d6f587ca27e95f-15a2161b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at1892-1/M/at1892-1-8d6f587ca27e95f-15a2161b.jpg 255w" alt="Zelkova Bonsai 25cm" src="https://cdn03.ciceksepeti.com/cicek/at1892-1/M/at1892-1-8d6f587ca27e95f-15a2161b.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at1892-1/S/at1892-1-8d6f587ca27e95f-15a2161b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at1892-1/M/at1892-1-8d6f587ca27e95f-15a2161b.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Zelkova Bonsai 25cm</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%11</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">89</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="79.99">
												<div class="price__left"> <span class="price__integer-value">79</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">22,99 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">22,99 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=6250&amp;productgroupid=1&amp;variantcode=at1892-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:170; -webkit-order:170; -moz-order:170; -ms-order:170">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3870" data-category="çiçek" href="/gold-cizgili-vazoda-antoryum-bitkisi-at3870" tabindex="0" data-position="17">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3570090">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3870-1/M/at3870-1-8d76d2407f2a66f-cf8f4e8e.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3870-1/S/at3870-1-8d76d2407f2a66f-cf8f4e8e.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3870-1/M/at3870-1-8d76d2407f2a66f-cf8f4e8e.jpg 255w" alt="Gold Çizgili Vazoda Antoryum Bitkisi" src="https://cdn03.ciceksepeti.com/cicek/at3870-1/M/at3870-1-8d76d2407f2a66f-cf8f4e8e.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3870-1/S/at3870-1-8d76d2407f2a66f-cf8f4e8e.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3870-1/M/at3870-1-8d76d2407f2a66f-cf8f4e8e.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Gold Çizgili Vazoda Antoryum Bitkisi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="84.99">
												<div class="price__left"> <span class="price__integer-value">84</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">24,43 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">24,43 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3570090&amp;productgroupid=1&amp;variantcode=at3870-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:180; -webkit-order:180; -moz-order:180; -ms-order:180">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="sbat4057" data-category="çiçek" href="/harmonic-rengarenk-karanfil-aranjmani-sbat4057" tabindex="0" data-position="18">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4404136">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/sbat4057-1/M/sbat4057-1-8d7d59c039eab19-f549cf21.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/sbat4057-1/S/sbat4057-1-8d7d59c039eab19-f549cf21.jpg 186w,https://cdn03.ciceksepeti.com/cicek/sbat4057-1/M/sbat4057-1-8d7d59c039eab19-f549cf21.jpg 255w" alt="Harmony" src="https://cdn03.ciceksepeti.com/cicek/sbat4057-1/M/sbat4057-1-8d7d59c039eab19-f549cf21.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/sbat4057-1/S/sbat4057-1-8d7d59c039eab19-f549cf21.jpg 186w,https://cdn03.ciceksepeti.com/cicek/sbat4057-1/M/sbat4057-1-8d7d59c039eab19-f549cf21.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Harmony</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="59.99">
												<div class="price__left"> <span class="price__integer-value">59</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(9)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper">
									<div class="products__subscription-price-wrapper__inner"> <span class="products__subscription-price">
                                 <span class="products__subscription-price__text">Abonelikte %17 İndirim </span>
										<span class="products__subscription-price__integer">49</span>
										<span class="products__subscription-price__decimal">,99 TL</span>
										</span>
									</div>
								</div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4404136&amp;productgroupid=1&amp;variantcode=sbat4057-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:190; -webkit-order:190; -moz-order:190; -ms-order:190">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via144" data-category="çiçek" href="/kisiye-ozel-askin-bas-harfi-kirmizi-gul-aranjmani-via144" tabindex="0" data-position="19">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2247923">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via144-1/M/kisiye-ozel-askin-bas-harfi-kirmizi-gul-aranjmani-via144-1-8d40174f2634a64-7913e37e.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via144-1/S/kisiye-ozel-askin-bas-harfi-kirmizi-gul-aranjmani-via144-1-8d40174f2634a64-7913e37e.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via144-1/M/kisiye-ozel-askin-bas-harfi-kirmizi-gul-aranjmani-via144-1-8d40174f2634a64-7913e37e.jpg 255w" alt="Kişiye Özel Aşkın Baş Harfi Kırmızı Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/via144-1/M/kisiye-ozel-askin-bas-harfi-kirmizi-gul-aranjmani-via144-1-8d40174f2634a64-7913e37e.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via144-1/S/kisiye-ozel-askin-bas-harfi-kirmizi-gul-aranjmani-via144-1-8d40174f2634a64-7913e37e.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via144-1/M/kisiye-ozel-askin-bas-harfi-kirmizi-gul-aranjmani-via144-1-8d40174f2634a64-7913e37e.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Aşkın Baş Harfi Kırmızı Gül Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%7</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">149</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="139.00">
												<div class="price__left"> <span class="price__integer-value">139</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">39,96 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">39,96 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2247923&amp;productgroupid=1&amp;variantcode=via144-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:200; -webkit-order:200; -moz-order:200; -ms-order:200">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3454" data-category="çiçek" href="/15-kirmizi-gul-ve-spesiyal-cikolata" tabindex="0" data-position="20">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2298978">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3454-1/M/15-kirmizi-gul-ve-spesiyal-cikolata-at3454-1-8d44ea37214991b-818ab171.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3454-1/S/15-kirmizi-gul-ve-spesiyal-cikolata-at3454-1-8d44ea37214991b-818ab171.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3454-1/M/15-kirmizi-gul-ve-spesiyal-cikolata-at3454-1-8d44ea37214991b-818ab171.jpg 255w" alt="15 Kırmızı Gül ve Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at3454-1/M/15-kirmizi-gul-ve-spesiyal-cikolata-at3454-1-8d44ea37214991b-818ab171.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3454-1/S/15-kirmizi-gul-ve-spesiyal-cikolata-at3454-1-8d44ea37214991b-818ab171.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3454-1/M/15-kirmizi-gul-ve-spesiyal-cikolata-at3454-1-8d44ea37214991b-818ab171.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">15 Kırmızı Gül ve Çikolata</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="119.00">
												<div class="price__left"> <span class="price__integer-value">119</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(933)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">34,21 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">34,21 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2298978&amp;productgroupid=1&amp;variantcode=at3454-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:210; -webkit-order:210; -moz-order:210; -ms-order:210">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at192" data-category="çiçek" href="/beyaz-phalaenopsis-orkide" tabindex="0" data-position="21">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="321">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at192-1/M/at192-1-8d6d3a67569da1b-5dfb6f08.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at192-1/S/at192-1-8d6d3a67569da1b-5dfb6f08.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at192-1/M/at192-1-8d6d3a67569da1b-5dfb6f08.jpg 255w" alt="Phalaenopsis Orkide Çiçeği" src="https://cdn03.ciceksepeti.com/cicek/at192-1/M/at192-1-8d6d3a67569da1b-5dfb6f08.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at192-1/S/at192-1-8d6d3a67569da1b-5dfb6f08.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at192-1/M/at192-1-8d6d3a67569da1b-5dfb6f08.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Phalaenopsis Orkide Çiçeği</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="69.99">
												<div class="price__left"> <span class="price__integer-value">69</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">20,12 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">20,12 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=321&amp;productgroupid=1&amp;variantcode=at192-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:220; -webkit-order:220; -moz-order:220; -ms-order:220">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via209" data-category="çiçek" href="/mini-cift-dal-mor-orkide-via209" tabindex="0" data-position="22">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2793788">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via209-1/M/mini-cift-dal-beton-saksida-mor-orkide-via209-1-8d611922882fdf6-6890cfdc.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via209-1/S/mini-cift-dal-beton-saksida-mor-orkide-via209-1-8d611922882fdf6-6890cfdc.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via209-1/M/mini-cift-dal-beton-saksida-mor-orkide-via209-1-8d611922882fdf6-6890cfdc.jpg 255w" alt="Mini Çift Dal Beton Saksıda Mor Orkide" src="https://cdn03.ciceksepeti.com/cicek/via209-1/M/mini-cift-dal-beton-saksida-mor-orkide-via209-1-8d611922882fdf6-6890cfdc.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via209-1/S/mini-cift-dal-beton-saksida-mor-orkide-via209-1-8d611922882fdf6-6890cfdc.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via209-1/M/mini-cift-dal-beton-saksida-mor-orkide-via209-1-8d611922882fdf6-6890cfdc.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Mini Çift Dal Beton Saksıda Mor Orkide</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%17</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">89</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="74.99">
												<div class="price__left"> <span class="price__integer-value">74</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">21,55 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">21,55 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2793788&amp;productgroupid=1&amp;variantcode=via209-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:230; -webkit-order:230; -moz-order:230; -ms-order:230">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at1654" data-category="çiçek" href="/ask-kuresi-kirmizi-ve-beyaz-guller-at1654" tabindex="0" data-position="23">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="5470">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at1654-1/M/ask-kuresi-kirmizi-ve-beyaz-guller-at1654-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at1654-1/S/ask-kuresi-kirmizi-ve-beyaz-guller-at1654-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at1654-1/M/ask-kuresi-kirmizi-ve-beyaz-guller-at1654-1-1.jpg 255w" alt="Aşk Küresi 4 Kırmızı ve 5 Beyaz Gül" src="https://cdn03.ciceksepeti.com/cicek/at1654-1/M/ask-kuresi-kirmizi-ve-beyaz-guller-at1654-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at1654-1/S/ask-kuresi-kirmizi-ve-beyaz-guller-at1654-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at1654-1/M/ask-kuresi-kirmizi-ve-beyaz-guller-at1654-1-1.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Aşk Küresi 4 Kırmızı ve 5 Beyaz Gül</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%14</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">69</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="59.99">
												<div class="price__left"> <span class="price__integer-value">59</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">17,24 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">17,24 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=5470&amp;productgroupid=1&amp;variantcode=at1654-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:240; -webkit-order:240; -moz-order:240; -ms-order:240">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="sbat4046" data-category="çiçek" href="/rose-meta-gul-aranjmani-sbat4046" tabindex="0" data-position="24">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4404122">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/sbat4046-1/M/sbat4046-1-8d7d59be8b7d1e3-ddbf74d.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/sbat4046-1/S/sbat4046-1-8d7d59be8b7d1e3-ddbf74d.jpg 186w,https://cdn03.ciceksepeti.com/cicek/sbat4046-1/M/sbat4046-1-8d7d59be8b7d1e3-ddbf74d.jpg 255w" alt="Mix Fresh" src="https://cdn03.ciceksepeti.com/cicek/sbat4046-1/M/sbat4046-1-8d7d59be8b7d1e3-ddbf74d.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/sbat4046-1/S/sbat4046-1-8d7d59be8b7d1e3-ddbf74d.jpg 186w,https://cdn03.ciceksepeti.com/cicek/sbat4046-1/M/sbat4046-1-8d7d59be8b7d1e3-ddbf74d.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Mix Fresh</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="69.99">
												<div class="price__left"> <span class="price__integer-value">69</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(1)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper">
									<div class="products__subscription-price-wrapper__inner"> <span class="products__subscription-price">
                                 <span class="products__subscription-price__text">Abonelikte %14 İndirim </span>
										<span class="products__subscription-price__integer">59</span>
										<span class="products__subscription-price__decimal">,99 TL</span>
										</span>
									</div>
								</div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4404122&amp;productgroupid=1&amp;variantcode=sbat4046-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:250; -webkit-order:250; -moz-order:250; -ms-order:250">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via210" data-category="çiçek" href="/mini-cift-dalahsap-saksida-mor-orkide-via210" tabindex="0" data-position="25">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3022100">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via210-1/M/mini-cift-dalahsap-saksida-mor-orkide-via210-1-8d6128a39d43596-7469cba4.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via210-1/S/mini-cift-dalahsap-saksida-mor-orkide-via210-1-8d6128a39d43596-7469cba4.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via210-1/M/mini-cift-dalahsap-saksida-mor-orkide-via210-1-8d6128a39d43596-7469cba4.jpg 255w" alt="Doğal Ahşap Saksıda Mini Mor Orkide" src="https://cdn03.ciceksepeti.com/cicek/via210-1/M/mini-cift-dalahsap-saksida-mor-orkide-via210-1-8d6128a39d43596-7469cba4.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via210-1/S/mini-cift-dalahsap-saksida-mor-orkide-via210-1-8d6128a39d43596-7469cba4.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via210-1/M/mini-cift-dalahsap-saksida-mor-orkide-via210-1-8d6128a39d43596-7469cba4.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Doğal Ahşap Saksıda Mini Mor Orkide</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%22</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">89</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="69.99">
												<div class="price__left"> <span class="price__integer-value">69</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">20,12 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">20,12 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3022100&amp;productgroupid=1&amp;variantcode=via210-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:260; -webkit-order:260; -moz-order:260; -ms-order:260">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3694" data-category="çiçek" href="/masal-perisi-41-kirmizi-gul-aranjmani-ve-premium-cikolata-at3694" tabindex="0" data-position="26">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3231674">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3694-1/M/masal-perisi-41-kirmizi-gul-aranjmani-ve-premium-cikolata-at3694-1-8d6640ed282cf78-4e16fc5.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3694-1/S/masal-perisi-41-kirmizi-gul-aranjmani-ve-premium-cikolata-at3694-1-8d6640ed282cf78-4e16fc5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3694-1/M/masal-perisi-41-kirmizi-gul-aranjmani-ve-premium-cikolata-at3694-1-8d6640ed282cf78-4e16fc5.jpg 255w" alt="Masal Perisi 41 Kırmızı Gül Aranjmanı ve Premium Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at3694-1/M/masal-perisi-41-kirmizi-gul-aranjmani-ve-premium-cikolata-at3694-1-8d6640ed282cf78-4e16fc5.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3694-1/S/masal-perisi-41-kirmizi-gul-aranjmani-ve-premium-cikolata-at3694-1-8d6640ed282cf78-4e16fc5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3694-1/M/masal-perisi-41-kirmizi-gul-aranjmani-ve-premium-cikolata-at3694-1-8d6640ed282cf78-4e16fc5.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Masal Perisi 41 Kırmızı Gül Aranjmanı ve Premium Çikolata</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="159.00">
												<div class="price__left"> <span class="price__integer-value">159</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(177)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">45,71 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">45,71 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3231674&amp;productgroupid=1&amp;variantcode=at3694-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:270; -webkit-order:270; -moz-order:270; -ms-order:270">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at353" data-category="çiçek" href="/5-dal-beyaz-orkide-aranjmani" tabindex="0" data-position="27">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="534">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at353-1/M/5-dal-beyaz-orkide-aranjmani-at353-1-8d46a363ee36ec2-80933a56.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at353-1/S/5-dal-beyaz-orkide-aranjmani-at353-1-8d46a363ee36ec2-80933a56.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at353-1/M/5-dal-beyaz-orkide-aranjmani-at353-1-8d46a363ee36ec2-80933a56.jpg 255w" alt="5 Dal Beyaz Orkide Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at353-1/M/5-dal-beyaz-orkide-aranjmani-at353-1-8d46a363ee36ec2-80933a56.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at353-1/S/5-dal-beyaz-orkide-aranjmani-at353-1-8d46a363ee36ec2-80933a56.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at353-1/M/5-dal-beyaz-orkide-aranjmani-at353-1-8d46a363ee36ec2-80933a56.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">5 Dal Beyaz Orkide Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="189.00">
												<div class="price__left"> <span class="price__integer-value">189</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">54,33 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">54,33 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=534&amp;productgroupid=1&amp;variantcode=at353-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:280; -webkit-order:280; -moz-order:280; -ms-order:280">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3453" data-category="çiçek" href="/phalaenopsis-orkide-ve-spesiyal-cikolata-at3453" tabindex="0" data-position="28">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2299272">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3453-1/M/phalaenopsis-orkide-ve-spesiyal-cikolata-at3453-1-8d44ea5db12dbd9-a4babaa5.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3453-1/S/phalaenopsis-orkide-ve-spesiyal-cikolata-at3453-1-8d44ea5db12dbd9-a4babaa5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3453-1/M/phalaenopsis-orkide-ve-spesiyal-cikolata-at3453-1-8d44ea5db12dbd9-a4babaa5.jpg 255w" alt="Phalaenopsis Orkide ve Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at3453-1/M/phalaenopsis-orkide-ve-spesiyal-cikolata-at3453-1-8d44ea5db12dbd9-a4babaa5.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3453-1/S/phalaenopsis-orkide-ve-spesiyal-cikolata-at3453-1-8d44ea5db12dbd9-a4babaa5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3453-1/M/phalaenopsis-orkide-ve-spesiyal-cikolata-at3453-1-8d44ea5db12dbd9-a4babaa5.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Phalaenopsis Orkide ve Çikolata</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="99.99">
												<div class="price__left"> <span class="price__integer-value">99</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">28,74 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">28,74 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2299272&amp;productgroupid=1&amp;variantcode=at3453-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:290; -webkit-order:290; -moz-order:290; -ms-order:290">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at2920" data-category="çiçek" href="/mutluluk-kutusu-cicek-aranjmani-at2920" tabindex="0" data-position="29">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2202667">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at2920-1/M/mutluluk-kutusu-at2920-1-636149066333279461.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at2920-1/S/mutluluk-kutusu-at2920-1-636149066333279461.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2920-1/M/mutluluk-kutusu-at2920-1-636149066333279461.jpg 255w" alt="Mutluluk Kutusu" src="https://cdn03.ciceksepeti.com/cicek/at2920-1/M/mutluluk-kutusu-at2920-1-636149066333279461.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at2920-1/S/mutluluk-kutusu-at2920-1-636149066333279461.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2920-1/M/mutluluk-kutusu-at2920-1-636149066333279461.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Mutluluk Kutusu</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%20</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">99</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="79.99">
												<div class="price__left"> <span class="price__integer-value">79</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">22,99 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">22,99 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2202667&amp;productgroupid=1&amp;variantcode=at2920-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:300; -webkit-order:300; -moz-order:300; -ms-order:300">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at772" data-category="çiçek" href="/konik-vazoda-11-kirmizi-gul" tabindex="0" data-position="30">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="1165">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at772-1/M/sevgi-bahcesi-kirmizi-gul-aranjmani-at772-1-8d4856f8271bfa6-a28d3a1b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at772-1/S/sevgi-bahcesi-kirmizi-gul-aranjmani-at772-1-8d4856f8271bfa6-a28d3a1b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at772-1/M/sevgi-bahcesi-kirmizi-gul-aranjmani-at772-1-8d4856f8271bfa6-a28d3a1b.jpg 255w" alt="Sevgi Bahçesi Vazoda 11 Kırmızı Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at772-1/M/sevgi-bahcesi-kirmizi-gul-aranjmani-at772-1-8d4856f8271bfa6-a28d3a1b.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at772-1/S/sevgi-bahcesi-kirmizi-gul-aranjmani-at772-1-8d4856f8271bfa6-a28d3a1b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at772-1/M/sevgi-bahcesi-kirmizi-gul-aranjmani-at772-1-8d4856f8271bfa6-a28d3a1b.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Sevgi Bahçesi Vazoda 11 Kırmızı Gül Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="69.99">
												<div class="price__left"> <span class="price__integer-value">69</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">20,12 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">20,12 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=1165&amp;productgroupid=1&amp;variantcode=at772-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:310; -webkit-order:310; -moz-order:310; -ms-order:310">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at281" data-category="çiçek" href="/kar-beyaz-gul-ve-lilyum-at281" tabindex="0" data-position="31">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="441">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at281-1/M/kar-beyaz-gul-ve-lilyum-at281-1-10.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at281-1/S/kar-beyaz-gul-ve-lilyum-at281-1-10.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at281-1/M/kar-beyaz-gul-ve-lilyum-at281-1-10.jpg 255w" alt="Kar Beyaz Gül ve Lilyum" src="https://cdn03.ciceksepeti.com/cicek/at281-1/M/kar-beyaz-gul-ve-lilyum-at281-1-10.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at281-1/S/kar-beyaz-gul-ve-lilyum-at281-1-10.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at281-1/M/kar-beyaz-gul-ve-lilyum-at281-1-10.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kar Beyaz Gül ve Lilyum</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="89.99">
												<div class="price__left"> <span class="price__integer-value">89</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=441&amp;productgroupid=1&amp;variantcode=at281-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:320; -webkit-order:320; -moz-order:320; -ms-order:320">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3583" data-category="çiçek" href="/premium-kutuda-9lu-kirmizi-gul-at3583" tabindex="0" data-position="32">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2787614">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3583-1/M/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3583-1/S/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3583-1/M/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg 255w" alt="Premium Kutuda 9'lu Kırmızı Gül" src="https://cdn03.ciceksepeti.com/cicek/at3583-1/M/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3583-1/S/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3583-1/M/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Premium Kutuda 9'lu Kırmızı Gül</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="79.99">
												<div class="price__left"> <span class="price__integer-value">79</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">22,99 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">22,99 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2787614&amp;productgroupid=1&amp;variantcode=at3583-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:330; -webkit-order:330; -moz-order:330; -ms-order:330">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via273" data-category="çiçek" href="/cam-fanusta-2-dal-beyaz-orkide-cicegi-via273" tabindex="0" data-position="33">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3508670">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via273-1/M/via273-1-8d6fa3987ac7a9a-f63fe3f9.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via273-1/S/via273-1-8d6fa3987ac7a9a-f63fe3f9.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via273-1/M/via273-1-8d6fa3987ac7a9a-f63fe3f9.jpg 255w" alt="Cam Fanusta 2 Dal Beyaz Orkide Çiçeği" src="https://cdn03.ciceksepeti.com/cicek/via273-1/M/via273-1-8d6fa3987ac7a9a-f63fe3f9.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via273-1/S/via273-1-8d6fa3987ac7a9a-f63fe3f9.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via273-1/M/via273-1-8d6fa3987ac7a9a-f63fe3f9.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Cam Fanusta 2 Dal Beyaz Orkide Çiçeği</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%11</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">89</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="79.99">
												<div class="price__left"> <span class="price__integer-value">79</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">22,99 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">22,99 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3508670&amp;productgroupid=1&amp;variantcode=via273-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:340; -webkit-order:340; -moz-order:340; -ms-order:340">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3944" data-category="çiçek" href="/kisiye-ozel-fotografli-ficus-bonsai-at3944" tabindex="0" data-position="34">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3998101">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3944-1/M/at3944-1-8d74d737407748d-4cc6d647.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3944-1/S/at3944-1-8d74d737407748d-4cc6d647.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3944-1/M/at3944-1-8d74d737407748d-4cc6d647.jpg 255w" alt="Kişiye Özel Fotoğraflı Ficus Bonsai" src="https://cdn03.ciceksepeti.com/cicek/at3944-1/M/at3944-1-8d74d737407748d-4cc6d647.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3944-1/S/at3944-1-8d74d737407748d-4cc6d647.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3944-1/M/at3944-1-8d74d737407748d-4cc6d647.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Fotoğraflı Ficus Bonsai</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%12</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">79</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="69.99">
												<div class="price__left"> <span class="price__integer-value">69</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(928)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">20,12 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">20,12 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3998101&amp;productgroupid=1&amp;variantcode=at3944-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:350; -webkit-order:350; -moz-order:350; -ms-order:350">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via247" data-category="çiçek" href="/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-via247" tabindex="0" data-position="35">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3391407">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via247-1/M/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via247-1/S/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/via247-1/M/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg 255w" alt="Kişiye Özel İncili Pembe Kutuda Lila Gül Harf Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/via247-1/M/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/via247-1/S/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/via247-1/M/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel İncili Pembe Kutuda Lila Gül Harf Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="109.00">
												<div class="price__left"> <span class="price__integer-value">109</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(479)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">31,33 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">31,33 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391407&amp;productgroupid=1&amp;variantcode=via247-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:360; -webkit-order:360; -moz-order:360; -ms-order:360">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3744" data-category="çiçek" href="/puantiyeli-vazoda-2-dal-mor-orkide-at3744" tabindex="0" data-position="36">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3391354">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3744-1/M/puantiyeli-vazoda-2-dal-mor-orkide-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3744-1/S/puantiyeli-vazoda-2-dal-mor-orkide-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3744-1/M/puantiyeli-vazoda-2-dal-mor-orkide-standart-boy.jpeg 255w" alt="Puantiyeli Vazoda 2 Dal Mor Orkide" src="https://cdn03.ciceksepeti.com/cicek/at3744-1/M/puantiyeli-vazoda-2-dal-mor-orkide-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3744-1/S/puantiyeli-vazoda-2-dal-mor-orkide-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3744-1/M/puantiyeli-vazoda-2-dal-mor-orkide-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Puantiyeli Vazoda 2 Dal Mor Orkide</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%16</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">119</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="99.99">
												<div class="price__left"> <span class="price__integer-value">99</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(974)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">28,74 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">28,74 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391354&amp;productgroupid=1&amp;variantcode=at3744-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 370; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at4018" data-category="çiçek" href="/pasabahce-vazoda-renkli-karanfiller-at4018" tabindex="0" data-position="37">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4253282">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at4018-1/M/at4018-1-8d7822f702b030c-e505d158.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at4018-1/S/at4018-1-8d7822f702b030c-e505d158.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4018-1/M/at4018-1-8d7822f702b030c-e505d158.jpg 255w" alt="Paşabahçe Vazoda Renkli Karanfiller" src="https://cdn03.ciceksepeti.com/cicek/at4018-1/M/at4018-1-8d7822f702b030c-e505d158.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at4018-1/S/at4018-1-8d7822f702b030c-e505d158.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4018-1/M/at4018-1-8d7822f702b030c-e505d158.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Paşabahçe Vazoda Renkli Karanfiller</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%20</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">49</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,98 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="39.99">
												<div class="price__left"> <span class="price__integer-value">39</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(677)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">11,49 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">11,49 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4253282&amp;productgroupid=1&amp;variantcode=at4018-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:380; -webkit-order:380; -moz-order:380; -ms-order:380">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3655" data-category="çiçek" href="/blooming-love-at3655" tabindex="0" data-position="38">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2830046">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3655-1/M/blooming-love-at3655-1-8d6463bccadfba8-2822d140.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3655-1/S/blooming-love-at3655-1-8d6463bccadfba8-2822d140.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3655-1/M/blooming-love-at3655-1-8d6463bccadfba8-2822d140.jpg 255w" alt="Blooming Love 20 Kırmızı Gül" src="https://cdn03.ciceksepeti.com/cicek/at3655-1/M/blooming-love-at3655-1-8d6463bccadfba8-2822d140.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3655-1/S/blooming-love-at3655-1-8d6463bccadfba8-2822d140.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3655-1/M/blooming-love-at3655-1-8d6463bccadfba8-2822d140.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Blooming Love 20 Kırmızı Gül</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="89.99">
												<div class="price__left"> <span class="price__integer-value">89</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2830046&amp;productgroupid=1&amp;variantcode=at3655-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:390; -webkit-order:390; -moz-order:390; -ms-order:390">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="bt110" data-category="çiçek" href="/antoryum-50cm-yuksekliginde-salon-bitkisi" tabindex="0" data-position="39">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="64">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/bt110-1/M/salon-guzeli-orta-boy-antoryum-bt110-1-5.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/bt110-1/S/salon-guzeli-orta-boy-antoryum-bt110-1-5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/bt110-1/M/salon-guzeli-orta-boy-antoryum-bt110-1-5.jpg 255w" alt="Kırmızı Antoryum (Anthurium )Saksı Çiçeği" src="https://cdn03.ciceksepeti.com/cicek/bt110-1/M/salon-guzeli-orta-boy-antoryum-bt110-1-5.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/bt110-1/S/salon-guzeli-orta-boy-antoryum-bt110-1-5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/bt110-1/M/salon-guzeli-orta-boy-antoryum-bt110-1-5.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kırmızı Antoryum (Anthurium )Saksı Çiçeği</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="69.99">
												<div class="price__left"> <span class="price__integer-value">69</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">20,12 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">20,12 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=64&amp;productgroupid=1&amp;variantcode=bt110-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:400; -webkit-order:400; -moz-order:400; -ms-order:400">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at4133" data-category="çiçek" href="/pasabahce-vazoda-gerberalar-ve-cikolata-at4133" tabindex="0" data-position="40">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4322714">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at4133-1/M/at4133-1-8d7b6d692370d8e-9addef07.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at4133-1/S/at4133-1-8d7b6d692370d8e-9addef07.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4133-1/M/at4133-1-8d7b6d692370d8e-9addef07.jpg 255w" alt="Paşabahçe Vazoda Gerberalar ve Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at4133-1/M/at4133-1-8d7b6d692370d8e-9addef07.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at4133-1/S/at4133-1-8d7b6d692370d8e-9addef07.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4133-1/M/at4133-1-8d7b6d692370d8e-9addef07.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Paşabahçe Vazoda Gerberalar ve Çikolata</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="69.99">
												<div class="price__left"> <span class="price__integer-value">69</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(316)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">20,12 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">20,12 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4322714&amp;productgroupid=1&amp;variantcode=at4133-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 410; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at4138" data-category="çiçek" href="/papatya-karnavali-ve-cikolata-at4138" tabindex="0" data-position="41">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4322721">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at4138-1/M/at4138-1-8d7b6d6cf282586-33ce1462.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at4138-1/S/at4138-1-8d7b6d6cf282586-33ce1462.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4138-1/M/at4138-1-8d7b6d6cf282586-33ce1462.jpg 255w" alt="Papatya Karnavalı ve Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at4138-1/M/at4138-1-8d7b6d6cf282586-33ce1462.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at4138-1/S/at4138-1-8d7b6d6cf282586-33ce1462.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4138-1/M/at4138-1-8d7b6d6cf282586-33ce1462.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Papatya Karnavalı ve Çikolata</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="79.99">
												<div class="price__left"> <span class="price__integer-value">79</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(222)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">22,99 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">22,99 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4322721&amp;productgroupid=1&amp;variantcode=at4138-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 420; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at4123" data-category="çiçek" href="/pasabahce-vazoda-lilyumlar-ve-cikolata-at4123" tabindex="0" data-position="42">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4322701">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at4123-1/M/at4123-1-8d7b6d5605aa2b4-c7aa89b8.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at4123-1/S/at4123-1-8d7b6d5605aa2b4-c7aa89b8.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4123-1/M/at4123-1-8d7b6d5605aa2b4-c7aa89b8.jpg 255w" alt="Paşabahçe Vazoda Lilyumlar ve Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at4123-1/M/at4123-1-8d7b6d5605aa2b4-c7aa89b8.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at4123-1/S/at4123-1-8d7b6d5605aa2b4-c7aa89b8.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4123-1/M/at4123-1-8d7b6d5605aa2b4-c7aa89b8.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Paşabahçe Vazoda Lilyumlar ve Çikolata</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%12</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">79</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="69.99">
												<div class="price__left"> <span class="price__integer-value">69</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(315)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">20,12 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">20,12 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4322701&amp;productgroupid=1&amp;variantcode=at4123-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 430; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via277" data-category="çiçek" href="/akvaryum-fanusta-bonsai-teraryum-via277" tabindex="0" data-position="43">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3827038">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via277-1/M/via277-1-8d7198e03a8e938-e161deb6.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via277-1/S/via277-1-8d7198e03a8e938-e161deb6.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via277-1/M/via277-1-8d7198e03a8e938-e161deb6.jpg 255w" alt="Akvaryum Fanusta Bonsai Teraryum" src="https://cdn03.ciceksepeti.com/cicek/via277-1/M/via277-1-8d7198e03a8e938-e161deb6.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via277-1/S/via277-1-8d7198e03a8e938-e161deb6.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via277-1/M/via277-1-8d7198e03a8e938-e161deb6.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Akvaryum Fanusta Bonsai Teraryum</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%8</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">129</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="119.00">
												<div class="price__left"> <span class="price__integer-value">119</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(538)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">34,21 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">34,21 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3827038&amp;productgroupid=1&amp;variantcode=via277-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 440; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at2091" data-category="çiçek" href="/papatya-kuresi-at2091" tabindex="0" data-position="44">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="7592">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at2091-1/M/at2091-1-8d76921a2b37f99-2c2867cf.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at2091-1/S/at2091-1-8d76921a2b37f99-2c2867cf.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2091-1/M/at2091-1-8d76921a2b37f99-2c2867cf.jpg 255w" alt="Papatya Küresi" src="https://cdn03.ciceksepeti.com/cicek/at2091-1/M/at2091-1-8d76921a2b37f99-2c2867cf.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at2091-1/S/at2091-1-8d76921a2b37f99-2c2867cf.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2091-1/M/at2091-1-8d76921a2b37f99-2c2867cf.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Papatya Küresi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="49.99">
												<div class="price__left"> <span class="price__integer-value">49</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">14,37 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">14,37 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=7592&amp;productgroupid=1&amp;variantcode=at2091-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:450; -webkit-order:450; -moz-order:450; -ms-order:450">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at1652" data-category="çiçek" href="/kucak-dolusu-ask-25-kirmizi-gul-at1652" tabindex="0" data-position="45">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="5468">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at1652-1/M/at1652-1-8d757f9a2ebec41-44c8b34.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at1652-1/S/at1652-1-8d757f9a2ebec41-44c8b34.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at1652-1/M/at1652-1-8d757f9a2ebec41-44c8b34.jpg 255w" alt="Kucak Dolusu Aşk 25 Kırmızı Gül Buketi" src="https://cdn03.ciceksepeti.com/cicek/at1652-1/M/at1652-1-8d757f9a2ebec41-44c8b34.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at1652-1/S/at1652-1-8d757f9a2ebec41-44c8b34.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at1652-1/M/at1652-1-8d757f9a2ebec41-44c8b34.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kucak Dolusu Aşk 25 Kırmızı Gül Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%6</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">89</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="84.99">
												<div class="price__left"> <span class="price__integer-value">84</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">24,43 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">24,43 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=5468&amp;productgroupid=1&amp;variantcode=at1652-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:460; -webkit-order:460; -moz-order:460; -ms-order:460">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3635" data-category="çiçek" href="/vazoda-15-kirmizi-gul-ve-premium-cikolata-310gr-at3635" tabindex="0" data-position="46">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2774355">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3635-1/M/vazoda-15-kirmizi-gul-ve-premium-cikolata-310gr-at3635-1-8d5b42a2a86a817-dd0a1a8f.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3635-1/S/vazoda-15-kirmizi-gul-ve-premium-cikolata-310gr-at3635-1-8d5b42a2a86a817-dd0a1a8f.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3635-1/M/vazoda-15-kirmizi-gul-ve-premium-cikolata-310gr-at3635-1-8d5b42a2a86a817-dd0a1a8f.jpg 255w" alt="Vazoda 15 Kırmızı Gül ve Premium Çikolata 310gr" src="https://cdn03.ciceksepeti.com/cicek/at3635-1/M/vazoda-15-kirmizi-gul-ve-premium-cikolata-310gr-at3635-1-8d5b42a2a86a817-dd0a1a8f.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3635-1/S/vazoda-15-kirmizi-gul-ve-premium-cikolata-310gr-at3635-1-8d5b42a2a86a817-dd0a1a8f.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3635-1/M/vazoda-15-kirmizi-gul-ve-premium-cikolata-310gr-at3635-1-8d5b42a2a86a817-dd0a1a8f.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Vazoda 15 Kırmızı Gül ve Premium Çikolata 310gr</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%8</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">109</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="99.99">
												<div class="price__left"> <span class="price__integer-value">99</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(290)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">28,74 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">28,74 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2774355&amp;productgroupid=1&amp;variantcode=at3635-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:470; -webkit-order:470; -moz-order:470; -ms-order:470">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at4035" data-category="çiçek" href="/kucak-dolusu-ask-25-kirmizi-gul-buketi-at4035" tabindex="0" data-position="47">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4275289">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at4035-1/M/at4035-1-8d799ded4d435fc-8f463ba7.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at4035-1/S/at4035-1-8d799ded4d435fc-8f463ba7.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4035-1/M/at4035-1-8d799ded4d435fc-8f463ba7.jpg 255w" alt="Kucak Dolusu Aşk 25 Kırmızı Gül Buketi" src="https://cdn03.ciceksepeti.com/cicek/at4035-1/M/at4035-1-8d799ded4d435fc-8f463ba7.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at4035-1/S/at4035-1-8d799ded4d435fc-8f463ba7.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4035-1/M/at4035-1-8d799ded4d435fc-8f463ba7.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kucak Dolusu Aşk 25 Kırmızı Gül Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%6</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">89</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="84.99">
												<div class="price__left"> <span class="price__integer-value">84</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(282)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">24,43 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">24,43 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4275289&amp;productgroupid=1&amp;variantcode=at4035-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:480; -webkit-order:480; -moz-order:480; -ms-order:480">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at106" data-category="çiçek" href="/vazoda-mavi-suyun-icinde-beyaz-lilyumlar" tabindex="0" data-position="48">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="238">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at106-1/M/at106-1-8d714d12d8cd809-68a29cf.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at106-1/S/at106-1-8d714d12d8cd809-68a29cf.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at106-1/M/at106-1-8d714d12d8cd809-68a29cf.jpg 255w" alt="Lilyum Aranjmanı - Paşabahçe Vazoda" src="https://cdn03.ciceksepeti.com/cicek/at106-1/M/at106-1-8d714d12d8cd809-68a29cf.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at106-1/S/at106-1-8d714d12d8cd809-68a29cf.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at106-1/M/at106-1-8d714d12d8cd809-68a29cf.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Lilyum Aranjmanı - Paşabahçe Vazoda</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="49.99">
												<div class="price__left"> <span class="price__integer-value">49</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">14,37 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">14,37 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=238&amp;productgroupid=1&amp;variantcode=at106-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:490; -webkit-order:490; -moz-order:490; -ms-order:490">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at4129" data-category="çiçek" href="/gold-cizgili-vazoda-antoryum-ve-cikolata-at4129" tabindex="0" data-position="49">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4322708">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at4129-1/M/at4129-1-8d7b6d64b62d597-a340984c.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at4129-1/S/at4129-1-8d7b6d64b62d597-a340984c.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4129-1/M/at4129-1-8d7b6d64b62d597-a340984c.jpg 255w" alt="Gold Çizgili Vazoda Antoryum ve Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at4129-1/M/at4129-1-8d7b6d64b62d597-a340984c.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at4129-1/S/at4129-1-8d7b6d64b62d597-a340984c.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4129-1/M/at4129-1-8d7b6d64b62d597-a340984c.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Gold Çizgili Vazoda Antoryum ve Çikolata</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="99.99">
												<div class="price__left"> <span class="price__integer-value">99</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(232)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">28,74 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">28,74 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4322708&amp;productgroupid=1&amp;variantcode=at4129-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:500; -webkit-order:500; -moz-order:500; -ms-order:500">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3741" data-category="çiçek" href="/puantiyeli-vazoda-2-dal-beyaz-orkide-at3741" tabindex="0" data-position="50">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3391351">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3741-1/M/puantiyeli-vazoda-2-dal-beyaz-orkide-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3741-1/S/puantiyeli-vazoda-2-dal-beyaz-orkide-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3741-1/M/puantiyeli-vazoda-2-dal-beyaz-orkide-standart-boy.jpeg 255w" alt="Puantiyeli Vazoda 2 Dal Beyaz Orkide" src="https://cdn03.ciceksepeti.com/cicek/at3741-1/M/puantiyeli-vazoda-2-dal-beyaz-orkide-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3741-1/S/puantiyeli-vazoda-2-dal-beyaz-orkide-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3741-1/M/puantiyeli-vazoda-2-dal-beyaz-orkide-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Puantiyeli Vazoda 2 Dal Beyaz Orkide</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%17</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">109</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="89.99">
												<div class="price__left"> <span class="price__integer-value">89</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391351&amp;productgroupid=1&amp;variantcode=at3741-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:510; -webkit-order:510; -moz-order:510; -ms-order:510">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3702" data-category="çiçek" href="/kirmizi-kalpler-19lu-gul-aranjmani-ve-cikolata-at3702" tabindex="0" data-position="51">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3231667">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3702-1/M/kirmizi-kalpler-19lu-gul-aranjmani-ve-cikolata-at3702-1-8d6640f730707cf-ba819de4.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3702-1/S/kirmizi-kalpler-19lu-gul-aranjmani-ve-cikolata-at3702-1-8d6640f730707cf-ba819de4.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3702-1/M/kirmizi-kalpler-19lu-gul-aranjmani-ve-cikolata-at3702-1-8d6640f730707cf-ba819de4.jpg 255w" alt="Kırmızı Kalpler 19'lu Gül Aranjmanı ve Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at3702-1/M/kirmizi-kalpler-19lu-gul-aranjmani-ve-cikolata-at3702-1-8d6640f730707cf-ba819de4.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3702-1/S/kirmizi-kalpler-19lu-gul-aranjmani-ve-cikolata-at3702-1-8d6640f730707cf-ba819de4.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3702-1/M/kirmizi-kalpler-19lu-gul-aranjmani-ve-cikolata-at3702-1-8d6640f730707cf-ba819de4.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kırmızı Kalpler 19'lu Gül Aranjmanı ve Çikolata</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="109.00">
												<div class="price__left"> <span class="price__integer-value">109</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(395)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">31,33 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">31,33 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3231667&amp;productgroupid=1&amp;variantcode=at3702-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:520; -webkit-order:520; -moz-order:520; -ms-order:520">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3786" data-category="çiçek" href="/kisiye-ozel-sevimli-kutuda-kirmizi-gul-harf-aranjmani-at3786" tabindex="0" data-position="52">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3395287">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3786-1/M/kisiye-ozel-sevimli-kutuda-kirmizi-gul-harf-aranjmani-at3786-1-8d697ef8fc1e8b9-f2f46edb.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3786-1/S/kisiye-ozel-sevimli-kutuda-kirmizi-gul-harf-aranjmani-at3786-1-8d697ef8fc1e8b9-f2f46edb.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3786-1/M/kisiye-ozel-sevimli-kutuda-kirmizi-gul-harf-aranjmani-at3786-1-8d697ef8fc1e8b9-f2f46edb.jpg 255w" alt="Kişiye Özel Sevimli Kutuda Kırmızı Gül Harf Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3786-1/M/kisiye-ozel-sevimli-kutuda-kirmizi-gul-harf-aranjmani-at3786-1-8d697ef8fc1e8b9-f2f46edb.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3786-1/S/kisiye-ozel-sevimli-kutuda-kirmizi-gul-harf-aranjmani-at3786-1-8d697ef8fc1e8b9-f2f46edb.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3786-1/M/kisiye-ozel-sevimli-kutuda-kirmizi-gul-harf-aranjmani-at3786-1-8d697ef8fc1e8b9-f2f46edb.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Sevimli Kutuda Kırmızı Gül Harf Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%28</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">139</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="99.99">
												<div class="price__left"> <span class="price__integer-value">99</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(737)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">28,74 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">28,74 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3395287&amp;productgroupid=1&amp;variantcode=at3786-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:530; -webkit-order:530; -moz-order:530; -ms-order:530">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3467" data-category="çiçek" href="/kisiye-ozel-vazolu-karanfil-ve-beyaz-frezya-aranjmani-at3467" tabindex="0" data-position="53">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2321348">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3467-1/M/kisiye-ozel-vazolu-karanfil-ve-beyaz-frezya-aranjmani-at3467-1-8d46ae83cae212b-2dd67373.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3467-1/S/kisiye-ozel-vazolu-karanfil-ve-beyaz-frezya-aranjmani-at3467-1-8d46ae83cae212b-2dd67373.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3467-1/M/kisiye-ozel-vazolu-karanfil-ve-beyaz-frezya-aranjmani-at3467-1-8d46ae83cae212b-2dd67373.jpg 255w" alt="Kişiye Özel Vazolu Karanfil ve Beyaz Frezya Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3467-1/M/kisiye-ozel-vazolu-karanfil-ve-beyaz-frezya-aranjmani-at3467-1-8d46ae83cae212b-2dd67373.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3467-1/S/kisiye-ozel-vazolu-karanfil-ve-beyaz-frezya-aranjmani-at3467-1-8d46ae83cae212b-2dd67373.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3467-1/M/kisiye-ozel-vazolu-karanfil-ve-beyaz-frezya-aranjmani-at3467-1-8d46ae83cae212b-2dd67373.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Vazolu Karanfil ve Beyaz Frezya Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%29</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">69</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="49.99">
												<div class="price__left"> <span class="price__integer-value">49</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(423)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">14,37 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">14,37 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2321348&amp;productgroupid=1&amp;variantcode=at3467-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:540; -webkit-order:540; -moz-order:540; -ms-order:540">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3844" data-category="çiçek" href="/dogal-ahsap-kutukte-sari-frezyalar-at3844" tabindex="0" data-position="54">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3508648">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3844-1/M/dogal-ahsap-kutukte-sari-frezyalar-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3844-1/S/dogal-ahsap-kutukte-sari-frezyalar-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3844-1/M/dogal-ahsap-kutukte-sari-frezyalar-standart-boy.jpeg 255w" alt="Doğal Ahşap Kütükte Sarı Frezyalar" src="https://cdn03.ciceksepeti.com/cicek/at3844-1/M/dogal-ahsap-kutukte-sari-frezyalar-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3844-1/S/dogal-ahsap-kutukte-sari-frezyalar-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3844-1/M/dogal-ahsap-kutukte-sari-frezyalar-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Doğal Ahşap Kütükte Sarı Frezyalar</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%29</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">69</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="49.99">
												<div class="price__left"> <span class="price__integer-value">49</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(185)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">14,37 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">14,37 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3508648&amp;productgroupid=1&amp;variantcode=at3844-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:550; -webkit-order:550; -moz-order:550; -ms-order:550">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3776" data-category="çiçek" href="/sevimli-kutuda-beyaz-papatya-aranjmani-at3776" tabindex="0" data-position="55">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3391382">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3776-1/M/sevimli-kutuda-beyaz-papatya-aranjmani-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3776-1/S/sevimli-kutuda-beyaz-papatya-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3776-1/M/sevimli-kutuda-beyaz-papatya-aranjmani-standart-boy.jpeg 255w" alt="Sevimli Kutuda Beyaz Papatya Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3776-1/M/sevimli-kutuda-beyaz-papatya-aranjmani-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3776-1/S/sevimli-kutuda-beyaz-papatya-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3776-1/M/sevimli-kutuda-beyaz-papatya-aranjmani-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Sevimli Kutuda Beyaz Papatya Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="89.99">
												<div class="price__left"> <span class="price__integer-value">89</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(929)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391382&amp;productgroupid=1&amp;variantcode=at3776-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:560; -webkit-order:560; -moz-order:560; -ms-order:560">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3982" data-category="çiçek" href="/papatya-karnavali-at3982" tabindex="0" data-position="56">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4174310">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3982-1/M/papatya-karnavali-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3982-1/S/papatya-karnavali-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3982-1/M/papatya-karnavali-standart-boy.jpeg 255w" alt="Papatya Karnavalı" src="https://cdn03.ciceksepeti.com/cicek/at3982-1/M/papatya-karnavali-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3982-1/S/papatya-karnavali-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3982-1/M/papatya-karnavali-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Papatya Karnavalı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="44.99">
												<div class="price__left"> <span class="price__integer-value">44</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(717)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">12,93 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">12,93 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4174310&amp;productgroupid=1&amp;variantcode=at3982-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 570; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3466" data-category="çiçek" href="/kisiye-ozel-vazolu-karanfil-ve-frezya-aranjmani-at3466" tabindex="0" data-position="57">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2321347">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3466-1/M/kisiye-ozel-vazolu-karanfil-ve-frezya-aranjmani-at3466-1-8d46ae7e5634714-3174c698.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3466-1/S/kisiye-ozel-vazolu-karanfil-ve-frezya-aranjmani-at3466-1-8d46ae7e5634714-3174c698.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3466-1/M/kisiye-ozel-vazolu-karanfil-ve-frezya-aranjmani-at3466-1-8d46ae7e5634714-3174c698.jpg 255w" alt="Kişiye Özel Vazolu Karanfil ve Frezya Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3466-1/M/kisiye-ozel-vazolu-karanfil-ve-frezya-aranjmani-at3466-1-8d46ae7e5634714-3174c698.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3466-1/S/kisiye-ozel-vazolu-karanfil-ve-frezya-aranjmani-at3466-1-8d46ae7e5634714-3174c698.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3466-1/M/kisiye-ozel-vazolu-karanfil-ve-frezya-aranjmani-at3466-1-8d46ae7e5634714-3174c698.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Vazolu Karanfil ve Frezya Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="59.99">
												<div class="price__left"> <span class="price__integer-value">59</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(275)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">17,24 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">17,24 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2321347&amp;productgroupid=1&amp;variantcode=at3466-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:580; -webkit-order:580; -moz-order:580; -ms-order:580">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3665" data-category="çiçek" href="/damali-vazoda-2-dal-mor-orkide-cicegi-at3665" tabindex="0" data-position="58">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2853784">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3665-1/M/damali-vazoda-2-dal-mor-orkide-cicegi-at3665-1-8d6119105a96abc-c1df66a3.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3665-1/S/damali-vazoda-2-dal-mor-orkide-cicegi-at3665-1-8d6119105a96abc-c1df66a3.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3665-1/M/damali-vazoda-2-dal-mor-orkide-cicegi-at3665-1-8d6119105a96abc-c1df66a3.jpg 255w" alt="Damalı Vazoda 2 Dal Mor Orkide Çiçeği" src="https://cdn03.ciceksepeti.com/cicek/at3665-1/M/damali-vazoda-2-dal-mor-orkide-cicegi-at3665-1-8d6119105a96abc-c1df66a3.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3665-1/S/damali-vazoda-2-dal-mor-orkide-cicegi-at3665-1-8d6119105a96abc-c1df66a3.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3665-1/M/damali-vazoda-2-dal-mor-orkide-cicegi-at3665-1-8d6119105a96abc-c1df66a3.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Damalı Vazoda 2 Dal Mor Orkide Çiçeği</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="89.99">
												<div class="price__left"> <span class="price__integer-value">89</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(739)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2853784&amp;productgroupid=1&amp;variantcode=at3665-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:590; -webkit-order:590; -moz-order:590; -ms-order:590">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at404" data-category="çiçek" href="/60-kirmizi-gul" tabindex="0" data-position="59">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="583">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at404-1/M/cicek-sepeti-60-kirmizi-gul-ile-asklarin-en-buyugu-at404-1-8d64639b5186f42-734b0a7e.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at404-1/S/cicek-sepeti-60-kirmizi-gul-ile-asklarin-en-buyugu-at404-1-8d64639b5186f42-734b0a7e.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at404-1/M/cicek-sepeti-60-kirmizi-gul-ile-asklarin-en-buyugu-at404-1-8d64639b5186f42-734b0a7e.jpg 255w" alt="60 Kırmızı Gül ile Aşkların En Büyüğü" src="https://cdn03.ciceksepeti.com/cicek/at404-1/M/cicek-sepeti-60-kirmizi-gul-ile-asklarin-en-buyugu-at404-1-8d64639b5186f42-734b0a7e.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at404-1/S/cicek-sepeti-60-kirmizi-gul-ile-asklarin-en-buyugu-at404-1-8d64639b5186f42-734b0a7e.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at404-1/M/cicek-sepeti-60-kirmizi-gul-ile-asklarin-en-buyugu-at404-1-8d64639b5186f42-734b0a7e.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">60 Kırmızı Gül ile Aşkların En Büyüğü</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%11</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">189</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="169.00">
												<div class="price__left"> <span class="price__integer-value">169</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">48,58 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">48,58 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=583&amp;productgroupid=1&amp;variantcode=at404-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:600; -webkit-order:600; -moz-order:600; -ms-order:600">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3462" data-category="çiçek" href="/beyaz-papatyalar-ve-spesiyal-cikolata" tabindex="0" data-position="60">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2298986">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3462-1/M/beyaz-papatyalar-ve-spesiyal-cikolata-at3462-1-8d44ea37d4682d7-3beae7ee.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3462-1/S/beyaz-papatyalar-ve-spesiyal-cikolata-at3462-1-8d44ea37d4682d7-3beae7ee.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3462-1/M/beyaz-papatyalar-ve-spesiyal-cikolata-at3462-1-8d44ea37d4682d7-3beae7ee.jpg 255w" alt="Beyaz Papatyalar ve Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at3462-1/M/beyaz-papatyalar-ve-spesiyal-cikolata-at3462-1-8d44ea37d4682d7-3beae7ee.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3462-1/S/beyaz-papatyalar-ve-spesiyal-cikolata-at3462-1-8d44ea37d4682d7-3beae7ee.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3462-1/M/beyaz-papatyalar-ve-spesiyal-cikolata-at3462-1-8d44ea37d4682d7-3beae7ee.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Beyaz Papatyalar ve Çikolata</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="89.99">
												<div class="price__left"> <span class="price__integer-value">89</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="products-stars">
									<div class="products-stars__dropdown-evaluation">
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div>
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">25,87 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2298986&amp;productgroupid=1&amp;variantcode=at3462-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<input type="hidden" name="hasNextPage" value="True">
			</div>
			<div class="clearfix">
				<div class="pagination-area">
					<ul class="pagination">
						<li class="disabled"><a href="javascript:void(0)" rel="prev" data-ajaxfilter="" data-page="0"><span class="icon-left-arrow pagination__icon"></span>Önceki Sayfa</a>
						</li>
						<li class=" first-page active"><a data-ajaxfilter="?df=2007099" data-page="1" href="https://www.ciceksepeti.com/cicek">1</a>
						</li>
						<li class=""><a data-ajaxfilter="?df=2007099&amp;page=2" data-page="2" href="https://www.ciceksepeti.com/cicek?page=2">2</a>
						</li>
						<li class=""><a data-ajaxfilter="?df=2007099&amp;page=3" data-page="3" href="https://www.ciceksepeti.com/cicek?page=3">3</a>
						</li>
						<li class=""><a data-ajaxfilter="?df=2007099&amp;page=4" data-page="4" href="https://www.ciceksepeti.com/cicek?page=4">4</a>
						</li>
						<li class="disabled  pagination__dots"><a href="javascript:void(0)">...</a>
						</li>
						<li class="disabled"><a href="javascript:void(0)">200</a>
						</li>
						<li class=""><a href="https://www.ciceksepeti.com/cicek?page=2" rel="next" data-ajaxfilter="?df=2007099&amp;page=2" data-page="2">Sonraki Sayfa<span class="icon-right-arrow pagination__icon"></span></a>
						</li>
					</ul>
				</div>
				<div class="pagination-area-notext">
					<ul class="pagination">
						<li class="disabled"><a href="javascript:void(0)" rel="prev" data-ajaxfilter="" data-page="0"><span class="icon-left-arrow pagination__icon"></span>Önceki</a>
						</li>
						<li class=""><a href="https://www.ciceksepeti.com/cicek?page=2" rel="next" data-ajaxfilter="?df=2007099&amp;page=2" data-page="2">Sonraki<span class="icon-right-arrow pagination__icon"></span></a>
						</li>
					</ul>
				</div>
			</div>
			<input type="hidden" value="0" class="js-sending-reason-id-ajax">
		</div>
		<div class="hidden js-ani-category-lastvisitproduct-widget">{"CountryCode":"tur","Rule":{"RuleIdentities":[{"FieldName":"DeliveryTypes","IdentityList":["0"]}],"Variables":[{"Name":"Today","Value":"(Salı)"},{"Name":"Tomorrow","Value":"(Çarşamba)"},{"Name":"TimeThreshold","Value":"spt"},{"Name":"NowTimeSpan","Value":"18:55:29"}]}}</div>
		<div id="ani-lastVisitCategoryWidget"></div>
		<div class="hidden js-ani-categorysimilartolastvisit-widget">{"RegionIdList":[1500046494,1500046737,1500046760,1500046814,1500046918,1500046938,1500047027,1500047147,1500047158,1500047192,1500047324,0],"CountryCode":"tur","Rule":{"RuleIdentities":[{"FieldName":"DeliveryTypes","IdentityList":["0"]}],"Variables":[{"Name":"Today","Value":"(Salı)"},{"Name":"Tomorrow","Value":"(Çarşamba)"},{"Name":"TimeThreshold","Value":"spt"},{"Name":"NowTimeSpan","Value":"18:55:29"}]}}</div>
		<div id="ani-categorysimilartolastvisitWidget"></div>
	</div>
</main>

        <alt/>
    </div>
    
</template>



<script>
import Ust from './Ust.vue'
import Alt from './Alt.vue'
export default {
    name: 'Cicek',
    components:{
        Ust,
        Alt,
    },
    data () {
    return {
		open: false,
		open2:false,
		open3: false,
		open4: false,
		open5: false,
		open6: false,
		open7: false,
		open8: false,
		open9: false,
	};
  },
   methods:{
	drop(){
		  if(this.open==true)
		  {
			this.open=false;
			}else{
				  this.open=true;
				  this.open2=false;
				  this.open3=false;
				  this.open4=false;
				  this.open5=false;
				  this.open6=false;
				  this.open7=false;
				  this.open8=false;
				  this.open9=false;
				}
		},
		drop2(){
			if(this.open2==true)
			{
				this.open2=false;
			}else{
				this.open=false;
				this.open2=true;
				this.open3=false;
				this.open4=false;
				this.open5=false;
				this.open6=false;
				this.open7=false;
				this.open8=false;
				this.open9=false;
			}
		},
		drop3(){
		if(this.open3==true)
		{
			this.open3=false;
		}else{
			this.open=false;
			this.open2=false;
			this.open3=true;
			this.open4=false;
			this.open5=false;
			this.open6=false;
			this.open7=false;
			this.open8=false;
			this.open9=false;
			}
		},
		drop4(){
			if(this.open4==true)
			{
				this.open4=false;
			}else{
				this.open=false;
				this.open2=false;
				this.open3=false;
				this.open4=true;
				this.open5=false;
				this.open6=false;
				this.open7=false;
				this.open8=false;
				this.open9=false;
			}
		},
		drop5(){
			if(this.open5==true)
			{
				this.open5=false;
			}else{
				this.open=false;
				this.open2=false;
				this.open3=false;
				this.open4=false;
				this.open5=true;
				this.open6=false;
				this.open7=false;
				this.open8=false;
				this.open9=false;
			}
		},
		drop6(){
			if(this.open6==true)
			{
				this.open6=false;
			}else{
				this.open=false;
				this.open2=false;
				this.open3=false;
				this.open4=false;
				this.open5=false;
				this.open6=true;
				this.open7=false;
				this.open8=false;
				this.open9=false;
			}
		},
		drop7(){
			if(this.open7==true)
			{
				this.open7=false;
			}else{
				this.open=false;
				this.open2=false;
				this.open3=false;
				this.open4=false;
				this.open5=false;
				this.open6=false;
				this.open7=true;
				this.open8=false;
				this.open9=false;
			}
		},
		drop8(){
			if(this.open8==true)
			{
				this.open8=false;
			}else{
				this.open=false;
				this.open2=false;
				this.open3=false;
				this.open4=false;
				this.open5=false;
				this.open6=false;
				this.open7=false;
				this.open8=true;
				this.open9=false;
			}
		},
		drop9(){
			if(this.open9==true)
			{
				this.open9=false;
			}else{
				this.open=false;
				this.open2=false;
				this.open3=false;
				this.open4=false;
				this.open5=false;
				this.open6=false;
				this.open7=false;
				this.open8=false;
				this.open9=true;
			}
		},
  }
}
</script>