import { render, randAnimation } from './animation';

const $path = document.getElementById('path');
const ANIMATION_DURATION = 200;

let animation = randAnimation(0, ANIMATION_DURATION);

function animateCircles() {
    $path.setAttribute('d', render(animation));
    if (animation.frame < animation.duration) {
        animation.frame++;
    } else {
        animation.frame = 0;
        animation = randAnimation(animation.endIndex, ANIMATION_DURATION);
    }
    requestAnimationFrame(animateCircles)
}

animateCircles();
