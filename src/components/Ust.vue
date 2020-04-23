<template>
<div>
  <div class="header">
    <a href="/gunun-firsati" style="background: #175BA4; rgb(87,0,143) 70%) !important; width: 100% !important; display: inline-block; text-align: center !important; margin:auto;" class="header-gtm-banner-link"> <img src="https://cdn03.ciceksepeti.com/slider/GFirsatlariBanner3-16.gif" width="1200" height="55" alt="ÇiçekSepeti Günün Fırsatı" style="width:100%; max-width:1200px;"> </a>
    <div class="container">
      <div class="header__top js-window-menu">
         <div class="header__left-col">
            <div class="header__logo">
               <div class="site-logo">
                  <a href="/" class="site-logo__link">
                  <img src="//cdn03.ciceksepeti.com/Themes/Ciceksepeti/Assets/images/logo-new-ciceksepeti.png?v=3.1.1.17054" srcset="//cdn03.ciceksepeti.com/Themes/Ciceksepeti/Assets/images/logo-new-ciceksepeti.png?v=3.1.1.17054 1x, //cdn03.ciceksepeti.com/Themes/Ciceksepeti/Assets/images/logo-new-ciceksepeti.png?v=3.1.1.17054 2x" alt="Çiçeksepeti Logo" width="160" height="53">
                  </a>
               </div>
            </div>
            <div class="header__theme">
            </div>
         </div>
         <div class="header__right-col">
            <div class="js-product-search product-search">
               <div id="product-search-2" class="product-search__container">
                  <input type="text" name=" " class="form-control product-search__input js-product-search-input js-illegal-characters" placeholder="Ürün veya kategori ara" data-module-id="2">
                  <div class="product-search__loader"></div>
                  <div class="product-search__remove-button"><span class="icon-close product-search__remove-button-icon"></span></div>
                  <button class="js-product-search-button btn product-search__button" href="javascript:;"><span class="live-search__text-find">ARA</span><span class="icon icon-search product-search__button-icon"></span></button>
                  <div class="product-search__results-wrapper">
                     <ul class="product-search__results"></ul>
                     <a class="product-search__showall js-product-search--showall btn btn-success" href="javascript:;">TÜM SONUÇLARI GÖSTER</a>
                  </div>
               </div>
            </div>
            <div class="user-menu-container js-user-menu">
               <nav class="user-menu">
                  <ul class="user-menu__items  ">
                     <li class="user-menu__item">
                        <a class="user-menu__link user-menu__link--order">
                        <span class="user-menu__icon user-menu__icon--order icon-cargo-min"></span>
                        <span class="user-menu__title"><router-link to="/siparistakip">Sipariş Takibi</router-link></span>
                        </a>
                     </li>
                     <li class="user-menu__item">
                        <a class="user-menu__link user-process-toggle" href="javascript:void(0);">
                        <span class=" user-menu__icon user-menu__icon--account icon-user">
                        </span>
                        <span class="user-menu__title">Üyelik</span>
                        </a>
                        <div class="user-process js-user-process">
                           <div class="user-process__content">
                              <ul class="users-process-list">
                                 <li class="users-process-list__item">
                                    <a class="users-process-list__btn" href="/uye-girisi">
                                    <span class="users-process-list__icon icon-login"></span>
                                    Üye Girişi
                                    </a>
                                 </li>
                                 <li class="users-process-list__item">
                                    <span class="users-process-list__icon icon-register">
                                    <span class="path1"></span><span class="path2"></span><span class="path3"></span>
                                    </span>
                                    <a class="users-process-list__btn"><router-link to="/uyelik">Üye Ol</router-link>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </li>
                     <li class="user-menu__item">
                        <a class="user-menu__link">
                        <span class="user-menu__icon user-menu__icon--cart icon-cart js-product-id-list" data-product-id-list="">
                        <span class="user-menu__cart-quantity js-user-menu-cart-quantity hide" data-quantity="0">0</span>
                        </span>
                        <span class="user-menu__title"><router-link to="/sepet">Sepetim</router-link></span>
                        </a> 
                     </li>
                     <li class="user-menu__item user-menu__item--contact">
                        <a class="user-menu__link" href="/bize-ulasin">
                        <span class="user-menu__icon user-menu__icon--contact icon-phone"></span>
                        <span class="user-menu__title">Bize Ulaşın</span>
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
            <ul class="top-search-list">
               <li class="top-search-list__item">En çok arananlar :</li>
               <li class="top-search-list__item"><a class="top-search-list__item-link" href="/cikolata?qtext=çikolata">Çikolata</a></li>
               <li class="top-search-list__item"><a class="top-search-list__item-link" href="/orkide?qtext=orkide">Orkide</a></li>
               <li class="top-search-list__item"><a class="top-search-list__item-link" href="/papatya-gerbera?qtext=papatya">Papatya</a></li>
               <li class="top-search-list__item"><a class="top-search-list__item-link" href="/teraryum?qtext=teraryum">Teraryum</a></li>
               <li class="top-search-list__item"><a class="top-search-list__item-link" href="/guller?qtext=gül">Gül</a></li>
               <li class="top-search-list__item"><a class="top-search-list__item-link" href="/meyve-sepeti?qtext=meyvesepeti">Meyve Sepeti</a></li>
               <li class="top-search-list__item"><a class="top-search-list__item-link" href="/hediye-kupalar?qtext=kupa">Kupa</a></li>
               <li class="top-search-list__item"><a class="top-search-list__item-link" href="/hediye-kolye?qtext=kolye">Kolye</a></li>
               <li class="top-search-list__item"><a class="top-search-list__item-link" href="/hediye-oyuncak-ayi?qtext=ayıcık">Ayıcık</a></li>
            </ul>
         </div>
      </div>
   </div>
   <div class="header__bottom" >
      <div class="container container--main-menu"  >
      
         <a class="hamburger js-hamburger" href="javascript:void(0)">
         <span class="icon-menu hamburger__icon">
         <span class="sticky-basket__cart-quantity sticky-basket__cart-quantity--hamburger js-hamburger-cart-quantity is-hidden"></span>
         </span>
         </a>
         <div class="responsive-menu js-responsive-menu" v-bind:class="{'is-active': active}" > 
            <nav class="main-menu">
               <ul class="main-menu__items">
                  <li class="main-menu__item js-main-menu-item">
                     <a href="javascript:void(0)" data-href="/dogumgunu" class="main-menu__link-responsive js-main-menu-link-responsive">
                     <span class="main-menu__text">
                     DOĞUM GÜNÜ
                     </span>
                     </a>
                     <span class="main-menu__link-container">
                     <a class="main-menu__link js-main-menu-link " href="/dogumgunu">
                     <span class="main-menu__icon">
                     <span class="icon-birthday"></span>
                     </span>
                     <span class="main-menu__text"><router-link to="/dogumgunu">DOĞUM GÜNÜ</router-link>
                    </span>
                     </a>
                     </span>
                     <nav class="main-menu__submenu main-submenu js-main-submenu">
                        <span class=" 111 main-menu__link-responsive main-menu__link-responsive--center">
                        <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back"></i>
                        <span class="main-menu__text">
                           
                        DOĞUM GÜNÜ
                        </span>
                        </span>
                        <div class="main-submenu__inner">
                           <div class="main-submenu__col main-submenu__col--left">
                              <p class="main-submenu__title">
                                 <a href="/dogumgunu" role="button">Tüm Ürünleri Gör</a>
                              </p>
                              <ul class="main-submenu__items">
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/dogum-gunu-cicekleri">Doğum Günü Çiçekleri</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/dogum-gunu-hediyeleri">Doğum Günü Hediyeleri</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/dogum-gunu-kek-kurabiye">Doğum Günü Bonnyfood</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-aksesuarlar">Erkek Aksesuar</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/dogum-gunu-butik-cicek">Tasarım Çiçekler</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/tum-urunler?df=2007217,2006821">Kişiye Özel</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-fotografli-urunler">Fotoğraflı Ürünler</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/dogum-gunu-cikolata">Çikolata</a>
                                 </li>
                              </ul>
                              <ul class="main-submenu__items">
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/tum-urunler?df=2007101,2009390,2007314,2006821">Takı &amp; Aksesuar</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/tum-urunler?df=2007130,2006821">Meyve Sepeti</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-cicekler">Kişiye Özel Çiçekler</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/bonsai">Bonsai</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/tum-urunler?df=2007099,2007111,2006821">Teraryum</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/hediye-saat">Saat</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/tum-urunler?df=2007099,2007108,2006821">Saksı Çiçekleri</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/tum-urunler?df=2007103,2006821">Güller</a>
                                 </li>
                              </ul>
                              <ul class="main-submenu__items">
                              </ul>
                           </div>
                           <div class="main-submenu__col main-submenu__col--right is-medium">
                              <div class="submenu-product">
                                 <a href="/pasabahce-vazoda-renkli-karanfiller-at4018">
                                 <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/f021d9fc-1dbe-4efa-9069-39352158d931.jpg" alt="Doğum Günü" width="480" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                 </a>
                              </div>
                           </div>
                        </div>
                     </nav>
                  </li>
                  <li class="main-menu__item js-main-menu-item">
                     <a href="javascript:void(0)" data-href="/cicek" class="main-menu__link-responsive js-main-menu-link-responsive">
                     <span class="main-menu__text">ÇİÇEK
                     </span>
                     </a>
                     <span class="main-menu__link-container">
                     <a class="main-menu__link js-main-menu-link " href="/cicek">
                     <span class="main-menu__icon">
                     <span class="icon-menu-flowers"></span>
                     </span>
                     <span class="main-menu__text">
                     <span class="main-menu__text"><router-link to="/cicek">ÇİÇEK</router-link>                    </span> </span>
                     </a>
                     </span>
                     <nav class="main-menu__submenu main-submenu js-main-submenu">
                        <span class=" 111 main-menu__link-responsive main-menu__link-responsive--center">
                        <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back"></i>
                        <span class="main-menu__text">
                        ÇİÇEK
                        </span>
                        </span>
                        <div class="main-submenu__inner">
                           <div class="main-submenu__col main-submenu__col--left">
                              <p class="main-submenu__title">
                                 <a href="/cicek" role="button">Tüm Ürünleri Gör</a>
                              </p>
                              <ul class="main-submenu__items">
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/dogum-gunu-cicekleri">Doğum Günü</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/yeni-ise-cicek">Yeni İş/Terfi</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/icimden-geldi-cicek">İçimden Geldi</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/sevgiliye-cicek">Sevgili</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/soz-nisan-dugun-cicekleri">Söz/Nişan/Düğün</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/yeni-bebek-cicekleri">Yeni Bebek</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/gecmis-olsun-cicekleri">Geçmiş Olsun</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/ozur-cicekleri">Özür Dilerim</a>
                                 </li>
                              </ul>
                              <ul class="main-submenu__items">
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/yildonumu-cicekleri">Yıl Dönümü</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/acilis-toren-cicekleri">Açılış/Tören</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/cenaze-cicekleri">Cenaze</a>
                                 </li>
                              </ul>
                           </div>
                           <div class="main-submenu__col main-submenu__col--mid">
                              <ul class="main-submenu__items">
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/saksi-cicekleri">Saksı Çiçekleri</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kutuda-guller">Kutuda Güller</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/guller">Güller</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/orkide">Orkide</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/sukulentler">Sukulent</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-cicekler">Kişiye Özel Çiçekler</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/cicek-buketleri">Çiçek Buketleri</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/bonsai">Bonsai</a>
                                 </li>
                              </ul>
                              <ul class="main-submenu__items">
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/teraryum">Teraryum</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/papatya-gerbera">Papatya/Gerbera</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/cicek-hediye">Çiçek &amp; Hediye</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/lilyum-zambak">Lilyum/Zambak</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/ic-mekan-bahce-urunleri">İç Mekan &amp; Bahçe</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/butik-cicekciler">Tasarım Çiçekler</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/dugun-celenkleri">Düğün Çelenkleri</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/celenk">Cenaze Çelenkleri</a>
                                 </li>
                              </ul>
                           </div>
                           <div class="main-submenu__col main-submenu__col--right is-small">
                              <div class="submenu-product">
                                 <a href="/seramik-vazoda-phalaenopsis-orkide">
                                 <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/74867869-dfcf-43f3-ae7e-9ac24a2aa92f.jpg" alt="Çiçek" width="310" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                 </a>
                              </div>
                           </div>
                        </div>
                     </nav>
                  </li>
                  <li class="main-menu__item js-main-menu-item">
                     <a href="javascript:void(0)" data-href="/hediye" class="main-menu__link-responsive js-main-menu-link-responsive">
                     <span class="main-menu__text">
                     HEDİYE
                     </span>
                     </a>
                     <span class="main-menu__link-container">
                     <a class="main-menu__link js-main-menu-link " href="/hediye">
                     <span class="main-menu__icon">
                     <span class=" icon-menu-bonnygift"></span>
                     </span>
                     <span class="main-menu__text">
                     HEDİYE                        </span>
                     </a>
                     </span>
                     <nav class="main-menu__submenu main-submenu js-main-submenu main-menu__mega-submenu">
                        <span class="main-menu__link-responsive main-menu__link-responsive--center">
                        <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back"></i>
                        <span class="main-menu__text">
                        HEDİYE
                        </span>
                        </span>
                        <div class="main-submenu__inner">
                           <div class="main-submenu__col main-submenu__col--left">
                              <p class="main-submenu__title">
                                 <a href="/hediye" role="button">Tüm Ürünleri Gör</a>
                              </p>
                              <ul class="main-submenu__items menuAimSub">
                                 <li class="main-submenu__item js-mega-menu-hover active">
                                    <a class="main-submenu__item-link js-mega-menu-second" href="/gonderim-amaci">Gönderim Amacı</a>
                                 </li>
                                 <li class="main-submenu__item js-mega-menu-hover">
                                    <a class="main-submenu__item-link js-mega-menu-second" href="/kisiye-ozel-hediyelik">Kişiye Özel</a>
                                 </li>
                                 <li class="main-submenu__item js-mega-menu-hover">
                                    <a class="main-submenu__item-link js-mega-menu-second" href="/hediyelik-urunler">Hediyelik</a>
                                 </li>
                                 <li class="main-submenu__item js-mega-menu-hover">
                                    <a class="main-submenu__item-link js-mega-menu-second" href="/hediye-taki">Takı/Aksesuar</a>
                                 </li>
                                 <li class="main-submenu__item js-mega-menu-hover">
                                    <a class="main-submenu__item-link js-mega-menu-second" href="/bebek-hediyeleri">Anne-Bebek</a>
                                 </li>
                                 <li class="main-submenu__item js-mega-menu-hover">
                                    <a class="main-submenu__item-link js-mega-menu-second" href="/ev-yasam">Ev Yaşam</a>
                                 </li>
                                 <li class="main-submenu__item js-mega-menu-hover">
                                    <a class="main-submenu__item-link js-mega-menu-second" href="/hediye-oyun-oyuncak">Oyuncak</a>
                                 </li>
                                 <li class="main-submenu__item js-mega-menu-hover">
                                    <a class="main-submenu__item-link js-mega-menu-second" href="/ofis-hediyeleri">Ofis-Kırtasiye</a>
                                 </li>
                                 <li class="main-submenu__item js-mega-menu-hover">
                                    <a class="main-submenu__item-link js-mega-menu-second" href="/mizu">Moda</a>
                                 </li>
                                 <li class="main-submenu__item js-mega-menu-hover">
                                    <a class="main-submenu__item-link js-mega-menu-second" href="/hobi">Hobi</a>
                                 </li>
                                 <li class="main-submenu__item js-mega-menu-hover">
                                    <a class="main-submenu__item-link js-mega-menu-second" href="/kozmetik">Kozmetik</a>
                                 </li>
                                 <li class="main-submenu__item js-mega-menu-hover">
                                    <a class="main-submenu__item-link js-mega-menu-second" href="/ayni-gun-teslim-hediyeler">Aynı Gün Teslim</a>
                                 </li>
                                 <li class="main-submenu__item js-mega-menu-hover">
                                    <a class="main-submenu__item-link js-mega-menu-second" href="/pet-shop">Evcil Hayvan Ürünleri</a>
                                 </li>
                              </ul>
                           </div>
                           <div class="main-submenu__col main-submenu__col--mid main-menu__mega-submenu-third js-mega-menu-third-container">
                              <div class="main-menu__mega-submenu-third-row js-mega-menu-third-row">
                                 <a href="javascript:void(0)" class="main-menu__link-responsive main-menu__link-responsive--back-third">
                                 <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back-third"></i>
                                 <span class="main-menu__text">
                                 GÖNDERİM AMACI
                                 </span>
                                 </a>
                                 <p class="main-submenu__title main-submenu__title--responsive">
                                    <a href="/gonderim-amaci" role="button">Tüm Ürünleri Gör</a>
                                 </p>
                                 <ul class="main-submenu__items">
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/sevgiliye-hediye">Sevgili</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/dogum-gunu-hediyeleri">Doğum Günü</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/yeni-is-hediyeleri">Yeni İş/Terfi</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/icimden-geldi-hediye">İçimden Geldi</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/yildonumu-hediyeleri">Yıl Dönümü</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/ev-hediyeleri">Ev Hediyesi</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/bebek-hediyeleri">Yeni Bebek</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/ozur-hediyeleri">Özür Dilerim</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/gecmis-olsun-hediyeleri">Geçmiş Olsun</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/parti-kutlama-urunleri">Parti-Kutlama</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kendim-icin-hediye">Kendim İçin</a>
                                    </li>
                                 </ul>
                              </div>
                              <div class="main-menu__mega-submenu-third-row js-mega-menu-third-row hidden">
                                 <a href="javascript:void(0)" class="main-menu__link-responsive main-menu__link-responsive--back-third">
                                 <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back-third"></i>
                                 <span class="main-menu__text">
                                 KİŞİYE ÖZEL
                                 </span>
                                 </a>
                                 <p class="main-submenu__title main-submenu__title--responsive">
                                    <a href="/kisiye-ozel-hediyelik" role="button">Tüm Ürünleri Gör</a>
                                 </p>
                                 <ul class="main-submenu__items">
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/isme-ozel-hediye-setleri">Hediye Setleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kisiye-ozel-fotografli-urunler">Fotoğraflı Ürünler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kisiye-ozel-taki">Takı-Kolye</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kisiye-ozel-aksesuarlar">Erkek Aksesuarları</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kisiye-ozel-hediye-kalem-ve-setler">Kalem ve Ofis Hediyeleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kisiye-ozel-hediye-kupalar">Kupa Bardaklar</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kisiye-ozel-defterler">Defterler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kisiye-ozel-lezzetler">Kişiye Özel Lezzetler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kisiye-ozel-oduller">Ödül-Sertifika</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kisiye-ozel-dekoratif-urunler">Dekoratif Ürünler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kisiye-ozel-bebek-urunleri">Bebek Ürünleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kisiye-ozel-tekstil-urunleri">Tshirt-Giyim</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kisiye-ozel-hediye-yastiklar">Yastık</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kisiye-ozel-parfum">Kişiye Özel Parfüm</a>
                                    </li>
                                 </ul>
                              </div>
                              <div class="main-menu__mega-submenu-third-row js-mega-menu-third-row hidden">
                                 <a href="javascript:void(0)" class="main-menu__link-responsive main-menu__link-responsive--back-third">
                                 <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back-third"></i>
                                 <span class="main-menu__text">
                                 HEDİYELİK
                                 </span>
                                 </a>
                                 <p class="main-submenu__title main-submenu__title--responsive">
                                    <a href="/hediyelik-urunler" role="button">Tüm Ürünleri Gör</a>
                                 </p>
                                 <ul class="main-submenu__items">
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-sepetleri">Hediye Sepetleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-retro-urunler">Nostaljik Hediyeler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediyelik-set">Hediyelik Setler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/oscar-odulleri">Oscar Ödülleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-muzik-kutulari">Müzik Kutusu - Kar Küresi</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-dekoratif-urunler">Dekoratif Ürünler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kokulu-tas">Kokulu Taşlar</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/masa-ustu-objeler">Masa Üstü Objeler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/ilginc-hediyeler">İlginç Hediyeler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kar-kuresi">Kar Küresi</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/led-lamba">Led Lambalar</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/nostaljik-araclar">Nostaljik Araçlar</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/plaketler">Plaketler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/sabun-aranjmanlari">Sabun Aranjmanları</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kostumler">Kostüm</a>
                                    </li>
                                 </ul>
                                 <ul class="main-submenu__items">
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/parti-malzemeleri">Parti Malzemeleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediyelik-sertifikalar">Sertifikalar</a>
                                    </li>
                                 </ul>
                              </div>
                              <div class="main-menu__mega-submenu-third-row js-mega-menu-third-row hidden">
                                 <a href="javascript:void(0)" class="main-menu__link-responsive main-menu__link-responsive--back-third">
                                 <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back-third"></i>
                                 <span class="main-menu__text">
                                 TAKI/AKSESUAR
                                 </span>
                                 </a>
                                 <p class="main-submenu__title main-submenu__title--responsive">
                                    <a href="/hediye-taki" role="button">Tüm Ürünleri Gör</a>
                                 </p>
                                 <ul class="main-submenu__items">
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/taki-modelleri">Takı</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-saat">Saat</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-kolye">Kolyeler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/bileklik">Bileklik</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-yuzuk">Yüzük</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-aksesuarlar">Aksesuar</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-kupe">Küpe</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/gumus-taki">Gümüş Ürünler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/taki-setleri">Takı Setleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/altin-taki">Altın Ürünler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/aksesuar-set">Aksesuar Setler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/tesbih">Tesbih</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/gozluk">Gözlük</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-cuzdanlar">Cüzdan</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-cakmaklar">Çakmak</a>
                                    </li>
                                 </ul>
                                 <ul class="main-submenu__items">
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-kravat">Kravat</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/anahtarlik">Anahtarlık</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/diger-taki">Diğer Takılar</a>
                                    </li>
                                 </ul>
                              </div>
                              <div class="main-menu__mega-submenu-third-row js-mega-menu-third-row hidden">
                                 <a href="javascript:void(0)" class="main-menu__link-responsive main-menu__link-responsive--back-third">
                                 <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back-third"></i>
                                 <span class="main-menu__text">
                                 ANNE-BEBEK
                                 </span>
                                 </a>
                                 <p class="main-submenu__title main-submenu__title--responsive">
                                    <a href="/bebek-hediyeleri" role="button">Tüm Ürünleri Gör</a>
                                 </p>
                                 <ul class="main-submenu__items">
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/anne-bebek-hediye-sepeti">Anne - Bebek Hediye Sepeti</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/bebek-tekstili">Bebek Giyim/Aksesuar</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/bebek-odasi">Bebek Odası</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-bebek-oyuncaklari">Bebek Oyuncakları</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/bebek-urunleri">Bakım/Kozmetik/Banyo</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/bebek-mama">Bebek Beslenme</a>
                                    </li>
                                 </ul>
                              </div>
                              <div class="main-menu__mega-submenu-third-row js-mega-menu-third-row hidden">
                                 <a href="javascript:void(0)" class="main-menu__link-responsive main-menu__link-responsive--back-third">
                                 <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back-third"></i>
                                 <span class="main-menu__text">
                                 EV YAŞAM
                                 </span>
                                 </a>
                                 <p class="main-submenu__title main-submenu__title--responsive">
                                    <a href="/ev-yasam" role="button">Tüm Ürünleri Gör</a>
                                 </p>
                                 <ul class="main-submenu__items">
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-kupalar">Kupa</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/ev-dekorasyon">Ev Dekorasyon</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-mutfak-gerecleri">Mutfak Aksesuarları</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/ev-tekstili">Ev Tekstili</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/elektrikli-ev-aletleri">Elektrikli Ev Aletleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/banyo">Banyo</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/mobilya">Mobilya</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/bahce">Bahçe</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-yastiklar">Yastıklar</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/tekli-kupa">Tekli Kupalar</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/tablo">Tablo</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/duvar-saati">Duvar Saati</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/dekoratif-obje">Dekoratif Objeler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/cay-kahve-setleri">Çay &amp; Kahve Setleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/mum">Mum</a>
                                    </li>
                                 </ul>
                                 <ul class="main-submenu__items">
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/bardak-surahi">Bardak - Sürahiler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/yastik-kilifi">Yastık Kılıfı</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/biblo">Biblo</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/diger-ev-tekstili">Diğer Ev Tekstilleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/aydinlatma">Aydınlatma</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kupa-set">Kupa Setler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/havlu">Havlu</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/cerceve">Çerçeve</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/masa-saatleri">Masa Saati</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/mutfak-setleri">Mutfak Setleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/termos">Termos</a>
                                    </li>
                                 </ul>
                              </div>
                              <div class="main-menu__mega-submenu-third-row js-mega-menu-third-row hidden">
                                 <a href="javascript:void(0)" class="main-menu__link-responsive main-menu__link-responsive--back-third">
                                 <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back-third"></i>
                                 <span class="main-menu__text">
                                 OYUNCAK
                                 </span>
                                 </a>
                                 <p class="main-submenu__title main-submenu__title--responsive">
                                    <a href="/hediye-oyun-oyuncak" role="button">Tüm Ürünleri Gör</a>
                                 </p>
                                 <ul class="main-submenu__items">
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-oyuncak-ayi">Peluş Oyuncaklar</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-bebek-oyuncaklari">Bebek Oyuncakları</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-egitici-oyuncaklar">Eğitici Oyuncaklar</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/action-figur">Figür Oyuncaklar</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kumandali-araba">Kumandalı Araçlar</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/oyuncak-bebek">Oyuncak Bebekler ve Aksesuarları</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/yapi-oyuncaklari">Yapı Oyuncakları</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/zeka-oyunlari">Zeka Oyunları</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/oyuncak-araba">Oyuncak Araçlar</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/deniz-oyuncaklari">Dış Mekan Spor Deniz Oyuncakları</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/diger-oyuncak-araclar">Diğer Oyuncak Araçlar</a>
                                    </li>
                                 </ul>
                              </div>
                              <div class="main-menu__mega-submenu-third-row js-mega-menu-third-row hidden">
                                 <a href="javascript:void(0)" class="main-menu__link-responsive main-menu__link-responsive--back-third">
                                 <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back-third"></i>
                                 <span class="main-menu__text">
                                 OFİS-KIRTASİYE
                                 </span>
                                 </a>
                                 <p class="main-submenu__title main-submenu__title--responsive">
                                    <a href="/ofis-hediyeleri" role="button">Tüm Ürünleri Gör</a>
                                 </p>
                                 <ul class="main-submenu__items">
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/defter-set">Ajanda-Defter Setler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-kalem">Kalem</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/ofis-malzemeleri">Ofis Malzemeleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kalem-set">Kalem Setler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/ofis-gerecleri">Ofis Gereçleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/defter">Defter</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/ajanda">Ajanda</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/diger-ofis-malzemeleri">Diğer Ofis Malzemeleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/album">Albüm</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-kartvizitlikler">Kartvizitlik</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kartvizitlik-set">Kartvizitlik Setler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/tukenmez-kalem">Tükenmez Kalem</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/okul-gerecleri">Okul Gereçleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/okul-malzemeleri">Okul Malzemeleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/dolma-kalem">Dolma Kalem</a>
                                    </li>
                                 </ul>
                                 <ul class="main-submenu__items">
                                 </ul>
                              </div>
                              <div class="main-menu__mega-submenu-third-row js-mega-menu-third-row hidden">
                                 <a href="javascript:void(0)" class="main-menu__link-responsive main-menu__link-responsive--back-third">
                                 <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back-third"></i>
                                 <span class="main-menu__text">
                                 MODA
                                 </span>
                                 </a>
                                 <p class="main-submenu__title main-submenu__title--responsive">
                                    <a href="/mizu" role="button">Tüm Ürünleri Gör</a>
                                 </p>
                                 <ul class="main-submenu__items">
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/giyim">Giyim</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/canta">Çantalar</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/tesettur-giyim">Tesettür Giyim</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/sweatshirt">Sweatshirt</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/mont">Mont-Kaban</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/ayakkabi">Ayakkabı</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/bot-cizme">Bot-Çizme</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/el-cantasi">El Çantası</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/sirt-cantasi">Sırt Çantası</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-gomlek">Gömlek</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/spor-ayakkabi">Spor Ayakkabı</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-tisort">T-shirt</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/pantolon">Pantolon</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/gunluk-ayakkabi">Günlük (Casual) Ayakkabı</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/bez-canta">Bez Çanta</a>
                                    </li>
                                 </ul>
                                 <ul class="main-submenu__items">
                                 </ul>
                              </div>
                              <div class="main-menu__mega-submenu-third-row js-mega-menu-third-row hidden">
                                 <a href="javascript:void(0)" class="main-menu__link-responsive main-menu__link-responsive--back-third">
                                 <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back-third"></i>
                                 <span class="main-menu__text">
                                 HOBİ
                                 </span>
                                 </a>
                                 <p class="main-submenu__title main-submenu__title--responsive">
                                    <a href="/hobi" role="button">Tüm Ürünleri Gör</a>
                                 </p>
                                 <ul class="main-submenu__items">
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/model-otomobil">Model Arabalar</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/maketler">Maketler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kitap">Kitap</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kitap-setleri">Kitap Setler</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/muzik-aletleri">Müzik Enstrümanları ve Ekipmanları</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/muzik">Müzik</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/oyun-takimlari">Oyun takımları</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/plak">Plak</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/puzzle">Puzzle</a>
                                    </li>
                                 </ul>
                              </div>
                              <div class="main-menu__mega-submenu-third-row js-mega-menu-third-row hidden">
                                 <a href="javascript:void(0)" class="main-menu__link-responsive main-menu__link-responsive--back-third">
                                 <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back-third"></i>
                                 <span class="main-menu__text">
                                 KOZMETİK
                                 </span>
                                 </a>
                                 <p class="main-submenu__title main-submenu__title--responsive">
                                    <a href="/kozmetik" role="button">Tüm Ürünleri Gör</a>
                                 </p>
                                 <ul class="main-submenu__items">
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/hediye-parfum">Parfüm</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/makyaj-malzemeleri">Makyaj Malzemeleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kisisel-bakim">Kişisel Bakım</a>
                                    </li>
                                 </ul>
                              </div>
                              <div class="main-menu__mega-submenu-third-row js-mega-menu-third-row hidden">
                                 <a href="javascript:void(0)" class="main-menu__link-responsive main-menu__link-responsive--back-third">
                                 <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back-third"></i>
                                 <span class="main-menu__text">
                                 AYNI GÜN TESLİM
                                 </span>
                                 </a>
                                 <p class="main-submenu__title main-submenu__title--responsive">
                                    <a href="/ayni-gun-teslim-hediyeler" role="button">Tüm Ürünleri Gör</a>
                                 </p>
                                 <ul class="main-submenu__items">
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/istanbul-ayni-gun-teslimat">İstanbul Aynı Gün Teslimat</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/izmir-ayni-gun-teslim-hediyeler">İzmir Aynı Gün Teslimat</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/ankara-ayni-gun-teslim-hediyeler">Ankara Aynı Gün Teslimat</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/antalya-ayni-gun-teslim-hediyeler">Antalya Aynı Gün Teslim</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/manisa-ayni-gun-teslim-hediyeler">Manisa Aynı Gün Teslim</a>
                                    </li>
                                 </ul>
                              </div>
                              <div class="main-menu__mega-submenu-third-row js-mega-menu-third-row hidden">
                                 <a href="javascript:void(0)" class="main-menu__link-responsive main-menu__link-responsive--back-third">
                                 <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back-third"></i>
                                 <span class="main-menu__text">
                                 EVCİL HAYVAN ÜRÜNLERİ
                                 </span>
                                 </a>
                                 <p class="main-submenu__title main-submenu__title--responsive">
                                    <a href="/pet-shop" role="button">Tüm Ürünleri Gör</a>
                                 </p>
                                 <ul class="main-submenu__items">
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kedi-mamalari">Kedi Maması</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kedi-kumu">Kedi Kumu &amp; Tuvaletleri</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kedi-bakim-urunleri">Kedi Bakım &amp; Sağlık</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kopek-mamalari">Köpek Maması</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kopek-tasmalari">Köpek Tasmaları</a>
                                    </li>
                                    <li class="main-submenu__item">
                                       <a class="main-submenu__item-link" href="/kopek-bakim-urunleri">Köpek Bakım &amp; Sağlık</a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div class="main-submenu__col main-submenu__col--right is-small">
                              <div class="js-mega-menu-banner-third-row">
                                 <div class="submenu-product">
                                    <a href="/aurora-tasarim-hediye-kutusu-thk1040-kc9254381">
                                    <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/26680c75-d047-4803-8b9b-c12e35bacc67.jpg" alt="Gönderim Amacı" width="825" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                    </a>
                                 </div>
                              </div>
                              <div class="js-mega-menu-banner-third-row hidden">
                                 <div class="submenu-product">
                                    <a href="/kisiye-ozel-3-boyutlu-sonsuz-ask-led-lamba-kc918903">
                                    <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/ae2043b3-d30b-4ecd-9115-6fc0908b7621.jpg" alt="Kişiye Özel" width="825" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                    </a>
                                 </div>
                              </div>
                              <div class="js-mega-menu-banner-third-row hidden">
                                 <div class="submenu-product">
                                    <a href="/kisiye-ozel--sevgiliye-hediye-ask-atesi-masa-lambasi-ve-100-dilde-ask-kupasi-kc4766471">
                                    <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/269e9341-42a4-44b4-8ab8-5122b0caeaac.jpg" alt="Hediyelik Ürünler" width="825" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                    </a>
                                 </div>
                              </div>
                              <div class="js-mega-menu-banner-third-row hidden">
                                 <div class="submenu-product">
                                    <a href="/925-ayar-gumus-kucuk-mikail-melegi-kolye-kc769894">
                                    <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/6132c629-b959-46aa-8ce6-e7c261ca9c6a.jpg" alt="Takı" width="825" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                    </a>
                                 </div>
                              </div>
                              <div class="js-mega-menu-banner-third-row hidden">
                                 <div class="submenu-product">
                                    <a href="/arili-sapkali-penye-kundak-kc1772403">
                                    <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/4dff383c-b1cb-45a0-8450-995857f079ac.jpg" alt="Anne Bebek" width="825" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                    </a>
                                 </div>
                              </div>
                              <div class="js-mega-menu-banner-third-row hidden">
                                 <div class="submenu-product">
                                    <a href="/bambum-ceylon---12-parca-cay-seti-gul-kurusu-kc6518239">
                                    <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/5166e082-a41a-4001-a750-d4b3647eac0d.jpg" alt="Ev Yaşam" width="825" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                    </a>
                                 </div>
                              </div>
                              <div class="js-mega-menu-banner-third-row hidden">
                                 <div class="submenu-product">
                                    <a href="/85-cm-kalp-tutan-sevimli-oyuncak-pelus-ayi-kc7522400">
                                    <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/4af8b67c-af7d-4f28-bd87-54162a1a54f2.jpg" alt="Oyuncak" width="825" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                    </a>
                                 </div>
                              </div>
                              <div class="js-mega-menu-banner-third-row hidden">
                                 <div class="submenu-product">
                                    <a href="/kabartma-ince-tasarimli-kristal-masa-isimligi---kalemli-kc3394451">
                                    <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/74f56eec-5b16-480d-bf8b-7afdc7f36621.jpg" alt="Ofis-Kırtasiye" width="825" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                    </a>
                                 </div>
                              </div>
                              <div class="js-mega-menu-banner-third-row hidden">
                                 <div class="submenu-product">
                                    <a href="/pi-circle-unisex-tisort-kc449641">
                                    <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/3c6b16a8-9370-481a-84f9-fca2a31c8650.jpg" alt="Moda" width="825" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                    </a>
                                 </div>
                              </div>
                              <div class="js-mega-menu-banner-third-row hidden">
                                 <div class="submenu-product">
                                    <a href="/https://www.ciceksepeti.com/400-nostalji-oyunlu-mini-atari-gameboy---gamebox-oyun-konsolu-kc9746686">
                                    <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/0025fc4b-e7b8-4e7e-83cc-150786affd44.jpg" alt="Hobi" width="825" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                    </a>
                                 </div>
                              </div>
                              <div class="js-mega-menu-banner-third-row hidden">
                                 <div class="submenu-product">
                                    <a href="/forever-luna-2-pearlpink-cilt-temizleme-cihazi-pembe-renk-kc7879190">
                                    <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/276e5269-357a-4e2e-b1c9-7828c66e7c4a.jpg" alt="Kozmetik" width="825" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                    </a>
                                 </div>
                              </div>
                              <div class="js-mega-menu-banner-third-row hidden">
                                 <div class="submenu-product">
                                    <a href="/sevimli-pelus-ayiciktan-yusufcuk-kolye-hediye-ve-bonnyfood-cikolata-hbf170">
                                    <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/8bf65b46-1345-40fe-90fe-28e55774b8e3.jpg" alt="Aynı Gün Teslim" width="825" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                    </a>
                                 </div>
                              </div>
                              <div class="js-mega-menu-banner-third-row hidden">
                                 <div class="submenu-product">
                                    <a href="/royal-canin-kitten-yavru-kuru-kedi-mamasi-4-kg-kc1035477">
                                    <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/020f70ee-2df4-46e6-b4b9-1010799aa047.jpg" alt="Evcil Hayvan Ürünleri" width="825" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </nav>
                  </li>
                  <li class="main-menu__item js-main-menu-item">
                     <a href="javascript:void(0)" data-href="/butik-cicekciler" class="main-menu__link-responsive js-main-menu-link-responsive">
                     <span class="main-menu__text">
                     TASARIM ÇİÇEKLER
                     </span>
                     </a>
                     <span class="main-menu__link-container">
                     <a class="main-menu__link js-main-menu-link " href="/butik-cicekciler">
                     <span class="main-menu__icon">
                     <span class="icon-boutique"></span>
                     </span>
                     <span class="main-menu__text">
                     TASARIM ÇİÇEKLER                        </span>
                     </a>
                     </span>
                     <nav class="main-menu__submenu main-submenu js-main-submenu">
                        <span class=" 111 main-menu__link-responsive main-menu__link-responsive--center">
                        <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back"></i>
                        <span class="main-menu__text">
                        TASARIM ÇİÇEKLER
                        </span>
                        </span>
                        <div class="main-submenu__inner">
                           <div class="main-submenu__col main-submenu__col--left">
                              <p class="main-submenu__title"><a href="/butik-cicekciler" role="button">Tüm Ürünleri Gör</a></p>
                              <ul class="main-submenu__items">
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/dogum-gunu-butik-cicek">Doğum Günü</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/butik-teraryumlar">Teraryumlar</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kutuda-guller">Kutuda Güller</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/sukulentler">Sukulent</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/solmayan-guller">Solmayan Güller</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/dekoratif-cicekler">Dekoratif Çiçekler</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/bonsai">Bonsai Ağacı</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-butik-cicekler">Kişiye Özel Çiçekler</a>
                                 </li>
                              </ul>
                              <ul class="main-submenu__items">
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/is-tebrigi-cicek">Yeni İş/Terfi</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/minyatur-bahceler">Minyatür Bahçeler</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/sevgiliye-butik-cicek">Sevgili</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/butik-orkide">Orkide</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/gullerin-dansi">Butik Güller</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/butik-cicekci-buketleri">Butik Buketler</a>
                                 </li>
                              </ul>
                           </div>
                           <div class="main-submenu__col main-submenu__col--right is-medium">
                              <div class="submenu-product">
                                 <a href="/mini-cift-dalahsap-saksida-mor-orkide-via210">
                                 <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/73b3e23d-d346-4df5-b60f-b700cb5f1603.jpg" alt="Tasarım Çiçekler" width="480" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                 </a>
                              </div>
                           </div>
                        </div>
                     </nav>
                  </li>
                  <li class="main-menu__item js-main-menu-item">
                     <a href="javascript:void(0)" data-href="/bonnyfood" class="main-menu__link-responsive js-main-menu-link-responsive">
                     <span class="main-menu__text-responsive">
                     <span class="main-menu__text">
                     <span class="main-menu__text--name">
                     YENİLEBİLİR ÇİÇEK
                     </span>
                     <span class="main-menu__text--subname">
                     BonnyFood
                     </span>
                     </span>
                     </span>
                     </a>
                     <span class="main-menu__link-container">
                     <a class="main-menu__link js-main-menu-link " href="/bonnyfood">
                     <span class="main-menu__icon">
                     <span class="icon-menu-bonnyfood"></span>
                     </span>
                     <span class="main-menu__text">
                     <span class="main-menu__text--name">
                     YENİLEBİLİR ÇİÇEK
                     </span>
                     <span class="main-menu__text--subname">
                     BonnyFood
                     </span>
                     </span>
                     </a>
                     </span>
                     <nav class="main-menu__submenu main-submenu js-main-submenu">
                        <span class=" 111 main-menu__link-responsive main-menu__link-responsive--center">
                        <span class="main-menu__text-responsive">
                        <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back"></i>
                        <span class="main-menu__text">
                        <span class="main-menu__text--name text-name-back">
                        YENİLEBİLİR ÇİÇEK
                        </span>
                        <span class="main-menu__text--subname">
                        BonnyFood
                        </span>
                        </span>
                        </span>
                        </span>
                        <div class="main-submenu__inner">
                           <div class="main-submenu__col main-submenu__col--left">
                              <p class="main-submenu__title">
                                 <a href="/bonnyfood" role="button">Tüm Ürünleri Gör</a>
                              </p>
                              <ul class="main-submenu__items">
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/dogum-gunu-kek-kurabiye">Doğum Günü</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/icimden-geldi-kek-kurabiye">İçimden Geldi</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/sevgiliye-kek-kurabiye">Sevgili</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/yeni-ise-kek-kurabiye">Yeni İş/Terfi</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/bebek-kek-kurabiyesi">Yeni Bebek</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/yildonumu-kek-kurabiye">Yıl Dönümü</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/arkadasa-kek-kurabiye">Arkadaşa</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/gecmis-olsun-kek-kurabiye">Geçmiş Olsun</a>
                                 </li>
                              </ul>
                              <ul class="main-submenu__items">
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/ozur-dilerim-kek-kurabiye">Özür Dilerim</a>
                                 </li>
                              </ul>
                           </div>
                           <div class="main-submenu__col main-submenu__col--mid">
                              <ul class="main-submenu__items">
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/cikolata">Çikolata</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/meyve-sepeti">Meyve Sepeti</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kek-buketi">Kek ve Kurabiye Buketi</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/pasta">Pasta ve Cupcake</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-bonnyfood">Kişiye Özel</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/jelibon-seker">Jelibon ve Şekerler</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/makaron">Makaron &amp; Brownie &amp; Donut</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kalpli-aranjmanlar">Kalpli Aranjmanlar</a>
                                 </li>
                              </ul>
                           </div>
                           <div class="main-submenu__col main-submenu__col--right is-medium">
                              <div class="submenu-product">
                                 <a href="/bir-avuc-mutluluk-kek-buketi-gr1843">
                                 <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/9483af6e-0532-4a58-8238-c83a64b1bd04.jpg" alt="bonnyfood" width="480" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                 </a>
                              </div>
                           </div>
                        </div>
                     </nav>
                  </li>
                  <li class="main-menu__item js-main-menu-item">
                     <a href="javascript:void(0)" data-href="/kisiye-ozel-hediyeler" class="main-menu__link-responsive js-main-menu-link-responsive">
                     <span class="main-menu__text">
                     İSME ÖZEL HEDİYE
                     </span>
                     </a>
                     <span class="main-menu__link-container">
                     <a class="main-menu__link js-main-menu-link main-menu__link--last" href="/kisiye-ozel-hediyeler">
                     <span class="main-menu__icon">
                     <span class=" icon-customizable"></span>
                     </span>
                     <span class="main-menu__text">
                     İSME ÖZEL HEDİYE                        </span>
                     </a>
                     </span>
                     <nav class="main-menu__submenu main-submenu js-main-submenu">
                        <span class=" 111 main-menu__link-responsive main-menu__link-responsive--center">
                        <i class="icon-arrow_left main-menu__link-responsive-back-icon js-main-menu-link-responsive-back"></i>
                        <span class="main-menu__text">
                        İSME ÖZEL HEDİYE
                        </span>
                        </span>
                        <div class="main-submenu__inner">
                           <div class="main-submenu__col main-submenu__col--left">
                              <p class="main-submenu__title"><a href="/kisiye-ozel-hediyeler" role="button">Tüm Ürünleri Gör</a></p>
                              <ul class="main-submenu__items">
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-aksesuarlar">Kişiye Özel Aksesuarlar</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/isme-ozel-hediye-setleri">Hediye Setleri</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-cicek-urunleri">Çiçekler</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-fotografli-urunler">Fotoğraflı Ürünler</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-taki">Takı-Kolye</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-dekoratif-urunler">Dekoratif Ürünler</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-hediye-kalem-ve-setler">Kalem ve Ofis Hediyeleri</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-hediye-kupalar">Kupa Bardaklar</a>
                                 </li>
                              </ul>
                              <ul class="main-submenu__items">
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-butik-cicekler">Tasarım Çiçekler</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-bonnyfood">Yenilebilir Çiçek</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-bebek-urunleri">Bebek Ürünleri</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-tekstil-urunleri">Tshirt-Giyim</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-defterler">Defterler</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-oduller">Ödül-Sertifika</a>
                                 </li>
                                 <li class="main-submenu__item">
                                    <a class="main-submenu__item-link" href="/kisiye-ozel-hediye-yastiklar">Yastık</a>
                                 </li>
                              </ul>
                           </div>
                           <div class="main-submenu__col main-submenu__col--right is-medium">
                              <div class="submenu-product">
                                 <a href="/kisiye-ozel-dost-turk-kahvesi-fincani-kc3977548">
                                 <img class="lazyload submenu-product__img" data-src="https://cdn03.ciceksepeti.com/slider/8b55de6c-b16e-4544-b8d0-eb0809c97eb8.jpg" alt="Kişiye Özel" width="480" height="250" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                 </a>
                              </div>
                           </div>
                        </div>
                     </nav>
                  </li>
               </ul>
            </nav>
            <div class="user-menu-container js-user-menu">
               <nav class="user-menu">
                  <ul class="user-menu__items  ">
                     <li class="user-menu__item">
                        <a class="user-menu__link user-menu__link--order" href="/siparis-takip">
                        <span class="user-menu__icon user-menu__icon--order icon-cargo-min"></span>
                        <span class="user-menu__title">Sipariş Takibi</span>
                        </a>
                     </li>
                     <li class="user-menu__item">
                        <a class="user-menu__link user-process-toggle" href="javascript:void(0);">
                        <span class=" user-menu__icon user-menu__icon--account icon-user">
                        </span>
                        <span class="user-menu__title">Üyelik</span>
                        </a>
                        <div class="user-process js-user-process">
                           <div class="user-process__content">
                              <ul class="users-process-list">
                                 <li class="users-process-list__item">
                                    <a class="users-process-list__btn" href="/uye-girisi">
                                    <span class="users-process-list__icon icon-login"></span>
                                    Üye Girişi
                                    </a>
                                 </li>
                                 <li class="users-process-list__item">
                                    <a class="users-process-list__btn" href="/yeni-uyelik">
                                    <span class="users-process-list__icon icon-register">
                                    <span class="path1"></span><span class="path2"></span><span class="path3"></span>
                                    </span>
                                    Üye Ol
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </li>
                     <li class="user-menu__item">
                        <a class="user-menu__link"><router-link to="/sepet"></router-link>
                        <span class="user-menu__icon user-menu__icon--cart icon-cart js-product-id-list" data-product-id-list="">
                        <span class="user-menu__cart-quantity js-user-menu-cart-quantity hide" data-quantity="0">0</span>
                        </span>
                        <span class="user-menu__title">Sepetim</span>
                        </a>
                     </li>
                     <li class="user-menu__item user-menu__item--contact">
                        <a class="user-menu__link" href="/bize-ulasin">
                        <span class="user-menu__icon user-menu__icon--contact icon-phone"></span>
                        <span class="user-menu__title">Bize Ulaşın</span>
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
         <div class="responsive-search-trigger js-responsive-search-trigger ">
            <span class="responsive-search-trigger__icon icon-search js-responsive-search-trigger-icon"></span>
            <span class="responsive-search-trigger__cancel js-responsive-search-trigger-cancel">İPTAL</span>
         </div>
         <div class="search-and-basket">
            <div class="sticky-search-box js-sticky-search">
               <span class="sticky-search-box__icon icon-search"></span>
            </div>
            <div class="sticky-basket">
               <a class="sticky-basket__link"><router-link to="/sepet"></router-link>
               <span class="sticky-basket__icon icon-cart">
               <span class="sticky-basket__cart-quantity js-sticky-basket-cart-quantity is-hidden"></span>
               </span>
               </a>
            </div>
         </div>
      </div>
      <div class="responsive-search js-responsive-search ">
         <div class="container">
            <div class="js-product-search product-search">
               <div id="product-search-3" class="product-search__container">
                  <input type="text" name=" " class="form-control product-search__input js-product-search-input js-illegal-characters" placeholder="Ürün veya kategori ara" data-module-id="3">
                  <div class="product-search__loader"></div>
                  <div class="product-search__remove-button"><span class="icon-close product-search__remove-button-icon"></span></div>
                  <button class="js-product-search-button btn product-search__button" href="javascript:;"><span class="live-search__text-find">ARA</span><span class="icon icon-search product-search__button-icon"></span></button>
                  <div class="product-search__results-wrapper">
                     <ul class="product-search__results"></ul>
                     <a class="product-search__showall js-product-search--showall btn btn-success" href="javascript:;">TÜM SONUÇLARI GÖSTER</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   </div>
   </div>
</template>

<script src ="../assets/js/a.js"></script>
<script src ="../assets/js/build.js"></script>
<script>
export default {
  name: 'Ust',
  data(){
       return {
        data:"",
        active:false,
        } 
    },
    computed() {
       if(this.active==true)
       {
          this.active=false;
       }else{
          this.active=true;
       }
    }

}
</script>
