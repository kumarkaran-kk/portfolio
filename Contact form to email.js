function emailSend() {

    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    // var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var messageBody = "Name: " + userName +
        "<br/> Phone: " + phone +
        "<br/> Email: " + email +
        "<br/> Subject: " + subject +
        "<br/> Message: " + message;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kkwebtesting@gmail.com",
        Password: "94EB955FFAA2B0D79B75308AFA43A4F1D674",
        To: 'kumarkaran02175@gmail.com',
        From: "kkwebtesting@gmail.com",
        Subject: "New message from portfolio",
        Body: messageBody
    }).then(
        message => {
            if (message == 'OK') {
                swal("Successful", "Thank you for getting in touch with me. Your message has been successfully received. I will review your message and get back to you as soon as possible.", "success")

            }
            else {
                swal("Error", "Oops! Something went wrong while processing your request. If the problem persists, you can contact me through other means.", "error")
            }
        }
    );
}