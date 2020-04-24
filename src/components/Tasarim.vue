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
									<input id="filter2000266_2007099" name="categoryRadio" data-val="true" data-id="df" data-value="2007099" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="radio" checked="" data-url="tum-urunler?df=2007218" data-ajaxfilter="?df=2007218" value="tum-urunler?df=2007218">
									<label class="filter__dropdown-label" for="filter2000266_2007099">Çiçek</label>
									<!--True-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000266_2007101" name="categoryRadio" data-val="true" data-id="df" data-value="2007101" data-hide="True" class="filter__dropdown-checkbox js-apply-filter" type="radio" data-url="tum-urunler?df=2007218,2007101" data-ajaxfilter="?df=2007218,2007101" value="tum-urunler?df=2007218,2007101">
									<label class="filter__dropdown-label" for="filter2000266_2007101">Hediye</label>
									<!--True-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop2' v-bind:class="{'open':open2}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
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
									<input id="filter2000267_2007110" data-val="true" data-id="df" data-value="2007110" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2007110" data-ajaxfilter="?df=2007218,2007099,2007110" value="tum-urunler?df=2007218,2007099,2007110">
									<label class="filter__dropdown-label" for="filter2000267_2007110">Bonsai</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2069055" data-val="true" data-id="df" data-value="2069055" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2069055" data-ajaxfilter="?df=2007218,2007099,2069055" value="tum-urunler?df=2007218,2007099,2069055">
									<label class="filter__dropdown-label" for="filter2000267_2069055">Kalanchoe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2069054" data-val="true" data-id="df" data-value="2069054" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2069054" data-ajaxfilter="?df=2007218,2007099,2069054" value="tum-urunler?df=2007218,2007099,2069054">
									<label class="filter__dropdown-label" for="filter2000267_2069054">Tillendsia</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2069053" data-val="true" data-id="df" data-value="2069053" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2069053" data-ajaxfilter="?df=2007218,2007099,2069053" value="tum-urunler?df=2007218,2007099,2069053">
									<label class="filter__dropdown-label" for="filter2000267_2069053">Chamadora</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007109" data-val="true" data-id="df" data-value="2007109" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="butik-cicekci-buketleri" data-ajaxfilter="?df=2007218,2007099,2007109" value="butik-cicekci-buketleri">
									<label class="filter__dropdown-label" for="filter2000267_2007109">Buket Çiçek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007277" data-val="true" data-id="df" data-value="2007277" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="dekoratif-cicekler" data-ajaxfilter="?df=2007218,2007277,2007099" value="dekoratif-cicekler">
									<label class="filter__dropdown-label" for="filter2000267_2007277">Dekoratif Çiçekler</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007122" data-val="true" data-id="df" data-value="2007122" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2007122" data-ajaxfilter="?df=2007218,2007099,2007122" value="tum-urunler?df=2007218,2007099,2007122">
									<label class="filter__dropdown-label" for="filter2000267_2007122">Frezya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007103" data-val="true" data-id="df" data-value="2007103" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="gullerin-dansi" data-ajaxfilter="?df=2007103,2007218,2007099" value="gullerin-dansi">
									<label class="filter__dropdown-label" for="filter2000267_2007103">Güller</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007112" data-val="true" data-id="df" data-value="2007112" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2007112" data-ajaxfilter="?df=2007218,2007099,2007112" value="tum-urunler?df=2007218,2007099,2007112">
									<label class="filter__dropdown-label" for="filter2000267_2007112">Kaktüs</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007117" data-val="true" data-id="df" data-value="2007117" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2007117" data-ajaxfilter="?df=2007218,2007099,2007117" value="tum-urunler?df=2007218,2007099,2007117">
									<label class="filter__dropdown-label" for="filter2000267_2007117">Karışık Aranjmanlar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007107" data-val="true" data-id="df" data-value="2007107" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2007107" data-ajaxfilter="?df=2007218,2007099,2007107" value="tum-urunler?df=2007218,2007099,2007107">
									<label class="filter__dropdown-label" for="filter2000267_2007107">Lilyum</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007216" data-val="true" data-id="df" data-value="2007216" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="minyatur-bahceler" data-ajaxfilter="?df=2007218,2007099,2007216" value="minyatur-bahceler">
									<label class="filter__dropdown-label" for="filter2000267_2007216">Minyatür Bahçeler</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007102" data-val="true" data-id="df" data-value="2007102" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="butik-orkide" data-ajaxfilter="?df=2007102,2007218,2007099" value="butik-orkide">
									<label class="filter__dropdown-label" for="filter2000267_2007102">Orkide</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2010689" data-val="true" data-id="df" data-value="2010689" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2010689" data-ajaxfilter="?df=2007218,2007099,2010689" value="tum-urunler?df=2007218,2007099,2010689">
									<label class="filter__dropdown-label" for="filter2000267_2010689">Şakayık</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007104" data-val="true" data-id="df" data-value="2007104" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2007104" data-ajaxfilter="?df=2007218,2007099,2007104" value="tum-urunler?df=2007218,2007099,2007104">
									<label class="filter__dropdown-label" for="filter2000267_2007104">Papatya - Gerbera</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007108" data-val="true" data-id="df" data-value="2007108" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2007108" data-ajaxfilter="?df=2007218,2007099,2007108" value="tum-urunler?df=2007218,2007099,2007108">
									<label class="filter__dropdown-label" for="filter2000267_2007108">Saksı Çiçek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2008793" data-val="true" data-id="df" data-value="2008793" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2008793" data-ajaxfilter="?df=2007218,2007099,2008793" value="tum-urunler?df=2007218,2007099,2008793">
									<label class="filter__dropdown-label" for="filter2000267_2008793">Sukulent</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007115" data-val="true" data-id="df" data-value="2007115" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2007115" data-ajaxfilter="?df=2007218,2007099,2007115" value="tum-urunler?df=2007218,2007099,2007115">
									<label class="filter__dropdown-label" for="filter2000267_2007115">Taraftar Çiçek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007111" data-val="true" data-id="df" data-value="2007111" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="butik-teraryumlar" data-ajaxfilter="?df=2007218,2007099,2007111" value="butik-teraryumlar">
									<label class="filter__dropdown-label" for="filter2000267_2007111">Teraryum</label>
									<!--False-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop3' v-bind:class="{'open':open3}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
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
									<input id="filter2000254_2006840" data-val="true" data-id="df" data-value="2006840" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006840" data-ajaxfilter="?df=2007218,2007099,2006840" value="tum-urunler?df=2007218,2007099,2006840">
									<label class="filter__dropdown-label" for="filter2000254_2006840">Açılış-Tören</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006821" data-val="true" data-id="df" data-value="2006821" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="dogum-gunu-butik-cicek" data-ajaxfilter="?df=2007218,2007099,2006821" value="dogum-gunu-butik-cicek">
									<label class="filter__dropdown-label" for="filter2000254_2006821">Doğum Günü</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2007193" data-val="true" data-id="df" data-value="2007193" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2007193" data-ajaxfilter="?df=2007218,2007099,2007193" value="tum-urunler?df=2007218,2007099,2007193">
									<label class="filter__dropdown-label" for="filter2000254_2007193">Geçmiş Olsun</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006828" data-val="true" data-id="df" data-value="2006828" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006828" data-ajaxfilter="?df=2007218,2007099,2006828" value="tum-urunler?df=2007218,2007099,2006828">
									<label class="filter__dropdown-label" for="filter2000254_2006828">İçimden Geldi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2010275" data-val="true" data-id="df" data-value="2010275" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2010275" data-ajaxfilter="?df=2007218,2007099,2010275" value="tum-urunler?df=2007218,2007099,2010275">
									<label class="filter__dropdown-label" for="filter2000254_2010275">Okula Dönüş</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006818" data-val="true" data-id="df" data-value="2006818" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006818" data-ajaxfilter="?df=2007218,2007099,2006818" value="tum-urunler?df=2007218,2007099,2006818">
									<label class="filter__dropdown-label" for="filter2000254_2006818">Özür Dilerim</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006827" data-val="true" data-id="df" data-value="2006827" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006827" data-ajaxfilter="?df=2007218,2007099,2006827" value="tum-urunler?df=2007218,2007099,2006827">
									<label class="filter__dropdown-label" for="filter2000254_2006827">Parti - Kutlama</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006816" data-val="true" data-id="df" data-value="2006816" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006816" data-ajaxfilter="?df=2007218,2007099,2006816" value="tum-urunler?df=2007218,2007099,2006816">
									<label class="filter__dropdown-label" for="filter2000254_2006816">Sevgili</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006839" data-val="true" data-id="df" data-value="2006839" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006839" data-ajaxfilter="?df=2007218,2007099,2006839" value="tum-urunler?df=2007218,2007099,2006839">
									<label class="filter__dropdown-label" for="filter2000254_2006839">Söz-Nişan- Düğün</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006820" data-val="true" data-id="df" data-value="2006820" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006820" data-ajaxfilter="?df=2007218,2007099,2006820" value="tum-urunler?df=2007218,2007099,2006820">
									<label class="filter__dropdown-label" for="filter2000254_2006820">Tebrik</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006834" data-val="true" data-id="df" data-value="2006834" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006834" data-ajaxfilter="?df=2007218,2007099,2006834" value="tum-urunler?df=2007218,2007099,2006834">
									<label class="filter__dropdown-label" for="filter2000254_2006834">Teşekkür Ederim</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006826" data-val="true" data-id="df" data-value="2006826" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006826" data-ajaxfilter="?df=2007218,2007099,2006826" value="tum-urunler?df=2007218,2007099,2006826">
									<label class="filter__dropdown-label" for="filter2000254_2006826">Yeni Bebek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006819" data-val="true" data-id="df" data-value="2006819" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006819" data-ajaxfilter="?df=2007218,2007099,2006819" value="tum-urunler?df=2007218,2007099,2006819">
									<label class="filter__dropdown-label" for="filter2000254_2006819">Yeni İş/Terfi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006817" data-val="true" data-id="df" data-value="2006817" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006817" data-ajaxfilter="?df=2007218,2007099,2006817" value="tum-urunler?df=2007218,2007099,2006817">
									<label class="filter__dropdown-label" for="filter2000254_2006817">Yıl Dönümü</label>
									<!--False-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop4' v-bind:class="{'open':open4}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
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
									<input id="filter2000256_2006847" data-val="true" data-id="df" data-value="2006847" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006847" data-ajaxfilter="?df=2007218,2007099,2006847" value="tum-urunler?df=2007218,2007099,2006847">
									<label class="filter__dropdown-label" for="filter2000256_2006847">Kadın</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2007326" data-val="true" data-id="df" data-value="2007326" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2007326" data-ajaxfilter="?df=2007218,2007099,2007326" value="tum-urunler?df=2007218,2007099,2007326">
									<label class="filter__dropdown-label" for="filter2000256_2007326">Unisex</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2006848" data-val="true" data-id="df" data-value="2006848" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006848" data-ajaxfilter="?df=2007218,2007099,2006848" value="tum-urunler?df=2007218,2007099,2006848">
									<label class="filter__dropdown-label" for="filter2000256_2006848">Erkek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2010781" data-val="true" data-id="df" data-value="2010781" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2010781" data-ajaxfilter="?df=2007218,2007099,2010781" value="tum-urunler?df=2007218,2007099,2010781">
									<label class="filter__dropdown-label" for="filter2000256_2010781">Erkek Bebek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2010782" data-val="true" data-id="df" data-value="2010782" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2010782" data-ajaxfilter="?df=2007218,2007099,2010782" value="tum-urunler?df=2007218,2007099,2010782">
									<label class="filter__dropdown-label" for="filter2000256_2010782">Kız Bebek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2010783" data-val="true" data-id="df" data-value="2010783" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2010783" data-ajaxfilter="?df=2007218,2007099,2010783" value="tum-urunler?df=2007218,2007099,2010783">
									<label class="filter__dropdown-label" for="filter2000256_2010783">Erkek Çocuk</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2010784" data-val="true" data-id="df" data-value="2010784" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2010784" data-ajaxfilter="?df=2007218,2007099,2010784" value="tum-urunler?df=2007218,2007099,2010784">
									<label class="filter__dropdown-label" for="filter2000256_2010784">Kız Çocuk</label>
									<!--False-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop5' v-bind:class="{'open':open5}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
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
									<input id="filter2000253_2006799" data-val="true" data-id="df" data-value="2006799" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006799" data-ajaxfilter="?df=2007218,2007099,2006799" value="tum-urunler?df=2007218,2007099,2006799">
									<label class="filter__dropdown-label" for="filter2000253_2006799">Anneye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006798" data-val="true" data-id="df" data-value="2006798" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006798" data-ajaxfilter="?df=2007218,2007099,2006798" value="tum-urunler?df=2007218,2007099,2006798">
									<label class="filter__dropdown-label" for="filter2000253_2006798">Arkadaşa</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006810" data-val="true" data-id="df" data-value="2006810" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006810" data-ajaxfilter="?df=2007218,2007099,2006810" value="tum-urunler?df=2007218,2007099,2006810">
									<label class="filter__dropdown-label" for="filter2000253_2006810">Avukata</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006800" data-val="true" data-id="df" data-value="2006800" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006800" data-ajaxfilter="?df=2007218,2007099,2006800" value="tum-urunler?df=2007218,2007099,2006800">
									<label class="filter__dropdown-label" for="filter2000253_2006800">Babaya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006802" data-val="true" data-id="df" data-value="2006802" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006802" data-ajaxfilter="?df=2007218,2007099,2006802" value="tum-urunler?df=2007218,2007099,2006802">
									<label class="filter__dropdown-label" for="filter2000253_2006802">Bebeğe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006803" data-val="true" data-id="df" data-value="2006803" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006803" data-ajaxfilter="?df=2007218,2007099,2006803" value="tum-urunler?df=2007218,2007099,2006803">
									<label class="filter__dropdown-label" for="filter2000253_2006803">Büyükanneye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006804" data-val="true" data-id="df" data-value="2006804" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006804" data-ajaxfilter="?df=2007218,2007099,2006804" value="tum-urunler?df=2007218,2007099,2006804">
									<label class="filter__dropdown-label" for="filter2000253_2006804">Büyükbabaya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006801" data-val="true" data-id="df" data-value="2006801" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006801" data-ajaxfilter="?df=2007218,2007099,2006801" value="tum-urunler?df=2007218,2007099,2006801">
									<label class="filter__dropdown-label" for="filter2000253_2006801">Çocuğa</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006815" data-val="true" data-id="df" data-value="2006815" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006815" data-ajaxfilter="?df=2007218,2007099,2006815" value="tum-urunler?df=2007218,2007099,2006815">
									<label class="filter__dropdown-label" for="filter2000253_2006815">Dayı-Amcaya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006812" data-val="true" data-id="df" data-value="2006812" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006812" data-ajaxfilter="?df=2007218,2007099,2006812" value="tum-urunler?df=2007218,2007099,2006812">
									<label class="filter__dropdown-label" for="filter2000253_2006812">Diş Hekimine</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006809" data-val="true" data-id="df" data-value="2006809" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006809" data-ajaxfilter="?df=2007218,2007099,2006809" value="tum-urunler?df=2007218,2007099,2006809">
									<label class="filter__dropdown-label" for="filter2000253_2006809">Doktora</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006805" data-val="true" data-id="df" data-value="2006805" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006805" data-ajaxfilter="?df=2007218,2007099,2006805" value="tum-urunler?df=2007218,2007099,2006805">
									<label class="filter__dropdown-label" for="filter2000253_2006805">Eşe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006808" data-val="true" data-id="df" data-value="2006808" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006808" data-ajaxfilter="?df=2007218,2007099,2006808" value="tum-urunler?df=2007218,2007099,2006808">
									<label class="filter__dropdown-label" for="filter2000253_2006808">Hemşireye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006806" data-val="true" data-id="df" data-value="2006806" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006806" data-ajaxfilter="?df=2007218,2007099,2006806" value="tum-urunler?df=2007218,2007099,2006806">
									<label class="filter__dropdown-label" for="filter2000253_2006806">İş Arkadaşına</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006797" data-val="true" data-id="df" data-value="2006797" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006797" data-ajaxfilter="?df=2007218,2007099,2006797" value="tum-urunler?df=2007218,2007099,2006797">
									<label class="filter__dropdown-label" for="filter2000253_2006797">Kardeşe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2007192" data-val="true" data-id="df" data-value="2007192" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2007192" data-ajaxfilter="?df=2007218,2007099,2007192" value="tum-urunler?df=2007218,2007099,2007192">
									<label class="filter__dropdown-label" for="filter2000253_2007192">Kendime</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006813" data-val="true" data-id="df" data-value="2006813" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006813" data-ajaxfilter="?df=2007218,2007099,2006813" value="tum-urunler?df=2007218,2007099,2006813">
									<label class="filter__dropdown-label" for="filter2000253_2006813">Mühendise</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006811" data-val="true" data-id="df" data-value="2006811" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006811" data-ajaxfilter="?df=2007218,2007099,2006811" value="tum-urunler?df=2007218,2007099,2006811">
									<label class="filter__dropdown-label" for="filter2000253_2006811">Öğretmene</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2007316" data-val="true" data-id="df" data-value="2007316" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2007316" data-ajaxfilter="?df=2007218,2007099,2007316" value="tum-urunler?df=2007218,2007099,2007316">
									<label class="filter__dropdown-label" for="filter2000253_2007316">Polis</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006796" data-val="true" data-id="df" data-value="2006796" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006796" data-ajaxfilter="?df=2007218,2007099,2006796" value="tum-urunler?df=2007218,2007099,2006796">
									<label class="filter__dropdown-label" for="filter2000253_2006796">Sevgiliye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006814" data-val="true" data-id="df" data-value="2006814" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006814" data-ajaxfilter="?df=2007218,2007099,2006814" value="tum-urunler?df=2007218,2007099,2006814">
									<label class="filter__dropdown-label" for="filter2000253_2006814">Teyze-Halaya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006807" data-val="true" data-id="df" data-value="2006807" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2006807" data-ajaxfilter="?df=2007218,2007099,2006807" value="tum-urunler?df=2007218,2007099,2006807">
									<label class="filter__dropdown-label" for="filter2000253_2006807">Yöneticiye</label>
									<!--False-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop6' v-bind:class="{'open':open6}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
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
									<input id="filter10_151" data-val="true" data-id="df" data-value="151" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,151" data-ajaxfilter="?df=2007218,2007099,151" value="tum-urunler?df=2007218,2007099,151">
									<label class="filter__dropdown-label" for="filter10_151">Beyaz</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_2010794" data-val="true" data-id="df" data-value="2010794" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2010794" data-ajaxfilter="?df=2007218,2007099,2010794" value="tum-urunler?df=2007218,2007099,2010794">
									<label class="filter__dropdown-label" for="filter10_2010794">Bej</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_155" data-val="true" data-id="df" data-value="155" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,155" data-ajaxfilter="?df=2007218,2007099,155" value="tum-urunler?df=2007218,2007099,155">
									<label class="filter__dropdown-label" for="filter10_155">Gri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_157" data-val="true" data-id="df" data-value="157" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,157" data-ajaxfilter="?df=2007218,2007099,157" value="tum-urunler?df=2007218,2007099,157">
									<label class="filter__dropdown-label" for="filter10_157">Kahverengi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_158" data-val="true" data-id="df" data-value="158" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,158" data-ajaxfilter="?df=2007218,2007099,158" value="tum-urunler?df=2007218,2007099,158">
									<label class="filter__dropdown-label" for="filter10_158">Kırmızı</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_166" data-val="true" data-id="df" data-value="166" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,166" data-ajaxfilter="?df=2007218,2007099,166" value="tum-urunler?df=2007218,2007099,166">
									<label class="filter__dropdown-label" for="filter10_166">Mavi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_2007325" data-val="true" data-id="df" data-value="2007325" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,2007325" data-ajaxfilter="?df=2007218,2007099,2007325" value="tum-urunler?df=2007218,2007099,2007325">
									<label class="filter__dropdown-label" for="filter10_2007325">Mix</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_167" data-val="true" data-id="df" data-value="167" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,167" data-ajaxfilter="?df=2007218,2007099,167" value="tum-urunler?df=2007218,2007099,167">
									<label class="filter__dropdown-label" for="filter10_167">Mor</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_168" data-val="true" data-id="df" data-value="168" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,168" data-ajaxfilter="?df=2007218,2007099,168" value="tum-urunler?df=2007218,2007099,168">
									<label class="filter__dropdown-label" for="filter10_168">Pembe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_171" data-val="true" data-id="df" data-value="171" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,171" data-ajaxfilter="?df=2007218,2007099,171" value="tum-urunler?df=2007218,2007099,171">
									<label class="filter__dropdown-label" for="filter10_171">Sarı</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_172" data-val="true" data-id="df" data-value="172" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,172" data-ajaxfilter="?df=2007218,2007099,172" value="tum-urunler?df=2007218,2007099,172">
									<label class="filter__dropdown-label" for="filter10_172">Siyah</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_176" data-val="true" data-id="df" data-value="176" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,176" data-ajaxfilter="?df=2007218,2007099,176" value="tum-urunler?df=2007218,2007099,176">
									<label class="filter__dropdown-label" for="filter10_176">Turuncu</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_178" data-val="true" data-id="df" data-value="178" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007218,2007099,178" data-ajaxfilter="?df=2007218,2007099,178" value="tum-urunler?df=2007218,2007099,178">
									<label class="filter__dropdown-label" for="filter10_178">Yeşil</label>
									<!--False-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop7' v-bind:class="{'open':open7}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
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
									<input id="filter23_1" data-val="true" data-id="priceId" data-value="1" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="butik-cicekciler?priceId=1" data-ajaxfilter="?priceId=1&amp;df=2007218,2007099" value="butik-cicekciler?priceId=1">
									<label class="filter__dropdown-label" for="filter23_1">0-50 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_2" data-val="true" data-id="priceId" data-value="2" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="butik-cicekciler?priceId=2" data-ajaxfilter="?priceId=2&amp;df=2007218,2007099" value="butik-cicekciler?priceId=2">
									<label class="filter__dropdown-label" for="filter23_2">50-100 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_3" data-val="true" data-id="priceId" data-value="3" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="butik-cicekciler?priceId=3" data-ajaxfilter="?priceId=3&amp;df=2007218,2007099" value="butik-cicekciler?priceId=3">
									<label class="filter__dropdown-label" for="filter23_3">100-150 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_4" data-val="true" data-id="priceId" data-value="4" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="butik-cicekciler?priceId=4" data-ajaxfilter="?priceId=4&amp;df=2007218,2007099" value="butik-cicekciler?priceId=4">
									<label class="filter__dropdown-label" for="filter23_4">150-200 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_5" data-val="true" data-id="priceId" data-value="5" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="butik-cicekciler?priceId=5" data-ajaxfilter="?priceId=5&amp;df=2007218,2007099" value="butik-cicekciler?priceId=5">
									<label class="filter__dropdown-label" for="filter23_5">200-250 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_6" data-val="true" data-id="priceId" data-value="6" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="butik-cicekciler?priceId=6" data-ajaxfilter="?priceId=6&amp;df=2007218,2007099" value="butik-cicekciler?priceId=6">
									<label class="filter__dropdown-label" for="filter23_6">250-500 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_7" data-val="true" data-id="priceId" data-value="7" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="butik-cicekciler?priceId=7" data-ajaxfilter="?priceId=7&amp;df=2007218,2007099" value="butik-cicekciler?priceId=7">
									<label class="filter__dropdown-label" for="filter23_7">500-1000 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_8" data-val="true" data-id="priceId" data-value="8" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="butik-cicekciler?priceId=8" data-ajaxfilter="?priceId=8&amp;df=2007218,2007099" value="butik-cicekciler?priceId=8">
									<label class="filter__dropdown-label" for="filter23_8">1000- TL</label>
									<!--False-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop8' v-bind:class="{'open':open8}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
                    		Sıralama
                    		<span class="filter__icon-right-sort icon-sort  js-add-caret"></span>
                			</a>
							<ul class="dropdown-menu filter__dropdown">
								<li class="filter__dropdown-list">
									<input class="filter__dropdown-checkbox js-sort-products" type="radio" checked="" data-url="butik-cicekciler?orderby=1" data-ajaxfilter="?df=2007218,2007099&amp;orderby=1" data-id="orderby" data-value="1" id="1" name="sortRadio">
									<label class="filter__dropdown-label" for="1">Çok Satılana Göre</label>
								</li>
								<li class="filter__dropdown-list">
									<input class="filter__dropdown-checkbox js-sort-products" type="radio" data-url="butik-cicekciler?orderby=2" data-ajaxfilter="?df=2007218,2007099&amp;orderby=2" data-id="orderby" data-value="2" id="2" name="sortRadio">
									<label class="filter__dropdown-label" for="2">Pahalıdan Ucuza</label>
								</li>
								<li class="filter__dropdown-list">
									<input class="filter__dropdown-checkbox js-sort-products" type="radio" data-url="butik-cicekciler?orderby=3" data-ajaxfilter="?df=2007218,2007099&amp;orderby=3" data-id="orderby" data-value="3" id="3" name="sortRadio">
									<label class="filter__dropdown-label" for="3">Ucuzdan Pahalıya</label>
								</li>
							</ul>
							</div>
						<div class="filter__item  filter__item--checkbox">
							<input class="filter__checkbox js-apply-filter" id="check_24" data-ajaxfilter="?sameday=1&amp;df=2007218,2007099" data-value="1" data-id="sameday" data-url="butik-cicekciler?sameday=1" type="checkbox">
							<label class="filter__label" for="check_24">Aynı Gün</label>
						</div>
						<div class="filter__item  filter__item--checkbox">
							<input class="filter__checkbox js-apply-filter" id="check_2000271" data-ajaxfilter="?df=2007099" data-value="2007218" data-id="df" checked="" data-url="cicek" type="checkbox">
							<label class="filter__label" for="check_2000271">Tasarım Çiçekleri</label>
						</div>
						<div class="filter__item  filter__item--checkbox">
							<input class="filter__checkbox js-apply-filter" id="check_2000272" data-ajaxfilter="?df=2007099,2007218,2007217" data-value="2007217" data-id="df" data-url="kisiye-ozel-butik-cicekler" type="checkbox">
							<label class="filter__label" for="check_2000272">Kişiye Özel</label>
						</div>
					</div>
				</div>
				<div class="sticky-filter-button js-sticky-filter-button is-sticky">
					<button class="btn btn-lg btn-success js-apply-filter-button">Sonuçları Göster</button>
				</div>
			</div>
			<ul class="category-order js-tag-list is-visible">
				<li class="category-order__filter filter__selected js-tags-area"> <a class="filter__selected-tag js-filter-tag" href="javascript:void(0)" data-url="tum-urunler?df=2007218" data-ajaxfilter="?df=2007218">
                    Çiçek
                    <span class="icon-close filter__selected-tag-icon" data-url="tum-urunler?df=2007218" data-ajaxfilter="?df=2007218"></span>
                </a>
					<a class="filter__selected-tag js-filter-tag" href="javascript:void(0)" data-url="cicek" data-ajaxfilter="?df=2007099">
                    Tasarım Çiçekleri
                    <span class="icon-close filter__selected-tag-icon" data-url="cicek" data-ajaxfilter="?df=2007099"></span>
                </a>
				</li>
				<li class="category-order__filter js-clean-filter"> <span class="is-hidden filter__ellipsis">...</span>
					<a class="filter__clean-btn" href="/tum-urunler">Temizle</a>
				</li>
				<li class="category-order__text">6775 ürün bulundu.</li>
			</ul>
			<div class="featured">
				<div class="featured">
					<div class="main-banner__row">
						<div class="main-banner__col main-banner__col--1">
							<a class="main-banner__link" href="/cok-satan-tasarim-cicekler" title="">
								<img alt="indirimli-butik-cicekler" class="main-banner__image" src="//cdn03.ciceksepeti.com/slider/580x416-tasarımçiçek-anabanner637206695451895763.jpg">
							</a>
						</div>
						<div class="main-banner__col main-banner__col--2">
							<div class="main-banner__col-inner">
								<div class="main-banner__col-inner-col">
									<a class="main-banner__link" href="/butik-teraryumlar" title="">
										<img alt="groot" class="main-banner__image" height="180" src="//cdn03.ciceksepeti.com/slider/M-280x198-teraryum637193668241635194.jpg" width="255">
									</a>
								</div>
								<div class="main-banner__col-inner-col">
									<a class="main-banner__link" href="/bonsai" title="">
										<img alt="sukulent" class="main-banner__image" height="180" src="//cdn03.ciceksepeti.com/slider/M-280x198-bonsai637193669349666841.jpg" width="255">
									</a>
								</div>
							</div>
						</div>
						<div class="main-banner__col main-banner__col--3">
							<div class="main-banner__col-inner">
								<div class="main-banner__col-inner-col">
									<a class="main-banner__link" href="/kutuda-guller" title="">
										<img alt="hobbit" class="main-banner__image" height="180" src="//cdn03.ciceksepeti.com/slider/M-280x198-KUTUdagul637193668703160340.jpg" width="255">
									</a>
								</div>
								<div class="main-banner__col-inner-col">
									<a class="main-banner__link" href="/butik-orkide" title="">
										<img alt="Tasarım Teraryum" class="main-banner__image" height="180" src="//cdn03.ciceksepeti.com/slider/M-280x198-tasarimorkide637193669469581538.jpg" width="255">
									</a>
								</div>
								<div class="main-banner__col-inner-col">
									<a class="main-banner__link main-banner__optional-banner" href="/butik-cicekci-buketleri" title="">
										<img alt="" class="main-banner__image" height="180" src="https://cdn03.ciceksepeti.com/editor/image/buketler-s-183510.jpg" width="255">
									</a>
								</div>
							</div>
						</div>
						<div class="main-banner__col main-banner__col--4">
							<a class="main-banner__link" href="/butik-cicekci-buketleri" title="">
								<img alt="bonsai" class="main-banner__image" height="180" src="//cdn03.ciceksepeti.com/slider/M-280x198-buket637193669814326566.jpg" width="255">
							</a>
							<a class="main-banner__link" href="/tum-urunler?df=2007218,2007099,2007117" title="">
								<img alt="yan-yana-bir-omur" class="main-banner__image" height="180" src="//cdn03.ciceksepeti.com/slider/M-280x198-karisikaranjman637193669884745694.jpg" width="255">
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="products products--category">
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order:10; -webkit-order:10; -moz-order:10; -ms-order:10">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via210" data-category="çiçek" href="/mini-cift-dalahsap-saksida-mor-orkide-via210" tabindex="0" data-position="1">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3022100">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via210-1/M/mini-cift-dalahsap-saksida-mor-orkide-via210-1-8d6128a39d43596-7469cba4.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via210-1/S/mini-cift-dalahsap-saksida-mor-orkide-via210-1-8d6128a39d43596-7469cba4.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via210-1/M/mini-cift-dalahsap-saksida-mor-orkide-via210-1-8d6128a39d43596-7469cba4.jpg 255w" alt="Doğal Ahşap Saksıda Mini Mor Orkide" src="https://cdn03.ciceksepeti.com/cicek/via210-1/M/mini-cift-dalahsap-saksida-mor-orkide-via210-1-8d6128a39d43596-7469cba4.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via210-1/S/mini-cift-dalahsap-saksida-mor-orkide-via210-1-8d6128a39d43596-7469cba4.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via210-1/M/mini-cift-dalahsap-saksida-mor-orkide-via210-1-8d6128a39d43596-7469cba4.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Doğal Ahşap Saksıda Mini Mor Orkide</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 20; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via209" data-category="çiçek" href="/mini-cift-dal-mor-orkide-via209" tabindex="0" data-position="2">
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
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
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
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order:30; -webkit-order:30; -moz-order:30; -ms-order:30">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3583" data-category="çiçek" href="/premium-kutuda-9lu-kirmizi-gul-at3583" tabindex="0" data-position="3">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2787614">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3583-1/M/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3583-1/S/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3583-1/M/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg 255w" alt="Premium Kutuda 9'lu Kırmızı Gül" src="https://cdn03.ciceksepeti.com/cicek/at3583-1/M/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3583-1/S/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3583-1/M/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Premium Kutuda 9'lu Kırmızı Gül</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2787614&amp;productgroupid=1&amp;variantcode=at3583-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order:40; -webkit-order:40; -moz-order:40; -ms-order:40">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at2920" data-category="çiçek" href="/mutluluk-kutusu-cicek-aranjmani-at2920" tabindex="0" data-position="4">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2202667">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at2920-1/M/mutluluk-kutusu-at2920-1-636149066333279461.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at2920-1/S/mutluluk-kutusu-at2920-1-636149066333279461.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2920-1/M/mutluluk-kutusu-at2920-1-636149066333279461.jpg 255w" alt="Mutluluk Kutusu" src="https://cdn03.ciceksepeti.com/cicek/at2920-1/M/mutluluk-kutusu-at2920-1-636149066333279461.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at2920-1/S/mutluluk-kutusu-at2920-1-636149066333279461.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2920-1/M/mutluluk-kutusu-at2920-1-636149066333279461.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Mutluluk Kutusu</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 50; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3655" data-category="çiçek" href="/blooming-love-at3655" tabindex="0" data-position="5">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2830046">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3655-1/M/blooming-love-at3655-1-8d6463bccadfba8-2822d140.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3655-1/S/blooming-love-at3655-1-8d6463bccadfba8-2822d140.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3655-1/M/blooming-love-at3655-1-8d6463bccadfba8-2822d140.jpg 255w" alt="Blooming Love 20 Kırmızı Gül" src="https://cdn03.ciceksepeti.com/cicek/at3655-1/M/blooming-love-at3655-1-8d6463bccadfba8-2822d140.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3655-1/S/blooming-love-at3655-1-8d6463bccadfba8-2822d140.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3655-1/M/blooming-love-at3655-1-8d6463bccadfba8-2822d140.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Blooming Love 20 Kırmızı Gül</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order:60; -webkit-order:60; -moz-order:60; -ms-order:60">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3844" data-category="çiçek" href="/dogal-ahsap-kutukte-sari-frezyalar-at3844" tabindex="0" data-position="6">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3508648">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3844-1/M/dogal-ahsap-kutukte-sari-frezyalar-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3844-1/S/dogal-ahsap-kutukte-sari-frezyalar-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3844-1/M/dogal-ahsap-kutukte-sari-frezyalar-standart-boy.jpeg 255w" alt="Doğal Ahşap Kütükte Sarı Frezyalar" src="https://cdn03.ciceksepeti.com/cicek/at3844-1/M/dogal-ahsap-kutukte-sari-frezyalar-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3844-1/S/dogal-ahsap-kutukte-sari-frezyalar-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3844-1/M/dogal-ahsap-kutukte-sari-frezyalar-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Doğal Ahşap Kütükte Sarı Frezyalar</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(253)</span>
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
				<div class="products__item js-category-item-hover  " style="order:70; -webkit-order:70; -moz-order:70; -ms-order:70">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via144" data-category="çiçek" href="/kisiye-ozel-askin-bas-harfi-kirmizi-gul-aranjmani-via144" tabindex="0" data-position="7">
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
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%7</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">139</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="129.00">
												<div class="price__left"> <span class="price__integer-value">129</span>
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
									<p class="products__installment products__installment--responsive">37,08 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">37,08 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2247923&amp;productgroupid=1&amp;variantcode=via144-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:80; -webkit-order:80; -moz-order:80; -ms-order:80">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via273" data-category="çiçek" href="/cam-fanusta-2-dal-beyaz-orkide-cicegi-via273" tabindex="0" data-position="8">
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
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
				<div class="products__item js-category-item-hover  " style="order:90; -webkit-order:90; -moz-order:90; -ms-order:90">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3843" data-category="çiçek" href="/dogal-ahsap-kutukte-beyaz-frezyalar-at3843" tabindex="0" data-position="9">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3508647">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3843-1/M/dogal-ahsap-kutukte-beyaz-frezyalar-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3843-1/S/dogal-ahsap-kutukte-beyaz-frezyalar-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3843-1/M/dogal-ahsap-kutukte-beyaz-frezyalar-standart-boy.jpeg 255w" alt="Doğal Ahşap Kütükte Beyaz Frezyalar" src="https://cdn03.ciceksepeti.com/cicek/at3843-1/M/dogal-ahsap-kutukte-beyaz-frezyalar-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3843-1/S/dogal-ahsap-kutukte-beyaz-frezyalar-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3843-1/M/dogal-ahsap-kutukte-beyaz-frezyalar-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Doğal Ahşap Kütükte Beyaz Frezyalar</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(228)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3508647&amp;productgroupid=1&amp;variantcode=at3843-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:100; -webkit-order:100; -moz-order:100; -ms-order:100">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3776" data-category="çiçek" href="/sevimli-kutuda-beyaz-papatya-aranjmani-at3776" tabindex="0" data-position="10">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3391382">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3776-1/M/sevimli-kutuda-beyaz-papatya-aranjmani-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3776-1/S/sevimli-kutuda-beyaz-papatya-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3776-1/M/sevimli-kutuda-beyaz-papatya-aranjmani-standart-boy.jpeg 255w" alt="Sevimli Kutuda Beyaz Papatya Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3776-1/M/sevimli-kutuda-beyaz-papatya-aranjmani-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3776-1/S/sevimli-kutuda-beyaz-papatya-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3776-1/M/sevimli-kutuda-beyaz-papatya-aranjmani-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Sevimli Kutuda Beyaz Papatya Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(996)</span>
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
				<div class="products__item js-category-item-hover" style="order: 110; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3792" data-category="çiçek" href="/ozel-kutusunda-beyaz-papatya-aranjmani-at3792" tabindex="0" data-position="11">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3431372">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3792-1/M/ozel-kutusunda-beyaz-papatya-aranjmani-at3792-1-8d6a0b64633c1d4-23b67fa5.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3792-1/S/ozel-kutusunda-beyaz-papatya-aranjmani-at3792-1-8d6a0b64633c1d4-23b67fa5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3792-1/M/ozel-kutusunda-beyaz-papatya-aranjmani-at3792-1-8d6a0b64633c1d4-23b67fa5.jpg 255w" alt="Özel Kutusunda Beyaz Papatya Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3792-1/M/ozel-kutusunda-beyaz-papatya-aranjmani-at3792-1-8d6a0b64633c1d4-23b67fa5.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3792-1/S/ozel-kutusunda-beyaz-papatya-aranjmani-at3792-1-8d6a0b64633c1d4-23b67fa5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3792-1/M/ozel-kutusunda-beyaz-papatya-aranjmani-at3792-1-8d6a0b64633c1d4-23b67fa5.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Özel Kutusunda Beyaz Papatya Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(894)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3431372&amp;productgroupid=1&amp;variantcode=at3792-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:120; -webkit-order:120; -moz-order:120; -ms-order:120">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via247" data-category="çiçek" href="/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-via247" tabindex="0" data-position="12">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3391407">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via247-1/M/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via247-1/S/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/via247-1/M/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg 255w" alt="Kişiye Özel İncili Pembe Kutuda Lila Gül Harf Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/via247-1/M/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/via247-1/S/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/via247-1/M/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel İncili Pembe Kutuda Lila Gül Harf Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(578)</span>
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
				<div class="products__item js-category-item-hover  " style="order:130; -webkit-order:130; -moz-order:130; -ms-order:130">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3585" data-category="çiçek" href="/premium-kutuda-papatya-bahcesi-at3585" tabindex="0" data-position="13">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2787616">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3585-1/M/premium-kutuda-papatya-bahcesi-at3585-1-8d6118a6f8fc7bd-80aa21b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3585-1/S/premium-kutuda-papatya-bahcesi-at3585-1-8d6118a6f8fc7bd-80aa21b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3585-1/M/premium-kutuda-papatya-bahcesi-at3585-1-8d6118a6f8fc7bd-80aa21b.jpg 255w" alt="Premium Kutuda Papatya Bahçesi" src="https://cdn03.ciceksepeti.com/cicek/at3585-1/M/premium-kutuda-papatya-bahcesi-at3585-1-8d6118a6f8fc7bd-80aa21b.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3585-1/S/premium-kutuda-papatya-bahcesi-at3585-1-8d6118a6f8fc7bd-80aa21b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3585-1/M/premium-kutuda-papatya-bahcesi-at3585-1-8d6118a6f8fc7bd-80aa21b.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Premium Kutuda Papatya Bahçesi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%8</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">64</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2787616&amp;productgroupid=1&amp;variantcode=at3585-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 140; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via277" data-category="çiçek" href="/akvaryum-fanusta-bonsai-teraryum-via277" tabindex="0" data-position="14">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3827038">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via277-1/M/via277-1-8d7198e03a8e938-e161deb6.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via277-1/S/via277-1-8d7198e03a8e938-e161deb6.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via277-1/M/via277-1-8d7198e03a8e938-e161deb6.jpg 255w" alt="Akvaryum Fanusta Bonsai Teraryum" src="https://cdn03.ciceksepeti.com/cicek/via277-1/M/via277-1-8d7198e03a8e938-e161deb6.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via277-1/S/via277-1-8d7198e03a8e938-e161deb6.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via277-1/M/via277-1-8d7198e03a8e938-e161deb6.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Akvaryum Fanusta Bonsai Teraryum</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(595)</span>
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
				<div class="products__item js-category-item-hover  " style="order:150; -webkit-order:150; -moz-order:150; -ms-order:150">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via271" data-category="çiçek" href="/lkbahar-kokulu-mutluluk-kutusu-via271" tabindex="0" data-position="15">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3508667">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via271-1/M/lkbahar-kokulu-mutluluk-kutusu-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via271-1/S/lkbahar-kokulu-mutluluk-kutusu-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/via271-1/M/lkbahar-kokulu-mutluluk-kutusu-standart-boy.jpeg 255w" alt="İlkbahar Kokulu Mutluluk Kutusu" src="https://cdn03.ciceksepeti.com/cicek/via271-1/M/lkbahar-kokulu-mutluluk-kutusu-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/via271-1/S/lkbahar-kokulu-mutluluk-kutusu-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/via271-1/M/lkbahar-kokulu-mutluluk-kutusu-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">İlkbahar Kokulu Mutluluk Kutusu</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(125)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3508667&amp;productgroupid=1&amp;variantcode=via271-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:160; -webkit-order:160; -moz-order:160; -ms-order:160">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3184" data-category="çiçek" href="/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184" tabindex="0" data-position="16">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2235131">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3184-1/S/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 255w" alt="Yeni Umutlar Gerbera ve Beyaz Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3184-1/S/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Yeni Umutlar Gerbera ve Beyaz Gül Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(769)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2235131&amp;productgroupid=1&amp;variantcode=at3184-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 170; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3657" data-category="çiçek" href="/rose-elegance-at3657" tabindex="0" data-position="17">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2830048">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3657-1/M/rose-elegance-at3657-1-8d6463ce517c824-cf599aaf.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3657-1/S/rose-elegance-at3657-1-8d6463ce517c824-cf599aaf.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3657-1/M/rose-elegance-at3657-1-8d6463ce517c824-cf599aaf.jpg 255w" alt="Rose Elegance 10 Kırmızı ve 10 Beyaz Gül" src="https://cdn03.ciceksepeti.com/cicek/at3657-1/M/rose-elegance-at3657-1-8d6463ce517c824-cf599aaf.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3657-1/S/rose-elegance-at3657-1-8d6463ce517c824-cf599aaf.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3657-1/M/rose-elegance-at3657-1-8d6463ce517c824-cf599aaf.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Rose Elegance 10 Kırmızı ve 10 Beyaz Gül</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%24</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">119</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(325)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2830048&amp;productgroupid=1&amp;variantcode=at3657-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:180; -webkit-order:180; -moz-order:180; -ms-order:180">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3841" data-category="çiçek" href="/akvaryum-vazoda-orkideler-at3841" tabindex="0" data-position="18">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3431420">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3841-1/M/akvaryum-vazoda-orkideler-at3841-1-8d6a0cbb5b88402-71058423.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3841-1/S/akvaryum-vazoda-orkideler-at3841-1-8d6a0cbb5b88402-71058423.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3841-1/M/akvaryum-vazoda-orkideler-at3841-1-8d6a0cbb5b88402-71058423.jpg 255w" alt="Akvaryum Vazoda Orkideler" src="https://cdn03.ciceksepeti.com/cicek/at3841-1/M/akvaryum-vazoda-orkideler-at3841-1-8d6a0cbb5b88402-71058423.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3841-1/S/akvaryum-vazoda-orkideler-at3841-1-8d6a0cbb5b88402-71058423.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3841-1/M/akvaryum-vazoda-orkideler-at3841-1-8d6a0cbb5b88402-71058423.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Akvaryum Vazoda Orkideler</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%14</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">49</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,98 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="42.99">
												<div class="price__left"> <span class="price__integer-value">42</span>
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
									<p class="products__installment products__installment--responsive">12,35 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">12,35 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3431420&amp;productgroupid=1&amp;variantcode=at3841-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:190; -webkit-order:190; -moz-order:190; -ms-order:190">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via272" data-category="çiçek" href="/cam-fanusta-2-dal-mor-orkide-cicegi-via272" tabindex="0" data-position="19">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3508668">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via272-1/M/via272-1-8d6fa3962926e53-bedae7a5.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via272-1/S/via272-1-8d6fa3962926e53-bedae7a5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via272-1/M/via272-1-8d6fa3962926e53-bedae7a5.jpg 255w" alt="Cam Fanusta 2 Dal Mor Orkide Çiçeği" src="https://cdn03.ciceksepeti.com/cicek/via272-1/M/via272-1-8d6fa3962926e53-bedae7a5.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via272-1/S/via272-1-8d6fa3962926e53-bedae7a5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via272-1/M/via272-1-8d6fa3962926e53-bedae7a5.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Cam Fanusta 2 Dal Mor Orkide Çiçeği</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%10</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">99</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
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
										</div> <span class="products-stars__review-count">(716)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3508668&amp;productgroupid=1&amp;variantcode=via272-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 200; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3589" data-category="çiçek" href="/premium-kutuda-12lu-kirmizi-gul-at3589" tabindex="0" data-position="20">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2787620">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3589-1/M/premium-kutuda-12lu-kirmizi-gul-at3589-1-8d611bc862754f6-1b601282.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3589-1/S/premium-kutuda-12lu-kirmizi-gul-at3589-1-8d611bc862754f6-1b601282.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3589-1/M/premium-kutuda-12lu-kirmizi-gul-at3589-1-8d611bc862754f6-1b601282.jpg 255w" alt="Premium Kutuda 12'li Kırmızı Gül" src="https://cdn03.ciceksepeti.com/cicek/at3589-1/M/premium-kutuda-12lu-kirmizi-gul-at3589-1-8d611bc862754f6-1b601282.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3589-1/S/premium-kutuda-12lu-kirmizi-gul-at3589-1-8d611bc862754f6-1b601282.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3589-1/M/premium-kutuda-12lu-kirmizi-gul-at3589-1-8d611bc862754f6-1b601282.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Premium Kutuda 12'li Kırmızı Gül</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2787620&amp;productgroupid=1&amp;variantcode=at3589-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:210; -webkit-order:210; -moz-order:210; -ms-order:210">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="sbat4068" data-category="çiçek" href="/mix-valley-renkli-papatyalar-sbat4068" tabindex="0" data-position="21">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4404138">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/sbat4068-1/M/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/sbat4068-1/S/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg 186w,https://cdn03.ciceksepeti.com/cicek/sbat4068-1/M/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg 255w" alt="Mix Valley" src="https://cdn03.ciceksepeti.com/cicek/sbat4068-1/M/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/sbat4068-1/S/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg 186w,https://cdn03.ciceksepeti.com/cicek/sbat4068-1/M/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Mix Valley</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%14</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">34</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="29.99">
												<div class="price__left"> <span class="price__integer-value">29</span>
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
										</div> <span class="products-stars__review-count">(85)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4404138&amp;productgroupid=1&amp;variantcode=sbat4068-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:220; -webkit-order:220; -moz-order:220; -ms-order:220">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3797" data-category="çiçek" href="/ozel-kutusunda-7li-kirmizi-gul-aranjmani-at3797" tabindex="0" data-position="22">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3431377">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3797-1/M/ozel-kutusunda-7li-kirmizi-gul-aranjmani-at3797-1-8d6a0b8a301f8cb-453ee26c.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3797-1/S/ozel-kutusunda-7li-kirmizi-gul-aranjmani-at3797-1-8d6a0b8a301f8cb-453ee26c.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3797-1/M/ozel-kutusunda-7li-kirmizi-gul-aranjmani-at3797-1-8d6a0b8a301f8cb-453ee26c.jpg 255w" alt="Özel Kutusunda 7'li Kırmızı Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3797-1/M/ozel-kutusunda-7li-kirmizi-gul-aranjmani-at3797-1-8d6a0b8a301f8cb-453ee26c.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3797-1/S/ozel-kutusunda-7li-kirmizi-gul-aranjmani-at3797-1-8d6a0b8a301f8cb-453ee26c.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3797-1/M/ozel-kutusunda-7li-kirmizi-gul-aranjmani-at3797-1-8d6a0b8a301f8cb-453ee26c.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Özel Kutusunda 7'li Kırmızı Gül Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(295)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3431377&amp;productgroupid=1&amp;variantcode=at3797-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 230; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via163" data-category="çiçek" href="/amor-via163" tabindex="0" data-position="23">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2327925">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via163-1/M/amor-via163-1-8d4767f91017dc8-b7137389.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via163-1/S/amor-via163-1-8d4767f91017dc8-b7137389.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via163-1/M/amor-via163-1-8d4767f91017dc8-b7137389.jpg 255w" alt="Kutuda 16 Kırmızı Gül Amor" src="https://cdn03.ciceksepeti.com/cicek/via163-1/M/amor-via163-1-8d4767f91017dc8-b7137389.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via163-1/S/amor-via163-1-8d4767f91017dc8-b7137389.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via163-1/M/amor-via163-1-8d4767f91017dc8-b7137389.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Kutuda 16 Kırmızı Gül Amor</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(473)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2327925&amp;productgroupid=1&amp;variantcode=via163-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:240; -webkit-order:240; -moz-order:240; -ms-order:240">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="kc731304" data-category="çiçek" href="/porto-kc731304" tabindex="0" data-position="24">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2220641">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/kc731304-1/M/porto--kc731304-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc731304-1/S/porto--kc731304-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc731304-1/M/porto--kc731304-1-1.jpg 255w" alt="Porto" src="https://cdn03.ciceksepeti.com/cicek/kc731304-1/M/porto--kc731304-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc731304-1/S/porto--kc731304-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc731304-1/M/porto--kc731304-1-1.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Porto</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%13</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">149</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="129.00">
												<div class="price__left"> <span class="price__integer-value">129</span>
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
										</div> <span class="products-stars__review-count">(437)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">37,08 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">37,08 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2220641&amp;productgroupid=1&amp;variantcode=kc731304-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:250; -webkit-order:250; -moz-order:250; -ms-order:250">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at4059" data-category="çiçek" href="/red-marvelous-at4059-1" tabindex="0" data-position="25">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4281233">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at4059-1/M/at4059-1-8d7a304b7a35bd5-e471a3d1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at4059-1/S/at4059-1-8d7a304b7a35bd5-e471a3d1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4059-1/M/at4059-1-8d7a304b7a35bd5-e471a3d1.jpg 255w" alt="Red Marvelous 5 Kırmızı Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at4059-1/M/at4059-1-8d7a304b7a35bd5-e471a3d1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at4059-1/S/at4059-1-8d7a304b7a35bd5-e471a3d1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4059-1/M/at4059-1-8d7a304b7a35bd5-e471a3d1.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Red Marvelous 5 Kırmızı Gül Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%22</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">44</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(187)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">10,05 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">10,05 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4281233&amp;productgroupid=1&amp;variantcode=at4059-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 260; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via176" data-category="çiçek" href="/moondust-via176" tabindex="0" data-position="26">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2493189">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via176-1/M/moondust-via176-1-8d538c8e977fdb3-ac0e34a2.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via176-1/S/moondust-via176-1-8d538c8e977fdb3-ac0e34a2.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via176-1/M/moondust-via176-1-8d538c8e977fdb3-ac0e34a2.jpg 255w" alt="Doğal Ahşap Saksıda 7 Beyaz Gül Moondust" src="https://cdn03.ciceksepeti.com/cicek/via176-1/M/moondust-via176-1-8d538c8e977fdb3-ac0e34a2.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via176-1/S/moondust-via176-1-8d538c8e977fdb3-ac0e34a2.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via176-1/M/moondust-via176-1-8d538c8e977fdb3-ac0e34a2.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Doğal Ahşap Saksıda 7 Beyaz Gül Moondust</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%7</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">69</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2493189&amp;productgroupid=1&amp;variantcode=via176-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:270; -webkit-order:270; -moz-order:270; -ms-order:270">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3738" data-category="çiçek" href="/gold-cizgili-vazoda-tek-dal-orkide-cicegi-at3738" tabindex="0" data-position="27">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3391348">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3738-1/M/gold-cizgili-vazoda-tek-dal-orkide-cicegi-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3738-1/S/gold-cizgili-vazoda-tek-dal-orkide-cicegi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3738-1/M/gold-cizgili-vazoda-tek-dal-orkide-cicegi-standart-boy.jpeg 255w" alt="Gold Çizgili Vazoda Tek Dal Orkide Çiçeği" src="https://cdn03.ciceksepeti.com/cicek/at3738-1/M/gold-cizgili-vazoda-tek-dal-orkide-cicegi-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3738-1/S/gold-cizgili-vazoda-tek-dal-orkide-cicegi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3738-1/M/gold-cizgili-vazoda-tek-dal-orkide-cicegi-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Gold Çizgili Vazoda Tek Dal Orkide Çiçeği</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(310)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391348&amp;productgroupid=1&amp;variantcode=at3738-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:280; -webkit-order:280; -moz-order:280; -ms-order:280">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3753" data-category="çiçek" href="/puantiyeli-vazoda-2-dal-beyaz-orkide-ve-beyaz-papatyalar-at3753" tabindex="0" data-position="28">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3391363">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3753-1/M/puantiyeli-vazoda-2-dal-beyaz-orkide-ve-beyaz-papatyalar-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3753-1/S/puantiyeli-vazoda-2-dal-beyaz-orkide-ve-beyaz-papatyalar-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3753-1/M/puantiyeli-vazoda-2-dal-beyaz-orkide-ve-beyaz-papatyalar-standart-boy.jpeg 255w" alt="Puantiyeli Vazoda 2 Dal Beyaz Orkide ve Beyaz Papatyalar" src="https://cdn03.ciceksepeti.com/cicek/at3753-1/M/puantiyeli-vazoda-2-dal-beyaz-orkide-ve-beyaz-papatyalar-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3753-1/S/puantiyeli-vazoda-2-dal-beyaz-orkide-ve-beyaz-papatyalar-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3753-1/M/puantiyeli-vazoda-2-dal-beyaz-orkide-ve-beyaz-papatyalar-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Puantiyeli Vazoda 2 Dal Beyaz Orkide ve Beyaz Papatyalar</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%22</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">139</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
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
										</div> <span class="products-stars__review-count">(558)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391363&amp;productgroupid=1&amp;variantcode=at3753-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 290; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3803" data-category="çiçek" href="/ozel-kutusunda-gold-cizgili-vazoda-beyaz-papatya-aranjmani-at3803" tabindex="0" data-position="29">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3431382">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3803-1/M/ozel-kutusunda-gold-cizgili-vazoda-beyaz-papatya-aranjmani-at3803-1-8d6a0bab68e99ed-be5adf91.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3803-1/S/ozel-kutusunda-gold-cizgili-vazoda-beyaz-papatya-aranjmani-at3803-1-8d6a0bab68e99ed-be5adf91.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3803-1/M/ozel-kutusunda-gold-cizgili-vazoda-beyaz-papatya-aranjmani-at3803-1-8d6a0bab68e99ed-be5adf91.jpg 255w" alt="Özel Kutusunda Gold Çizgili Vazoda Beyaz Papatya Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3803-1/M/ozel-kutusunda-gold-cizgili-vazoda-beyaz-papatya-aranjmani-at3803-1-8d6a0bab68e99ed-be5adf91.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3803-1/S/ozel-kutusunda-gold-cizgili-vazoda-beyaz-papatya-aranjmani-at3803-1-8d6a0bab68e99ed-be5adf91.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3803-1/M/ozel-kutusunda-gold-cizgili-vazoda-beyaz-papatya-aranjmani-at3803-1-8d6a0bab68e99ed-be5adf91.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Özel Kutusunda Gold Çizgili Vazoda Beyaz Papatya Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%11</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">89</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,90 TL</span>
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
										</div> <span class="products-stars__review-count">(261)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3431382&amp;productgroupid=1&amp;variantcode=at3803-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:300; -webkit-order:300; -moz-order:300; -ms-order:300">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via212" data-category="çiçek" href="/mor-mini-orkide-huzur-bahcesi-teraryum-via212" tabindex="0" data-position="30">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3030572">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via212-1/M/via212-1-8d71a60b39782c0-1370bdc4.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via212-1/S/via212-1-8d71a60b39782c0-1370bdc4.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via212-1/M/via212-1-8d71a60b39782c0-1370bdc4.jpg 255w" alt="Mor Mini Orkide Huzur Bahçesi Teraryum" src="https://cdn03.ciceksepeti.com/cicek/via212-1/M/via212-1-8d71a60b39782c0-1370bdc4.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via212-1/S/via212-1-8d71a60b39782c0-1370bdc4.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via212-1/M/via212-1-8d71a60b39782c0-1370bdc4.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Mor Mini Orkide Huzur Bahçesi Teraryum</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%6</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">159</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="149.00">
												<div class="price__left"> <span class="price__integer-value">149</span>
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
										</div> <span class="products-stars__review-count">(698)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">42,83 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">42,83 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3030572&amp;productgroupid=1&amp;variantcode=via212-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:310; -webkit-order:310; -moz-order:310; -ms-order:310">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via238" data-category="çiçek" href="/incili-pembe-kutuda-20li-lila-gul-via238" tabindex="0" data-position="31">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3391397">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via238-1/M/via238-1-8d6be8ccce4a494-42bbf34.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via238-1/S/via238-1-8d6be8ccce4a494-42bbf34.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via238-1/M/via238-1-8d6be8ccce4a494-42bbf34.jpg 255w" alt="İncili Pembe Kutuda 20'li Lila Gül" src="https://cdn03.ciceksepeti.com/cicek/via238-1/M/via238-1-8d6be8ccce4a494-42bbf34.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via238-1/S/via238-1-8d6be8ccce4a494-42bbf34.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via238-1/M/via238-1-8d6be8ccce4a494-42bbf34.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">İncili Pembe Kutuda 20'li Lila Gül</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(861)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391397&amp;productgroupid=1&amp;variantcode=via238-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 320; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via204" data-category="çiçek" href="/ozel-kutusunda-renk-cumbusu-gul-ve-lilyum-bahcesi-via204" tabindex="0" data-position="32">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2551741">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via204-1/M/ozel-kutusunda-renk-cumbusu-gul-ve-lilyum-bahcesi-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via204-1/S/ozel-kutusunda-renk-cumbusu-gul-ve-lilyum-bahcesi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/via204-1/M/ozel-kutusunda-renk-cumbusu-gul-ve-lilyum-bahcesi-standart-boy.jpeg 255w" alt="Özel Kutusunda Renk Cümbüşü Gül ve Lilyum Bahçesi" src="https://cdn03.ciceksepeti.com/cicek/via204-1/M/ozel-kutusunda-renk-cumbusu-gul-ve-lilyum-bahcesi-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/via204-1/S/ozel-kutusunda-renk-cumbusu-gul-ve-lilyum-bahcesi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/via204-1/M/ozel-kutusunda-renk-cumbusu-gul-ve-lilyum-bahcesi-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Özel Kutusunda Renk Cümbüşü Gül ve Lilyum Bahçesi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
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
										</div> <span class="products-stars__review-count">(232)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2551741&amp;productgroupid=1&amp;variantcode=via204-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:330; -webkit-order:330; -moz-order:330; -ms-order:330">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via166" data-category="çiçek" href="/angel-via166" tabindex="0" data-position="33">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2327928">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via166-1/M/angel-via166-1-8d47680b39c5807-597a29bd.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via166-1/S/angel-via166-1-8d47680b39c5807-597a29bd.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via166-1/M/angel-via166-1-8d47680b39c5807-597a29bd.jpg 255w" alt="Angel" src="https://cdn03.ciceksepeti.com/cicek/via166-1/M/angel-via166-1-8d47680b39c5807-597a29bd.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via166-1/S/angel-via166-1-8d47680b39c5807-597a29bd.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via166-1/M/angel-via166-1-8d47680b39c5807-597a29bd.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Angel</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(220)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2327928&amp;productgroupid=1&amp;variantcode=via166-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:340; -webkit-order:340; -moz-order:340; -ms-order:340">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via284" data-category="çiçek" href="/vazoda-cardak-gul-ve-bicme-aranjmani-via284" tabindex="0" data-position="34">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3827040">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via284-1/M/via284-1-8d7198e2f9b80a2-9037c5f9.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via284-1/S/via284-1-8d7198e2f9b80a2-9037c5f9.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via284-1/M/via284-1-8d7198e2f9b80a2-9037c5f9.jpg 255w" alt="Vazoda Çardak Gül Ve Biçme Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/via284-1/M/via284-1-8d7198e2f9b80a2-9037c5f9.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via284-1/S/via284-1-8d7198e2f9b80a2-9037c5f9.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via284-1/M/via284-1-8d7198e2f9b80a2-9037c5f9.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Vazoda Çardak Gül Ve Biçme Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(229)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3827040&amp;productgroupid=1&amp;variantcode=via284-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 350; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via148" data-category="çiçek" href="/ayicikli-kisiye-ozel-askin-bas-harfi-kirmizi-gul-aranjmani-via148" tabindex="0" data-position="35">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2255755">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via148-1/M/ayicikli-kisiye-ozel-askin-bas-harfi-kirmizi-gul-aranjmani-via148-1-8d41aaa897cd011-e322df75.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via148-1/S/ayicikli-kisiye-ozel-askin-bas-harfi-kirmizi-gul-aranjmani-via148-1-8d41aaa897cd011-e322df75.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via148-1/M/ayicikli-kisiye-ozel-askin-bas-harfi-kirmizi-gul-aranjmani-via148-1-8d41aaa897cd011-e322df75.jpg 255w" alt="Ayıcıklı Kişiye Özel Aşkın Baş Harfi Kırmızı Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/via148-1/M/ayicikli-kisiye-ozel-askin-bas-harfi-kirmizi-gul-aranjmani-via148-1-8d41aaa897cd011-e322df75.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via148-1/S/ayicikli-kisiye-ozel-askin-bas-harfi-kirmizi-gul-aranjmani-via148-1-8d41aaa897cd011-e322df75.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via148-1/M/ayicikli-kisiye-ozel-askin-bas-harfi-kirmizi-gul-aranjmani-via148-1-8d41aaa897cd011-e322df75.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Ayıcıklı Kişiye Özel Aşkın Baş Harfi Kırmızı Gül Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%12</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">169</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="149.00">
												<div class="price__left"> <span class="price__integer-value">149</span>
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
										</div> <span class="products-stars__review-count">(751)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">42,83 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">42,83 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2255755&amp;productgroupid=1&amp;variantcode=via148-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:360; -webkit-order:360; -moz-order:360; -ms-order:360">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via215" data-category="çiçek" href="/anna-marica-via215" tabindex="0" data-position="36">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3227337">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via215-1/M/anna-marica-via215-1-8d663a30e982b3a-9aff8f0f.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via215-1/S/anna-marica-via215-1-8d663a30e982b3a-9aff8f0f.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via215-1/M/anna-marica-via215-1-8d663a30e982b3a-9aff8f0f.jpg 255w" alt="Anna Marica" src="https://cdn03.ciceksepeti.com/cicek/via215-1/M/anna-marica-via215-1-8d663a30e982b3a-9aff8f0f.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via215-1/S/anna-marica-via215-1-8d663a30e982b3a-9aff8f0f.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via215-1/M/anna-marica-via215-1-8d663a30e982b3a-9aff8f0f.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Anna Marica</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="149.00">
												<div class="price__left"> <span class="price__integer-value">149</span>
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
										</div> <span class="products-stars__review-count">(217)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">42,83 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">42,83 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3227337&amp;productgroupid=1&amp;variantcode=via215-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:370; -webkit-order:370; -moz-order:370; -ms-order:370">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at2823" data-category="çiçek" href="/kirmizi-gul-tasiyan-romantik-ayicik-at2823" tabindex="0" data-position="37">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2193941">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at2823-1/M/kirmizi-gul-tasiyan-romantik-ayicik-at2823-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at2823-1/S/kirmizi-gul-tasiyan-romantik-ayicik-at2823-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2823-1/M/kirmizi-gul-tasiyan-romantik-ayicik-at2823-1-1.jpg 255w" alt="41 Gül Tutan 100cm Sevimli Ayıcık" src="https://cdn03.ciceksepeti.com/cicek/at2823-1/M/kirmizi-gul-tasiyan-romantik-ayicik-at2823-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at2823-1/S/kirmizi-gul-tasiyan-romantik-ayicik-at2823-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2823-1/M/kirmizi-gul-tasiyan-romantik-ayicik-at2823-1-1.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">41 Gül Tutan 100cm Sevimli Ayıcık</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%17</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">239</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="199.00">
												<div class="price__left"> <span class="price__integer-value">199</span>
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
										</div> <span class="products-stars__review-count">(297)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">57,21 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">57,21 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2193941&amp;productgroupid=1&amp;variantcode=at2823-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 380; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at2918" data-category="çiçek" href="/ask-kirmizisi-vip-cicek-aranjmani-at2918" tabindex="0" data-position="38">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2202654">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at2918-1/M/ask-kirmizisi-at2918-1-636149066261405971.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at2918-1/S/ask-kirmizisi-at2918-1-636149066261405971.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2918-1/M/ask-kirmizisi-at2918-1-636149066261405971.jpg 255w" alt="16 Aşk Kırmızısı Kutuda Gül" src="https://cdn03.ciceksepeti.com/cicek/at2918-1/M/ask-kirmizisi-at2918-1-636149066261405971.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at2918-1/S/ask-kirmizisi-at2918-1-636149066261405971.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2918-1/M/ask-kirmizisi-at2918-1-636149066261405971.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">16 Aşk Kırmızısı Kutuda Gül</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%30</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">129</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(448)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2202654&amp;productgroupid=1&amp;variantcode=at2918-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:390; -webkit-order:390; -moz-order:390; -ms-order:390">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via145" data-category="çiçek" href="/kisiye-ozel-askin-bas-harfi-beyaz-gul-aranjmani-via145" tabindex="0" data-position="39">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2247924">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via145-1/M/kisiye-ozel-askin-bas-harfi-beyaz-gul-aranjmani-via145-1-8d4017595220a67-a0b807e3.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via145-1/S/kisiye-ozel-askin-bas-harfi-beyaz-gul-aranjmani-via145-1-8d4017595220a67-a0b807e3.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via145-1/M/kisiye-ozel-askin-bas-harfi-beyaz-gul-aranjmani-via145-1-8d4017595220a67-a0b807e3.jpg 255w" alt="Kişiye Özel Aşkın Baş Harfi Beyaz Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/via145-1/M/kisiye-ozel-askin-bas-harfi-beyaz-gul-aranjmani-via145-1-8d4017595220a67-a0b807e3.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via145-1/S/kisiye-ozel-askin-bas-harfi-beyaz-gul-aranjmani-via145-1-8d4017595220a67-a0b807e3.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via145-1/M/kisiye-ozel-askin-bas-harfi-beyaz-gul-aranjmani-via145-1-8d4017595220a67-a0b807e3.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Aşkın Baş Harfi Beyaz Gül Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%24</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">169</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="129.00">
												<div class="price__left"> <span class="price__integer-value">129</span>
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
										</div> <span class="products-stars__review-count">(177)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">37,08 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">37,08 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2247924&amp;productgroupid=1&amp;variantcode=via145-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:400; -webkit-order:400; -moz-order:400; -ms-order:400">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3846" data-category="çiçek" href="/kutukte-renkli-frezyalar-ve-husnuyusuf-at3846" tabindex="0" data-position="40">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3508650">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3846-1/M/kutukte-renkli-frezyalar-ve-husnuyusuf-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3846-1/S/kutukte-renkli-frezyalar-ve-husnuyusuf-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3846-1/M/kutukte-renkli-frezyalar-ve-husnuyusuf-standart-boy.jpeg 255w" alt="Kütükte Renkli Frezyalar ve Hüsnüyusuf" src="https://cdn03.ciceksepeti.com/cicek/at3846-1/M/kutukte-renkli-frezyalar-ve-husnuyusuf-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3846-1/S/kutukte-renkli-frezyalar-ve-husnuyusuf-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3846-1/M/kutukte-renkli-frezyalar-ve-husnuyusuf-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kütükte Renkli Frezyalar ve Hüsnüyusuf</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(65)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3508650&amp;productgroupid=1&amp;variantcode=at3846-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 410; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3840" data-category="çiçek" href="/akvaryum-vazoda-orkideler-at3840" tabindex="0" data-position="41">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3431419">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3840-1/M/akvaryum-vazoda-orkideler-at3840-1-8d6a0cb8d2b6f76-ef50b587.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3840-1/S/akvaryum-vazoda-orkideler-at3840-1-8d6a0cb8d2b6f76-ef50b587.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3840-1/M/akvaryum-vazoda-orkideler-at3840-1-8d6a0cb8d2b6f76-ef50b587.jpg 255w" alt="Akvaryum Vazoda Orkideler" src="https://cdn03.ciceksepeti.com/cicek/at3840-1/M/akvaryum-vazoda-orkideler-at3840-1-8d6a0cb8d2b6f76-ef50b587.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3840-1/S/akvaryum-vazoda-orkideler-at3840-1-8d6a0cb8d2b6f76-ef50b587.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3840-1/M/akvaryum-vazoda-orkideler-at3840-1-8d6a0cb8d2b6f76-ef50b587.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Akvaryum Vazoda Orkideler</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(717)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3431419&amp;productgroupid=1&amp;variantcode=at3840-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:420; -webkit-order:420; -moz-order:420; -ms-order:420">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via267" data-category="çiçek" href="/gold-cizgili-vazoda-karisik-cardak-gul-aranjmani-via267" tabindex="0" data-position="42">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3473434">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via267-1/M/via267-1-8d76e7953ccba6e-58015706.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via267-1/S/via267-1-8d76e7953ccba6e-58015706.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via267-1/M/via267-1-8d76e7953ccba6e-58015706.jpg 255w" alt="Gold Çizgili Vazoda Karışık Çardak Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/via267-1/M/via267-1-8d76e7953ccba6e-58015706.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via267-1/S/via267-1-8d76e7953ccba6e-58015706.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via267-1/M/via267-1-8d76e7953ccba6e-58015706.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Gold Çizgili Vazoda Karışık Çardak Gül Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(174)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3473434&amp;productgroupid=1&amp;variantcode=via267-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:430; -webkit-order:430; -moz-order:430; -ms-order:430">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via213" data-category="çiçek" href="/bonsai-bahce-teraryum-via213" tabindex="0" data-position="43">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3030573">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via213-1/M/via213-1-8d71a608b1be528-7fda4562.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via213-1/S/via213-1-8d71a608b1be528-7fda4562.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via213-1/M/via213-1-8d71a608b1be528-7fda4562.jpg 255w" alt="Bonsai Bahçe Teraryum" src="https://cdn03.ciceksepeti.com/cicek/via213-1/M/via213-1-8d71a608b1be528-7fda4562.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via213-1/S/via213-1-8d71a608b1be528-7fda4562.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via213-1/M/via213-1-8d71a608b1be528-7fda4562.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Bonsai Bahçe Teraryum</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="149.00">
												<div class="price__left"> <span class="price__integer-value">149</span>
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
										</div> <span class="products-stars__review-count">(573)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">42,83 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">42,83 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3030573&amp;productgroupid=1&amp;variantcode=via213-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 440; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3765" data-category="çiçek" href="/gold-cizgili-vazoda-beyaz-papatya-aranjmani-at3765" tabindex="0" data-position="44">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3391376">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3765-1/M/gold-cizgili-vazoda-beyaz-papatya-aranjmani-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3765-1/S/gold-cizgili-vazoda-beyaz-papatya-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3765-1/M/gold-cizgili-vazoda-beyaz-papatya-aranjmani-standart-boy.jpeg 255w" alt="Gold Çizgili Vazoda Beyaz Papatya Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3765-1/M/gold-cizgili-vazoda-beyaz-papatya-aranjmani-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3765-1/S/gold-cizgili-vazoda-beyaz-papatya-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3765-1/M/gold-cizgili-vazoda-beyaz-papatya-aranjmani-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Gold Çizgili Vazoda Beyaz Papatya Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(200)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391376&amp;productgroupid=1&amp;variantcode=at3765-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 450; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via141" data-category="çiçek" href="/margherita-via141" tabindex="0" data-position="45">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2248712">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via141-1/M/margherita-10-dal-mor-orkide-via141-1-8d43bda9c556c08-8f92982e.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via141-1/S/margherita-10-dal-mor-orkide-via141-1-8d43bda9c556c08-8f92982e.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via141-1/M/margherita-10-dal-mor-orkide-via141-1-8d43bda9c556c08-8f92982e.jpg 255w" alt="Margherita 10 Dal Mor Orkide" src="https://cdn03.ciceksepeti.com/cicek/via141-1/M/margherita-10-dal-mor-orkide-via141-1-8d43bda9c556c08-8f92982e.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via141-1/S/margherita-10-dal-mor-orkide-via141-1-8d43bda9c556c08-8f92982e.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via141-1/M/margherita-10-dal-mor-orkide-via141-1-8d43bda9c556c08-8f92982e.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Margherita 10 Dal Mor Orkide</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%33</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">449</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="299.00">
												<div class="price__left"> <span class="price__integer-value">299</span>
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
										</div> <span class="products-stars__review-count">(155)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">85,96 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">85,96 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2248712&amp;productgroupid=1&amp;variantcode=via141-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:460; -webkit-order:460; -moz-order:460; -ms-order:460">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3845" data-category="çiçek" href="/kutukte-renkli-frezyalar-at3845" tabindex="0" data-position="46">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3508649">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3845-1/M/kutukte-renkli-frezyalar-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3845-1/S/kutukte-renkli-frezyalar-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3845-1/M/kutukte-renkli-frezyalar-standart-boy.jpeg 255w" alt="Kütükte Renkli Frezyalar" src="https://cdn03.ciceksepeti.com/cicek/at3845-1/M/kutukte-renkli-frezyalar-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3845-1/S/kutukte-renkli-frezyalar-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3845-1/M/kutukte-renkli-frezyalar-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kütükte Renkli Frezyalar</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(41)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3508649&amp;productgroupid=1&amp;variantcode=at3845-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 470; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via253" data-category="çiçek" href="/incili-pembe-kutuda-karisik-gul-aranjmani-via253" tabindex="0" data-position="47">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3391413">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via253-1/M/via253-1-8d6c4c42b345e2a-10805e77.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via253-1/S/via253-1-8d6c4c42b345e2a-10805e77.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via253-1/M/via253-1-8d6c4c42b345e2a-10805e77.jpg 255w" alt="İncili Pembe Kutuda Karışık Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/via253-1/M/via253-1-8d6c4c42b345e2a-10805e77.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via253-1/S/via253-1-8d6c4c42b345e2a-10805e77.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via253-1/M/via253-1-8d6c4c42b345e2a-10805e77.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">İncili Pembe Kutuda Karışık Gül Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%19</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">159</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="129.00">
												<div class="price__left"> <span class="price__integer-value">129</span>
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
										</div> <span class="products-stars__review-count">(72)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">37,08 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">37,08 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391413&amp;productgroupid=1&amp;variantcode=via253-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:480; -webkit-order:480; -moz-order:480; -ms-order:480">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at4062" data-category="çiçek" href="/white-freedom-at4062-1" tabindex="0" data-position="48">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4281237">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at4062-1/M/at4062-1-8d7a304ed2fc06e-4a74d86e.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at4062-1/S/at4062-1-8d7a304ed2fc06e-4a74d86e.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4062-1/M/at4062-1-8d7a304ed2fc06e-4a74d86e.jpg 255w" alt="White Freedom 5 Beyaz Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at4062-1/M/at4062-1-8d7a304ed2fc06e-4a74d86e.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at4062-1/S/at4062-1-8d7a304ed2fc06e-4a74d86e.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4062-1/M/at4062-1-8d7a304ed2fc06e-4a74d86e.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">White Freedom 5 Beyaz Gül Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%12</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">39</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
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
										</div> <span class="products-stars__review-count">(744)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">10,05 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">10,05 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4281237&amp;productgroupid=1&amp;variantcode=at4062-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:490; -webkit-order:490; -moz-order:490; -ms-order:490">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via249" data-category="çiçek" href="/kisiye-ozel-sevimli-kutuda-lila-gul-harf-aranjmani-via249" tabindex="0" data-position="49">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3391409">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via249-1/M/kisiye-ozel-sevimli-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via249-1/S/kisiye-ozel-sevimli-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/via249-1/M/kisiye-ozel-sevimli-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg 255w" alt="Kişiye Özel Sevimli Kutuda Lila Gül Harf Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/via249-1/M/kisiye-ozel-sevimli-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/via249-1/S/kisiye-ozel-sevimli-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/via249-1/M/kisiye-ozel-sevimli-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Sevimli Kutuda Lila Gül Harf Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(112)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391409&amp;productgroupid=1&amp;variantcode=via249-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 500; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3779" data-category="çiçek" href="/puantiyeli-vazoda-20li-kirmizi-gul-aranjmani-at3779" tabindex="0" data-position="50">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3391385">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3779-1/M/puantiyeli-vazoda-15li-kirmizi-gul-aranjmani-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3779-1/S/puantiyeli-vazoda-15li-kirmizi-gul-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3779-1/M/puantiyeli-vazoda-15li-kirmizi-gul-aranjmani-standart-boy.jpeg 255w" alt="Puantiyeli Vazoda 20'li Kırmızı Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3779-1/M/puantiyeli-vazoda-15li-kirmizi-gul-aranjmani-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3779-1/S/puantiyeli-vazoda-15li-kirmizi-gul-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3779-1/M/puantiyeli-vazoda-15li-kirmizi-gul-aranjmani-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Puantiyeli Vazoda 20'li Kırmızı Gül Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%10</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">99</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
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
										</div> <span class="products-stars__review-count">(284)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391385&amp;productgroupid=1&amp;variantcode=at3779-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 510; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3855" data-category="çiçek" href="/ncili-pembe-kutuda-renkli-frezyalar-at3855" tabindex="0" data-position="51">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3508659">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3855-1/M/at3855-1-8d6be8c828f230e-6baa41d5.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3855-1/S/at3855-1-8d6be8c828f230e-6baa41d5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3855-1/M/at3855-1-8d6be8c828f230e-6baa41d5.jpg 255w" alt="İncili Pembe Kutuda Renkli Frezyalar" src="https://cdn03.ciceksepeti.com/cicek/at3855-1/M/at3855-1-8d6be8c828f230e-6baa41d5.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3855-1/S/at3855-1-8d6be8c828f230e-6baa41d5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3855-1/M/at3855-1-8d6be8c828f230e-6baa41d5.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">İncili Pembe Kutuda Renkli Frezyalar</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%27</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">109</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,00 TL</span>
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
										</div> <span class="products-stars__review-count">(24)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3508659&amp;productgroupid=1&amp;variantcode=at3855-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:520; -webkit-order:520; -moz-order:520; -ms-order:520">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3758" data-category="çiçek" href="/puantiyeli-vazoda-beyaz-papatya-aranjmani-at3758" tabindex="0" data-position="52">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3391368">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3758-1/M/puantiyeli-vazoda-beyaz-papatya-aranjmani-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3758-1/S/puantiyeli-vazoda-beyaz-papatya-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3758-1/M/puantiyeli-vazoda-beyaz-papatya-aranjmani-standart-boy.jpeg 255w" alt="Puantiyeli Vazoda Beyaz Papatya Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3758-1/M/puantiyeli-vazoda-beyaz-papatya-aranjmani-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3758-1/S/puantiyeli-vazoda-beyaz-papatya-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3758-1/M/puantiyeli-vazoda-beyaz-papatya-aranjmani-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Puantiyeli Vazoda Beyaz Papatya Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%8</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">64</span>
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
										</div> <span class="products-stars__review-count">(90)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391368&amp;productgroupid=1&amp;variantcode=at3758-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 530; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at4065" data-category="çiçek" href="/starswhite-at4065-1" tabindex="0" data-position="53">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4281414">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at4065-1/M/at4065-1-8d7a30558c025f2-4fcec0fe.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at4065-1/S/at4065-1-8d7a30558c025f2-4fcec0fe.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4065-1/M/at4065-1-8d7a30558c025f2-4fcec0fe.jpg 255w" alt="StarsWhite Beyaz Papatya Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at4065-1/M/at4065-1-8d7a30558c025f2-4fcec0fe.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at4065-1/S/at4065-1-8d7a30558c025f2-4fcec0fe.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at4065-1/M/at4065-1-8d7a30558c025f2-4fcec0fe.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">StarsWhite Beyaz Papatya Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%12</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">39</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
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
										</div> <span class="products-stars__review-count">(289)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper">
									<p class="products__installment products__installment--responsive">10,05 TL'den Başlayan Taksitlerle</p>
								</div>
								<div class="products__brand-badge">
									<p class="products__installment">10,05 TL'den Başlayan Taksitlerle</p>
								</div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4281414&amp;productgroupid=1&amp;variantcode=at4065-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:540; -webkit-order:540; -moz-order:540; -ms-order:540">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via164" data-category="çiçek" href="/magenta-via164" tabindex="0" data-position="54">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2327926">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via164-1/M/magenta-via164-1-8d476800cd1869d-a3852e27.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via164-1/S/magenta-via164-1-8d476800cd1869d-a3852e27.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via164-1/M/magenta-via164-1-8d476800cd1869d-a3852e27.jpg 255w" alt="Kutuda 16 Lila Gül Magenta" src="https://cdn03.ciceksepeti.com/cicek/via164-1/M/magenta-via164-1-8d476800cd1869d-a3852e27.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via164-1/S/magenta-via164-1-8d476800cd1869d-a3852e27.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via164-1/M/magenta-via164-1-8d476800cd1869d-a3852e27.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Kutuda 16 Lila Gül Magenta</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
										</div> <span class="products-stars__review-count">(374)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2327926&amp;productgroupid=1&amp;variantcode=via164-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:550; -webkit-order:550; -moz-order:550; -ms-order:550">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via198" data-category="çiçek" href="/pink-shade-via198" tabindex="0" data-position="55">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2538083">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via198-1/M/pink-shade-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via198-1/S/pink-shade-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/via198-1/M/pink-shade-standart-boy.jpeg 255w" alt="29 Lila Gülden Pink Shade Çiçek Buketi" src="https://cdn03.ciceksepeti.com/cicek/via198-1/M/pink-shade-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/via198-1/S/pink-shade-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/via198-1/M/pink-shade-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">29 Lila Gülden Pink Shade Çiçek Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
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
										</div> <span class="products-stars__review-count">(250)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2538083&amp;productgroupid=1&amp;variantcode=via198-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 560; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3801" data-category="çiçek" href="/ozel-kutusunda-gold-cizgili-vazoda-7li-beyaz-gul-aranjmani-at3801" tabindex="0" data-position="56">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3431380">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3801-1/M/ozel-kutusunda-gold-cizgili-vazoda-7li-beyaz-gul-aranjmani-at3801-1-8d6a0b9c15d266d-a299b318.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3801-1/S/ozel-kutusunda-gold-cizgili-vazoda-7li-beyaz-gul-aranjmani-at3801-1-8d6a0b9c15d266d-a299b318.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3801-1/M/ozel-kutusunda-gold-cizgili-vazoda-7li-beyaz-gul-aranjmani-at3801-1-8d6a0b9c15d266d-a299b318.jpg 255w" alt="Özel Kutusunda Gold Çizgili Vazoda 7'li Beyaz Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3801-1/M/ozel-kutusunda-gold-cizgili-vazoda-7li-beyaz-gul-aranjmani-at3801-1-8d6a0b9c15d266d-a299b318.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3801-1/S/ozel-kutusunda-gold-cizgili-vazoda-7li-beyaz-gul-aranjmani-at3801-1-8d6a0b9c15d266d-a299b318.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3801-1/M/ozel-kutusunda-gold-cizgili-vazoda-7li-beyaz-gul-aranjmani-at3801-1-8d6a0b9c15d266d-a299b318.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Özel Kutusunda Gold Çizgili Vazoda 7'li Beyaz Gül Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(99)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3431380&amp;productgroupid=1&amp;variantcode=at3801-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:570; -webkit-order:570; -moz-order:570; -ms-order:570">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3595" data-category="çiçek" href="/premium-kutuda-lilarenk-guller-at3595" tabindex="0" data-position="57">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2830043">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3595-1/M/premium-kutuda-lilarenk-guller-at3595-1-8d6118d3a7f3b96-9f7e92eb.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3595-1/S/premium-kutuda-lilarenk-guller-at3595-1-8d6118d3a7f3b96-9f7e92eb.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3595-1/M/premium-kutuda-lilarenk-guller-at3595-1-8d6118d3a7f3b96-9f7e92eb.jpg 255w" alt="Premium Kutuda 9'lu Lilarenk Gül" src="https://cdn03.ciceksepeti.com/cicek/at3595-1/M/premium-kutuda-lilarenk-guller-at3595-1-8d6118d3a7f3b96-9f7e92eb.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3595-1/S/premium-kutuda-lilarenk-guller-at3595-1-8d6118d3a7f3b96-9f7e92eb.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3595-1/M/premium-kutuda-lilarenk-guller-at3595-1-8d6118d3a7f3b96-9f7e92eb.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Premium Kutuda 9'lu Lilarenk Gül</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(221)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2830043&amp;productgroupid=1&amp;variantcode=at3595-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:580; -webkit-order:580; -moz-order:580; -ms-order:580">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3594" data-category="çiçek" href="/premium-kutuda-renkli-cardak-guller-at3594" tabindex="0" data-position="58">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2830042">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3594-1/M/premium-kutuda-renkli-cardak-guller-at3594-1-8d6118cf96cf851-bb84f023.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3594-1/S/premium-kutuda-renkli-cardak-guller-at3594-1-8d6118cf96cf851-bb84f023.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3594-1/M/premium-kutuda-renkli-cardak-guller-at3594-1-8d6118cf96cf851-bb84f023.jpg 255w" alt="Premium Kutuda Renkli Çardak Güller" src="https://cdn03.ciceksepeti.com/cicek/at3594-1/M/premium-kutuda-renkli-cardak-guller-at3594-1-8d6118cf96cf851-bb84f023.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3594-1/S/premium-kutuda-renkli-cardak-guller-at3594-1-8d6118cf96cf851-bb84f023.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3594-1/M/premium-kutuda-renkli-cardak-guller-at3594-1-8d6118cf96cf851-bb84f023.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Premium Kutuda Renkli Çardak Güller</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(99)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2830042&amp;productgroupid=1&amp;variantcode=at3594-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 590; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="kc505749" data-category="çiçek" href="/caracas-kc505749" tabindex="0" data-position="59">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2220639">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/kc505749-1/M/caracas-kc505749-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc505749-1/S/caracas-kc505749-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc505749-1/M/caracas-kc505749-1-1.jpg 255w" alt="Caracas" src="https://cdn03.ciceksepeti.com/cicek/kc505749-1/M/caracas-kc505749-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc505749-1/S/caracas-kc505749-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc505749-1/M/caracas-kc505749-1-1.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Caracas</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(730)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2220639&amp;productgroupid=1&amp;variantcode=kc505749-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:600; -webkit-order:600; -moz-order:600; -ms-order:600">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3796" data-category="çiçek" href="/ozel-kutusunda-beyaz-papatya-gul-ve-lilyum-aranjmani-at3796" tabindex="0" data-position="60">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3431376">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3796-1/M/ozel-kutusunda-beyaz-papatya-gul-ve-lilyum-aranjmani-at3796-1-8d6a0b832bcace0-b88fb7e3.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3796-1/S/ozel-kutusunda-beyaz-papatya-gul-ve-lilyum-aranjmani-at3796-1-8d6a0b832bcace0-b88fb7e3.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3796-1/M/ozel-kutusunda-beyaz-papatya-gul-ve-lilyum-aranjmani-at3796-1-8d6a0b832bcace0-b88fb7e3.jpg 255w" alt="Özel Kutusunda Beyaz Papatya Gül ve Lilyum Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3796-1/M/ozel-kutusunda-beyaz-papatya-gul-ve-lilyum-aranjmani-at3796-1-8d6a0b832bcace0-b88fb7e3.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3796-1/S/ozel-kutusunda-beyaz-papatya-gul-ve-lilyum-aranjmani-at3796-1-8d6a0b832bcace0-b88fb7e3.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3796-1/M/ozel-kutusunda-beyaz-papatya-gul-ve-lilyum-aranjmani-at3796-1-8d6a0b832bcace0-b88fb7e3.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Özel Kutusunda Beyaz Papatya Gül ve Lilyum Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%10</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">99</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
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
										</div> <span class="products-stars__review-count">(101)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3431376&amp;productgroupid=1&amp;variantcode=at3796-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<input type="hidden" name="hasNextPage" value="True">
				<div class="products__item js-category-item-hover  products__item--featured-xlg js-ad-product ad-product--1" data-ad-code="kc5283672-1" data-ad-id="kc5283672-1" data-entry-id="5774" data-sequence="1">
					<div class="products__item-inner">
						<div class="products__container-background"><a class="products__item-link js-products__item-link js-ad-product-link" data-productcode="kc5283672" href="/trio-serisi-kalanchoe-tasarim-kc5283672?entryid=1C6B1B6E1A661C971B6E1C1E1FA41F4C&amp;detailid=2007218,2007099" tabindex="0"><span class="products__item-link__badge"><span class="icon-star-fill"></span></span><div class="products__item-img-container ratio-container"><span class="products__favorite-icon js-favorite-add" data-product-id="4045727"><span class="icon-favorite-border"></span></span><img width="255" height="280" src="https://cdn03.ciceksepeti.com/cicek/kc5283672-1/M/trio-serisi-kalanchoe-tasarim-kc5283672-1-5ec86668732c42bd8b2ae25d6250b547.jpg" class="products__item-img lazyloaded" alt="Trio Serisi Kalanchoe Tasarım"></div><div class="products__item-info"><div class="products__item-details"><p class="products__item-title">Trio Serisi Kalanchoe Tasarım</p><div class="products__item-badge js-products-bagde-all products__item-badge--cargo "><span class="products__item-badge-text">Ücretsiz Kargo</span></div><div class="products__item-price js-no-tax"><div class="discount-percentage"><span class="discount-percentage__text">%28</span></div><div class="price price--old "><div class="price__left"><span class="price__integer-value">109</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,00 TL</span></div></div><div class="price price--now" data-price="79.00&quot;"><div class="price__left"><span class="price__integer-value">79</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,00 TL</span></div></div></div></div></div> <div class="products-stars">  <div class="products-stars__dropdown-evaluation">  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon is-passive"></span>  </div> <span class="products-stars__review-count">(155)</span> </div> <div class="clearfix"></div> </div> <div class="products__installment-wrapper"><p class="products__installment products__installment--responsive">22,71 TL'den Başlayan Taksitlerle</p></div><div class="products__brand-badge"><p class="products__installment">22,71 TL'den Başlayan Taksitlerle</p></div></a>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg js-ad-product ad-product--2" data-ad-code="kc754473-1" data-ad-id="kc754473-1" data-entry-id="1631" data-sequence="2" style="height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background"><a class="products__item-link js-products__item-link js-ad-product-link" data-productcode="kc754473" href="/you-take-my-breath-away-kc754473?entryid=1A7C1ABE1B0B1A661A921B001FA41F4C&amp;detailid=2007218,2007099" tabindex="0"><span class="products__item-link__badge"><span class="icon-star-fill"></span></span><div class="products__item-img-container ratio-container"><span class="products__favorite-icon js-favorite-add" data-product-id="2320296"><span class="icon-favorite-border"></span></span><img width="255" height="280" src="https://cdn03.ciceksepeti.com/cicek/kc754473-1/M/pikapkadikoy-cafe-butik-marineris-serisi-ficus-bonsai-kc754473-1-8d6f639a61d99f5-f610cef1.jpg" class="products__item-img lazyloaded" alt="Marineris Serisi Ficus Bonsai"></div><div class="products__item-info"><div class="products__item-details"><p class="products__item-title">Marineris Serisi Ficus Bonsai</p><div class="products__item-badge js-products-bagde-all products__item-badge--cargo "><span class="products__item-badge-text">Ücretsiz Kargo</span></div><div class="products__item-price js-no-tax"><div class="discount-percentage"><span class="discount-percentage__text">%39</span></div><div class="price price--old "><div class="price__left"><span class="price__integer-value">129</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,00 TL</span></div></div><div class="price price--now" data-price="79.00&quot;"><div class="price__left"><span class="price__integer-value">79</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,00 TL</span></div></div></div></div></div> <div class="products-stars">  <div class="products-stars__dropdown-evaluation">  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon is-passive"></span>  </div> <span class="products-stars__review-count">(306)</span> </div> <div class="clearfix"></div> </div> <div class="products__installment-wrapper"><p class="products__installment products__installment--responsive">22,71 TL'den Başlayan Taksitlerle</p></div><div class="products__brand-badge"><p class="products__installment">22,71 TL'den Başlayan Taksitlerle</p></div></a>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg js-ad-product ad-product--3" data-ad-code="kc574805-1" data-ad-id="kc574805-1" data-entry-id="3395" data-sequence="3" style="height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background"><a class="products__item-link js-products__item-link js-ad-product-link" data-productcode="kc574805" href="/marineris-serisi-kalanchoe-anneler-gunu-ozel-kc574805?entryid=1BB01B791BFD1B841C291BB01FA41F4C&amp;detailid=2007218,2007099" tabindex="0"><span class="products__item-link__badge"><span class="icon-star-fill"></span></span><div class="products__item-img-container ratio-container"><span class="products__favorite-icon js-favorite-add" data-product-id="3584897"><span class="icon-favorite-border"></span></span><img width="255" height="280" src="https://cdn03.ciceksepeti.com/cicek/kc574805-1/M/marineris-serisi-kalanchoe-anneler-gunu-ozel-kc574805-1-1.jpg" class="products__item-img lazyloaded" alt="Marineris Serisi Kalanchoe"></div><div class="products__item-info"><div class="products__item-details"><p class="products__item-title">Marineris Serisi Kalanchoe</p><div class="products__item-badge js-products-bagde-all products__item-badge--cargo "><span class="products__item-badge-text">Ücretsiz Kargo</span></div><div class="products__item-price js-no-tax"><div class="discount-percentage"><span class="discount-percentage__text">%23</span></div><div class="price price--old "><div class="price__left"><span class="price__integer-value">129</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,00 TL</span></div></div><div class="price price--now" data-price="99.00&quot;"><div class="price__left"><span class="price__integer-value">99</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,00 TL</span></div></div></div></div></div> <div class="products-stars">  <div class="products-stars__dropdown-evaluation">  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon is-passive"></span>  </div> <span class="products-stars__review-count">(108)</span> </div> <div class="clearfix"></div> </div> <div class="products__installment-wrapper"><p class="products__installment products__installment--responsive">28,46 TL'den Başlayan Taksitlerle</p></div><div class="products__brand-badge"><p class="products__installment">28,46 TL'den Başlayan Taksitlerle</p></div></a>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg js-ad-product ad-product--4" data-ad-code="kc975853-1" data-ad-id="kc975853-1" data-entry-id="10625" data-sequence="4">
					<div class="products__item-inner">
						<div class="products__container-background"><a class="products__item-link js-products__item-link js-ad-product-link" data-productcode="kc975853" href="/buda-bonsai-kc975853?entryid=1A7C1AD41C081C8C1BA51B6E1F831F4C&amp;detailid=2007218,2007099" tabindex="0"><span class="products__item-link__badge"><span class="icon-star-fill"></span></span><div class="products__item-img-container ratio-container"><span class="products__favorite-icon js-favorite-add" data-product-id="3308608"><span class="icon-favorite-border"></span></span><img width="255" height="280" src="https://cdn03.ciceksepeti.com/cicek/kc975853-1/M/red-cherry-serisi-kirmizi-nandina-bonsai-kc975853-1-2a00540c9e484abd87cdc39c3b9049c4.jpg" class="products__item-img lazyloaded" alt="Red Cherry Serisi Kırmızı Nandina Bonsai"></div><div class="products__item-info"><div class="products__item-details"><p class="products__item-title">Red Cherry Serisi Kırmızı Nandina Bonsai</p><div class="products__item-badge js-products-bagde-all products__item-badge--cargo "><span class="products__item-badge-text">Ücretsiz Kargo</span></div><div class="products__item-price js-no-tax"><div class="discount-percentage"><span class="discount-percentage__text">%20</span></div><div class="price price--old "><div class="price__left"><span class="price__integer-value">99</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,00 TL</span></div></div><div class="price price--now" data-price="79.00&quot;"><div class="price__left"><span class="price__integer-value">79</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,00 TL</span></div></div></div></div></div> <div class="products-stars">  <div class="products-stars__dropdown-evaluation">  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon is-passive"></span>  <span class="icon-star-fill products-stars__icon icon-half"></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon is-passive"></span>  </div> <span class="products-stars__review-count">(70)</span> </div> <div class="clearfix"></div> </div> <div class="products__installment-wrapper"><p class="products__installment products__installment--responsive">22,71 TL'den Başlayan Taksitlerle</p></div><div class="products__brand-badge"><p class="products__installment">22,71 TL'den Başlayan Taksitlerle</p></div></a>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg js-ad-product ad-product--5" data-ad-code="kc1394906-1" data-ad-id="kc1394906-1" data-entry-id="10626" data-sequence="5" style="height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background"><a class="products__item-link js-products__item-link js-ad-product-link" data-productcode="kc1394906" href="/trio-mini-hera-serisi-kalanchoe-tasarim-eskitme-kc1394906?entryid=1A7C1AD41C081C8C1BA51B8F1A7C1F4C&amp;detailid=2007218,2007099" tabindex="0"><span class="products__item-link__badge"><span class="icon-star-fill"></span></span><div class="products__item-img-container ratio-container"><span class="products__favorite-icon js-favorite-add" data-product-id="4223235"><span class="icon-favorite-border"></span></span><img width="255" height="280" src="https://cdn03.ciceksepeti.com/cicek/kc1394906-1/M/trio-mini-hera-serisi-kalanchoe-tasarim-eskitme--kc1394906-1-d294e44eb7da48ffbcdde69ba8258b79.jpg" class="products__item-img lazyloaded" alt="Trio Mini Hera Serisi Kalanchoe Tasarım Eskitme"></div><div class="products__item-info"><div class="products__item-details"><p class="products__item-title">Trio Mini Hera Serisi Kalanchoe Tasarım Eskitme</p><div class="products__item-badge js-products-bagde-all products__item-badge--cargo "><span class="products__item-badge-text">Ücretsiz Kargo</span></div><div class="products__item-price js-no-tax"><div class="discount-percentage"><span class="discount-percentage__text">%40</span></div><div class="price price--old "><div class="price__left"><span class="price__integer-value">149</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,00 TL</span></div></div><div class="price price--now" data-price="89.00&quot;"><div class="price__left"><span class="price__integer-value">89</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,00 TL</span></div></div></div></div></div> <div class="products-stars">  <div class="products-stars__dropdown-evaluation">  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon is-passive"></span>  </div> <span class="products-stars__review-count">(44)</span> </div> <div class="clearfix"></div> </div> <div class="products__installment-wrapper"><p class="products__installment products__installment--responsive">25,58 TL'den Başlayan Taksitlerle</p></div><div class="products__brand-badge"><p class="products__installment">25,58 TL'den Başlayan Taksitlerle</p></div></a>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg js-ad-product ad-product--6" data-ad-code="kc7382124-1" data-ad-id="kc7382124-1" data-entry-id="14276" data-sequence="6">
					<div class="products__item-inner">
						<div class="products__container-background"><a class="products__item-link js-products__item-link js-ad-product-link" data-productcode="kc7382124" href="/yumurta-vazo-minyatur-orkide-kc7382124?entryid=1A7C1AC91CD91B9A1AA81BFD1A7C1F4C&amp;detailid=2007218,2007099" tabindex="0"><span class="products__item-link__badge"><span class="icon-star-fill"></span></span><div class="products__item-img-container ratio-container"><span class="products__favorite-icon js-favorite-add" data-product-id="4363165"><span class="icon-favorite-border"></span></span><img width="255" height="280" src="https://cdn03.ciceksepeti.com/cicek/kc7382124-1/M/yumurta-vazo-minyatur-orkide-kc7382124-1-603288623f0846159664248a54ee2824.jpg" class="products__item-img lazyloaded" alt="Yumurta Vazo Minyatür Orkide"></div><div class="products__item-info"><div class="products__item-details"><p class="products__item-title">Yumurta Vazo Minyatür Orkide</p><div class="products__item-badge js-products-bagde-all products__item-badge--cargo "><span class="products__item-badge-text">Ücretsiz Kargo</span></div><div class="products__item-price js-no-tax"><div class="discount-percentage"><span class="discount-percentage__text">%32</span></div><div class="price price--old "><div class="price__left"><span class="price__integer-value">175</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,01 TL</span></div></div><div class="price price--now" data-price="119.00&quot;"><div class="price__left"><span class="price__integer-value">119</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,00 TL</span></div></div></div></div></div> <div class="products-stars">  <div class="products-stars__dropdown-evaluation">  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon is-passive"></span>  <span class="icon-star-fill products-stars__icon icon-half"></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon is-passive"></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon is-passive"></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon is-passive"></span>  </div> <span class="products-stars__review-count">(4)</span> </div> <div class="clearfix"></div> </div> <div class="products__installment-wrapper"><p class="products__installment products__installment--responsive">34,21 TL'den Başlayan Taksitlerle</p></div><div class="products__brand-badge"><p class="products__installment">34,21 TL'den Başlayan Taksitlerle</p></div></a>
						</div>
					</div>
				</div>
			</div>
			<div class="clearfix">
				<div class="pagination-area">
					<ul class="pagination">
						<li class="disabled"><a href="javascript:void(0)" rel="prev" data-ajaxfilter="" data-page="0"><span class="icon-left-arrow pagination__icon"></span>Önceki Sayfa</a>
						</li>
						<li class=" first-page active"><a data-ajaxfilter="?df=2007218,2007099" data-page="1" href="https://www.ciceksepeti.com/butik-cicekciler">1</a>
						</li>
						<li class=""><a data-ajaxfilter="?df=2007218,2007099&amp;page=2" data-page="2" href="https://www.ciceksepeti.com/butik-cicekciler?page=2">2</a>
						</li>
						<li class=""><a data-ajaxfilter="?df=2007218,2007099&amp;page=3" data-page="3" href="https://www.ciceksepeti.com/butik-cicekciler?page=3">3</a>
						</li>
						<li class=""><a data-ajaxfilter="?df=2007218,2007099&amp;page=4" data-page="4" href="https://www.ciceksepeti.com/butik-cicekciler?page=4">4</a>
						</li>
						<li class="disabled  pagination__dots"><a href="javascript:void(0)">...</a>
						</li>
						<li class="disabled"><a href="javascript:void(0)">113</a>
						</li>
						<li class=""><a href="https://www.ciceksepeti.com/butik-cicekciler?page=2" rel="next" data-ajaxfilter="?df=2007218,2007099&amp;page=2" data-page="2">Sonraki Sayfa<span class="icon-right-arrow pagination__icon"></span></a>
						</li>
					</ul>
				</div>
				<div class="pagination-area-notext">
					<ul class="pagination">
						<li class="disabled"><a href="javascript:void(0)" rel="prev" data-ajaxfilter="" data-page="0"><span class="icon-left-arrow pagination__icon"></span>Önceki</a>
						</li>
						<li class=""><a href="https://www.ciceksepeti.com/butik-cicekciler?page=2" rel="next" data-ajaxfilter="?df=2007218,2007099&amp;page=2" data-page="2">Sonraki<span class="icon-right-arrow pagination__icon"></span></a>
						</li>
					</ul>
				</div>
			</div>
			<input type="hidden" value="0" class="js-sending-reason-id-ajax">
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
    name: 'Tasarim',
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
			}
		},
  }
}

</script>