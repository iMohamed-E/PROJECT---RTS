// ==================== Website Header ==================== //
function OpenMenu() {
  document.getElementById("Nav-List").classList.add("active");
  document.getElementById("Open").style.display = "none";
  document.getElementById("Close").style.display = "block";
}

function CloseMenu() {
  document.getElementById("Nav-List").classList.remove("active");
  document.getElementById("Close").style.display = "none";
  document.getElementById("Open").style.display = "block";
}

document.getElementById("Close").style.display = "none";

// ==================== Footer Form ==================== //
const Form = document.querySelector("Form");
const FullName = document.getElementById("Full-Name");
const EmailAdress = document.getElementById("Email-Adress");
const PhoneNumber = document.getElementById("Phone-Number");
const CompanyName = document.getElementById("Company-Name");
const Message = document.getElementById("Message");
const Subject = document.getElementById("Subject");
const Notification = document.getElementById("Notification");
const NotificationMessage = document.getElementById("Notification-Message");
const NotificationBtn = document.getElementById("Notification-Btn");

// function SendEmail() {
//   const EmailContent = `Full Name : ${FullName.value}<br> <br>
//                         Email Adress : ${EmailAdress.value}<br> <br>
//                         Phone Number : ${PhoneNumber.value}<br> <br>
//                         Company Name : ${CompanyName.value}<br> <br>
//                         Message : ${Message.value}<br> <br>`;

//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "info@rts-tg.com",
//     Password: "9B7856054D44100D3342B2B1EA23FF8761CE",
//     To: "info@rts-tg.com",
//     From: "info@rts-tg.com",
//     Subject: Subject.value,
//     Body: EmailContent,
//   }).then((response) => {
//     console.log(response); // Log the response to check its value
//     if (response === "Ok" || response.toLowerCase() === "ok") {
//       showNotification(
//         "Your Message Was Sent Successfully And We Will Respond To You Within 24 Hours Of Working Days.",
//         "success"
//       );
//     } else {
//       showNotification(
//         "Failed To Send The Message, Please Try Again.",
//         "error"
//       );
//     }
//   });
// }
function SendEmail() {
  const EmailContent = `Full Name : ${FullName.value}<br> <br>
                        Email Adress : ${EmailAdress.value}<br> <br>
                        Phone Number : ${PhoneNumber.value}<br> <br>
                        Company Name : ${CompanyName.value}<br> <br>
                        Message : ${Message.value}<br> <br>`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mohamede.official@gmail.com",
    Password: "40507E66E4078A03C07AC01055056F2E9422",
    To: "mohamede.official@gmail.com",
    From: "mohamede.official@gmail.com",
    Subject: Subject.value,
    Body: EmailContent,
  }).then((response) => {
    console.log(response);
    if (response === "Ok" || response.toLowerCase() === "ok") {
      showNotification(
        "Your Message Was Sent Successfully And We Will Respond To You Within 24 Hours Of Working Days.",
        "success"
      );
    } else {
      showNotification(
        "Failed To Send The Message, Please Try Again.",
        "error"
      );
    }
  });
}

function showNotification(message, type) {
  Notification.classList.remove("Notification-success", "Notification-error");
  if (type === "success") {
    Notification.classList.add("Notification-success");
  } else if (type === "error") {
    Notification.classList.add("Notification-error");
  }
  NotificationMessage.innerText = message;
  Notification.classList.add("show");
}

NotificationBtn.addEventListener("click", () => {
  Notification.classList.remove("show");
});

Form.addEventListener("submit", (event) => {
  event.preventDefault();
  SendEmail();
});