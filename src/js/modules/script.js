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
    if (phoneNum.length===9){
      phoneInputEl.value = phoneNum.replace(regex9, "+7 ($1) $2 - $3 - $4")
    }
    if (phoneNum.length===10 && phoneNum[0]==="7"){
      phoneInputEl.value = phoneNum.replace(regex10, "+$1 ($2) - $3 - $4 - $5")
    }
  })

}