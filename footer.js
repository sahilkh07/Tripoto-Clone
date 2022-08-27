function footer(){
    return`
    <div id="container">
    <div>
    <img id="img" src="https://cdn1.tripoto.com/assets/2.9/img/logo/header-blue.svg" alt="">
    <p><u>India's Largest Travel Community</u>s</p>
    <div id="logo">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQLk3IhV0FtbrB59CcMe0ZYYXsTsWbhsBDQ&usqp=CAU" alt="">
        <img src="data:image/png;base64,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" alt="">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9UEG_Dc_VIPYPBbrf8uDw77DeEJ7QxDua2g&usqp=CAU" alt="">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0rovavysmteXibj6GF3w13z6AAFHeRyx_w&usqp=CAU" alt="">
    <img src="data:image/png;base64,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" alt="">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQle9HS5zB2sJUFJbovH6HJMs5R-3bUOJMhgQ&usqp=CAU" alt="">
    <div id="pl"><img src="https://cdn1.tripoto.com/assets/2.9/img/logo/download-android-app.svg" alt=""></div>
    </div>
    </div>
    <div id="about"><p class="top">About Tripoto</p>
    <p><a href="how.html">How it Works</a></p>
        <p>FAQ's</p>
        <p>Privacy Policy</p>
        <p>Term & Condition</p>
        <p>Careers</p>
        <p>Contact US</p>
    </div>
    <div id="Products"><p class="top">Products</p>
    <p>Tour Packages</p>
    <p>Travel Guides</p>
    <p>Trips & Itineraries</p>
       <p> Weekend Getaways</p>
       <p>Places to Visit</p>
       <p>Other Travel Categories</p>
       <p>Tripoto Forum</p>
       <p>Honeymoon Packages</p>
    </div>
    <div id="Travel"><p class="top">Important Travel Links</p>
        <p>Goa Tourism
        </p>
        <p>Dubai Tourism</p>
    <p>Singapore Tourism</p>
    <p>Kerala Tourism</p>
    <p>Manali Tourism</p>
    <p>Bali Tourism</p>
    <p>Sri Lanka Tourism</p>
    <p>Honeymoon Destinations In India</p>
    </div>
    <div id="partner" >
        <p class="top">Partner Programs</p>
    <p>Buy Travel Leads</p>
    <p>Partner With Us</p>
    <p>Earn Credits</p>
    <p>Get Paid To Travel</p>
    <p>Import Blog To Itinerary</p>
    <p>Tripoto Ai</p>
    </div>
        </div>
        <p id="end">© All rights reserved.</p>
    `
    
    }
    export default footer;