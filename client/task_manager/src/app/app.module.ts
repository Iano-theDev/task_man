import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { StarComponent } from './shared/stars/star.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { HighLightDirective } from './shared/directives/app-highlight.directive';
@NgModule({
    declarations: [
        AppComponent,
        HighLightDirective
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RegisterComponent,
        LoginComponent,
        HeaderComponent,
        StarComponent,
        BrowserAnimationsModule,
        HttpClientModule,
        MatDialogModule
    ]
})
export class AppModule { }
