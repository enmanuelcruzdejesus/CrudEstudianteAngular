import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteListComponent } from './estudiantes/estudiante-list.component';
import { CreateEstudianteComponent } from './estudiantes/create-estudiante.component';
import { EditEstudianteComponent } from './estudiantes/edit-estudiante.component';
import { PreviewEstudianteComponent } from './estudiantes/preview-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteListComponent,
    CreateEstudianteComponent,
    EditEstudianteComponent,
    PreviewEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
