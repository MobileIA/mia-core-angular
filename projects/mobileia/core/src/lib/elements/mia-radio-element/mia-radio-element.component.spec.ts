import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaRadioElementComponent } from './mia-radio-element.component';

describe('MiaRadioElementComponent', () => {
  let component: MiaRadioElementComponent;
  let fixture: ComponentFixture<MiaRadioElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiaRadioElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaRadioElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
