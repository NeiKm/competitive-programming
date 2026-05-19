// console.log(";)");


// const serch_button = document.getElementById("serch-button");
// const buttons = document.querySelectorAll("button");

// function md() {
//     alert(123123);
// }

// buttons.forEach((button) => {
//     button.onclick = () => {
//         alert("Пока еще функцианал не реализован")
//     };
// });

// var a = [];

// for (var i = 0; i < 20; i++) {
//     a[i] = i * 2;
// }

// for (var i = 0; i < 20; i ++) {
//     console.log(a[i]);
// }

var selected_product_pieces = 1;
var product_count = document.getElementById("product-count");
var shop = document.getElementById("shop");
var inventory = document.getElementById("inventory");
var shadow_shaider = document.getElementById("shadow_shaider");
inventory.classList.add("visible_of");
shadow_shaider.classList.add("visible_of");

for (var i = 0; i < 10; i++) {
    const product_card = `
    <div class="shop-card">
        <div class="product-logo">
            <img src="images/메인_연출.png" alt="">
        </div>
        <div class="product-about">
            <div class="product-title">
                <p>에코핏 클래식 ${Math.round(Math.random() * 4)}${Math.round(Math.random() * 5)}0ml</p>
            </div>
            <div class="product-text">
                <p class="product-text-star">★${Math.round(Math.random() * 5)}.${Math.round(Math.random() * 9)}</p>
                <p class="product-text-text">리뷰 1247 500ml 블랙</p>
            </div>
            <div class="product-price">
                <p>₩${Math.round(Math.random() * 100 + 1)},000</p>
            </div>
            <div class="product-buttons">
                <div class="product-selecter">
                    <button class="product-selecter-minus" id="product-selecter-minus" onclick="add_product_minus()">-</button>
                    <p class="product-selecter-count" id="product-selecter-count">1</p>
                    <button class="product-selecter-plus" id="product-selecter-plus" onclick="add_product_plus()">+</button>
                </div>
                <div class="product-button">
                    <button onclick="add_product()">담기</button>
                </div>
            </div>
        </div>
    </div>
    `
    shop.insertAdjacentHTML("beforeend", product_card);
}

var product_count_num = document.getElementById("product-selecter-count");

function add_product() {
    product_count.innerHTML = selected_product_pieces;
}

function add_product_plus() {
    selected_product_pieces += 1;
    product_count_num.innerHTML = selected_product_pieces;
}

function add_product_minus() {
    if (selected_product_pieces <= 0) {
        return 0;
    }
    selected_product_pieces -= 1;
    product_count_num.innerHTML = selected_product_pieces;
}

function on_of_visibly() {
    inventory.classList.toggle("visible_of");
    shadow_shaider.classList.toggle("visible_of");
}
