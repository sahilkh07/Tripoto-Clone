
// -----------------------------------------------Sliding Images Part - 01 -----------------------------------------

let SlidingImages = [
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660807748_shutterstock_1876968394_1_min.jpg",
        name: "Saudi Tourism Authority",
        desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660628672_131902158_8404856472920890_2578227520681040006_n.jpg",
        name: "Saudi Tourism Authority",
        desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660807837_shutterstock_1967521477_min.jpg",
        name: "Saudi Tourism Authority",
        desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1659354694_yaopey_yong_flmptucjkto_unsplash.jpg",
        name: "Saudi Tourism Authority",
        desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660628672_131902158_8404856472920890_2578227520681040006_n.jpg",
        name: "Saudi Tourism Authority",
        desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1653562686_275721311_336154091889496_2451172917242741439_n.jpg",
        name: "Saudi Tourism Authority",
        desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1658236943_1200px_har_ki_dun.jpg",
        name: "Saudi Tourism Authority",
        desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1659609068_292964698_360983962777135_5575874099652238243_n.jpg",
        name: "Saudi Tourism Authority",
        desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660817736_078_commonarea_07_min.jpg",
        name: "Saudi Tourism Authority",
        desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1658236943_1200px_har_ki_dun.jpg",
        name: "Saudi Tourism Authority",
        desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660808085_shutterstock_1611239635_min.jpg",
        name: "Saudi Tourism Authority",
        desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1660310642_j_1.jpg",
        name: "Saudi Tourism Authority",
        desc: "Offering a Mix of Culture and Modernity, Riyadh Is Perfect for Every Kind of Traveller"
    }
];

document.getElementById("left").addEventListener("click",leftfunction);

document.getElementById("right").addEventListener("click",rightfunction);

// console.log(SlidingImages.length);

let index = 0;

function rightfunction(){

    if(index>=10){
     index = 0;
    }

    document.getElementById("new").innerHTML = "";

    for(let i=0; i<4; i++){
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = SlidingImages[index].image;

        let name = document.createElement('p');
        name.setAttribute("class","orange")
        name.innerText = SlidingImages[index].name;

        let desc = document.createElement("h3");
        desc.setAttribute("class","title");
        desc.innerText = SlidingImages[index].desc;
        index++;

        div.append(image,name,desc);

        document.getElementById("new").append(div)
    }
}


function leftfunction(){

    console.log(index);

    if(index<=3){
        index = SlidingImages.length-1;
    }

    document.getElementById("new").innerHTML = "";



    for(let i=0; i<4; i++){

        index--;

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = SlidingImages[index].image;

        let name = document.createElement('p');
        name.setAttribute("class","orange")
        name.innerText = SlidingImages[index].name;

        let desc = document.createElement("h3");
        desc.setAttribute("class","title");
        desc.innerText = SlidingImages[index].desc;

        // let leftbtn = document.createElement("button");
        // leftbtn.setAttribute("id","left")
        // leftbtn.innerText = "<"

        div.append(image,name,desc);

        document.getElementById("new").append(div)
    }
}




// ------------------------------------Sliding Images Part - 02---------------------------------------------


let SlidingImages1 = [
    {
        image: "https://static2.tripoto.com/media/filter/tst/img/1010934/TripDocument/1630428730_pchgni.jpg",
        name: "Sushree Kanti",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661507222_1631391120_autum.jpg",
        name: "Tanisha Mundra",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661507331_1587650619_9_dsc_0425.jpg",
        name: "Vaswati",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661507443_1633009115_243257387_1788683618007971_2371564452838209440_n_webp.jpg",
        name: "Riyanka Roy",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661513997_1553682109_k1.jpg",
        name: "Peppy Travel Girl",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661510408_1479794707_1479794681_1458549651_11400012273_b6cff1e99f_z.jpg",
        name: "Himani Khatreja",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661503866_1500748087_1500748076_20931122704_2b01b5e922_o.jpg",
        name: "Tripoto",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661503970_1660904422_dzukou_valley_4.jpg",
        name: "Arhi",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    }
]


document.getElementById("left1").addEventListener("click",leftfunction1);

document.getElementById("right1").addEventListener("click",rightfunction1);

// console.log(SlidingImages.length);

let index1 = 0;

function rightfunction1(){

    if(index1>=5){
     index1 = 0;
    }

    document.getElementById("august").innerHTML = "";

    for(let i=0; i<4; i++){
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = SlidingImages1[index1].image;

        let name = document.createElement('p');
        name.setAttribute("class","sizeable")
        name.innerText = "By ";

        let span = document.createElement("span");
        span.setAttribute("class","blue");
        span.innerText = SlidingImages1[index1].name;

        name.append(span)

        let desc = document.createElement("h3");
        desc.setAttribute("class","title2");
        desc.innerText = SlidingImages1[index1].desc;
        index1++;

        div.append(image,desc,name);

        document.getElementById("august").append(div)
    }
}


function leftfunction1(){

    console.log(index1);

    if(index1<=3){
        index1 = SlidingImages1.length-1;
    }

    document.getElementById("august").innerHTML = "";



    for(let i=0; i<4; i++){

        index1--;

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = SlidingImages1[index1].image;

        let name = document.createElement('p');
        name.setAttribute("class","sizeable")
        name.innerText = SlidingImages1[index1].name;

        let desc = document.createElement("h3");
        desc.setAttribute("class","title2");
        desc.innerText = SlidingImages1[index1].desc;

        // let leftbtn = document.createElement("button");
        // leftbtn.setAttribute("id","left")
        // leftbtn.innerText = "<"

        div.append(image,name,desc);

        document.getElementById("august").append(div)
    }
}


// --------------------------------------- Sliding Images Part - 03--------------------------------------------

