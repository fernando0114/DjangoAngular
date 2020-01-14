import { Component } from '@angular/core';
import { ApiService } from './api.service';

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
  constructor(private api: ApiService) {
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
    this.api.getMember(member.id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log("Aconteceu um erro");
      }
    );
  };
}
