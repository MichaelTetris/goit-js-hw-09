

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
  } else if (event.target === inputTextarea){
    userForm.message = event.target.value;
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

  const emailInput = form.querySelector("input[name='email']").value.trim();
  const messageTextarea = form.querySelector("textarea[name='message']").value.trim();
  if (emailInput !== '' && messageTextarea !== ''){
    console.log("Значення ключа в localStorage:", userForm);
    event.currentTarget.reset();
    localStorage.removeItem(storageKey);
    alert("Значение успешно удалено из localStorage.");
  } else {
    alert("Обидва поля повинні бути заповнені.");
  }
  
};

