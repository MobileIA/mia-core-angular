import { Component } from '@angular/core';
import { MiaDynamicFormService, MiaFileService } from 'projects/mobileia/core/src/public_api';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  form : FormGroup;

  constructor(private dynamicFormService : MiaDynamicFormService, private fileService : MiaFileService){
    this.form = dynamicFormService.generateFormGroup(this.fields);
    //this.form.patchValue({email: "matias@gmail.com"})
  }

  onUpload(files, field) {
    // Subir archivo
    this.fileService.upload("11", files).subscribe(data => {
      if(data.success){
        field.value = data.response[0];
        console.log(data.response[0]);  
      }
      console.log(data);
    });;
  }

  onSend(values){
    console.log(values);
  }

  public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: false,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: false,
    },
    {
      type: 'filezone',
      name: 'picture',
      label: 'Picture',
      required: false,
      onUpload: this.onUpload.bind(this)
    },
    {
      type: 'select',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: false,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' }
      ]
    },
    {
      type: 'radio',
      name: 'gender',
      label: 'Gender',
      value: 'm',
      required: false,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' }
      ]
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: false,
      options: [
        { key: 'f', label: 'Fishing' },
        { key: 'c', label: 'Cooking' }
      ]
    },
    {
      type: 'button',
      name: 'save',
      label: 'Guardar'
    }
  ];
}
