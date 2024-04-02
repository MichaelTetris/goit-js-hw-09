

const storageKey = "feedback-form-state";
const userForm = {
  email: "",
  message: "",
};


const form = document.querySelector(".feedback-form");
const emailField = form.elements["email"];
const messageField = form.elements["message"];

function saverTextInput(){
  const savedMessage = JSON.parse(localStorage.getItem(storageKey));
  if(savedMessage !== null){ 
    emailField.value = savedMessage.email;
    messageField.value = savedMessage.message;
  }  
    
};  

saverTextInput();  

form.addEventListener("input", onTextInput);
form.addEventListener("submit", handleSubmit);

function onTextInput(event){
  
  if(event.target === emailField){
    userForm.email = event.target.value.trim();
  } else if (event.target === messageField){
    userForm.message = event.target.value.trim();
  }  

  const keyValue = JSON.stringify(userForm);  
  localStorage.setItem(storageKey, keyValue);
};

function handleSubmit(event){
  event.preventDefault();

  const emailInput = form.querySelector("input[name='email']").value.trim();
  const messageTextarea = form.querySelector("textarea[name='message']").value.trim();
  if (emailInput !== '' && messageTextarea !== ''){
    console.log("Значення ключа в localStorage:", userForm);
    event.currentTarget.reset();
    localStorage.removeItem(storageKey);
    /* alert("Значення успішно видалено из localStorage."); */
  } else {
    alert("Обидва поля повинні бути заповнені.");
  }
  
};

