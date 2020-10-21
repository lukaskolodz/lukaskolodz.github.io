$(document).ready(function() {
    var mymap= L.map('mapa',{center:[52.23,21.00],zoom:10});
    var lyrOSM=L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    mymap.addLayer(lyrOSM);
    
    /*tworzenie zmiennej w formie własnej ikonki*/
    var myicon = L.icon({
        iconUrl: 'iconb.png',
        iconSize: [20,34],
        iconAnchor: [10,34],
        popupAnchor: [0,-34],
    })

  var formularz = '<select id="jednostka" name="jednostka"><option value="nie rozpoznano">Nie rozpoznano</option><option value="czołg">Czołg</option><option value="traktor">Traktor</option></select><br>' ;

 
    /*POBRANIE DANYCH Z BAZY*/
	$('#pobierz').click(function() { /*Zdefiniowanie zdarzenia inicjującego 
    - kliknięcie przycisku pobierz*/
     
     	$.ajax({
            type:"GET", /*Informacja o tym, że dane będą pobierane*/
            url:"read.php", /*Informacja, o tym jaki plik będzie przy tym wykorzystywany*/
            contentType:"application/json; charset=utf-8", /*Informacja o formacie transferu danych*/
            dataType:'json', /*Informacja o formacie transferu danych*/
                /*Działania wykonywane w przypadku sukcesu*/
            success: function(json) { /*Funkcja zawiera parametr*/
                console.log(" wczytano poprawnie")
                    /*Pętla typu for...in języka Javascript na danych w formacie JSON*/
                   /* for (var klucz in json)
                        {
                            var wiersz = json[klucz];  /*Kolejne przebiegi pętli wstawiają nowy klucz*/     
                     /*       var id = wiersz[0];
                            var nazwakraju = wiersz[1];
                             
                            /*Ustalenie sposobu wyświetlania pobranych danych w bloku div*/
                    /*        $(L.marker([]))
                            .marker(event.latlng,{icon: myicon})
							.addTo(mymap)
                        }     													*/
                },
                 
                 
                /*Działania wykonywane w przypadku błędu*/
             error: function(blad) {
                    alert( "Wystąpił błąd");
                    console.log(blad); /*Funkcja wyświetlająca informacje 
                    o ewentualnym błędzie w konsoli przeglądarki*/
                	}
       	 		});
	     };
    	
 
   
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
        
		
		
        $.ajax({
            url: "insert.php",
            type: 'POST', //deklaracja sposobu przekazywania zmiennych 

            data: { lat: lat, lng: lng,}, //opis argumentów do przekazania musi być zgodny z json

            success: function(msg){
				console.log('Server response :\n '+msg); //argument funkcji to odpowiedz serwera i docelowo ma isc do console log żeby odczytać komunikat
			},
            error: function (ajaxContext){
            	console.log(ajaxContext.responseText); //odpowiedz ma isc do console log 
            }
        });
            
        });
		
  /* połączenie z bazą danych */
  $.ajax({
    type:'POST',
    url: 'connect.php',
    success: function(){
        console.log("udało Połączyc się z bd")
    },
    error: function(err_info){
		  console.log('Błąd podczas pracy skryptu');
		  console.log(err_info);
      },
    });
  
    
});     
    
   

   
/*dodac skale, zmienić ikone, dodać*/