var captcha = document.getElementById("captcha-value");
var btnRefresh = document.getElementById("btn-refresh");
var captchaText = document.getElementById("inpt-captcha-text");
var btnCheck = document.getElementById("btn-check");

var posibleVal = ["A", "B", "C", "D", "E", "a", "b", "c", "0", "1", "2"];
var parentElement;

function createTooltip(parentElement, errorMessage){
  if(parentElement.lastElementChild.getAttribute("class") =="tooltiptext") {
    parentElement.lastElementChild.innerHTML = errorMessage;
    parentElement.lastElementChild.style.display = "block";
  } else {
    var span = document.createElement("span");
    span.innerText = errorMessage;
    span.classList.add("tooltiptext");
    parentElement.append(span);
  }
}

function randomVal(valToRandom, captchaLength){
  return valToRandom[Math.floor(Math.random() * captchaLength)];
}

function generateCaptcha(allVal, lenToRandom, lengToCaptcha, captchaContainer){
  var captcha = "";
  for(var i=0; i<lenToRandom; i++){
    captcha += randomVal(allVal, lenToRandom);
    if(captcha.length == lengToCaptcha){
      break;
    }
  }
  captchaContainer.value = captcha;
}


function validateCaptcha(message){
  parentElement = event.target.parentElement;
  (captcha.value != captchaText.value)? createTooltip(parentElement, message):
  (parentElement.lastElementChild.getAttribute("class") == "tooltiptext")?parentElement.lastElementChild.style.display = "none": "";
}

window.addEventListener("load", function(){
  generateCaptcha(posibleVal, posibleVal.length, 6, captcha);
  btnRefresh.addEventListener("click", function(){
    generateCaptcha(posibleVal, posibleVal.length, 6, captcha);
  });

  btnCheck.addEventListener("click", function(){
    validateCaptcha("Ingresaste un valor diferente");
  });
})
