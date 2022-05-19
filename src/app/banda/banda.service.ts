import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BandaDetail } from './banda-detail';

@Injectable({
  providedIn: 'root'
})
export class BandaService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getBandas(): Observable<BandaDetail[]> {
    return this.http.get<BandaDetail[]>(this.apiUrl);
  }

}
