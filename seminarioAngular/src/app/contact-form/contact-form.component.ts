import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  model = {
    name: "",
    age: false,
    rrss: "",
    username: ""
  }

  ngOnInit(): void {
  }
  onSubmit(values: any):void{
    console.log('Resultados Formulario', values);
    console.log(this.model);

  }

}
