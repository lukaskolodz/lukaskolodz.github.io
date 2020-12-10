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
		  iconUrl: 'img/SUGPU-------.png', //wstawic grafike nieznanego obiektu, dopracować icon anchor i popup anchor
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


	  	function nazwaFunkcji(arg){
			  switch (expr)
			  {
				case "zmech":
					var geojsonMarkerOptions = {
						iconUrl: 'img/SFGPUCI----D.png',
						iconSize: [20,34],
						iconAnchor: [10,34],
					  }; 
					  return geojsonMarkerOptions;
				case "panc":
					var geojsonMarkerOptions = {
						iconUrl: 'img/SFGPUCA----D.png',
						iconSize: [20,34],
						iconAnchor: [10,34],
					  }; 
					return geojsonMarkerOptions;
//c
			/*var geojsonMarkerOptions = {
				iconUrl: 'img/SUGPU-------.png',
        		iconSize: [20,34],
        		iconAnchor: [10,34],
			};*/
			  return geojsonMarkerOptions;
		  }
		  }

	fetch ("http://localhost:8080/geoserver/aaa/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=aaa%3Aaa&maxFeatures=50&outputFormat=application%2Fjson")
	  .then(response=>response.json())
	  .then(data=>L.geoJSON(data,{ 
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon:L.icon({
					// modify icon
					iconUrl: 'img/'+feature.properties.symbol+'.png',
					iconSize: [40,34],
					})
				});
			}
		}).addTo(mymap));
});		
		
		/*{
			pointToLayer: function (feature, latlng) {
				
				return L.marker(latlng, {icon:function(feature){
					switch(feature.properties.symbol)
					{
						case "zmech":
							return {myicon};
					}
				}}); //w tym miejscu gdzie jest "geojsonMarkerOptions(feature.propeties.nazwaZnaku){...w wyniku pracy tej funkcji ma zostać zwrócona stylizacja markter}"
			}*/
			




/**
 * 1.{zmień kółko na własną ikonę }
 * 2.{zrób tak żeby funkcja zwracała ikone na podstawie dostarczonych jej danych (feature.properties.nazwa)} ikone
 *  * 
 */