import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TourismPoint } from '../interfaces/tourism.interface';

@Injectable({
  providedIn: 'root',
})
export class TourismDataService {
  private jsonUrl = 'https://backendtouristtrapp-production.up.railway.app/api/culturalPlace/all';

  private http = inject(HttpClient)

  constructor() {}

  getTourismData(): Observable<TourismPoint[]> {
    return this.http.get<TourismPoint[]>(this.jsonUrl);
  }
}
