# MobileIA Core Angular

Libreria para que contiene codigo generalizado que puede utilizarse en todos los proyectos

## Como usar
1. Instalar libreria via [npm](http://npmjs.com):
```bash
npm install @mobileia/core
```

## Generar formularios dinamicos
1. Generar array de elementos:
```js
public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: false,
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
    }
  ];
```
2. Generar metodo para recibir respuesta cuando se envia:
```js
onSend(values){
    console.log(values);
  }
```
3. Agregar elemento en el HTML:
```html
<mia-dynamic-form [fields]="fields" (onSend)="onSend($event) "></mia-dynamic-form>
```