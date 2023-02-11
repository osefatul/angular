import { AppConfig } from './../../AppConfig/app.config.interface';
import { APP_SERVICE_CONFIG } from './../../AppConfig/app.config.service';
import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})

export class RoomsService {
  constructor(@Inject (APP_SERVICE_CONFIG) private config:AppConfig )  {
    console.log(this.config.apiEndpoint)
    console.log("room service initialized...")
  }

  roomsList: RoomList[] = [
    {
      roomNumber:202,
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, Free Wifi",
      price: 400,
      photos:"https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
      checkInTime: new Date('11-Feb-2023'),
      checkOutTime: new Date('18-Feb-2023')
    },
    {
      roomNumber:303,
      roomType: "King size bed",
      amenities: "Air Conditioner, Free Wifi",
      price: 300,
      photos:"https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
      checkInTime: new Date('11-Feb-2023'),
      checkOutTime: new Date('18-Feb-2023')
    },
    {
      roomNumber:400,
      roomType: "Deluxe Queen size bed",
      amenities: "Air Conditioner, Free Wifi",
      price: 400,
      photos:"https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
      checkInTime: new Date('11-Feb-2023'),
      checkOutTime: new Date('18-Feb-2023')
    },
    {
      roomNumber:500,
      roomType: "Deluxe Queen and King size bed",
      amenities: "Air Conditioner, Free Wifi",
      price: 450,
      photos:"https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
      checkInTime: new Date('11-Feb-2023'),
      checkOutTime: new Date('18-Feb-2023')
    }
  ]

  getRoom (){
    return this.roomsList
  }

}
