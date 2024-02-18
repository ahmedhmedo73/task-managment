import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  taskFormDialogVisibility: boolean = false;
  taskForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.getTaskFormDialogVisibility();
    this.createTaskForm();
  }
  createTaskForm(): void {
    this.taskForm = this.formBuilder.group({
      task: ['', Validators.required],
    });
  }
  getTaskFormDialogVisibility(): void {
    this.tasksService.taskFormDialogVisibility.subscribe(
      (value) => (this.taskFormDialogVisibility = value)
    );
  }

  closeDialog(): void {
    this.tasksService.closeTaskFormDialog();
  }
}
