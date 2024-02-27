import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { GroupComponent } from './components/group/group.component';
import { DescComponent } from './desc/desc.component';


export const routes: Routes = [

    {
        path: 'home', loadComponent: () => import('./components/list/list.component').then(m => m.ListComponent)
    },
    {
        path: 'group', component: GroupComponent
    },
    {
        path: 'list', component: ListComponent
    },
    {
        path: 'desc', component: DescComponent
    },
    {
        path: 'list',
        loadComponent: () => import('./components/list/list.component')
            .then((m) => m.ListComponent),
        title: 'Pokemon List'
    },
    {
        path: 'list/pokemon/:name',
        loadComponent: () => import('./components/list/list.component')
            .then((m) => m.ListComponent),
        title: 'Pokemon Details'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/list?page=1',
    },
    {
        path: '**',
        redirectTo: '/list?page=1',
    },
    {
        path: '**', redirectTo: 'home'
    },
    {
        path: 'list',
        component: ListComponent,
        title: 'Pokemon List'
    },
    {
        path: 'list/pokemon/:name',
        component: DescComponent, // Usar DescComponent para los detalles del Pokemon
        title: 'Pokemon Details'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/list?page=1',
    },
    {
        path: '**',
        redirectTo: '/list?page=1',
    }
    
];
