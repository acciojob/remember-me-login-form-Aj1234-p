const submitButton = document.querySelector('#submit');
const userName = document.querySelector('#username');
const passWord = document.querySelector('#password');
const checkBox = document.querySelector('#checkbox');
const loginButton = document.querySelector('#existing');
const form = document.querySelector('form');

const USERNAME_KEY = 'username';
const PASSWORD_KEY = 'password';

function showExistingButtonIfSaved() {
  const savedUser = localStorage.getItem(USERNAME_KEY);
  const savedPass = localStorage.getItem(PASSWORD_KEY);

  if (savedUser && savedPass) {
    loginButton.style.display = 'inline';
  } else {
    loginButton.style.display = 'none';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = userName.value;
  const password = passWord.value;

  alert(`Logged in as ${username}`);

  if (checkBox.checked) {
    localStorage.setItem(USERNAME_KEY, username);
    localStorage.setItem(PASSWORD_KEY, password);
  } else {
    // This is the part that was missing
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(PASSWORD_KEY);
  }

  showExistingButtonIfSaved();
});

loginButton.addEventListener('click', (e) => {
  e.preventDefault();

  const savedUser = localStorage.getItem(USERNAME_KEY);
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});

showExistingButtonIfSaved();