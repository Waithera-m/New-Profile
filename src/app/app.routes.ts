import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "welcome",
        pathMatch: 'full'
    },
    {
        path: "welcome",
        loadComponent: () => 
            import('./welcome-page/welcome-page.component').then(m => m.WelcomePageComponent)
    }
];
