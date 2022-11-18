let productsInCart = localStorage.getItem('productsInCart');
let productDom = document.querySelector(".products");
if(productsInCart){
let items = JSON.parse(productsInCart);
drawCartproductsUI(items);
}

function drawCartproductsUI(products){
let productUI = products.map((item) => {
return`
<div class="product-item"
<img 
src="${item.imageUrl}" 
class="product-item-img" alt="image"/>
<div class="product-item-desc">
<h2> ${item.title} </h2>
<p> Lorem ipsum dolor sit amet. </p>
<span> Size : ${item.size} </span>
</div>
<div class="product-item-actions">
<button class="add-to-cart" onclick="removeItemFromCart(${item.id})"> Remove From Cart </button>
</div>
</div>
` ;

})
;
productDom.innerHTML=productUI;
}

function removeItemFromCart(_id){
    
if( productsInCart )
{

const items = JSON.parse( productsInCart );
const filteredItems  = items.filter ( _item =>   _item.id !== _id) ;
drawCartproductsUI(filteredItems)
localStorage.setItem("productsInCart",JSON.stringify(filteredItems))}}

//removeItemFromCart()
