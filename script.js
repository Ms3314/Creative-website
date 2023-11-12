
document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
    })});


    document.querySelector("#ftext button")
    .addEventListener("mouseover", function() {
        gsap.to("#future video" , {
            opacity:1,
            duration:1.5,
            ease:Power4,
            duration:1,
        })

    } )

    document.querySelector("#ftext button")
    .addEventListener("mouseleave", function() {
        gsap.to("#future video" , {
            opacity:0,
            duration:1.5,
            ease:Power4,
            duration:1,
        })

    } )

    // gsap se animation
    gsap.from(".nlink", {
        stagger: 0.2, // mtlb .1 ka gap sakhna sabko animate karne ke liye
        y: 10,
        duration: 1,
        ease: Power2.ease,
        opacity: 0,
    });

    Shery.textAnimate("#headings h1", {
        style: 2,
        y: 10,
        delay: 0.3,
        duration: 3,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.1,
    });

    gsap.from(".anim2", {
        y: 50,
        stagger: .25,
        opacity: 0,
        ease: Expo,
        duration: 2,
    });

    // Shery.imageEffect("#sanemi", {
    //     style: 3,
    //     //to be filled later
    //     config: {"nFrequencyX":{"value":11.57}} ,
    // });

    // Shery.imageEffect("#susimagewrapper img", {
    //     style: 3,
    //     //to be filled later
    //     config: {"nFrequencyX":{"value":11.57}} ,
    // });

    // gsap.from("#imgntext img" , {
    //     z: "1",
    //     opacity: 10,
    //     duration:2,
    // })

    // shery.imageEffect("#bimg img", {
    //     style: 5,
    //     debug:true,
    //     gooey: true

    // })

    
