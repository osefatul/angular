import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string ="";
  password: string ="";

  onSubmit = () => {
    this.email === "admin@example.com" &&
    this.password === "admin" &&
    alert("Login success!");
  }


  onDataChanged(){
    console.log(this.email, this.password)
  }
}
