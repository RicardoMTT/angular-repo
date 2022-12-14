import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEmailComponent } from './my-email.component';

describe('MyEmailComponent', () => {
  let component: MyEmailComponent;
  let fixture: ComponentFixture<MyEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
