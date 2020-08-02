const map = () => {
  ymaps.ready(init);

  function init () {
      var map = new ymaps.Map('map', {
          center: [59.968137, 30.316263],
          zoom: 15
        }, {
          searchControlProvider: 'yandex#search'
        });

          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          );

          myPlacemarkWithContent = new ymaps.Placemark([59.968137, 30.316263], {
              hintContent: 'Санкт-Петербург, набережная реки Карповки, дом 5',
              balloonContent: 'Санкт-Петербург, набережная реки Карповки, дом 5',
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#imageWithContent',
              // Своё изображение иконки метки.
              iconImageHref: 'img/icon-location.svg',
              // Размеры метки.
              iconImageSize: [32, 40],
              // Макет содержимого.
              iconContentLayout: MyIconContentLayout
          });

    map.geoObjects.add(myPlacemarkWithContent);
  };
}
export default map;
