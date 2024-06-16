import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyProgrammeComponent } from './study-programme/study-programme/study-programme.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: 'study-programme',
    component: StudyProgrammeComponent
  }, // <- Aquí debes cerrar el objeto de configuración con una coma

  {
    path: 'admin',
    component: AdminComponent
  }, // <- Aquí también debes cerrar el objeto de configuración con una coma
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
