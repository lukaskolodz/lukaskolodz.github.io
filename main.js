
$(document).ready(function(){
    var mymap = L.map('mapa',{center:[52.1,21.0],zoom:10});
    var lyrOSM=L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'); 
    mymap.addLayer(lyrOSM);
    
    /*tworzenie zmiennej w formie własnej ikonki*/
    var myicon = L.icon({
        iconUrl: 'https://as1.ftcdn.net/jpg/02/80/87/48/500_F_280874872_tVNxGcKAMB3s1rVuNtcB8MeloTb0PV28.jpg',
        iconSize: [50,50],
        iconAnchor: [25,25],
        popupAnchor: [0,0],
    })
    
  var formularz = '<select id="cars" name="cars"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option> ' 
/*funkcja która będzie po kliknięciu wypisywała tekst*/
    mymap.on('click', function(event){
        console.log(event.latlng);
        var opcja = '';
       var marker = L
       .marker(event.latlng,{icon: myicon})
       .addTo(mymap)
       .bindPopup(formularz+
           'Współrzędne geograficzne:<br>'
                  + event.latlng.lng.toFixed(3)
                  +' E'
                  +'<br>'
                  +event.latlng.lat.toFixed(3)
                  +' N')
       .openPopup();
    
        
       
    })
   
});
    
/*dodac skale, zmienić ikone, dodać*/