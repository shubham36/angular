import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component'
// const appRoutes: Routes = [
//   {path: 'search', component: SearchComponent}
// ];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
