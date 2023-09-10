const emailField = document.querySelector(".emailInput");
const button = document.querySelector(".subscribeButton");
const emailSpanDiv = document.querySelector(".emailSpanDiv");
const input=document.querySelector('.emailInput');
const mainDiv=document.querySelector('.mainDiv');
const container=document.querySelector('.containerDiv');

button.addEventListener("click",function (){
  const email = emailField.value;
  const isEmailValid = validateEmail(email)
  const errorSpan = document.querySelector('.errorMessage')

    if (isEmailValid && errorSpan) { 
        errorSpan.parentElement.removeChild(errorSpan)
        input.classList.remove('errorDesign');
        }
  if(isEmailValid)
  {
    document.location.href = "./thanks.html";
  }

    if(errorSpan) { 
        return
    }
if(!errorSpan && !isEmailValid){
    const redErrorSentence=document.createElement('span');
    redErrorSentence.classList.add('errorMessage');
    input.classList.add('errorDesign');
    emailField.classList.add('margin');
    redErrorSentence.innerHTML="Valid email required";
    emailSpanDiv.appendChild(redErrorSentence);
}
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
