$(document).ready(function () {
    const controller = new ScrollMagic.Controller();

    const tween = new TimelineMax()
        .add(TweenMax.to("#form-title", 1, { className: "+=animated-title"}), 0)
        .add(TweenMax.to("#form-subtitle", 1, { className: "+=animated-subtitle"}), 0)
        .add(TweenMax.to("#contact-form", 1, {className: "+=custom-form"}), 0);

    const scene = new ScrollMagic.Scene({triggerElement: "#contact-me", duration: 700, offset: -100})
        .setTween(tween)
        .setClassToggle(".custom-invisible", "custom-visible")
        .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
        .addTo(controller);
});
