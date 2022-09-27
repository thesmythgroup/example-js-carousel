/**
 * Rotate through slides (DIVs) with a smooth transition. In response to this SO question:
 * https://stackoverflow.com/questions/73805121/show-one-divs-contents-at-a-time-every-4-seconds
 *
 * 1. Get all `.slide` children of `.wrapper`
 * 2. Add CSS to style 3 slide "states" so that we can transition between them a. initial:
 *    slides are off screen to the right b. current: slide fills the .wrapper div and is
 *    visible c. slide-out: slide is off screen to the left
 * 3. Keep track of an currently shown slide index
 * 4. After 4 seconds:
 *    * Remove the "current" class from the current slide, and add the slide-out class to
 *      that slide
 *    * Increment the index (or set to 0 if we are at the end of the array)
 *    * Find the next slide using the index, and apply the "current" CSS class to that
 *      slide
 */

const CLASS_CURRENT_SLIDE = 'current';
const CLASS_TRANSITION_SLIDE = 'slide-out';

(() => {
    // Get all `.slide` children of the `.wrapper` div
    const slides = document.querySelectorAll('.wrapper > .slide');

    // Keep track of the current slide's index
    let currentSlideIndex = 0;

    setInterval(() => {
        // Reset all slides to a clean state (except the `current` class)
        Array.from(slides).map(el => el.classList.remove(CLASS_TRANSITION_SLIDE));

        // Swap `current` class with the "transition" class on the currently shown slide
        slides[currentSlideIndex].classList.add(CLASS_TRANSITION_SLIDE);
        slides[currentSlideIndex].classList.remove(CLASS_CURRENT_SLIDE);

        // Increment the current slide index
        currentSlideIndex = (currentSlideIndex >= slides.length - 1)
            ? 0
            : currentSlideIndex + 1;

        // Add "current" class to the new current slide
        slides[currentSlideIndex].classList.add(CLASS_CURRENT_SLIDE);
    }, 4000);
})()
