window.onload = () => {
      if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                  var latitude = position.coords.latitude;
                  var longitude = position.coords.longitude;
                  //document.write("Latitude: " + latitude + "<br>Longitude: " + longitude);
                  
                  // Create an empty array to store the coordinates
                  var coordinates = [];

                  // Generate three random coordinates within 100 feet
                  for (var i = 0; i < 3; i++) {
                        var newLatitude = latitude + (Math.random() - 0.5) * 0.001;
                        var newLongitude = longitude + (Math.random() - 0.5) * 0.001;
                        coordinates.push({lat: newLatitude, lng: newLongitude});
                        <!-- document.write("Latitude: " + coordinates[i].lat + "<br>Longitude: " + coordinates[i].lng + "<br><br>"); -->
                  }
            });
      }
      
      else {
            document.write("Geolocation is not supported by this browser.");
      }
            
      let places = staticLoadPlaces(); 
     <!-- let places = dynamicLoadPlaces(); -->
     renderPlaces(places);
};

function dynamicLoadPlaces() {
     return [
         <!-- 0 -->
       {
            name: 'Chest',
            location: {
                lat: coordinates[0].lat,
                lng: coordinates[0].lng
            }
       },
         <!-- 1 -->
       {
            name: 'Chest',
            location: {
                lat: coordinates[1].lat,
                lng: coordinates[1].lng
            }
       },
          <!-- 2 --> 
       {
            name: 'Chest',
            location: {
                lat: coordinates[2].lat,
                lng: coordinates[2].lng
            }
       }
    ];
}

function staticLoadPlaces() {
     return [
         <!-- Orca -->
       {
            name: 'Chest',
            location: {
                lat: 40.570595,
                lng: -111.894800
            }
       },
         <!-- Aliz -->
       {
            name: 'Chest',
            location: {
                lat: 40.75627184735022,
                lng: -73.9917137018502
            }
       },
          <!-- Danp --> 
       {
            name: 'Chest',
            location: {
                lat: 40.219370019120674,
                lng: -111.67371251693515
            }
       },
         <!-- Home --> 
       {
            name: 'Chest',
            location: {
                lat: 40.240943517167054,
                lng: -111.68076812366644
            }
       },
          <!-- Jube --> 
       {
            name: 'Chest',
            location: {
                lat: 40.53887093917758,
                lng: -111.85974962730612
            }
       },
          <!-- Riverside Park --> 
       {
            name: 'Chest',
            location: {
                lat: 40.2421777799449,
                lng: -111.6810686632882
            }
       },
          <!-- Fat Daddies --> 
       {
            name: 'Chest',
            location: {
                lat: 40.2335839917622,
                lng: -111.66269110571845
            }
       }
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('background', 'color: white');
        model.setAttribute('background', 'transparent: false');
        switch (0) {
             <!-- Chest --> 
             case 0:
                  model.setAttribute('gltf-model', './assets/chests/chest.gltf');
                  model.setAttribute('rotation', '0 180 0');
                  model.setAttribute('animation-mixer', '');
                  model.setAttribute('scale', '0.2 0.2 0.2');
                  break;
             <!-- Orca --> 
             case 1:
                  model.setAttribute('gltf-model', './assets/Orca.gltf');
                  model.setAttribute('rotation', '0 180 0');
                  model.setAttribute('animation-mixer', '');
                  model.setAttribute('scale', '0.2 0.2 0.2');
                  break;
        }

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
