const lenis = new Lenis({
    duration:2,
    wheelMultiplier:1.7,
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
            scrub:true,
            start:"top 20%",
            end:"bottom 50%"
        }
    })
})

const text=new SplitType(".changer-upper")

const ft=gsap.timeline()

ft.from(".nav-2 h1,nav h1, .nav-btn ",{
    y:-100,
    stagger:0.2,
})

ft.from(text.chars,{
    y:-100,
    stagger:0.05,
    ease: "power1.inOut",
    duration:0.3,
})

const titles=gsap.utils.toArray("h2")
const tl=gsap.timeline()

titles.forEach(title=>{

    const test=new SplitType(title)
    tl
    .delay(2)
    .from(test.chars,{
        opacity:0,
        y:20,
        stagger:0.02,
        rotateX:-90,
    },"<")
    .to(test.chars,{
        opacity:0,
        y:-20,
        stagger:0.02,
        rotateX:90,
        delay:1,
    },"<1")
    .repeat(-1)
})

gsap.to(".page-1",{
    scale:0.9,
    opacity:0.6,
    borderRadius:"40px",
    scrollTrigger:{
        trigger:".showcase",
        start:"top 75%",
        end:"top 80",
        // markers:true,
        scrub:1,
    }
})

gsap.from(".our",{
    y:-100,
    stagger:0.1,
    ease: "power1.inOut",
    scrollTrigger:{
        trigger:".page-2",
        start:"top 30%",
    }
})

