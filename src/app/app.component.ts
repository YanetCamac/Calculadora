import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  
  /*Esto es la calculadora del video  la estructura que proporciono 
  numero1: number = 0;
  numero2:number = 0;
  resultado:number = 0;

  sumar():void{
    this.resultado = this.numero1 + this.numero2;
  }
  restar():void{
    this.resultado = this.numero1 - this.numero2;
  }
  multiplicar():void{
    this.resultado = this.numero1 * this.numero2;
  }
  dividir():void{
    this.resultado = this.numero1 / this.numero2;
  }
    */

  dato: string = '';

  boton (n : string): void{
    console.log('Clic en:', n);
    this.dato += n;
  }


  total(): void{
    if (!this.validar(this.dato)) {
      this.dato = 'Error';
      return;
    }

    try {
      const resultado = this.evaluar(this.dato);
      this.dato = resultado.toString();
    } catch (e) {
      this.dato = 'Error';
    }
  }

  borrar(){
    this.dato = '';
  }

  validar(x : string): boolean{
    const xPermitido = /^[0-9+\-*/\s]+$/;
    return xPermitido.test(x);
  }
  evaluar(expresion : string) : number{
    const x = this.guardaLista(expresion);

    let resultado = parseInt(x[0]);
    let i = 1;

    while (i < x.length) {
      const operador = x[i];
      const siguienteNumero = parseInt(x[i +1]);
      if (operador === '+') {
        resultado += siguienteNumero;
      } else if (operador === '-') {
        resultado -= siguienteNumero;
      } else if (operador === '*') {
        resultado *= siguienteNumero;
      } else if (operador === '/') {
        resultado /= siguienteNumero;
      }
      i +=2;
    }

    return resultado;
  }

  guardaLista(x : string): string[]{
    return x.split(/([+\-*/])/).filter(token => token.trim() !== '');
  }
}
