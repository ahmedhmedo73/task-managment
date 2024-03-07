import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  selectSelectedTask,
  selectTaskFormDialogVisibility,
  selectTaskFormMode,
} from '../../store/tasks.selectors';
import {
  AddTask,
  CloseTaskFormDialog,
  SetSelectedTask,
  UpdateTask,
} from '../../store/tasks.actions';
import { ITask, TaskFormModeType } from '../../models/tasks.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  taskForm!: FormGroup;
  taskFormMode: TaskFormModeType = 'Add';
  taskFormDialogVisibility: boolean = false;
  subscriptionList: Subscription[] = [];
  defaultTaskImage: string = 'assets/images/tasks/cards/card1.svg';

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.createTaskForm();
    this.getTaskFormDialogVisibility();
    this.getTaskFormMode();
    this.getSelectedTask();
  }
  createTaskForm(): void {
    this.taskForm = this.formBuilder.group({
      categoryId: 0,
      title: ['', Validators.required],
      image: [this.defaultTaskImage, Validators.required],
    });
  }
  getTaskFormMode(): void {
    this.subscriptionList.push(
      this.store.select(selectTaskFormMode).subscribe({
        next: (value: TaskFormModeType) => {
          this.taskFormMode = value;
          if (value == 'Add') {
            this.createTaskForm();
          }
        },
      })
    );
  }
  getSelectedTask(): void {
    this.subscriptionList.push(
      this.store.select(selectSelectedTask).subscribe({
        next: (value: ITask | undefined) => {
          if (this.taskFormMode == 'Update') {
            this.handleDataForUpdate(value);
          }
        },
      })
    );
  }
  handleDataForUpdate(selecetedTask: ITask | undefined): void {
    if (selecetedTask) {
      this.taskForm.patchValue(selecetedTask);
    }
  }
  getTaskFormDialogVisibility(): void {
    this.subscriptionList.push(
      this.store.select(selectTaskFormDialogVisibility).subscribe({
        next: (value: boolean) => (this.taskFormDialogVisibility = value),
      })
    );
  }
  submit(): void {
    switch (this.taskFormMode) {
      case 'Add':
        this.addTask();
        break;
      case 'Update':
        this.updateTask();
        break;
    }
  }
  addTask(): void {
    if (this.taskForm.valid) {
      this.store.dispatch(AddTask({ task: this.taskForm.value }));
      this.closeDialog();
    }
  }
  updateTask(): void {
    if (this.taskForm.valid) {
      this.store.dispatch(
        UpdateTask({
          task: this.taskForm.value,
        })
      );
      this.closeDialog();
    }
  }
  closeDialog(): void {
    this.store.dispatch(CloseTaskFormDialog());
    this.createTaskForm();
    this.store.dispatch(SetSelectedTask({ task: undefined }));
  }

  ngOnDestroy(): void {
    this.subscriptionList.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
