
// let SlidingImages = [
//     {
//         image: "https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1640686822_1640615670_screenshot_2021_12_27_at_8_04_20_pm.jpg",
//         name: "Saudi Tourism Authority",
//         desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
//     },
//     {
//         image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660628672_131902158_8404856472920890_2578227520681040006_n.jpg",
//         name: "Saudi Tourism Authority",
//         desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
//     },
//     {
//         image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660807837_shutterstock_1967521477_min.jpg",
//         name: "Saudi Tourism Authority",
//         desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
//     },
//     {
//         image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1659354694_yaopey_yong_flmptucjkto_unsplash.jpg",
//         name: "Saudi Tourism Authority",
//         desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
//     },
//     {
//         image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660628672_131902158_8404856472920890_2578227520681040006_n.jpg",
//         name: "Saudi Tourism Authority",
//         desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
//     },
//     {
//         image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1653562686_275721311_336154091889496_2451172917242741439_n.jpg",
//         name: "Saudi Tourism Authority",
//         desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
//     },
//     {
//         image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1658236943_1200px_har_ki_dun.jpg",
//         name: "Saudi Tourism Authority",
//         desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
//     },
//     {
//         image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1659609068_292964698_360983962777135_5575874099652238243_n.jpg",
//         name: "Saudi Tourism Authority",
//         desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
//     },
//     {
//         image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660817736_078_commonarea_07_min.jpg",
//         name: "Saudi Tourism Authority",
//         desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
//     },
//     {
//         image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1658236943_1200px_har_ki_dun.jpg",
//         name: "Saudi Tourism Authority",
//         desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
//     },
//     {
//         image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660808085_shutterstock_1611239635_min.jpg",
//         name: "Saudi Tourism Authority",
//         desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
//     },
//     {
//         image: "",
//         name: "Saudi Tourism Authority",
//         desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
//     }
// ];

// document.getElementById("left").addEventListener("click",leftfunction);

// document.getElementById("right").addEventListener("click",rightfunction);

// // console.log(SlidingImages.length);

// let index = 0;

// function rightfunction(){

//     if(index>=10){
//      index = 0;
//     }

//     document.getElementById("trend").innerHTML = "";



//     for(let i=0; i<4; i++){
//         let div = document.createElement("div");
//         div.setAttribute('class','card')

//         let image = document.createElement("img");
//         image.src = SlidingImages[index].image;

//         let name = document.createElement('p');
    
//         name.innerText = SlidingImages[index].name;
//         let span= document.createElement('span')
//         span.setAttribute('class',"blue")
//         span.innerText = SlidingImages[index].name;

//         let desc = document.createElement("h3");
    
//         desc.innerText = SlidingImages[index].desc;
//         index++;

//         div.append(image,name,desc,span);

//         document.getElementById('trend').append(div)
//     }
// }


// function leftfunction(){

//     console.log(index);

//     if(index<=3){
//         index = SlidingImages.length-1;
//     }

//     document.getElementById("trend").innerHTML = "";



//     for(let i=0; i<4; i++){

//         index--;

//         let div = document.createElement("div");
//         div.setAttribute('class','card')

//         let image = document.createElement("img");
//         image.src = SlidingImages[index].image;

//         let name = document.createElement('p');
//         name.setAttribute("class","blue")
//         name.innerText = SlidingImages[index].name;

//         let desc = document.createElement("h3");
    
//         desc.innerText = SlidingImages[index].desc;

//         // let leftbtn = document.createElement("button");
//         // leftbtn.setAttribute("id","left")
//         // leftbtn.innerText = "<"

//         div.append(image,name,desc);

//         document.getElementById("trend").append(div)
//     }
// }


