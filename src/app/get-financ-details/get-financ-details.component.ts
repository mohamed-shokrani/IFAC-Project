import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-financ-details',
  templateUrl: './get-financ-details.component.html',
  styleUrls: ['./get-financ-details.component.scss'],
})
export class GetFinancDetailsComponent {
  receivedId: number = 0;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.receivedId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}
