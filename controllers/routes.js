var express = require('express');
var router = express.Router();

var express = require('express');

var router = express.Router();

var email = require('../mail/email');
// var helper = require('sendgrid').mail;
// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

var homeData = {
	headerName: "Henry Lee",
	PortfolioLi: "Portfolio", 
	ContactLi: "Contact",
	AboutLi: "About",
	aboutMe: "About Me",
	paragraph: "Hello! My name is Henry and I am motivated software engineer and a full stack web developer." +
			   " I believe my energy and my positive attitude will be a great asset to any company. I enjoy programming so much and I think what separates me from others is, programming is not something I do just for a great salary. Programming is something that I actually enjoy and love doing. " +
			   " When I am not playing video games or exercising, I am often coding programs and researching new tech and languages during my leisure. It is something very special to me and I will often find myself staying after work hours just to keep programming since it is so much fun, especially with a great team.",

	paragraphTwo: "I have three years of programming experience with C++, JavaScript (es5, es6, es7), Node, Express with RESTful API's, MongoDB, MySQL, React with Redux, HTML/Bootstrap, CSS, Webpack, Babel and many more. I consider myself to be very talented at solving algorithms, and when faced with a really challenging one, using resources available to me such as the internet and whiteboards never lets me down." + 
				  "My attention to detail is also robust. I am a great team player and am always willing to communicate with other team members and help them out as much as I can when needed. I also always make sure to never get lazy when it comes to writing clean, properly formatted code with best practices.",
	paragraphThree: "Some of my hobbies are video games, music, cooking and coding.",
	connectHeader: "Connect with Me",
	formName: "Name:",
	formSubject: "Subject:",
	formEmail: "Email:",
	formMessage: "Message:",
	connectWith: "Connect with Me",
	contactInfo: "Contact Info",
	education: "Education",
	experience: "Experience",
	projects: "Projects",
	hobbies: "Hobbies",
	skills: "Skills"
};

router.get('/', function(req, res){
	res.redirect('/MyBio');
});

router.get('/MyBio', function(req, res){
	res.render('portfolio', homeData);
});

router.post('/email', function(req, res){
	console.log('EMAIL REQ', req.body);
	console.log('EMAIL REQ', req.body.name);
	console.log('EMAIL REQ', req.body.subject);
	console.log('EMAIL REQ', req.body.fromEmail);
	console.log('EMAIL REQ', req.body.message);
	var name = req.body.name;
	var emSubject = req.body.subject;
	var senderMail = req.body.fromEmail;
	var message = req.body.message;

	// var myEmail = 'btnysci@yahoo.com';

	email.send(name, emSubject, senderMail, message, function(){
		// res.redirect('/contact');	
		res.send("done");
	});
})

module.exports = router;