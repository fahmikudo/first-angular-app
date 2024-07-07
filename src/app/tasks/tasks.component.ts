import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskRequest } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, AddTaskComponent],
})
export class TasksComponent {
    @Input({ required: true }) userId!: string;
    @Input({ required: true }) name: string | undefined;
    isAddingTask: boolean = false;

    constructor(private tasksService: TasksService) {}

    get selectedUserTasks() {
        return this.tasksService.getUserTasks(this.userId);
    }

    onCompleteTask(id: string) {
        this.tasksService.removeTask(id);
    }

    onStartAddTask() {
        this.isAddingTask = true;
    }

    onCloseAddTask() {
        this.isAddingTask = false;
    }
}
