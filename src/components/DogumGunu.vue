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
				<div class="filter navbar-nav js-filter" >
					<div class="filter__inner">
						<div class="dropdown filter__item js-filter-item" @click='drop' v-bind:class="{'open':open}"> <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
                        	Kategori
                        	<span class="filter__icon-right-arrow icon-down-arrow js-add-caret"></span>
                   			 </a>
							<ul class="dropdown-menu filter__dropdown">
								<li class="filter__dropdown-list ">
									<input id="filter2000266_2007099" name="categoryRadio" data-val="true" data-id="df" data-value="2007099" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="radio" data-url="dogum-gunu-cicekleri" data-ajaxfilter="?df=2007099,2006821" value="dogum-gunu-cicekleri">
									<label class="filter__dropdown-label" for="filter2000266_2007099">Çiçek</label>
									<!--True-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000266_2007100" name="categoryRadio" data-val="true" data-id="df" data-value="2007100" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="radio" data-url="dogum-gunu-kek-kurabiye" data-ajaxfilter="?df=2007100,2006821" value="dogum-gunu-kek-kurabiye">
									<label class="filter__dropdown-label" for="filter2000266_2007100">Yenilebilir Çiçek</label>
									<!--True-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000266_2007101" name="categoryRadio" data-val="true" data-id="df" data-value="2007101" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="radio" data-url="dogum-gunu-hediyeleri" data-ajaxfilter="?df=2007101,2006821" value="dogum-gunu-hediyeleri">
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
								<li class="filter__dropdown-input-wrapper" style="display: block;"> <span class="filter__dropdown-input-icon icon-search"></span>
									<input type="text" class="form-control filter__dropdown-input js-category-filter-input js-only-alphanumeric-characters" placeholder="Ara">
									<div class="filter__dropdown-input__remove-button download"> <span class="icon-close filter__dropdown-input__remove-button-icon"></span>
									</div>
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000308_2009382" data-val="true" data-id="df" data-value="2009382" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009382" data-ajaxfilter="?df=2006821,2009382" value="tum-urunler?df=2006821,2009382">
									<label class="filter__dropdown-label" for="filter2000308_2009382">Anne Bebek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000308_2009383" data-val="true" data-id="df" data-value="2009383" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009383" data-ajaxfilter="?df=2006821,2009383" value="tum-urunler?df=2006821,2009383">
									<label class="filter__dropdown-label" for="filter2000308_2009383">Elektronik</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000308_2007147" data-val="true" data-id="df" data-value="2007147" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007147" data-ajaxfilter="?df=2006821,2007147" value="tum-urunler?df=2006821,2007147">
									<label class="filter__dropdown-label" for="filter2000308_2007147">Ev Yaşam</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000308_2009384" data-val="true" data-id="df" data-value="2009384" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009384" data-ajaxfilter="?df=2006821,2009384" value="tum-urunler?df=2006821,2009384">
									<label class="filter__dropdown-label" for="filter2000308_2009384">Hediyelik</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000308_2008680" data-val="true" data-id="df" data-value="2008680" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2008680" data-ajaxfilter="?df=2006821,2008680" value="tum-urunler?df=2006821,2008680">
									<label class="filter__dropdown-label" for="filter2000308_2008680">Hobi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000308_2009388" data-val="true" data-id="df" data-value="2009388" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009388" data-ajaxfilter="?df=2006821,2009388" value="tum-urunler?df=2006821,2009388">
									<label class="filter__dropdown-label" for="filter2000308_2009388">Kozmetik</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000308_2009385" data-val="true" data-id="df" data-value="2009385" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009385" data-ajaxfilter="?df=2006821,2009385" value="tum-urunler?df=2006821,2009385">
									<label class="filter__dropdown-label" for="filter2000308_2009385">Moda</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000308_2008044" data-val="true" data-id="df" data-value="2008044" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2008044" data-ajaxfilter="?df=2006821,2008044" value="tum-urunler?df=2006821,2008044">
									<label class="filter__dropdown-label" for="filter2000308_2008044">Ofis Kırtasiye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000308_2009386" data-val="true" data-id="df" data-value="2009386" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009386" data-ajaxfilter="?df=2006821,2009386" value="tum-urunler?df=2006821,2009386">
									<label class="filter__dropdown-label" for="filter2000308_2009386">Oto Aksesuar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000308_2009387" data-val="true" data-id="df" data-value="2009387" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009387" data-ajaxfilter="?df=2006821,2009387" value="tum-urunler?df=2006821,2009387">
									<label class="filter__dropdown-label" for="filter2000308_2009387">Oyuncak</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000308_2007931" data-val="true" data-id="df" data-value="2007931" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007931" data-ajaxfilter="?df=2006821,2007931" value="tum-urunler?df=2006821,2007931">
									<label class="filter__dropdown-label" for="filter2000308_2007931">Evcil Hayvanlar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000308_2008662" data-val="true" data-id="df" data-value="2008662" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2008662" data-ajaxfilter="?df=2006821,2008662" value="tum-urunler?df=2006821,2008662">
									<label class="filter__dropdown-label" for="filter2000308_2008662">Spor-Outdoor</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000308_2009390" data-val="true" data-id="df" data-value="2009390" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009390" data-ajaxfilter="?df=2006821,2009390" value="tum-urunler?df=2006821,2009390">
									<label class="filter__dropdown-label" for="filter2000308_2009390">Takı-Saat-Aksesuar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000308_2014253" data-val="true" data-id="df" data-value="2014253" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2014253" data-ajaxfilter="?df=2006821,2014253" value="tum-urunler?df=2006821,2014253">
									<label class="filter__dropdown-label" for="filter2000308_2014253">Hediye Setleri</label>
									<!--False-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop3' v-bind:class="{'open':open3}" > <a class="dropdown-toggle btn filter__button " data-toggle="dropdown">
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
									<input id="filter2000267_2007161" data-val="true" data-id="df" data-value="2007161" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007161" data-ajaxfilter="?df=2006821,2007161" value="tum-urunler?df=2006821,2007161">
									<label class="filter__dropdown-label" for="filter2000267_2007161">Ajanda&amp; Defter</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007140" data-val="true" data-id="df" data-value="2007140" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007140" data-ajaxfilter="?df=2006821,2007140" value="tum-urunler?df=2006821,2007140">
									<label class="filter__dropdown-label" for="filter2000267_2007140">Aksesuar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009846" data-val="true" data-id="df" data-value="2009846" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009846" data-ajaxfilter="?df=2006821,2009846" value="tum-urunler?df=2006821,2009846">
									<label class="filter__dropdown-label" for="filter2000267_2009846">Akülü araçlar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2008080" data-val="true" data-id="df" data-value="2008080" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2008080" data-ajaxfilter="?df=2006821,2008080" value="tum-urunler?df=2006821,2008080">
									<label class="filter__dropdown-label" for="filter2000267_2008080">Albüm</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009847" data-val="true" data-id="df" data-value="2009847" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009847" data-ajaxfilter="?df=2006821,2009847" value="tum-urunler?df=2006821,2009847">
									<label class="filter__dropdown-label" for="filter2000267_2009847">Ana Kucağı, Oto Koltuğu</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009848" data-val="true" data-id="df" data-value="2009848" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009848" data-ajaxfilter="?df=2006821,2009848" value="tum-urunler?df=2006821,2009848">
									<label class="filter__dropdown-label" for="filter2000267_2009848">Anne - Bebek Hediye Sepeti</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007947" data-val="true" data-id="df" data-value="2007947" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007947" data-ajaxfilter="?df=2006821,2007947" value="tum-urunler?df=2006821,2007947">
									<label class="filter__dropdown-label" for="filter2000267_2007947">Ayakkabı</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007930" data-val="true" data-id="df" data-value="2007930" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="bahce" data-ajaxfilter="?df=2007930,2007930" value="bahce">
									<label class="filter__dropdown-label" for="filter2000267_2007930">Bahçe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009849" data-val="true" data-id="df" data-value="2009849" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009849" data-ajaxfilter="?df=2006821,2009849" value="tum-urunler?df=2006821,2009849">
									<label class="filter__dropdown-label" for="filter2000267_2009849">Bebek Bakım - Banyo - Bakım Çantası</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009850" data-val="true" data-id="df" data-value="2009850" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009850" data-ajaxfilter="?df=2006821,2009850" value="tum-urunler?df=2006821,2009850">
									<label class="filter__dropdown-label" for="filter2000267_2009850">Balık, Akvaryum</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2008070" data-val="true" data-id="df" data-value="2008070" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2008070" data-ajaxfilter="?df=2006821,2008070" value="tum-urunler?df=2006821,2008070">
									<label class="filter__dropdown-label" for="filter2000267_2008070">Banyo</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009851" data-val="true" data-id="df" data-value="2009851" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009851" data-ajaxfilter="?df=2006821,2009851" value="tum-urunler?df=2006821,2009851">
									<label class="filter__dropdown-label" for="filter2000267_2009851">Bebek Arabası, Puset</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009852" data-val="true" data-id="df" data-value="2009852" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009852" data-ajaxfilter="?df=2006821,2009852" value="tum-urunler?df=2006821,2009852">
									<label class="filter__dropdown-label" for="filter2000267_2009852">Bebek Beslenme</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009853" data-val="true" data-id="df" data-value="2009853" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009853" data-ajaxfilter="?df=2006821,2009853" value="tum-urunler?df=2006821,2009853">
									<label class="filter__dropdown-label" for="filter2000267_2009853">Bebek Bezi ve Islak Mendil, Alt Açma</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2008074" data-val="true" data-id="df" data-value="2008074" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2008074" data-ajaxfilter="?df=2006821,2008074" value="tum-urunler?df=2006821,2008074">
									<label class="filter__dropdown-label" for="filter2000267_2008074">Bebek Giyim</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009854" data-val="true" data-id="df" data-value="2009854" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009854" data-ajaxfilter="?df=2006821,2009854" value="tum-urunler?df=2006821,2009854">
									<label class="filter__dropdown-label" for="filter2000267_2009854">Bebek Güvenliği</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009855" data-val="true" data-id="df" data-value="2009855" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009855" data-ajaxfilter="?df=2006821,2009855" value="tum-urunler?df=2006821,2009855">
									<label class="filter__dropdown-label" for="filter2000267_2009855">Bebek Odası</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009857" data-val="true" data-id="df" data-value="2009857" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009857" data-ajaxfilter="?df=2006821,2009857" value="tum-urunler?df=2006821,2009857">
									<label class="filter__dropdown-label" for="filter2000267_2009857">Bebek Oyuncakları</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009858" data-val="true" data-id="df" data-value="2009858" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009858" data-ajaxfilter="?df=2006821,2009858" value="tum-urunler?df=2006821,2009858">
									<label class="filter__dropdown-label" for="filter2000267_2009858">Beyaz Eşya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009859" data-val="true" data-id="df" data-value="2009859" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009859" data-ajaxfilter="?df=2006821,2009859" value="tum-urunler?df=2006821,2009859">
									<label class="filter__dropdown-label" for="filter2000267_2009859">Bilgisayar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009925" data-val="true" data-id="df" data-value="2009925" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009925" data-ajaxfilter="?df=2006821,2009925" value="tum-urunler?df=2006821,2009925">
									<label class="filter__dropdown-label" for="filter2000267_2009925">Bisiklet</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007110" data-val="true" data-id="df" data-value="2007110" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007110" data-ajaxfilter="?df=2006821,2007110" value="tum-urunler?df=2006821,2007110">
									<label class="filter__dropdown-label" for="filter2000267_2007110">Bonsai</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2069055" data-val="true" data-id="df" data-value="2069055" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2069055" data-ajaxfilter="?df=2006821,2069055" value="tum-urunler?df=2006821,2069055">
									<label class="filter__dropdown-label" for="filter2000267_2069055">Kalanchoe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2069054" data-val="true" data-id="df" data-value="2069054" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2069054" data-ajaxfilter="?df=2006821,2069054" value="tum-urunler?df=2006821,2069054">
									<label class="filter__dropdown-label" for="filter2000267_2069054">Tillendsia</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2069053" data-val="true" data-id="df" data-value="2069053" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2069053" data-ajaxfilter="?df=2006821,2069053" value="tum-urunler?df=2006821,2069053">
									<label class="filter__dropdown-label" for="filter2000267_2069053">Chamadora</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2069052" data-val="true" data-id="df" data-value="2069052" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2069052" data-ajaxfilter="?df=2006821,2069052" value="tum-urunler?df=2006821,2069052">
									<label class="filter__dropdown-label" for="filter2000267_2069052">Krizantem</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2069056" data-val="true" data-id="df" data-value="2069056" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2069056" data-ajaxfilter="?df=2006821,2069056" value="tum-urunler?df=2006821,2069056">
									<label class="filter__dropdown-label" for="filter2000267_2069056">Nandina</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2010589" data-val="true" data-id="df" data-value="2010589" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2010589" data-ajaxfilter="?df=2006821,2010589" value="tum-urunler?df=2006821,2010589">
									<label class="filter__dropdown-label" for="filter2000267_2010589">Browni</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007109" data-val="true" data-id="df" data-value="2007109" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007109" data-ajaxfilter="?df=2006821,2007109" value="tum-urunler?df=2006821,2007109">
									<label class="filter__dropdown-label" for="filter2000267_2007109">Buket Çiçek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007105" data-val="true" data-id="df" data-value="2007105" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007105" data-ajaxfilter="?df=2006821,2007105" value="tum-urunler?df=2006821,2007105">
									<label class="filter__dropdown-label" for="filter2000267_2007105">Cenaze Çelenkleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009860" data-val="true" data-id="df" data-value="2009860" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009860" data-ajaxfilter="?df=2006821,2009860" value="tum-urunler?df=2006821,2009860">
									<label class="filter__dropdown-label" for="filter2000267_2009860">Cep Telefonu</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2015147" data-val="true" data-id="df" data-value="2015147" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2015147" data-ajaxfilter="?df=2006821,2015147" value="tum-urunler?df=2006821,2015147">
									<label class="filter__dropdown-label" for="filter2000267_2015147">Gıda Sepetleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007141" data-val="true" data-id="df" data-value="2007141" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007141" data-ajaxfilter="?df=2006821,2007141" value="tum-urunler?df=2006821,2007141">
									<label class="filter__dropdown-label" for="filter2000267_2007141">Çanta</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007124" data-val="true" data-id="df" data-value="2007124" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007124" data-ajaxfilter="?df=2006821,2007124" value="tum-urunler?df=2006821,2007124">
									<label class="filter__dropdown-label" for="filter2000267_2007124">Çikolata</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007277" data-val="true" data-id="df" data-value="2007277" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007277" data-ajaxfilter="?df=2006821,2007277" value="tum-urunler?df=2006821,2007277">
									<label class="filter__dropdown-label" for="filter2000267_2007277">Dekoratif Çiçekler</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007183" data-val="true" data-id="df" data-value="2007183" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007183" data-ajaxfilter="?df=2006821,2007183" value="tum-urunler?df=2006821,2007183">
									<label class="filter__dropdown-label" for="filter2000267_2007183">Dekoratif Ürünler</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009861" data-val="true" data-id="df" data-value="2009861" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009861" data-ajaxfilter="?df=2006821,2009861" value="tum-urunler?df=2006821,2009861">
									<label class="filter__dropdown-label" for="filter2000267_2009861">Dış mekan Oyuncakları</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007106" data-val="true" data-id="df" data-value="2007106" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007106" data-ajaxfilter="?df=2006821,2007106" value="tum-urunler?df=2006821,2007106">
									<label class="filter__dropdown-label" for="filter2000267_2007106">Düğün Çelenkleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009862" data-val="true" data-id="df" data-value="2009862" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009862" data-ajaxfilter="?df=2006821,2009862" value="tum-urunler?df=2006821,2009862">
									<label class="filter__dropdown-label" for="filter2000267_2009862">Eğitici Oyuncaklar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009863" data-val="true" data-id="df" data-value="2009863" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009863" data-ajaxfilter="?df=2006821,2009863" value="tum-urunler?df=2006821,2009863">
									<label class="filter__dropdown-label" for="filter2000267_2009863">Elektrikli Ev Aletleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009864" data-val="true" data-id="df" data-value="2009864" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009864" data-ajaxfilter="?df=2006821,2009864" value="tum-urunler?df=2006821,2009864">
									<label class="filter__dropdown-label" for="filter2000267_2009864">Emzirme</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2008069" data-val="true" data-id="df" data-value="2008069" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2008069" data-ajaxfilter="?df=2006821,2008069" value="tum-urunler?df=2006821,2008069">
									<label class="filter__dropdown-label" for="filter2000267_2008069">Ev Dekorasyon</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007185" data-val="true" data-id="df" data-value="2007185" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007185" data-ajaxfilter="?df=2006821,2007185" value="tum-urunler?df=2006821,2007185">
									<label class="filter__dropdown-label" for="filter2000267_2007185">Ev Tekstili</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007120" data-val="true" data-id="df" data-value="2007120" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007120" data-ajaxfilter="?df=2006821,2007120" value="tum-urunler?df=2006821,2007120">
									<label class="filter__dropdown-label" for="filter2000267_2007120">Ferforje</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009865" data-val="true" data-id="df" data-value="2009865" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009865" data-ajaxfilter="?df=2006821,2009865" value="tum-urunler?df=2006821,2009865">
									<label class="filter__dropdown-label" for="filter2000267_2009865">Figür, Karakter (Action figure)</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009866" data-val="true" data-id="df" data-value="2009866" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009866" data-ajaxfilter="?df=2006821,2009866" value="tum-urunler?df=2006821,2009866">
									<label class="filter__dropdown-label" for="filter2000267_2009866">Film</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009867" data-val="true" data-id="df" data-value="2009867" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009867" data-ajaxfilter="?df=2006821,2009867" value="tum-urunler?df=2006821,2009867">
									<label class="filter__dropdown-label" for="filter2000267_2009867">Foto &amp; Kamera</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007122" data-val="true" data-id="df" data-value="2007122" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007122" data-ajaxfilter="?df=2006821,2007122" value="tum-urunler?df=2006821,2007122">
									<label class="filter__dropdown-label" for="filter2000267_2007122">Frezya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007847" data-val="true" data-id="df" data-value="2007847" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007847" data-ajaxfilter="?df=2006821,2007847" value="tum-urunler?df=2006821,2007847">
									<label class="filter__dropdown-label" for="filter2000267_2007847">Geleneksel Lezzetler</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009868" data-val="true" data-id="df" data-value="2009868" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009868" data-ajaxfilter="?df=2006821,2009868" value="tum-urunler?df=2006821,2009868">
									<label class="filter__dropdown-label" for="filter2000267_2009868">Seyahat Çantası, Valiz, Seti, Valiz Kılıfı</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007129" data-val="true" data-id="df" data-value="2007129" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007129" data-ajaxfilter="?df=2006821,2007129" value="tum-urunler?df=2006821,2007129">
									<label class="filter__dropdown-label" for="filter2000267_2007129">Gıda Sepetleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007142" data-val="true" data-id="df" data-value="2007142" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007142" data-ajaxfilter="?df=2006821,2007142" value="tum-urunler?df=2006821,2007142">
									<label class="filter__dropdown-label" for="filter2000267_2007142">Giyim</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007103" data-val="true" data-id="df" data-value="2007103" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007103" data-ajaxfilter="?df=2006821,2007103" value="tum-urunler?df=2006821,2007103">
									<label class="filter__dropdown-label" for="filter2000267_2007103">Güller</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007131" data-val="true" data-id="df" data-value="2007131" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007131" data-ajaxfilter="?df=2006821,2007131" value="tum-urunler?df=2006821,2007131">
									<label class="filter__dropdown-label" for="filter2000267_2007131">Hediye Sepetleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007146" data-val="true" data-id="df" data-value="2007146" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007146" data-ajaxfilter="?df=2006821,2007146" value="tum-urunler?df=2006821,2007146">
									<label class="filter__dropdown-label" for="filter2000267_2007146">İlginç Ürünler</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007112" data-val="true" data-id="df" data-value="2007112" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007112" data-ajaxfilter="?df=2006821,2007112" value="tum-urunler?df=2006821,2007112">
									<label class="filter__dropdown-label" for="filter2000267_2007112">Kaktüs</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007159" data-val="true" data-id="df" data-value="2007159" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007159" data-ajaxfilter="?df=2006821,2007159" value="tum-urunler?df=2006821,2007159">
									<label class="filter__dropdown-label" for="filter2000267_2007159">Kalem</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007117" data-val="true" data-id="df" data-value="2007117" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007117" data-ajaxfilter="?df=2006821,2007117" value="tum-urunler?df=2006821,2007117">
									<label class="filter__dropdown-label" for="filter2000267_2007117">Karışık Aranjmanlar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009870" data-val="true" data-id="df" data-value="2009870" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009870" data-ajaxfilter="?df=2006821,2009870" value="tum-urunler?df=2006821,2009870">
									<label class="filter__dropdown-label" for="filter2000267_2009870">Kartvizitlik</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2008933" data-val="true" data-id="df" data-value="2008933" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2008933" data-ajaxfilter="?df=2006821,2008933" value="tum-urunler?df=2006821,2008933">
									<label class="filter__dropdown-label" for="filter2000267_2008933">Kedi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007123" data-val="true" data-id="df" data-value="2007123" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007123" data-ajaxfilter="?df=2006821,2007123" value="tum-urunler?df=2006821,2007123">
									<label class="filter__dropdown-label" for="filter2000267_2007123">Kek - Kurabiye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009871" data-val="true" data-id="df" data-value="2009871" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009871" data-ajaxfilter="?df=2006821,2009871" value="tum-urunler?df=2006821,2009871">
									<label class="filter__dropdown-label" for="filter2000267_2009871">Kişisel Bakım</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009649" data-val="true" data-id="df" data-value="2009649" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009649" data-ajaxfilter="?df=2006821,2009649" value="tum-urunler?df=2006821,2009649">
									<label class="filter__dropdown-label" for="filter2000267_2009649">Kişisel Bakım Aletleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2008081" data-val="true" data-id="df" data-value="2008081" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2008081" data-ajaxfilter="?df=2006821,2008081" value="tum-urunler?df=2006821,2008081">
									<label class="filter__dropdown-label" for="filter2000267_2008081">Kitap</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007132" data-val="true" data-id="df" data-value="2007132" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007132" data-ajaxfilter="?df=2006821,2007132" value="tum-urunler?df=2006821,2007132">
									<label class="filter__dropdown-label" for="filter2000267_2007132">Kokulu Taş/Sabun Aranjmanları</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2008934" data-val="true" data-id="df" data-value="2008934" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2008934" data-ajaxfilter="?df=2006821,2008934" value="tum-urunler?df=2006821,2008934">
									<label class="filter__dropdown-label" for="filter2000267_2008934">Köpek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013201" data-val="true" data-id="df" data-value="2013201" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013201" data-ajaxfilter="?df=2006821,2013201" value="tum-urunler?df=2006821,2013201">
									<label class="filter__dropdown-label" for="filter2000267_2013201">Ev Yaşam Hediye Setleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013171" data-val="true" data-id="df" data-value="2013171" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013171" data-ajaxfilter="?df=2006821,2013171" value="tum-urunler?df=2006821,2013171">
									<label class="filter__dropdown-label" for="filter2000267_2013171">Ofis, Kırtasite Hediye Setleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013205" data-val="true" data-id="df" data-value="2013205" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013205" data-ajaxfilter="?df=2006821,2013205" value="tum-urunler?df=2006821,2013205">
									<label class="filter__dropdown-label" for="filter2000267_2013205">Takı, Saat, Aksesuar Setleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013202" data-val="true" data-id="df" data-value="2013202" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013202" data-ajaxfilter="?df=2006821,2013202" value="tum-urunler?df=2006821,2013202">
									<label class="filter__dropdown-label" for="filter2000267_2013202">Bilgisayar, Tablet</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013198" data-val="true" data-id="df" data-value="2013198" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013198" data-ajaxfilter="?df=2006821,2013198" value="tum-urunler?df=2006821,2013198">
									<label class="filter__dropdown-label" for="filter2000267_2013198">Aydınlatma</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013200" data-val="true" data-id="df" data-value="2013200" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013200" data-ajaxfilter="?df=2006821,2013200" value="tum-urunler?df=2006821,2013200">
									<label class="filter__dropdown-label" for="filter2000267_2013200">Parti kutlama</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013244" data-val="true" data-id="df" data-value="2013244" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013244" data-ajaxfilter="?df=2006821,2013244" value="tum-urunler?df=2006821,2013244">
									<label class="filter__dropdown-label" for="filter2000267_2013244">Çocuk Giyim</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013181" data-val="true" data-id="df" data-value="2013181" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013181" data-ajaxfilter="?df=2006821,2013181" value="tum-urunler?df=2006821,2013181">
									<label class="filter__dropdown-label" for="filter2000267_2013181">Yapı Malzemeleri, Nalburiye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013166" data-val="true" data-id="df" data-value="2013166" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013166" data-ajaxfilter="?df=2006821,2013166" value="tum-urunler?df=2006821,2013166">
									<label class="filter__dropdown-label" for="filter2000267_2013166">Kırtasiye Gereçleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013228" data-val="true" data-id="df" data-value="2013228" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013228" data-ajaxfilter="?df=2006821,2013228" value="tum-urunler?df=2006821,2013228">
									<label class="filter__dropdown-label" for="filter2000267_2013228">Ödül, Madalya, Kupa, Plaket</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013204" data-val="true" data-id="df" data-value="2013204" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013204" data-ajaxfilter="?df=2006821,2013204" value="tum-urunler?df=2006821,2013204">
									<label class="filter__dropdown-label" for="filter2000267_2013204">Hobi Hediye Setleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013241" data-val="true" data-id="df" data-value="2013241" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013241" data-ajaxfilter="?df=2006821,2013241" value="tum-urunler?df=2006821,2013241">
									<label class="filter__dropdown-label" for="filter2000267_2013241">Yeni Doğan Hediyelik</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013172" data-val="true" data-id="df" data-value="2013172" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013172" data-ajaxfilter="?df=2006821,2013172" value="tum-urunler?df=2006821,2013172">
									<label class="filter__dropdown-label" for="filter2000267_2013172">Oyuncak Hediye Setleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013206" data-val="true" data-id="df" data-value="2013206" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013206" data-ajaxfilter="?df=2006821,2013206" value="tum-urunler?df=2006821,2013206">
									<label class="filter__dropdown-label" for="filter2000267_2013206">Spor Giyim</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013243" data-val="true" data-id="df" data-value="2013243" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013243" data-ajaxfilter="?df=2006821,2013243" value="tum-urunler?df=2006821,2013243">
									<label class="filter__dropdown-label" for="filter2000267_2013243">Anne &amp; Bebek Hediye Setleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013196" data-val="true" data-id="df" data-value="2013196" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013196" data-ajaxfilter="?df=2006821,2013196" value="tum-urunler?df=2006821,2013196">
									<label class="filter__dropdown-label" for="filter2000267_2013196">Oto Yedek Parça, Aksesuar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013207" data-val="true" data-id="df" data-value="2013207" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013207" data-ajaxfilter="?df=2006821,2013207" value="tum-urunler?df=2006821,2013207">
									<label class="filter__dropdown-label" for="filter2000267_2013207">Spor Ayakkabı</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013168" data-val="true" data-id="df" data-value="2013168" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013168" data-ajaxfilter="?df=2006821,2013168" value="tum-urunler?df=2006821,2013168">
									<label class="filter__dropdown-label" for="filter2000267_2013168">Okul Çantası</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013176" data-val="true" data-id="df" data-value="2013176" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013176" data-ajaxfilter="?df=2006821,2013176" value="tum-urunler?df=2006821,2013176">
									<label class="filter__dropdown-label" for="filter2000267_2013176">Gıda</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013210" data-val="true" data-id="df" data-value="2013210" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013210" data-ajaxfilter="?df=2006821,2013210" value="tum-urunler?df=2006821,2013210">
									<label class="filter__dropdown-label" for="filter2000267_2013210">Outdoor Aksesuar, Ekipman</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013199" data-val="true" data-id="df" data-value="2013199" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013199" data-ajaxfilter="?df=2006821,2013199" value="tum-urunler?df=2006821,2013199">
									<label class="filter__dropdown-label" for="filter2000267_2013199">Ev Düzenleme</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009873" data-val="true" data-id="df" data-value="2009873" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009873" data-ajaxfilter="?df=2006821,2009873" value="tum-urunler?df=2006821,2009873">
									<label class="filter__dropdown-label" for="filter2000267_2009873">Kumandalı Araçlar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013245" data-val="true" data-id="df" data-value="2013245" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013245" data-ajaxfilter="?df=2006821,2013245" value="tum-urunler?df=2006821,2013245">
									<label class="filter__dropdown-label" for="filter2000267_2013245">Tesettür Giyim, Aksesuar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013178" data-val="true" data-id="df" data-value="2013178" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013178" data-ajaxfilter="?df=2006821,2013178" value="tum-urunler?df=2006821,2013178">
									<label class="filter__dropdown-label" for="filter2000267_2013178">Süpermarket Hediye Setleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013203" data-val="true" data-id="df" data-value="2013203" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013203" data-ajaxfilter="?df=2006821,2013203" value="tum-urunler?df=2006821,2013203">
									<label class="filter__dropdown-label" for="filter2000267_2013203">Beyaz Eşya &amp; Elektronik</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013175" data-val="true" data-id="df" data-value="2013175" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013175" data-ajaxfilter="?df=2006821,2013175" value="tum-urunler?df=2006821,2013175">
									<label class="filter__dropdown-label" for="filter2000267_2013175">Deterjan &amp; Temizlik Ürünleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013208" data-val="true" data-id="df" data-value="2013208" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013208" data-ajaxfilter="?df=2006821,2013208" value="tum-urunler?df=2006821,2013208">
									<label class="filter__dropdown-label" for="filter2000267_2013208">Avcılık, Balıkçılık</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013235" data-val="true" data-id="df" data-value="2013235" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013235" data-ajaxfilter="?df=2006821,2013235" value="tum-urunler?df=2006821,2013235">
									<label class="filter__dropdown-label" for="filter2000267_2013235">Su Sporları</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013246" data-val="true" data-id="df" data-value="2013246" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013246" data-ajaxfilter="?df=2006821,2013246" value="tum-urunler?df=2006821,2013246">
									<label class="filter__dropdown-label" for="filter2000267_2013246">Nikah, Düğün</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013177" data-val="true" data-id="df" data-value="2013177" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013177" data-ajaxfilter="?df=2006821,2013177" value="tum-urunler?df=2006821,2013177">
									<label class="filter__dropdown-label" for="filter2000267_2013177">İçecek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013240" data-val="true" data-id="df" data-value="2013240" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013240" data-ajaxfilter="?df=2006821,2013240" value="tum-urunler?df=2006821,2013240">
									<label class="filter__dropdown-label" for="filter2000267_2013240">Mama Sandalyesi, Aksesuar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013194" data-val="true" data-id="df" data-value="2013194" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013194" data-ajaxfilter="?df=2006821,2013194" value="tum-urunler?df=2006821,2013194">
									<label class="filter__dropdown-label" for="filter2000267_2013194">Motosiklet Parça, Aksesuar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2013242" data-val="true" data-id="df" data-value="2013242" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2013242" data-ajaxfilter="?df=2006821,2013242" value="tum-urunler?df=2006821,2013242">
									<label class="filter__dropdown-label" for="filter2000267_2013242">Yürüteç, Hoppala</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009874" data-val="true" data-id="df" data-value="2009874" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009874" data-ajaxfilter="?df=2006821,2009874" value="tum-urunler?df=2006821,2009874">
									<label class="filter__dropdown-label" for="filter2000267_2009874">Kupa</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007107" data-val="true" data-id="df" data-value="2007107" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007107" data-ajaxfilter="?df=2006821,2007107" value="tum-urunler?df=2006821,2007107">
									<label class="filter__dropdown-label" for="filter2000267_2007107">Lilyum</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007128" data-val="true" data-id="df" data-value="2007128" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007128" data-ajaxfilter="?df=2006821,2007128" value="tum-urunler?df=2006821,2007128">
									<label class="filter__dropdown-label" for="filter2000267_2007128">Makaron &amp; Brownie</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007130" data-val="true" data-id="df" data-value="2007130" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007130" data-ajaxfilter="?df=2006821,2007130" value="tum-urunler?df=2006821,2007130">
									<label class="filter__dropdown-label" for="filter2000267_2007130">Meyve Sepeti</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007216" data-val="true" data-id="df" data-value="2007216" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007216" data-ajaxfilter="?df=2006821,2007216" value="tum-urunler?df=2006821,2007216">
									<label class="filter__dropdown-label" for="filter2000267_2007216">Minyatür Bahçeler</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2008071" data-val="true" data-id="df" data-value="2008071" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2008071" data-ajaxfilter="?df=2006821,2008071" value="tum-urunler?df=2006821,2008071">
									<label class="filter__dropdown-label" for="filter2000267_2008071">Mobilya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009876" data-val="true" data-id="df" data-value="2009876" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009876" data-ajaxfilter="?df=2006821,2009876" value="tum-urunler?df=2006821,2009876">
									<label class="filter__dropdown-label" for="filter2000267_2009876">Maket, Model, Kit</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009877" data-val="true" data-id="df" data-value="2009877" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009877" data-ajaxfilter="?df=2006821,2009877" value="tum-urunler?df=2006821,2009877">
									<label class="filter__dropdown-label" for="filter2000267_2009877">Motosiklet</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007186" data-val="true" data-id="df" data-value="2007186" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007186" data-ajaxfilter="?df=2006821,2007186" value="tum-urunler?df=2006821,2007186">
									<label class="filter__dropdown-label" for="filter2000267_2007186">Mutfak, Sofra</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009878" data-val="true" data-id="df" data-value="2009878" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009878" data-ajaxfilter="?df=2006821,2009878" value="tum-urunler?df=2006821,2009878">
									<label class="filter__dropdown-label" for="filter2000267_2009878">Müzik</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009879" data-val="true" data-id="df" data-value="2009879" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009879" data-ajaxfilter="?df=2006821,2009879" value="tum-urunler?df=2006821,2009879">
									<label class="filter__dropdown-label" for="filter2000267_2009879">Enstrüman</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009880" data-val="true" data-id="df" data-value="2009880" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009880" data-ajaxfilter="?df=2006821,2009880" value="tum-urunler?df=2006821,2009880">
									<label class="filter__dropdown-label" for="filter2000267_2009880">Müzik Kutusu/Kar Küreleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007133" data-val="true" data-id="df" data-value="2007133" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007133" data-ajaxfilter="?df=2006821,2007133" value="tum-urunler?df=2006821,2007133">
									<label class="filter__dropdown-label" for="filter2000267_2007133">Nostaljik Ürünler</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009881" data-val="true" data-id="df" data-value="2009881" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009881" data-ajaxfilter="?df=2006821,2009881" value="tum-urunler?df=2006821,2009881">
									<label class="filter__dropdown-label" for="filter2000267_2009881">Ofis Malzemeleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009882" data-val="true" data-id="df" data-value="2009882" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009882" data-ajaxfilter="?df=2006821,2009882" value="tum-urunler?df=2006821,2009882">
									<label class="filter__dropdown-label" for="filter2000267_2009882">Okul Malzemeleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007102" data-val="true" data-id="df" data-value="2007102" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007102" data-ajaxfilter="?df=2006821,2007102" value="tum-urunler?df=2006821,2007102">
									<label class="filter__dropdown-label" for="filter2000267_2007102">Orkide</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2010649" data-val="true" data-id="df" data-value="2010649" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2010649" data-ajaxfilter="?df=2006821,2010649" value="tum-urunler?df=2006821,2010649">
									<label class="filter__dropdown-label" for="filter2000267_2010649">Astomerya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2010689" data-val="true" data-id="df" data-value="2010689" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2010689" data-ajaxfilter="?df=2006821,2010689" value="tum-urunler?df=2006821,2010689">
									<label class="filter__dropdown-label" for="filter2000267_2010689">Şakayık</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009883" data-val="true" data-id="df" data-value="2009883" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009883" data-ajaxfilter="?df=2006821,2009883" value="tum-urunler?df=2006821,2009883">
									<label class="filter__dropdown-label" for="filter2000267_2009883">Oto</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009884" data-val="true" data-id="df" data-value="2009884" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009884" data-ajaxfilter="?df=2006821,2009884" value="tum-urunler?df=2006821,2009884">
									<label class="filter__dropdown-label" for="filter2000267_2009884">Outdoor Ekipmanları</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009885" data-val="true" data-id="df" data-value="2009885" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009885" data-ajaxfilter="?df=2006821,2009885" value="tum-urunler?df=2006821,2009885">
									<label class="filter__dropdown-label" for="filter2000267_2009885">Masa Oyun Takımları</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009887" data-val="true" data-id="df" data-value="2009887" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009887" data-ajaxfilter="?df=2006821,2009887" value="tum-urunler?df=2006821,2009887">
									<label class="filter__dropdown-label" for="filter2000267_2009887">Video Oyun &amp; Konsol</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009888" data-val="true" data-id="df" data-value="2009888" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009888" data-ajaxfilter="?df=2006821,2009888" value="tum-urunler?df=2006821,2009888">
									<label class="filter__dropdown-label" for="filter2000267_2009888">Oyuncak Araçlar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009889" data-val="true" data-id="df" data-value="2009889" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009889" data-ajaxfilter="?df=2006821,2009889" value="tum-urunler?df=2006821,2009889">
									<label class="filter__dropdown-label" for="filter2000267_2009889">Oyuncak Bebekler</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007139" data-val="true" data-id="df" data-value="2007139" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007139" data-ajaxfilter="?df=2006821,2007139" value="tum-urunler?df=2006821,2007139">
									<label class="filter__dropdown-label" for="filter2000267_2007139">Ödül - Sertifika</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007104" data-val="true" data-id="df" data-value="2007104" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007104" data-ajaxfilter="?df=2006821,2007104" value="tum-urunler?df=2006821,2007104">
									<label class="filter__dropdown-label" for="filter2000267_2007104">Papatya - Gerbera</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009890" data-val="true" data-id="df" data-value="2009890" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009890" data-ajaxfilter="?df=2006821,2009890" value="tum-urunler?df=2006821,2009890">
									<label class="filter__dropdown-label" for="filter2000267_2009890">Parfüm</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009891" data-val="true" data-id="df" data-value="2009891" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009891" data-ajaxfilter="?df=2006821,2009891" value="tum-urunler?df=2006821,2009891">
									<label class="filter__dropdown-label" for="filter2000267_2009891">Parti Malzemeleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007125" data-val="true" data-id="df" data-value="2007125" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007125" data-ajaxfilter="?df=2006821,2007125" value="tum-urunler?df=2006821,2007125">
									<label class="filter__dropdown-label" for="filter2000267_2007125">Pasta</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007138" data-val="true" data-id="df" data-value="2007138" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007138" data-ajaxfilter="?df=2006821,2007138" value="tum-urunler?df=2006821,2007138">
									<label class="filter__dropdown-label" for="filter2000267_2007138">Peluş Oyuncaklar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007312" data-val="true" data-id="df" data-value="2007312" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007312" data-ajaxfilter="?df=2006821,2007312" value="tum-urunler?df=2006821,2007312">
									<label class="filter__dropdown-label" for="filter2000267_2007312">Premium</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009892" data-val="true" data-id="df" data-value="2009892" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009892" data-ajaxfilter="?df=2006821,2009892" value="tum-urunler?df=2006821,2009892">
									<label class="filter__dropdown-label" for="filter2000267_2009892">Puzzle</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007136" data-val="true" data-id="df" data-value="2007136" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007136" data-ajaxfilter="?df=2006821,2007136" value="tum-urunler?df=2006821,2007136">
									<label class="filter__dropdown-label" for="filter2000267_2007136">Saat</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007108" data-val="true" data-id="df" data-value="2007108" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007108" data-ajaxfilter="?df=2006821,2007108" value="tum-urunler?df=2006821,2007108">
									<label class="filter__dropdown-label" for="filter2000267_2007108">Saksı Çiçek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009893" data-val="true" data-id="df" data-value="2009893" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009893" data-ajaxfilter="?df=2006821,2009893" value="tum-urunler?df=2006821,2009893">
									<label class="filter__dropdown-label" for="filter2000267_2009893">Spor Aksesuar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009894" data-val="true" data-id="df" data-value="2009894" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009894" data-ajaxfilter="?df=2006821,2009894" value="tum-urunler?df=2006821,2009894">
									<label class="filter__dropdown-label" for="filter2000267_2009894">Spor Ekipman</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009895" data-val="true" data-id="df" data-value="2009895" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009895" data-ajaxfilter="?df=2006821,2009895" value="tum-urunler?df=2006821,2009895">
									<label class="filter__dropdown-label" for="filter2000267_2009895">Sporcu Besin Takviyesi-Supplement</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2008793" data-val="true" data-id="df" data-value="2008793" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2008793" data-ajaxfilter="?df=2006821,2008793" value="tum-urunler?df=2006821,2008793">
									<label class="filter__dropdown-label" for="filter2000267_2008793">Sukulent</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2010278" data-val="true" data-id="df" data-value="2010278" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2010278" data-ajaxfilter="?df=2006821,2010278" value="tum-urunler?df=2006821,2010278">
									<label class="filter__dropdown-label" for="filter2000267_2010278">Süper Market</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007126" data-val="true" data-id="df" data-value="2007126" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007126" data-ajaxfilter="?df=2006821,2007126" value="tum-urunler?df=2006821,2007126">
									<label class="filter__dropdown-label" for="filter2000267_2007126">Şekerleme</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007314" data-val="true" data-id="df" data-value="2007314" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007314" data-ajaxfilter="?df=2006821,2007314" value="tum-urunler?df=2006821,2007314">
									<label class="filter__dropdown-label" for="filter2000267_2007314">Takı</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007115" data-val="true" data-id="df" data-value="2007115" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007115" data-ajaxfilter="?df=2006821,2007115" value="tum-urunler?df=2006821,2007115">
									<label class="filter__dropdown-label" for="filter2000267_2007115">Taraftar Çiçek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007111" data-val="true" data-id="df" data-value="2007111" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007111" data-ajaxfilter="?df=2006821,2007111" value="tum-urunler?df=2006821,2007111">
									<label class="filter__dropdown-label" for="filter2000267_2007111">Teraryum</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2007304" data-val="true" data-id="df" data-value="2007304" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007304" data-ajaxfilter="?df=2006821,2007304" value="tum-urunler?df=2006821,2007304">
									<label class="filter__dropdown-label" for="filter2000267_2007304">Truflu Aranjmanlar</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009896" data-val="true" data-id="df" data-value="2009896" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009896" data-ajaxfilter="?df=2006821,2009896" value="tum-urunler?df=2006821,2009896">
									<label class="filter__dropdown-label" for="filter2000267_2009896">TV, Görüntü &amp; Ses Sistemleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2009897" data-val="true" data-id="df" data-value="2009897" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2009897" data-ajaxfilter="?df=2006821,2009897" value="tum-urunler?df=2006821,2009897">
									<label class="filter__dropdown-label" for="filter2000267_2009897">Lego, Yapı Oyuncakları</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2010199" data-val="true" data-id="df" data-value="2010199" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2010199" data-ajaxfilter="?df=2006821,2010199" value="tum-urunler?df=2006821,2010199">
									<label class="filter__dropdown-label" for="filter2000267_2010199">Yapı Ürünleri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2010791" data-val="true" data-id="df" data-value="2010791" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2010791" data-ajaxfilter="?df=2006821,2010791" value="tum-urunler?df=2006821,2010791">
									<label class="filter__dropdown-label" for="filter2000267_2010791">Büyük Beden</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000267_2010751" data-val="true" data-id="df" data-value="2010751" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2010751" data-ajaxfilter="?df=2006821,2010751" value="tum-urunler?df=2006821,2010751">
									<label class="filter__dropdown-label" for="filter2000267_2010751">Organik Ürünler</label>
									<!--False-->
								</li>
							</ul>
							</div>
						<div class="dropdown filter__item js-filter-item" @click='drop4' v-bind:class="{'open':open4}"> <a class="dropdown-toggle btn filter__button is-active" data-toggle="dropdown">
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
									<input id="filter2000254_2006840" data-val="true" data-id="df" data-value="2006840" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006840" data-ajaxfilter="?df=2006821,2006840" value="tum-urunler?df=2006821,2006840">
									<label class="filter__dropdown-label" for="filter2000254_2006840">Açılış-Tören</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006838" data-val="true" data-id="df" data-value="2006838" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006838" data-ajaxfilter="?df=2006821,2006838" value="tum-urunler?df=2006821,2006838">
									<label class="filter__dropdown-label" for="filter2000254_2006838">Cenaze</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list checked">
									<input id="filter2000254_2006821" data-val="true" data-id="df" data-value="2006821" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" checked="" data-url="tum-urunler" data-ajaxfilter="" value="tum-urunler">
									<label class="filter__dropdown-label" for="filter2000254_2006821">Doğum Günü</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2007193" data-val="true" data-id="df" data-value="2007193" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007193" data-ajaxfilter="?df=2006821,2007193" value="tum-urunler?df=2006821,2007193">
									<label class="filter__dropdown-label" for="filter2000254_2007193">Geçmiş Olsun</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006828" data-val="true" data-id="df" data-value="2006828" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006828" data-ajaxfilter="?df=2006821,2006828" value="tum-urunler?df=2006821,2006828">
									<label class="filter__dropdown-label" for="filter2000254_2006828">İçimden Geldi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2010275" data-val="true" data-id="df" data-value="2010275" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2010275" data-ajaxfilter="?df=2006821,2010275" value="tum-urunler?df=2006821,2010275">
									<label class="filter__dropdown-label" for="filter2000254_2010275">Okula Dönüş</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006818" data-val="true" data-id="df" data-value="2006818" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006818" data-ajaxfilter="?df=2006821,2006818" value="tum-urunler?df=2006821,2006818">
									<label class="filter__dropdown-label" for="filter2000254_2006818">Özür Dilerim</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006827" data-val="true" data-id="df" data-value="2006827" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006827" data-ajaxfilter="?df=2006821,2006827" value="tum-urunler?df=2006821,2006827">
									<label class="filter__dropdown-label" for="filter2000254_2006827">Parti - Kutlama</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006816" data-val="true" data-id="df" data-value="2006816" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006816" data-ajaxfilter="?df=2006821,2006816" value="tum-urunler?df=2006821,2006816">
									<label class="filter__dropdown-label" for="filter2000254_2006816">Sevgili</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006839" data-val="true" data-id="df" data-value="2006839" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006839" data-ajaxfilter="?df=2006821,2006839" value="tum-urunler?df=2006821,2006839">
									<label class="filter__dropdown-label" for="filter2000254_2006839">Söz-Nişan- Düğün</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006820" data-val="true" data-id="df" data-value="2006820" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006820" data-ajaxfilter="?df=2006821,2006820" value="tum-urunler?df=2006821,2006820">
									<label class="filter__dropdown-label" for="filter2000254_2006820">Tebrik</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006834" data-val="true" data-id="df" data-value="2006834" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006834" data-ajaxfilter="?df=2006821,2006834" value="tum-urunler?df=2006821,2006834">
									<label class="filter__dropdown-label" for="filter2000254_2006834">Teşekkür Ederim</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006826" data-val="true" data-id="df" data-value="2006826" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006826" data-ajaxfilter="?df=2006821,2006826" value="tum-urunler?df=2006821,2006826">
									<label class="filter__dropdown-label" for="filter2000254_2006826">Yeni Bebek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006819" data-val="true" data-id="df" data-value="2006819" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006819" data-ajaxfilter="?df=2006821,2006819" value="tum-urunler?df=2006821,2006819">
									<label class="filter__dropdown-label" for="filter2000254_2006819">Yeni İş/Terfi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000254_2006817" data-val="true" data-id="df" data-value="2006817" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006817" data-ajaxfilter="?df=2006821,2006817" value="tum-urunler?df=2006821,2006817">
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
									<input id="filter2000256_2006847" data-val="true" data-id="df" data-value="2006847" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006847" data-ajaxfilter="?df=2006821,2006847" value="tum-urunler?df=2006821,2006847">
									<label class="filter__dropdown-label" for="filter2000256_2006847">Kadın</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2006848" data-val="true" data-id="df" data-value="2006848" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006848" data-ajaxfilter="?df=2006821,2006848" value="tum-urunler?df=2006821,2006848">
									<label class="filter__dropdown-label" for="filter2000256_2006848">Erkek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2007326" data-val="true" data-id="df" data-value="2007326" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007326" data-ajaxfilter="?df=2006821,2007326" value="tum-urunler?df=2006821,2007326">
									<label class="filter__dropdown-label" for="filter2000256_2007326">Unisex</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2010781" data-val="true" data-id="df" data-value="2010781" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2010781" data-ajaxfilter="?df=2006821,2010781" value="tum-urunler?df=2006821,2010781">
									<label class="filter__dropdown-label" for="filter2000256_2010781">Erkek Bebek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2010782" data-val="true" data-id="df" data-value="2010782" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2010782" data-ajaxfilter="?df=2006821,2010782" value="tum-urunler?df=2006821,2010782">
									<label class="filter__dropdown-label" for="filter2000256_2010782">Kız Bebek</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2010783" data-val="true" data-id="df" data-value="2010783" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2010783" data-ajaxfilter="?df=2006821,2010783" value="tum-urunler?df=2006821,2010783">
									<label class="filter__dropdown-label" for="filter2000256_2010783">Erkek Çocuk</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000256_2010784" data-val="true" data-id="df" data-value="2010784" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2010784" data-ajaxfilter="?df=2006821,2010784" value="tum-urunler?df=2006821,2010784">
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
									<input id="filter2000253_2006799" data-val="true" data-id="df" data-value="2006799" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006799" data-ajaxfilter="?df=2006821,2006799" value="tum-urunler?df=2006821,2006799">
									<label class="filter__dropdown-label" for="filter2000253_2006799">Anneye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006798" data-val="true" data-id="df" data-value="2006798" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006798" data-ajaxfilter="?df=2006821,2006798" value="tum-urunler?df=2006821,2006798">
									<label class="filter__dropdown-label" for="filter2000253_2006798">Arkadaşa</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006810" data-val="true" data-id="df" data-value="2006810" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006810" data-ajaxfilter="?df=2006821,2006810" value="tum-urunler?df=2006821,2006810">
									<label class="filter__dropdown-label" for="filter2000253_2006810">Avukata</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006800" data-val="true" data-id="df" data-value="2006800" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006800" data-ajaxfilter="?df=2006821,2006800" value="tum-urunler?df=2006821,2006800">
									<label class="filter__dropdown-label" for="filter2000253_2006800">Babaya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006802" data-val="true" data-id="df" data-value="2006802" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006802" data-ajaxfilter="?df=2006821,2006802" value="tum-urunler?df=2006821,2006802">
									<label class="filter__dropdown-label" for="filter2000253_2006802">Bebeğe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006803" data-val="true" data-id="df" data-value="2006803" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006803" data-ajaxfilter="?df=2006821,2006803" value="tum-urunler?df=2006821,2006803">
									<label class="filter__dropdown-label" for="filter2000253_2006803">Büyükanneye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006804" data-val="true" data-id="df" data-value="2006804" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006804" data-ajaxfilter="?df=2006821,2006804" value="tum-urunler?df=2006821,2006804">
									<label class="filter__dropdown-label" for="filter2000253_2006804">Büyükbabaya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006801" data-val="true" data-id="df" data-value="2006801" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006801" data-ajaxfilter="?df=2006821,2006801" value="tum-urunler?df=2006821,2006801">
									<label class="filter__dropdown-label" for="filter2000253_2006801">Çocuğa</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006815" data-val="true" data-id="df" data-value="2006815" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006815" data-ajaxfilter="?df=2006821,2006815" value="tum-urunler?df=2006821,2006815">
									<label class="filter__dropdown-label" for="filter2000253_2006815">Dayı-Amcaya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006812" data-val="true" data-id="df" data-value="2006812" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006812" data-ajaxfilter="?df=2006821,2006812" value="tum-urunler?df=2006821,2006812">
									<label class="filter__dropdown-label" for="filter2000253_2006812">Diş Hekimine</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006809" data-val="true" data-id="df" data-value="2006809" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006809" data-ajaxfilter="?df=2006821,2006809" value="tum-urunler?df=2006821,2006809">
									<label class="filter__dropdown-label" for="filter2000253_2006809">Doktora</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006805" data-val="true" data-id="df" data-value="2006805" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006805" data-ajaxfilter="?df=2006821,2006805" value="tum-urunler?df=2006821,2006805">
									<label class="filter__dropdown-label" for="filter2000253_2006805">Eşe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006808" data-val="true" data-id="df" data-value="2006808" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006808" data-ajaxfilter="?df=2006821,2006808" value="tum-urunler?df=2006821,2006808">
									<label class="filter__dropdown-label" for="filter2000253_2006808">Hemşireye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006806" data-val="true" data-id="df" data-value="2006806" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006806" data-ajaxfilter="?df=2006821,2006806" value="tum-urunler?df=2006821,2006806">
									<label class="filter__dropdown-label" for="filter2000253_2006806">İş Arkadaşına</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006797" data-val="true" data-id="df" data-value="2006797" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006797" data-ajaxfilter="?df=2006821,2006797" value="tum-urunler?df=2006821,2006797">
									<label class="filter__dropdown-label" for="filter2000253_2006797">Kardeşe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2007192" data-val="true" data-id="df" data-value="2007192" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007192" data-ajaxfilter="?df=2006821,2007192" value="tum-urunler?df=2006821,2007192">
									<label class="filter__dropdown-label" for="filter2000253_2007192">Kendime</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006813" data-val="true" data-id="df" data-value="2006813" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006813" data-ajaxfilter="?df=2006821,2006813" value="tum-urunler?df=2006821,2006813">
									<label class="filter__dropdown-label" for="filter2000253_2006813">Mühendise</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006811" data-val="true" data-id="df" data-value="2006811" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006811" data-ajaxfilter="?df=2006821,2006811" value="tum-urunler?df=2006821,2006811">
									<label class="filter__dropdown-label" for="filter2000253_2006811">Öğretmene</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2007316" data-val="true" data-id="df" data-value="2007316" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007316" data-ajaxfilter="?df=2006821,2007316" value="tum-urunler?df=2006821,2007316">
									<label class="filter__dropdown-label" for="filter2000253_2007316">Polis</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006796" data-val="true" data-id="df" data-value="2006796" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006796" data-ajaxfilter="?df=2006821,2006796" value="tum-urunler?df=2006821,2006796">
									<label class="filter__dropdown-label" for="filter2000253_2006796">Sevgiliye</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006814" data-val="true" data-id="df" data-value="2006814" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006814" data-ajaxfilter="?df=2006821,2006814" value="tum-urunler?df=2006821,2006814">
									<label class="filter__dropdown-label" for="filter2000253_2006814">Teyze-Halaya</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter2000253_2006807" data-val="true" data-id="df" data-value="2006807" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2006807" data-ajaxfilter="?df=2006821,2006807" value="tum-urunler?df=2006821,2006807">
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
									<input id="filter10_151" data-val="true" data-id="df" data-value="151" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,151" data-ajaxfilter="?df=2006821,151" value="tum-urunler?df=2006821,151">
									<label class="filter__dropdown-label" for="filter10_151">Beyaz</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_2010794" data-val="true" data-id="df" data-value="2010794" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2010794" data-ajaxfilter="?df=2006821,2010794" value="tum-urunler?df=2006821,2010794">
									<label class="filter__dropdown-label" for="filter10_2010794">Bej</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_155" data-val="true" data-id="df" data-value="155" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,155" data-ajaxfilter="?df=2006821,155" value="tum-urunler?df=2006821,155">
									<label class="filter__dropdown-label" for="filter10_155">Gri</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_157" data-val="true" data-id="df" data-value="157" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,157" data-ajaxfilter="?df=2006821,157" value="tum-urunler?df=2006821,157">
									<label class="filter__dropdown-label" for="filter10_157">Kahverengi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_158" data-val="true" data-id="df" data-value="158" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,158" data-ajaxfilter="?df=2006821,158" value="tum-urunler?df=2006821,158">
									<label class="filter__dropdown-label" for="filter10_158">Kırmızı</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_166" data-val="true" data-id="df" data-value="166" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,166" data-ajaxfilter="?df=2006821,166" value="tum-urunler?df=2006821,166">
									<label class="filter__dropdown-label" for="filter10_166">Mavi</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_2007325" data-val="true" data-id="df" data-value="2007325" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,2007325" data-ajaxfilter="?df=2006821,2007325" value="tum-urunler?df=2006821,2007325">
									<label class="filter__dropdown-label" for="filter10_2007325">Mix</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_167" data-val="true" data-id="df" data-value="167" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,167" data-ajaxfilter="?df=2006821,167" value="tum-urunler?df=2006821,167">
									<label class="filter__dropdown-label" for="filter10_167">Mor</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_168" data-val="true" data-id="df" data-value="168" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,168" data-ajaxfilter="?df=2006821,168" value="tum-urunler?df=2006821,168">
									<label class="filter__dropdown-label" for="filter10_168">Pembe</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_171" data-val="true" data-id="df" data-value="171" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,171" data-ajaxfilter="?df=2006821,171" value="tum-urunler?df=2006821,171">
									<label class="filter__dropdown-label" for="filter10_171">Sarı</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_172" data-val="true" data-id="df" data-value="172" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,172" data-ajaxfilter="?df=2006821,172" value="tum-urunler?df=2006821,172">
									<label class="filter__dropdown-label" for="filter10_172">Siyah</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_176" data-val="true" data-id="df" data-value="176" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,176" data-ajaxfilter="?df=2006821,176" value="tum-urunler?df=2006821,176">
									<label class="filter__dropdown-label" for="filter10_176">Turuncu</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter10_178" data-val="true" data-id="df" data-value="178" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="tum-urunler?df=2006821,178" data-ajaxfilter="?df=2006821,178" value="tum-urunler?df=2006821,178">
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
									<input id="filter23_1" data-val="true" data-id="priceId" data-value="1" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="dogum-gunu?priceId=1" data-ajaxfilter="?priceId=1&amp;df=2006821" value="dogum-gunu?priceId=1">
									<label class="filter__dropdown-label" for="filter23_1">0-50 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_2" data-val="true" data-id="priceId" data-value="2" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="dogum-gunu?priceId=2" data-ajaxfilter="?priceId=2&amp;df=2006821" value="dogum-gunu?priceId=2">
									<label class="filter__dropdown-label" for="filter23_2">50-100 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_3" data-val="true" data-id="priceId" data-value="3" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="dogum-gunu?priceId=3" data-ajaxfilter="?priceId=3&amp;df=2006821" value="dogum-gunu?priceId=3">
									<label class="filter__dropdown-label" for="filter23_3">100-150 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_4" data-val="true" data-id="priceId" data-value="4" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="dogum-gunu?priceId=4" data-ajaxfilter="?priceId=4&amp;df=2006821" value="dogum-gunu?priceId=4">
									<label class="filter__dropdown-label" for="filter23_4">150-200 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_5" data-val="true" data-id="priceId" data-value="5" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="dogum-gunu?priceId=5" data-ajaxfilter="?priceId=5&amp;df=2006821" value="dogum-gunu?priceId=5">
									<label class="filter__dropdown-label" for="filter23_5">200-250 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_6" data-val="true" data-id="priceId" data-value="6" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="dogum-gunu?priceId=6" data-ajaxfilter="?priceId=6&amp;df=2006821" value="dogum-gunu?priceId=6">
									<label class="filter__dropdown-label" for="filter23_6">250-500 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_7" data-val="true" data-id="priceId" data-value="7" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="dogum-gunu?priceId=7" data-ajaxfilter="?priceId=7&amp;df=2006821" value="dogum-gunu?priceId=7">
									<label class="filter__dropdown-label" for="filter23_7">500-1000 TL</label>
									<!--False-->
								</li>
								<li class="filter__dropdown-list ">
									<input id="filter23_8" data-val="true" data-id="priceId" data-value="8" data-hide="False" class="filter__dropdown-checkbox js-apply-filter" type="checkbox" data-url="dogum-gunu?priceId=8" data-ajaxfilter="?priceId=8&amp;df=2006821" value="dogum-gunu?priceId=8">
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
									<input class="filter__dropdown-checkbox js-sort-products" type="radio" checked="" data-url="dogum-gunu?orderby=1" data-ajaxfilter="?df=2006821&amp;orderby=1" data-id="orderby" data-value="1" id="1" name="sortRadio">
									<label class="filter__dropdown-label" for="1">Çok Satılana Göre</label>
								</li>
								<li class="filter__dropdown-list">
									<input class="filter__dropdown-checkbox js-sort-products" type="radio" data-url="dogum-gunu?orderby=2" data-ajaxfilter="?df=2006821&amp;orderby=2" data-id="orderby" data-value="2" id="2" name="sortRadio">
									<label class="filter__dropdown-label" for="2">Pahalıdan Ucuza</label>
								</li>
								<li class="filter__dropdown-list">
									<input class="filter__dropdown-checkbox js-sort-products" type="radio" data-url="dogum-gunu?orderby=3" data-ajaxfilter="?df=2006821&amp;orderby=3" data-id="orderby" data-value="3" id="3" name="sortRadio">
									<label class="filter__dropdown-label" for="3">Ucuzdan Pahalıya</label>
								</li>
							</ul>
							</div>
					
					
					
					
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						<div class="filter__item  filter__item--checkbox">
							<input class="filter__checkbox js-apply-filter" id="check_2000271" data-ajaxfilter="?df=2006821,2007218" data-value="2007218" data-id="df" data-url="tum-urunler?df=2006821,2007218" type="checkbox">
							<label class="filter__label" for="check_2000271">Tasarım Çiçekleri</label>
						</div>
						
						<div class="filter__item  filter__item--checkbox">
							<input class="filter__checkbox js-apply-filter" id="check_2000272" data-ajaxfilter="?df=2006821,2007217" data-value="2007217" data-id="df" data-url="tum-urunler?df=2006821,2007217" type="checkbox">
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
                    Doğum Günü
                    <span class="icon-close filter__selected-tag-icon" data-url="tum-urunler" data-ajaxfilter=""></span>
                </a>
				</li>
				<li class="category-order__filter js-clean-filter"> <span class="is-hidden filter__ellipsis">...</span>
					<a class="filter__clean-btn" href="/tum-urunler">Temizle</a>
				</li>
				<li class="category-order__text">335056 ürün bulundu.</li>
			</ul>
			<div class="featured"></div>
			<div class="products products--category">
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 10; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3709" data-category="çiçek" href="/dogal-ahsap-kutukte-papatya-aranjmani-at3709" tabindex="0" data-position="1">
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
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 20; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at773" data-category="çiçek" href="/seramik-vazoda-phalaenopsis-orkide" tabindex="0" data-position="2">
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
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 30; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at1741" data-category="çiçek" href="/romantik-kalpler-at1741" tabindex="0" data-position="3">
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
				<div class="products__item js-category-item-hover  products__item--featured-xlg" style="order:40; -webkit-order:40; -moz-order:40; -ms-order:40">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3662" data-category="çiçek" href="/damali-vazoda-2-dal-orkide-cicegi-at3662" tabindex="0" data-position="4">
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
							<a class="products__item-link js-products__item-link" data-productcode="at727" data-category="çiçek" href="/akvaryumda-7-kirmizi-gul" tabindex="0" data-position="6">
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
				<div class="products__item js-category-item-hover  " style="order:70; -webkit-order:70; -moz-order:70; -ms-order:70">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3464" data-category="çiçek" href="/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464" tabindex="0" data-position="7">
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
				<div class="products__item js-category-item-hover  " style="order:80; -webkit-order:80; -moz-order:80; -ms-order:80">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at4018" data-category="çiçek" href="/pasabahce-vazoda-renkli-karanfiller-at4018" tabindex="0" data-position="8">
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
				<div class="products__item js-category-item-hover  " style="order:90; -webkit-order:90; -moz-order:90; -ms-order:90">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at2940" data-category="çiçek" href="/cikolatali-papatya-kuresi-at2940" tabindex="0" data-position="9">
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
				<div class="products__item js-category-item-hover  " style="order:100; -webkit-order:100; -moz-order:100; -ms-order:100">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3458" data-category="çiçek" href="/cift-dal-eflatun-orkide-ve-spesiyal-cikolata" tabindex="0" data-position="10">
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
				<div class="products__item js-category-item-hover  " style="order:110; -webkit-order:110; -moz-order:110; -ms-order:110">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at1654" data-category="çiçek" href="/ask-kuresi-kirmizi-ve-beyaz-guller-at1654" tabindex="0" data-position="11">
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
				<div class="products__item js-category-item-hover" style="order: 130; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at192" data-category="çiçek" href="/beyaz-phalaenopsis-orkide" tabindex="0" data-position="13">
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
				<div class="products__item js-category-item-hover  " style="order:140; -webkit-order:140; -moz-order:140; -ms-order:140">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3982" data-category="çiçek" href="/papatya-karnavali-at3982" tabindex="0" data-position="14">
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
				<div class="products__item js-category-item-hover  " style="order:150; -webkit-order:150; -moz-order:150; -ms-order:150">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at1892" data-category="çiçek" href="/bonsai-at1892" tabindex="0" data-position="15">
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
				<div class="products__item js-category-item-hover  " style="order:160; -webkit-order:160; -moz-order:160; -ms-order:160">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3870" data-category="çiçek" href="/gold-cizgili-vazoda-antoryum-bitkisi-at3870" tabindex="0" data-position="16">
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
				<div class="products__item js-category-item-hover  " style="order:170; -webkit-order:170; -moz-order:170; -ms-order:170">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3184" data-category="çiçek" href="/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184" tabindex="0" data-position="17">
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
				<div class="products__item js-category-item-hover  " style="order:180; -webkit-order:180; -moz-order:180; -ms-order:180">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3739" data-category="çiçek" href="/gold-cizgili-vazoda-2-dal-orkide-cicegi-at3739" tabindex="0" data-position="18">
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
				<div class="products__item js-category-item-hover  " style="order:190; -webkit-order:190; -moz-order:190; -ms-order:190">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at106" data-category="çiçek" href="/vazoda-mavi-suyun-icinde-beyaz-lilyumlar" tabindex="0" data-position="19">
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
				<div class="products__item js-category-item-hover  " style="order:200; -webkit-order:200; -moz-order:200; -ms-order:200">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3632" data-category="çiçek" href="/2-dal-orkide-ve-premium-cikolata-at3632" tabindex="0" data-position="20">
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
				<div class="products__item js-category-item-hover" style="order: 210; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at2091" data-category="çiçek" href="/papatya-kuresi-at2091" tabindex="0" data-position="21">
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
				<div class="products__item js-category-item-hover  " style="order:220; -webkit-order:220; -moz-order:220; -ms-order:220">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1972" data-category="yenilebilir çiçek" href="/bitmeyen-lezzet-dogum-gunu-kutlama-aranjmani-gr1972" tabindex="0" data-position="22">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3630019">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1972-1/M/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1972-1/S/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1972-1/M/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg 255w" alt="Bitmeyen Lezzet Doğum Günü Kutlama Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/gr1972-1/M/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1972-1/S/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1972-1/M/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Bitmeyen Lezzet Doğum Günü Kutlama Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
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
				<div class="products__item js-category-item-hover  " style="order:230; -webkit-order:230; -moz-order:230; -ms-order:230">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via210" data-category="çiçek" href="/mini-cift-dalahsap-saksida-mor-orkide-via210" tabindex="0" data-position="23">
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
				<div class="products__item js-category-item-hover  " style="order:240; -webkit-order:240; -moz-order:240; -ms-order:240">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3944" data-category="çiçek" href="/kisiye-ozel-fotografli-ficus-bonsai-at3944" tabindex="0" data-position="24">
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
				<div class="products__item js-category-item-hover  " style="order:250; -webkit-order:250; -moz-order:250; -ms-order:250">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via209" data-category="çiçek" href="/mini-cift-dal-mor-orkide-via209" tabindex="0" data-position="25">
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
				<div class="products__item js-category-item-hover  " style="order:260; -webkit-order:260; -moz-order:260; -ms-order:260">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="ck191" data-category="yenilebilir çiçek" href="/ozel-tatlar-spesiyal-cikolata-kutusu-ck191" tabindex="0" data-position="26">
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
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=9492&amp;productgroupid=2&amp;variantcode=ck191-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:270; -webkit-order:270; -moz-order:270; -ms-order:270">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at772" data-category="çiçek" href="/konik-vazoda-11-kirmizi-gul" tabindex="0" data-position="27">
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
				<div class="products__item js-category-item-hover  " style="order:280; -webkit-order:280; -moz-order:280; -ms-order:280">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3467" data-category="çiçek" href="/kisiye-ozel-vazolu-karanfil-ve-beyaz-frezya-aranjmani-at3467" tabindex="0" data-position="28">
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
				<div class="products__item js-category-item-hover" style="order: 290; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="bt110" data-category="çiçek" href="/antoryum-50cm-yuksekliginde-salon-bitkisi" tabindex="0" data-position="29">
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
				<div class="products__item js-category-item-hover  " style="order:300; -webkit-order:300; -moz-order:300; -ms-order:300">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3034" data-category="çiçek" href="/baharin-kalbi-at3034" tabindex="0" data-position="30">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2204699">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3034-1/M/baharin-kalbi-at3034-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3034-1/S/baharin-kalbi-at3034-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3034-1/M/baharin-kalbi-at3034-1-1.jpg 255w" alt="Baharın Kalbi" src="https://cdn03.ciceksepeti.com/cicek/at3034-1/M/baharin-kalbi-at3034-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3034-1/S/baharin-kalbi-at3034-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3034-1/M/baharin-kalbi-at3034-1-1.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Baharın Kalbi</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(255)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2204699&amp;productgroupid=1&amp;variantcode=at3034-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:310; -webkit-order:310; -moz-order:310; -ms-order:310">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3844" data-category="çiçek" href="/dogal-ahsap-kutukte-sari-frezyalar-at3844" tabindex="0" data-position="31">
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
							<a class="products__item-link js-products__item-link" data-productcode="at281" data-category="çiçek" href="/kar-beyaz-gul-ve-lilyum-at281" tabindex="0" data-position="33">
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
				<div class="products__item js-category-item-hover  " style="order:340; -webkit-order:340; -moz-order:340; -ms-order:340">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3921" data-category="çiçek" href="/papatya-bahcesi-at3921" tabindex="0" data-position="34">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3827041">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3921-1/M/at3921-1-8d72178ffc9f788-dc670768.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3921-1/S/at3921-1-8d72178ffc9f788-dc670768.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3921-1/M/at3921-1-8d72178ffc9f788-dc670768.jpg 255w" alt="Papatya Bahçesi - Paşabahçe Vazoda" src="https://cdn03.ciceksepeti.com/cicek/at3921-1/M/at3921-1-8d72178ffc9f788-dc670768.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3921-1/S/at3921-1-8d72178ffc9f788-dc670768.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3921-1/M/at3921-1-8d72178ffc9f788-dc670768.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Papatya Bahçesi - Paşabahçe Vazoda</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%10</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">49</span>
												</div>
												<div class="price__right"> <span class="price__decimal-value-with-currency">,98 TL</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(999+)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3827041&amp;productgroupid=1&amp;variantcode=at3921-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:350; -webkit-order:350; -moz-order:350; -ms-order:350">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3033" data-category="çiçek" href="/frezya-aski-cicek-aranjmani-at3033" tabindex="0" data-position="35">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2204700">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3033-1/M/frezya-aski-cicek-aranjmani-at3033-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3033-1/S/frezya-aski-cicek-aranjmani-at3033-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3033-1/M/frezya-aski-cicek-aranjmani-at3033-1-1.jpg 255w" alt="Frezya Aşkı Çiçek Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3033-1/M/frezya-aski-cicek-aranjmani-at3033-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3033-1/S/frezya-aski-cicek-aranjmani-at3033-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3033-1/M/frezya-aski-cicek-aranjmani-at3033-1-1.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Frezya Aşkı Çiçek Aranjmanı</p>
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
										</div> <span class="products-stars__review-count">(415)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2204700&amp;productgroupid=1&amp;variantcode=at3033-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:360; -webkit-order:360; -moz-order:360; -ms-order:360">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at2920" data-category="çiçek" href="/mutluluk-kutusu-cicek-aranjmani-at2920" tabindex="0" data-position="36">
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
				<div class="products__item js-category-item-hover  " style="order:370; -webkit-order:370; -moz-order:370; -ms-order:370">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3655" data-category="çiçek" href="/blooming-love-at3655" tabindex="0" data-position="37">
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
				<div class="products__item js-category-item-hover  " style="order:380; -webkit-order:380; -moz-order:380; -ms-order:380">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr1986" data-category="yenilebilir çiçek" href="/cikolata-deryasi-kek-ve-tartolet-buketi-gr1986" tabindex="0" data-position="38">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3924088">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1986-1/M/gr1986-1-8d76c32ea666e56-16743b14.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1986-1/S/gr1986-1-8d76c32ea666e56-16743b14.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1986-1/M/gr1986-1-8d76c32ea666e56-16743b14.jpg 255w" alt="Çikolata Deryası Kek ve Tartolet Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr1986-1/M/gr1986-1-8d76c32ea666e56-16743b14.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1986-1/S/gr1986-1-8d76c32ea666e56-16743b14.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1986-1/M/gr1986-1-8d76c32ea666e56-16743b14.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Çikolata Deryası Kek ve Tartolet Buketi</p>
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
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3924088&amp;productgroupid=2&amp;variantcode=gr1986-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:390; -webkit-order:390; -moz-order:390; -ms-order:390">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3710" data-category="çiçek" href="/dogal-ahsap-kutukte-renkli-papatya-aranjmani-at3710" tabindex="0" data-position="39">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3230783">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3710-1/M/dogal-ahsap-kutukte-renkli-papatya-aranjmani-at3710-1-8d67d5cc190d3d6-3e9a85d0.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3710-1/S/dogal-ahsap-kutukte-renkli-papatya-aranjmani-at3710-1-8d67d5cc190d3d6-3e9a85d0.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3710-1/M/dogal-ahsap-kutukte-renkli-papatya-aranjmani-at3710-1-8d67d5cc190d3d6-3e9a85d0.jpg 255w" alt="Doğal Ahşap Kütükte Renkli Papatya Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3710-1/M/dogal-ahsap-kutukte-renkli-papatya-aranjmani-at3710-1-8d67d5cc190d3d6-3e9a85d0.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3710-1/S/dogal-ahsap-kutukte-renkli-papatya-aranjmani-at3710-1-8d67d5cc190d3d6-3e9a85d0.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3710-1/M/dogal-ahsap-kutukte-renkli-papatya-aranjmani-at3710-1-8d67d5cc190d3d6-3e9a85d0.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Doğal Ahşap Kütükte Renkli Papatya Aranjmanı</p>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=3230783&amp;productgroupid=1&amp;variantcode=at3710-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:400; -webkit-order:400; -moz-order:400; -ms-order:400">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3843" data-category="çiçek" href="/dogal-ahsap-kutukte-beyaz-frezyalar-at3843" tabindex="0" data-position="40">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3508647">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3843-1/M/dogal-ahsap-kutukte-beyaz-frezyalar-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3843-1/S/dogal-ahsap-kutukte-beyaz-frezyalar-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3843-1/M/dogal-ahsap-kutukte-beyaz-frezyalar-standart-boy.jpeg 255w" alt="Doğal Ahşap Kütükte Beyaz Frezyalar" src="https://cdn03.ciceksepeti.com/cicek/at3843-1/M/dogal-ahsap-kutukte-beyaz-frezyalar-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3843-1/S/dogal-ahsap-kutukte-beyaz-frezyalar-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3843-1/M/dogal-ahsap-kutukte-beyaz-frezyalar-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Doğal Ahşap Kütükte Beyaz Frezyalar</p>
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
										</div> <span class="products-stars__review-count">(170)</span>
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
							<a class="products__item-link js-products__item-link" data-productcode="via273" data-category="çiçek" href="/cam-fanusta-2-dal-beyaz-orkide-cicegi-via273" tabindex="0" data-position="42">
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
				<div class="products__item js-category-item-hover  " style="order:430; -webkit-order:430; -moz-order:430; -ms-order:430">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="via144" data-category="çiçek" href="/kisiye-ozel-askin-bas-harfi-kirmizi-gul-aranjmani-via144" tabindex="0" data-position="43">
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
				<div class="products__item js-category-item-hover  " style="order:440; -webkit-order:440; -moz-order:440; -ms-order:440">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at1652" data-category="çiçek" href="/kucak-dolusu-ask-25-kirmizi-gul-at1652" tabindex="0" data-position="44">
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
				<div class="products__item js-category-item-hover" style="order: 450; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="gr2007" data-category="yenilebilir çiçek" href="/kisiye-ozel-mesajli-pembe-hikaye-tartilet-buketi-gr2007" tabindex="0" data-position="45">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="3924068">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr2007-1/M/kisiye-ozel-mesajli-pembe-hikaye-tartilet-buketi-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/gr2007-1/S/kisiye-ozel-mesajli-pembe-hikaye-tartilet-buketi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/gr2007-1/M/kisiye-ozel-mesajli-pembe-hikaye-tartilet-buketi-standart-boy.jpeg 255w" alt="Kişiye Özel Mesajlı Pembe Hikaye Tartılet Buketi" src="https://cdn03.ciceksepeti.com/cicek/gr2007-1/M/kisiye-ozel-mesajli-pembe-hikaye-tartilet-buketi-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/gr2007-1/S/kisiye-ozel-mesajli-pembe-hikaye-tartilet-buketi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/gr2007-1/M/kisiye-ozel-mesajli-pembe-hikaye-tartilet-buketi-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Mesajlı Pembe Hikaye Tartılet Buketi</p>
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
										</div> <span class="products-stars__review-count">(536)</span>
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
				<div class="products__item js-category-item-hover  " style="order:460; -webkit-order:460; -moz-order:460; -ms-order:460">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3466" data-category="çiçek" href="/kisiye-ozel-vazolu-karanfil-ve-frezya-aranjmani-at3466" tabindex="0" data-position="46">
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
				<div class="products__item js-category-item-hover  " style="order:470; -webkit-order:470; -moz-order:470; -ms-order:470">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3990" data-category="çiçek" href="/mutluluga-dair-kirmizi-karanfil-aranjmani-at3990" tabindex="0" data-position="47">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4174357">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3990-1/M/mutluluga-dair-kirmizi-karanfil-aranjmani-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3990-1/S/mutluluga-dair-kirmizi-karanfil-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3990-1/M/mutluluga-dair-kirmizi-karanfil-aranjmani-standart-boy.jpeg 255w" alt="Mutluluğa Dair Kırmızı Karanfil Aranjmanı - Paşabahçe Vazoda" src="https://cdn03.ciceksepeti.com/cicek/at3990-1/M/mutluluga-dair-kirmizi-karanfil-aranjmani-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3990-1/S/mutluluga-dair-kirmizi-karanfil-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3990-1/M/mutluluga-dair-kirmizi-karanfil-aranjmani-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Mutluluğa Dair Kırmızı Karanfil Aranjmanı - Paşabahçe Vazoda</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%11</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">44</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(863)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4174357&amp;productgroupid=1&amp;variantcode=at3990-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:480; -webkit-order:480; -moz-order:480; -ms-order:480">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3443" data-category="çiçek" href="/kisiye-ozel-vazolu-papatya-husnuyusuf-ve-karanfil-aranjmani" tabindex="0" data-position="48">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2268394">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3443-1/M/kisiye-ozel-vazolu-papatya-husnuyusuf-ve-karanfil-aranjmani-at3443-1-8d4364d360aca0e-9aa65449.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3443-1/S/kisiye-ozel-vazolu-papatya-husnuyusuf-ve-karanfil-aranjmani-at3443-1-8d4364d360aca0e-9aa65449.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3443-1/M/kisiye-ozel-vazolu-papatya-husnuyusuf-ve-karanfil-aranjmani-at3443-1-8d4364d360aca0e-9aa65449.jpg 255w" alt="Kişiye Özel Vazolu Papatya Hüsnüyusuf ve Karanfil Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3443-1/M/kisiye-ozel-vazolu-papatya-husnuyusuf-ve-karanfil-aranjmani-at3443-1-8d4364d360aca0e-9aa65449.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3443-1/S/kisiye-ozel-vazolu-papatya-husnuyusuf-ve-karanfil-aranjmani-at3443-1-8d4364d360aca0e-9aa65449.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3443-1/M/kisiye-ozel-vazolu-papatya-husnuyusuf-ve-karanfil-aranjmani-at3443-1-8d4364d360aca0e-9aa65449.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Vazolu Papatya Hüsnüyusuf ve Karanfil Aranjmanı</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%25</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">79</span>
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
										</div> <span class="products-stars__review-count">(386)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2268394&amp;productgroupid=1&amp;variantcode=at3443-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 490; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3665" data-category="çiçek" href="/damali-vazoda-2-dal-mor-orkide-cicegi-at3665" tabindex="0" data-position="49">
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
				<div class="products__item js-category-item-hover" style="order: 500; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3988" data-category="çiçek" href="/renkli-dusler-karanfil-aranjmani-at3988" tabindex="0" data-position="50">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4174339">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3988-1/M/renkli-dusler-karanfil-aranjmani-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3988-1/S/renkli-dusler-karanfil-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3988-1/M/renkli-dusler-karanfil-aranjmani-standart-boy.jpeg 255w" alt="Renkli Düşler Karanfil Aranjmanı - Paşabahçe Vazoda" src="https://cdn03.ciceksepeti.com/cicek/at3988-1/M/renkli-dusler-karanfil-aranjmani-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3988-1/S/renkli-dusler-karanfil-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3988-1/M/renkli-dusler-karanfil-aranjmani-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Renkli Düşler Karanfil Aranjmanı - Paşabahçe Vazoda</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%11</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">44</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(695)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4174339&amp;productgroupid=1&amp;variantcode=at3988-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:510; -webkit-order:510; -moz-order:510; -ms-order:510">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3454" data-category="çiçek" href="/15-kirmizi-gul-ve-spesiyal-cikolata" tabindex="0" data-position="51">
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
				<div class="products__item js-category-item-hover  " style="order:520; -webkit-order:520; -moz-order:520; -ms-order:520">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at4133" data-category="çiçek" href="/pasabahce-vazoda-gerberalar-ve-cikolata-at4133" tabindex="0" data-position="52">
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
				<div class="products__item js-category-item-hover" style="order: 530; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3994" data-category="çiçek" href="/huzur-beyaz-karanfil-aranjmani-at3994" tabindex="0" data-position="53">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="4174374">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3994-1/M/huzur-beyaz-karanfil-aranjmani-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3994-1/S/huzur-beyaz-karanfil-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3994-1/M/huzur-beyaz-karanfil-aranjmani-standart-boy.jpeg 255w" alt="Huzur Beyaz Karanfil Aranjmanı - Paşabahçe Vazoda" src="https://cdn03.ciceksepeti.com/cicek/at3994-1/M/huzur-beyaz-karanfil-aranjmani-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3994-1/S/huzur-beyaz-karanfil-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3994-1/M/huzur-beyaz-karanfil-aranjmani-standart-boy.jpeg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Huzur Beyaz Karanfil Aranjmanı - Paşabahçe Vazoda</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%11</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">44</span>
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
										<div class="products-stars__icon-wrapper"> <span class="icon-star-fill products-stars__icon"></span>
										</div> <span class="products-stars__review-count">(269)</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=4174374&amp;productgroupid=1&amp;variantcode=at3994-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 540; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3453" data-category="çiçek" href="/phalaenopsis-orkide-ve-spesiyal-cikolata-at3453" tabindex="0" data-position="54">
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
				<div class="products__item js-category-item-hover  " style="order:550; -webkit-order:550; -moz-order:550; -ms-order:550">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3744" data-category="çiçek" href="/puantiyeli-vazoda-2-dal-mor-orkide-at3744" tabindex="0" data-position="55">
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
				<div class="products__item js-category-item-hover  " style="order:560; -webkit-order:560; -moz-order:560; -ms-order:560">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3776" data-category="çiçek" href="/sevimli-kutuda-beyaz-papatya-aranjmani-at3776" tabindex="0" data-position="56">
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
				<div class="products__item js-category-item-hover" style="order: 570; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="bt119" data-category="çiçek" href="/orta-boy-spathiphyllum" tabindex="0" data-position="57">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="219">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/bt119-1/M/cicek-sepeti-beyaz-guzellik-bt119-1-8d61191dd52b3f0-a246b7f0.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/bt119-1/S/cicek-sepeti-beyaz-guzellik-bt119-1-8d61191dd52b3f0-a246b7f0.jpg 186w,https://cdn03.ciceksepeti.com/cicek/bt119-1/M/cicek-sepeti-beyaz-guzellik-bt119-1-8d61191dd52b3f0-a246b7f0.jpg 255w" alt="Beyaz Spatifilyum (Barış Çiçeği) Saksıda Canlı Bitki" src="https://cdn03.ciceksepeti.com/cicek/bt119-1/M/cicek-sepeti-beyaz-guzellik-bt119-1-8d61191dd52b3f0-a246b7f0.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/bt119-1/S/cicek-sepeti-beyaz-guzellik-bt119-1-8d61191dd52b3f0-a246b7f0.jpg 186w,https://cdn03.ciceksepeti.com/cicek/bt119-1/M/cicek-sepeti-beyaz-guzellik-bt119-1-8d61191dd52b3f0-a246b7f0.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Beyaz Spatifilyum (Barış Çiçeği) Saksıda Canlı Bitki</p>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=219&amp;productgroupid=1&amp;variantcode=bt119-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 580; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="ck124" data-category="yenilebilir çiçek" href="/33-kisiye-ozel-harf-cikolata" tabindex="0" data-position="58">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="2198">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/ck124-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/ck124-1/S/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck124-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg 255w" alt="Kişiye Özel Hazırlanan Sütlü Harf Çikolata 264 gr" src="https://cdn03.ciceksepeti.com/cicek/ck124-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/ck124-1/S/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck124-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">Kişiye Özel Hazırlanan Sütlü Harf Çikolata 264 gr</p>
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
								<div class="products__installment-wrapper"></div>
								<div class="products__brand-badge"></div>
							</a>
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=2198&amp;productgroupid=2&amp;variantcode=ck124-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover" style="order: 590; height: auto;">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at2358" data-category="çiçek" href="/askin-simgesi-guller-ve-papatyalar-at2358" tabindex="0" data-position="59">
								<div class="products__item-img-container ratio-container">	<span class="products__favorite-icon js-favorite-add" data-product-id="120199">
						<span class="icon-favorite-border"></span>
									</span>
									<img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at2358-1/M/at2358-1-8d714df45f9fd1f-9ceaec61.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at2358-1/S/at2358-1-8d714df45f9fd1f-9ceaec61.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2358-1/M/at2358-1-8d714df45f9fd1f-9ceaec61.jpg 255w" alt="3 Kırmızı Gül ve Papatyalar - Paşabahçe Vazoda" src="https://cdn03.ciceksepeti.com/cicek/at2358-1/M/at2358-1-8d714df45f9fd1f-9ceaec61.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at2358-1/S/at2358-1-8d714df45f9fd1f-9ceaec61.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2358-1/M/at2358-1-8d714df45f9fd1f-9ceaec61.jpg 255w">
								</div>
								<div class="products__item-info">
									<div class="products__item-details">
										<p class="products__item-title">3 Kırmızı Gül ve Papatyalar - Paşabahçe Vazoda</p>
										<div class="products__item-badge products__item-badge--all-region js-products-bagde-all"> <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
										</div>
										<div class="products__item-price js-no-tax">
											<div class="discount-percentage"> <span class="discount-percentage__text">%38</span>
											</div>
											<div class="price price--old">
												<div class="price__left"> <span class="price__integer-value">79</span>
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
							<div class="products__recommend-inner">	<a class="products__recommend-link" href="/product/productdetailrecommend?productId=120199&amp;productgroupid=1&amp;variantcode=at2358-1">Benzer Ürünleri Gör +</a>
							</div>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  " style="order:600; -webkit-order:600; -moz-order:600; -ms-order:600">
					<div class="products__item-inner">
						<div class="products__container-background">
							<a class="products__item-link js-products__item-link" data-productcode="at3786" data-category="çiçek" href="/kisiye-ozel-sevimli-kutuda-kirmizi-gul-harf-aranjmani-at3786" tabindex="0" data-position="60">
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
				<input type="hidden" name="hasNextPage" value="True">
				<div class="products__item js-category-item-hover  products__item--featured-xlg js-ad-product ad-product--1" data-ad-code="kc3392655-1" data-ad-id="kc3392655-1" data-entry-id="15058" data-sequence="1">
					<div class="products__item-inner">
						<div class="products__container-background"><a class="products__item-link js-products__item-link js-ad-product-link" data-productcode="kc3392655" href="/melek-kanatli-peri-gumus-kolye-kc3392655?entryid=1A7C1ADF1F8E1C3F1C291B8F1C4A1F4C&amp;detailid=2006821" tabindex="0"><span class="products__item-link__badge"><span class="icon-star-fill"></span></span><div class="products__item-img-container ratio-container"><span class="products__favorite-icon js-favorite-add" data-product-id="4256124"><span class="icon-favorite-border"></span></span><img width="255" height="280" src="https://cdn03.ciceksepeti.com/cicek/kc3392655-1/M/melek-kanatli-peri-gumus-kolye-kc3392655-1-ee0d4eb694b94a319521c5d14ba89034.jpg" class="products__item-img lazyloaded" alt="Melek Kanatlı Peri Gümüş Kolye"></div><div class="products__item-info"><div class="products__item-details"><p class="products__item-title">Melek Kanatlı Peri Gümüş Kolye</p><div class="products__item-badge js-products-bagde-all products__item-badge--cargo "><span class="products__item-badge-text">Ücretsiz Kargo</span></div><div class="products__item-price js-no-tax"><div class="discount-percentage"><span class="discount-percentage__text">%50</span></div><div class="price price--old"><div class="price__left"><span class="price__integer-value">140</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,00 TL</span></div></div><div class="price price--now" data-price="69.99&quot;"><div class="price__left"><span class="price__integer-value">69</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,99 TL</span></div></div></div></div></div> <div class="products-stars">  <div class="products-stars__dropdown-evaluation">  </div> <div class="clearfix"></div> </div> <div class="products__installment-wrapper"><p class="products__installment products__installment--responsive">20,12 TL'den Başlayan Taksitlerle</p></div><div class="products__brand-badge"><p class="products__installment">20,12 TL'den Başlayan Taksitlerle</p></div></a>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg js-ad-product ad-product--2" data-ad-code="kc524344-1" data-ad-id="kc524344-1" data-entry-id="14617" data-sequence="2">
					<div class="products__item-inner">
						<div class="products__container-background"><a class="products__item-link js-products__item-link js-ad-product-link" data-productcode="kc524344" href="/sapkali-sevimli-ayicik-45-cm-beyaz-kirmizi-kc524344?entryid=1A7C1AC91C081C8C1A921ADF1B001F4C&amp;detailid=2006821" tabindex="0"><span class="products__item-link__badge"><span class="icon-star-fill"></span></span><div class="products__item-img-container ratio-container"><span class="products__favorite-icon js-favorite-add" data-product-id="2386843"><span class="icon-favorite-border"></span></span><img width="255" height="280" src="https://cdn03.ciceksepeti.com/cicek/kc524344-1/M/70-cm-buyuk-kalpli-sapkali-sevimli-ayicik-kc524344-1-605840b209cb4d089f0c99257296683a.jpg" class="products__item-img lazyloaded" alt="70 Cm Büyük Kalpli Şapkalı Sevimli Ayıcık"></div><div class="products__item-info"><div class="products__item-details"><p class="products__item-title">70 Cm Büyük Kalpli Şapkalı Sevimli Ayıcık</p><div class="products__item-badge js-products-bagde-all products__item-badge--all-region "><span class="products__item-badge-text">Aynı Gün Teslimat Seçeneği</span></div><div class="products__item-price js-no-tax"><div class="discount-percentage"><span class="discount-percentage__text">%42</span></div><div class="price price--old"><div class="price__left"><span class="price__integer-value">120</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,99 TL</span></div></div><div class="price price--now" data-price="69.99&quot;"><div class="price__left"><span class="price__integer-value">69</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,99 TL</span></div></div></div></div></div> <div class="products-stars">  <div class="products-stars__dropdown-evaluation">  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div> <span class="products-stars__review-count">(2)</span> </div> <div class="clearfix"></div> </div> <div class="products__installment-wrapper"><p class="products__installment products__installment--responsive">20,12 TL'den Başlayan Taksitlerle</p></div><div class="products__brand-badge"><p class="products__installment">20,12 TL'den Başlayan Taksitlerle</p></div></a>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg js-ad-product ad-product--3" data-ad-code="kc5918068-3" data-ad-id="kc5918068-3" data-entry-id="13360" data-sequence="3">
					<div class="products__item-inner">
						<div class="products__container-background"><a class="products__item-link js-products__item-link js-ad-product-link" data-productcode="kc5918068" href="/120-cm-papyonlu-buyuk-ayicik--100--yerli--kc5918068?entryid=1A7C1AC91BFD1A661AA81B791C1E1F4C&amp;detailid=2006821" tabindex="0"><span class="products__item-link__badge"><span class="icon-star-fill"></span></span><div class="products__item-img-container ratio-container"><span class="products__favorite-icon js-favorite-add" data-product-id="4364273"><span class="icon-favorite-border"></span></span><img width="255" height="280" src="https://cdn03.ciceksepeti.com/cicek/kc5918068-3/M/120-cm-papyonlu-buyuk-beyaz-ayicik-100-yerli-kc5918068-3-a9b68ad17ff8412cb074c1da2eab3ad7.jpg" class="products__item-img lazyloaded" alt="120 Cm Papyonlu Büyük Beyaz Ayıcık (%100 Yerli)"></div><div class="products__item-info"><div class="products__item-details"><p class="products__item-title">120 Cm Papyonlu Büyük Beyaz Ayıcık (%100 Yerli)</p><div class="products__item-badge js-products-bagde-all products__item-badge--all-region "><span class="products__item-badge-text">Aynı Gün Teslimat Seçeneği</span></div><div class="products__item-price js-no-tax"><div class="discount-percentage"><span class="discount-percentage__text">%41</span></div><div class="price price--old"><div class="price__left"><span class="price__integer-value">219</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,00 TL</span></div></div><div class="price price--now" data-price="129.90&quot;"><div class="price__left"><span class="price__integer-value">129</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,90 TL</span></div></div></div></div></div> <div class="products-stars">  <div class="products-stars__dropdown-evaluation">  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon is-passive"></span>  </div> <span class="products-stars__review-count">(90)</span> </div> <div class="clearfix"></div> </div> <div class="products__installment-wrapper"><p class="products__installment products__installment--responsive">37,34 TL'den Başlayan Taksitlerle</p></div><div class="products__brand-badge"><p class="products__installment">37,34 TL'den Başlayan Taksitlerle</p></div></a>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg js-ad-product ad-product--4" data-ad-code="kc8227917-1" data-ad-id="kc8227917-1" data-entry-id="15555" data-sequence="4">
					<div class="products__item-inner">
						<div class="products__container-background"><a class="products__item-link js-products__item-link js-ad-product-link" data-productcode="kc8227917" href="/25-cm-sevimli-el-kuklalari-kc8227917?entryid=1A7C1ADF1F8E1D101C291B6E1F831F4C&amp;detailid=2006821" tabindex="0"><span class="products__item-link__badge"><span class="icon-star-fill"></span></span><div class="products__item-img-container ratio-container"><span class="products__favorite-icon js-favorite-add" data-product-id="4499938"><span class="icon-favorite-border"></span></span><img width="255" height="280" src="https://cdn03.ciceksepeti.com/cicek/kc8227917-1/M/25-cm-sevimli-el-kuklalari-kc8227917-1-870c51724dff49dc9e7e8c63c2548b30.jpg" class="products__item-img lazyloaded" alt="25 Cm Sevimli El Kuklaları"></div><div class="products__item-info"><div class="products__item-details"><p class="products__item-title">25 Cm Sevimli El Kuklaları</p><div class="products__item-badge js-products-bagde-all products__item-badge--cargo "><span class="products__item-badge-text">Ücretsiz Kargo</span></div><div class="products__item-price js-no-tax"><div class="discount-percentage"><span class="discount-percentage__text">%25</span></div><div class="price price--old"><div class="price__left"><span class="price__integer-value">39</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,99 TL</span></div></div><div class="price price--now" data-price="29.99&quot;"><div class="price__left"><span class="price__integer-value">29</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,99 TL</span></div></div></div></div></div> <div class="products-stars">  <div class="products-stars__dropdown-evaluation">  </div> <div class="clearfix"></div> </div> <div class="products__installment-wrapper"><p class="products__installment products__installment--responsive">8,62 TL'den Başlayan Taksitlerle</p></div><div class="products__brand-badge"><p class="products__installment">8,62 TL'den Başlayan Taksitlerle</p></div></a>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg js-ad-product ad-product--5" data-ad-code="kc3308261-1" data-ad-id="kc3308261-1" data-entry-id="14670" data-sequence="5">
					<div class="products__item-inner">
						<div class="products__container-background"><a class="products__item-link js-products__item-link js-ad-product-link" data-productcode="kc3308261" href="/efsane-sevimli-maymun-pelus-45-cm-kc3308261?entryid=1A7C1AC91C081C8C1AA81BE71C1E1F4C&amp;detailid=2006821" tabindex="0"><span class="products__item-link__badge"><span class="icon-star-fill"></span></span><div class="products__item-img-container ratio-container"><span class="products__favorite-icon js-favorite-add" data-product-id="4425935"><span class="icon-favorite-border"></span></span><img width="255" height="280" src="https://cdn03.ciceksepeti.com/cicek/kc3308261-1/M/efsane-sevimli-maymun-pelus-45-cm-kc3308261-1-40262f5d000d4fd5bfa4312264578a4f.jpg" class="products__item-img lazyloaded" alt="Efsane Sevimli Maymun Peluş 45 Cm"></div><div class="products__item-info"><div class="products__item-details"><p class="products__item-title">Efsane Sevimli Maymun Peluş 45 Cm</p><div class="products__item-badge js-products-bagde-all products__item-badge--all-region "><span class="products__item-badge-text">Aynı Gün Teslimat Seçeneği</span></div><div class="products__item-price js-no-tax"><div class="discount-percentage"><span class="discount-percentage__text">%50</span></div><div class="price price--old"><div class="price__left"><span class="price__integer-value">99</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,99 TL</span></div></div><div class="price price--now" data-price="49.99&quot;"><div class="price__left"><span class="price__integer-value">49</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,99 TL</span></div></div></div></div></div> <div class="products-stars">  <div class="products-stars__dropdown-evaluation">  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div> <span class="products-stars__review-count">(2)</span> </div> <div class="clearfix"></div> </div> <div class="products__installment-wrapper"><p class="products__installment products__installment--responsive">14,37 TL'den Başlayan Taksitlerle</p></div><div class="products__brand-badge"><p class="products__installment">14,37 TL'den Başlayan Taksitlerle</p></div></a>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg js-ad-product ad-product--6" data-ad-code="kc1377944-9" data-ad-id="kc1377944-9" data-entry-id="14898" data-sequence="6">
					<div class="products__item-inner">
						<div class="products__container-background"><a class="products__item-link js-products__item-link js-ad-product-link" data-productcode="kc1377944" href="/sevimli-yastiklar-yumusak-dokulu-esnek-kumasli-kc1377944?entryid=1A7C1AC91C081FDB1BBB1CAD1C4A1F4C&amp;detailid=2006821" tabindex="0"><span class="products__item-link__badge"><span class="icon-star-fill"></span></span><div class="products__item-img-container ratio-container"><span class="products__favorite-icon js-favorite-add" data-product-id="4438365"><span class="icon-favorite-border"></span></span><img width="255" height="280" src="https://cdn03.ciceksepeti.com/cicek/kc1377944-9/M/sevimli-yastiklar-yumusak-dokulu-esnek-kumas-45-50-cm-kc1377944-9-48f5404100e7404290a1a57d6a02b8fd.jpg" class="products__item-img lazyloaded" alt="Sevimli Yastıklar Yumuşak Dokulu Esnek Kumaş 45 - 50 Cm"></div><div class="products__item-info"><div class="products__item-details"><p class="products__item-title">Sevimli Yastıklar Yumuşak Dokulu Esnek Kumaş 45 - 50 Cm</p><div class="products__item-badge js-products-bagde-all products__item-badge--all-region "><span class="products__item-badge-text">Aynı Gün Teslimat Seçeneği</span></div><div class="products__item-price js-no-tax"><div class="discount-percentage"><span class="discount-percentage__text">%51</span></div><div class="price price--old"><div class="price__left"><span class="price__integer-value">81</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,00 TL</span></div></div><div class="price price--now" data-price="39.99&quot;"><div class="price__left"><span class="price__integer-value">39</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,99 TL</span></div></div></div></div></div> <div class="products-stars">  <div class="products-stars__dropdown-evaluation">  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon is-passive"></span>  <span class="icon-star-fill products-stars__icon icon-half"></span>  </div> <span class="products-stars__review-count">(2)</span> </div> <div class="clearfix"></div> </div> <div class="products__installment-wrapper"><p class="products__installment products__installment--responsive">11,49 TL'den Başlayan Taksitlerle</p></div><div class="products__brand-badge"><p class="products__installment">11,49 TL'den Başlayan Taksitlerle</p></div></a>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg js-ad-product ad-product--7" data-ad-code="kc5298570-1" data-ad-id="kc5298570-1" data-entry-id="10321" data-sequence="7">
					<div class="products__item-inner">
						<div class="products__container-background"><a class="products__item-link js-products__item-link js-ad-product-link" data-productcode="kc5298570" href="/kisiye-ozel-6-fotografli-beyaz-renk-ahsap-cerceve---pelus-ayicik-kc5298570?entryid=1A7C1AD41CD91A661BA51B8F1BC61F4C&amp;detailid=2006821" tabindex="0"><span class="products__item-link__badge"><span class="icon-star-fill"></span></span><div class="products__item-img-container ratio-container"><span class="products__favorite-icon js-favorite-add" data-product-id="4291827"><span class="icon-favorite-border"></span></span><img width="255" height="280" src="https://cdn03.ciceksepeti.com/cicek/kc5298570-1/M/kisiye-ozel-6-fotografli-beyaz-renk-ahsap-cerceve---pelus-ayicik-kc5298570-1-cca87a858a35442dbedd5da878bea797.jpg" class="products__item-img lazyloaded" alt="Kişiye Özel 6 Fotoğraflı Beyaz Renk Ahşap Çerçeve &amp; Peluş Ayıcık"></div><div class="products__item-info"><div class="products__item-details"><p class="products__item-title">Kişiye Özel 6 Fotoğraflı Beyaz Renk Ahşap Çerçeve &amp; Peluş Ayıcık</p><div class="products__item-badge js-products-bagde-all products__item-badge--all-region "><span class="products__item-badge-text">Aynı Gün Teslimat Seçeneği</span></div><div class="products__item-price js-no-tax"><div class="discount-percentage"><span class="discount-percentage__text">%13</span></div><div class="price price--old"><div class="price__left"><span class="price__integer-value">59</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,99 TL</span></div></div><div class="price price--now" data-price="51.99&quot;"><div class="price__left"><span class="price__integer-value">51</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,99 TL</span></div></div></div></div></div> <div class="products-stars">  <div class="products-stars__dropdown-evaluation">  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon is-passive"></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon is-passive"></span>  </div> <span class="products-stars__review-count">(1)</span> </div> <div class="clearfix"></div> </div> <div class="products__installment-wrapper"><p class="products__installment products__installment--responsive">14,94 TL'den Başlayan Taksitlerle</p></div><div class="products__brand-badge"><p class="products__installment">14,94 TL'den Başlayan Taksitlerle</p></div></a>
						</div>
					</div>
				</div>
				<div class="products__item js-category-item-hover  products__item--featured-xlg js-ad-product ad-product--8" data-ad-code="kc8603270-1" data-ad-id="kc8603270-1" data-entry-id="6940" data-sequence="8">
					<div class="products__item-inner">
						<div class="products__container-background"><a class="products__item-link js-products__item-link js-ad-product-link" data-productcode="kc8603270" href="/kisiye-ozel-16-fotografli-ahsap-donme-dolap-kc8603270?entryid=1A661B791F361A711B9A1C1E1FA41F4C&amp;detailid=2006821" tabindex="0"><span class="products__item-link__badge"><span class="icon-star-fill"></span></span><div class="products__item-img-container ratio-container"><span class="products__favorite-icon js-favorite-add" data-product-id="4211814"><span class="icon-favorite-border"></span></span><img width="255" height="280" src="https://cdn03.ciceksepeti.com/cicek/kc8603270-1/M/aaa-kalite-kisiye-ozel-18-fotografli-ahsap-donme-dolap-kc8603270-1-97390821231445709f26fdee29480b65.jpg" class="products__item-img lazyloaded" alt="Kişiye Özel 18 Fotoğraflı Ahşap Dönme Dolap"></div><div class="products__item-info"><div class="products__item-details"><p class="products__item-title">Kişiye Özel 18 Fotoğraflı Ahşap Dönme Dolap</p><div class="products__item-badge js-products-bagde-all products__item-badge--all-region "><span class="products__item-badge-text">Aynı Gün Teslimat Seçeneği</span></div><div class="products__item-price js-no-tax"><div class="discount-percentage"><span class="discount-percentage__text">%37</span></div><div class="price price--old"><div class="price__left"><span class="price__integer-value">79</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,74 TL</span></div></div><div class="price price--now" data-price="49.90&quot;"><div class="price__left"><span class="price__integer-value">49</span></div><div class="price__right"><span class="price__decimal-value-with-currency">,90 TL</span></div></div></div></div></div> <div class="products-stars">  <div class="products-stars__dropdown-evaluation">  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon "></span>  </div>  <div class="products-stars__icon-wrapper">  <span class="icon-star-fill products-stars__icon is-passive"></span>  <span class="icon-star-fill products-stars__icon icon-half"></span>  </div> <span class="products-stars__review-count">(58)</span> </div> <div class="clearfix"></div> </div> <div class="products__installment-wrapper"><p class="products__installment products__installment--responsive">14,34 TL'den Başlayan Taksitlerle</p></div><div class="products__brand-badge"><p class="products__installment">14,34 TL'den Başlayan Taksitlerle</p></div></a>
						</div>
					</div>
				</div>
			</div>
			<div class="clearfix">
				<div class="pagination-area">
					<ul class="pagination">
						<li class="disabled"><a href="javascript:void(0)" rel="prev" data-ajaxfilter="" data-page="0"><span class="icon-left-arrow pagination__icon"></span>Önceki Sayfa</a>
						</li>
						<li class=" first-page active"><a data-ajaxfilter="?df=2006821" data-page="1" href="https://www.ciceksepeti.com/dogum-gunu">1</a>
						</li>
						<li class=""><a data-ajaxfilter="?df=2006821&amp;page=2" data-page="2" href="https://www.ciceksepeti.com/dogum-gunu?page=2">2</a>
						</li>
						<li class=""><a data-ajaxfilter="?df=2006821&amp;page=3" data-page="3" href="https://www.ciceksepeti.com/dogum-gunu?page=3">3</a>
						</li>
						<li class=""><a data-ajaxfilter="?df=2006821&amp;page=4" data-page="4" href="https://www.ciceksepeti.com/dogum-gunu?page=4">4</a>
						</li>
						<li class="disabled  pagination__dots"><a href="javascript:void(0)">...</a>
						</li>
						<li class="disabled"><a href="javascript:void(0)">5585</a>
						</li>
						<li class=""><a href="https://www.ciceksepeti.com/dogum-gunu?page=2" rel="next" data-ajaxfilter="?df=2006821&amp;page=2" data-page="2">Sonraki Sayfa<span class="icon-right-arrow pagination__icon"></span></a>
						</li>
					</ul>
				</div>
				<div class="pagination-area-notext">
					<ul class="pagination">
						<li class="disabled"><a href="javascript:void(0)" rel="prev" data-ajaxfilter="" data-page="0"><span class="icon-left-arrow pagination__icon"></span>Önceki</a>
						</li>
						<li class=""><a href="https://www.ciceksepeti.com/dogum-gunu?page=2" rel="next" data-ajaxfilter="?df=2006821&amp;page=2" data-page="2">Sonraki<span class="icon-right-arrow pagination__icon"></span></a>
						</li>
					</ul>
				</div>
			</div>
			<input type="hidden" value="4" class="js-sending-reason-id-ajax">
		</div>
		<div class="hidden js-ani-category-lastvisitproduct-widget">{"CountryCode":"tur","Rule":{"RuleIdentities":[{"FieldName":"DeliveryTypes","IdentityList":["0"]}],"Variables":[{"Name":"Today","Value":"(Salı)"},{"Name":"Tomorrow","Value":"(Çarşamba)"},{"Name":"TimeThreshold","Value":"spt"},{"Name":"NowTimeSpan","Value":"18:51:13"}]}}</div>
		<div id="ani-lastVisitCategoryWidget"></div>
		<div class="hidden js-ani-categorysimilartolastvisit-widget">{"RegionIdList":[1500046494,1500046737,1500046760,1500046814,1500046918,1500046938,1500047027,1500047147,1500047158,1500047192,1500047324,0],"CountryCode":"tur","Rule":{"RuleIdentities":[{"FieldName":"DeliveryTypes","IdentityList":["0"]}],"Variables":[{"Name":"Today","Value":"(Salı)"},{"Name":"Tomorrow","Value":"(Çarşamba)"},{"Name":"TimeThreshold","Value":"spt"},{"Name":"NowTimeSpan","Value":"18:51:13"}]}}</div>
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
    name: 'DogumGunu',
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