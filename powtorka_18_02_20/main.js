$(document).ready(function(){
    var mymap = L.map('mapa',{center:[52.1,21.0],zoom:10});
    var lyrOSM=L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    mymap.addLayer(lyrOSM);
    
    var mojaikona = L.icon({
        iconUrl: 'placeholder-filled-point.png',
        iconSize: [50,50],
        iconAnchor: [25,50],
        popupAnchor: [0,-55],
    })
    mymap.on('click',function(zdarzenie){
        console.log(zdarzenie.latlng);
        var marker = L
        .marker(zdarzenie.latlng,{icon:mojaikona})
        .addTo(mymap)
        .bindPopup('<b>Współrzędne geograficzne:</b><br>'+zdarzenie.latlng.lng.toFixed(2)+"E"+'<br>'+zdarzenie.latlng.lat.toFixed(2)+'N')
        .openPopup();
        
    })     

})