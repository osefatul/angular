import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;
  constructor( private fb: FormBuilder){}
  
  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl({value:"R12312", disabled:true}),
      guestEmail: [""],
      checkingDate: [""],
      checkoutDate: [""],
      bookingStatus: [""],
      bookingAmount: [""],
      bookingDate: [""],
      mobileNumber: [""],
      guestName: [""],
      address: this.fb.group({
        addressLin1: [""],
        addressLin2: [""],
        city: [""],
        state: [""],
        country: [""],
        zipCode: [""],
      }),
      guests: this.fb.array([this.fb.group({
        guestName: [""],
        age: new FormControl("")
      })])
    });
  }

  get guests() {  
    return this.bookingForm.get("guests") as FormArray;
  }

  addGuest (){
    this.guests.push(
      this.fb.group({
        guestName: [""],
        age: new FormControl("")
    }))
  }

  onSubmit() {
    console.log(this.bookingForm.getRawValue())
  }
}

