import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  // styleUrls: ['./tugas3.component.css']
  styles:[`
  .online {
      color:  white;
  }
`]
})
export class Tugas3Component implements OnInit {
  allowNewServer = false;
  campus = '';
  arraycampus = [];

  constructor() { 
    
  }

  ngOnInit() {
  }

  

  onCreationStatus() {
    if(this.allowNewServer == false){
      this.campus = 'POLITEKNIK NEGERI MALANG';
      this.allowNewServer = true;
    } else {
      this.allowNewServer = false;
      this.campus = '';
    } 
    this.arraypisaneuy();
  }

  arraypisaneuy() {
    this.arraycampus.push(this.arraycampus.length +1);
}

  onUpdateServerName(event: Event) {
    this.campus = (<HTMLInputElement>event.target).value;
  }
}
 
