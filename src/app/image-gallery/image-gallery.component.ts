import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/services/file-upload-service.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  allImages: Map<string, string>[];
  imageId:string;
  imagePath:string;
  plateNumber:string;
  reason:string;
  desc:string;
  createDate:string;

  constructor(public fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    this.getAllFiles();
  }

  getAllFiles() {
    this.fileUploadService.getAllImages().subscribe(data => {
      console.log(data);
      this.allImages = data;
    }, err => {

    });
  }

  selectImage(image) {
    console.log("Got it : " + image.imageId);
    //this.callAndGetImage(image.imagePath);
    this.imageId = image.imageId;
    this.imagePath = image.imagePath;
    this.reason = image.reason;
    this.desc = image.description;
    this.createDate = image.createdDate;
    this.plateNumber = image.plateNumber;
  }

  callAndGetImage(imagePath: any) {
    this.fileUploadService.getSingleImage(imagePath).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  plateNumberChange(val) {
    this.plateNumber = val;
  }

  submitToSchedule() {
    console.log("Submitting....");
    this.fileUploadService.updateNumberPlate(this.imageId, this.plateNumber).subscribe(data => {
      console.log('updated');
      this.allImages.forEach(img => {
        if(img['imageId'] == this.imageId) {
          img['plateNumber'] = this.plateNumber;
        }
      });
    }, err => {
      console.log(err);
    });
  }

}
