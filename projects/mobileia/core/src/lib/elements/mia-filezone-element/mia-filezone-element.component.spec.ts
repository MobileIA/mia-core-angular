import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaFilezoneElementComponent } from './mia-filezone-element.component';

describe('MiaFilezoneElementComponent', () => {
  let component: MiaFilezoneElementComponent;
  let fixture: ComponentFixture<MiaFilezoneElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiaFilezoneElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaFilezoneElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
