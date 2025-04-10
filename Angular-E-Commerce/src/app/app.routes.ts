import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';


export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'shopping-cart',
        component: ShoppingCartComponent
    }
];
