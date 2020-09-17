import { EstudianteService } from './../services/estudiante.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Estudiante } from '../model/Estudiante';

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class EstudianteListComponent implements OnInit {

  estudiantes: Estudiante[];
  constructor(private service: EstudianteService, private router: Router) { }

  ngOnInit(): void {

    this.service.getEstudiantes().subscribe((res)=>{
      this.estudiantes = res;

    }, (err)=>{
      console.error(err);
    })
  }

  addEstudiante(){
    this.router.navigate(['create-estudiante']);
  }

  editEstudiante(estudiante: Estudiante){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "id": estudiante.id,
          "matricula": estudiante.matricula,
          "nombre": estudiante.nombre,
          "apellido": estudiante.apellido,
          "telefono": estudiante.telefono
      }
  };

  this.router.navigate(["edit-estudiante"], navigationExtras);

  
}

previewEstudiante(estudiante: Estudiante){
  
}


deleteEstudiante(estudiante: Estudiante){

  
  this.service.deleteEstudiante(estudiante.id).subscribe(res =>{
    console.log(JSON.stringify(res));
  },(err)=>{
    console.error(err);
  });

  this.estudiantes.splice(this.estudiantes.indexOf(estudiante),1);
}


}
