let submitButton = document.querySelector('#submit');
let userName = document.querySelector('#username');
let passWord = document.querySelector('#password');
let checkBox = document.querySelector('#checkbox');
let loginButton = document.querySelector('#existing');
let formContainer = document.querySelector('#form-container');
let form = document.querySelector('form');
let userDetails;

let username, userpassword;
const USER_KEY = "User Details";

function loadingFromStorage(){
  try{
    const stored = localStorage.getItem(USER_KEY);
    userDetails = stored ? JSON.parse(stored) : [];
    if(stored && userDetails.length > 0)
      loginButton.style.display = 'inline';
  }
  catch(err){
    console.error("Cannot fetch the data from local storage");
    userDetails = [];
  }
}

function setDataLocal(){
  localStorage.setItem(USER_KEY, JSON.stringify(userDetails));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  username = userName.value, userpassword = passWord.value;
  alert(`Logged in as ${username}`);
  if(checkBox.checked){
    userDetails.push({name: username, password: userpassword});
    setDataLocal();
    loadingFromStorage();
  }
});

loginButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (!userDetails || userDetails.length === 0) {
    alert("No saved user found.");
    return;
  }

  // Log in directly with stored credentials — do NOT compare to userName.value/passWord.value
  const savedUser = userDetails[userDetails.length - 1];
  alert(`Logged in as ${savedUser.name}`);
});

loadingFromStorage();