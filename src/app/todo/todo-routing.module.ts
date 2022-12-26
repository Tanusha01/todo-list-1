import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoTaskDetailsComponent } from "./components/todo-task-details/todo-task-details.component";

// localhost:4200/todo/
const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: TodoListComponent,
    data: {
      breadcrumb: 'Task list'
    }
  },
  {
    path: 'task',
    component: TodoTaskDetailsComponent,
    data: {
      breadcrumb: 'Task'
    },
    children: [
      {
        path: 'new',
        component: TodoTaskDetailsComponent,
        data: {
          breadcrumb: 'Create new task'
        }
      },
      {
        path: ':id',
        component: TodoTaskDetailsComponent,
        data: {
          breadcrumb: 'Edit task'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
