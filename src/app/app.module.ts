import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudyListComponent } from './study-programme/study-list/study-list.component'; // Ajusta la ruta según la ubicación real de tu componente
import { HeaderComponent } from './shared/components/header/header.component';
import { StudyProgrammeComponent } from './study-programme/study-programme/study-programme.component';

@NgModule({
  declarations: [
    AppComponent,
    StudyListComponent, // Asegúrate de agregar StudyListComponent aquí
    HeaderComponent, StudyProgrammeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
