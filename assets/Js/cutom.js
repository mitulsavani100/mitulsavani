function sendmail(){
  var fname = $('#fname').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var message = $('#message').val();

    // var body = $('#body').val();

    var Body='First Name: '+fname+ 'Last Name: '+lname+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
    //console.log(name, phone, email, message);

    Email.send({
      SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
      To: 'mitulsavani100@gmail.com',
      From: "mitulsavanirnw@gmail.com",
      Subject: "New message on contact from "+fname,
      Body: Body
    }).then(
    message =>{
        //console.log (message);
        if(message=='OK'){
        alert('Your mail has been send. Thank you for connecting.');
        }
        else{
          console.error (message);
          alert('There is error at sending message. ')
          
        }

      }
    );



}