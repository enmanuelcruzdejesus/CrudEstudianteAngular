import { EditEstudianteComponent } from './estudiantes/edit-estudiante.component';
import { CreateEstudianteComponent } from './estudiantes/create-estudiante.component';
import { EstudianteListComponent } from './estudiantes/estudiante-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '' , redirectTo: "/estudiante-list" , pathMatch: 'full'},
  {path:'estudiante-list' , component: EstudianteListComponent},
  {path:'create-estudiante' , component: CreateEstudianteComponent},
  {path:'edit-estudiante' , component: EditEstudianteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[EstudianteListComponent,CreateEstudianteComponent,EditEstudianteComponent];
