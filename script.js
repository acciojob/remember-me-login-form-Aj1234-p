let submitButton = document.querySelector('#submit');
let userName = document.querySelector('#username');
let passWord = document.querySelector('#password');
let checkBox = document.querySelector('#checkbox');
let loginButton = document.querySelector('#existing');
let formContainer = document.querySelector('#form-container');
let body = document.querySelector('body');

let newUser, newPassword;

function afterCredentialRelod(){
  console.log("Here relod");
 body.addEventListener('DOMContentLoaded',(e)=>{
    if(JSON.parse(localStorage.getItem("User Details"))!==null){
      loginButton.style.display = 'inline';
    }   
  });
}

submitButton.addEventListener('click',(e)=>{
  e.preventDefault();
  newUser = userName.value, newPassword = passWord.value;
  console.log("username ",newUser);
  console.log("password ",newPassword);
   alert(`Logged in as ${newUser}`);
   if(checkBox.checked){
     let existDetails = JSON.parse(localStorage.getItem("User Details")) || [];
       console.log("when check box is checked");
       let isExist = false;
       for(let i=0;i<existDetails.length;i++){
        let user = existDetails[i];
        if(user.name===newUser && user.pass === newPassword){
          isExist = true;
          loginButton.style.display = 'inline';
        }
       }
       if(!isExist){
        console.log("user first time");
        existDetails.push({name: newUser, pass:newPassword})
        localStorage.setItem("User Details",JSON.stringify(existDetails));
        console.log("Call after storing credentials");
        afterCredentialRelod();
       }
    } 
     else{
        localStorage.clear();
       }
   }
});


loginButton.addEventListener('click',(e)=>{
  e.preventDefault();
  let savedName = JSON.parse(localStorage.getItem("User Details"));
  console.log("Saved name",savedName);
  alert(`Logged in as ${savedName[savedName.length-1].name}`);
  console.log("login button")
});

afterCredentialRelod();