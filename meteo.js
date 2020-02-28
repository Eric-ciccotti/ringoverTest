
window.addEventListener('load', () => {

    let mapContainer = document.querySelector('#map');
    let JSONFile = null;

    //temporary function to get mouse coordinates
    mapContainer.addEventListener('click', () => {
        addPicker(event.x, event.y);
        init();
        console.log(`mouse position: ${event.x}:${event.y}`);
    })

    // function which parse the json file  
    const init = () => {
        loadJSON((response) => {
            JSONFile = JSON.parse(response);
            console.log(JSONFile);
        });
    }

    //function which make a picker 
    const addPicker = (x, y) => {
        let locationPicker = document.createElement("img");
        locationPicker.setAttribute('class', 'location_picker');
        locationPicker.src = "./location_picker.png";

        let coordinateX = x;
        let coordinateY = y;

        locationPicker.style.left = coordinateX + "px";
        locationPicker.style.top = coordinateY + "px";


      

        // test pour voir si il est possible d'ajouter un picker
        mapContainer.appendChild(locationPicker);
        console.log('added!');

        // if (coordinateX == 324.375 && coordinateY == 411.875) {
        //     console.log(JSONFile.meteo.prevision[0].ville[0]);
        //     object.addEventListener("mouseover", myScript);
        // }

        /* 
        SI mon picker a les coordonnes X et Y 
        ALORS possibilité de faire un MOUSEOVER dessus
        qui va afficher les informations en relation avec son ID
        dans l'encadré à droite "informations"
        */
    }

    //Test avec l'ajout du picker pour Cilaos
    addPicker(324.375, 411.875);


    /* l'idée aurait été de créer des Objet pickers avec les coordonnées de la souris
    que j'aurais pris avec ma mini fonction.

    Boucler a travers le fichier JSON et tester à chaque fois SI les
    coordoonées X,Y de la souris correspondent à un ID , dans ce cas renvoyer les informations
    qui seront affichées dans l'encadré information si on fait un MOUSEOVER sur le picker. 
    
    Désolé pour le code qui pique les yeux */
});



