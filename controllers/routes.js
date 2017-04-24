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
	paragraph: "Hello! My name is Henry and I am ecstatic to become a software engineer and a full stack web developer." +
			   " I got into programming after graduating from the University of California Riverside with a bachelors in" +
			   " Political Science. Afterwards, I took two years of C++ at Los Angeles Valley College and then enrolled in the UCLA Extension coding" +
			   " program. This is just the very beginning of what I consider my programming career and I plan on expanding my" +
			   " knowledge in JavaScript, C++ and various languages all through out my life.",
	paragraphTwo: "I consider programming to be a hobby of mine and I enjoy doing it. My goal is to become a software engineer and a full stack web developer that can contribute to a great team to build robust and technologically advanced applications.",
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