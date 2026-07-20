

let cart = [];
let total = 0;

// Add item to cart
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    total += price;

    updateCart();
}

// Update cart display
function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const totalText = document.getElementById("total");
    const cartCount = document.getElementById("cartCount");

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${item.name}</span>

            <div>
                ₱${item.price}
                <button onclick="removeItem(${index})"
                style="
                margin-left:10px;
                background:red;
                color:white;
                border:none;
                border-radius:5px;
                padding:4px 8px;
                cursor:pointer;">
                X
                </button>
            </div>
        `;

        cartItems.appendChild(li);

    });

    totalText.textContent = total;
    cartCount.textContent = cart.length;

}

// Remove item
function removeItem(index){

    total -= cart[index].price;

    cart.splice(index,1);

    updateCart();

}

// Place Order
function placeOrder(){

    if(cart.length===0){

        alert("Your cart is empty!");

        return;

    }

    let pickup = Math.floor(Math.random()*900)+100;

    alert(
`🎉 Order Successful!

Pickup Number:
QB-${pickup}

Estimated Pickup Time:
15 Minutes

Thank you for using QuickBite!`
);

    cart=[];

    total=0;

    updateCart();

}

// Search Food
const search = document.getElementById("search");

search.addEventListener("keyup",function(){

    const value = search.value.toLowerCase();

    const cards = document.querySelectorAll(".food-card");

    cards.forEach(card=>{

        let food = card.dataset.name.toLowerCase();

        if(food.includes(value)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

});

// Scroll Button
function scrollFoods(){

    document.getElementById("foods").scrollIntoView({

        behavior:"smooth"

    });

}

// Dark Mode

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    else{

        darkBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});

// Category Filter

const categoryButtons=document.querySelectorAll(".categories button");

const cards=document.querySelectorAll(".food-card");

categoryButtons.forEach(button=>{

button.addEventListener("click",()=>{

categoryButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const category=button.textContent.toLowerCase();

cards.forEach(card=>{

if(category==="all"){

card.style.display="block";

}

else{

const food=card.dataset.name.toLowerCase();

if(food.includes(category)){

card.style.display="block";

}

else{

card.style.display="none";

}

}

});

});

});
