import {
  AfterViewInit,
  Renderer2,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-finance-details',
  templateUrl: './finance-details.component.html',
  styleUrls: ['./finance-details.component.scss'],
})
export class FinanceDetailsComponent implements AfterViewInit {
  /**
   *
   */
  /**
   *
   */
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.reveal();
    window.addEventListener('scroll', this.reveal);
  }

  // revealAll() {
  //   let reveals = document.querySelectorAll('.forAll');
  //   let WindowHeights = window.innerHeight;
  //   console.log(reveals.length);

  //   console.log(reveals);
  //   for (let i = 0; i < reveals.length; i++) {
  //     let WindowHeight = window.innerHeight;
  //     let revealTop = reveals[i].getBoundingClientRect().top;
  //     let revealPoint = 150;
  //     if (revealTop < WindowHeight - revealPoint) {
  //       reveals[i].classList.add('active');
  //     } else {
  //       reveals[i].classList.remove('active');
  //     }
  //   }
  // }
  @HostListener('window:scroll')
  reveal(): void {
    const reveals = document.querySelectorAll('.show');
    const windowHeight = window.innerHeight;

    reveals.forEach((element: any) => {
      const revealTop = element.getBoundingClientRect().top;
      const revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        this.renderer.addClass(element, 'active');
      } else {
        this.renderer.removeClass(element, 'active');
      }
    });
  }
}
