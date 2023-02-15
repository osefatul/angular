import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HotelsComponent } from './hotels/hotels.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {path: 'hotels', component: HotelsComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: "rooms", component: RoomsComponent},
  {path:"rooms/:roomId", component: RoomBookingComponent},
  //if there is no path go to hotels.
  {path: "", redirectTo:"hotels", pathMatch: "full"},
  {path:"**",  component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
