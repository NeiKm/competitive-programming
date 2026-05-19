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
var inventory_content = document.getElementById("inventory-content");

var basket = [];

inventory.classList.add("visible_of");
shadow_shaider.classList.add("visible_of");

var all_product = [];

function choise_color() {
    rn = Math.round(Math.random() * 5);
    colors = [
        "하늘색", "빨간색", "초럭색", "횐색", "검은색", "노란색"
    ];
    return colors[rn];
}

function choise_image() {
    rn = Math.round(Math.random() * 5);
    console.log(rn);
    image_ = [
        "images/메인_연출.png", "images/product2.jpg", "images/product3.jpg", "images/product4.jpg", "images/product5.jpg", "images/product6.jpg"
    ];
    console.log(image_[rn]);
    return image_[rn];
}

for (var i = 0; i < 30; i++) {
    all_product.push(
        [
            [
                "id",
                i + ""
            ],
            [
                "size", 
                Math.round(Math.random() * 4) + "50"
            ],
            [
                "star",
                (Math.round(Math.random() * 4) + ".") + Math.round(Math.random() * 9)
            ],
            [
                "price",
                Math.round(Math.random() * 100 + 1) + ",000"
            ],
            [
                "color",
                choise_color()
            ],
            [
                "image",
                choise_image()
            ]
        ]

    );

    const product_card = `
    <div class="shop-card">
        <div class="product-logo">
            <img src=${all_product[i][5][1]} alt="">
        </div>
        <div class="product-about">
            <div class="product-title">
                <p>에코핏 클래식 ${all_product[i][1][1]}ml</p>
            </div>
            <div class="product-text">
                <p class="product-text-star">★${all_product[i][2][1]}</p>
                <p class="product-text-text">리뷰 1247 ${all_product[i][1][1]} ${all_product[i][4][1]}</p>
            </div>
            <div class="product-price">
                <p>₩${all_product[i][3][1]}</p>
            </div>
            <div class="product-buttons">
                <div class="product-selecter">
                    <button class="product-selecter-minus" id="product-selecter-minus" onclick="add_product_minus()">-</button>
                    <p class="product-selecter-count" id="product-selecter-count">1</p>
                    <button class="product-selecter-plus" id="product-selecter-plus" onclick="add_product_plus()">+</button>
                </div>
                <div class="product-button">
                    <button onclick="add_product(this)" id=${all_product[i][0][1]}>담기</button>
                </div>
            </div>
        </div>
    </div>
    `
    shop.insertAdjacentHTML("beforeend", product_card);
}

var product_count_num = document.getElementById("product-selecter-count");

function add_product(element) {
    basket.push(element.id);
    console.log(basket);
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
    const newElement = document.createElement('div');
    inventory_content.replaceChildren(newElement);
    for (var i = 0; i < basket.length; i++) {
        const content = `
                <div class="inventory-content-">
                    <div class="inventory-card">
                        <div class="inventory-card-logo">
                            <img src="images/메인_연출.png" alt="">
                        </div>
                        <div class="inventory-card-content">
                            <div class="inventory-card-title">
                                <p class="inventory-card-title-title">에코핏 스마트 350ml</p>
                                <p class="inventory-card-title-txt">350ml · 화이트</p>
                            </div>
                            <div class="product-selecter">
                                <button class="product-selecter-minus" id="product-selecter-minus" onclick="add_product_minus()">-</button>
                                <p class="product-selecter-count" id="product-selecter-count">1</p>
                                <button class="product-selecter-plus" id="product-selecter-plus" onclick="add_product_plus()">+</button>
                            </div>
                            <div class="inventory-card-delete-button">
                                <button>삭제</button>
                            </div>
                        </div>
                        <div class="inventory-card-price">
                            <p>₩35,000</p>
                        </div>
                    </div>
                </div>
        `

        inventory_content.insertAdjacentHTML("beforeend", content);
    }
}

function write_adress() {
    prompt("주소 써주세요")
}
