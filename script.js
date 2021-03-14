mapboxgl.accessToken = 'pk.eyJ1Ijoicm9pZnIzMDA3IiwiYSI6ImNra2xoeWNtazI1eWEyb243bnFkOXNkcnQifQ.V6ePl8WjiBtuQsQoASO1_A';

navigator.geolocation.getCurrentPosition(successLocation, errorlocation, {enableHighAccuracy: true})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])

}

function errorlocation() {
    setupMap([-2.24, 53.48])
  
}


function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15

    })
    map.addControl(new mapboxgl.NavigationControl());

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
        
      });
      
      
      map.addControl(directions, 'top-left');
}
