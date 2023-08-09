import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  flag: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.isScreen720OrMore();
  }

  isScreen720OrMore() {
    if (this.breakpointObserver.isMatched('(width: 720px)')) {
      this.flag = true;
    } else this.flag = false;
  }
}
