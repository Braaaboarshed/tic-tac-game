import { Component, OnInit } from '@angular/core';
import { ShearedService } from '../sheared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:any
  constructor(private route :ActivatedRoute) { }

  ngOnInit(): void {
this.route.queryParams
.subscribe(params=>{
  this.user = params
  console.log(this.user)

})
  }
  

}