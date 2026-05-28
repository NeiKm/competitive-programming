var chats = document.getElementById("message-frends");
var members = [
    ["정시은", "..."],
    ["홍은정", "..."],
    ["이동연", "..."],
    ["함라희", "..."],
    ["고무성", "..."],
    ["박건희", "..."],
    ["정서현", "..."],
    ["장현준", "..."],
    ["김민규", "..."],
    ["김명원", "..."],
    ["유익환", "..."],
    ["송민준", "..."],
    ["양주은", "..."],
    ["김은서", "..."],
    ["윤현준", "..."],
    ["박종빈", "..."],
    ["유강희", "..."],
    ["이호", "..."],
    ["인성", "..."],
    ["주한", "..."],
    ["현제", "..."],
    ["최민수", "..."],
    ["장하나", "..."],
    ["강상오", "..."],
    ["김가람", "..."],
    ["김제성", "..."],
    ["김대현", "..."],
    ["정훈", "..."],
    ["김나영", "..."],
    ["문수빈", "..."],
    ["홍정표", "..."],
    ["리나", "..."],
    ["수빈", "..."],
    ["최지원", "..."],
    ["레일라", "..."],
];

for (let i = 0; i < members.length - 1; i++) {
    let content = `
        <div class="message-frend" id="${members[i][0]}">
            <div class="message-frend-image">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="">
            </div>
            <div class="message-frend-info">
                <div class="message-frend-title">${members[i][0]}</div>
                <div class="message-frend-content">
                    ${members[i][1]} <span> · ${i * Math.round(Math.random() * i)}시간</span>
                </div>
            </div>
        </div>
    `
    chats.insertAdjacentHTML("beforeend", content)
}

document.querySelectorAll(".message-frend").forEach(function(friend) {
    friend.addEventListener("click", function() {
        let name = {
            "name": this.id,
            "username": this.id
        };
        localStorage.setItem("user", JSON.stringify(name));
        location.href = "chat.html";
    })
})
