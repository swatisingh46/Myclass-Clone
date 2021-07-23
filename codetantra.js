var menubtn = document.getElementById("menubtn")
var sidenav = document.getElementById("sidenav1")
var menu = document.getElementById("menu")

sidenav.style.right = "-900px";

menubtn.onclick = function() {
    if (sidenav.style.right == "-900px") {
        sidenav.style.right = "0";
        menu.src = "close.png";
    } else {

        sidenav.style.right = "-900px";
        menu.src = "menu.png";


    }
}