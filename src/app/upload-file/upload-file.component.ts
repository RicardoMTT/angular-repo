import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { UploadService } from '../upload.service';
const BORDER_ORIGINAL_COLOR = 'dashed 3px rgba(182, 183, 183, 0.5)';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
  files: any = [];
  border = BORDER_ORIGINAL_COLOR;

  @Output() sendConfirmUpload = new EventEmitter<boolean>();
  imageUrl:string;

  constructor(private uploadService:UploadService) { }

  ngOnInit(): void {
  }

  uploadFile(event): void {
    console.log('evnet',event[0]);


    if (!event && !event[0]) {
      return;
    }

    // if (event[0].type !== 'application/vnd.ms-excel' && !event[0].name.includes('.csv')) {
    //   return;
    // }

    this.files[0] = event[0];
  }
  fileLeave(event) {
   console.log('leave');

    this.border = BORDER_ORIGINAL_COLOR;
  }


  fileOver(event) {
    console.log('over');

    this.border = 'dashed 10px rgba(65, 187, 235, 0.5)';
    event.preventDefault();
  }


  fileDrop(event) {
    console.log('drop');

    this.border = BORDER_ORIGINAL_COLOR;
    event.preventDefault();
    event.stopPropagation();

    this.uploadFile(event.dataTransfer.files);

  }

  uploadToServer(){

      // Create form data
      const formData = new FormData();

      // Store form name as "file" with file data
      formData.append("file", this.files[0], this.files[0].name);

      this.uploadService.uploadToServer(formData).subscribe((resp:{url:string}) => {
        console.log('resp',resp);
        this.imageUrl = resp.url;
      },error => {
        console.log('error',error);

      });
  }

}
