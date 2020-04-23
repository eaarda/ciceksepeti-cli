<template>
<main class="home js-home-container   " data-name="home">
    <div class="container">
        <div class="subheader js-subheader">
            <div class="subheader__district js-district-wrapper subheader__district-full" style="z-index: 35;">
                <div class="subheader-close js-subheader-close is-hidden" style="display: none;">
                    <a href="javascript:void(0)"><span class="icon-close"></span></a>
                </div>
                <div class="subheader__district-inner">
                    <div class="subheader__district-inner-left">
                        <div class="subheader__info-image-container">
                            <span class="subheader__info-image">Buradan başlayın</span>
                        </div>
                        <div class="subheader__info-text">
                            <p>Gönderim yapmak istediğiniz <strong>mahalleyi<strong></strong></strong>
                            </p>
                            <p>ya da <strong>AVM, Hastane, Okul, Plaza</strong></p>
                            <p>gibi noktaları yazabilirsiniz.</p>
                        </div>
                    </div>
                    <div class="subheader__district-inner-right js-district-right">
                        <div class="district-container district-container--full">
                            <button class="district-search-button js-trigger-district-search" data-address-name="">
                    <span class="icon icon-pin district-search-button__icon district-search-button__icon--pin empty"></span>
                    <span class="district-search-button__text js-district-search-button-text empty">
                        Gönderim Yeri Seçin
                    </span>
                    <span class="icon icon-down-arrow district-search-button__icon district-search-button__icon--arrow"></span>
                </button>
                            <div class="district-dropdown js-district-dropdown is-hidden">
                                <span class="icon-close district-search__delete-button js-district-search-delete"></span>
                                <form action="/Plugins/Widgets.CitySelector/DistrictChangeByAddressFinder" class="js-district-form" method="post">
                                    <input name="addressName" class="js-district-form-input" type="hidden">
                                    <input name="addressId" type="hidden" class="js-district-form-input">
                                    <input name="longitude" type="hidden" class="js-district-form-input">
                                    <input name="latitude" type="hidden" class="js-district-form-input">
                                    <input name="secondaryAddress" type="hidden" class="js-district-form-input">
                                    <input id="PageType" name="PageType" type="hidden" value="Home">
                                    <input id="ProductGroupName" name="ProductGroupName" type="hidden" value="">
                                    <input id="CountryCode" name="CountryCode" type="hidden" value="TUR">
                                </form>
                                <div class="district-dropdown__search">
                                    <div class="js-district-search district-search">
                                        <div id="district-search-0" class="district-search__container"><input type="text" class="form-control district-search__input" maxlength="50" placeholder="Mahalle, okul, hastane vb. yazın" data-module-id="0">
                                            <div class="district-search__icon icon icon-pin"></div>
                                            <div class="district-search__loader"></div>
                                            <p class="district-search__all-info-title js-district-info-text">Göndereceğiniz adrese en yakın <strong>mahalle, okul, hastane, plaza, AVM</strong> gibi noktaları yazabilirsiniz.</p>
                                            <hr class="district-search__underline js-district-underline hide">
                                            <div class="district-search__results-wrapper">
                                                <p class="district-search__all-results-title">Arama Önerilerimiz</p>
                                                <ul class="district-search__results"></ul><a class="district-search__showall js-district-search--showall btn btn-success" href="javascript:;">TÜM SONUÇLARI GÖSTER</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="district-dropdown__menu district-menu-container js-district-menu-container">
                                    <div class="district-menu-container__inner">
                                        <div class="js-user-address-list">
                                        </div>
                                    </div>
                                    <div class="district-menu-all-container js-district-menu-all-container">
                                        <a href="javascript:void(0);" class="district-menu-all-backlink js-district-menu-all-back-link">
                                <span class="icon icon-left-arrow district-submenu-backlink__icon"></span>
                                <span class="district-submenu-backlink__text">TÜM ŞEHİRLER</span>
                            </a>
                                        <ul class="district-menu-all js-district-menu-all">
                                        </ul>
                                    </div>
                                    <div class="district-submenu-container js-district-submenu-container"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="subheader__district-inner--show-responsive js-open-district-area">
                        <p><span class="icon icon-pin"></span><span class="js-district-text responsive-district-text"> Gönderim Yeri Seçin </span><span class="icon icon-down-arrow-border"></span></p>
                    </div>
                </div>
            </div>
            <div class="subheader__badges js-subheader-badges ">
                <div class="subheader__badges-inner">
                    <div class="subheader__badges-item">
                        <span class="subheader__badges-icon icon-cargo-min"></span>
                        <strong class="subheader__badges-text">
                HER GÜN AYNI<br> GÜN TESLİMAT
            </strong>
                    </div>
                    <div class="subheader__badges-item">
                        <span class="subheader__badges-icon icon-lock"></span>
                        <strong class="subheader__badges-text">
                GÜVENLİ<br>ALIŞVERİŞ
            </strong>
                    </div>
                    <div class="subheader__badges-item">
                        <span class="subheader__badges-icon icon-smile"></span>
                        <strong class="subheader__badges-text">
                %100 MÜŞTERİ<br>MEMNUNİYETİ
            </strong>
                    </div>
                </div>
            </div>
            </div>
        <div class="featured">
            <div class="main-banner__desktop-only">
                <div class="main-banner__row">
                    <div class="main-banner__col main-banner__col--1">
                        <a class="main-banner__link" href="/evde-alisveris-keyfi" title="">
                            <picture>
                                <source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="> <img alt="evde-alisveris-keyfi" class="main-banner__image" height="416" width="580" src="//cdn03.ciceksepeti.com/slider/anasayfa_banner637211874746961117.jpg"> </picture>
                        </a>
                        <div id="home-timer" class="home-timer"></div>
                    </div>
                    <div class="main-banner__col main-banner__col--2">
                        <div class="main-banner__col-inner">
                            <div class="main-banner__col-inner-col">
                                <a class="main-banner__link" href="/orkide" title="">
                                    <picture>
                                        <source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><img alt="Avukatlar Günü" class="main-banner__image" height="180" src="//cdn03.ciceksepeti.com/slider/280x197-smallbanner-orkide637063339255613772637218523818925168.jpg" width="255"></picture>
                                </a>
                            </div>
                            <div class="main-banner__col-inner-col">
                                <a class="main-banner__link" href="/guller" title="">
                                    <picture>
                                        <source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><img alt="MEYVE SEPETİ" class="main-banner__image" src="//cdn03.ciceksepeti.com/slider/280x197-guller637198178299119240.jpg" height="180" width="255"></picture>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="main-banner__col main-banner__col--3">
                        <div class="main-banner__col-inner">
                            <div class="main-banner__col-inner-col">
                                <a class="main-banner__link" href="/frezyalar" title="">
                                    <picture>
                                        <source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><img alt="tip-bayrami-hediye" class="main-banner__image" height="180" src="//cdn03.ciceksepeti.com/slider/frezya637218524002938813.jpg" width="255"></picture>
                                </a>
                            </div>
                            <div class="main-banner__col-inner-col">
                                <a class="main-banner__link" href="/butik-cicekciler" title="">
                                    <picture>
                                        <source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><img alt="PEMBE BEYAZ RÜYA GERBERA VE LILYUMLAR" class="main-banner__image" height="180" src="//cdn03.ciceksepeti.com/slider/280x197-smallbanner-tasarımçiçekler637063348321329891637193734174992503.jpg" width="255"></picture>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="main-banner__col main-banner__col--4">
                        <a class="main-banner__link" href="/indirimli-ev-yasam" title="">
                            <picture>
                                <source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><img alt="EGE MELTEME LİLYUM VE GERBERALAR" class="main-banner__image" height="180" src="//cdn03.ciceksepeti.com/slider/280x198-banner-CS-EvYasam (2)_280x197637207573777306994.jpg" width="255"></picture>
                        </a>
                        <a class="main-banner__link" href="/tum-urunler?df=2015146,2007101,2009390" title="">
                            <picture>
                                <source media="(max-width: 479px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><img alt="Takı" class="main-banner__image" height="180" src="//cdn03.ciceksepeti.com/slider/280X197_-Banner-takı (2)637211579135315164.jpg" width="255"></picture>
                        </a>
                    </div>
                </div>
            </div>
            <div class="main-banner__responsive-only">
                <div class="main-banner__col main-banner__col--1">
                    <a class="main-banner__link" href="/gunun-firsati" title="Günün Fırsatı">
                        <picture>
                            <source media="(min-width: 480px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="> <img alt="Günün Fırsatı" class="lazyload main-banner__image" src="//cdn03.ciceksepeti.com/slider/mobile_gununfirsatlari3-04.jpg"> </picture>
                    </a>
                </div>
                <div class="main-banner__col main-banner__col--1">
                    <a class="main-banner__link" href="/evde-alisveris-keyfi" title="Evde Alısveris Keyfi">
                        <picture>
                            <source media="(min-width: 480px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="> <img alt="Evde Alısveris Keyfi" class="lazyload main-banner__image" src="//cdn03.ciceksepeti.com/slider/evdekl04-02.jpg"> </picture>
                    </a>
                </div>
                <div class="main-banner__col main-banner__col--1">
                    <a class="main-banner__link" href="/abonelik-hakkinda" title="abonelik-hakkinda">
                        <picture>
                            <source media="(min-width: 480px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="> <img alt="abonelik-hakkinda" class="lazyload main-banner__image" src="//cdn03.ciceksepeti.com/slider/abonelikmobilebanner2-04.jpg"> </picture>
                    </a>
                </div>
                <div class="main-banner__col main-banner__col--1">
                    <a class="main-banner__link" href="/cicek" title="Çiçek">
                        <picture>
                            <source media="(min-width: 480px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="> <img alt="Çiçek" class="lazyload main-banner__image" src="//cdn03.ciceksepeti.com/slider/app-banner-2.jpg"> </picture>
                    </a>
                </div>
                <div class="main-banner__col main-banner__col--1">
                    <a class="main-banner__link" href="/bonnyfood" title="Bonnyfood">
                        <picture>
                            <source media="(min-width: 480px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="> <img alt="Bonnyfood" class="lazyload main-banner__image" src="//cdn03.ciceksepeti.com/slider/app-banner.jpg"> </picture>
                    </a>
                </div>
                <div class="main-banner__col main-banner__col--1">
                    <a class="main-banner__link" href="/hediye" title="Hediye">
                        <picture>
                            <source media="(min-width: 480px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="> <img alt="Hediye" class="lazyload main-banner__image" src="//cdn03.ciceksepeti.com/slider/app-banner-3.jpg"> </picture>
                    </a>
                </div>
            </div>
        </div>
        <div class="tag-suggestions__wrapper js-suggestedTags-wrapper">
            <div class="tag-suggestions__text">Size Özel Arama Önerileri</div>
            <div class="tag-suggestions__tags js-suggestedTags">
                <a href="tum-urunler?df=2007100,2007123" class="tag-suggestions__suggested-tag">Kek - Kurabiye</a><a href="tum-urunler?df=2007100,2007304" class="tag-suggestions__suggested-tag">Truflu Aranjmanlar</a><a href="bonnyfood?priceId=2" class="tag-suggestions__suggested-tag">50-100 TL Yenilebilir Çiçekler</a></div>
        </div>
        <div class="js-html-favorite" style="display: none;"></div>
        <div class="home-reminder js-ani-reminder" id="home-reminder"></div>
        <div class="js-html-recommandation"></div>
        <div class="hidden js-ani-abtest-widget">{"RegionIdList":[1500046494,1500046737,1500046760,1500046814,1500046918,1500046938,1500047027,1500047147,1500047158,1500047192,1500047324,0],"ProductGroupId":0,"ProductCount":60,"CountryCode":"tur","Rule":{"RuleIdentities":[{"FieldName":"DeliveryTypes","IdentityList":["0"]}],"Variables":[{"Name":"Today","Value":"(Salı)"},{"Name":"Tomorrow","Value":"(Çarşamba)"},{"Name":"TimeThreshold","Value":"spt"},{"Name":"NowTimeSpan","Value":"21:29:03"}]}}</div>
        <div class="home-category" id="js-home-category" style="visibility: visible;">
            <div class="home-category__wrapper">
                <div class="home-category__title">
                    Doğum Günü Hediyeleri
                </div>
                <div class="home-category__slider c-products js-category-slider slick-initialized slick-slider"><button type="button" class="slick-prev slick-arrow slick-disabled" aria-disabled="true" style="display: block;"><i class="icon icon-left-arrow"></i></button>
                    <div class="slick-list draggable">
                        <div class="slick-track" style="opacity: 1; width: 2340px; transform: translate3d(0px, 0px, 0px);">
                            <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/seramik-vazoda-phalaenopsis-orkide" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/at773-1/S/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 255w" alt="2 Dal Beyaz Orkide Çiçeği"
                                                        src="https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at773-1/S/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">79</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/asaletin-simgesi-mor-orkide-at2360" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/at2360-1/S/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 255w"
                                                        alt="Asaletli Mor 2 Dal Orkide" src="https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at2360-1/S/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon is-passive"></span>
                                                                <span class="icon-star-fill c-products-stars__icon icon-half"></span>
                                                            </div>
                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">89</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/dogal-ahsap-kutukte-papatya-aranjmani-at3709" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at3709-1/M/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3709-1/S/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3709-1/M/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg 255w"
                                                        alt="Doğal Ahşap Kütükte Papatya Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3709-1/M/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3709-1/S/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3709-1/M/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">49</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,98</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">39</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3184-1/S/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 255w"
                                                        alt="Yeni Umutlar Gerbera ve Beyaz Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3184-1/S/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <span class="c-products-stars__review-count">(583)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">64</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 195px;" tabindex="-1">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464" class="c-products__item-link" tabindex="-1">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3464-1/S/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 255w"
                                                        alt="Kişiye Özel Vazolu Hüsnüyusuf ve Gerbera Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg"
                                                        srcset="https://cdn03.ciceksepeti.com/cicek/at3464-1/S/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon"></span>
                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">
                                                                <span class="icon-star-fill c-products-stars__icon is-passive"></span>
                                                                <span class="icon-star-fill c-products-stars__icon icon-half"></span>
                                                            </div>
                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">69</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">59</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>

                <div class="home-category__button">
                    <a href="dogum-gunu" class="btn home-category__link">
                Tüm Doğum Günü Hediyeleri
                <i class="icon icon-right-arrow"></i>
            </a>
                </div>
            </div>
            <div class="home-category__wrapper">
                <div class="home-category__title">
                    Kişiye Özel Hediyeler
                </div>

                <div class="home-category__slider c-products js-category-slider slick-initialized slick-slider"><button type="button" class="slick-prev slick-arrow slick-disabled" aria-disabled="true" style="display: block;"><i class="icon icon-left-arrow"></i></button>
                    <div class="slick-list draggable">
                        <div class="slick-track" style="opacity: 1; width: 2340px; transform: translate3d(0px, 0px, 0px);">
                            <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3464-1/S/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 255w"
                                                        alt="Kişiye Özel Vazolu Hüsnüyusuf ve Gerbera Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg"
                                                        srcset="https://cdn03.ciceksepeti.com/cicek/at3464-1/S/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon is-passive"></span>
                                                                <span class="icon-star-fill c-products-stars__icon icon-half"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">69</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">59</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/33-kisiye-ozel-harf-cikolata" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/ck124-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/ck124-1/S/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck124-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg 255w"
                                                        alt="Kişiye Özel Hazırlanan Sütlü Harf Çikolata 264 gr" src="https://cdn03.ciceksepeti.com/cicek/ck124-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg"
                                                        srcset="https://cdn03.ciceksepeti.com/cicek/ck124-1/S/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck124-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">69</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/askin-en-tatli-lezzeti-kek-buketi-gr1809" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/gr1809-1/M/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1809-1/S/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1809-1/M/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg 255w"
                                                        alt="Aşkın En Tatlı Hali Kek Aranjmanı Lezzet Sepeti" src="https://cdn03.ciceksepeti.com/cicek/gr1809-1/M/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1809-1/S/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1809-1/M/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(529)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">54</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/kisiye-ozel-fotografli-ficus-bonsai-at3944" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at3944-1/M/at3944-1-8d74d737407748d-4cc6d647.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/at3944-1/S/at3944-1-8d74d737407748d-4cc6d647.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3944-1/M/at3944-1-8d74d737407748d-4cc6d647.jpg 255w" alt="Kişiye Özel Fotoğraflı Ficus Bonsai"
                                                        src="https://cdn03.ciceksepeti.com/cicek/at3944-1/M/at3944-1-8d74d737407748d-4cc6d647.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3944-1/S/at3944-1-8d74d737407748d-4cc6d647.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3944-1/M/at3944-1-8d74d737407748d-4cc6d647.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(749)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">79</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">69</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 195px;" tabindex="-1">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/kisiye-ozel-16-fotografli-ahsap-donme-dolap-kc318795" class="c-products__item-link" tabindex="-1">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc318795-1/M/kisiye-ozel-16-fotografli-ahsap-donme-dolap-kc318795-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/kc318795-1/S/kisiye-ozel-16-fotografli-ahsap-donme-dolap-kc318795-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc318795-1/M/kisiye-ozel-16-fotografli-ahsap-donme-dolap-kc318795-1-1.jpg 255w"
                                                        alt="Kişiye Özel 16 Fotoğraflı Ahşap Dönme Dolap" src="https://cdn03.ciceksepeti.com/cicek/kc318795-1/M/kisiye-ozel-16-fotografli-ahsap-donme-dolap-kc318795-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc318795-1/S/kisiye-ozel-16-fotografli-ahsap-donme-dolap-kc318795-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc318795-1/M/kisiye-ozel-16-fotografli-ahsap-donme-dolap-kc318795-1-1.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">79</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,90</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">49</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,90</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>

                <div class="home-category__button">
                    <a href="kisiye-ozel-hediyeler" class="btn home-category__link">
                Tüm Kişiye Özel Hediyeler
                <i class="icon icon-right-arrow"></i>
            </a>
                </div>
            </div>
            <div class="home-category__wrapper">
                <div class="home-category__title">
                    Yenilebilir Çiçekler
                </div>

                <div class="home-category__slider c-products js-category-slider slick-initialized slick-slider"><button type="button" class="slick-prev slick-arrow slick-disabled" aria-disabled="true" style="display: block;"><i class="icon icon-left-arrow"></i></button>
                    <div class="slick-list draggable">
                        <div class="slick-track" style="opacity: 1; width: 2340px; transform: translate3d(0px, 0px, 0px);">
                            <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/bitmeyen-lezzet-dogum-gunu-kutlama-aranjmani-gr1972" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/gr1972-1/M/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1972-1/S/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1972-1/M/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg 255w" alt="Bitmeyen Lezzet Doğum Günü Kutlama Aranjmanı"
                                                        src="https://cdn03.ciceksepeti.com/cicek/gr1972-1/M/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1972-1/S/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1972-1/M/gr1972-1-8d6d21ad59d23e5-38165a0b.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">59</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">54</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/cikolata-deryasi-kek-ve-tartolet-buketi-gr1986" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/gr1986-1/M/gr1986-1-8d76c32ea666e56-16743b14.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1986-1/S/gr1986-1-8d76c32ea666e56-16743b14.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1986-1/M/gr1986-1-8d76c32ea666e56-16743b14.jpg 255w" alt="Çikolata Deryası Kek ve Tartolet Buketi"
                                                        src="https://cdn03.ciceksepeti.com/cicek/gr1986-1/M/gr1986-1-8d76c32ea666e56-16743b14.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1986-1/S/gr1986-1-8d76c32ea666e56-16743b14.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1986-1/M/gr1986-1-8d76c32ea666e56-16743b14.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(897)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">44</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/ozel-tatlar-spesiyal-cikolata-kutusu-ck191" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/ck191-1/M/adidas-ozel-tatlar-spesiyal-cikolata-kutusu-ck191-1-2.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/ck191-1/S/adidas-ozel-tatlar-spesiyal-cikolata-kutusu-ck191-1-2.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck191-1/M/adidas-ozel-tatlar-spesiyal-cikolata-kutusu-ck191-1-2.jpg 255w"
                                                        alt="Özel Tatlar Çikolata Kutusu 300 gr" src="https://cdn03.ciceksepeti.com/cicek/ck191-1/M/adidas-ozel-tatlar-spesiyal-cikolata-kutusu-ck191-1-2.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/ck191-1/S/adidas-ozel-tatlar-spesiyal-cikolata-kutusu-ck191-1-2.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck191-1/M/adidas-ozel-tatlar-spesiyal-cikolata-kutusu-ck191-1-2.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">69</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">59</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/33-kisiye-ozel-harf-cikolata" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/ck124-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/ck124-1/S/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck124-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg 255w"
                                                        alt="Kişiye Özel Hazırlanan Sütlü Harf Çikolata 264 gr" src="https://cdn03.ciceksepeti.com/cicek/ck124-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg"
                                                        srcset="https://cdn03.ciceksepeti.com/cicek/ck124-1/S/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/ck124-1/M/cicek-sepeti-kisiye-ozel-hazirlanan-sutlu-harf-cikolata-ck124-1-8d51f8c2d04d4d3-1295c07b.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">69</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 195px;" tabindex="-1">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/askin-en-tatli-lezzeti-kek-buketi-gr1809" class="c-products__item-link" tabindex="-1">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/gr1809-1/M/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1809-1/S/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1809-1/M/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg 255w"
                                                        alt="Aşkın En Tatlı Hali Kek Aranjmanı Lezzet Sepeti" src="https://cdn03.ciceksepeti.com/cicek/gr1809-1/M/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1809-1/S/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1809-1/M/askin-en-tatli-lezzeti-kek-buketi-gr1809-1-8d6127c3b3fbe2a-66901a47.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(529)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">54</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>

                <div class="home-category__button">
                    <a href="bonnyfood" class="btn home-category__link">
                Tüm Yenilebilir Çiçekler
                <i class="icon icon-right-arrow"></i>
            </a>
                </div>
            </div>
            <div class="home-category__wrapper">
                <div class="home-category__title">
                    Takı-Aksesuar
                </div>

                <div class="home-category__slider c-products js-category-slider slick-initialized slick-slider"><button type="button" class="slick-prev slick-arrow slick-disabled" aria-disabled="true" style="display: block;"><i class="icon icon-left-arrow"></i></button>
                    <div class="slick-list draggable">
                        <div class="slick-track" style="opacity: 1; width: 2340px; transform: translate3d(0px, 0px, 0px);">
                            <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/kisiye-ozel-fotografli-cuzdan-cakmak-anahtarlik-tesbih-ve-kemer-set-2-kc6427" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc6427-1/M/kisiye-ozel-fotografli-cuzdan-cakmak-anahtarlik-tesbih-ve-kemer-set-2-kc6427-1-3a200b67a8eb4286877933de00011ac1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc6427-1/S/kisiye-ozel-fotografli-cuzdan-cakmak-anahtarlik-tesbih-ve-kemer-set-2-kc6427-1-3a200b67a8eb4286877933de00011ac1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc6427-1/M/kisiye-ozel-fotografli-cuzdan-cakmak-anahtarlik-tesbih-ve-kemer-set-2-kc6427-1-3a200b67a8eb4286877933de00011ac1.jpg 255w"
                                                        alt="Kişiye Özel Fotoğraflı Cüzdan Çakmak Anahtarlık Tesbih Ve Kemer Set 2" src="https://cdn03.ciceksepeti.com/cicek/kc6427-1/M/kisiye-ozel-fotografli-cuzdan-cakmak-anahtarlik-tesbih-ve-kemer-set-2-kc6427-1-3a200b67a8eb4286877933de00011ac1.jpg"
                                                        srcset="https://cdn03.ciceksepeti.com/cicek/kc6427-1/S/kisiye-ozel-fotografli-cuzdan-cakmak-anahtarlik-tesbih-ve-kemer-set-2-kc6427-1-3a200b67a8eb4286877933de00011ac1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc6427-1/M/kisiye-ozel-fotografli-cuzdan-cakmak-anahtarlik-tesbih-ve-kemer-set-2-kc6427-1-3a200b67a8eb4286877933de00011ac1.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(682)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">84</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,02</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">74</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/altin-kaplama-kar-tanesi-kolye-kupe-bileklik-saat-seti-hediye-set-ps1081" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kcx007387897379-1/M/altin-kaplama-kar-tanesi-kolye-kupe-bileklik-saat-seti-hediye-set-ps1081-kcx007387897379-1-bad79080-9962-45d9-9d21-ad27d8bc7a0a.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kcx007387897379-1/S/altin-kaplama-kar-tanesi-kolye-kupe-bileklik-saat-seti-hediye-set-ps1081-kcx007387897379-1-bad79080-9962-45d9-9d21-ad27d8bc7a0a.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kcx007387897379-1/M/altin-kaplama-kar-tanesi-kolye-kupe-bileklik-saat-seti-hediye-set-ps1081-kcx007387897379-1-bad79080-9962-45d9-9d21-ad27d8bc7a0a.jpg 255w"
                                                        alt="Altın Kaplama Kar Tanesi Kolye Küpe Bileklik Saat Seti  Hediye Set Ps1081" src="https://cdn03.ciceksepeti.com/cicek/kcx007387897379-1/M/altin-kaplama-kar-tanesi-kolye-kupe-bileklik-saat-seti-hediye-set-ps1081-kcx007387897379-1-bad79080-9962-45d9-9d21-ad27d8bc7a0a.jpg"
                                                        srcset="https://cdn03.ciceksepeti.com/cicek/kcx007387897379-1/S/altin-kaplama-kar-tanesi-kolye-kupe-bileklik-saat-seti-hediye-set-ps1081-kcx007387897379-1-bad79080-9962-45d9-9d21-ad27d8bc7a0a.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kcx007387897379-1/M/altin-kaplama-kar-tanesi-kolye-kupe-bileklik-saat-seti-hediye-set-ps1081-kcx007387897379-1-bad79080-9962-45d9-9d21-ad27d8bc7a0a.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(89)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">149</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">119</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,19</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/chavin-topaz-melek-kanadi-002-crt-pirlanta-gumus-kolye-cc84-renk" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kcx1726796/M/chavin-topaz-melek-kanadi-002-crt.-pirlanta-gumus-kolye-cc84-1.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/kcx1726796/S/chavin-topaz-melek-kanadi-002-crt.-pirlanta-gumus-kolye-cc84-1.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/kcx1726796/M/chavin-topaz-melek-kanadi-002-crt.-pirlanta-gumus-kolye-cc84-1.jpeg 255w"
                                                        alt="Topaz Melek Kanadı 0,02 Crt. Pırlanta Gümüş Kolye Cc84" src="https://cdn03.ciceksepeti.com/cicek/kcx1726796/M/chavin-topaz-melek-kanadi-002-crt.-pirlanta-gumus-kolye-cc84-1.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/kcx1726796/S/chavin-topaz-melek-kanadi-002-crt.-pirlanta-gumus-kolye-cc84-1.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/kcx1726796/M/chavin-topaz-melek-kanadi-002-crt.-pirlanta-gumus-kolye-cc84-1.jpeg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(254)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">378</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">167</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/isme-ozel-cuzdan-pierre-cardin-marka-garantili-hakiki-deri-cuzdan-kc219092" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc219092-1/M/isme-ozel-cuzdan-pierre-cardin-marka-garantili-hakiki-deri-cuzdan-kc219092-1-8d6ab90f186df47-e6a890f4.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc219092-1/S/isme-ozel-cuzdan-pierre-cardin-marka-garantili-hakiki-deri-cuzdan-kc219092-1-8d6ab90f186df47-e6a890f4.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc219092-1/M/isme-ozel-cuzdan-pierre-cardin-marka-garantili-hakiki-deri-cuzdan-kc219092-1-8d6ab90f186df47-e6a890f4.jpg 255w"
                                                        alt="İsme Özel Cüzdan Pierre Cardin Marka Garantili Hakiki Deri Cüzdan" src="https://cdn03.ciceksepeti.com/cicek/kc219092-1/M/isme-ozel-cuzdan-pierre-cardin-marka-garantili-hakiki-deri-cuzdan-kc219092-1-8d6ab90f186df47-e6a890f4.jpg"
                                                        srcset="https://cdn03.ciceksepeti.com/cicek/kc219092-1/S/isme-ozel-cuzdan-pierre-cardin-marka-garantili-hakiki-deri-cuzdan-kc219092-1-8d6ab90f186df47-e6a890f4.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc219092-1/M/isme-ozel-cuzdan-pierre-cardin-marka-garantili-hakiki-deri-cuzdan-kc219092-1-8d6ab90f186df47-e6a890f4.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(95)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">239</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">169</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,90</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 195px;" tabindex="-1">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/kisiye-ozel-para-gozlu-mekanizmali-deri-erkek-kartlik-cuzdan-ve-cakmak-set-kc5793835" class="c-products__item-link" tabindex="-1">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc5793835-1/M/isimli-para-gozlu-mekanizmali-deri-kartlik-cuzdan-tesbih-kalem-ve-cakmak-set-kc5793835-1-58436ae53b12432fa390d690fa710b93.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc5793835-1/S/isimli-para-gozlu-mekanizmali-deri-kartlik-cuzdan-tesbih-kalem-ve-cakmak-set-kc5793835-1-58436ae53b12432fa390d690fa710b93.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc5793835-1/M/isimli-para-gozlu-mekanizmali-deri-kartlik-cuzdan-tesbih-kalem-ve-cakmak-set-kc5793835-1-58436ae53b12432fa390d690fa710b93.jpg 255w"
                                                        alt="İsimli Para Gözlü Mekanizmalı Deri Kartlık Cüzdan Tesbih Kalem ve Çakmak Set" src="https://cdn03.ciceksepeti.com/cicek/kc5793835-1/M/isimli-para-gozlu-mekanizmali-deri-kartlik-cuzdan-tesbih-kalem-ve-cakmak-set-kc5793835-1-58436ae53b12432fa390d690fa710b93.jpg"
                                                        srcset="https://cdn03.ciceksepeti.com/cicek/kc5793835-1/S/isimli-para-gozlu-mekanizmali-deri-kartlik-cuzdan-tesbih-kalem-ve-cakmak-set-kc5793835-1-58436ae53b12432fa390d690fa710b93.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc5793835-1/M/isimli-para-gozlu-mekanizmali-deri-kartlik-cuzdan-tesbih-kalem-ve-cakmak-set-kc5793835-1-58436ae53b12432fa390d690fa710b93.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(128)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">89</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,90</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">69</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,90</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>

                <div class="home-category__button">
                    <a href="hediye-taki" class="btn home-category__link">
                Tüm Takı-Aksesuar Ürünleri
                <i class="icon icon-right-arrow"></i>
            </a>
                </div>
            </div>
            <div class="home-category__wrapper">
                <div class="home-category__title">
                    Yeni İş Hediyeleri
                </div>

                <div class="home-category__slider c-products js-category-slider slick-initialized slick-slider"><button type="button" class="slick-prev slick-arrow slick-disabled" aria-disabled="true" style="display: block;"><i class="icon icon-left-arrow"></i></button>
                    <div class="slick-list draggable">
                        <div class="slick-track" style="opacity: 1; width: 2340px; transform: translate3d(0px, 0px, 0px);">
                            <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/seramik-vazoda-phalaenopsis-orkide" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/at773-1/S/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 255w" alt="2 Dal Beyaz Orkide Çiçeği"
                                                        src="https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at773-1/S/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">79</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/asaletin-simgesi-mor-orkide-at2360" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/at2360-1/S/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 255w"
                                                        alt="Asaletli Mor 2 Dal Orkide" src="https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at2360-1/S/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon is-passive"></span>
                                                                <span class="icon-star-fill c-products-stars__icon icon-half"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">89</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/dogal-ahsap-kutukte-papatya-aranjmani-at3709" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at3709-1/M/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3709-1/S/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3709-1/M/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg 255w"
                                                        alt="Doğal Ahşap Kütükte Papatya Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3709-1/M/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3709-1/S/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3709-1/M/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">49</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,98</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">39</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3184-1/S/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 255w"
                                                        alt="Yeni Umutlar Gerbera ve Beyaz Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3184-1/S/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(583)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">64</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 195px;" tabindex="-1">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464" class="c-products__item-link" tabindex="-1">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3464-1/S/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 255w"
                                                        alt="Kişiye Özel Vazolu Hüsnüyusuf ve Gerbera Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg"
                                                        srcset="https://cdn03.ciceksepeti.com/cicek/at3464-1/S/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon is-passive"></span>
                                                                <span class="icon-star-fill c-products-stars__icon icon-half"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">69</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">59</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>

                <div class="home-category__button">
                    <a href="yeni-is" class="btn home-category__link">
                Tüm Yeni İş Hediyeleri
                <i class="icon icon-right-arrow"></i>
            </a>
                </div>
            </div>
            <div class="home-category__wrapper">
                <div class="home-category__title">
                    Fotoğraflı Ürünler
                </div>

                <div class="home-category__slider c-products js-category-slider slick-initialized slick-slider"><button type="button" class="slick-prev slick-arrow slick-disabled" aria-disabled="true" style="display: block;"><i class="icon icon-left-arrow"></i></button>
                    <div class="slick-list draggable">
                        <div class="slick-track" style="opacity: 1; width: 2340px; transform: translate3d(0px, 0px, 0px);">
                            <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/kisiye-ozel-16-fotografli-ahsap-donme-dolap-kc318795" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc318795-1/M/kisiye-ozel-16-fotografli-ahsap-donme-dolap-kc318795-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/kc318795-1/S/kisiye-ozel-16-fotografli-ahsap-donme-dolap-kc318795-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc318795-1/M/kisiye-ozel-16-fotografli-ahsap-donme-dolap-kc318795-1-1.jpg 255w"
                                                        alt="Kişiye Özel 16 Fotoğraflı Ahşap Dönme Dolap" src="https://cdn03.ciceksepeti.com/cicek/kc318795-1/M/kisiye-ozel-16-fotografli-ahsap-donme-dolap-kc318795-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc318795-1/S/kisiye-ozel-16-fotografli-ahsap-donme-dolap-kc318795-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc318795-1/M/kisiye-ozel-16-fotografli-ahsap-donme-dolap-kc318795-1-1.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">79</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,90</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">49</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,90</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/kisiye-ozel-12-fotografli-isikli-mandal-ipli-fotograf-askisi-kc494106" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc494106-1/M/kisiye-ozel-12-fotografli-isikli-mandal-ipli-fotograf-askisi-kc494106-1-ac2c92d178f94f8284a432020d2bcd2b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc494106-1/S/kisiye-ozel-12-fotografli-isikli-mandal-ipli-fotograf-askisi-kc494106-1-ac2c92d178f94f8284a432020d2bcd2b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc494106-1/M/kisiye-ozel-12-fotografli-isikli-mandal-ipli-fotograf-askisi-kc494106-1-ac2c92d178f94f8284a432020d2bcd2b.jpg 255w"
                                                        alt="Kişiye Özel 12 Fotograflı Işıklı Mandal İpli Fotoğraf Askısı" src="https://cdn03.ciceksepeti.com/cicek/kc494106-1/M/kisiye-ozel-12-fotografli-isikli-mandal-ipli-fotograf-askisi-kc494106-1-ac2c92d178f94f8284a432020d2bcd2b.jpg"
                                                        srcset="https://cdn03.ciceksepeti.com/cicek/kc494106-1/S/kisiye-ozel-12-fotografli-isikli-mandal-ipli-fotograf-askisi-kc494106-1-ac2c92d178f94f8284a432020d2bcd2b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc494106-1/M/kisiye-ozel-12-fotografli-isikli-mandal-ipli-fotograf-askisi-kc494106-1-ac2c92d178f94f8284a432020d2bcd2b.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(387)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">79</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,90</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">74</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,90</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/kisiye-ozel-fotografli-cuzdan-cakmak-anahtarlik-tesbih-ve-kemer-set-2-kc6427" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc6427-1/M/kisiye-ozel-fotografli-cuzdan-cakmak-anahtarlik-tesbih-ve-kemer-set-2-kc6427-1-3a200b67a8eb4286877933de00011ac1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc6427-1/S/kisiye-ozel-fotografli-cuzdan-cakmak-anahtarlik-tesbih-ve-kemer-set-2-kc6427-1-3a200b67a8eb4286877933de00011ac1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc6427-1/M/kisiye-ozel-fotografli-cuzdan-cakmak-anahtarlik-tesbih-ve-kemer-set-2-kc6427-1-3a200b67a8eb4286877933de00011ac1.jpg 255w"
                                                        alt="Kişiye Özel Fotoğraflı Cüzdan Çakmak Anahtarlık Tesbih Ve Kemer Set 2" src="https://cdn03.ciceksepeti.com/cicek/kc6427-1/M/kisiye-ozel-fotografli-cuzdan-cakmak-anahtarlik-tesbih-ve-kemer-set-2-kc6427-1-3a200b67a8eb4286877933de00011ac1.jpg"
                                                        srcset="https://cdn03.ciceksepeti.com/cicek/kc6427-1/S/kisiye-ozel-fotografli-cuzdan-cakmak-anahtarlik-tesbih-ve-kemer-set-2-kc6427-1-3a200b67a8eb4286877933de00011ac1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc6427-1/M/kisiye-ozel-fotografli-cuzdan-cakmak-anahtarlik-tesbih-ve-kemer-set-2-kc6427-1-3a200b67a8eb4286877933de00011ac1.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(682)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">84</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,02</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">74</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/kisiye-ozel-fotografli-ayicik-melek-kolye-kc492836" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc492836-1/M/kisiye-ozel-fotografli-ayicik-melek-kolye-kc492836-1-45a775bd94984f3189920523bfcd6dcc.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc492836-1/S/kisiye-ozel-fotografli-ayicik-melek-kolye-kc492836-1-45a775bd94984f3189920523bfcd6dcc.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc492836-1/M/kisiye-ozel-fotografli-ayicik-melek-kolye-kc492836-1-45a775bd94984f3189920523bfcd6dcc.jpg 255w"
                                                        alt="Kişiye Özel Fotoğraflı Ayıcık Melek Kolye" src="https://cdn03.ciceksepeti.com/cicek/kc492836-1/M/kisiye-ozel-fotografli-ayicik-melek-kolye-kc492836-1-45a775bd94984f3189920523bfcd6dcc.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc492836-1/S/kisiye-ozel-fotografli-ayicik-melek-kolye-kc492836-1-45a775bd94984f3189920523bfcd6dcc.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc492836-1/M/kisiye-ozel-fotografli-ayicik-melek-kolye-kc492836-1-45a775bd94984f3189920523bfcd6dcc.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">

                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">64</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">54</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 195px;" tabindex="-1">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/kisiye-ozel-25-fotografli-kolaj-tablo-ahsp00021-wbrkahsp00021-12" class="c-products__item-link" tabindex="-1">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kcx88703458/M/kisiye-ozel-25-fotografli-kolaj-tablo-ahsp00021-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/kcx88703458/S/kisiye-ozel-25-fotografli-kolaj-tablo-ahsp00021-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kcx88703458/M/kisiye-ozel-25-fotografli-kolaj-tablo-ahsp00021-1.jpg 255w"
                                                        alt="Kişiye Özel 25 Fotoğraflı Kolaj Tablo (Ahsp00021)" src="https://cdn03.ciceksepeti.com/cicek/kcx88703458/M/kisiye-ozel-25-fotografli-kolaj-tablo-ahsp00021-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kcx88703458/S/kisiye-ozel-25-fotografli-kolaj-tablo-ahsp00021-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kcx88703458/M/kisiye-ozel-25-fotografli-kolaj-tablo-ahsp00021-1.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(211)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">68</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">49</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,90</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>

                <div class="home-category__button">
                    <a href="kisiye-ozel-fotografli-urunler" class="btn home-category__link">
                Tüm Fotoğraflı Ürünler
                <i class="icon icon-right-arrow"></i>
            </a>
                </div>
            </div>
            <div class="home-category__wrapper">
                <div class="home-category__title">
                    Kupa Bardak
                </div>

                <div class="home-category__slider c-products js-category-slider slick-initialized slick-slider"><button type="button" class="slick-prev slick-arrow slick-disabled" aria-disabled="true" style="display: block;"><i class="icon icon-left-arrow"></i></button>
                    <div class="slick-list draggable">
                        <div class="slick-track" style="opacity: 1; width: 2340px; transform: translate3d(0px, 0px, 0px);">
                            <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/fotografli-kiz-kardes-kupa-bardak-kc3301405" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc3301405-1/M/fotografli-kiz-kardes-kupa-bardak-kc3301405-1-6f8871a925244d63ad79c1278f2c062d.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc3301405-1/S/fotografli-kiz-kardes-kupa-bardak-kc3301405-1-6f8871a925244d63ad79c1278f2c062d.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc3301405-1/M/fotografli-kiz-kardes-kupa-bardak-kc3301405-1-6f8871a925244d63ad79c1278f2c062d.jpg 255w"
                                                        alt="Fotoğraflı Kız Kardeş Kupa Bardak" src="https://cdn03.ciceksepeti.com/cicek/kc3301405-1/M/fotografli-kiz-kardes-kupa-bardak-kc3301405-1-6f8871a925244d63ad79c1278f2c062d.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc3301405-1/S/fotografli-kiz-kardes-kupa-bardak-kc3301405-1-6f8871a925244d63ad79c1278f2c062d.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc3301405-1/M/fotografli-kiz-kardes-kupa-bardak-kc3301405-1-6f8871a925244d63ad79c1278f2c062d.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(227)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">34</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">29</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/kisiye-ozel-3-adet-fotograf-baskili-sihirli-kupa-bardak-kc232159" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc232159-1/M/kisiye-ozel-3-fotografli-baskili-sihirli-kupa-bardak-kc232159-1-e96100b6-1062-42b5-89d3-1700691a25da.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc232159-1/S/kisiye-ozel-3-fotografli-baskili-sihirli-kupa-bardak-kc232159-1-e96100b6-1062-42b5-89d3-1700691a25da.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc232159-1/M/kisiye-ozel-3-fotografli-baskili-sihirli-kupa-bardak-kc232159-1-e96100b6-1062-42b5-89d3-1700691a25da.jpg 255w"
                                                        alt="Kişiye Özel 3 Fotoğraflı Baskılı Sihirli Kupa Bardak" src="https://cdn03.ciceksepeti.com/cicek/kc232159-1/M/kisiye-ozel-3-fotografli-baskili-sihirli-kupa-bardak-kc232159-1-e96100b6-1062-42b5-89d3-1700691a25da.jpg"
                                                        srcset="https://cdn03.ciceksepeti.com/cicek/kc232159-1/S/kisiye-ozel-3-fotografli-baskili-sihirli-kupa-bardak-kc232159-1-e96100b6-1062-42b5-89d3-1700691a25da.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc232159-1/M/kisiye-ozel-3-fotografli-baskili-sihirli-kupa-bardak-kc232159-1-e96100b6-1062-42b5-89d3-1700691a25da.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(248)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">39</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,90</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">34</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,90</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/kisiye-ozel-kolay-yetismiyor-karikatur-beyaz-kupa-bardak-6-kc846139" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc846139-1/M/kisiye-ozel-kolay-yetismiyor-karikatur-beyaz-kupa-bardak-6-kc846139-1-cba34ae3a143488a9769a24c9c1e81fd.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc846139-1/S/kisiye-ozel-kolay-yetismiyor-karikatur-beyaz-kupa-bardak-6-kc846139-1-cba34ae3a143488a9769a24c9c1e81fd.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc846139-1/M/kisiye-ozel-kolay-yetismiyor-karikatur-beyaz-kupa-bardak-6-kc846139-1-cba34ae3a143488a9769a24c9c1e81fd.jpg 255w"
                                                        alt="Kişiye Özel Kolay Yetişmiyor Karikatür Beyaz Kupa Bardak  6" src="https://cdn03.ciceksepeti.com/cicek/kc846139-1/M/kisiye-ozel-kolay-yetismiyor-karikatur-beyaz-kupa-bardak-6-kc846139-1-cba34ae3a143488a9769a24c9c1e81fd.jpg"
                                                        srcset="https://cdn03.ciceksepeti.com/cicek/kc846139-1/S/kisiye-ozel-kolay-yetismiyor-karikatur-beyaz-kupa-bardak-6-kc846139-1-cba34ae3a143488a9769a24c9c1e81fd.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc846139-1/M/kisiye-ozel-kolay-yetismiyor-karikatur-beyaz-kupa-bardak-6-kc846139-1-cba34ae3a143488a9769a24c9c1e81fd.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(465)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">39</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/kisiye-ozel-kendin-tasarla-kupa-79905-hf9965" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/hf9965-1/M/kisiye-ozel-tasarim-kupa-hf9965-1-8d3f7fac4049e4f-ca485ba4.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/hf9965-1/S/kisiye-ozel-tasarim-kupa-hf9965-1-8d3f7fac4049e4f-ca485ba4.jpg 186w,https://cdn03.ciceksepeti.com/cicek/hf9965-1/M/kisiye-ozel-tasarim-kupa-hf9965-1-8d3f7fac4049e4f-ca485ba4.jpg 255w"
                                                        alt="Kişiye Özel Kendin Tasarla Kupa 79905" src="https://cdn03.ciceksepeti.com/cicek/hf9965-1/M/kisiye-ozel-tasarim-kupa-hf9965-1-8d3f7fac4049e4f-ca485ba4.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/hf9965-1/S/kisiye-ozel-tasarim-kupa-hf9965-1-8d3f7fac4049e4f-ca485ba4.jpg 186w,https://cdn03.ciceksepeti.com/cicek/hf9965-1/M/kisiye-ozel-tasarim-kupa-hf9965-1-8d3f7fac4049e4f-ca485ba4.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon is-passive"></span>
                                                                <span class="icon-star-fill c-products-stars__icon icon-half"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">27</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,60</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 195px;" tabindex="-1">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/fotografli-kiz-kardes-kupa-bardak-2-kc1231828" class="c-products__item-link" tabindex="-1">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc1231828-1/M/fotografli-kiz-kardes-kupa-bardak-2-kc1231828-1-9807986fdeee43f3a7aaee4810573bab.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc1231828-1/S/fotografli-kiz-kardes-kupa-bardak-2-kc1231828-1-9807986fdeee43f3a7aaee4810573bab.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc1231828-1/M/fotografli-kiz-kardes-kupa-bardak-2-kc1231828-1-9807986fdeee43f3a7aaee4810573bab.jpg 255w"
                                                        alt="Fotoğraflı Kız Kardeş Kupa Bardak 2" src="https://cdn03.ciceksepeti.com/cicek/kc1231828-1/M/fotografli-kiz-kardes-kupa-bardak-2-kc1231828-1-9807986fdeee43f3a7aaee4810573bab.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc1231828-1/S/fotografli-kiz-kardes-kupa-bardak-2-kc1231828-1-9807986fdeee43f3a7aaee4810573bab.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc1231828-1/M/fotografli-kiz-kardes-kupa-bardak-2-kc1231828-1-9807986fdeee43f3a7aaee4810573bab.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(33)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">29</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>

                <div class="home-category__button">
                    <a href="hediye-kupalar" class="btn home-category__link">
                Tüm Kupa ve Bardaklar
                <i class="icon icon-right-arrow"></i>
            </a>
                </div>
            </div>
            <div class="home-category__wrapper">
                <div class="home-category__title">
                    Teraryum
                </div>

                <div class="home-category__slider c-products js-category-slider slick-initialized slick-slider"><button type="button" class="slick-prev slick-arrow slick-disabled" aria-disabled="true" style="display: block;"><i class="icon icon-left-arrow"></i></button>
                    <div class="slick-list draggable">
                        <div class="slick-track" style="opacity: 1; width: 2340px; transform: translate3d(0px, 0px, 0px);">
                            <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/akvaryum-fanusta-bonsai-teraryum-via277" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/via277-1/M/via277-1-8d7198e03a8e938-e161deb6.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/via277-1/S/via277-1-8d7198e03a8e938-e161deb6.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via277-1/M/via277-1-8d7198e03a8e938-e161deb6.jpg 255w" alt="Akvaryum Fanusta Bonsai Teraryum"
                                                        src="https://cdn03.ciceksepeti.com/cicek/via277-1/M/via277-1-8d7198e03a8e938-e161deb6.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via277-1/S/via277-1-8d7198e03a8e938-e161deb6.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via277-1/M/via277-1-8d7198e03a8e938-e161deb6.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(460)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">129</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">119</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/mutluluk-yolu-teraryum-via221" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/via221-1/M/mutluluk-yolu-teraryum-via221-1-8d663a41585015f-70b2e2e0.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/via221-1/S/mutluluk-yolu-teraryum-via221-1-8d663a41585015f-70b2e2e0.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via221-1/M/mutluluk-yolu-teraryum-via221-1-8d663a41585015f-70b2e2e0.jpg 255w"
                                                        alt="Mutluluk Yolu Teraryum" src="https://cdn03.ciceksepeti.com/cicek/via221-1/M/mutluluk-yolu-teraryum-via221-1-8d663a41585015f-70b2e2e0.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via221-1/S/mutluluk-yolu-teraryum-via221-1-8d663a41585015f-70b2e2e0.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via221-1/M/mutluluk-yolu-teraryum-via221-1-8d663a41585015f-70b2e2e0.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(258)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">178</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">159</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/mor-mini-orkide-huzur-bahcesi-teraryum-via212" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/via212-1/M/via212-1-8d71a60b39782c0-1370bdc4.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/via212-1/S/via212-1-8d71a60b39782c0-1370bdc4.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via212-1/M/via212-1-8d71a60b39782c0-1370bdc4.jpg 255w" alt="Mor Mini Orkide Huzur Bahçesi Teraryum"
                                                        src="https://cdn03.ciceksepeti.com/cicek/via212-1/M/via212-1-8d71a60b39782c0-1370bdc4.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via212-1/S/via212-1-8d71a60b39782c0-1370bdc4.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via212-1/M/via212-1-8d71a60b39782c0-1370bdc4.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(620)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">159</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">149</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/bonsai-bahce-teraryum-via213" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/via213-1/M/via213-1-8d71a608b1be528-7fda4562.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/via213-1/S/via213-1-8d71a608b1be528-7fda4562.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via213-1/M/via213-1-8d71a608b1be528-7fda4562.jpg 255w" alt="Bonsai Bahçe Teraryum"
                                                        src="https://cdn03.ciceksepeti.com/cicek/via213-1/M/via213-1-8d71a608b1be528-7fda4562.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via213-1/S/via213-1-8d71a608b1be528-7fda4562.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via213-1/M/via213-1-8d71a608b1be528-7fda4562.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(534)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">149</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 195px;" tabindex="-1">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/bambu-aski-kc634548" class="c-products__item-link" tabindex="-1">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc634548-1/M/mutluluk-evi-kc634548-1-8d6b9ab8093f293-8820fd14.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/kc634548-1/S/mutluluk-evi-kc634548-1-8d6b9ab8093f293-8820fd14.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc634548-1/M/mutluluk-evi-kc634548-1-8d6b9ab8093f293-8820fd14.jpg 255w"
                                                        alt="Mutluluk Evi Teraryum" src="https://cdn03.ciceksepeti.com/cicek/kc634548-1/M/mutluluk-evi-kc634548-1-8d6b9ab8093f293-8820fd14.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc634548-1/S/mutluluk-evi-kc634548-1-8d6b9ab8093f293-8820fd14.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc634548-1/M/mutluluk-evi-kc634548-1-8d6b9ab8093f293-8820fd14.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(391)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">109</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>

                <div class="home-category__button">
                    <a href="teraryum" class="btn home-category__link">
                Tüm Teraryumlar
                <i class="icon icon-right-arrow"></i>
            </a>
                </div>
            </div>
            <div class="home-category__wrapper">
                <div class="home-category__title">
                    Orkide
                </div>

                <div class="home-category__slider c-products js-category-slider slick-initialized slick-slider"><button type="button" class="slick-prev slick-arrow slick-disabled" aria-disabled="true" style="display: block;"><i class="icon icon-left-arrow"></i></button>
                    <div class="slick-list draggable">
                        <div class="slick-track" style="opacity: 1; width: 2340px; transform: translate3d(0px, 0px, 0px);">
                            <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/seramik-vazoda-phalaenopsis-orkide" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/at773-1/S/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 255w" alt="2 Dal Beyaz Orkide Çiçeği"
                                                        src="https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at773-1/S/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">79</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/asaletin-simgesi-mor-orkide-at2360" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/at2360-1/S/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 255w"
                                                        alt="Asaletli Mor 2 Dal Orkide" src="https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at2360-1/S/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon is-passive"></span>
                                                                <span class="icon-star-fill c-products-stars__icon icon-half"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">89</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/cift-dal-eflatun-orkide-ve-spesiyal-cikolata" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at3458-1/M/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3458-1/S/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3458-1/M/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg 255w"
                                                        alt="Çift Dal Mor Orkide ve Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at3458-1/M/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3458-1/S/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3458-1/M/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(949)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">119</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">99</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/gold-cizgili-vazoda-2-dal-orkide-cicegi-at3739" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at3739-1/M/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/at3739-1/S/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3739-1/M/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg 255w"
                                                        alt="Gold Çizgili Vazoda 2 Dal Orkide Çiçeği" src="https://cdn03.ciceksepeti.com/cicek/at3739-1/M/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3739-1/S/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3739-1/M/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(999+)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">109</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">89</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 195px;" tabindex="-1">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/2-dal-orkide-ve-premium-cikolata-at3632" class="c-products__item-link" tabindex="-1">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/at3632-1/M/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/at3632-1/S/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3632-1/M/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg 255w"
                                                        alt="2 Dal Orkide ve Premium Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at3632-1/M/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3632-1/S/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3632-1/M/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(866)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">119</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>

                <div class="home-category__button">
                    <a href="orkide" class="btn home-category__link">
                Tüm Orkideler
                <i class="icon icon-right-arrow"></i>
            </a>
                </div>
            </div>
            <div class="home-category__wrapper">
                <div class="home-category__title">
                    Meyve Sepeti
                </div>

                <div class="home-category__slider c-products js-category-slider slick-initialized slick-slider"><button type="button" class="slick-prev slick-arrow slick-disabled" aria-disabled="true" style="display: block;"><i class="icon icon-left-arrow"></i></button>
                    <div class="slick-list draggable">
                        <div class="slick-track" style="opacity: 1; width: 2340px; transform: translate3d(0px, 0px, 0px);">
                            <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/askin-tadi-truf-ve-cilek-buketi-kc7361440" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc7361440-1/M/askin-tadi-truf-ve-cilek-buketi-kc7361440-1-fba6b9533b3a4906804ae28d387fc6a1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc7361440-1/S/askin-tadi-truf-ve-cilek-buketi-kc7361440-1-fba6b9533b3a4906804ae28d387fc6a1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc7361440-1/M/askin-tadi-truf-ve-cilek-buketi-kc7361440-1-fba6b9533b3a4906804ae28d387fc6a1.jpg 255w"
                                                        alt="Aşkın Tadı Truf ve Çilek Buketi" src="https://cdn03.ciceksepeti.com/cicek/kc7361440-1/M/askin-tadi-truf-ve-cilek-buketi-kc7361440-1-fba6b9533b3a4906804ae28d387fc6a1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc7361440-1/S/askin-tadi-truf-ve-cilek-buketi-kc7361440-1-fba6b9533b3a4906804ae28d387fc6a1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc7361440-1/M/askin-tadi-truf-ve-cilek-buketi-kc7361440-1-fba6b9533b3a4906804ae28d387fc6a1.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(383)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">59</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">49</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/meyve-soleni-meyve-sepeti-kc463408" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc463408-1/M/meyve-soleni-meyve-sepeti-kc463408-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/kc463408-1/S/meyve-soleni-meyve-sepeti-kc463408-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc463408-1/M/meyve-soleni-meyve-sepeti-kc463408-1-1.jpg 255w"
                                                        alt="Meyve Şöleni Meyve Sepeti" src="https://cdn03.ciceksepeti.com/cicek/kc463408-1/M/meyve-soleni-meyve-sepeti-kc463408-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc463408-1/S/meyve-soleni-meyve-sepeti-kc463408-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc463408-1/M/meyve-soleni-meyve-sepeti-kc463408-1-1.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(55)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">95</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">65</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/gold-nice-mutlu-yillar-cilek-ve-brovni-kek-buketi-kc804610" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc804610-1/M/gold-nice-mutlu-yillar-cilek-ve-brovni-kek-buketi-kc804610-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/kc804610-1/S/gold-nice-mutlu-yillar-cilek-ve-brovni-kek-buketi-kc804610-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc804610-1/M/gold-nice-mutlu-yillar-cilek-ve-brovni-kek-buketi-kc804610-1-1.jpg 255w"
                                                        alt="Gold Nice Mutlu Yıllar Çilek Ve Browni Kek Buketi" src="https://cdn03.ciceksepeti.com/cicek/kc804610-1/M/gold-nice-mutlu-yillar-cilek-ve-brovni-kek-buketi-kc804610-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc804610-1/S/gold-nice-mutlu-yillar-cilek-ve-brovni-kek-buketi-kc804610-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc804610-1/M/gold-nice-mutlu-yillar-cilek-ve-brovni-kek-buketi-kc804610-1-1.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(140)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">55</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">49</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/tatli-ask-sepeti-meyve-sepeti-kc492417" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc492417-1/M/tatli-ask-sepeti-meyve-sepeti-kc492417-1-3dea323b-4ea9-48fc-9b82-e891d49b3d25.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc492417-1/S/tatli-ask-sepeti-meyve-sepeti-kc492417-1-3dea323b-4ea9-48fc-9b82-e891d49b3d25.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc492417-1/M/tatli-ask-sepeti-meyve-sepeti-kc492417-1-3dea323b-4ea9-48fc-9b82-e891d49b3d25.jpg 255w"
                                                        alt="Tatlı Aşk Sepeti- Meyve Sepeti" src="https://cdn03.ciceksepeti.com/cicek/kc492417-1/M/tatli-ask-sepeti-meyve-sepeti-kc492417-1-3dea323b-4ea9-48fc-9b82-e891d49b3d25.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc492417-1/S/tatli-ask-sepeti-meyve-sepeti-kc492417-1-3dea323b-4ea9-48fc-9b82-e891d49b3d25.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc492417-1/M/tatli-ask-sepeti-meyve-sepeti-kc492417-1-3dea323b-4ea9-48fc-9b82-e891d49b3d25.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon is-passive"></span>
                                                                <span class="icon-star-fill c-products-stars__icon icon-half"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(301)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">139</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">119</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 195px;" tabindex="-1">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/mutlu-yillar-meyve-sepeti-kc604082" class="c-products__item-link" tabindex="-1">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc604082-1/M/mutlu-yillar-meyve-sepeti-kc604082-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/kc604082-1/S/mutlu-yillar-meyve-sepeti-kc604082-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc604082-1/M/mutlu-yillar-meyve-sepeti-kc604082-1-1.jpg 255w"
                                                        alt="Mutlu Yıllar Meyve Sepeti" src="https://cdn03.ciceksepeti.com/cicek/kc604082-1/M/mutlu-yillar-meyve-sepeti-kc604082-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc604082-1/S/mutlu-yillar-meyve-sepeti-kc604082-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc604082-1/M/mutlu-yillar-meyve-sepeti-kc604082-1-1.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(172)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">99</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">79</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>

                <div class="home-category__button">
                    <a href="meyve-sepeti" class="btn home-category__link">
                Tüm Meyve Sepetleri
                <i class="icon icon-right-arrow"></i>
            </a>
                </div>
            </div>
            <div class="home-category__wrapper">
                <div class="home-category__title">
                    Parfüm-Kozmetik
                </div>

                <div class="home-category__slider c-products js-category-slider slick-initialized slick-slider"><button type="button" class="slick-prev slick-arrow slick-disabled" aria-disabled="true" style="display: block;"><i class="icon icon-left-arrow"></i></button>
                    <div class="slick-list draggable">
                        <div class="slick-track" style="opacity: 1; width: 2340px; transform: translate3d(0px, 0px, 0px);">
                            <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/calvin-klein-beauty-edp-100ml-bayan-parfum" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kcx4329533/M/calvin-klein-beauty-edp-100ml-bayan-parfum.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/kcx4329533/S/calvin-klein-beauty-edp-100ml-bayan-parfum.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/kcx4329533/M/calvin-klein-beauty-edp-100ml-bayan-parfum.jpeg 255w"
                                                        alt="Calvin Klein Beauty Edp 100 Ml Kadın Parfüm" src="https://cdn03.ciceksepeti.com/cicek/kcx4329533/M/calvin-klein-beauty-edp-100ml-bayan-parfum.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/kcx4329533/S/calvin-klein-beauty-edp-100ml-bayan-parfum.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/kcx4329533/M/calvin-klein-beauty-edp-100ml-bayan-parfum.jpeg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(11)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">772</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,99</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">249</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,90</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/turboplus-3700w-profesyonel-kuafor-tipi-fon-makinesi-kc692482" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc692482-1/M/turboplus-3700w-profesyonel-kuafor-tipi-fon-makinesi-kc692482-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="c-products__item-img lazyloaded"
                                                        data-srcset="https://cdn03.ciceksepeti.com/cicek/kc692482-1/S/turboplus-3700w-profesyonel-kuafor-tipi-fon-makinesi-kc692482-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc692482-1/M/turboplus-3700w-profesyonel-kuafor-tipi-fon-makinesi-kc692482-1-1.jpg 255w"
                                                        alt="Turboplus 3700w Profesyonel Kuaför Tipi Fön Makinesi" src="https://cdn03.ciceksepeti.com/cicek/kc692482-1/M/turboplus-3700w-profesyonel-kuafor-tipi-fon-makinesi-kc692482-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc692482-1/S/turboplus-3700w-profesyonel-kuafor-tipi-fon-makinesi-kc692482-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc692482-1/M/turboplus-3700w-profesyonel-kuafor-tipi-fon-makinesi-kc692482-1-1.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(16)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">223</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,02</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">121</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,91</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/orjinal-ingiliz-urun-jml-ayvo-cilt-bakim-seti-piril-piril-bir-cilt-icin-kc865923" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc865923-1/M/orjinal-ingiliz-urun-jml-ayvo-cilt-bakim-seti-piril-piril-bir-cilt-icin-kc865923-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc865923-1/S/orjinal-ingiliz-urun-jml-ayvo-cilt-bakim-seti-piril-piril-bir-cilt-icin-kc865923-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc865923-1/M/orjinal-ingiliz-urun-jml-ayvo-cilt-bakim-seti-piril-piril-bir-cilt-icin-kc865923-1-1.jpg 255w"
                                                        alt="Ayvo Yüz Temizleme ve Cilt Bakım Seti" src="https://cdn03.ciceksepeti.com/cicek/kc865923-1/M/orjinal-ingiliz-urun-jml-ayvo-cilt-bakim-seti-piril-piril-bir-cilt-icin-kc865923-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc865923-1/S/orjinal-ingiliz-urun-jml-ayvo-cilt-bakim-seti-piril-piril-bir-cilt-icin-kc865923-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc865923-1/M/orjinal-ingiliz-urun-jml-ayvo-cilt-bakim-seti-piril-piril-bir-cilt-icin-kc865923-1-1.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--all-region">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(15)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">79</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,90</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">64</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,90</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 195px;">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/calvin-klein-one-unisex-edt-100ml-kc5820774" class="c-products__item-link" tabindex="0">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc5820774-1/M/calvin-klein-one-unisex-edt-100ml-kc5820774-1-90a054b6535c4942b210602ce2d837ec.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc5820774-1/S/calvin-klein-one-unisex-edt-100ml-kc5820774-1-90a054b6535c4942b210602ce2d837ec.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc5820774-1/M/calvin-klein-one-unisex-edt-100ml-kc5820774-1-90a054b6535c4942b210602ce2d837ec.jpg 255w"
                                                        alt="Calvin Klein One Edt 100 Ml Unisex Parfüm" src="https://cdn03.ciceksepeti.com/cicek/kc5820774-1/M/calvin-klein-one-unisex-edt-100ml-kc5820774-1-90a054b6535c4942b210602ce2d837ec.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc5820774-1/S/calvin-klein-one-unisex-edt-100ml-kc5820774-1-90a054b6535c4942b210602ce2d837ec.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc5820774-1/M/calvin-klein-one-unisex-edt-100ml-kc5820774-1-90a054b6535c4942b210602ce2d837ec.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(10)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">464</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">127</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,90</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 195px;" tabindex="-1">
                                <div>
                                    <div class="c-products__item" style="width: 100%; display: inline-block;">
                                        <div class="c-products__item-inner">
                                            <a href="/davidoff-cool-water-bayan-edt-100ml-kc8609510" class="c-products__item-link" tabindex="-1">
                                                <div class="c-products__item-img-container ratio-container">
                                                    <img width="134" height="144" data-src="https://cdn03.ciceksepeti.com/cicek/kc8609510-1/M/davidoff-cool-water-bayan-edt-100ml-kc8609510-1-f190884bdd064205a394a8e5e032126c.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                                        class="c-products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/kc8609510-1/S/davidoff-cool-water-bayan-edt-100ml-kc8609510-1-f190884bdd064205a394a8e5e032126c.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc8609510-1/M/davidoff-cool-water-bayan-edt-100ml-kc8609510-1-f190884bdd064205a394a8e5e032126c.jpg 255w"
                                                        alt="Davidoff Cool Water Edt 100 Ml Kadın Parfüm" src="https://cdn03.ciceksepeti.com/cicek/kc8609510-1/M/davidoff-cool-water-bayan-edt-100ml-kc8609510-1-f190884bdd064205a394a8e5e032126c.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/kc8609510-1/S/davidoff-cool-water-bayan-edt-100ml-kc8609510-1-f190884bdd064205a394a8e5e032126c.jpg 186w,https://cdn03.ciceksepeti.com/cicek/kc8609510-1/M/davidoff-cool-water-bayan-edt-100ml-kc8609510-1-f190884bdd064205a394a8e5e032126c.jpg 255w">
                                                </div>
                                                <div class="c-products__item-info">
                                                    <div class="c-products__item-badge">
                                                        <span class="c-products__item-badge--cargo">Ücretsiz Kargo</span>
                                                    </div>
                                                    <div class="c-products-stars">
                                                        <div class="c-products-stars__dropdown-evaluation">
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>
                                                            <div class="c-products-stars__icon-wrapper">

                                                                <span class="icon-star-fill c-products-stars__icon"></span>

                                                            </div>

                                                            <span class="c-products-stars__review-count">(8)</span>
                                                        </div>
                                                    </div>
                                                    <div class="c-products__item-price">
                                                        <div class="price price--old">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">579</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                        <div class="price price--now">
                                                            <div class="price__left">
                                                                <span class="price__integer-value">124</span>
                                                            </div>
                                                            <div class="price__right">
                                                                <span class="price__decimal-value-with-currency">,00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>

                <div class="home-category__button">
                    <a href="kozmetik" class="btn home-category__link">
                Tüm Parfüm-Kozmetik Ürünleri
                <i class="icon icon-right-arrow"></i>
            </a>
                </div>
            </div>
        </div>
        <div class="products js-home-page-products">
            <div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 10; height: auto;">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at773" data-category="çiçek" href="/seramik-vazoda-phalaenopsis-orkide" tabindex="0" data-position="1">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="1166">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/at773-1/S/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 255w" alt="2 Dal Beyaz Orkide Çiçeği"
                                    src="https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at773-1/S/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at773-1/M/at773-1-8d6d3a720c67e4d-b0c9db73.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">2 Dal Beyaz Orkide Çiçeği</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">


                                        <div class="price price--now" data-price="79.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">79</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">22,99 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">22,99 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=1166&amp;productgroupid=1&amp;variantcode=at773-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 20; height: auto;">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at2360" data-category="çiçek" href="/asaletin-simgesi-mor-orkide-at2360" tabindex="0" data-position="2">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="134516">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/at2360-1/S/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 255w"
                                    alt="Asaletli Mor 2 Dal Orkide" src="https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at2360-1/S/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2360-1/M/asaletli-mor-2-dal-orkide-at2360-1-8d46a365b599a65-feb628ce.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Asaletli Mor 2 Dal Orkide</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">


                                        <div class="price price--now" data-price="89.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">89</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon is-passive"></span>
                                        <span class="icon-star-fill products-stars__icon icon-half"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">25,87 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">25,87 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=134516&amp;productgroupid=1&amp;variantcode=at2360-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 30; height: auto;">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="sbat4068" data-category="çiçek" href="/mix-valley-renkli-papatyalar-sbat4068" tabindex="0" data-position="3">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="4404138">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/sbat4068-1/M/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/sbat4068-1/S/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg 186w,https://cdn03.ciceksepeti.com/cicek/sbat4068-1/M/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg 255w" alt="Mix Valley"
                                    src="https://cdn03.ciceksepeti.com/cicek/sbat4068-1/M/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/sbat4068-1/S/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg 186w,https://cdn03.ciceksepeti.com/cicek/sbat4068-1/M/sbat4068-1-8d7d59c1ada255e-3f3d0837.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Mix Valley</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%10</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">39</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,00 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="34.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">34</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(14)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                                <div class="products__subscription-price-wrapper__inner">
                                    <span class="products__subscription-price">
                                 <span class="products__subscription-price__text">Abonelikte %14 İndirim </span>
                                    <span class="products__subscription-price__integer">29</span>
                                    <span class="products__subscription-price__decimal">,99 TL</span>
                                    </span>
                                </div>
                            </div>
                            <div class="products__installment-wrapper">
                            </div>

                            <div class="products__brand-badge">
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=4404138&amp;productgroupid=1&amp;variantcode=sbat4068-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 40; height: auto;">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at3709" data-category="çiçek" href="/dogal-ahsap-kutukte-papatya-aranjmani-at3709" tabindex="0" data-position="4">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="3230782">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3709-1/M/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                    class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3709-1/S/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3709-1/M/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg 255w"
                                    alt="Doğal Ahşap Kütükte Papatya Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3709-1/M/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3709-1/S/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3709-1/M/dogal-ahsap-kutukte-papatya-aranjmani-at3709-1-8d67d5ca3dc61be-69b93c3b.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Doğal Ahşap Kütükte Papatya Aranjmanı</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%20</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">49</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,98 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="39.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">39</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">11,49 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">11,49 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=3230782&amp;productgroupid=1&amp;variantcode=at3709-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  products__item--featured-xlg" style="order:50; -webkit-order:50; -moz-order:50; -ms-order:50">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at3184" data-category="çiçek" href="/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184" tabindex="0" data-position="5">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="2235131">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                    class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3184-1/S/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 255w"
                                    alt="Yeni Umutlar Gerbera ve Beyaz Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3184-1/S/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3184-1/M/yeni-umutlar-gerbera-ve-beyaz-gul-aranjmani-at3184-1-636086868149800906.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Yeni Umutlar Gerbera ve Beyaz Gül Aranjmanı</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">


                                        <div class="price price--now" data-price="64.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">64</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(583)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">18,68 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">18,68 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=2235131&amp;productgroupid=1&amp;variantcode=at3184-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  products__item--featured-xlg" style="order: 60; height: auto;">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at3464" data-category="çiçek" href="/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464" tabindex="0" data-position="6">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="2321345">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                    class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3464-1/S/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 255w"
                                    alt="Kişiye Özel Vazolu Hüsnüyusuf ve Gerbera Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3464-1/S/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3464-1/M/kisiye-ozel-vazolu-husnuyusuf-ve-gerbera-aranjmani-at3464-1-8d46ae75f1566df-796960ac.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Kişiye Özel Vazolu Hüsnüyusuf ve Gerbera Aranjmanı</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%14</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">69</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="59.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">59</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon is-passive"></span>
                                        <span class="icon-star-fill products-stars__icon icon-half"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">17,24 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">17,24 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=2321345&amp;productgroupid=1&amp;variantcode=at3464-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:70; -webkit-order:70; -moz-order:70; -ms-order:70">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at2940" data-category="çiçek" href="/cikolatali-papatya-kuresi-at2940" tabindex="0" data-position="7">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="2200876">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at2940-1/M/at2940-1-8d794ead6586bd3-e16a6c0f.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/at2940-1/S/at2940-1-8d794ead6586bd3-e16a6c0f.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2940-1/M/at2940-1-8d794ead6586bd3-e16a6c0f.jpg 255w" alt="Çikolatalı Papatya Küresi"
                                    src="https://cdn03.ciceksepeti.com/cicek/at2940-1/M/at2940-1-8d794ead6586bd3-e16a6c0f.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at2940-1/S/at2940-1-8d794ead6586bd3-e16a6c0f.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2940-1/M/at2940-1-8d794ead6586bd3-e16a6c0f.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Çikolatalı Papatya Küresi</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%12</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">79</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="69.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">69</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">20,12 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">20,12 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=2200876&amp;productgroupid=1&amp;variantcode=at2940-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:80; -webkit-order:80; -moz-order:80; -ms-order:80">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at3458" data-category="çiçek" href="/cift-dal-eflatun-orkide-ve-spesiyal-cikolata" tabindex="0" data-position="8">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="2298982">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3458-1/M/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                    class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3458-1/S/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3458-1/M/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg 255w"
                                    alt="Çift Dal Mor Orkide ve Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at3458-1/M/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3458-1/S/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3458-1/M/cift-dal-eflatun-orkide-ve-spesiyal-cikolata-at3458-1-8d44ea377939d2f-c1c26f88.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Çift Dal Mor Orkide ve Çikolata</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%16</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">119</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,00 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="99.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">99</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(949)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">28,74 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">28,74 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=2298982&amp;productgroupid=1&amp;variantcode=at3458-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__banner products__banner--1">
                <div class="products__banner-inner">

                    <a href="product-list/abonelik-hakkinda" class="products__banner-link">
            <img class="products__banner-img js-banner lazyloaded" data-src="https://cdn03.ciceksepeti.com/slider/40b9554c-474a-4bde-9db1-fef9fe2a0ee6.jpg" alt="Abone-Ol" title="Abone-Ol" width="530" height="400" src="https://cdn03.ciceksepeti.com/slider/40b9554c-474a-4bde-9db1-fef9fe2a0ee6.jpg">

            </a>


                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:90; -webkit-order:90; -moz-order:90; -ms-order:90">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at3774" data-category="çiçek" href="/incili-pembe-kutuda-beyaz-papatya-aranjmani-at3774" tabindex="0" data-position="9">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="3391380">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3774-1/M/at3774-1-8d6be8b7047d682-e2745724.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/at3774-1/S/at3774-1-8d6be8b7047d682-e2745724.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3774-1/M/at3774-1-8d6be8b7047d682-e2745724.jpg 255w" alt="İncili Pembe Kutuda Beyaz Papatya Aranjmanı"
                                    src="https://cdn03.ciceksepeti.com/cicek/at3774-1/M/at3774-1-8d6be8b7047d682-e2745724.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3774-1/S/at3774-1-8d6be8b7047d682-e2745724.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3774-1/M/at3774-1-8d6be8b7047d682-e2745724.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">İncili Pembe Kutuda Beyaz Papatya Aranjmanı</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%11</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">89</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="79.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">79</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">22,99 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">22,99 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391380&amp;productgroupid=1&amp;variantcode=at3774-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover" style="order: 100; height: auto;">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at3739" data-category="çiçek" href="/gold-cizgili-vazoda-2-dal-orkide-cicegi-at3739" tabindex="0" data-position="10">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="3391349">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3739-1/M/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/at3739-1/S/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3739-1/M/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg 255w"
                                    alt="Gold Çizgili Vazoda 2 Dal Orkide Çiçeği" src="https://cdn03.ciceksepeti.com/cicek/at3739-1/M/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/at3739-1/S/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/at3739-1/M/gold-cizgili-vazoda-2-dal-orkide-cicegi-standart-boy.jpeg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-badge products__item-badge--medallion icon-medallion">
                                    <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
                                </div>
                                <div class="products__item-details">
                                    <p class="products__item-title">Gold Çizgili Vazoda 2 Dal Orkide Çiçeği</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%17</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">109</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,00 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="89.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">89</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">25,87 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">25,87 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391349&amp;productgroupid=1&amp;variantcode=at3739-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:110; -webkit-order:110; -moz-order:110; -ms-order:110">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at727" data-category="çiçek" href="/akvaryumda-7-kirmizi-gul" tabindex="0" data-position="11">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="1053">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at727-1/M/akvaryum-vazo-icerisinde-gul-buketi-at727-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/at727-1/S/akvaryum-vazo-icerisinde-gul-buketi-at727-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at727-1/M/akvaryum-vazo-icerisinde-gul-buketi-at727-1-1.jpg 255w" alt="Akvaryum Vazoda 7 Kırmızı Gül"
                                    src="https://cdn03.ciceksepeti.com/cicek/at727-1/M/akvaryum-vazo-icerisinde-gul-buketi-at727-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at727-1/S/akvaryum-vazo-icerisinde-gul-buketi-at727-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at727-1/M/akvaryum-vazo-icerisinde-gul-buketi-at727-1-1.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Akvaryum Vazoda 7 Kırmızı Gül</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%14</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">69</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="59.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">59</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">17,24 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">17,24 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=1053&amp;productgroupid=1&amp;variantcode=at727-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:120; -webkit-order:120; -moz-order:120; -ms-order:120">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="sbat4057" data-category="çiçek" href="/harmonic-rengarenk-karanfil-aranjmani-sbat4057" tabindex="0" data-position="12">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="4404136">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/sbat4057-1/M/sbat4057-1-8d7d59c039eab19-f549cf21.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/sbat4057-1/S/sbat4057-1-8d7d59c039eab19-f549cf21.jpg 186w,https://cdn03.ciceksepeti.com/cicek/sbat4057-1/M/sbat4057-1-8d7d59c039eab19-f549cf21.jpg 255w" alt="Harmony" src="https://cdn03.ciceksepeti.com/cicek/sbat4057-1/M/sbat4057-1-8d7d59c039eab19-f549cf21.jpg"
                                    srcset="https://cdn03.ciceksepeti.com/cicek/sbat4057-1/S/sbat4057-1-8d7d59c039eab19-f549cf21.jpg 186w,https://cdn03.ciceksepeti.com/cicek/sbat4057-1/M/sbat4057-1-8d7d59c039eab19-f549cf21.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Harmony</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">


                                        <div class="price price--now" data-price="59.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">59</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">

                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                                <div class="products__subscription-price-wrapper__inner">
                                    <span class="products__subscription-price">
                                 <span class="products__subscription-price__text">Abonelikte %17 İndirim </span>
                                    <span class="products__subscription-price__integer">49</span>
                                    <span class="products__subscription-price__decimal">,99 TL</span>
                                    </span>
                                </div>
                            </div>
                            <div class="products__installment-wrapper">
                            </div>

                            <div class="products__brand-badge">
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=4404136&amp;productgroupid=1&amp;variantcode=sbat4057-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__banner products__banner--2">
                <div class="products__banner-inner">

                    <a href="/hediye" class="products__banner-link">
            <img class="products__banner-img js-banner lazyloaded" data-src="https://cdn03.ciceksepeti.com/slider/c86bcda5-8609-4dd3-88b0-8c0c6d4b5c8a.jpg" alt="Hediye" title="Hediye" width="530" height="400" src="https://cdn03.ciceksepeti.com/slider/c86bcda5-8609-4dd3-88b0-8c0c6d4b5c8a.jpg">

            </a>


                </div>
            </div>
            <div class="products__banner products__banner--3">
                <div class="products__banner-inner">

                    <a href="/bonnyfood" class="products__banner-link">
            <img class="products__banner-img js-banner lazyloaded" data-src="https://cdn03.ciceksepeti.com/slider/aae8dde2-0591-4a81-80df-c66636877444.jpg" alt="Bonnyfood" title="Bonnyfood" width="530" height="400" src="https://cdn03.ciceksepeti.com/slider/aae8dde2-0591-4a81-80df-c66636877444.jpg">

            </a>


                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:130; -webkit-order:130; -moz-order:130; -ms-order:130">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at3632" data-category="çiçek" href="/2-dal-orkide-ve-premium-cikolata-at3632" tabindex="0" data-position="13">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="2746232">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3632-1/M/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/at3632-1/S/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3632-1/M/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg 255w"
                                    alt="2 Dal Orkide ve Premium Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at3632-1/M/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3632-1/S/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3632-1/M/2-dal-orkide-ve-premium-cikolata-at3632-1-8d5ac61de5f7203-d7e7a8e8.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">2 Dal Orkide ve Premium Çikolata</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">


                                        <div class="price price--now" data-price="119.00">
                                            <div class="price__left">
                                                <span class="price__integer-value">119</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,00 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(866)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">34,21 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">34,21 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=2746232&amp;productgroupid=1&amp;variantcode=at3632-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:140; -webkit-order:140; -moz-order:140; -ms-order:140">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at3454" data-category="çiçek" href="/15-kirmizi-gul-ve-spesiyal-cikolata" tabindex="0" data-position="14">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="2298978">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3454-1/M/15-kirmizi-gul-ve-spesiyal-cikolata-at3454-1-8d44ea37214991b-818ab171.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                    class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3454-1/S/15-kirmizi-gul-ve-spesiyal-cikolata-at3454-1-8d44ea37214991b-818ab171.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3454-1/M/15-kirmizi-gul-ve-spesiyal-cikolata-at3454-1-8d44ea37214991b-818ab171.jpg 255w"
                                    alt="15 Kırmızı Gül ve Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at3454-1/M/15-kirmizi-gul-ve-spesiyal-cikolata-at3454-1-8d44ea37214991b-818ab171.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3454-1/S/15-kirmizi-gul-ve-spesiyal-cikolata-at3454-1-8d44ea37214991b-818ab171.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3454-1/M/15-kirmizi-gul-ve-spesiyal-cikolata-at3454-1-8d44ea37214991b-818ab171.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">15 Kırmızı Gül ve Çikolata</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%8</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">119</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,00 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="109.00">
                                            <div class="price__left">
                                                <span class="price__integer-value">109</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,00 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(768)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">31,33 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">31,33 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=2298978&amp;productgroupid=1&amp;variantcode=at3454-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:150; -webkit-order:150; -moz-order:150; -ms-order:150">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at1654" data-category="çiçek" href="/ask-kuresi-kirmizi-ve-beyaz-guller-at1654" tabindex="0" data-position="15">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="5470">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at1654-1/M/ask-kuresi-kirmizi-ve-beyaz-guller-at1654-1-1.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/at1654-1/S/ask-kuresi-kirmizi-ve-beyaz-guller-at1654-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at1654-1/M/ask-kuresi-kirmizi-ve-beyaz-guller-at1654-1-1.jpg 255w" alt="Aşk Küresi 4 Kırmızı ve 5 Beyaz Gül"
                                    src="https://cdn03.ciceksepeti.com/cicek/at1654-1/M/ask-kuresi-kirmizi-ve-beyaz-guller-at1654-1-1.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at1654-1/S/ask-kuresi-kirmizi-ve-beyaz-guller-at1654-1-1.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at1654-1/M/ask-kuresi-kirmizi-ve-beyaz-guller-at1654-1-1.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Aşk Küresi 4 Kırmızı ve 5 Beyaz Gül</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%14</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">69</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="59.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">59</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon is-passive"></span>
                                        <span class="icon-star-fill products-stars__icon icon-half"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">17,24 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">17,24 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=5470&amp;productgroupid=1&amp;variantcode=at1654-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:160; -webkit-order:160; -moz-order:160; -ms-order:160">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="sbat4046" data-category="çiçek" href="/rose-meta-gul-aranjmani-sbat4046" tabindex="0" data-position="16">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="4404122">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/sbat4046-1/M/sbat4046-1-8d7d59be8b7d1e3-ddbf74d.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/sbat4046-1/S/sbat4046-1-8d7d59be8b7d1e3-ddbf74d.jpg 186w,https://cdn03.ciceksepeti.com/cicek/sbat4046-1/M/sbat4046-1-8d7d59be8b7d1e3-ddbf74d.jpg 255w" alt="Mix Fresh" src="https://cdn03.ciceksepeti.com/cicek/sbat4046-1/M/sbat4046-1-8d7d59be8b7d1e3-ddbf74d.jpg"
                                    srcset="https://cdn03.ciceksepeti.com/cicek/sbat4046-1/S/sbat4046-1-8d7d59be8b7d1e3-ddbf74d.jpg 186w,https://cdn03.ciceksepeti.com/cicek/sbat4046-1/M/sbat4046-1-8d7d59be8b7d1e3-ddbf74d.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Mix Fresh</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">


                                        <div class="price price--now" data-price="69.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">69</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(1)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                                <div class="products__subscription-price-wrapper__inner">
                                    <span class="products__subscription-price">
                                 <span class="products__subscription-price__text">Abonelikte %14 İndirim </span>
                                    <span class="products__subscription-price__integer">59</span>
                                    <span class="products__subscription-price__decimal">,99 TL</span>
                                    </span>
                                </div>
                            </div>
                            <div class="products__installment-wrapper">
                            </div>

                            <div class="products__brand-badge">
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=4404122&amp;productgroupid=1&amp;variantcode=sbat4046-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:170; -webkit-order:170; -moz-order:170; -ms-order:170">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at1892" data-category="çiçek" href="/bonsai-at1892" tabindex="0" data-position="17">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="6250">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at1892-1/M/at1892-1-8d6f587ca27e95f-15a2161b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/at1892-1/S/at1892-1-8d6f587ca27e95f-15a2161b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at1892-1/M/at1892-1-8d6f587ca27e95f-15a2161b.jpg 255w" alt="Zelkova Bonsai 25cm"
                                    src="https://cdn03.ciceksepeti.com/cicek/at1892-1/M/at1892-1-8d6f587ca27e95f-15a2161b.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at1892-1/S/at1892-1-8d6f587ca27e95f-15a2161b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at1892-1/M/at1892-1-8d6f587ca27e95f-15a2161b.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Zelkova Bonsai 25cm</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%11</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">89</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="79.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">79</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">22,99 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">22,99 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=6250&amp;productgroupid=1&amp;variantcode=at1892-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover" style="order: 180; height: auto;">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at192" data-category="çiçek" href="/beyaz-phalaenopsis-orkide" tabindex="0" data-position="18">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="321">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at192-1/M/at192-1-8d6d3a67569da1b-5dfb6f08.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/at192-1/S/at192-1-8d6d3a67569da1b-5dfb6f08.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at192-1/M/at192-1-8d6d3a67569da1b-5dfb6f08.jpg 255w" alt="Phalaenopsis Orkide Çiçeği"
                                    src="https://cdn03.ciceksepeti.com/cicek/at192-1/M/at192-1-8d6d3a67569da1b-5dfb6f08.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at192-1/S/at192-1-8d6d3a67569da1b-5dfb6f08.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at192-1/M/at192-1-8d6d3a67569da1b-5dfb6f08.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Phalaenopsis Orkide Çiçeği</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">


                                        <div class="price price--now" data-price="69.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">69</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">20,12 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">20,12 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=321&amp;productgroupid=1&amp;variantcode=at192-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:190; -webkit-order:190; -moz-order:190; -ms-order:190">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="via209" data-category="çiçek" href="/mini-cift-dal-mor-orkide-via209" tabindex="0" data-position="19">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="2793788">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via209-1/M/mini-cift-dal-beton-saksida-mor-orkide-via209-1-8d611922882fdf6-6890cfdc.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                    class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via209-1/S/mini-cift-dal-beton-saksida-mor-orkide-via209-1-8d611922882fdf6-6890cfdc.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via209-1/M/mini-cift-dal-beton-saksida-mor-orkide-via209-1-8d611922882fdf6-6890cfdc.jpg 255w"
                                    alt="Mini Çift Dal Beton Saksıda Mor Orkide" src="https://cdn03.ciceksepeti.com/cicek/via209-1/M/mini-cift-dal-beton-saksida-mor-orkide-via209-1-8d611922882fdf6-6890cfdc.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via209-1/S/mini-cift-dal-beton-saksida-mor-orkide-via209-1-8d611922882fdf6-6890cfdc.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via209-1/M/mini-cift-dal-beton-saksida-mor-orkide-via209-1-8d611922882fdf6-6890cfdc.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-badge products__item-badge--medallion icon-medallion">
                                    <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
                                </div>
                                <div class="products__item-details">
                                    <p class="products__item-title">Mini Çift Dal Beton Saksıda Mor Orkide</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%17</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">89</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="74.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">74</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">21,55 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">21,55 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=2793788&amp;productgroupid=1&amp;variantcode=via209-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:200; -webkit-order:200; -moz-order:200; -ms-order:200">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at772" data-category="çiçek" href="/konik-vazoda-11-kirmizi-gul" tabindex="0" data-position="20">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="1165">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at772-1/M/sevgi-bahcesi-kirmizi-gul-aranjmani-at772-1-8d4856f8271bfa6-a28d3a1b.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/at772-1/S/sevgi-bahcesi-kirmizi-gul-aranjmani-at772-1-8d4856f8271bfa6-a28d3a1b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at772-1/M/sevgi-bahcesi-kirmizi-gul-aranjmani-at772-1-8d4856f8271bfa6-a28d3a1b.jpg 255w"
                                    alt="Sevgi Bahçesi Vazoda 11 Kırmızı Gül Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/at772-1/M/sevgi-bahcesi-kirmizi-gul-aranjmani-at772-1-8d4856f8271bfa6-a28d3a1b.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at772-1/S/sevgi-bahcesi-kirmizi-gul-aranjmani-at772-1-8d4856f8271bfa6-a28d3a1b.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at772-1/M/sevgi-bahcesi-kirmizi-gul-aranjmani-at772-1-8d4856f8271bfa6-a28d3a1b.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Sevgi Bahçesi Vazoda 11 Kırmızı Gül Aranjmanı</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">


                                        <div class="price price--now" data-price="64.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">64</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon is-passive"></span>
                                        <span class="icon-star-fill products-stars__icon icon-half"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">18,68 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">18,68 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=1165&amp;productgroupid=1&amp;variantcode=at772-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:210; -webkit-order:210; -moz-order:210; -ms-order:210">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="gr1986" data-category="yenilebilir çiçek" href="/cikolata-deryasi-kek-ve-tartolet-buketi-gr1986" tabindex="0" data-position="21">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="3924088">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/gr1986-1/M/gr1986-1-8d76c32ea666e56-16743b14.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/gr1986-1/S/gr1986-1-8d76c32ea666e56-16743b14.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1986-1/M/gr1986-1-8d76c32ea666e56-16743b14.jpg 255w" alt="Çikolata Deryası Kek ve Tartolet Buketi"
                                    src="https://cdn03.ciceksepeti.com/cicek/gr1986-1/M/gr1986-1-8d76c32ea666e56-16743b14.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/gr1986-1/S/gr1986-1-8d76c32ea666e56-16743b14.jpg 186w,https://cdn03.ciceksepeti.com/cicek/gr1986-1/M/gr1986-1-8d76c32ea666e56-16743b14.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Çikolata Deryası Kek ve Tartolet Buketi</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">


                                        <div class="price price--now" data-price="44.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">44</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(897)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                            </div>

                            <div class="products__brand-badge">
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=3924088&amp;productgroupid=2&amp;variantcode=gr1986-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover" style="order: 220; height: auto;">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at3462" data-category="çiçek" href="/beyaz-papatyalar-ve-spesiyal-cikolata" tabindex="0" data-position="22">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="2298986">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3462-1/M/beyaz-papatyalar-ve-spesiyal-cikolata-at3462-1-8d44ea37d4682d7-3beae7ee.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                    class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3462-1/S/beyaz-papatyalar-ve-spesiyal-cikolata-at3462-1-8d44ea37d4682d7-3beae7ee.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3462-1/M/beyaz-papatyalar-ve-spesiyal-cikolata-at3462-1-8d44ea37d4682d7-3beae7ee.jpg 255w"
                                    alt="Beyaz Papatyalar ve Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at3462-1/M/beyaz-papatyalar-ve-spesiyal-cikolata-at3462-1-8d44ea37d4682d7-3beae7ee.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3462-1/S/beyaz-papatyalar-ve-spesiyal-cikolata-at3462-1-8d44ea37d4682d7-3beae7ee.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3462-1/M/beyaz-papatyalar-ve-spesiyal-cikolata-at3462-1-8d44ea37d4682d7-3beae7ee.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Beyaz Papatyalar ve Çikolata</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">


                                        <div class="price price--now" data-price="79.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">79</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">22,99 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">22,99 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=2298986&amp;productgroupid=1&amp;variantcode=at3462-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:230; -webkit-order:230; -moz-order:230; -ms-order:230">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="via238" data-category="çiçek" href="/incili-pembe-kutuda-20li-lila-gul-via238" tabindex="0" data-position="23">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="3391397">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via238-1/M/via238-1-8d6be8ccce4a494-42bbf34.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/via238-1/S/via238-1-8d6be8ccce4a494-42bbf34.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via238-1/M/via238-1-8d6be8ccce4a494-42bbf34.jpg 255w" alt="İncili Pembe Kutuda 20'li Lila Gül"
                                    src="https://cdn03.ciceksepeti.com/cicek/via238-1/M/via238-1-8d6be8ccce4a494-42bbf34.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/via238-1/S/via238-1-8d6be8ccce4a494-42bbf34.jpg 186w,https://cdn03.ciceksepeti.com/cicek/via238-1/M/via238-1-8d6be8ccce4a494-42bbf34.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">İncili Pembe Kutuda 20'li Lila Gül</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%14</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">139</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,00 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="119.00">
                                            <div class="price__left">
                                                <span class="price__integer-value">119</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,00 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(726)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">34,21 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">34,21 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391397&amp;productgroupid=1&amp;variantcode=via238-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:240; -webkit-order:240; -moz-order:240; -ms-order:240">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at2091" data-category="çiçek" href="/papatya-kuresi-at2091" tabindex="0" data-position="24">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="7592">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at2091-1/M/at2091-1-8d76921a2b37f99-2c2867cf.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/at2091-1/S/at2091-1-8d76921a2b37f99-2c2867cf.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2091-1/M/at2091-1-8d76921a2b37f99-2c2867cf.jpg 255w" alt="Papatya Küresi" src="https://cdn03.ciceksepeti.com/cicek/at2091-1/M/at2091-1-8d76921a2b37f99-2c2867cf.jpg"
                                    srcset="https://cdn03.ciceksepeti.com/cicek/at2091-1/S/at2091-1-8d76921a2b37f99-2c2867cf.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at2091-1/M/at2091-1-8d76921a2b37f99-2c2867cf.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Papatya Küresi</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">


                                        <div class="price price--now" data-price="49.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">49</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon is-passive"></span>
                                        <span class="icon-star-fill products-stars__icon icon-half"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">14,37 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">14,37 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=7592&amp;productgroupid=1&amp;variantcode=at2091-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:250; -webkit-order:250; -moz-order:250; -ms-order:250">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at3870" data-category="çiçek" href="/gold-cizgili-vazoda-antoryum-bitkisi-at3870" tabindex="0" data-position="25">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="3570090">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3870-1/M/at3870-1-8d76d2407f2a66f-cf8f4e8e.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/at3870-1/S/at3870-1-8d76d2407f2a66f-cf8f4e8e.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3870-1/M/at3870-1-8d76d2407f2a66f-cf8f4e8e.jpg 255w" alt="Gold Çizgili Vazoda Antoryum Bitkisi"
                                    src="https://cdn03.ciceksepeti.com/cicek/at3870-1/M/at3870-1-8d76d2407f2a66f-cf8f4e8e.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3870-1/S/at3870-1-8d76d2407f2a66f-cf8f4e8e.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3870-1/M/at3870-1-8d76d2407f2a66f-cf8f4e8e.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-badge products__item-badge--medallion icon-medallion">
                                    <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
                                </div>
                                <div class="products__item-details">
                                    <p class="products__item-title">Gold Çizgili Vazoda Antoryum Bitkisi</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%20</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">99</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="79.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">79</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">22,99 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">22,99 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=3570090&amp;productgroupid=1&amp;variantcode=at3870-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover" style="order: 260; height: auto;">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at281" data-category="çiçek" href="/kar-beyaz-gul-ve-lilyum-at281" tabindex="0" data-position="26">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="441">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at281-1/M/kar-beyaz-gul-ve-lilyum-at281-1-10.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/at281-1/S/kar-beyaz-gul-ve-lilyum-at281-1-10.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at281-1/M/kar-beyaz-gul-ve-lilyum-at281-1-10.jpg 255w" alt="Kar Beyaz Gül ve Lilyum"
                                    src="https://cdn03.ciceksepeti.com/cicek/at281-1/M/kar-beyaz-gul-ve-lilyum-at281-1-10.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at281-1/S/kar-beyaz-gul-ve-lilyum-at281-1-10.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at281-1/M/kar-beyaz-gul-ve-lilyum-at281-1-10.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Kar Beyaz Gül ve Lilyum</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%20</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">99</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="79.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">79</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon is-passive"></span>
                                        <span class="icon-star-fill products-stars__icon icon-half"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">22,99 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">22,99 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=441&amp;productgroupid=1&amp;variantcode=at281-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover  " style="order:270; -webkit-order:270; -moz-order:270; -ms-order:270">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at3453" data-category="çiçek" href="/phalaenopsis-orkide-ve-spesiyal-cikolata-at3453" tabindex="0" data-position="27">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="2299272">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3453-1/M/phalaenopsis-orkide-ve-spesiyal-cikolata-at3453-1-8d44ea5db12dbd9-a4babaa5.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                    class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/at3453-1/S/phalaenopsis-orkide-ve-spesiyal-cikolata-at3453-1-8d44ea5db12dbd9-a4babaa5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3453-1/M/phalaenopsis-orkide-ve-spesiyal-cikolata-at3453-1-8d44ea5db12dbd9-a4babaa5.jpg 255w"
                                    alt="Phalaenopsis Orkide ve Çikolata" src="https://cdn03.ciceksepeti.com/cicek/at3453-1/M/phalaenopsis-orkide-ve-spesiyal-cikolata-at3453-1-8d44ea5db12dbd9-a4babaa5.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3453-1/S/phalaenopsis-orkide-ve-spesiyal-cikolata-at3453-1-8d44ea5db12dbd9-a4babaa5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3453-1/M/phalaenopsis-orkide-ve-spesiyal-cikolata-at3453-1-8d44ea5db12dbd9-a4babaa5.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Phalaenopsis Orkide ve Çikolata</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%8</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">109</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,00 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="99.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">99</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">28,74 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">28,74 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=2299272&amp;productgroupid=1&amp;variantcode=at3453-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover" style="order: 280; height: auto;">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="via247" data-category="çiçek" href="/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-via247" tabindex="0" data-position="28">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="3391407">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/via247-1/M/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw"
                                    class="products__item-img lazyloaded" data-srcset="https://cdn03.ciceksepeti.com/cicek/via247-1/S/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/via247-1/M/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg 255w"
                                    alt="Kişiye Özel İncili Pembe Kutuda Lila Gül Harf Aranjmanı" src="https://cdn03.ciceksepeti.com/cicek/via247-1/M/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg" srcset="https://cdn03.ciceksepeti.com/cicek/via247-1/S/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg 186w,https://cdn03.ciceksepeti.com/cicek/via247-1/M/kisiye-ozel-incili-pembe-kutuda-lila-gul-harf-aranjmani-standart-boy.jpeg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Kişiye Özel İncili Pembe Kutuda Lila Gül Harf Aranjmanı</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%22</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">129</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,00 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="99.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">99</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(401)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">28,74 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">28,74 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=3391407&amp;productgroupid=1&amp;variantcode=via247-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover" style="order: 290; height: auto;">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="bt110" data-category="çiçek" href="/antoryum-50cm-yuksekliginde-salon-bitkisi" tabindex="0" data-position="29">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="64">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/bt110-1/M/salon-guzeli-orta-boy-antoryum-bt110-1-5.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/bt110-1/S/salon-guzeli-orta-boy-antoryum-bt110-1-5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/bt110-1/M/salon-guzeli-orta-boy-antoryum-bt110-1-5.jpg 255w" alt="Kırmızı Antoryum (Anthurium )Saksı Çiçeği"
                                    src="https://cdn03.ciceksepeti.com/cicek/bt110-1/M/salon-guzeli-orta-boy-antoryum-bt110-1-5.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/bt110-1/S/salon-guzeli-orta-boy-antoryum-bt110-1-5.jpg 186w,https://cdn03.ciceksepeti.com/cicek/bt110-1/M/salon-guzeli-orta-boy-antoryum-bt110-1-5.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Kırmızı Antoryum (Anthurium )Saksı Çiçeği</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%19</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">79</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="64.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">64</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">18,68 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">18,68 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=64&amp;productgroupid=1&amp;variantcode=bt110-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="products__item js-category-item-hover" style="order: 300; height: auto;">
                <div class="products__item-inner">
                    <div class="products__container-background">
                        <a class="products__item-link js-products__item-link" data-productcode="at3583" data-category="çiçek" href="/premium-kutuda-9lu-kirmizi-gul-at3583" tabindex="0" data-position="30">
                            <div class="products__item-img-container ratio-container">
                                <span class="products__favorite-icon js-favorite-add" data-product-id="2787614">
						<span class="icon-favorite-border"></span>
                                </span>
                                <img width="255" height="280" data-src="https://cdn03.ciceksepeti.com/cicek/at3583-1/M/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg" sizes="(min-width: 480px) 33vw, (min-width: 768px) 25vw, (min-width: 1600px) 20vw, 20vw" class="products__item-img lazyloaded"
                                    data-srcset="https://cdn03.ciceksepeti.com/cicek/at3583-1/S/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3583-1/M/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg 255w"
                                    alt="Premium Kutuda 9'lu Kırmızı Gül" src="https://cdn03.ciceksepeti.com/cicek/at3583-1/M/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg" srcset="https://cdn03.ciceksepeti.com/cicek/at3583-1/S/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg 186w,https://cdn03.ciceksepeti.com/cicek/at3583-1/M/premium-kutuda-9lu-kirmizi-gul-at3583-1-8d60dd190870dee-3651166d.jpg 255w">
                            </div>
                            <div class="products__item-info">
                                <div class="products__item-details">
                                    <p class="products__item-title">Premium Kutuda 9'lu Kırmızı Gül</p>
                                    <div class="products__item-badge products__item-badge--all-region js-products-bagde-all">
                                        <span class="products__item-badge-text">Her Gün Aynı Gün / Ücretsiz Teslimat</span>
                                    </div>
                                    <div class="products__item-price js-no-tax">

                                        <div class="discount-percentage">
                                            <span class="discount-percentage__text">%25</span>
                                        </div>
                                        <div class="price price--old">
                                            <div class="price__left">
                                                <span class="price__integer-value">99</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>

                                        <div class="price price--now" data-price="74.99">
                                            <div class="price__left">
                                                <span class="price__integer-value">74</span>
                                            </div>
                                            <div class="price__right">
                                                <span class="price__decimal-value-with-currency">,99 TL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="products-stars">
                                <div class="products-stars__dropdown-evaluation">
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>
                                    <div class="products-stars__icon-wrapper">

                                        <span class="icon-star-fill products-stars__icon"></span>

                                    </div>

                                    <span class="products-stars__review-count">(999+)</span>
                                </div>
                            </div>
                            <div class="products__subscription-price-wrapper">
                            </div>
                            <div class="products__installment-wrapper">
                                <p class="products__installment products__installment--responsive">21,55 TL'den Başlayan Taksitlerle</p>
                            </div>

                            <div class="products__brand-badge">
                                <p class="products__installment">21,55 TL'den Başlayan Taksitlerle</p>
                            </div>
                        </a>
                        <div class="products__recommend-inner">
                            <a class="products__recommend-link" href="/product/productdetailrecommend?productId=2787614&amp;productgroupid=1&amp;variantcode=at3583-1">Benzer Ürünleri Gör +</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden js-ani-lastvisitproduct-widget">{"CountryCode":"tur","Rule":{"RuleIdentities":[{"FieldName":"DeliveryTypes","IdentityList":["0"]}],"Variables":[{"Name":"Today","Value":"(Salı)"},{"Name":"Tomorrow","Value":"(Çarşamba)"},{"Name":"TimeThreshold","Value":"spt"},{"Name":"NowTimeSpan","Value":"21:29:03"}]}}</div>
        <div id="ani-lastVisitProductsWidget"></div>

        <div class="hidden js-ani-similartolastvisit-widget">{"RegionIdList":[1500046494,1500046737,1500046760,1500046814,1500046918,1500046938,1500047027,1500047147,1500047158,1500047192,1500047324,0],"CountryCode":"tur","Rule":{"RuleIdentities":[{"FieldName":"DeliveryTypes","IdentityList":["0"]}],"Variables":[{"Name":"Today","Value":"(Salı)"},{"Name":"Tomorrow","Value":"(Çarşamba)"},{"Name":"TimeThreshold","Value":"spt"},{"Name":"NowTimeSpan","Value":"21:29:03"}]}}</div>

        <div id="ani-similartolastvisitWidget"></div>

       <div class="banner__catalog">
	    <div class="banner__catalog-title">Diğer Kategoriler</div>
	    <div class="banner__catalog-item-wrapper">
		<div class="banner__catalog-item">
			<a class="banner__catalog-item-inner" href="/dogum-gunu-cicekleri">
				<img class="banner__catalog-item-img lazyloaded" data-src="https://cdn03.ciceksepeti.com/slider/Dogumgunu-16-04.png" src="https://cdn03.ciceksepeti.com/slider/Dogumgunu-16-04.png">
			</a>
		</div>
		<div class="banner__catalog-item">
			<a class="banner__catalog-item-inner" href="/kisiye-ozel-hediyeler">
				<img class="banner__catalog-item-img lazyloaded" data-src="https://cdn03.ciceksepeti.com/slider/kisiyeozel-16-04.png" src="https://cdn03.ciceksepeti.com/slider/kisiyeozel-16-04.png">
			</a>
		</div>
		<div class="banner__catalog-item">
			<a class="banner__catalog-item-inner" href="/indirimli-ev-yasam">
				<img class="banner__catalog-item-img lazyloaded" data-src="https://cdn03.ciceksepeti.com/slider/indirimliEvyasam-16-04.png" src="https://cdn03.ciceksepeti.com/slider/indirimliEvyasam-16-04.png">
			</a>
		</div>
		<div class="banner__catalog-item">
			<a class="banner__catalog-item-inner" href="/hediye-taki">
				<img class="banner__catalog-item-img lazyloaded" data-src="https://cdn03.ciceksepeti.com/slider/Taki-Aksesuar-16-04.png" src="https://cdn03.ciceksepeti.com/slider/Taki-Aksesuar-16-04.png">
			</a>
		</div>
		<div class="banner__catalog-item">
			<a class="banner__catalog-item-inner" href="/hediye-oyun-oyuncak">
				<img class="banner__catalog-item-img lazyloaded" data-src="https://cdn03.ciceksepeti.com/slider/Oyuncak-16-04.png" src="https://cdn03.ciceksepeti.com/slider/Oyuncak-16-04.png">
			</a>
		</div>
		<div class="banner__catalog-item">
			<a class="banner__catalog-item-inner" href="/kisisel-bakim">
				<img class="banner__catalog-item-img lazyloaded" data-src="https://cdn03.ciceksepeti.com/slider/KisiselBakim-16-04.png" src="https://cdn03.ciceksepeti.com/slider/KisiselBakim-16-04.png">
			</a>
		</div>
		<div class="banner__catalog-item">
			<a class="banner__catalog-item-inner" href="/hediye-parfum">
				<img class="banner__catalog-item-img lazyloaded" data-src="https://cdn03.ciceksepeti.com/slider/Parfum-16-04.png" src="https://cdn03.ciceksepeti.com/slider/Parfum-16-04.png">
			</a>
		</div>
		<div class="banner__catalog-item">
			<a class="banner__catalog-item-inner" href="/elektronik-urunler">
				<img class="banner__catalog-item-img lazyloaded" data-src="https://cdn03.ciceksepeti.com/slider/Elektronik-16-04.png" src="https://cdn03.ciceksepeti.com/slider/Elektronik-16-04.png">
			</a>
		</div>
		<div class="banner__catalog-item">
			<a class="banner__catalog-item-inner" href="/hobi">
				<img class="banner__catalog-item-img lazyloaded" data-src="https://cdn03.ciceksepeti.com/slider/Hobi-16-04.png" src="https://cdn03.ciceksepeti.com/slider/Hobi-16-04.png">
			</a>
		</div>
		<div class="banner__catalog-item">
			<a class="banner__catalog-item-inner" href="/spor-outdoor" title="">
				<img class="banner__catalog-item-img lazyloaded" data-src="https://cdn03.ciceksepeti.com/slider/SporOutdoor-16-04.png" src="https://cdn03.ciceksepeti.com/slider/SporOutdoor-16-04.png">
			</a>
		</div>
		<div class="banner__catalog-item">
			<a class="banner__catalog-item-inner" href="/moda">
				<img class="banner__catalog-item-img lazyloaded" data-src="https://cdn03.ciceksepeti.com/slider/moda-16-04.png" src="https://cdn03.ciceksepeti.com/slider/moda-16-04.png">
			</a>
		</div>
		<div class="banner__catalog-item">
			<a class="banner__catalog-item-inner" href="/meyve-sepeti">
				<img class="banner__catalog-item-img lazyloaded" data-src="https://cdn03.ciceksepeti.com/slider/MeyveSepeti-16-04.png" src="https://cdn03.ciceksepeti.com/slider/MeyveSepeti-16-04.png">
			</a>
		</div>
		<div class="banner__catalog-item">
			<a class="banner__catalog-item-inner" href="/tek-fiyat-canta">
				<img class="banner__catalog-item-img lazyloaded" data-src="https://cdn03.ciceksepeti.com/slider/mobilebanner-canta-16-04.jpg" src="https://cdn03.ciceksepeti.com/slider/mobilebanner-canta-16-04.jpg">
			</a>
		</div>
	    </div>
        </div>
        </div>
</main>
    
</template>

<script>
export default {
  name: 'Orta',
  data(){
       return {
        data:"",
        }
    }
}
</script>