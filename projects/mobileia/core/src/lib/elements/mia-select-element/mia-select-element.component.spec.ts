import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MiaSelectElementComponent } from './mia-select-element.component';

describe('MiaSelectElementComponent', () => {
  let component: MiaSelectElementComponent;
  let fixture: ComponentFixture<MiaSelectElementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MiaSelectElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaSelectElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
