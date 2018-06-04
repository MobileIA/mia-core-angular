import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mia-filezone-element',
  templateUrl: './mia-filezone-element.component.html',
  styleUrls: ['./mia-filezone-element.component.css']
})
export class MiaFilezoneElementComponent implements OnInit {

  @Input() field:any = {};
  @Input() form:FormGroup;
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() { }

  ngOnInit() {
  }

  ngOnChange(){
    console.log(this.field.value);
    // this.field.value.
  }
}
