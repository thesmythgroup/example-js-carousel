/**
 * Show one DIV's contents at a time every 4 seconds
 * in response to this SO question: https://stackoverflow.com/questions/73805121/show-one-divs-contents-at-a-time-every-4-seconds
 *
 * 1. get all the slide elements into an array
 * 2. add CSS to style 3 slide "states" so that we can transition between them
 * 3. keep track of an index of slides
 * 4. after 4 seconds:
 *    * remove the class for the current slide, and add a transitional class
 *      to that slide
 *    * find the next slide using the index, and apply the current CSS class to that slide
 */
(() => {
    const slides = document.getElementsByClassName('slide');

    let currentSlideIndex = 0;

    setInterval(() => {
        Array.from(slides).map(el => el.classList.remove('slide-out'));

        slides[currentSlideIndex].classList.add('slide-out');
        slides[currentSlideIndex].classList.remove('current');

        currentSlideIndex = currentSlideIndex >= slides.length - 1
            ? 0
            : currentSlideIndex + 1;

        slides[currentSlideIndex].classList.add('current');
    }, 4000);
})()
