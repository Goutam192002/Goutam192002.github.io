$(document).ready(function () {
    $('#cta-button').click(function () {
        document.getElementById('contact-me').scrollIntoView({ behavior: 'smooth'})
    })
    new Typewriter('#role-text', {
        strings: ['Designer', 'Developer'],
        autoStart: true,
        loop: true
    });
    const controller = new ScrollMagic.Controller();

    const tween = new TimelineMax()
        .add(TweenMax.to("#form-title", 1, { className: "+=animated-title"}), 0)
        .add(TweenMax.to("#form-subtitle", 1, { className: "+=animated-subtitle"}), 0)
        .add(TweenMax.to("#contact-form", 1, {className: "+=custom-form"}), 0);

    new ScrollMagic.Scene({triggerElement: "#contact-me", duration: 700, offset: -100})
        .setTween(tween)
        .setClassToggle("#contact-me", "custom-visible")
        .addTo(controller);
});
