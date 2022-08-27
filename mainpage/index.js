let imageArr = [
  [
    "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660817736_078_commonarea_07_min.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1659608221_d0f7de4a_b1d9_40e0_bba0_d0527a824e78.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660808085_shutterstock_1611239635_min.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660310642_j_1.jpg",
  ],
  [
    "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660807748_shutterstock_1876968394_1_min.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660807837_shutterstock_1967521477_min.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1659354694_yaopey_yong_flmptucjkto_unsplash.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660807878_saudi_farasan.jpg",
  ],
  [
    "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660628672_131902158_8404856472920890_2578227520681040006_n.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1653562686_275721311_336154091889496_2451172917242741439_n.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1658236943_1200px_har_ki_dun.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1659609068_292964698_360983962777135_5575874099652238243_n.jpg",
  ],
];

h4 = [
  [
    "goSTOPS",
    "singapore tourism board",
    "saudi tourism authority",
    "Niyo Global",
  ],
  [
    "saudi tourism authority",
    "saudi tourism authority",
    "AmberStudent",
    "saudi tourism authority",
  ],
  [
    "Niyo Global",
    "singapore tourism board",
    "goSTOPS",
    "singapore tourism board",
  ],
];

h3 = [
  [
    "Experience the Best of Monsoon With These Trendy goSTOPS Stays Under Rs 2,000",
    "The Panchi Befikra Contest Is Live and Here's Why You Should Participate!",
    "This Quiz on Saudi Will Help You Design Your Best Adventure!",
    "India's Top Travel Influencers Share Their Best Secrets for Budget International Trips!",
  ],
  [
    "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller",
    "સાઉદીઃ કેવી રીતે કરવો આ અનોખા દેશનો યાદગાર પ્રવાસ",
    "Student in London? Here’s Your Guide to Affordable and Exciting Ways to Explore The City!",
    "সমুদ্র, স্থাপত্য ও ইতিহাসের এক অনন্য মেলবন্ধন - সৌদি আরব ভ্রমণের একটি সম্পূর্ণ ট্রাভেল গাইড",
  ],
  [
    "8 Cool Things That You Can Do At International Airports That'll Make You Want To Have A Layover",
    "Visit These 7 Chic Bars in Singapore if You’re in the Mood to Live up the Night!",
    "Trek through Himalayan Forests & Waterfalls under Rs 8,000 with goEXPERIENCES by goSTOPS!",
    "These Staycation Hotels in Singapore Will Make You Wish Your Vacation Lasts Forever",
  ],
];
let move = document.getElementById("moving_id");
let appndButton = document.getElementById("moving_id");

let crauser1 = document.querySelector(".crauser1");
let crauser2 = document.querySelector(".crauser2");
let crauser3 = document.querySelector(".crauser3");
let crauser4 = document.querySelector(".crauser4");

let h41 = document.querySelector("#h41");
let h42 = document.querySelector("#h42");
let h43 = document.querySelector("#h43");
let h44 = document.querySelector("#h44");

let h31 = document.querySelector("#h31");
let h32 = document.querySelector("#h32");
let h33 = document.querySelector("#h33");
let h34 = document.querySelector("#h34");

console.log("crauser:", crauser1);

//  buttonEvent = document.getElementById("btn_right")
// let leftbuttonEvent = document.getElementById("btn_left")
// let leftbuttonEvent=document.createElement("button")
// leftbuttonEvent.setAttribute("id","btn_left")
// leftbuttonEvent.innerText="<"
// leftbuttonEvent.setAttribute("class","btn_left_class")

let imageState = 0;
let indexmove = 0;
let texth4 = 0;
let h4text = 0;
let texth3 = 0;
let h3text = 0;
let extract;
console.log("extract:", extract);
let buttonEvent = document.createElement("button");

buttonEvent.setAttribute("id", "btn_right");
buttonEvent.innerText = ">";
buttonEvent.setAttribute("class", "btn_right_class");

// let leftbuttonEvent=document.createElement("button")
// if (imageState> 0) {
//   let leftbuttonEvent = document.createElement("button");
//   leftbuttonEvent.setAttribute("id", "btn_left");
//   leftbuttonEvent.innerText = "<";
//   leftbuttonEvent.setAttribute("class", "btn_left_class");
//   appndButton.append(leftbuttonEvent);
// }
let leftbuttonEvent = document.createElement("button");
leftbuttonEvent.setAttribute("id", "btn_left");
leftbuttonEvent.innerText = "<";
leftbuttonEvent.setAttribute("class", "btn_left_class");



buttonEvent.addEventListener("click", function () {
  

  extract = imageState++;
  

  console.log("imageState:", imageState);
  texth4++;
  texth3++;

  crauser1.src = imageArr[imageState][indexmove];
  h41.innerText = h4[texth4][h4text];
  h31.innerText = h3[texth3][h3text];
  h4text++;
  indexmove++;
  h3text++;
  crauser2.src = imageArr[imageState][indexmove];
  h42.innerText = h4[texth4][h4text];
  h32.innerText = h3[texth3][h3text];
  indexmove++;
  h4text++;
  h3text++;
  crauser3.src = imageArr[imageState][indexmove];
  h43.innerText = h4[texth4][h4text];
  h33.innerText = h3[texth3][h3text];
  indexmove++;
  h4text++;
  h3text++;
  crauser4.src = imageArr[imageState][indexmove];
  h44.innerText = h4[texth4][h4text];
  h34.innerText = h3[texth3][h3text];

  // imageState++

  indexmove = 0;
  h4text = 0;
  h3text = 0;

  // console.log('imageState:', imageState)
});
// imageState++
appndButton.append(buttonEvent);

