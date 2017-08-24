var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	user: String,
	question: String,
	option1: {text: String, votes: 0},
	option2: {text: String, votes: 0},
	option3: {text: String, votes: 0},
	option4: {text: String, votes: 0},
}, {timestamps: true})

mongoose.model('Poll', PollSchema);
