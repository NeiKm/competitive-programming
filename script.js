var html_contents = document.getElementById("reels");
var content = ``
var likes;
var all_videos = [
    "https://videos.pexels.com/video-files/10145286/10145286-hd_1080_1920_30fps.mp4",
    "https://videos.pexels.com/video-files/8371241/8371241-uhd_1440_2732_25fps.mp4",
    "https://videos.pexels.com/video-files/7727248/7727248-hd_1080_1920_25fps.mp4",
    "https://videos.pexels.com/video-files/8373731/8373731-hd_1080_1920_25fps.mp4",
    "https://videos.pexels.com/video-files/7579667/7579667-uhd_1440_2732_25fps.mp4",
    "https://videos.pexels.com/video-files/7947488/7947488-hd_1080_1920_30fps.mp4",
    "https://videos.pexels.com/video-files/6973148/6973148-hd_1920_1080_24fps.mp4",
    "https://videos.pexels.com/video-files/6189529/6189529-hd_1080_1920_30fps.mp4",
    "https://videos.pexels.com/video-files/5801269/5801269-uhd_1440_2732_25fps.mp4",
    "https://videos.pexels.com/video-files/7677188/7677188-hd_1920_1080_25fps.mp4",
    "https://videos.pexels.com/video-files/17304299/17304299-uhd_1440_2560_30fps.mp4",
    "https://videos.pexels.com/video-files/31907337/13591391_2560_1440_30fps.mp4",
    "https://videos.pexels.com/video-files/14143532/14143532-uhd_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/7350447/7350447-uhd_1440_2560_25fps.mp4",
    "https://videos.pexels.com/video-files/8798433/8798433-uhd_1440_2732_25fps.mp4",
    "https://www.news1.kr/_next/image?url=https%3A%2F%2Fi3n.news1.kr%2Fsystem%2Fphotos%2F2025%2F8%2F6%2F7431154%2Fhigh.jpg&w=1920&q=75",
    "https://videos.pexels.com/video-files/6296288/6296288-hd_1080_1920_25fps.mp4",
    "https://videos.pexels.com/video-files/4752905/4752905-uhd_1440_2732_25fps.mp4",
    "https://videos.pexels.com/video-files/36036683/15283023_1920_1080_60fps.mp4",
    "https://videos.pexels.com/video-files/7227548/7227548-hd_1834_1032_25fps.mp4"
]

var all_profile_photo = [
    "",
]

var all_names = [
    "박건희",
    "이동연",
    "김키릴",
    "유익환",
    "김명원",
    "홍은정",
    "고무성",
    "오주한",
    "김은서",
    "정시은"
]

var titles = [
    "가끔은 모든 걸 잠시 멈추고, 지금 이 순간을 그냥 즐기고 싶을 때가 있어요. 어쩌면 그런 순간들이 나중에는 가장 소중한 기억으로 남는 것 같아요. ✨",
    "저는 완벽한 사람은 아니지만, 항상 진짜 제 모습으로 남고 싶어요. 세상에는 이미 가식이 너무 많으니까요. ❤️",
    "모든 영상 뒤에는 아무도 모르는 감정, 생각, 고민 그리고 작은 이야기들이 숨어 있어요. 아마 그런 것들이 순간들을 더 특별하게 만드는 것 같아요. 🎥",
    "요즘 들어 더 자주 느끼는 건, 곁에 있는 사람들, 평범한 대화, 우연한 만남 그리고 평범한 하루들을 소중히 여기는 게 정말 중요하다는 거예요. 언젠가는 다 추억이 되니까요. 🌙",
    "우리는 가끔 미래만 생각하느라 현재를 살아가는 걸 잊어버리는 것 같아요. 이 영상이 작은 행복은 늘 가장 단순한 곳에 있다는 걸 떠올리게 해줬으면 해요. ☀️",
    "항상 원하는 대로 되는 건 아니지만, 아마 실수와 어려움, 그리고 고민들을 통해 더 강해지고 스스로를 이해하게 되는 것 같아요. ✨",
    "저는 조금씩 다른 사람들의 시선을 신경 쓰지 않고, 진짜 제가 행복한 일을 하며 살아가는 법을 배우고 있어요. 인생은 남을 위해 살기엔 너무 짧으니까요. 🖤",
    "누군가에게는 그냥 평범한 영상일 수도 있지만, 저에게는 이 안에 분위기와 감정, 그리고 간직하고 싶은 순간들이 담겨 있어요. 🎶",
    "가끔은 아무 말 없이 영상을 보고, 음악을 들으면서 그 순간의 분위기를 느끼는 것만으로도 충분한 것 같아요. 🌌",
    "앞으로 인생이 어디로 흘러갈지는 모르겠지만, 한 가지는 확실해요. 진심으로 행복했던 순간들을 최대한 많이 기억하고 싶어요. 💫"
]

function get_random_video() {
    rn = Math.round(Math.random() * (all_videos.length - 1));
    return all_videos[rn]
}

function get_random_likes() {
    rn = Math.round(Math.random() * 10000);
    return rn
}

function get_random_comments_num() {
    rn = Math.round(Math.random() * 1000);
    return rn
}

function get_random_repost_num() {
    rn = Math.round(Math.random() * 100);
    return rn
}

function get_random_name() {
    rn = Math.round(Math.random() * (all_names.length - 1));
    return all_names[rn];
}

function get_random_title() {
    rn = Math.round(Math.random() * (titles.length - 1));
    return titles[rn];
}

for (var i = 0; i < 20; i++) {
    content = 
    `
        <div class="content">
            <div class="content-header">
                <div class="aftor">
                    <div class="aftor-header">
                        <div class="aftor-img">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="">
                            <div class="aftor-name">
                                <p>${get_random_name()}</p>
                            </div>
                        </div>
                        <div class="aftor-nemu">
                            ...
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-video">
                <video src=${get_random_video()} autoplay loop muted playsinline></video>
            </div>
            <div class="content-footer">
                <div class="content-footer-action">
                    <div class="content-footer-action-left">
                        <div class="content-footer-like" id="like">
                            ♡ <span>${get_random_likes()}</span>
                        </div>
                        <div class="content-footer-comment">
                             <span>${get_random_comments_num()}</span>
                        </div>
                        <div class="content-footer-repost">
                            🔁 <span>${get_random_repost_num()}</span>
                        </div>
                        <div class="content-footer-send">
                            ✈
                        </div>
                    </div>
                    <div class="content-footer-action-right">
                        🙃
                    </div>
                </div>
                <div class="content-footer-text">${get_random_title()}</div>
            </div>
        </div>
    `
    html_contents.insertAdjacentHTML("beforebegin", content);
    // likes = getElementById("like");
}
// likes.addEventListener("click", function() {
//     likes.textContent += 1; 
// });

