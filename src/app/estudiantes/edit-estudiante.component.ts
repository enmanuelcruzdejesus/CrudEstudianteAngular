import { EstudianteService } from './../services/estudiante.service';
import { Estudiante } from './../model/Estudiante';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-estudiante',
  templateUrl: './edit-estudiante.component.html',
  styleUrls: ['./edit-estudiante.component.css']
})
export class EditEstudianteComponent implements OnInit {

  estudiante =  new Estudiante();
  constructor(private service: EstudianteService, private router: Router,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      this.estudiante.id = params["id"];
      this.estudiante.matricula = params["matricula"];
      this.estudiante.nombre = params["nombre"];
      this.estudiante.apellido = params["apellido"];
      this.estudiante.telefono = params["telefono"];

     
  });
  }

  save(){
    console.log(JSON.stringify(this.estudiante));
    this.service.saveEstudiante(this.estudiante).subscribe((res)=>{
  
    
      this.router.navigate(['estudiante-list']);

    },
    (err)=>{
      console.error(err);
    });
  }
}
