<template>
<div>
    <header><ust/></header>
    <a href="#"><img alt="Yukarı Çık" class="yukarikaydir" src="../img/yc.png" style="display: block;"></a>
    
    <main class="category js-category-detail category-page">
	    <div class="container">
		<div class="js-category-container">
			<div class=" responsive-filter js-responsive-filtering "> <span class="responsive-filter__close-icon js-close-responsive-filter icon-close-line"></span>
				<a class="responsive-filter__clear-link js-clear-filter-button" href="dogumgunu">Temizle</a>
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
								<li class="filter__dropdown-list ">
									<input id="filter2000266_2007099" name="categoryRadio" data-val="true" data-id="df" data-value="2007099" data-hide="True" class="filter__dropdown-checkbox js-apply-filter" type="radio" data-url="cicek" data-ajaxfilter="?df=2007099" value="cicek">
									<label class="filter__dropdown-label" for="filter2000266_2007099"><router-link to="/çiçek">Çiçek</router-link></label>
									<!--True-->
								</li>
								<li class="filter__dropdown-list checked">
									<input id="filter2000266_2007100" name="categoryRadio" data-val="true" data-id="df" data-value="2007100" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="radio" checked="" data-url="tum-urunler" data-ajaxfilter="" value="tum-urunler">
									<label class="filter__dropdown-label" for="filter2000266_2007100">Yenilebilir Çiçek</label>
									<!--True-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000266_2007101" name="categoryRadio" data-val="true" data-id="df" data-value="2007101" data-hide="True" class="filter__dropdown-checkbox js-apply-filter" type="radio" data-url="hediye" data-ajaxfilter="?df=2007101" value="hediye">
									<label class="filter__dropdown-label" for="filter2000266_2007101"><router-link to="/hediye">Hediye</router-link></label>
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
									<input id="filter2000308_2014253" data-val="true" data-id="df" data-value="2014253" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2014253" data-ajaxfilter="?df=2007100,2014253" value="tum-urunler?df=2007100,2014253">
									<label class="filter__dropdown-label" for="filter2000308_2014253">Hediye Setleri</label>
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
									<input id="filter2000267_2010589" data-val="true" data-id="df" data-value="2010589" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2010589" data-ajaxfilter="?df=2007100,2010589" value="tum-urunler?df=2007100,2010589">
									<label class="filter__dropdown-label" for="filter2000267_2010589">Browni</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2015147" data-val="true" data-id="df" data-value="2015147" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2015147" data-ajaxfilter="?df=2007100,2015147" value="tum-urunler?df=2007100,2015147">
									<label class="filter__dropdown-label" for="filter2000267_2015147">Gıda Sepetleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007124" data-val="true" data-id="df" data-value="2007124" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="cikolata" data-ajaxfilter="?df=2007100,2007124" value="cikolata">
									<label class="filter__dropdown-label" for="filter2000267_2007124">Çikolata</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007847" data-val="true" data-id="df" data-value="2007847" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="geleneksel-lezzetler" data-ajaxfilter="?df=2007100,2007847" value="geleneksel-lezzetler">
									<label class="filter__dropdown-label" for="filter2000267_2007847">Geleneksel Lezzetler</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007129" data-val="true" data-id="df" data-value="2007129" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2007129" data-ajaxfilter="?df=2007100,2007129" value="tum-urunler?df=2007100,2007129">
									<label class="filter__dropdown-label" for="filter2000267_2007129">Gıda Sepetleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007123" data-val="true" data-id="df" data-value="2007123" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="kek-buketi" data-ajaxfilter="?df=2007100,2007123" value="kek-buketi">
									<label class="filter__dropdown-label" for="filter2000267_2007123">Kek - Kurabiye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2015135" data-val="true" data-id="df" data-value="2015135" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="pirinc-patlakli-aranjmanlar" data-ajaxfilter="?df=2007100,2015135" value="pirinc-patlakli-aranjmanlar">
									<label class="filter__dropdown-label" for="filter2000267_2015135">Pirinç Patlağı</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013176" data-val="true" data-id="df" data-value="2013176" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2013176" data-ajaxfilter="?df=2007100,2013176" value="tum-urunler?df=2007100,2013176">
									<label class="filter__dropdown-label" for="filter2000267_2013176">Gıda</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013171" data-val="true" data-id="df" data-value="2013171" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2013171" data-ajaxfilter="?df=2007100,2013171" value="tum-urunler?df=2007100,2013171">
									<label class="filter__dropdown-label" for="filter2000267_2013171">Ofis, Kırtasite Hediye Setleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007128" data-val="true" data-id="df" data-value="2007128" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="makaron" data-ajaxfilter="?df=2007128,2007100" value="makaron">
									<label class="filter__dropdown-label" for="filter2000267_2007128">Makaron &amp; Brownie</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007130" data-val="true" data-id="df" data-value="2007130" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2007130" data-ajaxfilter="?df=2007100,2007130" value="tum-urunler?df=2007100,2007130">
									<label class="filter__dropdown-label" for="filter2000267_2007130">Meyve Sepeti</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007125" data-val="true" data-id="df" data-value="2007125" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="pasta" data-ajaxfilter="?df=2007100,2007125" value="pasta">
									<label class="filter__dropdown-label" for="filter2000267_2007125">Pasta</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007312" data-val="true" data-id="df" data-value="2007312" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="bonnyfood-premium" data-ajaxfilter="?df=2007100,2007312" value="bonnyfood-premium">
									<label class="filter__dropdown-label" for="filter2000267_2007312">Premium</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007126" data-val="true" data-id="df" data-value="2007126" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="jelibon-seker" data-ajaxfilter="?df=2007100,2007126" value="jelibon-seker">
									<label class="filter__dropdown-label" for="filter2000267_2007126">Şekerleme</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007304" data-val="true" data-id="df" data-value="2007304" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2007304" data-ajaxfilter="?df=2007100,2007304" value="tum-urunler?df=2007100,2007304">
									<label class="filter__dropdown-label" for="filter2000267_2007304">Truflu Aranjmanlar</label>
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
									<input id="filter2000254_2006840" data-val="true" data-id="df" data-value="2006840" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="acilis-toren-yenilebilir-cicek" data-ajaxfilter="?df=2006840,2007100" value="acilis-toren-yenilebilir-cicek">
									<label class="filter__dropdown-label" for="filter2000254_2006840">Açılış-Tören</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006838" data-val="true" data-id="df" data-value="2006838" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006838" data-ajaxfilter="?df=2007100,2006838" value="tum-urunler?df=2007100,2006838">
									<label class="filter__dropdown-label" for="filter2000254_2006838">Cenaze</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006821" data-val="true" data-id="df" data-value="2006821" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="dogum-gunu-kek-kurabiye" data-ajaxfilter="?df=2007100,2006821" value="dogum-gunu-kek-kurabiye">
									<label class="filter__dropdown-label" for="filter2000254_2006821">Doğum Günü</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2007193" data-val="true" data-id="df" data-value="2007193" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="gecmis-olsun-kek-kurabiye" data-ajaxfilter="?df=2007100,2007193" value="gecmis-olsun-kek-kurabiye">
									<label class="filter__dropdown-label" for="filter2000254_2007193">Geçmiş Olsun</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006828" data-val="true" data-id="df" data-value="2006828" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="icimden-geldi-kek-kurabiye" data-ajaxfilter="?df=2007100,2006828" value="icimden-geldi-kek-kurabiye">
									<label class="filter__dropdown-label" for="filter2000254_2006828">İçimden Geldi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2010275" data-val="true" data-id="df" data-value="2010275" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2010275" data-ajaxfilter="?df=2007100,2010275" value="tum-urunler?df=2007100,2010275">
									<label class="filter__dropdown-label" for="filter2000254_2010275">Okula Dönüş</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006818" data-val="true" data-id="df" data-value="2006818" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="ozur-dilerim-kek-kurabiye" data-ajaxfilter="?df=2007100,2006818" value="ozur-dilerim-kek-kurabiye">
									<label class="filter__dropdown-label" for="filter2000254_2006818">Özür Dilerim</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006827" data-val="true" data-id="df" data-value="2006827" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006827" data-ajaxfilter="?df=2007100,2006827" value="tum-urunler?df=2007100,2006827">
									<label class="filter__dropdown-label" for="filter2000254_2006827">Parti - Kutlama</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006816" data-val="true" data-id="df" data-value="2006816" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="sevgiliye-kek-kurabiye" data-ajaxfilter="?df=2007100,2006816" value="sevgiliye-kek-kurabiye">
									<label class="filter__dropdown-label" for="filter2000254_2006816">Sevgili</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006839" data-val="true" data-id="df" data-value="2006839" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="soz-nisan-dugun-kek-kurabiye" data-ajaxfilter="?df=2007100,2006839" value="soz-nisan-dugun-kek-kurabiye">
									<label class="filter__dropdown-label" for="filter2000254_2006839">Söz-Nişan- Düğün</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006820" data-val="true" data-id="df" data-value="2006820" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006820" data-ajaxfilter="?df=2007100,2006820" value="tum-urunler?df=2007100,2006820">
									<label class="filter__dropdown-label" for="filter2000254_2006820">Tebrik</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006834" data-val="true" data-id="df" data-value="2006834" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006834" data-ajaxfilter="?df=2007100,2006834" value="tum-urunler?df=2007100,2006834">
									<label class="filter__dropdown-label" for="filter2000254_2006834">Teşekkür Ederim</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006826" data-val="true" data-id="df" data-value="2006826" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="bebek-kek-kurabiyesi" data-ajaxfilter="?df=2007100,2006826" value="bebek-kek-kurabiyesi">
									<label class="filter__dropdown-label" for="filter2000254_2006826">Yeni Bebek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006819" data-val="true" data-id="df" data-value="2006819" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="yeni-ise-kek-kurabiye" data-ajaxfilter="?df=2007100,2006819" value="yeni-ise-kek-kurabiye">
									<label class="filter__dropdown-label" for="filter2000254_2006819">Yeni İş/Terfi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006817" data-val="true" data-id="df" data-value="2006817" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="yildonumu-kek-kurabiye" data-ajaxfilter="?df=2006817,2007100" value="yildonumu-kek-kurabiye">
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
									<input id="filter2000256_2006847" data-val="true" data-id="df" data-value="2006847" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006847" data-ajaxfilter="?df=2007100,2006847" value="tum-urunler?df=2007100,2006847">
									<label class="filter__dropdown-label" for="filter2000256_2006847">Kadın</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2007326" data-val="true" data-id="df" data-value="2007326" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2007326" data-ajaxfilter="?df=2007100,2007326" value="tum-urunler?df=2007100,2007326">
									<label class="filter__dropdown-label" for="filter2000256_2007326">Unisex</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2006848" data-val="true" data-id="df" data-value="2006848" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006848" data-ajaxfilter="?df=2007100,2006848" value="tum-urunler?df=2007100,2006848">
									<label class="filter__dropdown-label" for="filter2000256_2006848">Erkek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2010781" data-val="true" data-id="df" data-value="2010781" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2010781" data-ajaxfilter="?df=2007100,2010781" value="tum-urunler?df=2007100,2010781">
									<label class="filter__dropdown-label" for="filter2000256_2010781">Erkek Bebek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2010782" data-val="true" data-id="df" data-value="2010782" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2010782" data-ajaxfilter="?df=2007100,2010782" value="tum-urunler?df=2007100,2010782">
									<label class="filter__dropdown-label" for="filter2000256_2010782">Kız Bebek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2010783" data-val="true" data-id="df" data-value="2010783" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2010783" data-ajaxfilter="?df=2007100,2010783" value="tum-urunler?df=2007100,2010783">
									<label class="filter__dropdown-label" for="filter2000256_2010783">Erkek Çocuk</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2010784" data-val="true" data-id="df" data-value="2010784" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2010784" data-ajaxfilter="?df=2007100,2010784" value="tum-urunler?df=2007100,2010784">
									<label class="filter__dropdown-label" for="filter2000256_2010784">Kız Çocuk</label>
									<!--False-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop6' v-bind:class="{'open':open6}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
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
									<input id="filter2000253_2006799" data-val="true" data-id="df" data-value="2006799" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006799" data-ajaxfilter="?df=2007100,2006799" value="tum-urunler?df=2007100,2006799">
									<label class="filter__dropdown-label" for="filter2000253_2006799">Anneye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006798" data-val="true" data-id="df" data-value="2006798" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006798" data-ajaxfilter="?df=2007100,2006798" value="tum-urunler?df=2007100,2006798">
									<label class="filter__dropdown-label" for="filter2000253_2006798">Arkadaşa</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006810" data-val="true" data-id="df" data-value="2006810" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006810" data-ajaxfilter="?df=2007100,2006810" value="tum-urunler?df=2007100,2006810">
									<label class="filter__dropdown-label" for="filter2000253_2006810">Avukata</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006800" data-val="true" data-id="df" data-value="2006800" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006800" data-ajaxfilter="?df=2007100,2006800" value="tum-urunler?df=2007100,2006800">
									<label class="filter__dropdown-label" for="filter2000253_2006800">Babaya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006802" data-val="true" data-id="df" data-value="2006802" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006802" data-ajaxfilter="?df=2007100,2006802" value="tum-urunler?df=2007100,2006802">
									<label class="filter__dropdown-label" for="filter2000253_2006802">Bebeğe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006803" data-val="true" data-id="df" data-value="2006803" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006803" data-ajaxfilter="?df=2007100,2006803" value="tum-urunler?df=2007100,2006803">
									<label class="filter__dropdown-label" for="filter2000253_2006803">Büyükanneye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006804" data-val="true" data-id="df" data-value="2006804" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006804" data-ajaxfilter="?df=2007100,2006804" value="tum-urunler?df=2007100,2006804">
									<label class="filter__dropdown-label" for="filter2000253_2006804">Büyükbabaya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006801" data-val="true" data-id="df" data-value="2006801" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006801" data-ajaxfilter="?df=2007100,2006801" value="tum-urunler?df=2007100,2006801">
									<label class="filter__dropdown-label" for="filter2000253_2006801">Çocuğa</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006815" data-val="true" data-id="df" data-value="2006815" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006815" data-ajaxfilter="?df=2007100,2006815" value="tum-urunler?df=2007100,2006815">
									<label class="filter__dropdown-label" for="filter2000253_2006815">Dayı-Amcaya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006812" data-val="true" data-id="df" data-value="2006812" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006812" data-ajaxfilter="?df=2007100,2006812" value="tum-urunler?df=2007100,2006812">
									<label class="filter__dropdown-label" for="filter2000253_2006812">Diş Hekimine</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006809" data-val="true" data-id="df" data-value="2006809" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006809" data-ajaxfilter="?df=2007100,2006809" value="tum-urunler?df=2007100,2006809">
									<label class="filter__dropdown-label" for="filter2000253_2006809">Doktora</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006805" data-val="true" data-id="df" data-value="2006805" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006805" data-ajaxfilter="?df=2007100,2006805" value="tum-urunler?df=2007100,2006805">
									<label class="filter__dropdown-label" for="filter2000253_2006805">Eşe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006808" data-val="true" data-id="df" data-value="2006808" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006808" data-ajaxfilter="?df=2007100,2006808" value="tum-urunler?df=2007100,2006808">
									<label class="filter__dropdown-label" for="filter2000253_2006808">Hemşireye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006806" data-val="true" data-id="df" data-value="2006806" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006806" data-ajaxfilter="?df=2007100,2006806" value="tum-urunler?df=2007100,2006806">
									<label class="filter__dropdown-label" for="filter2000253_2006806">İş Arkadaşına</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006797" data-val="true" data-id="df" data-value="2006797" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006797" data-ajaxfilter="?df=2007100,2006797" value="tum-urunler?df=2007100,2006797">
									<label class="filter__dropdown-label" for="filter2000253_2006797">Kardeşe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2007192" data-val="true" data-id="df" data-value="2007192" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2007192" data-ajaxfilter="?df=2007100,2007192" value="tum-urunler?df=2007100,2007192">
									<label class="filter__dropdown-label" for="filter2000253_2007192">Kendime</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006813" data-val="true" data-id="df" data-value="2006813" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006813" data-ajaxfilter="?df=2007100,2006813" value="tum-urunler?df=2007100,2006813">
									<label class="filter__dropdown-label" for="filter2000253_2006813">Mühendise</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006811" data-val="true" data-id="df" data-value="2006811" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006811" data-ajaxfilter="?df=2007100,2006811" value="tum-urunler?df=2007100,2006811">
									<label class="filter__dropdown-label" for="filter2000253_2006811">Öğretmene</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2007316" data-val="true" data-id="df" data-value="2007316" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="polise-hediye-bonnyfood" data-ajaxfilter="?df=2007316,2007100" value="polise-hediye-bonnyfood">
									<label class="filter__dropdown-label" for="filter2000253_2007316">Polis</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006796" data-val="true" data-id="df" data-value="2006796" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006796" data-ajaxfilter="?df=2007100,2006796" value="tum-urunler?df=2007100,2006796">
									<label class="filter__dropdown-label" for="filter2000253_2006796">Sevgiliye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006814" data-val="true" data-id="df" data-value="2006814" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006814" data-ajaxfilter="?df=2007100,2006814" value="tum-urunler?df=2007100,2006814">
									<label class="filter__dropdown-label" for="filter2000253_2006814">Teyze-Halaya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006807" data-val="true" data-id="df" data-value="2006807" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2006807" data-ajaxfilter="?df=2007100,2006807" value="tum-urunler?df=2007100,2006807">
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
									<input id="filter10_151" data-val="true" data-id="df" data-value="151" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,151" data-ajaxfilter="?df=2007100,151" value="tum-urunler?df=2007100,151">
									<label class="filter__dropdown-label" for="filter10_151">Beyaz</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_2010794" data-val="true" data-id="df" data-value="2010794" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2010794" data-ajaxfilter="?df=2007100,2010794" value="tum-urunler?df=2007100,2010794">
									<label class="filter__dropdown-label" for="filter10_2010794">Bej</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_155" data-val="true" data-id="df" data-value="155" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,155" data-ajaxfilter="?df=2007100,155" value="tum-urunler?df=2007100,155">
									<label class="filter__dropdown-label" for="filter10_155">Gri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_157" data-val="true" data-id="df" data-value="157" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,157" data-ajaxfilter="?df=2007100,157" value="tum-urunler?df=2007100,157">
									<label class="filter__dropdown-label" for="filter10_157">Kahverengi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_158" data-val="true" data-id="df" data-value="158" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,158" data-ajaxfilter="?df=2007100,158" value="tum-urunler?df=2007100,158">
									<label class="filter__dropdown-label" for="filter10_158">Kırmızı</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_166" data-val="true" data-id="df" data-value="166" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,166" data-ajaxfilter="?df=2007100,166" value="tum-urunler?df=2007100,166">
									<label class="filter__dropdown-label" for="filter10_166">Mavi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_2007325" data-val="true" data-id="df" data-value="2007325" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,2007325" data-ajaxfilter="?df=2007100,2007325" value="tum-urunler?df=2007100,2007325">
									<label class="filter__dropdown-label" for="filter10_2007325">Mix</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_167" data-val="true" data-id="df" data-value="167" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,167" data-ajaxfilter="?df=2007100,167" value="tum-urunler?df=2007100,167">
									<label class="filter__dropdown-label" for="filter10_167">Mor</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_168" data-val="true" data-id="df" data-value="168" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,168" data-ajaxfilter="?df=2007100,168" value="tum-urunler?df=2007100,168">
									<label class="filter__dropdown-label" for="filter10_168">Pembe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_171" data-val="true" data-id="df" data-value="171" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,171" data-ajaxfilter="?df=2007100,171" value="tum-urunler?df=2007100,171">
									<label class="filter__dropdown-label" for="filter10_171">Sarı</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_172" data-val="true" data-id="df" data-value="172" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,172" data-ajaxfilter="?df=2007100,172" value="tum-urunler?df=2007100,172">
									<label class="filter__dropdown-label" for="filter10_172">Siyah</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_176" data-val="true" data-id="df" data-value="176" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,176" data-ajaxfilter="?df=2007100,176" value="tum-urunler?df=2007100,176">
									<label class="filter__dropdown-label" for="filter10_176">Turuncu</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_178" data-val="true" data-id="df" data-value="178" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2007100,178" data-ajaxfilter="?df=2007100,178" value="tum-urunler?df=2007100,178">
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
									<input id="filter23_1" data-val="true" data-id="priceId" data-value="1" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="bonnyfood?priceId=1" data-ajaxfilter="?priceId=1&amp;df=2007100" value="bonnyfood?priceId=1">
									<label class="filter__dropdown-label" for="filter23_1">0-50 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_2" data-val="true" data-id="priceId" data-value="2" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="bonnyfood?priceId=2" data-ajaxfilter="?priceId=2&amp;df=2007100" value="bonnyfood?priceId=2">
									<label class="filter__dropdown-label" for="filter23_2">50-100 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_3" data-val="true" data-id="priceId" data-value="3" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="bonnyfood?priceId=3" data-ajaxfilter="?priceId=3&amp;df=2007100" value="bonnyfood?priceId=3">
									<label class="filter__dropdown-label" for="filter23_3">100-150 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_4" data-val="true" data-id="priceId" data-value="4" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="bonnyfood?priceId=4" data-ajaxfilter="?priceId=4&amp;df=2007100" value="bonnyfood?priceId=4">
									<label class="filter__dropdown-label" for="filter23_4">150-200 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_5" data-val="true" data-id="priceId" data-value="5" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="bonnyfood?priceId=5" data-ajaxfilter="?priceId=5&amp;df=2007100" value="bonnyfood?priceId=5">
									<label class="filter__dropdown-label" for="filter23_5">200-250 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_6" data-val="true" data-id="priceId" data-value="6" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="bonnyfood?priceId=6" data-ajaxfilter="?priceId=6&amp;df=2007100" value="bonnyfood?priceId=6">
									<label class="filter__dropdown-label" for="filter23_6">250-500 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_7" data-val="true" data-id="priceId" data-value="7" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="bonnyfood?priceId=7" data-ajaxfilter="?priceId=7&amp;df=2007100" value="bonnyfood?priceId=7">
									<label class="filter__dropdown-label" for="filter23_7">500-1000 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_8" data-val="true" data-id="priceId" data-value="8" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="bonnyfood?priceId=8" data-ajaxfilter="?priceId=8&amp;df=2007100" value="bonnyfood?priceId=8">
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
									<input class="filter__dropdown-checkbox js-sort-products" type="radio" checked="" data-url="bonnyfood?orderby=1" data-ajaxfilter="?df=2007100&amp;orderby=1" data-id="orderby" data-value="1" id="1" name="sortRadio">
									<label class="filter__dropdown-label" for="1">Çok Satılana Göre</label>
								</li>
								<li class="filter__dropdown-list">
									<input class="filter__dropdown-checkbox js-sort-products" type="radio" data-url="bonnyfood?orderby=2" data-ajaxfilter="?df=2007100&amp;orderby=2" data-id="orderby" data-value="2" id="2" name="sortRadio">
									<label class="filter__dropdown-label" for="2">Pahalıdan Ucuza</label>
								</li>
								<li class="filter__dropdown-list">
									<input class="filter__dropdown-checkbox js-sort-products" type="radio" data-url="bonnyfood?orderby=3" data-ajaxfilter="?df=2007100&amp;orderby=3" data-id="orderby" data-value="3" id="3" name="sortRadio">
									<label class="filter__dropdown-label" for="3">Ucuzdan Pahalıya</label>
								</li>
							</ul>
							</div>
						<div class="filter__item  filter__item--checkbox">
							<input class="filter__checkbox js-apply-filter" id="check_24" data-ajaxfilter="?sameday=1&amp;df=2007100" data-value="1" data-id="sameday" data-url="bonnyfood?sameday=1" type="checkbox">
							<label class="filter__label" for="check_24">Aynı Gün</label>
						</div>
						<div class="filter__item  filter__item--checkbox">
							<input class="filter__checkbox js-apply-filter" id="check_2000272" data-ajaxfilter="?df=2007217,2007100" data-value="2007217" data-id="df" data-url="kisiye-ozel-bonnyfood" type="checkbox">
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
                    Yenilebilir Çiçek
                    <span class="icon-close filter__selected-tag-icon" data-url="tum-urunler" data-ajaxfilter=""></span>
                </a>
				</li>
				<li class="category-order__filter js-clean-filter"> <span class="is-hidden filter__ellipsis">...</span>
					<a class="filter__clean-btn" href="dogumgunu">Temizle</a>
				</li>
				<li class="category-order__text">4148 ürün bulundu.</li>
			</ul>
			<div class="featured">
				<div class="main-banner__row">
					<div class="main-banner__col main-banner__col--1">
						<a class="main-banner__link" href="/dogum-gunu-kek-kurabiye" title="Yeni Yıl Lezzetleri">
							<img alt="Doğum Günü" class="main-banner__image" src="//cdn03.ciceksepeti.com/slider/MainBanner580x416-bonnyfood-anabanner637063388424677574637193641791689659.jpg">
						</a>
					</div>
					<div class="main-banner__col main-banner__col--2">
						<div class="main-banner__col-inner">
							<div class="main-banner__col-inner-col">
								<a class="main-banner__link" href="/kek-buketi" title="">
									<picture>
										<source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
											<img alt="tip-bayrami-bonnyfood" class="main-banner__image" height="197" src="//cdn03.ciceksepeti.com/slider/280x197-smallbanner-kekkurabiye637063389114159959637198179379884692.jpg" width="280">
									</picture>
								</a>
							</div>
							<div class="main-banner__col-inner-col">
								<a class="main-banner__link" href="/kisiye-ozel-cikolata-toplari-truf-buketi-kc863914" title="">
									<picture>
										<source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
											<img alt="bonnyfood" class="main-banner__image" height="197" src="//cdn03.ciceksepeti.com/slider/bf banner637231689066373255.jpg" width="280">
									</picture>
								</a>
							</div>
						</div>
					</div>
					<div class="main-banner__col main-banner__col--3">
						<div class="main-banner__col-inner">
							<div class="main-banner__col-inner-col">
								<a class="main-banner__link" href="/meyve-sepeti" title="">
									<picture>
										<source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
											<img alt="meyve sepete" class="main-banner__image" height="197" src="//cdn03.ciceksepeti.com/slider/280x197-smallbanner-meyve637063390088588226637173111391740501.jpg" width="280">
									</picture>
								</a>
							</div>
							<div class="main-banner__col-inner-col">
								<a class="main-banner__link" href="/kisiye-ozel-bonnyfood" title="">
									<picture>
										<source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
											<img alt="/kisiye-ozel-bonnyfood" class="main-banner__image" height="197" src="//cdn03.ciceksepeti.com/slider/280x197-smallbanner-kölezzet637063391704890352637173112203746683.jpg" width="280">
									</picture>
								</a>
							</div>
						</div>
					</div>
					<div class="main-banner__col main-banner__col--4">
						<a class="main-banner__link" href="/pasta" title="">
							<picture>
								<source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
									<img alt="/pasta" class="main-banner__image" height="197" src="//cdn03.ciceksepeti.com/slider/280x197-smallbanner-pasta637063390831069245637173111544767300.jpg" width="280">
							</picture>
						</a>
						<a class="main-banner__link" href="/kalpli-aranjmanlar" title="">
							<picture>
								<source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
									<img alt="Kalpli aranjmanlar" class="main-banner__image" height="197" src="//cdn03.ciceksepeti.com/slider/280x197-smallbanner-kalpliaranjman637063392581387519637173112352565354.jpg" width="280">
							</picture>
						</a>
					</div>
				</div>
			</div>
			<div class="products products--category">
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order:10; -webkit-order:10; -moz-order:10; -ms-order:10">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1972" data-category="yenilebilir çiçek" href="/bitmeyen-lezzet-dogum-gunu-kutlama-aranjmani-gr1972" tabindex="0" data-position="1">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3630019">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1972-1/M/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1972-1/S/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1972-1/M/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg 255w" alt="Bitmeyen Lezzet Doğum Günü Kutlama Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/gr1972-1/M/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1972-1/S/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1972-1/M/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Bitmeyen Lezzet Doğum Günü Kutlama Aranjmanı</p>
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
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3630019&amp;productgroupid=2&amp;variantcode=gr1972-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 20; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="ck191" data-category="yenilebilir çiçek" href="/ozel-tatlar-spesiyal-cikolata-kutusu-ck191" tabindex="0" data-position="2">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="9492">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/ck191-1/M/adidas-ozel-tatlar-spesiyal-cikolata-kutusu-ck191-1-2.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/ck191-1/S/adidas-ozel-tatlar-spesiyal-cikolata-kutusu-ck191-1-2.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck191-1/M/adidas-ozel-tatlar-spesiyal-cikolata-kutusu-ck191-1-2.jpg 255w" alt="Özel Tatlar Çikolata Kutusu 300 gr" src="https://cdn03.ciceksepeti.com/cicek/ck191-1/M/adidas-ozel-tatlar-spesiyal-cikolata-kutusu-ck191-1-2.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/ck191-1/S/adidas-ozel-tatlar-spesiyal-cikolata-kutusu-ck191-1-2.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck191-1/M/adidas-ozel-tatlar-spesiyal-cikolata-kutusu-ck191-1-2.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Özel Tatlar Çikolata Kutusu 300 gr</p>
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
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=9492&amp;productgroupid=2&amp;variantcode=ck191-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 30; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1986" data-category="yenilebilir çiçek" href="/cikolata-deryasi-kek-ve-tartolet-buketi-gr1986" tabindex="0" data-position="3">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3924088">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1986-1/M/gr1986-1-8d76c32ea666e56-16743b14.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1986-1/S/gr1986-1-8d76c32ea666e56-16743b14.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1986-1/M/gr1986-1-8d76c32ea666e56-16743b14.jpg 255w" alt="Çikolata Deryası Kek ve Tartolet Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1986-1/M/gr1986-1-8d76c32ea666e56-16743b14.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1986-1/S/gr1986-1-8d76c32ea666e56-16743b14.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1986-1/M/gr1986-1-8d76c32ea666e56-16743b14.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Çikolata Deryası Kek ve Tartolet Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3924088&amp;productgroupid=2&amp;variantcode=gr1986-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order:40; -webkit-order:40; -moz-order:40; -ms-order:40">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="ck124" data-category="yenilebilir çiçek" href="/33-kisiye-ozel-harf-cikolata" tabindex="0" data-position="4">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2198">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/ck124-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/ck124-1/S/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck124-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg 255w" alt="Kişiye Özel Hazırlanan Sütlü Harf Çikolata 264 gr" src="https://cdn03.ciceksepeti.com/cicek/ck124-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/ck124-1/S/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck124-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Hazırlanan Sütlü Harf Çikolata 264 gr</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2198&amp;productgroupid=2&amp;variantcode=ck124-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 50; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr2007" data-category="yenilebilir çiçek" href="/kisiye-ozel-mesajli-pembe-hikaye-tartilet-buketi-gr2007" tabindex="0" data-position="5">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3924068">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr2007-1/M/kisiye-ozel-mesajli-pembe-hikaye-tartilet-buketi-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr2007-1/S/kisiye-ozel-mesajli-pembe-hikaye-tartilet-buketi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/gr2007-1/M/kisiye-ozel-mesajli-pembe-hikaye-tartilet-buketi-standart-boy.jpeg 255w" alt="Kişiye Özel Mesajlı Pembe Hikaye Tartılet Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr2007-1/M/kisiye-ozel-mesajli-pembe-hikaye-tartilet-buketi-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/gr2007-1/S/kisiye-ozel-mesajli-pembe-hikaye-tartilet-buketi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/gr2007-1/M/kisiye-ozel-mesajli-pembe-hikaye-tartilet-buketi-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Mesajlı Pembe Hikaye Tartılet Buketi</p>
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
										</div> <span class="products-stars__review-count">(612)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3924068&amp;productgroupid=2&amp;variantcode=gr2007-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 60; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1970" data-category="yenilebilir çiçek" href="/kisisellestirilebilir-mesajli-pembe-lezzet-kurabiye-ve-truf-kek-buketi-gr1970" tabindex="0" data-position="6">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3630021">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1970-1/M/gr1970-1-8d6d21a6684841d-233f1d46.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1970-1/S/gr1970-1-8d6d21a6684841d-233f1d46.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1970-1/M/gr1970-1-8d6d21a6684841d-233f1d46.jpg 255w" alt="Kişiselleştirilebilir Mesajlı Pembe Lezzet Kurabiye ve Truf Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1970-1/M/gr1970-1-8d6d21a6684841d-233f1d46.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1970-1/S/gr1970-1-8d6d21a6684841d-233f1d46.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1970-1/M/gr1970-1-8d6d21a6684841d-233f1d46.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiselleştirilebilir Mesajlı Pembe Lezzet Kurabiye ve Truf Kek Buketi</p>
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
										</div> <span class="products-stars__review-count">(784)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3630021&amp;productgroupid=2&amp;variantcode=gr1970-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:70; -webkit-order:70; -moz-order:70; -ms-order:70">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1557" data-category="yenilebilir çiçek" href="/kalbimin-en-tatli-yeri-gul-kek-buketi-gr1557" tabindex="0" data-position="7">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2339632">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1557-1/M/kalbimin-en-tatli-yeri-gul-kek-buketi-gr1557-1-8d4870c25e66fe8-c335db8f.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1557-1/S/kalbimin-en-tatli-yeri-gul-kek-buketi-gr1557-1-8d4870c25e66fe8-c335db8f.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1557-1/M/kalbimin-en-tatli-yeri-gul-kek-buketi-gr1557-1-8d4870c25e66fe8-c335db8f.jpg 255w" alt="Kalbimin En Tatlı Yeri Gül Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1557-1/M/kalbimin-en-tatli-yeri-gul-kek-buketi-gr1557-1-8d4870c25e66fe8-c335db8f.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1557-1/S/kalbimin-en-tatli-yeri-gul-kek-buketi-gr1557-1-8d4870c25e66fe8-c335db8f.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1557-1/M/kalbimin-en-tatli-yeri-gul-kek-buketi-gr1557-1-8d4870c25e66fe8-c335db8f.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kalbimin En Tatlı Yeri Gül Kek Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2339632&amp;productgroupid=2&amp;variantcode=gr1557-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 80; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1796" data-category="yenilebilir çiçek" href="/premium-karisik-cikolata-kutusu-310-gr-gr1796" tabindex="0" data-position="8">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2679197">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1796-1/M/premium-karisik-cikolata-kutusu-310-gr-gr1796-1-8d59afdd2f116fc-166048fd.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1796-1/S/premium-karisik-cikolata-kutusu-310-gr-gr1796-1-8d59afdd2f116fc-166048fd.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1796-1/M/premium-karisik-cikolata-kutusu-310-gr-gr1796-1-8d59afdd2f116fc-166048fd.jpg 255w" alt="Premium Karışık Çikolata Kutusu 310 gr" src="https://cdn03.ciceksepeti.com/cicek/gr1796-1/M/premium-karisik-cikolata-kutusu-310-gr-gr1796-1-8d59afdd2f116fc-166048fd.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1796-1/S/premium-karisik-cikolata-kutusu-310-gr-gr1796-1-8d59afdd2f116fc-166048fd.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1796-1/M/premium-karisik-cikolata-kutusu-310-gr-gr1796-1-8d59afdd2f116fc-166048fd.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Premium Karışık Çikolata Kutusu 310 gr</p>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(696)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2679197&amp;productgroupid=2&amp;variantcode=gr1796-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 90; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1544" data-category="yenilebilir çiçek" href="/kisiye-ozel-aranan-lezzet-kek-kurabiye-ve-truf-aranjmani-gr1544" tabindex="0" data-position="9">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2347253">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1544-1/M/aranan-lezzet-kek-kurabiye-ve-truf-aranjmani-gr1544-1-8d48c91f0c69119-9d44aa09.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1544-1/S/aranan-lezzet-kek-kurabiye-ve-truf-aranjmani-gr1544-1-8d48c91f0c69119-9d44aa09.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1544-1/M/aranan-lezzet-kek-kurabiye-ve-truf-aranjmani-gr1544-1-8d48c91f0c69119-9d44aa09.jpg 255w" alt="Kişiye Özel Aranan Lezzet Kek Kurabiye ve Truf Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/gr1544-1/M/aranan-lezzet-kek-kurabiye-ve-truf-aranjmani-gr1544-1-8d48c91f0c69119-9d44aa09.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1544-1/S/aranan-lezzet-kek-kurabiye-ve-truf-aranjmani-gr1544-1-8d48c91f0c69119-9d44aa09.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1544-1/M/aranan-lezzet-kek-kurabiye-ve-truf-aranjmani-gr1544-1-8d48c91f0c69119-9d44aa09.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Aranan Lezzet Kek Kurabiye ve Truf Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2347253&amp;productgroupid=2&amp;variantcode=gr1544-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:100; -webkit-order:100; -moz-order:100; -ms-order:100">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1816" data-category="yenilebilir çiçek" href="/nice-mutlu-yillar-temali-lezzetli-kek-aranjmani-gr1816" tabindex="0" data-position="10">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3022046">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1816-1/M/nice-mutlu-yillar-temali-lezzetli-kek-aranjmani-gr1816-1-8d6127d6a69a249-df3c0665.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1816-1/S/nice-mutlu-yillar-temali-lezzetli-kek-aranjmani-gr1816-1-8d6127d6a69a249-df3c0665.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1816-1/M/nice-mutlu-yillar-temali-lezzetli-kek-aranjmani-gr1816-1-8d6127d6a69a249-df3c0665.jpg 255w" alt="Nice Mutlu Yıllar Temalı Lezzetli Kek Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/gr1816-1/M/nice-mutlu-yillar-temali-lezzetli-kek-aranjmani-gr1816-1-8d6127d6a69a249-df3c0665.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1816-1/S/nice-mutlu-yillar-temali-lezzetli-kek-aranjmani-gr1816-1-8d6127d6a69a249-df3c0665.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1816-1/M/nice-mutlu-yillar-temali-lezzetli-kek-aranjmani-gr1816-1-8d6127d6a69a249-df3c0665.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Nice Mutlu Yıllar Temalı Lezzetli Kek Aranjmanı</p>
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
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3022046&amp;productgroupid=2&amp;variantcode=gr1816-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 110; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1989" data-category="yenilebilir çiçek" href="/mutluluk-kaynagi-kek-ve-kurabiye-buketi-gr1989" tabindex="0" data-position="11">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3924093">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1989-1/M/gr1989-1-8d76c32c4195b6c-87fb6d4c.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1989-1/S/gr1989-1-8d76c32c4195b6c-87fb6d4c.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1989-1/M/gr1989-1-8d76c32c4195b6c-87fb6d4c.jpg 255w" alt="Mutluluk Kaynağı Kek ve Kurabiye Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1989-1/M/gr1989-1-8d76c32c4195b6c-87fb6d4c.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1989-1/S/gr1989-1-8d76c32c4195b6c-87fb6d4c.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1989-1/M/gr1989-1-8d76c32c4195b6c-87fb6d4c.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Mutluluk Kaynağı Kek ve Kurabiye Buketi</p>
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
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3924093&amp;productgroupid=2&amp;variantcode=gr1989-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 120; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1971" data-category="yenilebilir çiçek" href="/yogun-cikolata-lezzetli-truf-kek-ve-kurabiye-buketi-gr1971" tabindex="0" data-position="12">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3630022">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1971-1/M/gr1971-1-8d6d21a9f217298-1ee46a8.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1971-1/S/gr1971-1-8d6d21a9f217298-1ee46a8.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1971-1/M/gr1971-1-8d6d21a9f217298-1ee46a8.jpg 255w" alt="Yoğun Çikolata Lezzetli Truf Kek ve Kurabiye Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1971-1/M/gr1971-1-8d6d21a9f217298-1ee46a8.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1971-1/S/gr1971-1-8d6d21a9f217298-1ee46a8.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1971-1/M/gr1971-1-8d6d21a9f217298-1ee46a8.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Yoğun Çikolata Lezzetli Truf Kek ve Kurabiye Buketi</p>
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
										</div> <span class="products-stars__review-count">(715)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3630022&amp;productgroupid=2&amp;variantcode=gr1971-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:130; -webkit-order:130; -moz-order:130; -ms-order:130">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr636" data-category="yenilebilir çiçek" href="/neseli-dogum-gunu-kek-ve-kurabiye-buketi-gr636" tabindex="0" data-position="13">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="115699">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr636-1/M/neseli-dogum-gunu-kek-ve-kurabiye-buketi-gr636-1-8.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr636-1/S/neseli-dogum-gunu-kek-ve-kurabiye-buketi-gr636-1-8.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr636-1/M/neseli-dogum-gunu-kek-ve-kurabiye-buketi-gr636-1-8.jpg 255w" alt="Neşeli Doğum Günü Kek ve Kurabiye Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr636-1/M/neseli-dogum-gunu-kek-ve-kurabiye-buketi-gr636-1-8.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr636-1/S/neseli-dogum-gunu-kek-ve-kurabiye-buketi-gr636-1-8.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr636-1/M/neseli-dogum-gunu-kek-ve-kurabiye-buketi-gr636-1-8.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Neşeli Doğum Günü Kek ve Kurabiye Buketi</p>
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
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=115699&amp;productgroupid=2&amp;variantcode=gr636-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 140; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1855" data-category="yenilebilir çiçek" href="/dogum-gunu-mesajli-cilek-bahcesi-kek-buketi-gr1855" tabindex="0" data-position="14">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3159922">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1855-1/M/dogum-gunu-mesajli-cilek-bahcesi-kek-buketi-gr1855-1-8d64409d07ea08e-3abc4567.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1855-1/S/dogum-gunu-mesajli-cilek-bahcesi-kek-buketi-gr1855-1-8d64409d07ea08e-3abc4567.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1855-1/M/dogum-gunu-mesajli-cilek-bahcesi-kek-buketi-gr1855-1-8d64409d07ea08e-3abc4567.jpg 255w" alt="Doğum Günü Mesajlı Çilek Bahçesi Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1855-1/M/dogum-gunu-mesajli-cilek-bahcesi-kek-buketi-gr1855-1-8d64409d07ea08e-3abc4567.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1855-1/S/dogum-gunu-mesajli-cilek-bahcesi-kek-buketi-gr1855-1-8d64409d07ea08e-3abc4567.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1855-1/M/dogum-gunu-mesajli-cilek-bahcesi-kek-buketi-gr1855-1-8d64409d07ea08e-3abc4567.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Doğum Günü Mesajlı Çilek Bahçesi Kek Buketi</p>
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
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3159922&amp;productgroupid=2&amp;variantcode=gr1855-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:150; -webkit-order:150; -moz-order:150; -ms-order:150">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1509" data-category="yenilebilir çiçek" href="/kisiye-ozel-askin-bas-harfi-gul-kek-buketi-gr1509" tabindex="0" data-position="15">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2325883">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1509-1/M/kisiye-ozel-askin-bas-harfi-gul-kek-buketi-gr1509-1-8d4706ff9c2fc01-838c0c3e.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1509-1/S/kisiye-ozel-askin-bas-harfi-gul-kek-buketi-gr1509-1-8d4706ff9c2fc01-838c0c3e.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1509-1/M/kisiye-ozel-askin-bas-harfi-gul-kek-buketi-gr1509-1-8d4706ff9c2fc01-838c0c3e.jpg 255w" alt="Kişiye Özel Aşkın Baş Harfi Gül Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1509-1/M/kisiye-ozel-askin-bas-harfi-gul-kek-buketi-gr1509-1-8d4706ff9c2fc01-838c0c3e.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1509-1/S/kisiye-ozel-askin-bas-harfi-gul-kek-buketi-gr1509-1-8d4706ff9c2fc01-838c0c3e.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1509-1/M/kisiye-ozel-askin-bas-harfi-gul-kek-buketi-gr1509-1-8d4706ff9c2fc01-838c0c3e.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Aşkın Baş Harfi Gül Kek Buketi</p>
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
										</div> <span class="products-stars__review-count">(579)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2325883&amp;productgroupid=2&amp;variantcode=gr1509-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:160; -webkit-order:160; -moz-order:160; -ms-order:160">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1999" data-category="yenilebilir çiçek" href="/en-guzel-yas-dogum-gunu-kek-ve-tartolet-buketi-gr1999" tabindex="0" data-position="16">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3924066">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1999-1/M/en-guzel-yas-dogum-gunu-kek-ve-tartolet-buketi-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1999-1/S/en-guzel-yas-dogum-gunu-kek-ve-tartolet-buketi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/gr1999-1/M/en-guzel-yas-dogum-gunu-kek-ve-tartolet-buketi-standart-boy.jpeg 255w" alt="En Güzel Yaş Doğum Günü Kek ve Tartolet Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1999-1/M/en-guzel-yas-dogum-gunu-kek-ve-tartolet-buketi-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1999-1/S/en-guzel-yas-dogum-gunu-kek-ve-tartolet-buketi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/gr1999-1/M/en-guzel-yas-dogum-gunu-kek-ve-tartolet-buketi-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">En Güzel Yaş Doğum Günü Kek ve Tartolet Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(248)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3924066&amp;productgroupid=2&amp;variantcode=gr1999-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:170; -webkit-order:170; -moz-order:170; -ms-order:170">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr2008" data-category="yenilebilir çiçek" href="/pembe-cicek-truf-kek-buketi-gr2008" tabindex="0" data-position="17">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3924105">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr2008-1/M/pembe-cicek-truf-kek-buketi-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr2008-1/S/pembe-cicek-truf-kek-buketi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/gr2008-1/M/pembe-cicek-truf-kek-buketi-standart-boy.jpeg 255w" alt="Pembe Çiçek Truf Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr2008-1/M/pembe-cicek-truf-kek-buketi-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/gr2008-1/S/pembe-cicek-truf-kek-buketi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/gr2008-1/M/pembe-cicek-truf-kek-buketi-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Pembe Çiçek Truf Kek Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(275)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3924105&amp;productgroupid=2&amp;variantcode=gr2008-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:180; -webkit-order:180; -moz-order:180; -ms-order:180">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="ck380" data-category="yenilebilir çiçek" href="/bogurtlenli-cikolata-surprizli-ayicik-ck380" tabindex="0" data-position="18">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2429184">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/ck380-1/M/bogurtlenli-cikolata-surprizli-ayicik-ck380-1-8d4e5589e969ffc-68d92e51.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/ck380-1/S/bogurtlenli-cikolata-surprizli-ayicik-ck380-1-8d4e5589e969ffc-68d92e51.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck380-1/M/bogurtlenli-cikolata-surprizli-ayicik-ck380-1-8d4e5589e969ffc-68d92e51.jpg 255w" alt="Böğürtlenli Çikolata Sürprizli Ayıcık 150 gr" src="https://cdn03.ciceksepeti.com/cicek/ck380-1/M/bogurtlenli-cikolata-surprizli-ayicik-ck380-1-8d4e5589e969ffc-68d92e51.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/ck380-1/S/bogurtlenli-cikolata-surprizli-ayicik-ck380-1-8d4e5589e969ffc-68d92e51.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck380-1/M/bogurtlenli-cikolata-surprizli-ayicik-ck380-1-8d4e5589e969ffc-68d92e51.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Böğürtlenli Çikolata Sürprizli Ayıcık 150 gr</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(416)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2429184&amp;productgroupid=2&amp;variantcode=ck380-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:190; -webkit-order:190; -moz-order:190; -ms-order:190">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1732" data-category="yenilebilir çiçek" href="/kalbimin-lezzet-kosesi-kek-aranjmani-gr1732" tabindex="0" data-position="19">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2492662">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1732-1/M/kalbimin-lezzet-kosesi-kek-aranjmani-gr1732-1-8d50fbba67672ed-a7051178.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1732-1/S/kalbimin-lezzet-kosesi-kek-aranjmani-gr1732-1-8d50fbba67672ed-a7051178.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1732-1/M/kalbimin-lezzet-kosesi-kek-aranjmani-gr1732-1-8d50fbba67672ed-a7051178.jpg 255w" alt="Kalbimin Lezzet Köşesi Kek Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/gr1732-1/M/kalbimin-lezzet-kosesi-kek-aranjmani-gr1732-1-8d50fbba67672ed-a7051178.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1732-1/S/kalbimin-lezzet-kosesi-kek-aranjmani-gr1732-1-8d50fbba67672ed-a7051178.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1732-1/M/kalbimin-lezzet-kosesi-kek-aranjmani-gr1732-1-8d50fbba67672ed-a7051178.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kalbimin Lezzet Köşesi Kek Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(617)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2492662&amp;productgroupid=2&amp;variantcode=gr1732-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 200; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr666" data-category="yenilebilir çiçek" href="/tatli-mutluluk-kek-buketi-gr666" tabindex="0" data-position="20">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="120239">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr666-1/M/tatli-mutluluk-kek-buketi-gr666-1-2.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr666-1/S/tatli-mutluluk-kek-buketi-gr666-1-2.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr666-1/M/tatli-mutluluk-kek-buketi-gr666-1-2.jpg 255w" alt="Tatlı Mutluluk Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr666-1/M/tatli-mutluluk-kek-buketi-gr666-1-2.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr666-1/S/tatli-mutluluk-kek-buketi-gr666-1-2.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr666-1/M/tatli-mutluluk-kek-buketi-gr666-1-2.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Tatlı Mutluluk Kek Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=120239&amp;productgroupid=2&amp;variantcode=gr666-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 210; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr655" data-category="yenilebilir çiçek" href="/surprizli-ordek-ve-brownie-kek-buketi-gr655" tabindex="0" data-position="21">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="119786">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr655-1/M/surprizli-ordek-ve-brownie-kek-buketi-gr655-1-5.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr655-1/S/surprizli-ordek-ve-brownie-kek-buketi-gr655-1-5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr655-1/M/surprizli-ordek-ve-brownie-kek-buketi-gr655-1-5.jpg 255w" alt="Sürprizli Ördek ve Brownie Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr655-1/M/surprizli-ordek-ve-brownie-kek-buketi-gr655-1-5.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr655-1/S/surprizli-ordek-ve-brownie-kek-buketi-gr655-1-5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr655-1/M/surprizli-ordek-ve-brownie-kek-buketi-gr655-1-5.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Sürprizli Ördek ve Brownie Kek Buketi</p>
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
										</div> <span class="products-stars__review-count">(417)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=119786&amp;productgroupid=2&amp;variantcode=gr655-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:220; -webkit-order:220; -moz-order:220; -ms-order:220">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1571" data-category="yenilebilir çiçek" href="/mini-pembe-ask-truf-ve-kek-buketi-gr1571" tabindex="0" data-position="22">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2339642">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1571-1/M/mini-pembe-ask-truf-ve-kek-buketi-gr1571-1-8d4870cd5362651-9c4c93af.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1571-1/S/mini-pembe-ask-truf-ve-kek-buketi-gr1571-1-8d4870cd5362651-9c4c93af.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1571-1/M/mini-pembe-ask-truf-ve-kek-buketi-gr1571-1-8d4870cd5362651-9c4c93af.jpg 255w" alt="Mini Pembe Aşk Truf ve Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1571-1/M/mini-pembe-ask-truf-ve-kek-buketi-gr1571-1-8d4870cd5362651-9c4c93af.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1571-1/S/mini-pembe-ask-truf-ve-kek-buketi-gr1571-1-8d4870cd5362651-9c4c93af.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1571-1/M/mini-pembe-ask-truf-ve-kek-buketi-gr1571-1-8d4870cd5362651-9c4c93af.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Mini Pembe Aşk Truf ve Kek Buketi</p>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2339642&amp;productgroupid=2&amp;variantcode=gr1571-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 230; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1938" data-category="yenilebilir çiçek" href="/kalbimin-kelebegi-truf-kutusu-gr1938" tabindex="0" data-position="23">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3362662">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1938-1/M/kalbimin-kelebegi-truf-kutusu-gr1938-1-8d68de683959605-d5c37d23.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1938-1/S/kalbimin-kelebegi-truf-kutusu-gr1938-1-8d68de683959605-d5c37d23.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1938-1/M/kalbimin-kelebegi-truf-kutusu-gr1938-1-8d68de683959605-d5c37d23.jpg 255w" alt="Kalbimin Kelebeği Truf Kutusu" src="https://cdn03.ciceksepeti.com/cicek/gr1938-1/M/kalbimin-kelebegi-truf-kutusu-gr1938-1-8d68de683959605-d5c37d23.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1938-1/S/kalbimin-kelebegi-truf-kutusu-gr1938-1-8d68de683959605-d5c37d23.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1938-1/M/kalbimin-kelebegi-truf-kutusu-gr1938-1-8d68de683959605-d5c37d23.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kalbimin Kelebeği Truf Kutusu</p>
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
										</div> <span class="products-stars__review-count">(614)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3362662&amp;productgroupid=2&amp;variantcode=gr1938-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:240; -webkit-order:240; -moz-order:240; -ms-order:240">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr621" data-category="yenilebilir çiçek" href="/en-guzel-dogum-gunu-kek-ve-kurabiye-buketi-gr621" tabindex="0" data-position="24">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="115216">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr621-1/M/en-guzel-dogum-gunu-kek-ve-kurabiye-buketi-gr621-1-5.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr621-1/S/en-guzel-dogum-gunu-kek-ve-kurabiye-buketi-gr621-1-5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr621-1/M/en-guzel-dogum-gunu-kek-ve-kurabiye-buketi-gr621-1-5.jpg 255w" alt="En Güzel Doğum Günü Kek ve Kurabiye Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr621-1/M/en-guzel-dogum-gunu-kek-ve-kurabiye-buketi-gr621-1-5.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr621-1/S/en-guzel-dogum-gunu-kek-ve-kurabiye-buketi-gr621-1-5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr621-1/M/en-guzel-dogum-gunu-kek-ve-kurabiye-buketi-gr621-1-5.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">En Güzel Doğum Günü Kek ve Kurabiye Buketi</p>
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
										</div> <span class="products-stars__review-count">(371)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=115216&amp;productgroupid=2&amp;variantcode=gr621-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:250; -webkit-order:250; -moz-order:250; -ms-order:250">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1551" data-category="yenilebilir çiçek" href="/kisiye-ozel-smile-vazoda-mutluluk-dagitan-kek-buketi-gr1551" tabindex="0" data-position="25">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2339628">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1551-1/M/kisiye-ozel-smile-vazoda-mutluluk-dagitan-kek-buketi-gr1551-1-8d4870bfe2bfb77-59c68254.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1551-1/S/kisiye-ozel-smile-vazoda-mutluluk-dagitan-kek-buketi-gr1551-1-8d4870bfe2bfb77-59c68254.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1551-1/M/kisiye-ozel-smile-vazoda-mutluluk-dagitan-kek-buketi-gr1551-1-8d4870bfe2bfb77-59c68254.jpg 255w" alt="Kişiye Özel Smile Vazoda Mutluluk Dağıtan Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1551-1/M/kisiye-ozel-smile-vazoda-mutluluk-dagitan-kek-buketi-gr1551-1-8d4870bfe2bfb77-59c68254.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1551-1/S/kisiye-ozel-smile-vazoda-mutluluk-dagitan-kek-buketi-gr1551-1-8d4870bfe2bfb77-59c68254.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1551-1/M/kisiye-ozel-smile-vazoda-mutluluk-dagitan-kek-buketi-gr1551-1-8d4870bfe2bfb77-59c68254.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Smile Vazoda Mutluluk Dağıtan Kek Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2339628&amp;productgroupid=2&amp;variantcode=gr1551-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 260; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr2048" data-category="yenilebilir çiçek" href="/lezzet-duragi-kek-kurabiye-ve-pirinc-patlagi-aranjmani-gr2048" tabindex="0" data-position="26">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4381247">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr2048-1/M/gr2048-1-8d7d002e5c01f94-7a959d7b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr2048-1/S/gr2048-1-8d7d002e5c01f94-7a959d7b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr2048-1/M/gr2048-1-8d7d002e5c01f94-7a959d7b.jpg 255w" alt="Lezzet Durağı Kek Kurabiye ve Pirinç Patlağı Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/gr2048-1/M/gr2048-1-8d7d002e5c01f94-7a959d7b.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr2048-1/S/gr2048-1-8d7d002e5c01f94-7a959d7b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr2048-1/M/gr2048-1-8d7d002e5c01f94-7a959d7b.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Lezzet Durağı Kek Kurabiye ve Pirinç Patlağı Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%10</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">49</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(97)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4381247&amp;productgroupid=2&amp;variantcode=gr2048-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 270; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1862" data-category="yenilebilir çiçek" href="/tatli-pelus-esek-ve-madlen-kutusu-gr1862" tabindex="0" data-position="27">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3159930">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1862-1/M/tatli-pelus-esek-ve-madlen-kutusu-gr1862-1-8d6456683c69b7d-7f288b1d.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1862-1/S/tatli-pelus-esek-ve-madlen-kutusu-gr1862-1-8d6456683c69b7d-7f288b1d.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1862-1/M/tatli-pelus-esek-ve-madlen-kutusu-gr1862-1-8d6456683c69b7d-7f288b1d.jpg 255w" alt="Tatlı Peluş Eşek ve Madlen Kutusu 110 gr" src="https://cdn03.ciceksepeti.com/cicek/gr1862-1/M/tatli-pelus-esek-ve-madlen-kutusu-gr1862-1-8d6456683c69b7d-7f288b1d.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1862-1/S/tatli-pelus-esek-ve-madlen-kutusu-gr1862-1-8d6456683c69b7d-7f288b1d.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1862-1/M/tatli-pelus-esek-ve-madlen-kutusu-gr1862-1-8d6456683c69b7d-7f288b1d.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Tatlı Peluş Eşek ve Madlen Kutusu 110 gr</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(185)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3159930&amp;productgroupid=2&amp;variantcode=gr1862-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:280; -webkit-order:280; -moz-order:280; -ms-order:280">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1809" data-category="yenilebilir çiçek" href="/askin-en-tatli-lezzeti-kek-buketi-gr1809" tabindex="0" data-position="28">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3022040">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1809-1/M/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1809-1/S/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1809-1/M/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg 255w" alt="Aşkın En Tatlı Hali Kek Aranjmanı Lezzet Sepeti" src="https://cdn03.ciceksepeti.com/cicek/gr1809-1/M/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1809-1/S/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1809-1/M/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Aşkın En Tatlı Hali Kek Aranjmanı Lezzet Sepeti</p>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(627)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3022040&amp;productgroupid=2&amp;variantcode=gr1809-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 290; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr650" data-category="yenilebilir çiçek" href="/nice-senelere-kek-buketi-gr650" tabindex="0" data-position="29">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="119412">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr650-1/M/nice-senelere-kek-buketi-gr650-1-3.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr650-1/S/nice-senelere-kek-buketi-gr650-1-3.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr650-1/M/nice-senelere-kek-buketi-gr650-1-3.jpg 255w" alt="Nice Senelere Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr650-1/M/nice-senelere-kek-buketi-gr650-1-3.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr650-1/S/nice-senelere-kek-buketi-gr650-1-3.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr650-1/M/nice-senelere-kek-buketi-gr650-1-3.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Nice Senelere Kek Buketi</p>
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
										</div> <span class="products-stars__review-count">(951)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=119412&amp;productgroupid=2&amp;variantcode=gr650-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:300; -webkit-order:300; -moz-order:300; -ms-order:300">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1996" data-category="yenilebilir çiçek" href="/gece-yildizi-kisiye-ozel-mesajli-tartolet-ve-truf-kek-buketi-gr1996" tabindex="0" data-position="30">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3924063">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1996-1/M/gece-yildizi-kisiye-ozel-mesajli-tartolet-ve-truf-kek-buketi-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1996-1/S/gece-yildizi-kisiye-ozel-mesajli-tartolet-ve-truf-kek-buketi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/gr1996-1/M/gece-yildizi-kisiye-ozel-mesajli-tartolet-ve-truf-kek-buketi-standart-boy.jpeg 255w" alt="Gece Yıldızı Kişiye Özel Mesajlı Tartolet ve Truf Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1996-1/M/gece-yildizi-kisiye-ozel-mesajli-tartolet-ve-truf-kek-buketi-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1996-1/S/gece-yildizi-kisiye-ozel-mesajli-tartolet-ve-truf-kek-buketi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/gr1996-1/M/gece-yildizi-kisiye-ozel-mesajli-tartolet-ve-truf-kek-buketi-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Gece Yıldızı Kişiye Özel Mesajlı Tartolet ve Truf Kek Buketi</p>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(401)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3924063&amp;productgroupid=2&amp;variantcode=gr1996-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:310; -webkit-order:310; -moz-order:310; -ms-order:310">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1819" data-category="yenilebilir çiçek" href="/cikolata-asiklarina-ozel-mesajli-bitter-kek-aranjmani-gr1819" tabindex="0" data-position="31">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3022049">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1819-1/M/cikolata-asiklarina-ozel-mesajli-bitter-kek-aranjmani-gr1819-1-8d6127dd29c942f-8970b5e2.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1819-1/S/cikolata-asiklarina-ozel-mesajli-bitter-kek-aranjmani-gr1819-1-8d6127dd29c942f-8970b5e2.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1819-1/M/cikolata-asiklarina-ozel-mesajli-bitter-kek-aranjmani-gr1819-1-8d6127dd29c942f-8970b5e2.jpg 255w" alt="Çikolata Aşıklarına Özel Mesajlı Bitter Kek Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/gr1819-1/M/cikolata-asiklarina-ozel-mesajli-bitter-kek-aranjmani-gr1819-1-8d6127dd29c942f-8970b5e2.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1819-1/S/cikolata-asiklarina-ozel-mesajli-bitter-kek-aranjmani-gr1819-1-8d6127dd29c942f-8970b5e2.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1819-1/M/cikolata-asiklarina-ozel-mesajli-bitter-kek-aranjmani-gr1819-1-8d6127dd29c942f-8970b5e2.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Çikolata Aşıklarına Özel Mesajlı Bitter Kek Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(311)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3022049&amp;productgroupid=2&amp;variantcode=gr1819-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 320; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr2043" data-category="yenilebilir çiçek" href="/pembe-tatlar-pirinc-patlagi-aranjmani-gr2043" tabindex="0" data-position="32">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4381240">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr2043-1/M/gr2043-1-8d7d000cadd4cd4-70c2057c.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr2043-1/S/gr2043-1-8d7d000cadd4cd4-70c2057c.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr2043-1/M/gr2043-1-8d7d000cadd4cd4-70c2057c.jpg 255w" alt="Pembe Tatlar Pirinç Patlağı Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/gr2043-1/M/gr2043-1-8d7d000cadd4cd4-70c2057c.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr2043-1/S/gr2043-1-8d7d000cadd4cd4-70c2057c.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr2043-1/M/gr2043-1-8d7d000cadd4cd4-70c2057c.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Pembe Tatlar Pirinç Patlağı Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(85)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4381240&amp;productgroupid=2&amp;variantcode=gr2043-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 330; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1815" data-category="yenilebilir çiçek" href="/kisisellestirilebilir-mesajli-kurabiyesi-ile-mutluluk-buketi-gr1815" tabindex="0" data-position="33">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3022045">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1815-1/M/kisisellestirilebilir-mesajli-kurabiyesi-ile-mutluluk-buketi-gr1815-1-8d6127d0f97edc1-2656d74c.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1815-1/S/kisisellestirilebilir-mesajli-kurabiyesi-ile-mutluluk-buketi-gr1815-1-8d6127d0f97edc1-2656d74c.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1815-1/M/kisisellestirilebilir-mesajli-kurabiyesi-ile-mutluluk-buketi-gr1815-1-8d6127d0f97edc1-2656d74c.jpg 255w" alt="Kişiselleştirilebilir Mesajlı Kurabiyesi ile Mutluluk Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1815-1/M/kisisellestirilebilir-mesajli-kurabiyesi-ile-mutluluk-buketi-gr1815-1-8d6127d0f97edc1-2656d74c.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1815-1/S/kisisellestirilebilir-mesajli-kurabiyesi-ile-mutluluk-buketi-gr1815-1-8d6127d0f97edc1-2656d74c.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1815-1/M/kisisellestirilebilir-mesajli-kurabiyesi-ile-mutluluk-buketi-gr1815-1-8d6127d0f97edc1-2656d74c.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiselleştirilebilir Mesajlı Kurabiyesi ile Mutluluk Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(833)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3022045&amp;productgroupid=2&amp;variantcode=gr1815-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:340; -webkit-order:340; -moz-order:340; -ms-order:340">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1948" data-category="yenilebilir çiçek" href="/gokkusagi-kek-buketi-gr1948" tabindex="0" data-position="34">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3495107">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1948-1/M/gokkusagi-kek-buketi-standart-boy-2.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1948-1/S/gokkusagi-kek-buketi-standart-boy-2.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/gr1948-1/M/gokkusagi-kek-buketi-standart-boy-2.jpeg 255w" alt="Gökkuşağı Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1948-1/M/gokkusagi-kek-buketi-standart-boy-2.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1948-1/S/gokkusagi-kek-buketi-standart-boy-2.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/gr1948-1/M/gokkusagi-kek-buketi-standart-boy-2.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Gökkuşağı Kek Buketi</p>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(112)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3495107&amp;productgroupid=2&amp;variantcode=gr1948-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 350; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1217" data-category="yenilebilir çiçek" href="/pembe-kalpler-kek-ve-kurabiye-buketi" tabindex="0" data-position="35">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2304559">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1217-1/M/pembe-kalpler-kek-ve-kurabiye-buketi-gr1217-1-8d459798c019c1f-e4291afa.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1217-1/S/pembe-kalpler-kek-ve-kurabiye-buketi-gr1217-1-8d459798c019c1f-e4291afa.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1217-1/M/pembe-kalpler-kek-ve-kurabiye-buketi-gr1217-1-8d459798c019c1f-e4291afa.jpg 255w" alt="Pembe Kalpler Kek ve Kurabiye Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1217-1/M/pembe-kalpler-kek-ve-kurabiye-buketi-gr1217-1-8d459798c019c1f-e4291afa.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1217-1/S/pembe-kalpler-kek-ve-kurabiye-buketi-gr1217-1-8d459798c019c1f-e4291afa.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1217-1/M/pembe-kalpler-kek-ve-kurabiye-buketi-gr1217-1-8d459798c019c1f-e4291afa.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Pembe Kalpler Kek ve Kurabiye Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(830)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2304559&amp;productgroupid=2&amp;variantcode=gr1217-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:360; -webkit-order:360; -moz-order:360; -ms-order:360">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr622" data-category="yenilebilir çiçek" href="/tatli-surpriz-truf-kek-kutusu-gr622" tabindex="0" data-position="36">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="115221">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr622-1/M/tatli-surpriz-truf-kek-kutusu-gr622-1-8d4492716657236-13911bf.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr622-1/S/tatli-surpriz-truf-kek-kutusu-gr622-1-8d4492716657236-13911bf.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr622-1/M/tatli-surpriz-truf-kek-kutusu-gr622-1-8d4492716657236-13911bf.jpg 255w" alt="Tatlı Sürpriz Truf Kek Kutusu" src="https://cdn03.ciceksepeti.com/cicek/gr622-1/M/tatli-surpriz-truf-kek-kutusu-gr622-1-8d4492716657236-13911bf.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr622-1/S/tatli-surpriz-truf-kek-kutusu-gr622-1-8d4492716657236-13911bf.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr622-1/M/tatli-surpriz-truf-kek-kutusu-gr622-1-8d4492716657236-13911bf.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Tatlı Sürpriz Truf Kek Kutusu</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(727)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=115221&amp;productgroupid=2&amp;variantcode=gr622-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:370; -webkit-order:370; -moz-order:370; -ms-order:370">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1212" data-category="yenilebilir çiçek" href="/nice-mutlu-yillar-kurabiye-ve-kek-buketi" tabindex="0" data-position="37">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2304554">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1212-1/M/nice-mutlu-yillar-kurabiye-ve-kek-buketi-gr1212-1-8d459792eae97be-fbebcedd.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1212-1/S/nice-mutlu-yillar-kurabiye-ve-kek-buketi-gr1212-1-8d459792eae97be-fbebcedd.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1212-1/M/nice-mutlu-yillar-kurabiye-ve-kek-buketi-gr1212-1-8d459792eae97be-fbebcedd.jpg 255w" alt="Nice Mutlu Yıllar Kurabiye ve Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1212-1/M/nice-mutlu-yillar-kurabiye-ve-kek-buketi-gr1212-1-8d459792eae97be-fbebcedd.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1212-1/S/nice-mutlu-yillar-kurabiye-ve-kek-buketi-gr1212-1-8d459792eae97be-fbebcedd.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1212-1/M/nice-mutlu-yillar-kurabiye-ve-kek-buketi-gr1212-1-8d459792eae97be-fbebcedd.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Nice Mutlu Yıllar Kurabiye ve Kek Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="price price--now" data-price="169.99">
												<div class="price__left"> <span class="price__integer-value">169</span>
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
										</div> <span class="products-stars__review-count">(207)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2304554&amp;productgroupid=2&amp;variantcode=gr1212-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 380; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="ck123" data-category="yenilebilir çiçek" href="/kisiye-ozel-hazirlanan-sutlu-harf-cikolata" tabindex="0" data-position="38">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2197">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/ck123-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck123-1-8d51f9693c354a4-5c643928.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/ck123-1/S/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck123-1-8d51f9693c354a4-5c643928.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck123-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck123-1-8d51f9693c354a4-5c643928.jpg 255w" alt="Kişiye Özel Hazırlanan Sütlü Harf Çikolata 176 gr" src="https://cdn03.ciceksepeti.com/cicek/ck123-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck123-1-8d51f9693c354a4-5c643928.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/ck123-1/S/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck123-1-8d51f9693c354a4-5c643928.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck123-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck123-1-8d51f9693c354a4-5c643928.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Hazırlanan Sütlü Harf Çikolata 176 gr</p>
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
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2197&amp;productgroupid=2&amp;variantcode=ck123-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:390; -webkit-order:390; -moz-order:390; -ms-order:390">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr2047" data-category="yenilebilir çiçek" href="/premium-lezzet-kek-kurabiye-ve-pirinc-patlagi-aranjmani-gr2047" tabindex="0" data-position="39">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4381245">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr2047-1/M/gr2047-1-8d7d00247be3136-ba226f26.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr2047-1/S/gr2047-1-8d7d00247be3136-ba226f26.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr2047-1/M/gr2047-1-8d7d00247be3136-ba226f26.jpg 255w" alt="Premium Lezzet Kek Kurabiye ve Pirinç Patlağı Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/gr2047-1/M/gr2047-1-8d7d00247be3136-ba226f26.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr2047-1/S/gr2047-1-8d7d00247be3136-ba226f26.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr2047-1/M/gr2047-1-8d7d00247be3136-ba226f26.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Premium Lezzet Kek Kurabiye ve Pirinç Patlağı Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%8</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">59</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="54.99">
												<div class="price__left"> <span class="price__integer-value">54</span>
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
										</div> <span class="products-stars__review-count">(42)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4381245&amp;productgroupid=2&amp;variantcode=gr2047-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:400; -webkit-order:400; -moz-order:400; -ms-order:400">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr719" data-category="yenilebilir çiçek" href="/kalp-kalbe-kek-buketi-gr719" tabindex="0" data-position="40">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="154665">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr719-1/M/kalp-kalbe-kek-buketi-gr719-1-5.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr719-1/S/kalp-kalbe-kek-buketi-gr719-1-5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr719-1/M/kalp-kalbe-kek-buketi-gr719-1-5.jpg 255w" alt="Kalp Kalbe Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr719-1/M/kalp-kalbe-kek-buketi-gr719-1-5.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr719-1/S/kalp-kalbe-kek-buketi-gr719-1-5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr719-1/M/kalp-kalbe-kek-buketi-gr719-1-5.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kalp Kalbe Kek Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(765)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=154665&amp;productgroupid=2&amp;variantcode=gr719-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 410; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr808" data-category="yenilebilir çiçek" href="/mutlu-yillar-gul-kek-buketi-gr808" tabindex="0" data-position="41">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2180159">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr808-1/M/mutlu-yillar-gul-kek-buketi-gr808-1-3.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr808-1/S/mutlu-yillar-gul-kek-buketi-gr808-1-3.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr808-1/M/mutlu-yillar-gul-kek-buketi-gr808-1-3.jpg 255w" alt="Mutlu Yıllar Gül Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr808-1/M/mutlu-yillar-gul-kek-buketi-gr808-1-3.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr808-1/S/mutlu-yillar-gul-kek-buketi-gr808-1-3.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr808-1/M/mutlu-yillar-gul-kek-buketi-gr808-1-3.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Mutlu Yıllar Gül Kek Buketi</p>
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
										</div> <span class="products-stars__review-count">(533)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2180159&amp;productgroupid=2&amp;variantcode=gr808-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 420; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1474" data-category="yenilebilir çiçek" href="/kisiye-ozel-mesajli-kirmizinin-lezzeti-tartolet-ve-kek-buketi-gr1474" tabindex="0" data-position="42">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2325876">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1474-1/M/kisiye-ozel-mesajli-kirmizinin-lezzeti-tartolet-ve-kek-buketi-gr1474-1-8d4706fc0381b07-eb3dd381.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1474-1/S/kisiye-ozel-mesajli-kirmizinin-lezzeti-tartolet-ve-kek-buketi-gr1474-1-8d4706fc0381b07-eb3dd381.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1474-1/M/kisiye-ozel-mesajli-kirmizinin-lezzeti-tartolet-ve-kek-buketi-gr1474-1-8d4706fc0381b07-eb3dd381.jpg 255w" alt="Kişiye Özel Mesajlı Kırmızının Lezzeti Tartolet ve Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1474-1/M/kisiye-ozel-mesajli-kirmizinin-lezzeti-tartolet-ve-kek-buketi-gr1474-1-8d4706fc0381b07-eb3dd381.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1474-1/S/kisiye-ozel-mesajli-kirmizinin-lezzeti-tartolet-ve-kek-buketi-gr1474-1-8d4706fc0381b07-eb3dd381.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1474-1/M/kisiye-ozel-mesajli-kirmizinin-lezzeti-tartolet-ve-kek-buketi-gr1474-1-8d4706fc0381b07-eb3dd381.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Mesajlı Kırmızının Lezzeti Tartolet ve Kek Buketi</p>
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
										</div> <span class="products-stars__review-count">(405)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2325876&amp;productgroupid=2&amp;variantcode=gr1474-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:430; -webkit-order:430; -moz-order:430; -ms-order:430">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="ck364" data-category="yenilebilir çiçek" href="/happy-birthday-cikolata-kutusu-ck364" tabindex="0" data-position="43">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2230699">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/ck364-1/M/happy-birthday-cikolata-kutusu-ck364-1-636050412464119145.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/ck364-1/S/happy-birthday-cikolata-kutusu-ck364-1-636050412464119145.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck364-1/M/happy-birthday-cikolata-kutusu-ck364-1-636050412464119145.jpg 255w" alt="Happy Birthday Çikolata Kutusu 170 gr" src="https://cdn03.ciceksepeti.com/cicek/ck364-1/M/happy-birthday-cikolata-kutusu-ck364-1-636050412464119145.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/ck364-1/S/happy-birthday-cikolata-kutusu-ck364-1-636050412464119145.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck364-1/M/happy-birthday-cikolata-kutusu-ck364-1-636050412464119145.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Happy Birthday Çikolata Kutusu 170 gr</p>
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
										</div> <span class="products-stars__review-count">(359)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2230699&amp;productgroupid=2&amp;variantcode=ck364-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 440; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="ck379" data-category="yenilebilir çiçek" href="/kahve-drajeli-surpriz-ayicik-ck379" tabindex="0" data-position="44">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2429183">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/ck379-1/M/kahve-drajeli-surpriz-ayicik-ck379-1-8d4e5588ee76e93-ad789749.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/ck379-1/S/kahve-drajeli-surpriz-ayicik-ck379-1-8d4e5588ee76e93-ad789749.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck379-1/M/kahve-drajeli-surpriz-ayicik-ck379-1-8d4e5588ee76e93-ad789749.jpg 255w" alt="Kahve Drajeli Sürpriz Ayıcık 150 gr" src="https://cdn03.ciceksepeti.com/cicek/ck379-1/M/kahve-drajeli-surpriz-ayicik-ck379-1-8d4e5588ee76e93-ad789749.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/ck379-1/S/kahve-drajeli-surpriz-ayicik-ck379-1-8d4e5588ee76e93-ad789749.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck379-1/M/kahve-drajeli-surpriz-ayicik-ck379-1-8d4e5588ee76e93-ad789749.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-badge products__item-badge--medallion icon-medallion"> <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
									</div>
									<div class="products__item-details">
										<p class="products__item-title">Kahve Drajeli Sürpriz Ayıcık 150 gr</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(194)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2429183&amp;productgroupid=2&amp;variantcode=ck379-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:450; -webkit-order:450; -moz-order:450; -ms-order:450">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr619" data-category="yenilebilir çiçek" href="/dogum-gunun-kutlu-olsun-kek-ve-kurabiye-buketi-gr619" tabindex="0" data-position="45">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="114654">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr619-1/M/dogum-gunun-kutlu-olsun-kek-ve-kurabiye-buketi-gr619-1-4.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr619-1/S/dogum-gunun-kutlu-olsun-kek-ve-kurabiye-buketi-gr619-1-4.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr619-1/M/dogum-gunun-kutlu-olsun-kek-ve-kurabiye-buketi-gr619-1-4.jpg 255w" alt="Doğum Günün Kutlu Olsun Kek ve Kurabiye Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr619-1/M/dogum-gunun-kutlu-olsun-kek-ve-kurabiye-buketi-gr619-1-4.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr619-1/S/dogum-gunun-kutlu-olsun-kek-ve-kurabiye-buketi-gr619-1-4.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr619-1/M/dogum-gunun-kutlu-olsun-kek-ve-kurabiye-buketi-gr619-1-4.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Doğum Günün Kutlu Olsun Kek ve Kurabiye Buketi</p>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(334)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=114654&amp;productgroupid=2&amp;variantcode=gr619-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:460; -webkit-order:460; -moz-order:460; -ms-order:460">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1139" data-category="yenilebilir çiçek" href="/ask-lezzeti-kek-buketi-gr1139" tabindex="0" data-position="46">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2241381">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1139-1/M/ask-lezzeti-kek-buketi-gr1139-1-636107598423810055.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1139-1/S/ask-lezzeti-kek-buketi-gr1139-1-636107598423810055.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1139-1/M/ask-lezzeti-kek-buketi-gr1139-1-636107598423810055.jpg 255w" alt="Aşk Lezzeti Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1139-1/M/ask-lezzeti-kek-buketi-gr1139-1-636107598423810055.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1139-1/S/ask-lezzeti-kek-buketi-gr1139-1-636107598423810055.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1139-1/M/ask-lezzeti-kek-buketi-gr1139-1-636107598423810055.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Aşk Lezzeti Kek Buketi</p>
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
										</div> <span class="products-stars__review-count">(465)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2241381&amp;productgroupid=2&amp;variantcode=gr1139-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 470; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1991" data-category="yenilebilir çiçek" href="/kisiye-ozel-mesajli-gonul-bahcesi-kek-tartolet-ve-kurabiye-buketi-gr1991" tabindex="0" data-position="47">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3924096">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1991-1/M/kisiye-ozel-mesajli-gonul-bahcesi-kek-tartolet-ve-kurabiye-buketi-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1991-1/S/kisiye-ozel-mesajli-gonul-bahcesi-kek-tartolet-ve-kurabiye-buketi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/gr1991-1/M/kisiye-ozel-mesajli-gonul-bahcesi-kek-tartolet-ve-kurabiye-buketi-standart-boy.jpeg 255w" alt="Kişiye Özel Mesajlı Gönül Bahçesi Kek Tartolet ve Kurabiye Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1991-1/M/kisiye-ozel-mesajli-gonul-bahcesi-kek-tartolet-ve-kurabiye-buketi-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1991-1/S/kisiye-ozel-mesajli-gonul-bahcesi-kek-tartolet-ve-kurabiye-buketi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/gr1991-1/M/kisiye-ozel-mesajli-gonul-bahcesi-kek-tartolet-ve-kurabiye-buketi-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Mesajlı Gönül Bahçesi Kek Tartolet ve Kurabiye Buketi</p>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(134)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3924096&amp;productgroupid=2&amp;variantcode=gr1991-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 480; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="kc863914" data-category="yenilebilir çiçek" href="/kisiye-ozel-cikolata-toplari-truf-buketi-kc863914" tabindex="0" data-position="48">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2496231">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/kc863914-1/M/kisiye-ozel-cikolata-toplari-truf-buketi-kc863914-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc863914-1/S/kisiye-ozel-cikolata-toplari-truf-buketi-kc863914-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc863914-1/M/kisiye-ozel-cikolata-toplari-truf-buketi-kc863914-1-1.jpg 255w" alt="Kişiye Özel Çikolata Topları Truf Buketi" src="https://cdn03.ciceksepeti.com/cicek/kc863914-1/M/kisiye-ozel-cikolata-toplari-truf-buketi-kc863914-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc863914-1/S/kisiye-ozel-cikolata-toplari-truf-buketi-kc863914-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc863914-1/M/kisiye-ozel-cikolata-toplari-truf-buketi-kc863914-1-1.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Çikolata Topları Truf Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%33</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">59</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2496231&amp;productgroupid=2&amp;variantcode=kc863914-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:490; -webkit-order:490; -moz-order:490; -ms-order:490">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1820" data-category="yenilebilir çiçek" href="/mutluluk-deryasi-ozel-mesaj-kurabiyeli-kek-aranjmani-gr1820" tabindex="0" data-position="49">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3022050">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1820-1/M/mutluluk-deryasi-ozel-mesaj-kurabiyeli-kek-aranjmani-gr1820-1-8d6127df15be49d-30c762ae.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1820-1/S/mutluluk-deryasi-ozel-mesaj-kurabiyeli-kek-aranjmani-gr1820-1-8d6127df15be49d-30c762ae.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1820-1/M/mutluluk-deryasi-ozel-mesaj-kurabiyeli-kek-aranjmani-gr1820-1-8d6127df15be49d-30c762ae.jpg 255w" alt="Mutluluk Deryası Özel Mesaj Kurabiyeli Kek Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/gr1820-1/M/mutluluk-deryasi-ozel-mesaj-kurabiyeli-kek-aranjmani-gr1820-1-8d6127df15be49d-30c762ae.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1820-1/S/mutluluk-deryasi-ozel-mesaj-kurabiyeli-kek-aranjmani-gr1820-1-8d6127df15be49d-30c762ae.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1820-1/M/mutluluk-deryasi-ozel-mesaj-kurabiyeli-kek-aranjmani-gr1820-1-8d6127df15be49d-30c762ae.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Mutluluk Deryası Özel Mesaj Kurabiyeli Kek Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(207)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3022050&amp;productgroupid=2&amp;variantcode=gr1820-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 500; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr2006" data-category="yenilebilir çiçek" href="/kalpten-gelen-sevgi-kek-buketi-gr2006" tabindex="0" data-position="50">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3924067">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr2006-1/M/kalpten-gelen-sevgi-kek-buketi-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr2006-1/S/kalpten-gelen-sevgi-kek-buketi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/gr2006-1/M/kalpten-gelen-sevgi-kek-buketi-standart-boy.jpeg 255w" alt="Kalpten Gelen Sevgi Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr2006-1/M/kalpten-gelen-sevgi-kek-buketi-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/gr2006-1/S/kalpten-gelen-sevgi-kek-buketi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/gr2006-1/M/kalpten-gelen-sevgi-kek-buketi-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kalpten Gelen Sevgi Kek Buketi</p>
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
										</div> <span class="products-stars__review-count">(127)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3924067&amp;productgroupid=2&amp;variantcode=gr2006-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:510; -webkit-order:510; -moz-order:510; -ms-order:510">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1713" data-category="yenilebilir çiçek" href="/bir-buket-lezzetli-kurabiye-gr1713" tabindex="0" data-position="51">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2467367">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1713-1/M/bir-buket-lezzetli-kurabiye-gr1713-1-8d50031b6ceb825-30bcc78.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1713-1/S/bir-buket-lezzetli-kurabiye-gr1713-1-8d50031b6ceb825-30bcc78.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1713-1/M/bir-buket-lezzetli-kurabiye-gr1713-1-8d50031b6ceb825-30bcc78.jpg 255w" alt="Bir Buket Lezzetli Kurabiye" src="https://cdn03.ciceksepeti.com/cicek/gr1713-1/M/bir-buket-lezzetli-kurabiye-gr1713-1-8d50031b6ceb825-30bcc78.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1713-1/S/bir-buket-lezzetli-kurabiye-gr1713-1-8d50031b6ceb825-30bcc78.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1713-1/M/bir-buket-lezzetli-kurabiye-gr1713-1-8d50031b6ceb825-30bcc78.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Bir Buket Lezzetli Kurabiye</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(443)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2467367&amp;productgroupid=2&amp;variantcode=gr1713-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:520; -webkit-order:520; -moz-order:520; -ms-order:520">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1591" data-category="yenilebilir çiçek" href="/gulen-kalpler-kurabiye-ve-truf-buketi-gr1591" tabindex="0" data-position="52">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2364738">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1591-1/M/gulen-kalpler-kurabiye-ve-truf-buketi-gr1591-1-8d4a0f322d923f0-836d5573.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1591-1/S/gulen-kalpler-kurabiye-ve-truf-buketi-gr1591-1-8d4a0f322d923f0-836d5573.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1591-1/M/gulen-kalpler-kurabiye-ve-truf-buketi-gr1591-1-8d4a0f322d923f0-836d5573.jpg 255w" alt="Gülen Kalpler Kurabiye ve Truf Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1591-1/M/gulen-kalpler-kurabiye-ve-truf-buketi-gr1591-1-8d4a0f322d923f0-836d5573.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1591-1/S/gulen-kalpler-kurabiye-ve-truf-buketi-gr1591-1-8d4a0f322d923f0-836d5573.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1591-1/M/gulen-kalpler-kurabiye-ve-truf-buketi-gr1591-1-8d4a0f322d923f0-836d5573.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Gülen Kalpler Kurabiye ve Truf Buketi</p>
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
										</div> <span class="products-stars__review-count">(678)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2364738&amp;productgroupid=2&amp;variantcode=gr1591-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 530; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="kc7361440" data-category="yenilebilir çiçek" href="/askin-tadi-truf-ve-cilek-buketi-kc7361440" tabindex="0" data-position="53">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4275747">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/kc7361440-1/M/askin-tadi-truf-ve-cilek-buketi-kc7361440-1-fba6b9533b3a4906804ae28d387fc6a1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc7361440-1/S/askin-tadi-truf-ve-cilek-buketi-kc7361440-1-fba6b9533b3a4906804ae28d387fc6a1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc7361440-1/M/askin-tadi-truf-ve-cilek-buketi-kc7361440-1-fba6b9533b3a4906804ae28d387fc6a1.jpg 255w" alt="Aşkın Tadı Truf ve Çilek Buketi" src="https://cdn03.ciceksepeti.com/cicek/kc7361440-1/M/askin-tadi-truf-ve-cilek-buketi-kc7361440-1-fba6b9533b3a4906804ae28d387fc6a1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc7361440-1/S/askin-tadi-truf-ve-cilek-buketi-kc7361440-1-fba6b9533b3a4906804ae28d387fc6a1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc7361440-1/M/askin-tadi-truf-ve-cilek-buketi-kc7361440-1-fba6b9533b3a4906804ae28d387fc6a1.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Aşkın Tadı Truf ve Çilek Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%17</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">59</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,99 TL</span>
												</div>
											</div>
											<div class="price price--now" data-price="49.88">
												<div class="price__left"> <span class="price__integer-value">49</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,88 TL</span>
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
										</div> <span class="products-stars__review-count">(717)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4275747&amp;productgroupid=2&amp;variantcode=kc7361440-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 540; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1543" data-category="yenilebilir çiçek" href="/kisiye-ozel-kalbimin-yildizi-kek-kurabiye-ve-truf-aranjmani-gr1543" tabindex="0" data-position="54">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2347246">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1543-1/M/kalbimin-yildizi-kek-kurabiye-ve-truf-aranjmani-gr1543-1-8d48c91ad0c114f-53ff6112.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1543-1/S/kalbimin-yildizi-kek-kurabiye-ve-truf-aranjmani-gr1543-1-8d48c91ad0c114f-53ff6112.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1543-1/M/kalbimin-yildizi-kek-kurabiye-ve-truf-aranjmani-gr1543-1-8d48c91ad0c114f-53ff6112.jpg 255w" alt="Kişiye Özel Kalbimin Yıldızı Kek Kurabiye ve Truf Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/gr1543-1/M/kalbimin-yildizi-kek-kurabiye-ve-truf-aranjmani-gr1543-1-8d48c91ad0c114f-53ff6112.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1543-1/S/kalbimin-yildizi-kek-kurabiye-ve-truf-aranjmani-gr1543-1-8d48c91ad0c114f-53ff6112.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1543-1/M/kalbimin-yildizi-kek-kurabiye-ve-truf-aranjmani-gr1543-1-8d48c91ad0c114f-53ff6112.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Kalbimin Yıldızı Kek Kurabiye ve Truf Aranjmanı</p>
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
										</div> <span class="products-stars__review-count">(393)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2347246&amp;productgroupid=2&amp;variantcode=gr1543-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:550; -webkit-order:550; -moz-order:550; -ms-order:550">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1851" data-category="yenilebilir çiçek" href="/kisiye-ozel-mesajli-bahar-nesesi-kek-buketi-gr1851" tabindex="0" data-position="55">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3159918">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1851-1/M/kisiye-ozel-mesajli-bahar-nesesi-kek-buketi-gr1851-1-8d64408129d77cf-27dfe4dc.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1851-1/S/kisiye-ozel-mesajli-bahar-nesesi-kek-buketi-gr1851-1-8d64408129d77cf-27dfe4dc.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1851-1/M/kisiye-ozel-mesajli-bahar-nesesi-kek-buketi-gr1851-1-8d64408129d77cf-27dfe4dc.jpg 255w" alt="Kişiye Özel Mesajlı Bahar Neşesi Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1851-1/M/kisiye-ozel-mesajli-bahar-nesesi-kek-buketi-gr1851-1-8d64408129d77cf-27dfe4dc.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1851-1/S/kisiye-ozel-mesajli-bahar-nesesi-kek-buketi-gr1851-1-8d64408129d77cf-27dfe4dc.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1851-1/M/kisiye-ozel-mesajli-bahar-nesesi-kek-buketi-gr1851-1-8d64408129d77cf-27dfe4dc.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Mesajlı Bahar Neşesi Kek Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(191)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3159918&amp;productgroupid=2&amp;variantcode=gr1851-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 560; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr862" data-category="yenilebilir çiçek" href="/papatyalarin-icinde-dogum-gunu-kek-buketi-gr862" tabindex="0" data-position="56">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2193005">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr862-1/M/papatyalarin-icinde-dogum-gunu-kek-buketi-gr862-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr862-1/S/papatyalarin-icinde-dogum-gunu-kek-buketi-gr862-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr862-1/M/papatyalarin-icinde-dogum-gunu-kek-buketi-gr862-1-1.jpg 255w" alt="Papatyaların İçinde Doğum Günü Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr862-1/M/papatyalarin-icinde-dogum-gunu-kek-buketi-gr862-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr862-1/S/papatyalarin-icinde-dogum-gunu-kek-buketi-gr862-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr862-1/M/papatyalarin-icinde-dogum-gunu-kek-buketi-gr862-1-1.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Papatyaların İçinde Doğum Günü Kek Buketi</p>
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
										</div> <span class="products-stars__review-count">(414)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2193005&amp;productgroupid=2&amp;variantcode=gr862-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 570; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr911" data-category="yenilebilir çiçek" href="/i-love-you-kek-buketi-gr911" tabindex="0" data-position="57">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2197775">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr911-1/M/i-love-you-kek-buketi-gr911-1-2.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr911-1/S/i-love-you-kek-buketi-gr911-1-2.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr911-1/M/i-love-you-kek-buketi-gr911-1-2.jpg 255w" alt="I love You Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr911-1/M/i-love-you-kek-buketi-gr911-1-2.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr911-1/S/i-love-you-kek-buketi-gr911-1-2.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr911-1/M/i-love-you-kek-buketi-gr911-1-2.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">I love You Kek Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(484)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2197775&amp;productgroupid=2&amp;variantcode=gr911-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:580; -webkit-order:580; -moz-order:580; -ms-order:580">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr773" data-category="yenilebilir çiçek" href="/mutlu-yillar-mini-kek-buketi-gr773" tabindex="0" data-position="58">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2177427">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr773-1/M/mutlu-yillar-mini-kek-buketi-gr773-1-11.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr773-1/S/mutlu-yillar-mini-kek-buketi-gr773-1-11.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr773-1/M/mutlu-yillar-mini-kek-buketi-gr773-1-11.jpg 255w" alt="Mutlu Yıllar Mini Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr773-1/M/mutlu-yillar-mini-kek-buketi-gr773-1-11.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr773-1/S/mutlu-yillar-mini-kek-buketi-gr773-1-11.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr773-1/M/mutlu-yillar-mini-kek-buketi-gr773-1-11.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Mutlu Yıllar Mini Kek Buketi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										</div> <span class="products-stars__review-count">(316)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2177427&amp;productgroupid=2&amp;variantcode=gr773-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 590; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1723" data-category="yenilebilir çiçek" href="/mutluluk-dolu-lezzetler-kek-aranjmani-gr1723" tabindex="0" data-position="59">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2492653">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1723-1/M/mutluluk-dolu-lezzetler-kek-aranjmani-gr1723-1-8d50fb9b0166ecc-ffa6c84.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1723-1/S/mutluluk-dolu-lezzetler-kek-aranjmani-gr1723-1-8d50fb9b0166ecc-ffa6c84.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1723-1/M/mutluluk-dolu-lezzetler-kek-aranjmani-gr1723-1-8d50fb9b0166ecc-ffa6c84.jpg 255w" alt="Mutluluk Dolu Lezzetler Kek Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/gr1723-1/M/mutluluk-dolu-lezzetler-kek-aranjmani-gr1723-1-8d50fb9b0166ecc-ffa6c84.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1723-1/S/mutluluk-dolu-lezzetler-kek-aranjmani-gr1723-1-8d50fb9b0166ecc-ffa6c84.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1723-1/M/mutluluk-dolu-lezzetler-kek-aranjmani-gr1723-1-8d50fb9b0166ecc-ffa6c84.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Mutluluk Dolu Lezzetler Kek Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Bugün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon is-passive"></span>
											<span class="icon-star-fill products-stars__icon icon-half"></span>
										</div> <span class="products-stars__review-count">(458)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2492653&amp;productgroupid=2&amp;variantcode=gr1723-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:600; -webkit-order:600; -moz-order:600; -ms-order:600">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1764" data-category="yenilebilir çiçek" href="/50cm-ayicik-ve-seni-seviyorum-kupali-kek-ve-kurabi-gr1764" tabindex="0" data-position="60">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2513470">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1764-1/M/50cm-ayicik-ve-seni-seviyorum-kupali-kek-ve-kurabi-gr1764-1-8d525eaa042c20b-1ba6be66.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1764-1/S/50cm-ayicik-ve-seni-seviyorum-kupali-kek-ve-kurabi-gr1764-1-8d525eaa042c20b-1ba6be66.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1764-1/M/50cm-ayicik-ve-seni-seviyorum-kupali-kek-ve-kurabi-gr1764-1-8d525eaa042c20b-1ba6be66.jpg 255w" alt="50cm Ayıcık ve Seni Seviyorum Kupalı Kek ve Kurabiye" src="https://cdn03.ciceksepeti.com/cicek/gr1764-1/M/50cm-ayicik-ve-seni-seviyorum-kupali-kek-ve-kurabi-gr1764-1-8d525eaa042c20b-1ba6be66.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1764-1/S/50cm-ayicik-ve-seni-seviyorum-kupali-kek-ve-kurabi-gr1764-1-8d525eaa042c20b-1ba6be66.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1764-1/M/50cm-ayicik-ve-seni-seviyorum-kupali-kek-ve-kurabi-gr1764-1-8d525eaa042c20b-1ba6be66.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">50cm Ayıcık ve Seni Seviyorum Kupalı Kek ve Kurabiye</p>
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
										</div> <span class="products-stars__review-count">(215)</span>
									</div>
								</div>
								<div class="products__subscription-price-wrapper"></div>
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2513470&amp;productgroupid=2&amp;variantcode=gr1764-1">Benzer Ürünleri Gör +</a>
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
						<li class=" first-page active"><a data-ajaxfilter="?df=2007100" data-page="1" href="https://www.ciceksepeti.com/bonnyfood">1</a>
						</li>
						<li class=""><a data-ajaxfilter="?df=2007100&amp;page=2" data-page="2" href="https://www.ciceksepeti.com/bonnyfood?page=2">2</a>
						</li>
						<li class=""><a data-ajaxfilter="?df=2007100&amp;page=3" data-page="3" href="https://www.ciceksepeti.com/bonnyfood?page=3">3</a>
						</li>
						<li class=""><a data-ajaxfilter="?df=2007100&amp;page=4" data-page="4" href="https://www.ciceksepeti.com/bonnyfood?page=4">4</a>
						</li>
						<li class="disabled  pagination__dots"><a href="javascript:void(0)">...</a>
						</li>
						<li class="disabled"><a href="javascript:void(0)">70</a>
						</li>
						<li class=""><a href="https://www.ciceksepeti.com/bonnyfood?page=2" rel="next" data-ajaxfilter="?df=2007100&amp;page=2" data-page="2">Sonraki Sayfa<span class="icon-right-arrow pagination__icon"></span></a>
						</li>
					</ul>
				</div>
				<div class="pagination-area-notext">
					<ul class="pagination">
						<li class="disabled"><a href="javascript:void(0)" rel="prev" data-ajaxfilter="" data-page="0"><span class="icon-left-arrow pagination__icon"></span>Önceki</a>
						</li>
						<li class=""><a href="https://www.ciceksepeti.com/bonnyfood?page=2" rel="next" data-ajaxfilter="?df=2007100&amp;page=2" data-page="2">Sonraki<span class="icon-right-arrow pagination__icon"></span></a>
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
    name: 'Yenilebilir',
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