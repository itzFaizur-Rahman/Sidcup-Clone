var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 150 +"px"
    blur.style.top = dets.y - 150 +"px"
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0 solid #abe60c";
        crsr.style.backgroundColor = "#abe60c";
    })
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "120px",
    duration:0.5,
    scrollTrigger: {
        trigger:"#nav",
        sroller: "body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub: 1
    }
}) 

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger:"#main",
        sroller: "body",
        // markers:true,
        start:"top -40%",
        end:"top -80%",
        scrub: 2
    }
}) 

gsap.from("#About-us img, #about-us-in",{
    y:50,
    opacity: 0,
    duration: 2,
    // stagger: 0.4,
    scrollTrigger:{
        trigger: "#About-us",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 55%",
        scrub: 2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
})

gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "top 40%",
        scrub: 4
    }
})

gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "top 40%",
        scrub: 4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger: "#colon2",
        scroller: "body",
        // markers:true,
        start: "top 80%",
        end: "top 75%",
        scrub: 3
    }
})
