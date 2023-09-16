import { Component } from '@angular/core';
import { FinanceDetailsComponent } from '../finance-details/finance-details.component';

@Component({
  standalone: true,
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  imports: [FinanceDetailsComponent],
})
export class AboutUsComponent {}
