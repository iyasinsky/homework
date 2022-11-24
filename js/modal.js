(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', (e)=>toggleModal(e));
  refs.closeModalBtn.addEventListener('click', (e)=>toggleModal(e));
  refs.modal.addEventListener('click', (e)=>toggleModal(e));
  

  function toggleModal(e) {
    if (e.currentTarget.nodeName!=="BUTTON") {
      if (e.currentTarget === e.target) {
        refs.modal.classList.toggle('is-hidden');
      }
    } else {
      refs.modal.classList.toggle('is-hidden');
    }
   
  }
})();
