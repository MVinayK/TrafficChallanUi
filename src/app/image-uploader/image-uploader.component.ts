import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  reasonList = ['Wrong Parking', 'No Helmet', 'others']

  form = new FormGroup({  
    reason: new FormControl(''),
    description: new FormControl('')  
  }); 

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
    var reason = this.form.get('reason').value;
    var desc = this.form.get('description').value;
    this.fileUploadService.upload(this.file, reason, desc).subscribe(data => {
      console.log(data);
      this.file = null;
    }, err => {
      console.log(err);
      this.file = null;
    });
  }

}
