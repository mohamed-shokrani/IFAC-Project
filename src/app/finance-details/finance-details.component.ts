import {
  AfterViewInit,
  Renderer2,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance-details',
  templateUrl: './finance-details.component.html',
  styleUrls: ['./finance-details.component.scss'],
})
export class FinanceDetailsComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private router: Router) {}

  ngAfterViewInit(): void {
    this.reveal();
    window.addEventListener('scroll', this.reveal);
  }
  ShowProductDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
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
