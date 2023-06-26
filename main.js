// when the window is loaded, fetch a random advice immediatly 
// when click on the GamepadButton, fetch a new advice

//make sure it's responsive on different sizes of screen


const adviceContainer = document.querySelector("#advice")
const btn = document.querySelector("#btn")

function fetchNewAdvice(result) {
    return (
        fetch("https://api.adviceslip.com/advice")
            .then(res => res.json())
            .then(result => {
                adviceContainer.innerHTML = result.slip["advice"]
            })
    )
}
window.addEventListener("load", (event) => fetchNewAdvice());

btn.addEventListener("click", () => fetchNewAdvice())

