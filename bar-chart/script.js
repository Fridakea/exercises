const list = document.querySelector("ul");

window.addEventListener("DOMContentLoaded", startAnimation);

function startAnimation() {
    setInterval(() => {
        // Tjekker antallet af children i list(ul) elementet.
        const count = list.children.length;
        console.log(count);

        // Hvis antallet af children i list(ul) elementet er større end eller lig med 20, så fjerner den det første children element i list(ul).
        if (count >= 20 ) {
            list.removeChild(list.children[0]);
        }

        // Laver et random tal mellem 1 og 100 og afrunder. Skal vi bruge til at give bar charten en random højde.
        const randomNumber = Math.round(Math.random()*100);

        // Laver et nyt li element som en del af setInterval. Hvert li element indsættes som appendChild i list(ul) elementet og med styling som giver hver li en random højde.
        // SetInterval gør så samtidig at dette gentages hver 1000 milisekundt, som svarer til hvert sekundt.
        const li = document.createElement("li");
        li.style.setProperty("--height", randomNumber);
        list.appendChild(li);
    }, 1000);
}