import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ShearedService } from '../sheared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:any
  username !: FormControl
  constructor(private service :ShearedService) { }

  ngOnInit(): void {


this.username = new FormControl('',Validators.required);
  }





}
