document.addEventListener("DOMContentLoaded", function(){
    // console.log("ok");
    window.onscroll = function(){
        // console.log(document.querySelector("html").scrollTop);
        if(document.querySelector("html").scrollTop > 100){
            document.querySelector("header").style.Top > "-80px";
        } else {
            document.querySelector("header").style.Top > "0px";
        }
    }
    window.onmousemove = function(e){
        console.log(e.clientY);
        if(e.clientY < 60){
            document.querySelector("header").style.top = "0px";
        } else {
            document.querySelector("header").style.top = "-80px";
        }
    }
});

window.onload = function () {
    const cursor = document.querySelector(".cursor");
    let navLinks = document.querySelectorAll("a");

    function Trailer(e) {
        // console.log(e);
        cursor.style.top = e.pageY + "px";
        cursor.style.left = e.pageX + "px";

        gsap.to(cursor, { duration: 0.3, left: e.pageX - 5, top: e.pageY - 5 });
        gsap.to(follower, { duration: 0.8, left: e.pageX - 15, top: e.pageY - 15 });

        navLinks.forEach(e => {
            // console.log(e);
            e.addEventListener("mouseover", function () {
                console.log("over");
                cursor.classList.add("cursor_hover");
            });
            e.addEventListener("mouseleave", function () {
                console.log("over");
                cursor.classList.remove("cursor_hover");
            });
        });

    }
    document.addEventListener("mousemove", Trailer);
}