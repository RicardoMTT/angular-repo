import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewsComponent } from './views/views.component'


@NgModule({
  declarations: [ProductsComponent, ViewsComponent],
  imports: [
    HttpClientModule
  ],
  exports: [ProductsComponent,ViewsComponent]
})
export class ProductsModule { }
