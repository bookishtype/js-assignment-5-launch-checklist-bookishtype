// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
                // <h2>Mission Destination</h2>
                // <ol>
                //     <li>Name: </li>
                //     <li>Diameter: </li>
                //     <li>Star: ${star}</li>
                //     <li>Distance from Earth: </li>
                //     <li>Number of Moons: </li>
                // </ol>
                // <img src="">
   
}

function validateInput(testInput) {
    let testNum = Number(testInput);
    if(testInput === "") {
        return "Empty";
    } else if(isNaN(testInput)) {
        return "Not a Number";
    } else if(isNaN(testInput)=== false){
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoMass = document.getElementById("cargoMass");
   let launchStatus = document.getElementById("launchStatus");


   if (validateInput(pilot) === "Empty" ||
   validateInput(copilot)=== "Empty" ||
   validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty" ) {
        alert("All fields are required!");

    } else if(validateInput(pilot) === "Is a Number" ||
    validateInput(copilot)=== "Is a Number" ||
    validateInput(fuelLevel) === "Not a Number" ||
     validateInput(cargoLevel) === "Not a Number" ) {
        alert("Please enter a valid value!");
     } else{
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            if(fuelLevel < 10000 && cargoLevel <= 10000){
                fuelStatus.innerHTML = "Fuel level too low for launch";
                cargoMass.innerHTML = "Cargo mass low enough for launch"
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "rgb(199, 37, 78)";  
            } else if(fuelLevel >= 10000 && cargoLevel <= 10000) {
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoMass.innerHTML = "Cargo mass low enough for launch";
                launchStatus.innerHTML = "Shuttle is Ready for Launch";
                launchStatus.style.color = "rgb(65, 159, 106)";
            } else if(fuelLevel < 10000 && cargoLevel > 10000) {
                fuelStatus.innerHTML = "Fuel level too low for launch";
                cargoMass.innerHTML = "Cargo mass too heavy for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "rgb(199, 37, 78)";
            } else if(cargoLevel > 10000 && fuelLevel >= 10000) {
                cargoMass.innerHTML = "Cargo mass too heavy for launch";
                fuelStatus.innerHTML = "Fuel level high enough for launch"
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "rgb(199, 37, 78)";
    
            };
        };
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
