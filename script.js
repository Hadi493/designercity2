const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

function page3Animation() {
    var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector(".fixed-image")
elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

page3Animation();