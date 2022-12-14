import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [UiComponent, NavbarComponent],
  imports: [
  ],
  exports: [UiComponent,NavbarComponent]
})
export class UiModule { }
