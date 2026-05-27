
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
