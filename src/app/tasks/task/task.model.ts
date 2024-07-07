export interface Task {
    id: string;
    userId: string;
    title: string;
    dueDate: string;
    summary: string;
}

export interface TaskRequest {
    title: string;
    summary: string;
    dueDate: string;
}
