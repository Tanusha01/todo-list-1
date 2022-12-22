import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { TaskService } from "../../services/task.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Task } from '../../types/task.type';
import { of, Subscription, take, takeUntil } from "rxjs";

@Component({
  selector: 'app-todo-task-details',
  templateUrl: './todo-task-details.component.html',
  styleUrls: ['./todo-task-details.component.scss']
})
export class TodoTaskDetailsComponent implements OnInit, OnDestroy {
  public taskForm = this.fb.group({
    title: new FormControl<string>(
      null,
      [Validators.required]
    ),
    description: new FormControl<string>(null, [Validators.maxLength(5)]),
    assignee: new FormControl<string>(null, [Validators.required]),
    isUrgent: new FormControl<boolean>(null),
  });
  public users: string[];
  public title: string;

  private taskId: number;
  private task: Task;
  private subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.firstChild.params.subscribe(async params => {
      this.taskId = params['id'];
      if (this.taskId) {
        this.task = await this.taskService.getTask(+this.taskId);
        this.setFormValue();
      }
      this.title = this.taskId ? 'Edit task' : 'Create task';
    });
    this.taskService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  goBack(): void {
    this.router.navigate(['/todo']);
  }

  save(): void {
    if (this.taskId) {
      this.taskService.editTask();
    } else {
      this.taskService.createTask();
    }
    this.goBack();
  }

  private setFormValue(): void {
    this.taskForm.setValue({
      title: this.task.title,
      description: this.task.description || null,
      isUrgent: this.task.isUrgent,
      assignee: this.task.assignee
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
