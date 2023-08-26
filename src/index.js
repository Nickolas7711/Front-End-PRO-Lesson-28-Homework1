import './styles/style.css';
import { getUsersList, displayUsers } from './components/functionUsersList.js';

const userList = getUsersList();
displayUsers(userList);