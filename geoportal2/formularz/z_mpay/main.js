$(document).ready(function () {
			
  //wczytywanie mapy

    //deklaracja map podkładowych
    var lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'),
        lyrORTO = L.tileLayer.wms("http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer", {layers: "Raster", format: 'image/png', transparent : 'true', version : '1.1.1'}),    
        lyrSozo = L.tileLayer.wms("http://mapy.geoportal.gov.pl/wss/service/img/guest/SOZO/MapServer/WMSServer", {layers: "Raster", format: 'image/png', transparent : 'true', version : '1.1.1'}),
        
        // przypisuję do zmiennej mymap obiekt mapa z klasy map
        mymap = L.map('mymap', {center: [52.3289, 21.0], zoom: 10, zoomControl: false, attributionControl: false});

    mymap.addLayer(lyrOSM);
        
    var baseMaps = {
        "Openstreetmap": lyrOSM,
        "Ortofotomapa": lyrORTO,
        "Mapa Sozologiczna": lyrSozo        
      };
    
    //polecenie dodania ikonki do wyboru danych
    L.control.layers(baseMaps).addTo(mymap);

    //dodaje skale
    L.control.scale({position:'bottomright', imperial:false, maxWidth:200}).addTo(mymap);

        var myicon = L.icon({
        iconUrl: 'img/SFGPUCAT----.png', //wstawic grafike nieznanego obiektu, dopracować icon anchor i popup anchor
    
        iconAnchor: [25,35],
        popupAnchor: [0,-34],
    });

  var formularz = '<select id="jednostka" name="jednostka"><option value="nie rozpoznano">Nie rozpoznano</option><option value="czołg">Czołg</option><option value="traktor">Traktor</option></select><br>' ;
   
    
    mymap.on('click', function(event){
        console.log(event.latlng);
        var lng = event.latlng.lng.toFixed(3);
        var lat = event.latlng.lat.toFixed(3);
        var opcja = '';
        var marker = L
        .marker(event.latlng,{icon: myicon})
        .addTo(mymap)
        .bindPopup(
            'Współrzędne geograficzne:<br>'
                   + event.latlng.lng.toFixed(3)
                   +' E'
                   +'<br>'
                   +event.latlng.lat.toFixed(3)
                   +' N'
                   +'<br>'
                   +'JEDNOSTKA '
                   + formularz)
        .openPopup();
    });

 	 
});