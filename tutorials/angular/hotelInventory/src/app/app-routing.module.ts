import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginGuard } from './login/guards/login.guard';
import { HotelsListComponent } from './hotels/hotels-list/hotels-list.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'hotels', 
  component: HotelsComponent,
  canActivate: [LoginGuard]},

  {path: "login", component: LoginComponent},
  {path: "employee", 
  component: EmployeeComponent,
  canActivate: [LoginGuard]},

  {path:"hotels/:hotelId", 
  component: HotelsListComponent,
  canActivate: [LoginGuard]},

  {path: "rooms", 
  loadChildren: ()=> import("./rooms/rooms.module").then(m => m.RoomsModule),
  canActivate: [LoginGuard],
  canLoad: [LoginGuard]
  },

  { path: 'bookings', 
  loadChildren: () => import('./rooms/booking/booking.module').then(m => m.BookingModule),
  canActivate: [LoginGuard]},
  
  {path: "", redirectTo:"login", pathMatch: "full"},
  {path:"**",  component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
