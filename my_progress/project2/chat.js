var message_txt = document.getElementById("message_txt");
var chat = document.getElementById("chat");
var user_name = document.getElementById("name");
var user_nick = document.getElementById("nickname");
var user = localStorage.getItem("user");

var msg = [
    "안녕",
    "뭐해?",
    "내일 학교 올거야?",
    "간식 먹을래?",
    "내일 학교 안가도 돼",
    "내일 쉬는날이야",
    "알겠어?"
]

var user = JSON.parse(user)
user_name.textContent = user.name;
user_nick.textContent = user.name;

function get_random_msg() {
    rn = Math.round(Math.random() * (msg.length -1));
    return msg[rn];
}

for (var i = 0; i < 100; i++) {
    chat.insertAdjacentHTML(
        "beforeend",
        `
        <div class="messages">
            <div class="message">
                <div class="profil-image_in_chat">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="">
                </div>
                <div class="message-content">
                    <p>${get_random_msg()}</p>
                </div>
            </div>
        </div>
        `
    );
}

function send_msg(content) {
    chat.insertAdjacentHTML(
        "beforeend",
        `
        <div class="my_messages">
            <div class="my_message">
                <div class="my_message-content">
                    <p>${content}</p>
                </div>
                <div class="profil-image_in_chat">
                    <img src="images/my_profile_picters.png" alt="">
                </div>
            </div>
        </div>
        `
    );
}

message_txt.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        if (event.target.value != "") {
            send_msg(event.target.value);
            event.target.value = "";
            window.scrollTo(0, document.documentElement.scrollHeight);
        }
    }
});
