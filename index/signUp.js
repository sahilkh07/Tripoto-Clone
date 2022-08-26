
let Data = JSON.parse(localStorage.getItem("dataSignup"))||[];


let Login = [];

document.getElementById('show-login').addEventListener('click',function(){
    document.querySelector(".popup").classList.add('active');

    document.getElementById("login").addEventListener("click",loginFunction)
});
document.querySelector('.popup .close-btn').addEventListener('click',function(){
    document.querySelector(".popup").classList.remove('active');
});




document.getElementById('loginpage').addEventListener('click',function(){
    document.querySelector(".popup1").classList.add('active');

    document.getElementById("signUp").addEventListener("click",SignupData)
});

document.querySelector('.popup1 .close-btn').addEventListener('click',function(){
    document.querySelector(".popup1").classList.remove('active');
});

function SignupData(e){

    e.preventDefault();

    let obj = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        mobile: document.getElementById("mobile").value
    }

    if(obj.name=="" || obj.email=="" || obj.password=="" || obj.mobile==""){
       return alert("Something is missing");
    }
    Data.push(obj);
    localStorage.setItem("dataSignup",JSON.stringify(Data))
    alert("SignUp Successful! Go Back To Login Page")
 
}

function loginFunction(e){

    e.preventDefault();

    let flag = false;

    let loginData = JSON.parse(localStorage.getItem("dataSignup"));

    let email = document.getElementById("loginEmail").value;
    
    let password = document.getElementById("loginPassword").value;


    for(let i=0; i<loginData.length; i++){
        if(loginData[i].email==email && loginData[i].password==password){
            flag = true;
            let name = loginData[i].name
            Login.push(name);
            localStorage.setItem("dataLogin",JSON.stringify(Login));
           
        }
    }

    if(flag==true){
        alert("Login Successful");
        window.location.href = "1.html"
        
    }else{
        alert("Wrong Credentails")
    }

    // loginData.forEach(function(ele){

    //     let element = {
    //         email: ele.email,
    //         password: ele.password
    //     }
    
    // let email = document.getElementById("loginEmail").value;
    
    // let password = document.getElementById("loginPassword").value;

    // if(email!=element.email || password!=element.password){
    //      alert("Wrong Credentials! Login Again");

    //      document.getElementById("loginEmail").value = "";
    //      document.getElementById("loginPassword").value = "";
         
    //      return
    // }

    // 

    // localStorage.setItem("dataLogin",JSON.stringify(Login));
    // alert("Login successful");
    // window.location.href = "1.html"

    // })
}
display(Login)
function display(Login){
    let data = JSON.parse(localStorage.getItem("dataLogin"))
    
    let btn = document.createElement("button")
    btn.style.width = '50px'
    btn.innerText = data[0];
    document.getElementById("corner").style.left = "48%"

    document.getElementById("corner").append(btn)
}


document.getElementById("addAmount").addEventListener("click",addAmount);

function addAmount(e){

    e.preventDefault();

    let div = document.createElement("div");
    div.setAttribute("id","Amount")

    let title = document.createElement("label");
    // title.setAttribute("id","amount-font")
    title.innerText = "Add Amount"

    let input = document.createElement("input");
    input.setAttribute("id","addAmountButton")
    input.type = "number";
    input.placeholder = "Enter Amount"

    let button = document.createElement("button");
    button.setAttribute("id","addAmountButton")
    button.innerText = "Add to wallet";

    button.addEventListener("click",function(){
        addAmountButton(input.value)
    })

    div.append(title,input,button)

    document.getElementById("amount-add").append(div)
}

let total = JSON.parse(localStorage.getItem("addingAmount"))||[];

let sum = 0;

function addAmountButton(x){
    // console.log(x);
    sum = parseInt(x);
    total.push(sum);
    localStorage.setItem("addingAmount",JSON.stringify(total))
}
// Add Amount Function


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

// function leftfunction(){
//     index--;
//     if(index<0){
//         index = SlidingImages.length-1;
//     }
//     image.src = SlidingImages[index]
// }










