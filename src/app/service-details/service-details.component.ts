import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'],
})
export class ServiceDetailsComponent implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    this.reveal();
    console.log('ff');
  }
  ngOnInit(): void {}
  @HostListener('window:scroll')
  reveal(): void {
    const reveals = document.querySelectorAll('.reveal');
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
