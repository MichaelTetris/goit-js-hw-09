import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const l="feedback-form-state",t={email:"",message:""},a=document.querySelector(".feedback-form"),s=document.querySelector("input"),n=document.querySelector("textarea");a.addEventListener("input",m);a.addEventListener("submit",i);function m(e){e.target===s?t.email=e.target.value:e.target===n&&(t.message=e.target.value);const r=JSON.stringify(t);localStorage.setItem(l,r)}const o=JSON.parse(localStorage.getItem(l));function c(){if(o)s.value=o.email,n.value=o.message;else return}c();function i(e){e.preventDefault();const r=a.querySelector("input[name='email']").value.trim(),u=a.querySelector("textarea[name='message']").value.trim();r!==""&&u!==""?(console.log("Значення ключа в localStorage:",t),e.currentTarget.reset(),localStorage.removeItem(l),alert("Значение успешно удалено из localStorage.")):alert("Обидва поля повинні бути заповнені.")}
//# sourceMappingURL=commonHelpers2.js.map