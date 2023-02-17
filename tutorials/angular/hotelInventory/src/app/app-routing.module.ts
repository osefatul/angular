import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HotelsListComponent } from './hotels/hotels-list/hotels-list.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomsRoutingModule } from './rooms/rooms-routing.module';

const routes: Routes = [
  {path: 'hotels', component: HotelsComponent},
  {path: "login", component: LoginComponent},
  {path: "employee", component: EmployeeComponent},
  {path:"hotels/:hotelId", component: HotelsListComponent},
  //If you go to the home page always direct the user to hotels page.
  {path: "", redirectTo:"hotels", pathMatch: "full"},
  {path:"**",  component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RoomsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
