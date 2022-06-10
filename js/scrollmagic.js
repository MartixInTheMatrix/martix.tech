
var flightpath = {
    entry : {
        curviness: 1.25,
        autoRotate: true,
        values: [
                {x: 0,	y: -20},
                {x: -300,	y: 10}
            ]
    },
    promenade : {
        curviness: 1.25,
        autoRotate: true,
        values: [
                {x: 510,	y: 60},
                {x: 620,	y: -60},
                {x: 500,	y: -100},
                {x: 380,	y: -80},
                {x: 380,	y: -20},
                {x: 500,	y: 60},
                {x: 500,	y: 60},
                {x: 580,	y: 20},
                {x: 580,	y: 30},

            ]
    },
    promenade2 : {
        curviness: 1.25,
        autoRotate: true,
        values: [
                {x:-150, y: 40},
                {x:-300, y: 70},
                {x:-450, y: 350},
                {x:-500, y: 400},
                {x:-450, y: 450},
                {x:-800, y: 500},
                {x:-450, y: 550},
                {x:-450, y: 600},
            ]
    },
    leave : {
        curviness: 1.25,
        autoRotate: false,
        values: [
            {x:-450, y: 1400},
        ]
    }
    
};
// init controller
var controler = new ScrollMagic.Controller();

// create tween
var tween = new TimelineMax()
    .add(TweenMax.to("#cworld", 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
    .add(TweenMax.to("#cworld", 2, {css:{bezier:flightpath.promenade}, ease:Power1.easeInOut}))
    .add(TweenMax.to("#cworld", 2, {css:{bezier:flightpath.promenade2}, ease:Power1.easeInOut}))
    .add(TweenMax.to("#cworld", 1, {css:{opacity:0, bezier:flightpath.leave}, ease:Power1.easeInOut}));

// build scene
var scene1 = new ScrollMagic.Scene({triggerElement: "#header", duration: 2000, offset: 620})
                .setPin("#header")
                .setTween(tween)
                // .addIndicators({name: "1", colorTrigger: "red"})
                .addTo(controler);

            
            
var controller = new ScrollMagic.Controller();

let card = TweenMax.from("#presentation", 1, {opacity:0}, {opacity:1, ease: Power1.easeInOut})

let animation1 = new ScrollMagic.Scene({triggerElement: "#presentation", offset:-200})
    .setTween(card)
    //.addIndicators({name: "1", colorTrigger: "red"})
    .addTo(controller)

