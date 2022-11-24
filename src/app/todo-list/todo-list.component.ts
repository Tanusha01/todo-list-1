import { Component, HostListener } from '@angular/core';
import { Task } from "../types/task.type";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TaskDetailsDialogComponent } from "../task-details-dialog/task-details-dialog.component";
import { DialogRef } from "@angular/cdk/dialog";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public taskList: Task[] = [];
  public newTask: string;

  private lastId: number = 0;
  private users: string[] = [
    'John', 'Bob', 'Alex'
  ];

  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) {
  }

  @HostListener('window:keydown.enter', ['$event'])
  showNotification(/*event: KeyboardEvent*/) {
    this._snackBar.open('Task has been added', '', {
      duration: 3 * 1000,
    });
  }

  addTask(): void {
    if (this.newTask) {
      this.taskList.push({ title: this.newTask, id: ++this.lastId, completed: false });
      this.newTask = '';

      this.showNotification();
    }
  }

  removeTask(taskId: number): void {
    const taskIndex = this.taskList.findIndex(task => task.id === taskId);
    this.taskList.splice(taskIndex, 1);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskDetailsDialogComponent, {
      width: '600px',
      data: { users: this.users },
    });

    dialogRef.afterClosed().subscribe((result: Object) => {
      console.log(result);
    });
  }
}
