import { Injectable } from '@angular/core';
import { type TaskRequest } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary: 'Learn all the basic and advance features of Angular',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u2',
            title: 'Master Angular',
            summary: 'Learn all the basic and advance features of Angular',
            dueDate: '2025-12-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Master Angular',
            summary: 'Learn all the basic and advance features of Angular',
            dueDate: '2025-12-31',
        },
    ];

    constructor() {
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskRequestData: TaskRequest, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskRequestData.title,
            summary: taskRequestData.summary,
            dueDate: taskRequestData.dueDate,
        });
        this.saveTasks();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
