import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-paises',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  // Variables para almacenar datos y manejar formularios
  paises: any[] = [];
  nuevoPais: any = {};
  paisSeleccionado: any = {};
  modoEdicion = false;
id: number;
idPaisBorrar: any;
idPaisModificar: any;
nombrePaisModificado: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.obtenerPaises();
  }

  // Obtener todos los países
  obtenerPaises() {
    this.postService.getPaises().subscribe(data => {
      this.paises = data;
    });
  }

  // Agregar un nuevo país
  agregarPais() {
    this.postService.agregarPais(this.nuevoPais).subscribe(() => {
      this.obtenerPaises();
      this.nuevoPais = {};
    });
  }

  // Eliminar un país
  borrarPais(id: number) {
    this.postService.borrarPais(id).subscribe(() => {
      this.obtenerPaises();
    });
  }

    // Modificar un país
    modificarPais() {
      this.postService.modificarPais(this.paisSeleccionado).subscribe(() => {
        this.obtenerPaises();
        this.modoEdicion = false;
      });
    }

}
