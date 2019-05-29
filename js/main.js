//  SEE-MORE BUTTON(INDEX PAGE)   // 

function seeMore() {
    var span = document.getElementById("more");
    var button = document.getElementById("see-more-button")
    if (span.style.display = "none") {
        span.style.display = "inline"
        button.style.display = "none";
    }
}

//  DISPLAY MANU  //
function displaySmallManu() {
    let hamburger = document.getElementById("hamburger-icon");
    let clear = document.getElementById("clear-icon");
    let menu = document.getElementById("menu");

    hamburger.addEventListener("click", function() {
        menu.style.visibility = "visible";
    });
    clear.addEventListener("click", function() {
        menu.style.visibility = "hidden";
    });
}
displaySmallManu();

//  TEST AND SEND MAIL(CONTACT PAGE)  //

function testForm(ev) {
    ev.preventDefault();
    //console.log('event submit ', ev);

    let regName = /^[a-zA-Z ]{2,30}$/;
    let regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regTextarea = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/;

    let name = document.getElementById("inputName").value;
    let email = document.getElementById("inputEmail").value;
    let message = document.getElementById("inputMessage").value;

    if (regName.test(name) === false || name == "") {
        document.getElementById("firstName").style.background = "#e35152";
        errors++;
    }
    if (regEmail.test(email) === false || email == "") {
        document.getElementById("firstName").style.background = "#e35152";
        errors++;
    }
    if (regTextarea.test(message) === false || mailContent == "") {
        document.getElementById("firstName").style.cssText = "border: 1px solid red;"
        errors++;
    }
    if (errors === 0) {
        message += `<h5>Mail poslao: + ${neme}</h5>`;
        sendEmail(email, message);
    }
}

function sendEmail(email, message) {

    Email.send({
        Host: "smtp.yourisp.com",
        Username: "zajovic@hotmail.com",
        Password: "b0804e4e-d77e-4d9f-9765-7754b47ffd80",
        To: "ukipetrovic@gmail.com",
        From: email,
        Body: message
    }).then(
        message => alert(message)
    ).catch(error => {
        console.log('error received ', error);
    });

}