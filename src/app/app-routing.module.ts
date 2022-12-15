import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { TodoListComponent } from "./todo/components/todo-list/todo-list.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

// localhost:4200/
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'todo',
    // component: TodoListComponent
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
