const page = document.querySelector('#page');
page.style.display = "flex";
page.style.flexDirection = "column";

const sketchSize = document.createElement('div');
sketchSize.textContent = "Select:";
sketchSize.style.alignSelf= "center";
page.appendChild(sketchSize);

const smallButton = document.createElement('button');
smallButton.classList.add("sizeButton");
smallButton.textContent = "Smaller";
sketchSize.appendChild(smallButton);

const sizeButton = document.createElement('button');
sizeButton.classList.add("sizeButton");
sizeButton.textContent = "Bigger";
sketchSize.appendChild(sizeButton);

const container = document.querySelector('#container');
container.style.border = '1px solid black';
container.style.width = '960px';
container.style.height = '960px';
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignSelf= "center";

page.appendChild(container);

const row = document.createElement('div')
row.classList.add("row");

let newAmount = 3;
let rowNum = 0;

smallButton.addEventListener("click", smallerGrid);
sketchSize.addEventListener("click", biggerGrid);

for(let i = 0; i < newAmount; i++){
    rowNum = ++rowNum;
    let row = document.createElement('div');
    row.setAttribute("id", "row");
    row.classList.add("row" + rowNum);
    row.style.border= '1px solid black';
    container.appendChild(row);
    row.style.display = "flex";
    row.style.flex = "1";
    for(let j = 0; j <newAmount; j++){
        let populate = document.createElement('div');
        populate.setAttribute("id", "populate");
        populate.style.border = '1px solid black';
        row.appendChild(populate);
        populate.style.flex = "1";
    }
}
function smallerGrid(){
    --newAmount;
}
function biggerGrid(){

}