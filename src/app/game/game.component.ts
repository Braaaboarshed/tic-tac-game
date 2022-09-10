import { Xtb } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  
  
  board :any=[]
  xTurn:boolean=true;
  oTurn:boolean=true;
  winnerIsX:boolean=true;
  winnerIsO:boolean=true
  winner:any
  
 inputData :any= {
  id: '',
  value:''

}
  constructor() { }

  ngOnInit(): void {
 
  }

  squareNumber(sq:any){
    let element = document.getElementById(sq)

    
if(this.xTurn && element?.innerHTML ==''){
element.innerHTML='x'
document.getElementById(sq)?.classList.add('open')
}
this.xTurn=!this.xTurn


if(this.oTurn && element?.innerHTML ==''){
  
  element.innerHTML='o'
  document.getElementById(sq)?.classList.add('oTurn')


  } 
  this.whoIsWinner(sq)

}
whoIsWinner(sq:any){
let ele=document.getElementById(sq)?.innerHTML
  for(let i =1;i<10;i++){
    this.board[i] = document.getElementById('sq'+i)?.innerHTML
  }
  if(this.winner)
  return
    if(this.board[1]==this.board[2] && this.board[1]==this.board[3] &&this.board[2]!='')
    this.showthewinner(ele)
    
    else if(this.board[4]==this.board[5] && this.board[4]==this.board[6] &&this.board[4]!='')
    this.showthewinner(ele)
    
    else if(this.board[7]==this.board[8] && this.board[7]==this.board[9] &&this.board[8]!='')
    this.showthewinner(ele)

    else if(this.board[7]==this.board[8] && this.board[7]==this.board[9] &&this.board[9]!='')
    this.showthewinner(ele)

    else if(this.board[1]==this.board[4] && this.board[1]==this.board[7] &&this.board[7]!='')
    this.showthewinner(ele)
   
    else if(this.board[2]==this.board[5] && this.board[2]==this.board[8] &&this.board[8]!='')
    this.showthewinner(ele)

    else if(this.board[3]==this.board[6] && this.board[3]==this.board[9] &&this.board[9]!='')
    this.showthewinner(ele)

    else if(this.board[1]==this.board[5] && this.board[1]==this.board[9] &&this.board[9]!='')
    this.showthewinner(ele)

    else if(this.board[3]==this.board[5] && this.board[3]==this.board[7] &&this.board[7]!='')
    this.showthewinner(ele)

  
  }



showthewinner(winner:any){
   this.winner=winner
   
}
reStaringGame(){
  window.location.reload()
}

}
