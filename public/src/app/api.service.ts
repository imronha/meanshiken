import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ApiService {
	user={
		name: "",
	};
  constructor(private _http: Http) { }

  login(user){
  	this.user = user;
  }
  getUser(){
  	return this.user;
  }

  getAllPolls(){
  	return this._http.get('/polls')
  	.map(data => data.json())
  	.toPromise();
  }

  createPoll(poll){
  	this._http.post('/polls', poll)
  	.map(data => data.json())
  	.toPromise();
  }
  deletePoll(poll_id){
	  this._http.delete('/polls/delete/'+poll_id)
	  .map(data => data.json())
	  .toPromise();
  }
  getOptions(poll_id, option){
  	return this._http.get('/polls/' + poll_id+'/'+option)
  	.map(data => data.json())
  	.toPromise()
  }
  //
  // createAnswer(answer, id){
  // 	this._http.post('/answers/'+id, answer)
  // 	.map(data => data.json())
  // 	.toPromise()
  // }
  //
  getPoll(poll_id){
  	return this._http.get('/polls/'+poll_id)
  	.map(data => data.json())
  	.toPromise();
  }

  // addVote(poll_id){
  // 	return this._http.post('/polls/option1/'+poll_id, poll_id)
  // 	.map(data => data.json())
  // 	.toPromise()
  // }
  getAllAnswers(poll_id){
	  return this._http.get('/polls/'+poll_id)
	  .map(data => data.json())
	  .toPromise();
  }

  voteOne(answer_id){
	  this._http.get('/polls/option1/'+answer_id)
	  .map(data => data.json())
	  .toPromise();
  }
  voteTwo(answer_id){
	  this._http.get('/polls/option2/'+answer_id)
	  .map(data => data.json())
	  .toPromise();
  }
  voteThree(answer_id){
	  this._http.get('/polls/option3/'+answer_id)
	  .map(data => data.json())
	  .toPromise();
  }
  voteFour(answer_id){
	  this._http.get('/polls/option4/'+answer_id)
	  .map(data => data.json())
	  .toPromise();
  }
}
