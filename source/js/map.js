'use strict';

(() => {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.968137, 30.316263],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Санкт-Петербург, набережная реки Карповки, дом 5',
            balloonContent: 'Санкт-Петербург, набережная реки Карповки, дом 5'
        }, {

            iconLayout: 'default#image',

            iconImageHref: 'img/icon-location.svg',

            iconImageSize: [32, 40],

            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {

            iconLayout: 'default#imageWithContent',

            iconImageHref: 'img/icon-location.svg',

            iconImageSize: [48, 48],

            iconImageOffset: [-24, -24],

            iconContentOffset: [15, 15],

            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
    .add(myPlacemark)
    .add(myPlacemarkWithContent);
});
})();
