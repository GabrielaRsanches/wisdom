import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
 
})
export class FileUploadComponent {
  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // You can now access the selected file and perform further actions, such as uploading it to a server.
      console.log('Selecione o arquivo:', selectedFile);
    }
  }
}
