import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaCheckboxElementComponent } from './mia-checkbox-element.component';

describe('MiaCheckboxElementComponent', () => {
  let component: MiaCheckboxElementComponent;
  let fixture: ComponentFixture<MiaCheckboxElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiaCheckboxElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaCheckboxElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
