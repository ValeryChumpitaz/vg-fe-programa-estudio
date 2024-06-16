import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyProgrammeComponent } from './study-programme/study-programme/study-programme.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component'; // Ajusta según la ubicación de tu componente Home

const routes: Routes = [
  {
    path: 'study-programme',
    component: StudyProgrammeComponent
  }, // <- Aquí debes cerrar el objeto de configuración con una coma

  {
    path: 'admin',
    component: AdminComponent
  }, // <- Aquí también debes cerrar el objeto de configuración con una coma
  {
    path: 'home',
    component: HomeComponent
  }, // <- Aquí también debes cerrar el objeto de configuración con una coma

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
