import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { Observable } from 'rxjs';
import { ConcentrationData } from '../interfaces/tourism.interface';

@Injectable({
  providedIn: 'root'
})
export class MapApiService {
  private map!: L.Map;

  constructor(private http: HttpClient) { }

  loadConcentrationData(): Observable<ConcentrationData[]> {
    return this.http.get<ConcentrationData[]>('https://backendtouristtrapp-production.up.railway.app/api/touristConcentration/all')
  }

}
