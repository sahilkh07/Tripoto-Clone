
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
}

display(Login)

function display(Login){
    let data = JSON.parse(localStorage.getItem("dataLogin"))
    
    let btn = document.createElement("button")
    let label = document.createElement("li")
    label.setAttribute("class","ins")
    btn.style.width = '120px'
    label.innerText = data[0];

    let ul = document.createElement("ul");
    let div = document.createElement("div");
    div.setAttribute("id","margin");
    let credit = document.createElement("li");
    credit.innerText = "Credit";
    credit.style.textAlign = "left";
    credit.style.fontSize = "12px";
    credit.setAttribute("id","setAmount")


    div.append(credit);
    label.append(ul)
    ul.append(div)
    btn.append(label)
    document.getElementById("corner").style.left = "45%"

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
showTotalAmount(total);

let sum = 0;

function addAmountButton(x){
    if(x==''){
     alert("Add some amount");
     return window.location.href = "1.html"
    }
    // console.log(x);
    sum = parseInt(x);
    total.push(sum);
    localStorage.setItem("addingAmount",JSON.stringify(total))
    alert("Amount Added")
    window.location.href = "1.html"
}
// Add Amount Function




function showTotalAmount(total){
    
    let sum = 0;
    total.forEach(function(ele){
        sum = sum + parseInt(ele);
        console.log(sum);
        document.getElementById("setAmount").innerText ="Credit: "+"Rs." +sum
    })
}




// Sliding Images part - 03
















