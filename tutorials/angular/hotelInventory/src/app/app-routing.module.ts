import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HotelsListComponent } from './hotels/hotels-list/hotels-list.component';
import { HotelsComponent } from './hotels/hotels.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {path: 'hotels', component: HotelsComponent},
  {path:"hotels/:hotelId", component: HotelsListComponent},
  {path: "rooms", component: RoomsComponent},
  {path:"rooms/add", component: RoomsAddComponent},
  {path:"rooms/:roomId", component: RoomBookingComponent},
  {path: "employee", component: EmployeeComponent},

  //If you go to the home page always direct the user to hotels page.
  {path: "", redirectTo:"hotels", pathMatch: "full"},
  {path:"**",  component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
