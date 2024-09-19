const lenis = new Lenis({
    duration:2,
    wheelMultiplier:1.5,
})

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.to(".solution,.work",{
    ease: "power1.inOut",
    backgroundColor:"#000000",
    color:"#ffffff",
    scrollTrigger:{
        trigger:".solution",
        start:"top 30%",
        toggleActions: "restart none none reverse"
    }
})

gsap.from(".footer-name span",{
    opacity:0,
    y:-20,
    ease: "power1.inOut",
    stagger:0.1,
    scrollTrigger:{
        trigger:".footer",
        start:"top 35%",
        toggleActions: "restart pause resume"
    }
})

document.querySelectorAll(".card").forEach(card=>{
    gsap.to(card,{
        scale:0.7,
        opacity:0,
        scrollTrigger:{
            trigger:card,
            scrub:true,
            start:"top 20%",
            end:"bottom 50%"
        }
    })
})
