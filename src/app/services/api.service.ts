import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  constructor(
    private http: HttpClient,
    private corsHeaders: HttpHeaders,
  ) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      //'Access-Control-Allow-Origin': 'https://localhost:5000/'
    });
  }

  
  async test():Promise<any> {
    const res = await this.http
    .get('http://localhost:5000/api/test')
    .toPromise()
  return res as any

  }
    async uploadPhoto(photo):Promise<any> {
      const res = await this.http
      .post('/api/photo', photo)
      .toPromise()
    return res as any

    }
  }