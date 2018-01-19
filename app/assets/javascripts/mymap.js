var var_map;

var PlazaMoreno = {lat: -34.922252, lng:  -57.954886};

var estaciones = [
 {lat: 34.915298, lng:-57.947805},
 {lat: -34.915162, lng: -57.947893},
 {lat: -34.920194, lng: -57.928461}
];

var markers = [];

// Windows Info
  var contentString = '<div id="content">'+
   '<div id="siteNotice">'+
   '</div>'+
   '<h1 id="firstHeading" class="firstHeading">Plaza Moreno</h1>'+
   '<div id="bodyContent">'+
   '<p><b>Estado:</b> Operativa </p>'+
   '<p><b>Cantidad de bicicletas:</b> 30</p>'+
   '<p><b>Estacionamientos disponibles:</b>12 </p>'+
   '</div></div>';


 function CenterControl(controlDiv, var_map) {

     // Set CSS for the control border.
     var controlUI = document.createElement('div');
     controlUI.style.backgroundColor = '#fff';
     controlUI.style.border = '2px solid #fff';
     controlUI.style.borderRadius = '3px';
     controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
     controlUI.style.cursor = 'pointer';
     controlUI.style.marginBottom = '22px';
     controlUI.style.textAlign = 'center';
     controlUI.title = 'Click para centrar el mapa';
     controlDiv.appendChild(controlUI);

     // Set CSS for the control interior.
     var controlText = document.createElement('div');
     controlText.style.color = 'rgb(25,25,25)';
     controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
     controlText.style.fontSize = '16px';
     controlText.style.lineHeight = '38px';
     controlText.style.paddingLeft = '5px';
     controlText.style.paddingRight = '5px';
     controlText.innerHTML = 'Centrar mapa';
     controlUI.appendChild(controlText);

     // Setup the click event listeners: simply set the map to PlazaMoreno.
     controlUI.addEventListener('click', function() {
       var_map.setCenter(PlazaMoreno);
       var_map.setZoom(14);
     });


   }


   function initMap() {
      // InfoWindow
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
      // end InfoWindow

        var var_mapoptions = {
          center: PlazaMoreno,
          fullscreenControl:true,
          zoom: 14
        };
        // Definimos el mapa con las opciones
       var_map = new google.maps.Map(document.getElementById("map-container"),
       var_mapoptions);

       // CEntar el mapa despues de crearlo

       // Create the DIV to hold the control and call the CenterControl()
       // constructor passing in this DIV.
       var centerControlDiv = document.createElement('div');
       var centerControl = new CenterControl(centerControlDiv, var_map);

       centerControlDiv.index = 1;

       var_map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
       // End centar el mapa

       //Creamos un marcador
       var var_marker = new google.maps.Marker({
           position: PlazaMoreno,
           map: var_map,
           title: "Plaza Moreno"
       });

       //Agregar marrcador al mapa
       var_marker.setMap(var_map);
               google.maps.event.addDomListener(window, 'load', initMap);

      // Cuando se de click al marcador central se abre la ventana de informacion
       var_marker.addListener('click', function() {
       infowindow.open(var_map, var_marker);
     });

     function drop() {
       for (var i = 0; i < estaciones.length; i++) {
         addMarkerWithTimeout(estaciones[i], i * 100);
       }
     }


      function addMarkerWithTimeout(position, timeout) {
      window.setTimeout(function() {
        markers.push(new google.maps.Marker({
          position: position,
          map: var_map,
          animation: google.maps.Animation.DROP
        }));
      }, timeout);
    }

    drop();




   }
