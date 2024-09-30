const list = document.querySelector("ul");

window.addEventListener("DOMContentLoaded", startAnimation);

function startAnimation() {
    setInterval(() => {
        const count = list.children.length;
        console.log(count);

        if (count >= 20 ) {
            list.removeChild(list.children[0]);
        }

        const randomNumber = Math.round(Math.random()*100);

        const li = document.createElement("li");
        li.style.setProperty("--height", randomNumber);
        list.appendChild(li);
    }, 1000);
}