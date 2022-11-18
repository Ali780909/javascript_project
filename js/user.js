var userInfo = document.querySelector("#user_info");
var userDom = document.querySelector("#user");
var links = document.querySelector("#links");
var logoutBtn = document.querySelector("#logout");

let username = localStorage.getItem("username");
if(username){
links.remove();
userInfo.style.display = "flex";
userDom.innerHTML = username;
}
logoutBtn.addEventListener("click", function()
{
localStorage.clear();
setTimeout(() =>{
window.location = "register.html";
}, 500);
});

