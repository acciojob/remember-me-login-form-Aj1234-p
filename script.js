//your JS code here. If required.
let submitButton = document.querySelector('#submit');
let userName = document.querySelector('#username');
let passWord = document.querySelector('#password');
let checkBox = document.querySelector('#checkbox');
let loginButton = document.querySelector('#existing');
let formContainer = document.querySelector('#form-container');

let newUser, newPassword, userDetails = [];
submitButton.addEventListener('click',(e)=>{
  e.preventDefault();
  newUser = userName.value, newPassword = passWord.value;
  console.log("username ",newUser);
  console.log("password ",newPassword);
   alert(`Logged in as ${newUser}`);
   if(checkBox.checked){
       let isExist = false;
       let existDetails = JSON.parse(localStorage.getItem("User Details ")) || [];
       for(let i=0;i<existDetails.length;i++){
        let user = existDetails[i];
        if(user.name===newUser){
          isExist = true;
          loginButton.style.display = 'inline';
        }
       }
       if(!isExist){
         userDetails.push({name: newUser, pass:newPassword})
         localStorage.setItem("User Details ",JSON.stringify(userDetails));
       }
      }else{
        if(JSON.parse(localStorage.getItem("User Details "))!==null){
        let fetchDetails = JSON.parse(localStorage.getItem("User Details "));
        let updateDetails = fetchDetails.filter((user)=> user.name!==newUser);
        localStorage.clear();
        localStorage.setItem("User Details ",JSON.stringify(updateDetails));
       }
   }
})


loginButton.addEventListener('click',(e)=>{
  alert(`Logged in as ${newUser}`);
  console.log("login button")
})