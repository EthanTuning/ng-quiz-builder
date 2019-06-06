import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleimageComponent } from './simpleimage.component';

describe('SimpleimageComponent', () => {
  let component: SimpleimageComponent;
  let fixture: ComponentFixture<SimpleimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
