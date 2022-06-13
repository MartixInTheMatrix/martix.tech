var controller = new ScrollMagic.Controller();
let bar1 = TweenMax.from("#bar-1", 1, {opacity:0.2}, {opacity:1, ease: Power1.easeInOut})
let bar2 = TweenMax.from("#bar-2", 1, {opacity:0.2}, {opacity:1, ease: Power1.easeInOut})
let bar3 = TweenMax.from("#bar-3", 1, {opacity:0.2}, {opacity:1, ease: Power1.easeInOut})

let animation = new ScrollMagic.Scene({triggerElement: "#presentation", offset:0})
    .setTween(bar1)
    //.addIndicators({name: "1", colorTrigger: "red"})
    .addTo(controller)
let animation1 = new ScrollMagic.Scene({triggerElement: '#projets', offset:0})
    .setTween(bar2)
    //.addIndicators({name: "2", colorTrigger: "red"})
    .addTo(controller) 
let animation2 = new ScrollMagic.Scene({triggerElement: '#repo', offset:0})
    .setTween(bar3)
    //.addIndicators({name: "3", colorTrigger: "red"})
    .addTo(controller) 
 