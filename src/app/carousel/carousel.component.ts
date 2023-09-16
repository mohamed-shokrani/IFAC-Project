import { AfterViewInit, Component } from '@angular/core';

@Component({
  standalone: true,

  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const buttons = document.querySelectorAll('[data-carousel-button]');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button instanceof HTMLElement) {
          const offset = button.dataset['carouselButton'] === 'next' ? 1 : -1;
          const carouselContainer = button.closest('[data-carousel]');
          const slides = carouselContainer?.querySelector('[data-slides]');

          if (carouselContainer && slides) {
            const activeSlide = slides.querySelector('[data-active]');
            if (activeSlide instanceof Element) {
              const slideChildren = Array.from(slides.children);
              const newIndex =
                (slideChildren.indexOf(activeSlide) +
                  offset +
                  slideChildren.length) %
                slideChildren.length;

              (slideChildren[newIndex] as HTMLElement).dataset['active'] =
                'true';
              if (activeSlide instanceof HTMLElement) {
                delete activeSlide.dataset['active'];
              }
            }
          }
        }
      }); // Add the missing closing parenthesis here
    }); // Add the missing closing parenthesis here
  }
}
