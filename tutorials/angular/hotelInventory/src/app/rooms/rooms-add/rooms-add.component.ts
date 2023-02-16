import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RoomsService } from 'src/app/services/rooms.service';
import { RoomList } from 'src/interface';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})



export class RoomsAddComponent implements OnInit {
  //Default values
  roomsList: RoomList[] = [];
  isDirty:boolean = false;

  room: RoomList ={
    roomNumber: null,
    roomType: "",
    amenities: "",
    price: null,
    photos: "",
    checkInTime: new Date(),
    checkOutTime: new Date()
  }

  constructor(private roomService: RoomsService, private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.roomsList = this.roomService.getRoom()
  }

  //get form instance
  @ViewChild ("roomForm") roomForm!: NgForm;

  //Real time change data demonstrated in the console.log
  onDataChanged (){
    this.isDirty = true;
    // console.log('Form data changed:', this.room);

    console.log(this.roomForm?.form.pristine)
    console.log(this.roomForm?.form.dirty)
  }

  onSubmit (){
    this.roomsList = [...this.roomsList, this.room ]
    console.log("room updated")
    console.log("Here is the updated rooms list", this.roomsList)
  }
}
