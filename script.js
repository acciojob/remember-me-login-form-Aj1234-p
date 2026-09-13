//your JS code here. If required.
let submitButton = document.querySelector('#submit');
let userName = document.querySelector('#username');
let passWord = document.querySelector('#password');
let checkBox = document.querySelector('#checkbox');
let loginButton = document.querySelector('#existing');
let formContainer = document.querySelector('#form-container');




let newUser, newPassword, userDetails = [];

if(JSON.parse(localStorage.getItem("User Details "))!==null){
  loginButton.style.display = 'inline';
}
submitButton.addEventListener('click',(e)=>{
  e.preventDefault();
  newUser = userName.value, newPassword = passWord.value;
  console.log("username ",newUser);
  console.log("password ",newPassword);
   alert(`Logged in as ${newUser}`);
   if(checkBox.checked){
       console.log("when check box is checked");
       let isExist = false;
       let existDetails = JSON.parse(localStorage.getItem("User Details ")) || [];
       for(let i=0;i<existDetails.length;i++){
        let user = existDetails[i];
        if(user.name===newUser && user.pass === newPassword){
          isExist = true;
          loginButton.style.display = 'inline';
        }
       }
       if(!isExist){
        console.log("user first time");
         userDetails.push({name: newUser, pass:newPassword})
         localStorage.setItem("User Details ",JSON.stringify(userDetails));
       }
      } else{
        console.log("when check box not to be checked");
        if(JSON.parse(localStorage.getItem("User Details "))!==null){
        let fetchDetails = JSON.parse(localStorage.getItem("User Details "));
        console.log("fetch details ",fetchDetails);
        let updateDetails = fetchDetails.filter((user)=> user.name!==newUser && user.pass!==newPassword);
        console.log("update details ",updateDetails);
        localStorage.clear();
        localStorage.setItem("User Details ",JSON.stringify(updateDetails));
       }
   }
})


loginButton.addEventListener('click',(e)=>{
   e.preventDefault();
  let savedName = JSON.parse(localStorage.getItem("User Details "));
  console.log("Saved name",savedName);
  alert(`Logged in as ${savedName[savedName.length-1].name}`);
})