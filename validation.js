const heroFocus = document.querySelector(".hero-focus");
const contactFocus = document.querySelector(".contact-focus");

const heroEmailError = document.querySelector(".email-error");
const contactEmailError = document.querySelector(".contact-email-error");

const heroSuccess = document.querySelector(".hero-success");
const contactSuccess = document.querySelector(".contact-success");

function ValidateEmailHero(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        heroEmailError.classList.remove("active");
        heroSuccess.classList.add("active");
        document.form.reset();
        heroFocus.focus();
        return true;
    }else{
        heroEmailError.classList.add("active");
        heroSuccess.classList.remove("active");
        document.form.reset();
        heroFocus.focus();
        return false;
    }
}

function ValidateEmailContact(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        contactEmailError.classList.remove("active");
        contactSuccess.classList.add("active");
        document.contactForm.reset();
        contactFocus.focus();
        return true;
    }else{
        contactEmailError.classList.add("active");
        contactSuccess.classList.remove("active");
        document.contactForm.reset();
        contactFocus.focus();
        return false;
    }
}