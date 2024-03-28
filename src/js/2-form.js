

const storageKey = "feedback-form-state";
const userForm = {
  email: "",
  message: "",
};


const form = document.querySelector(".feedback-form");
const inputEmail = document.querySelector("input");
const inputTextarea = document.querySelector("textarea");


form.addEventListener("input", onTextInput);

form.addEventListener("submit", handleSubmit);

function onTextInput(event){
  
  if(event.target === inputEmail){
    userForm.email = event.target.value;
    console.log("email", userForm.email);
  }else if (event.target === inputTextarea){
    userForm.message = event.target.value;
    console.log("message", userForm.message);
  }
  const keyValue = JSON.stringify(userForm);  
  localStorage.setItem(storageKey, keyValue);
}
const savedMesage = JSON.parse(localStorage.getItem(storageKey));

function saverTextInput(){
  
  if(!savedMesage){
    return;
  }else{
    inputEmail.value = savedMesage.email;
    inputTextarea.value = savedMesage.message;
  }
    
};  

saverTextInput();  

function handleSubmit(event){
  event.preventDefault();
  console.log(savedMesage);

  event.currentTarget.reset();
  localStorage.removeItem(storageKey);
  
}