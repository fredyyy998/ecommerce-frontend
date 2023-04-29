 import { Component, OnInit } from '@angular/core';
import { RevenueService } from '../../../../services/revenue/revenue.service';
import { RevenueReport } from '../../../../models/revenue-report';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {

  revenueReports: RevenueReport[] = [];

  start: Date = new Date();
  end: Date = new Date();

  startInput = '';
  endInput = '';

  constructor(private readonly revenueService: RevenueService) { }

  ngOnInit(): void {
    this.start.setMonth(this.start.getMonth() - 1);
    this.generateReport();
  }

  generateReport() {
    if (this.startInput && this.endInput) {
      this.start = new Date(this.startInput);
      this.end = new Date(this.endInput);
    }

    this.revenueService.getRevenueReport(this.start, this.end).subscribe(result => this.revenueReports.push(result));
  }
}
