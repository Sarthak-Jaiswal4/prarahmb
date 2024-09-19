const lenis = new Lenis({
    duration:2,
})

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

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
            start:"top 20%",
            end:"bottom 50%"
        }
    })
})


