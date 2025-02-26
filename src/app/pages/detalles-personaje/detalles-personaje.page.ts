import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-detalles-personaje',
  templateUrl: './detalles-personaje.page.html',
  styleUrls: ['./detalles-personaje.page.scss'],
  standalone: false,
})
export class DetallesPersonajePage implements OnInit {
  personaje: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private httpService: HttpService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); 
    if (id) {
      this.obtenerPersonaje(parseInt(id)); 
    }
  }

  obtenerPersonaje(id: number) {
    this.httpService.getPersonajeById(id).subscribe({
      next: (data) => {
        console.log('Personaje recibido:', data);
        this.personaje = data;
      },
      error: (err) => console.error('Error al obtener personaje', err),
    });
  }

  volver() {
    this.router.navigate(['/personajes']);
  }

  irAInicio() {
    this.router.navigate(['/inicio']);
  }
}
