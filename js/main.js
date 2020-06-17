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
        .add(TweenMax.to("#contact-form", 1, {className: "+=custom-form"}), 0);

    new ScrollMagic.Scene({triggerElement: "#contact-me", duration: 700, offset: -100})
        .setTween(tween)
        .addTo(controller);
});
