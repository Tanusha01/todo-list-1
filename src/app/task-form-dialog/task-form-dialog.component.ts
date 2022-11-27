import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-task-form-dialog',
  templateUrl: './task-form-dialog.component.html',
  styleUrls: ['./task-form-dialog.component.scss']
})
export class TaskFormDialogComponent {
  public taskForm = this.fb.group({
    title: new FormControl<string>(null),
    description: new FormControl<string>(null),
    assignee: new FormControl<string>(null),
    isUrgent: new FormControl<boolean>(null),
  });

  constructor(
    public dialogRef: MatDialogRef<TaskFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { users: string[] },
    private fb: FormBuilder
  ) {}
}
