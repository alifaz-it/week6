import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  username = '';
  cekTmbl = false;

  constructor() { }

  ngOnInit() {
  }
  onupdateServername(event : Event){
    this.username = (<HTMLInputElement>event.target).value;
  }
  TombolCek(){
    if(this.username === ''){
      return this.cekTmbl = true;
    }
  }
  hapus(){
    return this.username='';
  }

}
