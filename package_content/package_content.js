let images = [
    // "https://c4.wallpaperflare.com/wallpaper/7/761/254/urban-colorful-night-times-square-wallpaper-preview.jpg" ,

    "https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1661146854_2z1a3881_1.jpg" ,

    "https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1660807452_2z1a3890_1.jpg" ,

    "https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1660807515_5b0ae6f4_0bc8_48ba_a590_5ee9239110e2_1.jpeg",

    "https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1660807542_d17cd3ef_1aaa_45ba_9117_0734493a0242_1.jpeg",

    "https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1660807613_2z1a3900_1.jpg",

    "https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1660807678_762a9833_5e07_4e04_9e34_bb912a22958a.jpeg",

    "https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1661145238_lead_form_1.jpg"
]

let image = document.getElementById("slideImage");

document.getElementById("left").addEventListener("click",leftfunction);

document.getElementById("right").addEventListener("click",rightfunction);

let index = 0;

function rightfunction(){
    index++;
    if(index == images.length){
        index = 0;
    }
    image.src = images[index]
}

function leftfunction(){
    index--;
    if(index<0){
        index = images.length-1;
    }
    image.src = images[index]
}
let Icon = [
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1555425505_meals.png",
        name: "Meals"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1555425506_breakfast.png",
        name: "Daily Breakfast"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1555425508_sightseeing.png",
        name: "Sightseeing"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1555425508_camp.png",
        name: "Camp"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1592388015_adventure.png",
        name: "Adventure"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1592388052_nature.png",
        name: "Nature"
    },
    {
        image:  "https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1592388084_wellness.png",
        name: "Wellness"
    },
    {
        image:  "https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1592388038_hidden_gem.png",
        name: "Hidden Gem"
    }
]

ShowIcon(Icon);

function ShowIcon(Icon){

    Icon.forEach(function(ele){

        let div = document.createElement("div");
        let image = document.createElement('img');
        image.setAttribute('class','IconImage')
        image.src = ele.image;

        let name = document.createElement("h5");
        name.setAttribute('class','IconName')
        name.innerText = ele.name;

        div.append(image,name)

        document.getElementById("left-bar-02").append(div);
    })
}

let dropdownBtn = document.querySelector('.dropdown');
let menuContent = document.querySelector('.day-1');
dropdownBtn.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
   } else {
      menuContent.style.display="";
   }
})

let dropdownBtn1= document.querySelector('.dropdown1');
let menuContent1 = document.querySelector('.day-2');
dropdownBtn1.addEventListener('click',()=>{
   if(menuContent1.style.display===""){
      menuContent1.style.display="block";
   } else {
      menuContent1.style.display="";
   }
})

let dropdownBtn2= document.querySelector('.dropdown2');
let menuContent2 = document.querySelector('.day-3');
dropdownBtn2.addEventListener('click',()=>{
   if(menuContent2.style.display===""){
      menuContent2.style.display="block";
   } else {
      menuContent2.style.display="";
   }
})

let dropdownBtn3= document.querySelector('.dropdown3');
let menuContent3 = document.querySelector('.day-4');
dropdownBtn3.addEventListener('click',()=>{
   if(menuContent3.style.display===""){
      menuContent3.style.display="block";
   } else {
      menuContent3.style.display="";
   }
})

let dropdownBtn4= document.querySelector('.dropdown4');
let menuContent4 = document.querySelector('.day-5');
dropdownBtn4.addEventListener('click',()=>{
   if(menuContent4.style.display===""){
      menuContent4.style.display="block";
   } else {
      menuContent4.style.display="";
   }
})