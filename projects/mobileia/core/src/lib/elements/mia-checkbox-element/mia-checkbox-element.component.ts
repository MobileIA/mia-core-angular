import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mia-checkbox-element',
  templateUrl: './mia-checkbox-element.component.html',
  styleUrls: ['./mia-checkbox-element.component.css']
})
export class MiaCheckboxElementComponent implements OnInit {

  @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() { }

  ngOnInit() {
  }

}
