import { Component, OnInit } from '@angular/core';
import { MahasiswaLama } from '../shared/mahasiswaLama';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
 dataMahasiswa:MahasiswaLama[]=[];
 nimMhs = '';
 namaMhs = '';
 kelas = '';
 mahasiswaLama;

  constructor() { }

  ngOnInit() {
  }
  
  addMaLa(){
    this.mahasiswaLama = new MahasiswaLama(this.nimMhs, this.namaMhs, this.kelas);
    this.dataMahasiswa.push(this.mahasiswaLama);
    this.nimMhs='';
    this.namaMhs='';
    this.kelas='';
    
  }
}
