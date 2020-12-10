$(document).ready(function () {
  //pętla do tworzenia listy ofert

  /*
	for (var licznik in geojsonFeature.features){
		$('#oferty')
		.append('<div id="oferta '+licznik+'" class="col">'
						+'<img src='
							+geojsonFeature.features[licznik].properties.miniaturka+' alt="...">'
						+'<div id="tekst '+licznik+'"><h3>'
							+geojsonFeature.features[licznik].properties.description.trescNaglowka
						+'</h3></p>'
							+geojsonFeature.features[licznik].properties.description.trescOgloszenia
						+'</p>' 
							+geojsonFeature.features[licznik].properties.description.wartosc1
							+geojsonFeature.features[licznik].properties.description.wartosc2
						+'</div>'
				+'</div>'
		)
	};			*/
  //wczytywanie mapy

  //deklaracja map podkładowych
  var lyrOSM = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png"),
    lyrORTO = L.tileLayer.wms(
      "http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer",
      {
        layers: "Raster",
        format: "image/png",
        transparent: "true",
        version: "1.1.1",
      }
    ),
    lyrSozo = L.tileLayer.wms(
      "http://mapy.geoportal.gov.pl/wss/service/img/guest/SOZO/MapServer/WMSServer",
      {
        layers: "Raster",
        format: "image/png",
        transparent: "true",
        version: "1.1.1",
      }
    ),
    // przypisuję do zmiennej mymap obiekt mapa z klasy map
    mymap = L.map("mymap", {
      center: [52.3289, 21.0],
      zoom: 10,
      zoomControl: false,
      attributionControl: false,
    });

  mymap.addLayer(lyrOSM);

  var baseMaps = {
    Openstreetmap: lyrOSM,
    Ortofotomapa: lyrORTO,
  };

  //polecenie dodania ikonki do wyboru danych
  L.control.layers(baseMaps).addTo(mymap);

  //dodaje skale
  L.control.scale({ position: "bottomright", imperial: false, maxWidth: 200}).addTo(mymap);

 

  L.control.scalefactor({ position: "bottomright", imperial: false, width: 200}).addTo(mymap);

  L.control.mouseCoordinate({utm:true,utmref:true,gps:true,gpsLong:true, position: "bottomleft"}).addTo(mymap);

  //dodawanie wsp kursora
  //L.control.mousePosition({position:'bottomrleft', imperial:false, maxWidth:200}).addTo(map);

  //dodaję własnego markera
  /* var marker;
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
        '<button class="open-popup" data-popup="#popup2">Open popup 2</button>'
			  +'<br>Współrzędne geograficzne:<br>'
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


  fetch(
    "http://localhost:8080/geoserver/aaa/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=aaa%3Ajedn&maxFeatures=50&outputFormat=application%2Fjson"
  )
    .then((response) => response.json())
    .then((data) =>{
      L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {
            icon: L.icon({
              // modify icon
              iconUrl: "img/" + feature.properties.symbol + ".png",
              //iconSize: [40, 34],
            }),
          });
        },
	  }).addTo(mymap);
	 console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>",data);}
    );
  //console.log();
  //pętla do tworzenia listy ofert
  //var a = fetch ("http://localhost:8080/geoserver/aaa/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=aaa%3Ajedn&maxFeatures=50&outputFormat=application%2Fjson").then(response=>response.json()).then(data=>L.geoJSON(data));
  //console.log(a);
  for (var licznik in geojsonFeature.features) {
    $("#oferty").append(
      '<div id="oferta ' +
        licznik +
        '" class="col">' +
        "<img src=" +
        geojsonFeature.features[licznik].properties.miniaturka +
        ' alt="...">' +
        '<div id="tekst ' +
        licznik +
        '"><h3>' +
        geojsonFeature.features[licznik].properties.description.trescNaglowka +
        "</h3></p>" +
        geojsonFeature.features[licznik].properties.description
          .trescOgloszenia +
        "</p>" +
        geojsonFeature.features[licznik].properties.description.wartosc1 +
        geojsonFeature.features[licznik].properties.description.wartosc2 +
        "</div>" +
        "</div>"
    );
  }

  $(".col[id^='oferta']").mouseover(function () {
    var str = parseInt(this.id[7]);
    marker = L.geoJSON(geojsonFeature.features[str], {
      pointToLayer: function (feature, latlng) {
        //wstawia marker w postaci okręgu
        return L.marker(latlng, {
          icon: L.icon({
            iconUrl: feature.properties.symbol_sign.iconUrl,
            iconRetinaUrl: feature.properties.symbol_sign.iconRetinaUrl,
            iconSize: feature.properties.symbol_sign.iconSize,
            iconAnchor: feature.properties.symbol_sign.iconAnchor,
            popupAnchor: feature.properties.symbol_sign.popupAnchor,
            shadowUrl: feature.properties.symbol_sign.shadowUrl,
            shadowSize: feature.properties.symbol_sign.shadowSize,
            shadowAnchor: feature.properties.symbol_sign.shadowAnchor,
            opacity: 1,
            className: "pulse",
          }),
        });
      },
    }).addTo(mymap);

    var dzisiaj = new Date();
    marker
      .bindPopup(
        dzisiaj.getFullYear() +
          "." +
          dzisiaj.getMonth() +
          "." +
          dzisiaj.getDate() +
          " - " +
          dzisiaj.getHours() +
          ":" +
          dzisiaj.getMinutes() +
          ":" +
          dzisiaj.getSeconds() +
          "<br>" +
          "<strong>" +
          geojsonFeature.features[str].properties.description.trescNaglowka +
          '</strong>"<br>"' +
          geojsonFeature.features[str].properties.description.trescOgloszenia +
          "<br>"
      )
      .openPopup();
  });
  $(".col[id^='oferta']").mouseout(function () {
    //alert( "Handler for .click() called." );
    marker.closePopup();
    mymap.removeLayer(marker);
  });
});
