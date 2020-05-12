import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { ForgotComponent } from './forgot/forgot.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'prefix',
  component: AuthComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
      pathMatch: 'prefix'
    },{
      path: 'register',
      component: RegisterComponent,
      pathMatch: 'prefix'
    },{
      path: 'forgot',
      component: ForgotComponent,
      pathMatch: 'prefix'
    },{
      path: '',
      redirectTo: 'login',
      pathMatch: 'prefix'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
