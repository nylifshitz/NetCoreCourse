import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any;

  constructor(private http: HttpClient){}
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
//     this.http.get('https://localhost:5001/api/users').subscribe(respons => {
//     this.users = respons;
// }, error => {
// console.log(error);
// })
this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error)
    })
  }
}
