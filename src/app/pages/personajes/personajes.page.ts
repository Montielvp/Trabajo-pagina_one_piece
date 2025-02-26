import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
  standalone: false,
})
export class PersonajesPage implements OnInit {
  personajes: any[] = [];
  personajesFiltrados: any[] = [];
  searchTerm: string = '';

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.obtenerPersonajes();
  }

  obtenerPersonajes() {
    this.httpService.getPersonajes().subscribe({
      next: (data) => {
        console.log('Datos recibidos de la API:', data); 
        this.personajes = data;
        this.personajesFiltrados = [...this.personajes]; 
      },
      error: (err) => console.error('Error al obtener personajes', err),
    });
  }

  filtrarPersonajes() {
    this.personajesFiltrados = this.personajes.filter((personaje) =>
      personaje.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  verDetalles(id: number) {
    this.router.navigate(['/detalles-personaje', id]);
  }
}
