function initMap() {
    var mapOptions = {
        disableDefaultUI: true,
        zoom: 13,
        center: new google.maps.LatLng(32.700, -117.206),
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#d8e3f6"},{"visibility":"on"}]}]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(32.690, -117.206),
        map: map,
        title: 'Pin',
        icon: 'img/big-pin.svg'
    });
}

function toggleMenu () {
    var mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('opened');
}