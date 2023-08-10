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
    item.classList.add("new");

    item.addEventListener("mouseover", function () {
        bringToFront(item);
    });

    item.addEventListener("mouseout", function () {
        restoreOrder(item);
    });
});

let svg2 = document.querySelector("#svg_2")
let svg3 = document.querySelector("#svg_3")
let drawerClosed = document.querySelector(".drawer--open-right")
let activeSVG = null;

svg2.addEventListener("click", function () {
    console.log("clicked number 2")
    if (activeSVG == svg3){
        closeActiveDrawer();
    }
    //sWvg2.classList.toggle("svg-onDrawer");
    
    activeSVG = svg2; // Set active SVG

    setTimeout(() => {  updateDrawerContent(); }, 200);
});

svg3.classList.remove("svg-onDrawer");
svg2.classList.remove("svg-onDrawer");

svg3.addEventListener("click", function () {
    console.log("clicked svg3");
    if (activeSVG == svg2){
        closeActiveDrawer();
    }
    activeSVG = svg3; // Set active SVG
    //drawerClosed.classList.toggle("open");
    setTimeout(() => {  updateDrawerContent(); }, 200);
    
});

function closeActiveDrawer() {
    drawerClosed.classList.remove("open")
}
function updateDrawerContent() {
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

document.addEventListener("DOMContentLoaded", function() {
    drawer.classList.add("open");
    /*
    setTimeout(function() {
        const drawer = document.querySelector(".drawer--open-right");
        drawer.classList.add("open");
    }, 1000); // Adjust the delay as needed
    */
    closeActiveDrawer()
});

let drawer = document.getElementsByClassName('drawer--open-right')[0];
drawer.addEventListener('drawerIsOpen', function(event){
  // drawer is open
  // event.detail is the element that triggered the drawer opening
    console.log("drawer open")
});

drawer.addEventListener('drawerIsClose', function(event){
  // drawer is close
    console.log("drawer open")
});


