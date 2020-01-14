import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MembersFront';

  members = [
    { name: 'Member 01', id: 1, surname: 'Ciclano', photo: 'http://www.minhaapp.com/photo1' },
    { name: 'Member 02', id: 2, surname: 'Beltrano', photo: 'http://www.minhaapp.com/photo2' },
    { name: 'Member 02', id: 2, surname: 'Fulano', photo: 'http://www.minhaapp.com/photo3' },
  ];
  constructor(private api: ApiService, private router: Router) {
    this.getMembers();
  }
  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data;
      },
      error => {
        console.log("Aconteceu um erro");
      }
    );
  };
  memberClicked = (member) =>{
  this.router.navigate(['member-detail',member.id])
  };
}
