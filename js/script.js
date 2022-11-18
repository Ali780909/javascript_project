
// product
var productDom = document.querySelector(".products");
var cartproductMenu = document.querySelector('.carts_products');
var cartproductDom = document.querySelector('.carts_products div');
var shoppingcartIcon = document.querySelector('.shoppingcart');
var badgeDom = document.querySelector('.badge');

var products = [

{
id: 2,
title: "HeadPhone",
size: 'large',
imageUrl:'images/work2.jpg'        
},
{
id: 3,
title: "Toys",
size: 'large',
imageUrl:'images/work15.jpg'        
},
{
id: 4,
title: "Cam",
size: 'medium',
imageUrl:'images/work3.jpg'        
},
{
id: 5,
title: "LapTop",
size: 'xxlarge',
imageUrl:'images/work8.jpg'        
},
{
id: 6,
title: "Watches",
size: 'large',
imageUrl:'images/work6.jpg'        
},
{
id: 7,
title: "Cam&Watch",
size: 'large',
imageUrl:'images/work4.jpg'        
},
{
id: 8,
title: "bat",
size: 'xxlarge',
imageUrl:'images/work5.jpg'        
},
{
id: 9,
title: "Laptop",
size: 'large',
imageUrl:'images/work10.jpg'        
},
{
id: 10,
title: "GYM",
size: 'xlarge',
imageUrl:'images/work7.jpg'        
},

{
id: 11,
title: "Sunglasses",
size: 'large',
imageUrl:'images/work11.jpg'        
},
{
id: 12,
title: "Bag",
size: 'large',
imageUrl:'images/work12.jpg'        
},
{
id: 13,
title: "SharkToy",
size: 'large',
imageUrl:'images/work13.jpg'        
},
{
id: 14,
title: "Lights",
size: 'large',
imageUrl:'images/work14.jpg'        
},
{
id: 16,
title: "Table_for_Labtop",
size: 'large',
imageUrl:'images/work16.jpg'        
},
{
id: 17,
title: "Shoes",
size: 'large',
imageUrl:'images/work9.jpg'        
}
];

shoppingcartIcon.addEventListener("click",openCartMenu)
//searchbar

          //JavaScript code 
          function Search_Item(){ 
            let input = document.getElementById('searchbar').value 
            input=input.toLowerCase(); 
            let x = document.getElementsByClassName('product-item'); 
              
            for (i = 0; i < x.length; i++) {  
                if (!x[i].innerHTML.toLowerCase().includes(input)) { 
                    x[i].style.display="none"; 
                } 
                else { 
                    x[i].style.display="";                  
                } 
            } 
        }

// this func takes objects from jason maps it to the index page
function productUL(){
var productUL = products.map((item) => {
return`
<div class="product-item">
<img 
src="${item.imageUrl}" 
class="product-item-img" alt="image">
<div class="product-item-desc">
<h2> ${item.title} </h2>
<p> Lorem ipsum dolor sit amet. </p>
<span> Size : ${item.size} </span>
</div>
<div class="product-item-actions">
<button class="add-to-cart" onclick="addtocart(${item.id})"> add to cart </button>
<i class="favorite fa-solid fa-cart-plus"></i>
</div>
</div>
`;
});
productDom.innerHTML = productUL;
}
productUL();

let additem = []

function addtocart(id){
if(localStorage.getItem("username")){
var chooseitem = products.find((item) => item.id === id);
cartproductDom.innerHTML += `<p>${chooseitem.title}</p>`;
additem = [...additem , chooseitem];
localStorage.setItem('productsInCart', JSON.stringify(additem));
var cartproductitems = document.querySelectorAll(".carts_products div p");
badgeDom.style.display="block";
badgeDom.innerHTML = cartproductitems.length;
}else{
window.location = "login.html";
}


}
function openCartMenu(){
if(cartproductDom.innerHTML !=""){
if(cartproductMenu.style.display == "block"){
cartproductMenu.style.display = "none";
}else {
cartproductMenu.style.display = "block";

}
}
}
function cartMenuData()
{
let addedItem = localStorage.getItem("productsInCart")
? JSON.parse(localStorage.getItem("productsInCart"))
:[];
if(addedItem)
{
addedItem.map((item)=> {
cartProductDivDom.innerHTML+=`<p>${item.title}</p>`;

});
badgeDom.style.display="block";
badgeDom.innerHTML+= addedItem.length;
}

}


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
logoutBtn.addEventListener('click', function(){
localStorage.clear();
setTimeout(() =>{
window.location = "register.html";
}, 500);
});


