var path = require('path');
var polls = require('./../controllers/poll_controller.js');

module.exports = function(app){
	app.get('/polls', polls.getAll);
	app.post('/polls', polls.create);
	app.get('/polls/:id', polls.getOnePoll);
	app.delete('/polls/delete/:id', polls.delete);
	// app.get('/answers/:q_id', answers.getAll);
	// app.post('/answers/:q_id', answers.create);
	app.get('/polls/option1/:id', polls.updateOne);
	app.get('/polls/option2/:id', polls.updateTwo);
	app.get('/polls/option3/:id', polls.updateThree);
	app.get('/polls/option4/:id', polls.updateFour);
	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve("./public/dist/index.html"))
	});
}
