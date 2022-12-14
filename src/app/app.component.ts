import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formTest:FormGroup;
  title = 'librerias-angular';

  constructor(private fb:FormBuilder){
    this.formTest = this.fb.group({
      myemail:['',[Validators.required]]
    })
  }

  sendFile(event){
    console.log('event',event);

  }
}
