const people = ["Harry", "Ron", "Hermione"];
let result;

// De forskellige metoder:
// Push = Tilføjer et element til sidst i arrayet
// Pop = Fjerner det sidste element i arrayet
// Slice = Kan forkorte et array ved at man vælger hvilke elementer man vil beholde og så automatisk også hvilke man vil fjerne
// Splice = Kan fjerne elementer i et array og bytte det ud med et nyt --> Eller bare tilføje elementer til et bestemt sted i arrayet
// IndexOf = Angiver hvilken plads i arrayet som et bestemt element har


result = people.push("Draco"); 
    // Funktion som tilføjer et element til sidst i et array. I dette tilfælde er det Draco.
    // Push funktionen gør at det bliver retuneret som et tal, længden på arrayet.

result = people.pop();
    // Fjerner det sidste element i arrayet

result = people.push("Neville"); 
    // Funktion som tilføjer et element til sidst i et array. I dette tilfælde er det Neville.
    // Push funktionen gør at det bliver retuneret som et tal, længden på arrayet.

result = people.push("Luna"); 
    // Funktion som tilføjer et element til sidst i et array. I dette tilfælde er det Luna.
    // Push funktionen gør at det bliver retuneret som et tal, længden på arrayet.

result = people.slice(0,3);
    // Beholder elementer i arrayet som er mellem 0 og 3, men fjerner alle efter 3.

result = people.splice(1,0,"Cho");
    // Det første tal i splice funktionen definere hvor noget skal fjernes/indsættes, altså nr. 2 element i arrayet i dette tilfælde [1]
    // Det andet tal viser hvor mange elementer som skal slettes og det tredje viser det som skal indsættes. 
    // Ved at der står 0 i andet element i dette tilfælde, viser at intet slettes og den tredje del viser at "cho" indsættes

people[1] = "Ginny";
    // Bytter arrayets 2. element [1] ud med noget andet, i dette tilfælde Ginny

result = people.push("Fred", "George");
    // Funktion som tilføjer et element til sidst i et array. I dette tilfælde er det Neville.
    // Push funktionen gør at det bliver retuneret som et tal, længden på arrayet.
    // Der kan godt tilføjes flere elementer til et array

result = people.indexOf("Fred");
    // Viser hvilket nummer i arrayet som et bestemt element er. I dette tilfælde er det "Fred", som er nummer 7 [6] i arrayet

console.log(result);
console.log(people);