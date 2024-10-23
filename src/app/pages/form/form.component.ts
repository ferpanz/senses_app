import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  nombre: string = '';
  fecha: string = '';
  horario: string = '';
  tipoMasaje: string = '';
  minFecha: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.setMinFecha();  // Llamada para establecer la fecha mínima al cargar el componente
  }

  setMinFecha() {
    const hoy = new Date();
    const anio = hoy.getFullYear();
    const mes = (hoy.getMonth() + 1).toString().padStart(2, '0');
    const dia = hoy.getDate().toString().padStart(2, '0');
    this.minFecha = `${anio}-${mes}-${dia}`;
  }

  onSubmit() {
    const numeroWhatsapp = '5493571530727';
    const mensaje = `Reserva de masaje:
    Nombre: ${this.nombre}
    Fecha: ${this.fecha}
    Horario: ${this.horario}
    Tipo de masaje: ${this.tipoMasaje}`;

    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }

  navegar(direccion: string) {
    this.router.navigate([direccion]);
  }
}
