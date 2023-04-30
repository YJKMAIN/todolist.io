const quotes =[
    "중요한 건 꺾였는데도 그냥 하는 마음",
    "내 명분 내 이익이나 찾으면 될 것 같아요",
    "사람이 배고플 때 뭐가 나온다",
    "그냥 놀고 싶다"
];

const quote = document.querySelector("#quote");


const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote;
