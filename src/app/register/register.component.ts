import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShearedService } from '../sheared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  useName :any
  constructor(private service :ShearedService) { }

  ngOnInit(): void {
  }

  
  


}