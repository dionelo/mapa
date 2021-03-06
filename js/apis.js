var mapa // Mapa que vamos a modificar

var posicionCentral = {lat: -38.0054771, lng: -57.54261059999999};
/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
    /* Modificá la variable mapa con el constructor Map().
    Tendrás que asignarle un valor de zoom y
    un centro igual a la variable posicionCentral. */

    var mapContainer = document.getElementById('map');

    var mapOptions = {
    	center: posicionCentral,
    	zoom: 15
    }
    
    mapa = new google.maps.Map(mapContainer, mapOptions);
    

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
