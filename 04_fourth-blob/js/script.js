function openNav() {
    const screenWidth = window.innerWidth;
    const bg = document.querySelector('.bg');

    if (screenWidth < 576) {
        document.getElementById("mySidenav").style.width = "100vw";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("mySidenav").classList.add('text-center');
    } else {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        bg.style.zIndex = "20";
        bg.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.body.style.overflow = 'hidden';
    }
}

function closeNav() {
    const bg = document.querySelector('.bg');
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    bg.style.zIndex = "1";
    bg.style.display = "none";

}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}