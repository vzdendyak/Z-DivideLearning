import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {
  summary: number;
  message: string;
  quote: string;
  constructor(private apiService: ApiService) {
    this.summary = this.apiService.summary;
    this.message = this.summary < 5 ? 'Дуже погано!' :
      this.summary > 5 && this.summary < 10 ? 'Середній результат!' :
        'Чудовий результат!';
    this.quote = this.summary < 5 ? 'Потрібно більше вчити!' :
      this.summary > 5 && this.summary < 10 ? 'Потрібно більше практики!' :
        'Ви засвоїли знання!';
  }

  ngOnInit(): void {
  }

}
