// в будущей нужно изучить классы и перписать логику используя классы
// class Basket {
//     constructor() {
//     }
// }



// -----------------
// OBJECTS <
// -----------------
var basket = {
    "items": [
        {
            "id": 0,
            "size": 2,
            "star": 5.0,
            "price": 3000,
            "color": "gray",
            "image": "path"
        }
    ]
};

var selected_items = {
    "items": [
        {
            "id": 0,
            "size": 2,
            "star": 5.0,
            "price": 3000,
            "color": "gray",
            "image": "path"
        }
    ]
};

var all_shop_products = {

    "items": [],

    "product_card_html": [``]

};

var standart_products = {
    "colors": ["하늘색", "빨간색", "초럭색", "횐색", "검은색", "노란색"],
    "image_paths": [
        "images/메인_연출.png", 
        "images/product2.jpg", 
        "images/product3.jpg", 
        "images/product4.jpg", 
        "images/product5.jpg", 
        "images/product6.jpg"
    ],
};


// -----------------
// HTML_OBJECTS_INIT <
// -----------------
var html_selected_items = document.getElementById("product-count");
var html_number_items_basket = document.getElementById("product-selecter-count");
var html_shop_content = document.getElementById("shop");
var html_basket = document.getElementById("inventory");
var html_shadow_shaider = document.getElementById("shadow_shaider");
var html_basket_content = document.getElementById("inventory-content");

var void_element = document.createElement("div");

html_basket.classList.add("visible_of");
html_shadow_shaider.classList.add("visible_of");

// -----------------
// VARIABLES <
// -----------------
var basket_content = ``;
var product_card = ``;
var shop_items_sum = 20;

// -----------------
// FUNCTIONS <
// -----------------

function get_random_color() {
    rn = Math.round(Math.random() * (standart_products["colors"].length -1));
    return standart_products["colors"][rn];
}

function get_random_image() {
    rn = Math.round(Math.random() * (standart_products["image_paths"].length -1));
    return standart_products["image_paths"][rn];
}

function get_random_size() {
    size = Math.round(Math.random() * 4) + "50";
    return size;
}

function get_random_star() {
    star = (Math.round(Math.random() * 4) + ".") + Math.round(Math.random() * 9);
    return star;
}

function get_random_price() {
    price = Math.round(Math.random() * 100 + 1) + ",000";
    return price;
}

function toggle_visibly() {
    html_basket.classList.toggle("visible_of");
    html_shadow_shaider.classList.toggle("visible_of");

    html_basket_content.replaceChildren(void_element);
}

function remove_product() {
    if (selected_items["items"].length > 0) {
        selected_items["items"].pop();
    }
}

function add_product(element) {
    selected_items["items"].push(element.id);
}

function save_products() {
    if (selected_items["items"].length > 0) {
        basket["items"].push(
            selected_items["items"]
        );
    }
}

function show_basket_items() {
    for (var i = 0; i < basket["items"].length; i++) {
        basket_content = 
        `
            <div class="inventory-content-">
                <div class="inventory-card">
                    <div class="inventory-card-logo">
                        <img src=${basket["items"][i]["image"]} alt="">
                    </div>
                    <div class="inventory-card-content">
                        <div class="inventory-card-title">
                            <p class="inventory-card-title-title">에코핏 스마트 ${basket["items"][i]["size"]}</p>
                            <p class="inventory-card-title-txt">${basket["items"][i]["size"]} · ${basket["items"][i]["color"]}</p>
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
        html_basket_content.insertAdjacentHTML("beforebegin", basket_content);
    }
}

function generate_shop_cards() {
    for (var i = 0; i < shop_items_sum; i++) {
        all_shop_products["items"].push(
            {
                "id": i,
                "size": get_random_size(),
                "star": get_random_star(),
                "price": get_random_price(),
                "color": get_random_color(),
                "image": get_random_image()
            }
        );
        all_shop_products["product_card_html"].push(
            `
            <div class="shop-card">
                <div class="product-logo">
                    <img src=${all_shop_products["items"][i]["image"]} alt="">
                </div>
                <div class="product-about">
                    <div class="product-title">
                        <p>에코핏 클래식 ${all_shop_products["items"][i]["size"]}ml</p>
                    </div>
                    <div class="product-text">
                        <p class="product-text-star">★${all_shop_products["items"][i]["star"]}</p>
                        <p class="product-text-text">리뷰 1247 ${all_shop_products["items"][i]["size"]} ${all_shop_products["items"][i]["color"]}</p>
                    </div>
                    <div class="product-price">
                        <p>₩${all_shop_products["items"][i]["price"]}</p>
                    </div>
                    <div class="product-buttons">
                        <div class="product-selecter">
                            <button class="product-selecter-minus" id="product-selecter-minus" onclick="add_product_minus()">-</button>
                            <p class="product-selecter-count" id="product-selecter-count">1</p>
                            <button class="product-selecter-plus" id="product-selecter-plus" onclick="add_product_plus()">+</button>
                        </div>
                        <div class="product-button">
                            <button onclick="add_product(this)" id=${all_shop_products["items"][i]["id"]}>담기</button>
                        </div>
                    </div>
                </div>
            </div>
            `
        )
    }
}

function show_shop_content() {
        for (var i = 0; i < all_shop_products["items"].length; i++) {
            shop.insertAdjacentHTML("beforeend", all_shop_products["product_card_html"][i])
        }
}

function write_adress() {
    prompt("주소 써주세요");
}

generate_shop_cards();
show_shop_content();
