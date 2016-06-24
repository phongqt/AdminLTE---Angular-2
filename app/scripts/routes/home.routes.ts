import { RouterConfig } from '@angular/router';
import { HomeComponent } from '../components/home.component';
import { LoginComponent } from '../components/login.component';
import { DashboardComponent } from '../components/dashboard.component';
import { CanDeactivateGuard } from '../class/can.deactivate.guard';

export const HomeRoutes: RouterConfig = [
  { 
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  { 
    path: 'login',
    component: LoginComponent,
  },
];

