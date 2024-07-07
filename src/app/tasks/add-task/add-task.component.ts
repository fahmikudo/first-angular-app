import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskRequest } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-add-task',
    standalone: true,
    templateUrl: './add-task.component.html',
    styleUrl: './add-task.component.css',
    imports: [FormsModule, CommonModule],
})
export class AddTaskComponent {
    @Input({ required: true }) userId!: string;
    @Output() close = new EventEmitter<void>();

    enteredTitle = '';
    enteredSummary = '';
    enteredDate = '';

    private tasksService = inject(TasksService);

    onCancel() {
        this.close.emit();
    }

    onSubmit() {
        this.tasksService.addTask(
            {
                title: this.enteredTitle,
                summary: this.enteredSummary,
                dueDate: this.enteredDate,
            },
            this.userId
        );
        this.close.emit();
    }
}
