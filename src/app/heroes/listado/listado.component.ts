import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  public heroes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Hulk'];
  public heroesBorrados: string[] = [];

  constructor() {
    console.log('constructor');
  }
  
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  borrarHeroe() {
    const heroeBorrado:string = this.heroes.pop() || '';
    this.heroesBorrados.push(heroeBorrado);
  }

}
