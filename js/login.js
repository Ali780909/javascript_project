var username = document.querySelector("#username");
var password = document.querySelector("#password");


var getUser = localStorage.getItem('username');
var getPass = localStorage.getItem('password'); 


var login_button = document.querySelector("#sign_in");
login_button.addEventListener("click", login);
function login(e){
e.preventDefault();
if(username.value === "" || password.value === ""){
alert("Please Enter Your Data");
}
else{ if(
getUser &&
getUser.trim() === username.value.trim() && 
getPass && getPass === password.value
){
setTimeout(() =>{
window.location = "index.html";
}, 500)
}
else{
    alert("username or password is wrong");
}
}
}
