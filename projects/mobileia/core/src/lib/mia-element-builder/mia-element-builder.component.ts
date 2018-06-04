import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mia-element-builder',
  templateUrl: './mia-element-builder.component.html',
  styleUrls: ['./mia-element-builder.component.css']
})
export class MiaElementBuilderComponent implements OnInit {

  @Input() field:any;
  @Input() form: FormGroup;
  
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() { }

  ngOnInit() {
  }

}
