import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './api-response';
import { Observable } from 'rxjs';

export class MiaHttpService {

    protected _httpReference: HttpClient;

    constructor(http: HttpClient) {
        this._httpReference = http;
    }

    public postArrayPro(url: string, params: any): Promise<[any]> {
        return new Promise<any>((resolve, reject) => {
            this.postArray(url, params).toPromise().then(result => {
              if (result.success) {
                resolve(result.response);
              } else {
                reject(result.error);
              }
            }).catch(error => {
              reject(error);
            });
        });
    }

    public postArray(url: string, params: any): Observable<ApiResponse<[any]>> {
        return this._httpReference.post<ApiResponse<[any]>>(url, params);
    }

    public postObjectPro(url: string, params: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.postObject(url, params).toPromise().then(result => {
              if (result.success) {
                resolve(result.response);
              } else {
                reject(result.error);
              }
            }).catch(error => {
              reject(error);
            });
        });
    }

    public postObject(url: string, params: any): Observable<ApiResponse<any>> {
        return this._httpReference.post<ApiResponse<any>>(url, params);
    }

    public requestArray(url: string, params: any, callback: (data: [any]) => void ) {
        this._httpReference.post<ApiResponse<[any]>>(url, params).subscribe(data => {
            if (data.success) {
                callback(data.response);
            }
          });
    }

    public requestObject(url: string, params: any, callback: (data: any) => void ) {
        this._httpReference.post<ApiResponse<any>>(url, params).subscribe(data => {
            if (data.success) {
                callback(data.response);
            }
          });
    }
}
