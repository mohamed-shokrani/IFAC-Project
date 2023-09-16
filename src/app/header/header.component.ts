import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  flag: boolean = false;
  nave?: HTMLElement;
  hamburgerr!: HTMLElement;
  constructor(private router: Router, private elementRef: ElementRef) {}
  ngOnInit(): void {
    // this.aboutUsBtn();
    // this.contactUsBtn();
  }

  ngAfterViewInit() {
    // const
  }
  show() {
    this.nave = document.getElementById('nav') as HTMLElement;
    this.hamburgerr = document.getElementById('hamburger') as HTMLElement;
    console.log('saaaaaaa');
    this.nave!.classList.toggle('show');
  }
  aboutUsBtn() {
    this.router.navigate(['/about']);
  }
  contactUsBtn() {
    this.router.navigate(['/contacts']);
  }
}
