import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mia-dynamic-form',
  templateUrl: './mia-dynamic-form.component.html',
  styleUrls: ['./mia-dynamic-form.component.css']
})
export class MiaDynamicFormComponent implements OnInit {

  @Output() onSend = new EventEmitter();
  @Input() fields: any[] = [];
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    let fieldsCtrls = {};
    for (let f of this.fields) {
      if (f.type != 'checkbox') {
        fieldsCtrls[f.name] = f.required ? new FormControl(f.value || '', Validators.required)
        : new FormControl(f.value || '');
      } else {
        let opts = {};
        for (let opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts)
      }
    }
    this.form = new FormGroup(fieldsCtrls);
  }

  public setValues(params){
    this.form.setValue(params);
  }

  /*toFormGroup(fields: any[] ) {
    let group: any = {};

    fields.forEach(question => {
      group[question.name] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }*/

}
