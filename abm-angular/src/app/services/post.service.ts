import { Injectable } from'@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  enviarDatos (datos: any) {
    throw new Error ('Method not implemented.');
  }
// Get
private urlPais = 'http://localhost:3000/api/paises/all'; 
private urlProvincia = 'http://localhost:3000/api/';
private urlMunicipio = 'http://localhost:3000/api/paises/';

// Agregar
private urlPaisAgregar = 'http://localhost:3000/api/paises/add';
private urlProvinciaAgregar = 'http://localhost:3000/api/paises/';
private urlMunicipioAgregar = 'http://localhost:3000/api/paises/';

// Borrar
private urlPaisBorrar = 'http://localhost:3000/api/paises/delete/';
private urlProvinciaBorrar = 'http://localhost:3000/api/paises/';
private urlMunicipioBorrar = 'http://localhost:3000/api/paises/';

// Modificar
private urlPaisModificar = 'http://localhost:3000/api/paises/update/';
private urlProvinciaModificar = 'http://localhost:3000/api/paises/';
private urlMunicipioModificar = 'http://localhost:3000/api/paises/';
constructor(private httpClient: HttpClient) { }

// Get functions
getPaises(): Observable<any>{
  return this.httpClient.get(this.urlPais);
}
getProvincias(pais:any): Observable<any> {
  return this.httpClient.get(this.urlProvincia+pais.id+"/all");
}
getMunicipios(pais:any, provincia:any): Observable<any> {
    return this.httpClient.get(this.urlMunicipio+pais.id+"/provincias/"+provincia.id+"/all");
}


// Agregar functions
agregarPais(pais: any): Observable<any> {
  return this.httpClient.post(this.urlPaisAgregar, pais);
}
agregarProvincia(provincia: any): Observable<any> {
  return this.httpClient.post(this.urlProvinciaAgregar+provincia.id+"/add", provincia);
}
agregarMunicipio(provincia:any, municipio: any): Observable<any> {
  return this.httpClient.post(this.urlMunicipioAgregar, provincia.id+"/provincias/"+municipio.id+"/add", municipio);
}


// Borrar functions
borrarPais(id: number): Observable<any> {
  return this.httpClient.delete(this.urlPaisBorrar + '/' + id);
}
borrarProvincia(id: number, idProvincia: number): Observable<any> {
  return this.httpClient.delete(this.urlProvinciaBorrar + '/' + id + '/provincias/' + idProvincia);
}
borrarMunicipio(id: number, idProvincia:number, idMunicipio:number): Observable<any> {
  return this.httpClient.delete(this.urlMunicipioBorrar + '/' + id + '/provincias/' + idProvincia + '/municipios/' + idMunicipio);
}


// Modificar functions
modificarPais(pais: any): Observable<any> {
  return this.httpClient.put(this.urlPaisModificar + '/' + pais.id, pais);
}
modificarProvincia(provincia: any): Observable<any> {
  return this.httpClient.put(this.urlProvinciaModificar + '/' + provincia.id, provincia);
}
modificarMunicipio(municipio: any): Observable<any> {
  return this.httpClient.put(this.urlMunicipioModificar + '/' + municipio.id, municipio);
}

}