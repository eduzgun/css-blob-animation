/*
var paths = document.querySelectorAll("section > div > svg > path "),
    i=0;

paths.forEach(function(item,index){
    
    i++;

    var pathLength = item.getTotalLength();
    item.setAttribute("stroke-dasharray", pathLength);
    item.setAttribute("stroke-offset", pathLength)


    //item.innerHTML = "<animate attributeName='stroke-dashoffset' begin='0s' dur='3s' to='0' fill='freeze' />";
    item.setAttribute("class", "new")
    console.log(item, index, pathLength, item.innerHTML)
    console.log(item.z-index)
    console.log("to")

});

*/

let section1 = document.querySelector("#section1");
let section2 = document.querySelector("#section2");

// Define template literals for the complex content
const contentForSVG2 = `
    <div>
        <h2>Complex Content for svg2</h2>
        <p>This is the content related to svg2.</p>
        <p>It can include multiple elements and styling.</p>
    </div>
`;

const contentForSVG3 = `
    <div>
        <h2>Complex Content for svg3</h2>
        <p>This is the content related to svg3.</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
`;

var svg = document.querySelector(".svg-container");
var pathGroup = svg.querySelector(".path-group");
var paths = Array.from(pathGroup.querySelectorAll("path"));
let click1 = document.querySelector("#click1")

function bringToFront(path) {
    pathGroup.removeChild(path);
    pathGroup.appendChild(path);
}

function restoreOrder(path) {
    // Check if the path is still a child of pathGroup before reinserting
    if (!pathGroup.contains(path)) {
        pathGroup.appendChild(path);
    }
}

paths.forEach(function (item) {
    var pathLength = item.getTotalLength();
    item.setAttribute("stroke-dasharray", pathLength);
    item.setAttribute("stroke-dashoffset", pathLength);
    item.classList.toggle("new");

    item.addEventListener("mouseover", function () {
        bringToFront(item);
    });

    item.addEventListener("mouseout", function () {
        restoreOrder(item);
    });
});

function resetSVGProperties() {
    paths.forEach(function (item) {
        console.log(item)
        console.log(item.classList)
        var pathLength = item.getTotalLength();
        item.classList.toggle("new");
    });
}

let svg2 = document.querySelector("#svg_2")
let svg3 = document.querySelector("#svg_3")
let drawerClosed = document.querySelector(".drawer--open-right")
let activeSVG = null;

svg2.addEventListener("click", function () {
    console.log("clicked number 2")
    if (activeSVG == svg3){
        closeActiveDrawer();
    }
    activeSVG = svg2; // Set active SVG
    svg.classList.add("left")
    setTimeout(() => {  updateDrawerContent(activeSVG); }, 300);
});

svg3.addEventListener("click", function () {
    console.log("clicked svg3");
    if (activeSVG == svg2){
        closeActiveDrawer();
    }
    activeSVG = svg3; // Set active SVG
    setTimeout(() => {  updateDrawerContent(activeSVG); }, 300);
    
});

function closeActiveDrawer() {
    drawerClosed.classList.remove("open")
}
function updateDrawerContent(activeSVG) {
    console.log("cleared content")
     // Clear content for section2
    section1.innerHTML = ""; // Clear content for section1
    section2.innerHTML = "";
    if (activeSVG === svg2) {
        console.log("added content 2")
        section1.innerHTML = contentForSVG2;
    } else if (activeSVG === svg3) {
        console.log("addeded content 3")
        section2.innerHTML = contentForSVG3;
    }
    drawerClosed.classList.toggle("open");
}


let drawer = document.getElementsByClassName('drawer--open-right')[0];


function simulateClick() {
    const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    svg2.dispatchEvent(event);
}

// Call the simulateClick function to trigger the click event
