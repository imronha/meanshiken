import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-showpoll',
  templateUrl: './showpoll.component.html',
  styleUrls: ['./showpoll.component.css']
})
export class ShowpollComponent implements OnInit {
  poll ={
    _id:0,
    user: "",
    question: "",
	option1: {text: "", votes: 0},
	option2: {text: "", votes: 0},
	option3: {text: "", votes: 0},
	option4: {text: "", votes: 0},
}
  constructor(private _api: ApiService, private _route: ActivatedRoute, private route: Router) {

  }

  ngOnInit() {
  	this.getPoll();
  	// this.getAllAnswers();
  }

  getPoll(){
  	this._route.paramMap
  	.switchMap(params => {
  		return this._api.getPoll(params.get('id'));
  	})
  	.subscribe(data => this.poll = data);
  }

  voteOne(poll_id){
  	this._api.voteOne(poll_id);
    this._api.getAllAnswers(this.poll._id)
    .then(data => this.poll = data)
    .catch(errors => console.log(errors))
  }
  voteTwo(poll_id){
  	this._api.voteTwo(poll_id);
    this._api.getAllAnswers(this.poll._id)
    .then(data => this.poll = data)
    .catch(errors => console.log(errors))
  }
  voteThree(poll_id){
  	this._api.voteThree(poll_id);
    this._api.getAllAnswers(this.poll._id)
    .then(data => this.poll = data)
    .catch(errors => console.log(errors))
  }
  voteFour(poll_id){
  	this._api.voteFour(poll_id);
    this._api.getAllAnswers(this.poll._id)
    .then(data => this.poll = data)
    .catch(errors => console.log(errors))
  }
}
