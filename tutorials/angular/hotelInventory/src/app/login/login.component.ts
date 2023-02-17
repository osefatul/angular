import { LoginService } from './login.service';
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

  constructor(private router: Router, private loginService: LoginService){}

  onSubmit = () => {
    // this.email === "admin@example.com" &&
    // this.password === "admin" &&
    // alert("Login success!");


    if(this.loginService.login(this.email, this.password)){
      //this.router.navigate(['/rooms', 'add'])
      this.router.navigateByUrl("/rooms")
    }
  }

  onDataChanged(){
    console.log(this.email, this.password)
  }
}
