import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Nombre del componente
  templateUrl: 'app.component.html'
  // template: `
  //   <h1>Hola Mundo</h1>
  // `,
})
export class AppComponent {
  public titulo: string = 'Contador App';
  public contador: number = 5;
  public base: number = 5;

  acumular( valor: number): void {
    this.contador += valor;
  }
}
