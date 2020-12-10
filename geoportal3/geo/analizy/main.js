$(document).ready(function () {
				
  //wczytywanie mapy

    //deklaracja map podkładowych
    var lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'),
        lyrORTO = L.tileLayer.wms("http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer", {layers: "Raster", format: 'image/png', transparent : 'true', version : '1.1.1'}),    
        lyrSozo = L.tileLayer.wms("http://mapy.geoportal.gov.pl/wss/service/img/guest/SOZO/MapServer/WMSServer", {layers: "Raster", format: 'image/png', transparent : 'true', version : '1.1.1'}),
        rzeki_linie = L.tileLayer.wms("http://localhost:8080/geoserver/aaa/wms",{layers: "aaa:LBH140", format: 'image/png', transparent : 'true', version : '1.1.1'}),
		rzeki_obszary = L.tileLayer.wms("http://localhost:8080/geoserver/aaa/wms",{layers: "aaa:ABH140", format: 'image/png', transparent : 'true', version : '1.1.1'}),
		lasy = L.tileLayer.wms("http://localhost:8080/geoserver/aaa/wms",{layers: "aaa:AEC015", format: 'image/png', transparent : 'true', version : '1.1.1'}),
		ukształtowanie_terenu = L.tileLayer.wms("http://localhost:8080/geoserver/aaa/wms",{layers: "aaa:geotiff_coverage", format: 'image/png', transparent : 'true', version : '1.1.1'}),
		// przypisuję do zmiennej mymap obiekt mapa z klasy map
        mymap = L.map('mymap', {center: [52.3289, 21.0], zoom: 10, zoomControl: false, attributionControl: false});

    mymap.addLayer(lyrOSM);
        
    var baseMaps = {
        "Openstreetmap": lyrOSM,
        "Ortofotomapa": lyrORTO,       
	  };
	  
	  var overlays = {
		"Rzeki linie" :rzeki_linie, 
		"Rzeki obszary" :rzeki_obszary,
		"Lasy" :lasy,
		"Ukształtowanie_terenu" :ukształtowanie_terenu,
		
	};
    
    //polecenie dodania ikonki do wyboru danych
    L.control.layers(baseMaps, overlays).addTo(mymap);

    //dodaje skale
	L.control.scale({position:'bottomright', imperial:false, maxWidth:200}).addTo(mymap);
	
	L.control.scalefactor({ position: "bottomright", imperial: false, width: 200}).addTo(mymap);

    L.control.mouseCoordinate({utm:true,utmref:true,gps:true,gpsLong:true, position: "bottomleft"}).addTo(mymap);


/*
    //dodaję własnego markera
    var marker;
 	var myLayer = L.geoJSON(geojsonFeature, 
		{
			pointToLayer: function (feature, latlng){
				marker = L.marker(latlng, {icon:L.icon({
												iconUrl: feature.properties.symbol_sign.iconUrl,
											    iconRetinaUrl: feature.properties.symbol_sign.iconRetinaUrl,
											    iconSize:    feature.properties.symbol_sign.iconSize,
											    iconAnchor:  feature.properties.symbol_sign.iconAnchor,
											    popupAnchor: feature.properties.symbol_sign.popupAnchor,
												shadowUrl: feature.properties.symbol_sign.shadowUrl,
											    shadowSize:  feature.properties.symbol_sign.shadowSize,
											    shadowAnchor:  feature.properties.symbol_sign.shadowAnchor,
											    opacity: 1,
												})
											}
									);
				marker.setOpacity(0.6);
				return marker;
			}
		}
		).addTo(mymap);*/
 	//koniec dodawanie markerów
/*
 	 $( ".col[id^='oferta']" ).mouseover(function() {
 	 		var str=parseInt(this.id[7]);
    		marker = L.geoJSON(geojsonFeature.features[str], {
		 		pointToLayer: function (feature, latlng) 
		 		{
		 			//wstawia marker w postaci okręgu
		 			return L.marker(latlng, {icon:L.icon({
												iconUrl: feature.properties.symbol_sign.iconUrl,
											    iconRetinaUrl: feature.properties.symbol_sign.iconRetinaUrl,
											    iconSize:    feature.properties.symbol_sign.iconSize,
											    iconAnchor:  feature.properties.symbol_sign.iconAnchor,
											    popupAnchor: feature.properties.symbol_sign.popupAnchor,
											    shadowUrl: feature.properties.symbol_sign.shadowUrl,
											    shadowSize:  feature.properties.symbol_sign.shadowSize,
											    shadowAnchor:  feature.properties.symbol_sign.shadowAnchor,
											    opacity: 1,
											    className: 'pulse'
				})});
    			}
    		}
    		).addTo(mymap);

    		var dzisiaj = new Date();
		 	marker.bindPopup(dzisiaj.getFullYear()
		 						+ "." +dzisiaj.getMonth()
		 						+ "." + dzisiaj.getDate() 
		 						+ " - " + dzisiaj.getHours() 
		 						+ ":" + dzisiaj.getMinutes() 
		 						+ ":" + dzisiaj.getSeconds()+"<br>"
		 						+'<strong>'+geojsonFeature.features[str].properties.description.trescNaglowka+'</strong>"<br>"'
		 						+geojsonFeature.features[str].properties.description.trescOgloszenia+"<br>").openPopup();
		 			});
    $( ".col[id^='oferta']" ).mouseout(function() {
		 	//alert( "Handler for .click() called." );
		 	marker.closePopup();
		 	mymap.removeLayer(marker)
		});*/
});