
var message_txt = document.getElementById("message_txt");
var chat = document.getElementById("chat");
var user_name = document.getElementById("name");
var user_nick = document.getElementById("nickname");
var user = localStorage.getItem("user");
let chatHistory = [];

var positiveWords = [
    "최고",
    "천재",
    "완벽",
    "멋쟁이",
    "능력자",
    "에이스",  
    "짱",
    "대박",
    "치트키",
    "매력쟁이",
    "천사",
    "보물",
    "스타",
    "빛",
    "훈남",
    "얼굴천재",
    "엄친아",
    "요정",
    "사랑둥이",
    "실력파",
    "레전드",
    "품절남",
    "대세",
    "히어로"
];

var chat_history = []

var talk_type = {
    "mood": 5,
    "love": 1,
    "repetition": 0,
    "compliment": 0
};

var msg = [
    "안녕",
    "뭐해?",
    "내일 학교 올거야?",
    "간식 먹을래?",
    "내일 학교 안가도 돼",
    "내일 쉬는날이야",
];

var user = JSON.parse(user)
user_name.textContent = user.name;
user_nick.textContent = user.name;

function get_random_msg() {
    rn = Math.round(Math.random() * (msg.length -1));
    return msg[rn];
}

for (var i = 0; i < Math.round(Math.random() * 2) + 1; i++) {
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
window.scrollTo(0, document.documentElement.scrollHeight);

async function responce_msg(txt) {
    chat.insertAdjacentHTML(
        "beforeend",
        `
        <div class="messages">
            <div class="message">
                <div class="profil-image_in_chat">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="">
                </div>
                <div class="message-content">
                    <p class="message-writing">입력중...</p>
                </div>
            </div>
        </div>
        `
    );
    let res_msg = await ai(txt);
    let index = 0;
    let msg = chat.querySelectorAll(".message-writing");
    msg = msg[msg.length - 1];
    msg.textContent = "";
    function writing_message() {
        if (index != res_msg.length) {
            msg.textContent += res_msg[index];
            index ++;
            window.scrollTo(0, document.documentElement.scrollHeight);
            setTimeout(() => {
                writing_message();
            }, Math.round(Math.random() * 200) + 200);
        }
    }
    writing_message();
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
    if (chat_history.includes(content)) {
        talk_type["mood"] -= 1;
        talk_type["repetition"] = 1;
    }
    else {
        talk_type["repetition"] = 0;
    }
    chat_history.push(content);
    setTimeout(() => {
      responce_msg(content);
    }, Math.round(Math.random() * 3000) + 1);
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

/* var talk_type = {
    "mood": 5,
    "love": 1,
    "repetition": 0,
};*/

function generate_text() {
    let responses = [

        // Позитивные, восторженные и поддерживающие
        "완전 동감! 진짜 좋은 생각이다.",
        "오, 진짜 흥미로운 관점인데?",
        "되게 설득력 있다. 네 생각 마음에 들어.",
        "정확히 핵심을 짚었네! 더 할 말이 없다.",
        "말 진짜 잘했다. 덕분에 다 이해됐어.",
        "말해줘서 고마워! 진짜 좋은 의견이야.",
        "우리 의견 통하니까 기분 좋네.",
        "응, 확실히 일리가 있어. 좋은 아이디어야.",
        "이렇게 깊게 생각할 줄 몰랐네. 대단하다.",
        "대박, 나도 마침 비슷한 생각 하고 있었어!",
        "이거 완전 대 찬성! 바로 해보자.",
        "근거가 탄탄해서 완전 믿음이 가네.",
        "이게 문제 해결하는 치트키가 될 듯!",
        "듣고 보니까 다 맞는 말이네. 완전 인정.",
        "기대 이상인데? 진짜 대단한 아이디어야.",
        "와, 방금 소름 돋았어. 너 천재 아니야? 소송당할 준비 해, 너무 완벽해서.",
        "이거지! 내 무릎이 탁 처지다 못해 부서질 것 같아.",
        "너 오늘부터 내 인생 멘토 해라. 당장 계약서 쓰자.",
        "말하는 것 좀 봐, 무슨 에러 하나 없이 완벽하게 컴파일된 코드 같아!",
        "방금 네 생각 듣고 심봉사처럼 눈을 번쩍 떴다. 개안 완료.",

        // Нейтральные, сдержанные и философские
        "글쎄, 이건 여러 방면으로 생각해 봐야 할 듯.",
        "무슨 뜻인지 아는데, 약간 논란의 여지가 있네.",
        "네 말이 맞을 수도 있는데, 다시 생각해 봐.",
        "일단 논리는 맞네. 앞으로 어떨지 좀 보자.",
        "사람마다 생각이 달라서 딱 잘라 말하기 어렵다.",
        "신기한 의견이네. 내 경험이랑은 좀 다르지만.",
        "뭐, 흔히 있는 일이지. 자주 일어나는 상황이야.",
        "각자 입장이 다르니까 조심스럽긴 하네.",
        "이 얘기는 여기까지만 하고 다음으로 넘어가자.",
        "상황이 좀 애매해서 아직은 잘 모르겠어.",
        "무슨 말인지 알겠는데 실현 가능성이 있으려나?",
        "이론적으론 맞는데 현실적인 제약이 있잖아.",
        "다른 조건들도 다 같이 비교해 봐야겠어.",
        "지금 당장 확실한 결론을 내리긴 좀 그래.",
        "전체 흐름은 알겠는데 디테일 조율이 더 필요해.",
        "어... 음... 일단 좋은 시도였다고 치자. 세상엔 다양한 의견이 있으니까.",
        "음... 일단 로딩 중. 내 뇌가 이 정보를 처리하려면 시간이 좀 필요해.",
        "그럴 수 있지. 지구는 돌고 시간은 흐르니까.",
        "이건 마치 버그인지 피처(Feature)인지 헷갈리는 상황 같달까.",
        "진실은 저 너머에... 일단 폴더 하나 만들어서 짱박아두자.",

        // Критические, токсичные и уставшие
        "솔직히 말해서 근거가 너무 부족해.",
        "리스크가 너무 커. 난 찬성 못 하겠다.",
        "솔직히 이거 믿어도 되는 건지 잘 모르겠어.",
        "너 지금 본질에서 완전히 벗어난 듯.",
        "아, 제발 이 주제는 다시 꺼내지 마.",
        "이 부분은 나 절대 동의 못 해. 그렇게 안 됨.",
        "왠지 느낌 안 좋아. 결과가 나쁠 것 같아.",
        "논리가 이상해. 앞뒤가 전혀 안 맞잖아.",
        "또 시작이네. 우리 계속 제자리걸음 하는 듯.",
        "그건 아니지. 진짜 선 넘었어.",
        "현실성이 너무 떨어져서 절대 불가능해.",
        "애초에 첫 단추부터 잘못 끼운 것 같은데.",
        "급하게 결정하기엔 숨겨진 문제가 너무 많아.",
        "방향성이 완전히 잘못됐어. 처음부터 다시 해야 돼.",
        "서로에 대한 존중이 전혀 없는 말투네.",
        "지금 진심으로 하는 소리야? 아니면 카메라 어디 숨겨져 있어?",
        "방금 네 말 듣고 내 지능 지수가 한 20 정도 떡락한 것 같아.",
        "이 코드는 스파게티 그 자체야. 어디서부터 꼬인 건지 풀 엄두도 안 나.",
        "미안한데, 그 생각은 조선시대에 나왔어도 욕먹었을 듯.",
        "방금 한 말은 휴지통에 넣고 영구 삭제(Shift+Delete) 부탁해.",

        // Абсурдные, мемные и сюрреалистичные
        "갑자기 팔씨름해서 이기는 사람이 정답으로 하기 어때?",
        "네 말 듣고 보니까 갑자기 당근마켓에 내 뇌를 무료 나눔 하고 싶어졌어.",
        "이 아이디어는 마치 오토바이 타고 바다를 건너겠다는 패기야. 멋진데 미쳤어.",
        "이건 혁신 아니면 대재앙이다. 중간이 없어.",
        "말은 참 화려한데 무슨 소리인지 하나도 모르겠어. 혹시 마법 주문이야?",
        "이거 들으니까 갑자기 우노(UNO) 게임에서 +4 카드 3연속 맞은 기분이야.",
        "외계인이 지구를 침공한다면 방금 네가 한 말을 암호로 쓰면 완벽할 듯.",
        "네 논리력... 혹시 중고로 샀어? 환불 기간 지났으면 어떡하냐.",
        "이건 마치 라면에 콜라 끓여 먹는 느낌의 아이디어네. 괴랄한데 궁금해.",
        "나 방금 미래에 다녀왔는데, 네가 그 말 해서 세상이 멸망했더라.",
        "갑자기 분위기 싸해지는데... 혹시 방금 외계인이랑 교신하고 온 거야?",
        "너 혹시 어제 꿈에서 조상님이 점지해 준 아이디어냐?",
        "논리는 안드로메다로 가버렸고, 나도 같이 가고 싶어졌다.",
        "너무 어이가 없어서 실소가 나오네. 개그맨 데뷔 언제 해?",
        "우리가 지금 같은 우주에 살고 있는 거 맞지? 평행우주에서 온 거 아니지?",

        // Признания, симпатия и флирт
        "내 마음속에 너라는 무한 루프가 걸린 듯. 탈출 조건(break)이 없어.",
        "너랑 있으면 심박수 터질 것 같아. 고중량 스쿼트 칠 때보다 더 떨림.",
        "나 방금 너한테 입덕한 것 같아. 이거 평생 책임져야 돼.",
        "네가 내 세상의 유일한 치트키야. 너 없으면 내 인생 그냥 하드모드임.",
        "아무리 바빠도 네 연락은 무조건 내 뇌에 '크리티컬 히트'로 꽂히더라.",
        "너한테 당근마켓으로 내 마음 무료 나눔 하고 싶은데, 혹시 받아줄래?",
        "나 원래 다른 사람 말은 필터링하는데, 왜 네 목소리는 자동 패스냐?",
        "이거 백프로 그린라이트 맞지? 나 아무래도 너 진짜 좋아하는 것 같아.",
        "네가 웃으면 내 세상의 해상도가 갑자기 4K로 떡상하는 기분임.",
        "다른 건 중간에 끊겨도 너랑 내 사이의 연결은 절대 디스커넥트 안 됨.",

        // Остальное
        "ㅋㅋㅋ",
        "응",
        "ㅎㅎㅎ",
        "?",
        "ㅗ",
        "ㅡㅡ",
        "ㅠㅠ",
        "ㄴㄴ",
        "ㅎㅁㅁㅁㅁ",
        "시발... 미안해 그냥 한번만 너한테 욕 해보고 싶었어",
        "ㅇㅇ",
        "😊",
        "😘",
        "😒",
        "😎",
        "🤤",
        "🥵",
        "🤑",
        "😡",
        "🤬",
        "💩"
        ];
    if (talk_type["repetition"] > 0) {
        if (talk_type["mood"] <= 5) {
            responses = [
                "너 혹시 고장 난 앵무새야? 왜 똑같은 말만 무한 반복해?",
                "1절, 2절 카운트하다가 결국 뇌절까지 가버리네. 적당히 좀 해라.",
                "키보드에 Ctrl+V 키가 끼었냐? 도배 고만해라, 정신 사납다.",
                "대사 다 떨어진 NPC처럼 왜 자꾸 같은 말만 리핏함? 퀘스트라도 주든가.",
                "방금 한 말 기억 못 하는 거 보니까 금붕어 지능 테스트 중임?",
                "너 도배업자로 직업 바꿨냐? 알람 터지니까 그만 좀 징징대.",
                "와, exit 조건 없는 while 루프 돌리는 수준이네. 렉 걸리니까 강제 종료 좀 하자.",
                "똑같은 말 계속하니까 숨 안 차냐? 네 인스타 보는 게 데드리프트 치는 것보다 더 지침.",
                "당근마켓에 개념 무료 나눔 보냈냐? 왜 했던 말을 또 하고 또 해.",
                "한 번만 더 똑같은 소리 하면 차단 박고 영구 밴(Ban)이다. 작작 해라 진짜."
            ];
        }
        else {
            responses = [
                "데자뷔인가? 방금 똑같은 글을 본 것 같은 기분이야! ㅎㅎ",
                "와, 여기 메아리치나 봐요! 똑같은 말이 계속 들리네~ 📣",
                "복사 붙여넣기 장인이시네! 손가락 아프니까 조금만 쉬었다 해요~",
                "마치 반갑다고 계속 꼬리 흔드는 댕댕이 같네! 한번만 말해도 다 듣고 있어요~ 🐶",
                "어라, 도배 방지 필터가 열일할 뻔했잖아요! 살살 부탁해요~ 💻",
                "중요한 얘기라 강조하시는 거죠? 다 접수했으니 걱정 마요! 👍",
                "혹시 제 리액션이 마음에 들어서 또 보내신 거예요? 부끄럽게 참~ 😉",
                "워워, 진정해요! 한 번만 말해도 쏙쏙 잘 알아들으니까 안심해~",
                "와우, 오늘따라 텐션 폭발하셨네! 진정하시고 숨 한번 고르기~ ㅋㅋㅋ",
                "같은 기술 계속 쓰면 마나 부족해요! 마나 좀 채우고 다시 얘기합시다~ ⚡"
            ];
        }

    }
    let randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

async function ai(text) {
    try {
        chatHistory.push({ role: "user", content: text });
        if (chatHistory.length > 5) {
                    chatHistory.shift();
        }
        let formattedHistory = chatHistory.map(msg => {
            let name = msg.role === "user" ? "User" : "You";
            return `${name}: ${msg.content}`;
        }).join("\n");
        let urlObj = new URL("https://text.pollinations.ai/");
        urlObj.pathname += encodeURIComponent(text);
        urlObj.searchParams.set("model", "openai");
        urlObj.searchParams.set("system", `
            You are a normal person named ${user.name}
            Chat history
            ${formattedHistory}
            Reply only in the language of the latest message and use casual speech only, keep replies short and natural, slang jokes swearing flirting allowed, if the other person likes it you can confess love
            Fun and natural conversation is the priority, do not constantly try to help or greet
            Never act like an AI bot or program, even if asked reply like a human
            Do not write too perfectly or formally, small typos allowed
            No dots or special symbols, commas only
            Replies under 180 characters
        `)

        console.log("Отправка запроса по правильному адресу:", urlObj.toString());
        let response = await fetch(urlObj.toString());
        if (!response.ok) {
            throw new Error("Ошибка сервера: " + response.status);
        }
        let clean_text = await response.text();
        if (clean_text) {
            console.log("Ответ получен:", clean_text);
            return clean_text;
        }
        return "ИИ прислал пустой ответ.";
    } catch (error) {
        chatHistory.push({ role: "user", content: text });
        if (chatHistory.length > 5) {
                    chatHistory.shift();
        }
        console.error("Критическая ошибка функции ai():", error);
        return generate_text();
    }
}
