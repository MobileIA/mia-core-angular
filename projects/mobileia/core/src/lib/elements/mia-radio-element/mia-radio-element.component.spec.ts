import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MiaRadioElementComponent } from './mia-radio-element.component';

describe('MiaRadioElementComponent', () => {
  let component: MiaRadioElementComponent;
  let fixture: ComponentFixture<MiaRadioElementComponent>;

  beforeEach(waitForAsync(() => {
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
