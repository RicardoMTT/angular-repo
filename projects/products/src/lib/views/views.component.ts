import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'lib-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewsComponent implements OnInit {
  @Input() store: any[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    console.log('store', this.store);
    this.productsService.getProducts().subscribe(console.log);
  }
}
