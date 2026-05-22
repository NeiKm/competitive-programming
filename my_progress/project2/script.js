var html_contents = document.getElementById("reels");
var content = ``
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
    "https://videos.pexels.com/video-files/8798433/8798433-uhd_1440_2732_25fps.mp4"
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

function get_random_video() {
    rn = Math.round(Math.random() * (all_videos.length - 1));
    return all_videos[rn]
}

function get_random_likes() {
    rn = Math.round(Math.random() * 10000);
    return rn
}

function get_random_comments_num() {
    rn = Math.round(Math.random() * 100000);
    return rn
}

function get_random_repost_num() {
    rn = Math.round(Math.random() * 1000);
    return rn
}

function get_random_name() {
    rn = Math.round(Math.random() * (all_names.length - 1));
    return all_names[rn];
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
                        <div class="content-footer-like">
                            ♡ <span>${get_random_likes()}</span>
                        </div>
                        <div class="content-footer-comment">
                            🤔 <span>${get_random_comments_num()}</span>
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
                <div class="content-footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni molestiae tempora. Impedit mollitia ipsam eos odio minima numquam quasi placeat nesciunt tempora doloribus dolorem sapiente cum totam, aperiam fugiat!</div>
            </div>
        </div>
    `
    html_contents.insertAdjacentHTML("beforebegin", content);
}