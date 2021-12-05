import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  baseUrl: "http://localhost:8080"

  upload(file: File) : Observable<any>{
    const formData = new FormData(); 
    formData.append("file", file, file.name);
    return this.http.post('http://localhost:8080/ocr/image', formData);
  }

  constructor(private http:HttpClient) { }
}
