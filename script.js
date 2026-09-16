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
    if(stored)
    loginButton.style.display = 'inline';
  }
  catch(err){
    console.error("Canont fetch the data from local storage");
    userDetails = [];
  }
}

function setDataLocal(){
  localStorage.setItem(USER_KEY,JSON.stringify(userDetails));
}

form.addEventListener('submit',(e)=>{
  username = userName.value, userpassword = passWord.value;
   alert(`Logged in as ${username}`);
   if(checkBox.checked){
        userDetails.push({name: username, password:userpassword})
        setDataLocal();
        loadingFromStorage();
    } 
     else{
        localStorage.removeItem(USER_KEY);
        loadingFromStorage();
   }
});


loginButton.addEventListener('click',(e)=>{
  e.preventDefault();
  alert(`Logged in as ${userName.value}`);
});

loadingFromStorage();