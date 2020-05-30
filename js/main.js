$(document).ready(function () {

    new Typewriter('#role-text', {
        strings: ['Developer', 'Designer'],
        autoStart: true,
        loop: true
    });
    const controller = new ScrollMagic.Controller();

    const tween = new TimelineMax()
        .add(TweenMax.to("#form-title", 1, { className: "+=animated-title"}), 0)
        .add(TweenMax.to("#form-subtitle", 1, { className: "+=animated-subtitle"}), 0)
        .add(TweenMax.to("#contact-form", 1, {className: "+=custom-form"}), 0);

    new ScrollMagic.Scene({triggerElement: "#tech-stack", duration: "150%", offset: -25})
        .setClassToggle("#tech-stack", "custom-visible")
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#pricing", duration: "150%", offset: -25})
        .setClassToggle("#pricing", "custom-visible")
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#home", duration: 700, offset: -25})
        .setClassToggle("#home", "custom-visible")
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#home-sub-1", duration: 250, offset: -25})
        .setClassToggle("#home-sub-1", "custom-visible")
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#home-sub-2", duration: 250, offset: -25})
        .setClassToggle("#home-sub-2", "custom-visible")
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#home-sub-3", duration: 250, offset: -25})
        .setClassToggle("#home-sub-3", "custom-visible")
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#contact-me", duration: 700, offset: -100})
        .setTween(tween)
        .setClassToggle("#contact-me", "custom-visible")
        .addTo(controller);
});
