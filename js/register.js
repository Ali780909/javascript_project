var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var register_button = document.querySelector("#sign_up");

register_button.addEventListener("click", register);
function register(e){
e.preventDefault();
if(username.value === ""|| email.value === "" || password.value === ""){
alert("Please Enter Your Data");
}else {
localStorage.setItem("username", username.value);
localStorage.setItem("email", email.value);
localStorage.setItem("password", password.value);

setTimeout( ()=> {
window.location = "login.html";
} , 500)
}
}


























// var users = [] ;



// {
//   function getuserinfo()
// {
//     // console.log("here?1");
//     var name = document.querySelector("#username");
//     var email = document.querySelector("#email");
//     var pass = document.querySelector("#password");
//     // console.log("here?2");
   
//     // console.log("here?3");
//     // console.log(name.value)




//     if(name.value === ""|| email.value === "" || pass.value === ""){
//         //alert("Please Enter Your Data");
//         console.log("here?4");
//         return;
//     }else {
        
//         var users = [
//         users["username"]=name.value,
//         users["password"]=pass.value,
//         users["email"]=email.value];
        
//         accounts.users[i].unshift(users);
//         //users.push(user);
//        // console.log("here?5jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
//         //console.log(user)

//       var userss=JSON.stringify(accounts);
//        localStorage.setItem("test",userss)
//         // localStorage.setItem("username", name.value);
//         // localStorage.setItem("email", email.value);
//         // localStorage.setItem("password", pass.value);
//       //  return users;
     
//     }
// } 
// }




