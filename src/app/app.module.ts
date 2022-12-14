import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from 'projects/ui/src/public-api';
import { ProductsModule } from 'projects/products/src/public-api';
import { MyEmailComponent } from './my-email/my-email.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UploadFileComponent } from './upload-file/upload-file.component'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MyEmailComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    ProductsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
