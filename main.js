// Hardcoded data to customize and insert into the page
const data = {
  greeting: "Hiya,",
  name: "Sam's",
  greetingText: "I really like your nickname btw!",
  wishText: "May my ability to annoy you never fade. Happy suffering, pookie! ;)",
  imagePath: "img/pookie.jpg",
  text1: "It's your birthday!!! :D",
  textInChatBox: "Happy birthday to you!! Yeee! Many many happy blah...",
  sendButtonLabel: "Send",
  text2: "That's what I was going to do.",
  text3: "But then I stopped.",
  text4: "I realised, I wanted to do something",
  text4Adjective: "special",
  text5Entry: "Because,",
  text5Content: "You are Special",
  smiley: ":)",
  bigTextPart1: "S",
  bigTextPart2: "O",
  wishHeading: "Happy Birthday!",
  outroText: "Okay, now come back and tell me if you liked it.",
  replayText: "Or click, if you want to watch it again.",
  outroSmiley: ":)"
};

// Function to insert data into the page
const insertData = () => {
  document.querySelector(`[data-node-name="greeting"]`).innerText = data.greeting;
  document.querySelector(`[data-node-name="name"]`).innerText = data.name;
  document.querySelector(`[data-node-name="greetingText"]`).innerText = data.greetingText;
  document.querySelector(`[data-node-name="text1"]`).innerText = data.text1;
  document.querySelector(`[data-node-name="textInChatBox"]`).innerText = data.textInChatBox;
  document.querySelector(`[data-node-name="sendButtonLabel"]`).innerText = data.sendButtonLabel;
  document.querySelector(`[data-node-name="text2"]`).innerText = data.text2;
  document.querySelector(`[data-node-name="text3"]`).innerText = data.text3;
  document.querySelector(`[data-node-name="text4"]`).innerText = data.text4;
  document.querySelector(`[data-node-name="text4Adjective"]`).innerText = data.text4Adjective;
  document.querySelector(`[data-node-name="text5Entry"]`).innerText = data.text5Entry;
  document.querySelector(`[data-node-name="text5Content"]`).innerText = data.text5Content;
  document.querySelector(`[data-node-name="smiley"]`).innerText = data.smiley;
  document.querySelector(`[data-node-name="bigTextPart1"]`).innerText = data.bigTextPart1;
  document.querySelector(`[data-node-name="bigTextPart2"]`).innerText = data.bigTextPart2;
  document.querySelector(`[data-node-name="wishHeading"]`).innerText = data.wishHeading;
  document.querySelector(`[data-node-name="wishText"]`).innerText = data.wishText;
  document.querySelector(`[data-node-name="outroText"]`).innerText = data.outroText;
  document.querySelector(`[data-node-name="replayText"]`).innerText = data.replayText;
  document.querySelector(`[data-node-name="outroSmiley"]`).innerText = data.outroSmiley;
  document.querySelector(`[data-node-name="imagePath"]`).setAttribute("src", data.imagePath);
};

// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=0.5"
    )
    .to(
      ".idea-5 .smiley",
      0.7,
      {
        rotation: 90,
        x: 8
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    .from(
      ".lydia-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90
      },
      "+=1"
    );

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Run insertData and animation in sequence
insertData();
animationTimeline();
