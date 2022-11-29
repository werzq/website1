import ASScroll from "https://cdn.skypack.dev/@ashthornton/asscroll";
import gsap from "https://cdn.skypack.dev/gsap@3.6.1";
import ScrollTrigger from "https://cdn.skypack.dev/gsap@3.6.1/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const isTouch = ('ontouchstart' in document.documentElement);

const asscroll = new ASScroll({
    disableRaf: true
});


gsap.ticker.add(asscroll.update);

ScrollTrigger.defaults({
    scroller: asscroll.containerElement
});


ScrollTrigger.scrollerProxy(asscroll.containerElement, {
    scrollTop(value) {
        return arguments.length ? asscroll.currentPos = value : asscroll.currentPos;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    }
});


asscroll.on("update", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", asscroll.resize);

window.addEventListener("load", () => {
    const totalScroll = asscroll.containerElement.scrollHeight - innerHeight;

    gsap.to(".snowflake", {
        scrollTrigger: {
            pin: true,
            pinType: isTouch ? 'fixed' : 'transform',
            end: '200%',
            scrub: 0.2,
            trigger: ".snowflakes"
        },

        y: (i, target) => -totalScroll * target.dataset.speed,
        ease: "none"
    });


    gsap.from(".png img", {
        scrollTrigger: {
            pin: true,
            pinType: isTouch ? 'fixed' : 'transform',
            scrub: true,
            trigger: ".png"
        },

        scale: 0.2,
        autoAlpha: 0,
        ease: "sine.out"
    });


    asscroll.enable();
});