import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';

const routes: Routes = [
  { path: 'process', component: ImageGalleryComponent},
  { path: 'upload', component: ImageUploaderComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
