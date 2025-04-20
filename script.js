const container = document.querySelector("div.container");
const setSquare = document.querySelector("button.set-squares");
const body = document.querySelector("body");

function makeTheGrid(size = 16, sketchpad = container) {
    for (let i = 0; i < size; i++) {
        const subDiv = document.createElement("div");
        subDiv.setAttribute("class", "row");
        subDiv.setAttribute("style",
            "display: flex; width: 100%; outline: 1px solid white;");
        subDiv.style.height = (650/size)+'px';
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", "unit");
            square.setAttribute("style",
                "flex: 1; height: 100%; aspect-ratio: 1/1; background-color: rgb(200,200,200); outline: 1px solid white");
            square.style.width = (650/size)+'px';
            square.addEventListener("mouseover", (event) => {
            square.style.backgroundColor = "rgb(100,100,100)";
            });
            // square.textContent = `${i+1},${j+1}`;
            subDiv.appendChild(square);
        }
        sketchpad.appendChild(subDiv);
    }
}

makeTheGrid();

setSquare.addEventListener("click", () => {
    let userSize = Number(prompt("Enter grid-edge size"));
    if (userSize === null) makeTheGrid();
    if (userSize === 0) {
        alert("Grid size cannot be zero!")
    } else if (userSize > 100) {
        alert("Grid too big! Maximum size is 100.")
    } else {
        document.querySelector(".container").remove();
        const newContainer = document.createElement("div");
        newContainer.setAttribute("class", "container");
        newContainer.setAttribute("style", "height: 650px; width: 650px");
        body.appendChild(newContainer);
        makeTheGrid(userSize, newContainer);
    }
});