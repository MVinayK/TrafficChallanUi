import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  baseUrl: "http://localhost:8080"

  upload(file: File, reason:string, description:string) : Observable<any>{
    const formData = new FormData(); 
    formData.append("file", file, file.name);
    formData.append("reason", reason);
    formData.append("description", description);
    return this.http.post('http://localhost:8080/ocr/image', formData);
  }

  getAllImages() : Observable<any>{
    return this.http.get('http://localhost:8080/all/images/ocred');
  }

  getSingleImage(path: string) : Observable<any> {
    return this.http.get('http://localhost:8080/image/aws/?key=' + path);
  }

  updateNumberPlate(imageId: string, plateNumber : string) : Observable<any>{
    return this.http.post('http://localhost:8080/numberplate/' + imageId + '/' + plateNumber , null);
  }

  constructor(private http:HttpClient) { }
}
