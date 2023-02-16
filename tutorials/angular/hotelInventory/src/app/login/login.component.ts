import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string ="";
  password: string ="";

  constructor(private router: Router){}

  onSubmit = () => {
    this.email === "admin@example.com" &&
    this.password === "admin" &&
    alert("Login success!");

    //this.router.navigate(['/rooms', 'add'])
    this.router.navigateByUrl("/rooms/add")
  }

  onDataChanged(){
    console.log(this.email, this.password)
  }
}
