
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator({
		speed: 800
	});
});

function sendMail() {

	var email_body = document.getElementById("message").value;
	var sender_name = document.getElementById("name").value;
	var sender_email = document.getElementById("email").value;

	alert("Email Sent");

    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': 'vGb6jlgG5PkpZxZoJWDTMw',
        'message': {
          'from_email': sender_email,
          'to': [
              {
                'email': 'ginangeta@gmail.com',
                'name': 'Gina Wambui Ngeta',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'Portfolio Contact!',
          'html': email_body
        }
      }
     }).done(function(response) {
	   console.log(response); // if you're into that sorta thing
	   alert("Email Sent");
     });
}