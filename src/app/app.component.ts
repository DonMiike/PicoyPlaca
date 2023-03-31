import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-pico-placa';
  placa: string = "";
  fecha: string = "";
  hora: string = ""
  resultado: string = "";

  onSubmit(form: NgForm) {
    debugger;
    if (form.valid) {
      const digito = Number(this.placa.charAt(this.placa.length - 1));
      const hora = Number(this.hora.split(':')[0]);
      const minuto = Number(this.hora.split(':')[1]);

      if (this.placa.length === 8 || this.placa.length === 9) {
        if (this.validarPicoPlaca(digito, this.fecha, hora, minuto)) {
          this.resultado = 'El vehículo no puede circular en la carretera.';
        } else {
          this.resultado = 'El vehículo si puede circular en la carretera.';
        }
      }
    }
  }


  validarPicoPlaca(digito: number, fecha: string, hora: number, minuto: number): boolean {
    debugger;
    const diaSemana = new Date(fecha).getDay();
    if (diaSemana === 5 || diaSemana === 6) {
      return false;
    }
    if (diaSemana == 0) {
      if ((digito === 1 || digito === 2) && (((hora >= 5 && minuto >= 0) && (hora <= 8)) || ((hora >= 16 && minuto >= 0) && (hora <= 20)))) {
        return true;
      } else {
        return false;
      }
    }
    if (diaSemana == 1) {
      if ((digito === 3 || digito === 4) && (((hora >= 5 && minuto >= 0) && (hora <= 8)) || ((hora >= 16 && minuto >= 0) && (hora <= 20)))) {
        return true;
      } else {
        return false;
      }
    }
    if (diaSemana == 2) {
      if ((digito === 5 || digito === 6) && (((hora >= 5 && minuto >= 0) && (hora <= 8)) || ((hora >= 16 && minuto >= 0) && (hora <= 20)))) {
        return true;
      } else {
        return false;
      }
    }
    if (diaSemana == 3) {
      if ((digito === 7 || digito === 8) && (((hora >= 5 && minuto >= 0) && (hora <= 8)) || ((hora >= 16 && minuto >= 0) && (hora <= 20)))) {
        return true;
      } else {
        return false;
      }
    }
    if (diaSemana == 4) {
      if ((digito === 9 || digito === 0) && (((hora >= 5 && minuto >= 0) && (hora <= 8)) || ((hora >= 16 && minuto >= 0) && (hora <= 20)))) {
        return true;
      } else {
        return false;
      }
    }
    return true;

  }



}








