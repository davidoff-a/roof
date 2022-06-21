export const showModal = () => {
  const link = document.querySelector(".phone__link");
  link?.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target;
    if (event && target && target.classList.contains("phone__link")) {
      const overlay = document.querySelector(".overlay");
      overlay.style.display = "block";
    }
  });
};

const closeModal = () => {
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
};

export const selectors = [".overlay", ".modal__close"];

export const handleModalClose = (data) => {
  data.forEach((className) => {
    const elem = document.querySelector(className);
    elem.addEventListener("click", (e) => {
      const target = e.target;
      if (e && target.classList.contains(className.slice(1))) {
        closeModal();
      } else if (e && target.closest(".modal__close")){
        closeModal()
      }
    });
  });
};

export const handleSubmit = () => {
  const phoneSubmit = document.querySelector(".modal__submit");
  phoneSubmit?.addEventListener("click", (e)=>{
    const target = e.target;
    e.preventDefault();
    const phoneInputEl = document.querySelector(".tel__number");
    const phoneNum = phoneInputEl?.value.match(/\d*/gi).join('');
    const regex9 = new RegExp(/(\d{3})(\d{2})(\d{2})(\d{2})/gi);
    const regex10 = new RegExp(/(\d{1})(\d{3})(\d{2})(\d{2})(\d{2})/gi);
    const policyAgree = document.querySelector('.policy__check');

    if (!policyAgree.checked){
      showInformer(`Данные не сохранены. Необходимо Ваше согласие на обработку личных данных`, "warn")
    } else if (phoneNum.length===9){
      phoneInputEl.value = phoneNum.replace(regex9, "+7 ($1) $2 - $3 - $4")
      showInformer(`Данные успешно сохранены.\nСовсем скоро мы с Вами свяжемся по телефону \n ${phoneInputEl.value}`, "ok")
    } else  if (phoneNum.length===10 && phoneNum[0]==="7"){
      phoneInputEl.value = phoneNum.replace(regex10, "+$1 ($2) - $3 - $4 - $5")
      showInformer(`Данные успешно сохранены.\nСовсем скоро мы с Вами свяжемся по телефону \n ${phoneInputEl.value}`, "ok")
    } else {
      showInformer(`Данные не сохранены. Введено ${phoneNum.length}, а нужно 9 без кода страны, 10 - с кодом`, "warn")
    }
  })
}

const showInformer = (message, status) => {
  const informer = document.querySelector('.message');
  const state = {
    warn: "message_warn",
    ok: "message_success",
  }
  informer.style.display = "block";
  const info = document.querySelector(".message__label");
  info.textContent = message;

  informer.classList.add(state[status]);

  const showMessageTimer = setTimeout(()=>{
    info.textContent = "";
        informer.classList.remove(state[status]);
        informer.style.display = "none";
  }, 4000)
}