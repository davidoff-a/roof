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

export const selectors = [".overlay", ".modal__submit", ".modal__close"];

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