import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

// tslint:disable: typedef
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'init',
        data: {
            title: 'init'
        }
    },
    {
        path: 'init',
        loadChildren: () => import('./init/init.module').then(m => m.InitModule),
        data:{
            title:'init'
        }
    }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);

