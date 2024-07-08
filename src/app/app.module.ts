import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
import { UserModule } from './user/user.module';

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterOutlet,
        SharedModule,
        TasksModule,
        UserModule,
    ],
})
export class AppModule {}
