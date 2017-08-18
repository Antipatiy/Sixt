(function () {
  'use strict';

  class Slider {
    constructor() {
      this.DELAY = 600;
      this.AUTO_PLAY_DELAY = 3000;
    }

    play() {
      let currentSlide = $('.active-slide'),
          nextSlide = currentSlide.next();

      let activateFirstSlide = () => {
        if (nextSlide.length === 0) {
          nextSlide = $('.slide').first();
        }
      };
      activateFirstSlide();

      let moveForwardSlide = () => {
        currentSlide.fadeOut(this.DELAY).removeClass('active-slide');
        nextSlide.fadeIn(this.DELAY).addClass('active-slide');
      };
      moveForwardSlide();
    }

    playBack() {
      let currentSlide = $('.active-slide'),
          prevSlide = currentSlide.prev();

      let activateLastSlid = () => {
        if (prevSlide.length === 0) {
          prevSlide = $('.slide').last();
        }
      };
      activateLastSlid();

      let moveBackSlide = () => {
        currentSlide.fadeOut(this.DELAY).removeClass('active-slide');
        prevSlide.fadeIn(this.DELAY).addClass('active-slide');
      };
      moveBackSlide();
    }

    autoPlay() {
      let autoplay = setInterval(this.play, this.AUTO_PLAY_DELAY);

      $(".slider, .slider-arrow").on('mouseenter', () => {
        clearInterval(autoplay);
      }).on('mouseleave', () => {
        autoplay = setInterval(this.play, this.AUTO_PLAY_DELAY);
      });
    }

    playKey() {
      $('body').on('keydown', (event) => {
        if ((parseInt(event.which, 10)) === 39) {
          this.play();
        }
        if ((parseInt(event.which, 10)) === 37) {
          this.playBack();
        }
      });
    }

    playArrow() {
      $('.slider-arrow_next').on('click', () => {
        this.play();
      });
      $('.slider-arrow_prev').on('click', () => {
        this.playBack();
      });
    }

    init() {
      this.autoPlay();
      this.playArrow();
      this.playKey();
    }
  }

  let slider = new Slider();
  slider.init();
})();