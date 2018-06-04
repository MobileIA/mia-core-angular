import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaDynamicFormComponent } from './mia-dynamic-form.component';

describe('MiaDynamicFormComponent', () => {
  let component: MiaDynamicFormComponent;
  let fixture: ComponentFixture<MiaDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiaDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
