import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// export interface EducationInfo {
//   degree: string;
//   institute: string;
//   duration: string;
// }

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = 'http://localhost:3000/api/education';

  constructor(private http: HttpClient) {}

  getEducation(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
