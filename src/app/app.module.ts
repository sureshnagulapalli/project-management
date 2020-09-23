import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMainComponent } from './nav-main/nav-main.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeBaseComponent } from './home/home-base/home-base.component';
import { HomeNotificationsComponent } from './home/home-notifications/home-notifications.component';
import { ProjectChatComponent } from './project/project-chat/project-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMainComponent,
    HomeComponent,
    ProjectComponent,
    TasksComponent,
    HomeBaseComponent,
    HomeNotificationsComponent,
    ProjectChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
