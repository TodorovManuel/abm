import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { PaisComponent } from '../pais/pais.component';

@NgModule({
  declarations: [
    PaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule // Agrega FormsModule a la lista de imports
  ]
})
export class PaisModule { }
