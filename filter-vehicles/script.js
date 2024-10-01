const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", " Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {

    // Hvis køretøjet ikke har en værdi så skal den have teksten "Ikke angivet"
    const notKnownValue = "Ikke angivet"

    // Hvis køretøjet ikke har nogle stops, så skriver den stop teksten
    let stopText = each.stops;
    if(each.stops === undefined) stopText = "Ingen stop"

    tbodyPointer.innerHTML += `<tr>
    <td>${each.type}</td>
    <td>${each.fuel ? each.fuel : notKnownValue}</td>
    <td>${each.passengers}</td> 
    <td>${stopText}</td>
    <td>${each.ownedBy ? each.ownedBy : notKnownValue}</td>
    <td>${each.isElectric ? each.isElectric : notKnownValue}</td>
    <td>${each.isTandem ? each.isTandem : notKnownValue}</td>
    </tr>`;
  });

}

filters(vehicles);

// Filteringer
function filters() {
  document.getElementById("filter-electric").addEventListener("mousedown", () => {
    tbodyPointer.innerHTML = "";
    showTheseVehicles(vehicles.filter(isElectricVehicles));
  });

  document.getElementById("filter-seats").addEventListener("mousedown", () => {
    tbodyPointer.innerHTML = "";
    showTheseVehicles(vehicles.filter(hasMoreThanTwoSeats));
  });

  document.getElementById("filter-jonas").addEventListener("mousedown", () => {
    tbodyPointer.innerHTML = "";
    showTheseVehicles(vehicles.filter(isElectricAndOwendByJonas));
  })

  document.getElementById("filter-ryebread").addEventListener("mousedown", () => {
    tbodyPointer.innerHTML = "";
    showTheseVehicles(vehicles.filter(isRyebreadVehiclesAndHasMoreThanOneSeat));
  })

  document.getElementById("no-filter").addEventListener("mousedown", () => {
    showTheseVehicles(vehicles);
  })
}



  // El drevne køretøjer
function isElectricVehicles(vehicle) {
  return vehicle.isElectric === true;
}
// console.log("El drevne køretøjer:", vehicles.filter(isElectricVehicles));

  // Alle køretøjer med mere end 2 sæder
function hasMoreThanTwoSeats(vehicle) {
  return vehicle.passengers > 2;
}
// console.log("Køretøj med mere end 2 sæder:", vehicles.filter(hasMoreThanTwoSeats));

  // Alle el drevne køretøjer ejet af Jonas
function isElectricAndOwendByJonas(vehicle) {
  return vehicle.ownedBy === "Jonas" && vehicle.isElectric === true;
}
// console.log("Alle eldrevne køretøjer ejet af Jonas:", vehicles.filter(isElectricAndOwendByJonas))

  // Alle rugbrøds drevne køretøjer med plads til mere end 1
function isRyebreadVehiclesAndHasMoreThanOneSeat(vehicle) {
  return vehicle.fuel === "Rugbrød" && vehicle.passengers > 0;
}
// console.log("Alle rugbrøds drevne køretøjer med plads til mere end 1:", vehicles.filter(isRyebreadVehiclesAndHasMoreThanOneSeat));