import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'form', loadComponent: () => import('./reactive-form/reactive-form.component').then(m => m.ReactiveFormComponent) },
  { path: '', redirectTo: 'form', pathMatch: 'full' },
];
