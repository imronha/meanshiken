var mongoose = require('mongoose')
var Poll = mongoose.model('Poll');

module.exports = {
	getAll: function(req, res){
		Poll.find({})
		.then(poll => {
			res.json(poll);
		})
		.catch(errors => {
			res.status(500).json(errors)
		})
	},
	getOnePoll: function(req, res){
		Poll.findOne({_id: req.params.id})
		.then(poll => {
			res.json(poll);
		})
		.catch(errors => {
			res.status(500).json(errors);
		})
	},
	create: function(req, res){
		var poll = new Poll(req.body);
		poll.save()
		.then( () => {
			console.log('successfully created a question',poll);
			res.json(true);
		})
		.catch(errors => res.status(500).json(errors))
	},

	delete: function(req, res){
		console.log(req.params.id);
		Poll.remove({_id: req.params.id}, function(error){
			if(error){
				console.log('Error');
			}else {
				console.log('Poll Removed!');
				res.json(true);
			}
		})
	},
	updateOne: function(req, res){
		console.log('im here')
		Poll.findOne({_id: req.params.id}, function(errors, poll){
			poll.option1.votes++;
			poll.save(errors => {
				if(errors){
					console.log(errors)
					res.json(errors);
				} else{
					res.json(poll)
				}
			})
		})
	},
	updateTwo: function(req, res){
		console.log('im here')
		Poll.findOne({_id: req.params.id}, function(errors, poll){
			poll.option2.votes++;
			poll.save(errors => {
				if(errors){
					console.log(errors)
					res.json(errors);
				} else{
					res.json(poll)
				}
			})
		})
	},
	updateThree: function(req, res){
		console.log('im here')
		Poll.findOne({_id: req.params.id}, function(errors, poll){
			poll.option3.votes++;
			poll.save(errors => {
				if(errors){
					console.log(errors)
					res.json(errors);
				} else{
					res.json(poll)
				}
			})
		})
	},
	updateFour: function(req, res){
		console.log('im here')
		Poll.findOne({_id: req.params.id}, function(errors, poll){
			poll.option4.votes++;
			poll.save(errors => {
				if(errors){
					console.log(errors)
					res.json(errors);
				} else{
					res.json(poll)
				}
			})
		})
	}
}



// Answer.findOne({_id: req.params.a_id}, function(errors, answer){
// 	answer.likes++;
// 	answer.save(errors => {
// 		if(errors){
// 			console.log(errors)
// 		} else{
// 			res.json(answer)
// 		}
// 	})
// });
