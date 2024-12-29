import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ParentComponent } from './data-binding/parent/parent.component';
import { ChildComponent } from './data-binding/child/child.component';
import { CalculatorComponent } from './calc-app/calculator/calculator.component';

export const routes: Routes = [
  {path: 'parent-data', component:ParentComponent},
  {path: 'child-data', component:ChildComponent},
  {path: 'calc-app',component: CalculatorComponent},

  {path: '**', redirectTo: ''}, //wildcard route for 404 handling
];
