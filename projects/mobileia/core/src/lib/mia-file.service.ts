import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiaFileService {

  constructor(private http: HttpClient) { }

  public upload(app_id : string, files: FileList) : Observable<any>{
    var formData: FormData = new FormData();
    formData.append('app_id', app_id);
    for(var i = 0; i < files.length; i++){
      formData.append('file['+i+']', files[i]);
    }
    return this.http.post<any>('https://files.mobileia.com/api/upload', formData);
  }
}
