import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShearedService {

displayName(user:any){
console.log(user)
}
  constructor() { }
}
