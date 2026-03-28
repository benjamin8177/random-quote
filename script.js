const quote = document.getElementById("quote");
const author = document.getElementById("author");

const localQuotes = [
    { text: "Boshqalar siz haqingizda nima deb o'ylashiga e'tibor bermang, o'z yo'lingizdan boring.", author: "Bob Marley" },
    { text: "Hech qachon yiqilmaslikda emas, har gal yiqilganda o'rindan tura olishda eng katta shon-sharaf yashiringan.", author: "Konfutsiy" },
    { text: "Hammasi oddiy bo'lishi kerak, lekin tushunarsiz darajada yengil emas.", author: "Albert Einstein" },
    { text: "Muvaffaqiyat — bu har kuni takrorlanadigan kichik intilishlar yig'indisidir.", author: "Robert Collier" },
    { text: "O'zining uzoq maqsadlari bo'lmagan insonni daxshatli xatarlar kutib oladi.", author: "Konfutsiy" },
    { text: "Baxt biz izlagan maqsadimizda emas, balki biz bosib o'tgan yo'lda yashiringan.", author: "Ernst Xeminguey" },
    { text: "Vaqtingiz chegaralangan, uni birovning hayoti bilan yashab sarflamang.", author: "Steve Jobs" }
];

window.getQuote = function() {
    // API ishlatsa bo'ladi, masalan: await fetch("https://api.quotable.io/random")
    // Lekin tez ishlashi uchun local ro'yxatdan foydalanamiz
    const randomIndex = Math.floor(Math.random() * localQuotes.length);
    const randomQuote = localQuotes[randomIndex];
    
    quote.innerHTML = randomQuote.text;
    author.innerHTML = "- " + randomQuote.author;
}

window.tweetQuote = function() {
    const textToTweet = `${quote.innerText} ${author.innerText}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textToTweet)}`;
    window.open(twitterUrl, "_blank");
}

// Birinchi sahifa yuklanganda bitta chaqiramiz
getQuote();
