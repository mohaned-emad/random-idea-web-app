import IdeaList from "./IdeaList.js";

class UserForm {
    constructor() {
        this._formModal = document.querySelector('#user-modal');
        this._ideaList = new IdeaList();
    }

    addEventListeners() {
        this._userForm.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this._userForm.elements.username.value) {
            alert('Please fill out all fields');
            return;
        }

        // save user to local storage
        localStorage.setItem('username', this._userForm.elements.username.value);

        this._ideaList.getIdeas();

        document.dispatchEvent(new Event('closeUserModal'));
    }

    render() {
        this._formModal.innerHTML = 
        `
        <form id="user-form">
            <div class="form-control">
                <label for="username">Enter a Username</label>
                <input type="text" name="username" id="username" 
                value="${localStorage.getItem('username') 
                    ? localStorage.getItem('username')
                    : ''}"/>
            </div>
            <button class="btn" type="submit" id="submit">Submit</button>
        </form>
        `;
        this._userForm = document.querySelector('#user-form');
        this.addEventListeners();
    }
}

export default UserForm;