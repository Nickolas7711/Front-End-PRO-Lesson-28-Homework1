import users from './data.js';


export function getUsersList() {
  return users;
}

export function displayUsers(userList) {
  const userListContainer = document.querySelector('#userList');
  userListContainer.innerHTML = '';

  userList.forEach(user => {
    const userItem = document.createElement('div');
    userItem.classList.add('user-item');
    userItem.innerHTML = `
      <img src="${user.avatar}" alt="${user.name} Avatar">
      <h2>${user.name}</h2>
      <p>Age: ${user.age}</p>
      <p>Email: ${user.email}</p>
      <p>Country: ${user.country}</p>
      <p>Company: ${user.company}</p>
      <p>Birthday: ${user.birthday}</p>
    `;
    userListContainer.append(userItem);
  });
}