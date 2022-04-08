var controller = new ScrollMagic.Controller();
let card = TweenMax.from("#presentation", 1, {opacity:0}, {opacity:1, ease: Power1.easeInOut})

let animation1 = new ScrollMagic.Scene({triggerElement: "#presentation", offset:-200})
    .setTween(card)
    //.addIndicators({name: "1", colorTrigger: "red"})
    .addTo(controller)
