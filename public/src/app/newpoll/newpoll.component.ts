import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-newpoll',
  templateUrl: './newpoll.component.html',
  styleUrls: ['./newpoll.component.css']
})
export class NewpollComponent implements OnInit {
  poll = {
      user: "",
      question: "",
      option1: {text: "", votes: 0},
      option2: {text: "", votes: 0},
      option3: {text: "", votes: 0},
      option4: {text: "", votes: 0},
  };
  user={};
  constructor(private _api: ApiService) {
 }

  ngOnInit() {
    this.poll.user = this._api.getUser().name;
    this.user = this._api.getUser();
    // console.log(this.poll.user);
    //
  }
  onSubmit(){
  	this._api.createPoll(this.poll);
    console.log(this.poll);
  }

}
