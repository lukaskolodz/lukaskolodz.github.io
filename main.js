$(document).ready(function(){
    var mymap = L.map('mapa',{center:[52.1,21.0],zoom:10});
    var lyrOSM=L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    mymap.addLayer(lyrOSM);
    
    /*tworzenie zmiennej w formie własnej ikonki*/
    var myicon = L.icon({
        iconUrl: 'iconb.png',
        iconSize: [20,34],
        iconAnchor: [10,34],
        popupAnchor: [0,-34],
    })
    
  
  var formularz = '<select id="jednostka" name="jednostka"><option value="nie rozpoznano">Nie rozpoznano</option><option value="czołg">Czołg</option><option value="traktor">Traktor</option></select><br>' 
    
    
/*funkcja która będzie po kliknięciu wypisywała tekst*/
    
    
    mymap.on('click', function(event){
        console.log(event.latlng);
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
                  +'Jednostka '
                  +  formularz)
       .openPopup();
       
    })
   
    
    
});
    
/*dodac skale, zmienić ikone, dodać*/