import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-my-email',
  templateUrl: './my-email.component.html',
  styleUrls: ['./my-email.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MyEmailComponent,
      multi: true,
    },
  ],
})
export class MyEmailComponent implements OnInit, ControlValueAccessor {
  email:string = '';
  private onChangefn : Function;

  changeText($event:any){
    console.log('event',$event.target.value);

    this.onChangefn($event.target.value)
  }

  constructor() {}

  writeValue(value: string): void {
    this.email = value;
  }
  registerOnChange(fn: any): void {
    this.onChangefn = fn;
  }

  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  //Opcional
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}
}
