/* INTRO */
function enterSite() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
  typeText(
    "Out of all the people, out of all the stories… somehow, it was you 🌷 And I’m really glad it is.",
    "mainMsg"
  );
}

/* TYPEWRITER */
function typeText(text, elementId) {
  let i = 0;
  const el = document.getElementById(elementId);
  el.innerHTML = "";
  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 40);
}

/* MUSIC */
function playMusic() {
  document.getElementById("bgMusic").play();
}

/* SURPRISE */
function showLove() {
  typeText(
    "You are my favourite notification, every single day 💖",
    "surprise"
  );
}

/* FLOATING HEARTS */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 300);

/* COUNTDOWN */
const birthday = new Date("2026-12-19"); // change if needed
setInterval(() => {
  const now = new Date();
  const diff = birthday - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerText =
    days > 0 ? `${days} days until your special day 🌸` : "Today is your day 🎉";
}, 1000);

/* STORY GAME */
const story = [
  {
    q: "Where do you think we first met?",
    options: ["Instagram", "Twitch live chat 💬"],
    reveal: "It was Twitch… watching Italian Bigg Boss together 🇮🇹"
  },
  {
    q: "Who sent the first message?",
    options: ["You 😌", "Me 🙈"],
    reveal: "You dropped your Instagram ID… and I sent a simple hi 💕"
  },
  {
    q: "What happened after one month of texting?",
    options: ["Nothing changed", "Feelings happened 💔"],
    reveal: "You asked me to block you… because feelings happened."
  },
  {
    q: "What happened that same night?",
    options: ["Nothing", "We talked all night 📞"],
    reveal: "I unblocked you… and you called me first."
  },
  {
    q: "When did I fall for you?",
    options: ["While texting", "After hearing your voice ❤️"],
    reveal: "That night… I fell in love with your voice."
  },
  {
    q: "What did I ask for next?",
    options: ["Another call", "A video call 📹"],
    reveal: "I asked for a video call… and you were shy 🙈"
  },
  {
    q: "What confused me?",
    options: ["Distance", "Our age difference"],
    reveal: "I got confused because you were older than me."
  },
  {
    q: "What were you scared of?",
    options: ["That I’d leave", "That I wouldn’t love you 💔"],
    reveal: "You cried on call… afraid I might not love you."
  },
  {
    q: "What happened one month later on the same date?",
    options: ["We fought", "Our first video call 💖"],
    reveal: "On the 19th… same date as our first call… we did our first video call."
  },
  {
    q: "What did we realise then?",
    options: ["It was complicated", "We liked each other ❤️"],
    reveal: "We both knew… we liked each other."
  },
  {
    q: "And after that?",
    options: ["Nothing special", "Happy us 💕"],
    reveal: "And here we are… happy us. With fights, love, and everything in between 🌷"
  }
];

let step = 0;

function loadQuestion() {
  document.getElementById("question").innerText = story[step].q;
  const buttons = document.querySelectorAll(".options button");
  buttons[0].innerText = story[step].options[0];
  buttons[1].innerText = story[step].options[1];
}

function choose() {
  typeText(story[step].reveal, "storyMsg");
  step++;
  if (step < story.length) {
    setTimeout(loadQuestion, 3000);
  } else {
    setTimeout(() => {
      document.getElementById("question").innerText =
        "And somehow… that moment became us 💖";
      document.querySelector(".options").style.display = "none";
    }, 3500);
  }
}

loadQuestion();
