import { Component, OnInit } from '@angular/core';
import { ShearedService } from '../sheared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:any
  constructor(private service:ShearedService) { }

  ngOnInit(): void {
    this.service.displayName(this.user)
  }
  

}