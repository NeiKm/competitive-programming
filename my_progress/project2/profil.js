let user_name_box = [document.getElementById("user_name"), document.getElementById("user_name2")];
let user = localStorage.getItem("user_");

user = JSON.parse(user);

user_name_box[0].textContent = user.name;
user_name_box[1].textContent = user.name;