import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { ChatComponent } from './chat/chat.component';
import { ClientsComponent } from './clients/clients.component';


const routes: Routes = [{
  path: '',
  component: AdminComponent,
  pathMatch: 'prefix',
  children: [
    {
      path: 'services',
      component: ServicesComponent,
      pathMatch: 'prefix',
    },{
      path: 'chat',
      component: ChatComponent,
      pathMatch: 'prefix',
    },{
      path: 'clients',
      component: ClientsComponent,
      pathMatch: 'prefix'
    },{
      path: '',
      component: DashboardComponent,
      pathMatch: 'prefix'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
