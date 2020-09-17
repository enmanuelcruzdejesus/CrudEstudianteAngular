import { EstudianteService } from './../services/estudiante.service';
import { Estudiante } from './../model/Estudiante';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-estudiante',
  templateUrl: './create-estudiante.component.html',
  styleUrls: ['./create-estudiante.component.css']
})
export class CreateEstudianteComponent implements OnInit {

  estudiante =  new Estudiante();
  constructor(private service: EstudianteService, private router: Router) { }

  ngOnInit(): void {
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
