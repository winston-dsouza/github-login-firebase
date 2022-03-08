import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router ,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm){
    const {email ,password } =f.form.value

    this.auth.signIn(email,password)
    .then((res)=>{
      this.router.navigateByUrl('/')
      this.toastr.success("Sign in sucess")
    })
    .catch((err)=>{
      this.toastr.error("Signin failed")
    })
    
  }

}
