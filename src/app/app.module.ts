import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Importando o AppComponent e outros componentes standalone
import { AppComponent } from './app.component';
import { RegisterComponent } from './views/pages/register/register.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    AppComponent, // Importe o AppComponent em vez de declará-lo
    RegisterComponent // Importe o RegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

