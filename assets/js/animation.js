
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

tl.from(".welcome-badge", {
    y: 20,
    opacity: 0,
    duration: 0.6
})
    .from(".welcome-title", {
        y: 40,
        opacity: 0,
        duration: 0.8
    }, "-=0.3")
    .from(".welcome-desc", {
        y: 30,
        opacity: 0,
        duration: 0.6
    }, "-=0.4")
    .to(".welcome-actions .btn", {
        y: 20,
        opacity: 1,
        stagger: 0.15,
        duration: 0.5
    }, "-=0.3");

gsap.to(".blob-one", {
    x: 50,
    y: 40,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".blob-two", {
    x: -40,
    y: -50,
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

