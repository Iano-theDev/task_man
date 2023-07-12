import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { VaccCardComponent } from './vacc-card/vacc-card.component';
import { VaccMatTableComponent } from './vacc-mat-table/vacc-mat-table.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'sub-register', component: RegisterComponent, outlet: 'sidebar'},
  { path: 'tasks', component: TasksComponent },
  { path: 'vacc', component: VaccCardComponent },
  { path: 'vacc-mat', component: VaccMatTableComponent},
  { path: 'new-task', component: AddTaskComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: UpdateProfileComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
