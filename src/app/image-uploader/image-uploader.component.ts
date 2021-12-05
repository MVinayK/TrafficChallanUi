import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/services/file-upload-service.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {

  shortLink: string = "";
  filePath: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {

  }

  // On file Select
  onChange(event) {
    const reader = new FileReader();
    this.file = event.target.files[0];
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.filePath = event.target.result as string;
    }
  }

  upload() {
    console.log("uploading");
    this.fileUploadService.upload(this.file).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

}
