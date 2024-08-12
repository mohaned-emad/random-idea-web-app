// import '@fortawesome/fontawesome-free/css/all.css';
import Modal from './components/Modal';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';
import UserForm from './components/UserForm.js';
import './css/style.css';

new Modal();
const ideaForm = new IdeaForm();
const userForm = new UserForm();
ideaForm.render();
userForm.render();
new IdeaList();
