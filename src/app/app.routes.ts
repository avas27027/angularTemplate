import { Routes } from '@angular/router';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: "",
        component: LandingPageComponent,
        children: [
            { path: "", component: LandingPageComponent },
            { path: "settings", component: LandingPageComponent },
        ],
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];
