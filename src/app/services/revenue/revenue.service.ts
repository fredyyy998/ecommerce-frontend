import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { RevenueReport } from '../../models/revenue-report';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';

interface RevenueReportDto {
  startDate: string,
  endDate: string,
  revenue: number
}

@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  private readonly baseUrl = environment.baseUrlFulfillmentService;
  constructor(private readonly requestService: RequestService) { }

  getRevenueReport(start: Date, end: Date): Observable<RevenueReport> {
    return this.requestService.get<RevenueReportDto>(`${this.baseUrl}/api/Revenues?StartDate=${start.toISOString()}&EndDate=${end.toISOString()}`).pipe(
      map(result => ({
        revenue: result.revenue,
        start: new Date(result.startDate),
        end: new Date(result.endDate),
      })));
  }
}
