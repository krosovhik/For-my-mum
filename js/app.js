TweenLite.set("#petals", { perspective: 600 });
TweenLite.set("img", { xPercent: "-50%", yPercent: "-50%" });

var total = 50;
var warp = document.getElementById("petals"),
  w = window.innerWidth,
  h = window.innerHeight;

for (i = 0; i < total; i++) {
  var Div = document.createElement("div");
  TweenLite.set(Div, {
    attr: { class: "dot" },
    x: R(0, w),
    y: R(-200, -150),
    z: R(-200, 200),
  });
  warp.appendChild(Div);
  animm(Div);
}

function animm(elm) {
  TweenMax.to(elm, R(6, 15), {
    y: h + 100,
    ease: Linear.easeNone,
    repeat: -1,
    delay: -15,
  });
  TweenMax.to(elm, R(4, 8), {
    x: "+=100",
    rotationZ: R(0, 180),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
  });
  TweenMax.to(elm, R(2, 8), {
    rotationX: R(0, 360),
    rotationY: R(0, 360),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
    delay: -5,
  });
}

function R(min, max) {
  return min + Math.random() * (max - min);
}

/* https://mattboldt.com/typed.js/ */
var typed = new Typed("#text", {
  strings: [
    "Спасибі, мамо, за те, що ти живеш,мене любиш, жалієш і бережеш. Ти – наша єдина з татом у світі розрада, ти – наша любов, наше щастя й порада. Хай береже тебе доля від тяжкої недуги, від злої обмови, від нещирого друга. Хай дарує Господь, як святеє причастя – здоров'я і силу, довголіття і щастя. Щоб змогло все задумане в тебе звершитись. Заради цього варто було народитись! З 8 березня, найкраща матусе!😘💖",
  ],
  startDelay: 3000,
  typeSpeed: 50,
  backSpeed: 0,
  fadeOut: true,
  loop: false,
  showCursor: false,
  onComplete: function () {
    var author = document.getElementById("author");
    author.style.opacity = 1;
  },
});

window.onload = function () {
  setTimeout(function () {
    var bgMusic = document.getElementById("bgMusic");
    bgMusic.play();
  }, 2000);
};
