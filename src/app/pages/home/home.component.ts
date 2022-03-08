import { Component, OnInit ,ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any =""
  userName:string =""
  error :any= null

  constructor(private githubService:GithubService, private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  handleFind = ()=>{
    this.githubService.getUserDetails(this.userName).subscribe(
      (user:any)=>{
        this.user =user;
        this.error= null;
        this.ref.detectChanges()
      },
      (err:any)=>{
        this.user = null;
        this.error ="User not found"
      }
    )
  }

}
