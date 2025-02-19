import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// export interface ContactInfo {
//   email: string;
//   phone: string;
//   github: string;
// }

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/api/contact';

  constructor(private http: HttpClient) {}

  getContact(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
