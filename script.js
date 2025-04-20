const container = document.querySelector("div.container");

function makeTheGrid() {
    for (let i = 0; i < 16; i++) {
        const subDiv = document.createElement("div");
        subDiv.setAttribute("class", "row");
        subDiv.setAttribute("style",
            "display: flex; height: 6.25%; width: 100%; background-color: rgb(200,200,200); outline: 1px solid white;")
        for (let j = 0; j < 16; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", "unit");
            square.setAttribute("style",
                "flex: 1; height: 100%; width: 6.25%; aspect-ratio: 1/1; outline: 1px solid white");
            subDiv.appendChild(square);
        }
        container.appendChild(subDiv);
    }
}

makeTheGrid();