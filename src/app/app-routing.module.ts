import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
}, {
  path: '',
  loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
