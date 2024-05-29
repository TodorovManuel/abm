import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostService } from './services/post.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ABM-Front';
  idPais = new FormControl('');

  constructor(private servicioPost: PostService) {
  }
  enviar(){
    console.log(this.idPais.value)
  }
}
