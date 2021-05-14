import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Config } from '../confing/config';
import { Response } from './../models/response.model';

@Injectable({
    providedIn: 'root'
})


export class HttpService {
    constructor(private http: HttpClient) { }
    get<T>(path: string, params: any = new HttpParams()): Observable<Response<T>> {
        return this.http.get<Response<T>>(`${Config.apiUrl}${path}`, { params })
    }

    getLocal<T>(path: string, params: any = new HttpParams()): Observable<Response<T>> {
        return this.http.get<Response<T>>(path, { params })
    }
    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(`${Config.apiUrl}${path}`, body)
    }
    postByparams(path: string,  params: any = new HttpParams()): Observable<any> {
        return this.http.post(`${Config.apiUrl}${path}`,null, { params })
    }
    delete(path: string,  params: any = new HttpParams()): Observable<any> {
        return this.http.delete(`${Config.apiUrl}${path}`, {params})
    }
    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(`${Config.apiUrl}${path}`, body)
    }
}
