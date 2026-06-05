let send_btn = document.getElementById("send-btn");
let name_input = document.getElementById("input_name");
let password_input = document.getElementById("input_password");


send_btn.addEventListener("click", function() {
    if (name_input.value.length > 0 && password_input.value.length > 0) {
        console.log(name_input.value);
        console.log(password_input.value);
        name_input.value = "";
        password_input.value = "";
    }

})
