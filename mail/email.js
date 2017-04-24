// var helper = require('sendgrid').mail
// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);


// // // using SendGrid's v3 Node.js Library
// // // https://github.com/sendgrid/sendgrid-nodejs

// // // var helper = require('sendgrid').mail;
// // // var from_email = new helper.Email('test@example.com');
// // // var to_email = new helper.Email('test@example.com');
// // // var subject = 'Hello World from the SendGrid Node.js Library!';
// // // var content = new helper.Content('text/plain', 'Hello, Email!');
// // // var mail = new helper.Mail(from_email, subject, to_email, content);

// // // var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
// // // var request = sg.emptyRequest({
// // //   method: 'POST',
// // //   path: '/v3/mail/send',
// // //   body: mail.toJSON(),
// // // });

// // // sg.API(request, function(error, response) {
// // //   console.log(response.statusCode);
// // //   console.log(response.body);
// // //   console.log(response.headers);
// // // });


// var email = {

// 	send: function(emSubject, senderMail, message, callback){
			
// 			var from_email = new helper.Email(senderMail);
// 			var to_email = new helper.Email('btnysci@yahoo.com');
// 			var subject = emSubject;
// 			var content = new helper.Content("text/plain", message);
// 			var mail = new helper.Mail(from_email, subject, to_email, content);

// 			var request = sg.emptyRequest({
// 			  method: 'POST',
// 			  path: '/v3/mail/send',
// 			  body: mail.toJSON()
// 			});
// 			console.dir("request");
// 			console.dir(JSON.stringify(request, null, 4));

// 			sg.API(request, function(error, response) {
// 			  if(error){
// 			  	console.log(error);
// 			  }   	
// 			  console.log(response.statusCode)
// 			  console.log(response.body)
// 			  console.log(response.headers)
// 			  callback(error);
// 			});

// 			// callback();
// 	}
// }

// module.exports = email;





var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

var email = {

	send: function(Sname, emSubject, senderMail, message, callback){

		var request = sg.emptyRequest({
		  method: 'POST',
		  path: '/v3/mail/send',
		  body: {
		    personalizations: [
		      {
		        to: [
		          {
		            email: 'btnysci@yahoo.com',
		          },
		        ],
		        subject: emSubject,
		      },
		    ],
		    from: {
		      email: "mailer_portfolio@immense-garden-12263.herokuapp.com",
		      name: Sname
		    },
		    content: [
		      {
		        type: 'text/plain',
		        value: message,
		      },
		    ],
		    reply_to: {
		    	email: senderMail,
		    	name: Sname
		    }
		  },
		});

		//With promise
		sg.API(request)
		  .then(response => {
		    console.log(response.statusCode);
		    console.log(response.body);
		    console.log(response.headers);
		    callback();
		  })
		  .catch(error => {
		    //error is an instance of SendGridError
		    //The full response is attached to error.response
		    console.log("Error:",error.response.statusCode);
		  });

		//With callback
		// sg.API(request, function(error, response) {
		//   if (error) {
		//     console.log('Error response received');
		//   }
		//   console.log(response.statusCode);
		//   console.log(response.body);
		//   console.log(response.headers);
		// });
	}
}

module.exports = email;