let SlidingImages2 = [
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658863969_1493707507_15798144758_5a93457ae4_o.jpg",
        name: "Sushree Kanti",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1651046452_1545558276_erdap_2129568_1280.jpg",
        name: "Tanisha Mundra",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658864365_1529568428_1469857553_1.jpg",
        name: "Vaswati",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1653585757_1648645960_5.jpg",
        name: "Riyanka Roy",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658864126_1657780099_cover1.jpg",
        name: "Peppy Travel Girl",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658864265_1658819571_9.jpg",
        name: "Himani Khatreja",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658863871_1499420095_800px_kawah_ijen_ijen_crater_7540434086.jpg",
        name: "Tripoto",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658863969_1493707507_15798144758_5a93457ae4_o.jpg",
        name: "Arhi",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    }
]

document.getElementById("left2").addEventListener("click",leftfunction2);

document.getElementById("right2").addEventListener("click",rightfunction2);

// console.log(SlidingImages.length);

let index2 = 0;

function rightfunction2(){

    if(index2>=5){
     index2 = 0;
    }

    document.getElementById("august1").innerHTML = "";

    for(let i=0; i<4; i++){
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = SlidingImages2[index2].image;

        let name = document.createElement('p');
        name.setAttribute("class","sizeable")
        name.innerText = "By ";

        let span = document.createElement("span");
        span.setAttribute("class","blue");
        span.innerText = SlidingImages2[index2].name;

        name.append(span)

        let desc = document.createElement("h3");
        desc.setAttribute("class","title3");
        desc.innerText = SlidingImages2[index2].desc;
        index2++;

        div.append(image,desc,name);

        document.getElementById("august1").append(div)
    }
}


function leftfunction2(){

    console.log(index2);

    if(index2<=3){
        index2 = SlidingImages2.length-2;
    }

    document.getElementById("august1").innerHTML = "";



    for(let i=0; i<4; i++){

        index2--;

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = SlidingImages2[index2].image;

        let name = document.createElement('p');
        name.setAttribute("class","sizeable")
        name.innerText = SlidingImages2[index2].name;

        let desc = document.createElement("h3");
        desc.setAttribute("class","title3");
        desc.innerText = SlidingImages2[index2].desc;

        // let leftbtn = document.createElement("button");
        // leftbtn.setAttribute("id","left")
        // leftbtn.innerText = "<"

        div.append(image,name,desc);

        document.getElementById("august1").append(div)
    }
}


//----------------------------Last Sliding Images Property---------------------------------------------

let SlidingImages3 = [
    {
        image: "https://image.mux.com/65Mxwlku9ue7VTvDW8F72z1U5VIOiEaz/thumbnail.jpg?width=600&height=600&time=2.0",
        name: "Sushree Kanti",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/gen/1789711/Image/1634027797_thumbnail.jpg",
        name: "Tanisha Mundra",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://image.mux.com/iFVXAVPcgtz02Zcmt2ExiBVFZbYw7iMhN/thumbnail.jpg?width=600&height=600&time=3.01",
        name: "Vaswati",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://image.mux.com/VZNhkabs2mLwRfjO6j600Q7OmfLxm5VmV/thumbnail.jpg?width=600&height=600&time=2.0",
        name: "Riyanka Roy",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/gen/1789711/Image/1634027829_thumbnail.jpg",
        name: "Peppy Travel Girl",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://image.mux.com/65Mxwlku9ue7VTvDW8F72z1U5VIOiEaz/thumbnail.jpg?width=600&height=600&time=2.0",
        name: "Himani Khatreja",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://image.mux.com/iFVXAVPcgtz02Zcmt2ExiBVFZbYw7iMhN/thumbnail.jpg?width=600&height=600&time=3.01",
        name: "Tripoto",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    },
    {
        image: "https://image.mux.com/VZNhkabs2mLwRfjO6j600Q7OmfLxm5VmV/thumbnail.jpg?width=600&height=600&time=2.0",
        name: "Arhi",
        desc: "Tripoto's Destination OF The Month: Kashmir"
    }
]

document.getElementById("left3").addEventListener("click",leftfunction3);

document.getElementById("right3").addEventListener("click",rightfunction3);

// console.log(SlidingImages.length);

let index3 = 0;

function rightfunction3(){

    if(index3>=5){
     index3 = 0;
    }

    document.getElementById("august3").innerHTML = "";

    for(let i=0; i<4; i++){
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = SlidingImages3[index3].image;

        let name = document.createElement('p');
        name.setAttribute("class","sizeable")
        name.innerText = "By ";

        let span = document.createElement("span");
        span.setAttribute("class","blue");
        span.innerText = SlidingImages3[index3].name;

        name.append(span)

        let desc = document.createElement("h3");
        desc.setAttribute("class","titleLast");
        desc.innerText = SlidingImages3[index3].desc;
        index3++;

        div.append(image,desc,name);

        document.getElementById("august3").append(div)
    }
}


function leftfunction3(){

    console.log(index3);

    if(index3<=3){
        index3 = SlidingImages3.length-1;
    }

    document.getElementById("august3").innerHTML = "";



    for(let i=0; i<4; i++){

        index3--;

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = SlidingImages3[index3].image;

        let name = document.createElement('p');
        name.setAttribute("class","sizeable")
        name.innerText = SlidingImages3[index3].name;

        let desc = document.createElement("h3");
        desc.setAttribute("class","title3");
        desc.innerText = SlidingImages3[index3].desc;

        // let leftbtn = document.createElement("button");
        // leftbtn.setAttribute("id","left")
        // leftbtn.innerText = "<"

        div.append(image,name,desc);

        document.getElementById("august3").append(div)
    }
}


// -------------------------Navbar---------------------------

var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}