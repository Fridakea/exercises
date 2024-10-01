const animals = [
    {
        name: "Manu",
        type: "cat",
    }, 
    {
        name: "Mia",
        type: "cat",
    },
    {
        name: "Mona",
        type: "dog",
    },
    {
        name: "Freddy",
        type: "dog",
    },
];

// Funktion som beholder objekterne i arrayet, hvis typen af animal er kat. Når man bruger funktionen til at filterer animals, retunere den derfor kun de dyr i arrayet som er katte.
function isCat(animal) {
    if (animal.type === "cat") {
        return true;
    } else {
        return false;
    }
}

const onlyCats = animals.filter(isCat);
console.log("onlyCats:", onlyCats);


// Funktion som beholder objekterne i arrayet, hvis typen af animal er kat. Når man bruger funktionen til at filterer animals, retunere den derfor kun de dyr i arrayet som er katte.
function isDog(animal) {
    if (animal.type === "dog") {
        return true;
    } else {
        return false;
    }
}

const onlyDogs = animals.filter(isDog);
console.log("onlyDogs:", onlyDogs);


function isDog2(animal) {
    return animal.type === "dog";
}

// Definer funktionerne all og none som retunerer henholdsvis true eller false, og dermed enten beholder alle objekterne i arrayet eller retunere et tomt array
function all(animal) {
    return true;
}

function none(animal) {
    return false;
}

console.log("all:", animals.filter(all));
console.log("none:", animals.filter(none));