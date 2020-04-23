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
         <div class="site-emblem">
            <a href="/">
               <svg version="1.1" id="ciceksepetiAmblem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 40 33" enable-background="new 0 0 40 33" xml:space="preserve">
                  <switch>
                     <g>
                        <g>
                           <path fill="#FFFFFF" d="M11.529,16.199c1.857-0.628,3.72-0.987,5.725-1.308l0.037-0.004l0.494-0.049c0,0-1.911,8.862-7.26,13.153
                              c-5.348,4.292-10.964-0.24-8.649-5.165C3.432,19.509,7.429,17.454,11.529,16.199z"></path>
                        </g>
                        <g>
                           <path fill="#FFFFFF" d="M17.262,13.788l-0.037,0.001c-2.029-0.075-3.921-0.202-5.841-0.601c-4.222-0.746-8.44-2.299-10.39-5.4
                              C-1.904,3.18,3.117-2.002,8.949,1.605c5.832,3.608,8.809,12.171,8.809,12.171l-0.471,0.012L17.262,13.788z"></path>
                        </g>
                        <g>
                           <path fill="#FFFFFF" d="M25.459,13.112c-1.896,0.498-3.78,0.725-5.802,0.906l-0.037,0.001l-0.496,0.015c0,0,2.525-8.708,8.16-12.616
                              c5.635-3.908,10.92,1.004,8.267,5.758C33.768,10.374,29.637,12.146,25.459,13.112z"></path>
                        </g>
                        <g>
                           <path fill="#FFFFFF" d="M23.431,18.779h0.036c2.019,0.218,3.896,0.475,5.784,1.007c4.16,1.04,8.26,2.884,9.988,6.111
                              c2.569,4.798-2.801,9.619-8.366,5.61c-5.566-4.004-7.938-12.752-7.938-12.752l0.47,0.02L23.431,18.779z"></path>
                        </g>
                     </g>
                     <!--[if IE 8]>
                     <foreignObject style="line-height: 36px;" width="30" height="25" >
                        <img src="//cdn03.ciceksepeti.com/Themes/Ciceksepeti/Assets/images/amblem-ciceksepeti.png" alt="Çiçeksepeti Amblem" width="30" height="25">
                     </foreignObject>
                     <![endif]-->
                  </switch>
               </svg>
            </a>
         </div>
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
         <div class="site-logo-responsive">
            <a href="/" class="site-logo-responsive__image">
               <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="120px" height="26px" viewBox="0 0 120 26" style="enable-background: new 0 0 120 26;" xml:space="preserve">
                  <g>
                     <g>
                        <path style="fill:#FFFFFF;" d="M10.273,12.765c1.455-0.492,2.915-0.773,4.485-1.025l0.029-0.002l0.387-0.039
                           c0,0-1.498,6.941-5.688,10.304s-8.59-0.188-6.776-4.047C3.93,15.358,7.062,13.749,10.273,12.765z"></path>
                     </g>
                     <g>
                        <path style="fill:#FFFFFF;" d="M14.765,10.876l-0.029,0c-1.589-0.059-3.071-0.158-4.576-0.471c-3.308-0.584-6.613-1.801-8.14-4.23
                           c-2.27-3.61,1.664-7.67,6.232-4.844c4.569,2.827,6.901,9.536,6.901,9.536l-0.369,0.009H14.765z"></path>
                     </g>
                     <g>
                        <path style="fill:#FFFFFF;" d="M21.187,10.347c-1.485,0.39-2.961,0.568-4.545,0.71l-0.029,0.001l-0.389,0.012
                           c0,0,1.979-6.822,6.393-9.884s8.555,0.786,6.477,4.511C27.696,8.202,24.459,9.59,21.187,10.347z"></path>
                     </g>
                     <g>
                        <path style="fill:#FFFFFF;" d="M19.598,14.787h0.028c1.582,0.17,3.052,0.372,4.532,0.789c3.259,0.813,6.471,2.258,7.825,4.785
                           c2.013,3.762-2.195,7.537-6.554,4.396c-4.361-3.138-6.219-9.99-6.219-9.99l0.368,0.016L19.598,14.787z"></path>
                     </g>
                     <g>
                        <path style="fill:#FFFFFF;" d="M117.141,6.788c0,0.333-0.123,0.624-0.367,0.867c-0.246,0.246-0.535,0.368-0.869,0.368
                           c-0.332,0-0.621-0.123-0.859-0.368c-0.24-0.244-0.361-0.534-0.361-0.867c0-0.333,0.121-0.621,0.361-0.86
                           c0.238-0.24,0.525-0.359,0.859-0.359s0.623,0.12,0.869,0.359C117.018,6.167,117.141,6.455,117.141,6.788z M118.643,15.861
                           c0,0.463-0.1,0.791-0.291,0.986c-0.191,0.194-0.512,0.292-0.963,0.292c-0.811,0-1.434-0.227-1.867-0.678
                           c-0.434-0.452-0.648-1.106-0.648-1.965V8.79h0.594c0.469,0,0.836,0.127,1.104,0.382c0.266,0.256,0.396,0.65,0.396,1.182v3.939
                           c0,0.428,0.098,0.721,0.291,0.876c0.193,0.156,0.523,0.234,0.994,0.234h0.391V15.861L118.643,15.861z M41.535,9.212
                           c-0.167-0.219-0.371-0.401-0.611-0.548c-0.239-0.146-0.495-0.266-0.766-0.359c-0.271-0.093-0.542-0.159-0.813-0.196
                           c-0.271-0.037-0.522-0.055-0.75-0.055c-0.48,0-0.923,0.083-1.33,0.25c-0.407,0.167-0.758,0.401-1.056,0.704
                           c-0.297,0.301-0.529,0.664-0.696,1.086c-0.166,0.422-0.25,0.894-0.25,1.416c0,0.625,0.083,1.175,0.25,1.648
                           c0.167,0.475,0.399,0.873,0.696,1.188c0.297,0.318,0.658,0.557,1.079,0.711c0.422,0.158,0.884,0.235,1.384,0.235
                           c0.261,0,0.53-0.026,0.806-0.077c0.276-0.055,0.539-0.122,0.79-0.212c0.25-0.09,0.482-0.196,0.697-0.321
                           c0.212-0.125,0.393-0.267,0.538-0.423h0.079v0.798c0,0.367-0.098,0.682-0.289,0.947c-0.194,0.266-0.444,0.484-0.751,0.654
                           c-0.308,0.175-0.648,0.298-1.025,0.377c-0.376,0.079-0.75,0.118-1.126,0.118c-0.709,0-1.385-0.127-2.024-0.386
                           c-0.642-0.254-1.204-0.614-1.684-1.078c-0.482-0.464-0.862-1.023-1.143-1.681c-0.279-0.656-0.419-1.385-0.419-2.188
                           c0-0.824,0.132-1.58,0.396-2.267c0.264-0.688,0.635-1.283,1.11-1.783c0.476-0.5,1.05-0.889,1.723-1.164
                           c0.673-0.277,1.416-0.415,2.229-0.415c0.438,0,0.841,0.044,1.212,0.133c0.369,0.088,0.689,0.224,0.961,0.406
                           c0.272,0.183,0.482,0.411,0.633,0.688s0.228,0.598,0.228,0.962v0.829L41.535,9.212L41.535,9.212z M46.72,15.861
                           c0,0.463-0.097,0.791-0.289,0.986c-0.193,0.194-0.514,0.292-0.962,0.292c-0.813,0-1.436-0.227-1.87-0.678
                           c-0.432-0.452-0.649-1.106-0.649-1.965V8.79h0.594c0.47,0,0.836,0.127,1.103,0.382c0.266,0.256,0.399,0.65,0.399,1.182v3.939
                           c0,0.428,0.096,0.721,0.289,0.876c0.193,0.156,0.524,0.234,0.993,0.234h0.391L46.72,15.861L46.72,15.861z M45.219,6.788
                           c0,0.333-0.123,0.624-0.367,0.867c-0.245,0.246-0.535,0.368-0.868,0.368c-0.334,0-0.621-0.123-0.86-0.368
                           c-0.24-0.244-0.36-0.534-0.36-0.867c0-0.333,0.12-0.621,0.36-0.86c0.24-0.24,0.526-0.359,0.86-0.359
                           c0.333,0,0.624,0.12,0.868,0.359C45.097,6.167,45.219,6.455,45.219,6.788z M54.11,11.338c-0.145-0.239-0.411-0.445-0.796-0.618
                           c-0.386-0.172-0.881-0.258-1.486-0.258c-0.303,0-0.594,0.057-0.875,0.173c-0.282,0.114-0.527,0.272-0.735,0.476
                           c-0.208,0.203-0.375,0.44-0.5,0.711c-0.125,0.271-0.188,0.563-0.188,0.876c0,0.771,0.208,1.393,0.625,1.869
                           c0.417,0.475,0.986,0.711,1.705,0.711c0.604,0,1.089-0.081,1.454-0.244c0.365-0.161,0.621-0.339,0.767-0.538h0.078v0.969
                           c0,0.509-0.228,0.931-0.681,1.258c-0.454,0.329-1.061,0.494-1.821,0.494c-0.584,0-1.137-0.106-1.658-0.321
                           c-0.522-0.214-0.978-0.507-1.369-0.883c-0.391-0.375-0.703-0.817-0.938-1.33c-0.235-0.51-0.353-1.068-0.353-1.673
                           c0-0.604,0.102-1.178,0.306-1.721c0.202-0.541,0.5-1.016,0.89-1.422c0.393-0.407,0.869-0.729,1.432-0.971
                           c0.563-0.239,1.204-0.359,1.923-0.359c0.334,0,0.641,0.047,0.923,0.141c0.281,0.094,0.523,0.224,0.728,0.391
                           c0.203,0.167,0.361,0.359,0.476,0.578c0.114,0.22,0.172,0.454,0.172,0.705v0.984h-0.079v0.002H54.11z M62.66,11.698
                           c0,0.772-0.313,1.307-0.938,1.603s-1.632,0.446-3.019,0.446h-1.377c0.083,0.531,0.341,0.954,0.775,1.267
                           c0.431,0.311,0.961,0.467,1.586,0.467c0.438,0,0.894-0.054,1.368-0.164c0.473-0.108,0.879-0.32,1.213-0.634h0.078v0.657
                           c0,0.272-0.051,0.521-0.148,0.751c-0.1,0.229-0.27,0.43-0.508,0.603c-0.24,0.172-0.553,0.309-0.947,0.405
                           c-0.39,0.101-0.873,0.15-1.446,0.15c-0.521,0-1.032-0.1-1.532-0.3c-0.499-0.194-0.94-0.48-1.324-0.851
                           c-0.382-0.368-0.69-0.815-0.924-1.335c-0.232-0.523-0.348-1.105-0.348-1.752c0-0.699,0.1-1.332,0.302-1.9
                           c0.203-0.568,0.484-1.05,0.847-1.446c0.362-0.397,0.795-0.701,1.3-0.915c0.504-0.214,1.06-0.321,1.664-0.321
                           c0.438,0,0.86,0.075,1.267,0.227c0.407,0.151,0.769,0.368,1.079,0.649s0.563,0.625,0.75,1.033
                           C62.566,10.745,62.66,11.199,62.66,11.698z M60.688,11.443c0-0.431-0.143-0.751-0.43-0.962c-0.287-0.209-0.675-0.314-1.164-0.314
                           c-0.25,0-0.483,0.049-0.697,0.15c-0.213,0.1-0.399,0.231-0.555,0.393c-0.155,0.163-0.278,0.355-0.367,0.575
                           c-0.088,0.221-0.138,0.451-0.148,0.693l-0.016,0.284h0.939c0.501,0,0.907-0.016,1.218-0.047c0.314-0.032,0.563-0.079,0.744-0.142
                           c0.183-0.063,0.309-0.147,0.376-0.252S60.688,11.59,60.688,11.443z M64.885,5.804c0.51,0,0.877,0.13,1.102,0.391
                           c0.225,0.26,0.336,0.593,0.336,1v5.036c0.406-0.532,0.816-1.059,1.229-1.581c0.41-0.522,0.861-1.016,1.352-1.485
                           c0.25-0.241,0.51-0.391,0.775-0.454c0.266-0.063,0.564-0.094,0.898-0.094h1.203v0.077c-0.145,0.126-0.367,0.345-0.664,0.658
                           c-0.297,0.313-0.613,0.657-0.945,1.032c-0.336,0.375-0.666,0.755-0.994,1.142c-0.328,0.386-0.604,0.719-0.822,1.001
                           c0.334,0.417,0.672,0.833,1.012,1.25c0.338,0.419,0.693,0.82,1.068,1.206c0.189,0.186,0.355,0.344,0.502,0.468
                           c0.146,0.126,0.281,0.227,0.408,0.307c0.121,0.077,0.242,0.141,0.357,0.187c0.115,0.049,0.236,0.091,0.359,0.133
                           c-0.113,0.333-0.271,0.589-0.469,0.766s-0.518,0.268-0.955,0.268c-0.238,0-0.484-0.052-0.734-0.156
                           c-0.248-0.104-0.463-0.245-0.641-0.424c-0.541-0.562-1.049-1.145-1.523-1.75c-0.475-0.604-0.947-1.22-1.418-1.844v4.113
                           l-0.67,0.017c-0.961,0.009-1.439-0.485-1.439-1.486V5.804H64.885z M80.154,13.747c0,0.531-0.088,1.011-0.266,1.439
                           c-0.176,0.428-0.438,0.793-0.779,1.102c-0.346,0.308-0.768,0.544-1.268,0.711c-0.502,0.166-1.074,0.25-1.719,0.25
                           c-1.086,0-1.9-0.193-2.449-0.578c-0.549-0.387-0.82-0.897-0.82-1.532v-0.955H72.9c0.365,0.323,0.789,0.599,1.275,0.823
                           c0.484,0.223,1.055,0.336,1.711,0.336c0.803,0,1.359-0.128,1.666-0.384c0.307-0.254,0.461-0.596,0.461-1.026
                           c0-0.185-0.027-0.347-0.08-0.483c-0.051-0.135-0.166-0.263-0.344-0.382c-0.176-0.12-0.436-0.231-0.773-0.336
                           c-0.34-0.104-0.791-0.22-1.354-0.344c-0.918-0.198-1.621-0.524-2.111-0.978s-0.734-1.045-0.734-1.775
                           c0-0.448,0.092-0.881,0.273-1.299c0.182-0.417,0.443-0.787,0.789-1.109c0.346-0.323,0.768-0.581,1.268-0.774
                           c0.5-0.193,1.063-0.29,1.688-0.29c0.627,0,1.146,0.06,1.557,0.178c0.412,0.121,0.744,0.274,0.994,0.461
                           c0.25,0.188,0.424,0.4,0.523,0.634c0.1,0.234,0.148,0.46,0.148,0.68v0.985h-0.064c-0.654-0.699-1.578-1.047-2.773-1.047
                           c-0.832,0-1.416,0.125-1.754,0.375c-0.34,0.25-0.508,0.585-0.508,1.001c0,0.156,0.039,0.302,0.109,0.438
                           c0.074,0.136,0.205,0.26,0.393,0.375c0.186,0.116,0.441,0.225,0.764,0.329c0.322,0.105,0.732,0.208,1.232,0.313
                           c0.977,0.208,1.705,0.558,2.184,1.048C79.916,12.423,80.154,13.027,80.154,13.747z M88.824,11.698
                           c0,0.772-0.311,1.307-0.936,1.603c-0.627,0.296-1.633,0.446-3.018,0.446h-1.379c0.084,0.531,0.344,0.954,0.775,1.267
                           c0.432,0.311,0.961,0.467,1.586,0.467c0.439,0,0.895-0.054,1.367-0.164c0.473-0.108,0.881-0.32,1.213-0.634h0.08v0.657
                           c0,0.272-0.051,0.521-0.15,0.751c-0.1,0.229-0.268,0.43-0.508,0.603c-0.24,0.172-0.557,0.309-0.945,0.405
                           c-0.393,0.101-0.875,0.15-1.447,0.15c-0.52,0-1.033-0.1-1.531-0.3c-0.502-0.194-0.941-0.48-1.324-0.851
                           c-0.381-0.368-0.691-0.815-0.924-1.335c-0.232-0.523-0.35-1.105-0.35-1.752c0-0.699,0.1-1.332,0.305-1.9
                           c0.199-0.568,0.484-1.05,0.844-1.446c0.363-0.397,0.799-0.701,1.301-0.915c0.506-0.214,1.061-0.321,1.666-0.321
                           c0.438,0,0.859,0.075,1.264,0.227c0.408,0.151,0.768,0.368,1.08,0.649c0.314,0.282,0.563,0.625,0.75,1.033
                           C88.73,10.745,88.824,11.199,88.824,11.698z M86.854,11.443c0-0.431-0.145-0.751-0.428-0.962
                           c-0.289-0.209-0.676-0.314-1.166-0.314c-0.252,0-0.482,0.049-0.695,0.15c-0.213,0.1-0.402,0.231-0.557,0.393
                           c-0.154,0.163-0.277,0.355-0.367,0.575c-0.088,0.221-0.137,0.451-0.148,0.693l-0.016,0.284h0.938c0.504,0,0.908-0.016,1.221-0.047
                           c0.313-0.032,0.559-0.079,0.742-0.142c0.182-0.063,0.307-0.147,0.377-0.252C86.82,11.715,86.854,11.59,86.854,11.443z
                           M98.336,12.591c0,0.676-0.08,1.3-0.248,1.867c-0.166,0.567-0.406,1.061-0.725,1.479c-0.314,0.417-0.707,0.741-1.18,0.968
                           c-0.475,0.229-1.014,0.345-1.627,0.345c-0.469,0-0.885-0.118-1.252-0.352c-0.367-0.236-0.658-0.534-0.861-0.897v3.72h-0.664
                           c-0.189,0-0.373-0.033-0.549-0.102c-0.182-0.065-0.34-0.166-0.475-0.288c-0.139-0.125-0.246-0.276-0.33-0.456
                           c-0.084-0.177-0.127-0.378-0.127-0.609v-5.097c0-0.696,0.08-1.337,0.24-1.922c0.162-0.583,0.414-1.084,0.758-1.501
                           s0.779-0.74,1.311-0.97c0.531-0.229,1.166-0.344,1.906-0.344c0.561,0,1.076,0.117,1.545,0.352c0.469,0.234,0.871,0.543,1.209,0.93
                           c0.338,0.386,0.602,0.83,0.789,1.33C98.242,11.542,98.336,12.059,98.336,12.591z M96.195,13.137c0-1-0.164-1.725-0.492-2.173
                           c-0.326-0.448-0.828-0.672-1.504-0.672c-0.578,0-1.023,0.228-1.33,0.681c-0.307,0.454-0.459,1.045-0.459,1.775
                           c0,0.843,0.189,1.497,0.57,1.955c0.377,0.458,0.877,0.688,1.502,0.688c0.508,0,0.922-0.205,1.236-0.617
                           C96.037,14.358,96.195,13.814,96.195,13.137z M106.938,11.698c0,0.772-0.313,1.307-0.939,1.603
                           c-0.623,0.296-1.631,0.446-3.018,0.446h-1.375c0.084,0.531,0.34,0.954,0.771,1.267c0.434,0.311,0.965,0.467,1.588,0.467
                           c0.438,0,0.896-0.054,1.369-0.164c0.475-0.108,0.877-0.32,1.213-0.634h0.078v0.657c0,0.272-0.049,0.521-0.148,0.751
                           c-0.1,0.229-0.27,0.43-0.508,0.603c-0.242,0.172-0.557,0.309-0.947,0.405c-0.391,0.101-0.873,0.15-1.447,0.15
                           c-0.521,0-1.031-0.1-1.531-0.3c-0.5-0.194-0.939-0.48-1.324-0.851c-0.381-0.368-0.689-0.815-0.924-1.335
                           c-0.232-0.523-0.348-1.105-0.348-1.752c0-0.699,0.1-1.332,0.301-1.9c0.203-0.568,0.484-1.05,0.848-1.446
                           c0.363-0.397,0.797-0.701,1.299-0.915c0.506-0.214,1.061-0.321,1.666-0.321c0.438,0,0.857,0.075,1.266,0.227
                           c0.406,0.151,0.768,0.368,1.08,0.649c0.311,0.282,0.563,0.625,0.75,1.033C106.844,10.745,106.938,11.199,106.938,11.698z
                           M104.969,11.443c0-0.431-0.145-0.751-0.432-0.962c-0.287-0.209-0.676-0.314-1.166-0.314c-0.25,0-0.482,0.049-0.695,0.15
                           c-0.215,0.1-0.4,0.231-0.555,0.393c-0.156,0.163-0.277,0.355-0.369,0.575c-0.086,0.221-0.137,0.451-0.146,0.693l-0.016,0.284
                           h0.938c0.5,0,0.904-0.016,1.221-0.047c0.313-0.032,0.563-0.079,0.74-0.142c0.184-0.063,0.311-0.147,0.377-0.252
                           C104.934,11.715,104.969,11.59,104.969,11.443z M108.49,8.962c0-0.208,0.01-0.388,0.029-0.54c0.021-0.151,0.055-0.289,0.102-0.415
                           c0.049-0.125,0.109-0.243,0.188-0.353c0.078-0.109,0.176-0.231,0.289-0.366c0.145-0.167,0.305-0.306,0.479-0.416
                           c0.172-0.108,0.34-0.164,0.508-0.164h0.482v1.908h2.924v0.859c0,0.219-0.1,0.441-0.303,0.666
                           c-0.203,0.224-0.518,0.335-0.947,0.335h-1.674v3.3c0,0.552,0.115,0.943,0.344,1.174c0.23,0.229,0.559,0.343,0.986,0.343
                           c0.689,0,1.191-0.099,1.518-0.296h0.078v0.75c0,0.438-0.152,0.782-0.461,1.031c-0.309,0.25-0.768,0.377-1.385,0.377
                           c-1.072,0-1.865-0.277-2.385-0.822c-0.516-0.547-0.771-1.315-0.771-2.306V8.962L108.49,8.962z"></path>
                     </g>
                  </g>
               </svg>
            </a>
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
