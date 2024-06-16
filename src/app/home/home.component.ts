import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  onSubmit() {
    // Lógica para manejar la submisión del formulario
    console.log('Formulario enviado');
  }

}
