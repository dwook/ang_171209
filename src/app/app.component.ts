import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root', // 태그이름 app-root
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  userList : Array <User> = [];   // 데이터타입을 유저라는 강제 배열을 만듬.
  userName : string = "";
  userAge : number = 0;

  constructor(){
  }

  addUser() : void {
    var  user: User = new User();
    user.userName = this.userName;
	user.userAge =  this.userAge;
	this.userList.push(user);
  }   // 매번 넣을 때 마다 다른 유저가 들어감!

  test() : void {
    var user1: User = new User();
    this.userList.push(user1);
    user1.userName = '동동이';
    user1.userAge = 3;   // 나를 바꾸는 것은 안되. 내안에 있는 것은 바꿀 수 있어.
    user1 = new User();
    user1.userName = '멍멍';
    user1.userAge = 5;
    this.userList.push(user1);
  }

}
