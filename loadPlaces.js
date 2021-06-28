window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
     if(navigator.geolocation){  
		navigator.geolocation.getCurrentPosition()  
	}  
	else{  
          alert("Sorry! your browser is not supporting")  
     }

/* "Your current location is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " +    position.coords.longitude + ")";  */
     return [
       {
            name: 'Chest Rn 1',
            location: {
                lat: (position.coords.latitude + (Math.random() * (0.25 - -0.25) + 0.25))
                lng: (position.coords.longitude + (Math.random() * (0.25 - -0.25) + 0.25))
            }
       },
       {
            name: 'Chest Rn 2',
            location: {
                lat: (position.coords.latitude + (Math.random() * (0.25 - -0.25) + 0.25))
                lng: (position.coords.longitude + (Math.random() * (0.25 - -0.25) + 0.25))
            }
       },
       {
            name: 'Chest Rn 3',
            location: {
                lat: (position.coords.latitude + (Math.random() * (0.25 - -0.25) + 0.25))
                lng: (position.coords.longitude + (Math.random() * (0.25 - -0.25) + 0.25))
            }
       },
       {
            name: 'Chest Rn 4',
            location: {
                lat: (position.coords.latitude + (Math.random() * (0.25 - -0.25) + 0.25))
                lng: (position.coords.longitude + (Math.random() * (0.25 - -0.25) + 0.25))
            }
       },
       {
            name: 'Chest Rn 5',
            location: {
                lat: (position.coords.latitude + (Math.random() * (0.25 - -0.25) + 0.25))
                lng: (position.coords.longitude + (Math.random() * (0.25 - -0.25) + 0.25))
            }
       },

         <!-- Orca -->
       {
            name: 'Chest',
            location: {
                lat: 40.570595,
                lng: -111.894800
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
        switch (0) {
             <!-- Chest --> 
             case 0:
                  model.setAttribute('gltf-model', './assets/chests/chest.gltf');
                  model.setAttribute('rotation', '0 180 0');
                  model.setAttribute('animation-mixer', '');
                  model.setAttribute('scale', '0.5 0.5 0.5');
                  break;
             <!-- Orca --> 
             case 1:
                  model.setAttribute('gltf-model', './assets/Orca.gltf');
                  model.setAttribute('rotation', '0 180 0');
                  model.setAttribute('animation-mixer', '');
                  model.setAttribute('scale', '0.5 0.5 0.5');
                  break;
        }

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
