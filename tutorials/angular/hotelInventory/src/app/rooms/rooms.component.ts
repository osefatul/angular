import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})



export class RoomsComponent {

  hotelName: string = "Hilton hotel"
  numberOfRooms: number = 50

  hideRooms:boolean = false;

  rooms: Room = 
  { availableRooms: 25,
    bookedRooms: 23,
    totalRooms: 50,
  }

  toggle(){
    this.hideRooms = !this.hideRooms; //toggle the value
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

  addRoom(){
    const room: RoomList = 
      {
        roomNumber:10,
        roomType: "new Deluxe Room",
        amenities: "Air Conditioner, Free Wifi",
        price: 400,
        photos:"https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
        checkInTime: new Date('11-Feb-2023'),
        checkOutTime: new Date('18-Feb-2023')
      }
      
      // this.roomsList.push(room)  //mutating room list
      this.roomsList = [...this.roomsList, room]
  }

  // ------- Receive data from child------------------
  selectedJson!: RoomList
  
  selectParentRoom (room:RoomList){
    // console.log(room)
    this.selectedJson = room
  }
  
}
