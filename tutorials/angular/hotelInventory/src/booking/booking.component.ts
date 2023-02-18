import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

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
      roomId: new FormControl({value:"R12312", disabled:true}, {validators: [Validators.required]}),
      guestEmail: ["", [Validators.required, Validators.email]],
      checkingDate: ["", Validators.required],
      checkoutDate: [""],
      bookingStatus: [""],
      bookingAmount: [""],
      bookingDate: [""],
      mobileNumber: ["", {updateOn: 'blur'}],
      guestName: ["", [Validators.required, Validators.minLength(5)]],
      address: this.fb.group({
        addressLin1: ["", Validators.required],
        addressLin2: [""],
        city: ["", Validators.required],
        state: ["", Validators.required],
        country: [""],
        zipCode: [""],
      }),
      guests: this.fb.array([this.fb.group({
        guestName: ["", [Validators.required, Validators.minLength(5)]],
        age: new FormControl("", [Validators.required])
      })]),
      tnc: new FormControl(false, {validators: [Validators.requiredTrue]}),
    },
    // {updateOn: 'blur'}
    );

    this.bookingForm.valueChanges.subscribe(data => {
      console.log(data)
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

  removeGuest (guestIndex: number) {
    this.guests.removeAt(guestIndex)
  }


  addPassport (){
    this.bookingForm.addControl("passport", new FormControl(""));
  }

  removePassport (){
    this.bookingForm.get("passport") && this.bookingForm.removeControl("passport");
  }

  onSubmit() {
    console.log(this.bookingForm.getRawValue())
    this.bookingForm.reset({
      roomId: "",
      guestEmail: "",
      checkingDate: "",
      checkoutDate: "",
      bookingStatus: "",
      bookingAmount: "",
      bookingDate: "",
      mobileNumber: "",
      guestName: "",
      address:{
        addressLin1: "",
        addressLin2: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
      },
      guests: [],
      tnc: false,
    });
  }
}

