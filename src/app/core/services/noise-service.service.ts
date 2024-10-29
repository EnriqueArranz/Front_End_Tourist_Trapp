import { Injectable } from '@angular/core';
import { NoiseData } from '../interfaces/tourism.interface';
import * as L from 'leaflet';
import 'leaflet.heat';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoiseServiceService {
  private map!: L.Map;

  constructor(private http: HttpClient) { }

  loadNoiseData(): Observable<NoiseData[]> {
    return this.http.get<NoiseData[]>('https://backendtouristtrapp-production.up.railway.app/api/noise/all');
  }
}
