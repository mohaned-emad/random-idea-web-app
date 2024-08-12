class Modal {
  constructor() {
      this._modal = document.querySelector('#modal');
      this._userModal = document.querySelector('#new-modal');
      this._modalBtn = document.querySelector('#modal-btn');
      this._userBtn = document.querySelector('#user-btn');
      this.eventListeners();
  }

  openModal() {
      this._modal.style.display = 'block';
  }

  
  closeModal() {
      this._modal.style.display = 'none';
  }
  
  openUserModal() {
      this._userModal.style.display = 'block';
  }

  closeUserModal() {
      this._userModal.style.display = 'none';
  }

  outsideClick(e) {
      if (e.target === this._modal) {
          this.closeModal();
      }
      if (e.target === this._userModal) {
          this.closeUserModal();
      }
  }

  eventListeners() {
      this._modalBtn.addEventListener('click', this.openModal.bind(this));
      this._userBtn.addEventListener('click', this.openUserModal.bind(this));
      window.addEventListener('click', this.outsideClick.bind(this));
      document.addEventListener('closeModal', this.closeModal.bind(this));
      document.addEventListener('closeUserModal', this.closeUserModal.bind(this));
  }
}

export default Modal;