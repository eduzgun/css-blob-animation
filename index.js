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

svg2.addEventListener("click", function () {
    console.log("clicked")
    svg2.classList.toggle("svg-onDrawer");
    drawerClosed.classList.toggle("open");
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


