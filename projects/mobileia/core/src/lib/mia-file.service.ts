import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiaFileService {

  baseUrl = 'http://0.0.0.0:8080/files/upload';
  //baseUrl = 'https://files.mobileia.com/api/upload';

  constructor(private http: HttpClient) { }

  public upload(app_id : string, files: FileList): Observable<any> {
    var formData: FormData = new FormData();
    formData.append('app_id', app_id);
    for(var i = 0; i < files.length; i++){
      formData.append('file['+i+']', files[i]);
    }
    return this.http.post<any>('http://0.0.0.0:8080/files/upload', formData);
  }

  public uploadWithProgressByOne(app_id: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('app_id', app_id);
    formData.append('file[0]', file);

    const req = new HttpRequest('POST', 'https://files.mobileia.com/api/upload', formData, {
      reportProgress: true,
    });
    return this.http.request(req);
  }

  public uploadWithProgress(app_id: string, files: FileList): Observable<any> {
    var formData: FormData = new FormData();
    formData.append('app_id', app_id);
    for(var i = 0; i < files.length; i++){
      formData.append('file['+i+']', files[i]);
    }

    const req = new HttpRequest('POST', 'https://files.mobileia.com/api/upload', formData, {
      reportProgress: true,
    });
    return this.http.request(req);
  }
}
