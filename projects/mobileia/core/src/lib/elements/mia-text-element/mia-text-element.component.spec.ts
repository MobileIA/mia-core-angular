import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MiaTextElementComponent } from './mia-text-element.component';

describe('MiaTextElementComponent', () => {
  let component: MiaTextElementComponent;
  let fixture: ComponentFixture<MiaTextElementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MiaTextElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaTextElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