console.log("imageState:", imageState);

leftbuttonEvent.addEventListener("click", function () {
  imageState--;

  texth4--;
  texth3--;

  crauser1.src = imageArr[imageState][indexmove];
  h41.innerText = h4[texth4][h4text];
  h31.innerText = h3[texth3][h3text];
  h4text++;
  indexmove++;
  h3text++;
  crauser2.src = imageArr[imageState][indexmove];
  h42.innerText = h4[texth4][h4text];
  h32.innerText = h3[texth3][h3text];
  indexmove++;
  h4text++;
  h3text++;
  crauser3.src = imageArr[imageState][indexmove];
  h43.innerText = h4[texth4][h4text];
  h33.innerText = h3[texth3][h3text];
  indexmove++;
  h4text++;
  h3text++;
  crauser4.src = imageArr[imageState][indexmove];
  h44.innerText = h4[texth4][h4text];
  h34.innerText = h3[texth3][h3text];

  // imageState++

  indexmove = 0;
  h4text = 0;
  h3text = 0;

  console.log(imageState);
});
appndButton.append(leftbuttonEvent);

// console.log(imageArr[1])

document.querySelector(".smallDiv").addEventListener("click", function () {
  window.location.href = "/mindfulpage/mindful.html";
});

let appendExtra = document.getElementById("sss");
function serachClick() {
  let div = document.createElement("div");
  div.setAttribute("id", "extra");
  let div2 = document.createElement("div");
  div2.setAttribute("class", "same");
  let p1 = document.createElement("p");
  p1.style.fontSize = "20px";
  p1.innerText = "packages and stay";
  let p2 = document.createElement("p");
  p2.innerText = "Login to use your credits on packages";
  div2.append(p1, p2);
  let div3 = document.createElement("div");
  div3.setAttribute("class", "same");
  let p3 = document.createElement("p");
  p3.innerText = "Online Experiences By Tripoto";
  p3.style.fontSize = "20px";
  let p4 = document.createElement("p");
  p4.innerText = "Online workshops by various experts. See details.";
  div3.append(p3, p4);
  let div4 = document.createElement("div");
  div4.setAttribute("class", "same");
  let p5 = document.createElement("p");
  p5.innerText = "How to earn badges";
  p5.style.fontSize = "20px";
  let p6 = document.createElement("p");
  p6.innerText = "Flaunt your travel achievements";
  div4.append(p5, p6);
  let div5 = document.createElement("div");
  div5.setAttribute("class", "same");
  let p7 = document.createElement("p");
  p7.innerText = "Goa";
  p7.style.fontSize = "20px";
  let p8 = document.createElement("p");
  p8.innerText = "Trending now";
  div5.append(p7, p8);

  div.append(div2, div3, div4, div5);
  appendExtra.append(div);
}

let hh = document.getElementById("main");
let aa = document.getElementById("hhhh");
let mmm = document.getElementById("showinspire");
function showfunc() {
  let div = document.createElement("div");
  div.setAttribute("id", "inspire");
  let h3 = document.createElement("h3");
  h3.innerText = "kkkkk";
  div.append(h3);
  // mmm.append(div)
}
// function outFunc(){
//     aa.style.color="white"
// onmouseover="showfunc()" onmouseout="outFunc()"

// }

let agustArr = [
  [
    "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658862164_1455274435_udaipur3_jpg.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1659027857_1658481747_depositphotos_95512066_stock_illustration_incredible_india_background.jpeg",
    "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658862269_1467796889_1467796887893_5_2.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658863582_1657213046_satyan_chawla_pti5yh3a4l8_unsplash.jpg",
  ],
  [
    "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658862360_1470344082_14410876714_8fb5c0e392_o.png",
    "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658862537_1658847371_mg_7852.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1656331454_1560494791_motorcycle_2937056_1280.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1656331979_1465388810_mussoorie_goa_634.jpg",
  ],
];

let i1 = 0;
let i2 = 0;

let agustbutton = document.createElement("button");
agustbutton.innerText = ">";
agustbutton.setAttribute("class", "btn_right_class");

document.getElementById("buttonagust").append(agustbutton);

let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let d = document.querySelector(".d");
let flag = false;

console.log("flag:", flag);

agustbutton.addEventListener("click", function () {
  i1++;
  if (i1 > 1) {
    i1 = 1;
  }

  flah = true;
  a.src = agustArr[i1][i2];
  console.log("src:", a.src);
  i2++;
  b.src = agustArr[i1][i2];
  i2++;
  c.src = agustArr[i1][i2];
  i2++;
  d.src = agustArr[i1][i2];

  i2 = 0;
});
