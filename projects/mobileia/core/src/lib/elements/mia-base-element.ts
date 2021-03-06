import { Component, OnInit, Input, Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive()
export class MiaBaseElementComponent implements OnInit {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() { }

  ngOnInit() {
  }
}