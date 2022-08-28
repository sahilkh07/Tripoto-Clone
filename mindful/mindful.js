




let data = [
    {
        image:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1653391344_ln_c1.jpg",
        package: "PACKAGE",
        desc: "Explore An Artist’s Estate & Stay In A Kathkuni Home Hidden In Manali's Forests | NORTH",
        place: "Manali",
        price: "Rs. 9850"
    },
    {
        image:"https://cdn1.tripoto.com/media/filter/tst/img/2163002/Image/1640323403_image_cover_b.jpg",
        package: "PACKAGE",
        desc: "Explore An Artist’s Estate & Stay In A Kathkuni Home Hidden In Manali's Forests | NORTH",
        place: "Manali",
        price: "Rs. 9850"
    },
    {
        image:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657204838_omya_img_cover_b.jpg",
        package: "PACKAGE",
        desc: "Explore An Artist’s Estate & Stay In A Kathkuni Home Hidden In Manali's Forests | NORTH",
        place: "Manali",
        price: "Rs. 9850"
    },
    {
        image:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657734830_image_cover_a.jpg",
        package: "PACKAGE",
        desc: "Explore An Artist’s Estate & Stay In A Kathkuni Home Hidden In Manali's Forests | NORTH",
        place: "Manali",
        price: "Rs. 9850"
    },
    {
        image:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660666126_image_covera.jpg",
        package: "PACKAGE",
        desc: "Explore An Artist’s Estate & Stay In A Kathkuni Home Hidden In Manali's Forests | NORTH",
        place: "Manali",
        price: "Rs. 9850"
    },
    {
        image:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660316705_image_cover_1.jpg",
        package: "PACKAGE",
        desc: "Explore An Artist’s Estate & Stay In A Kathkuni Home Hidden In Manali's Forests | NORTH",
        place: "Manali",
        price: "Rs. 9850"
    },
    {
        image:"https://cdn1.tripoto.com/media/filter/tst/img/2163002/Image/1638778652_image_cover_b.jpg",
        package: "PACKAGE",
        desc: "Explore An Artist’s Estate & Stay In A Kathkuni Home Hidden In Manali's Forests | NORTH",
        place: "Manali",
        price: "Rs. 9850"
    },
    {
        image:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1654504108_ce_c1.jpg",
        package: "PACKAGE",
        desc: "Explore An Artist’s Estate & Stay In A Kathkuni Home Hidden In Manali's Forests | NORTH",
        place: "Manali",
        price: "Rs. 9850"
    },
    {
        image:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1645772836_image_cover.jpg",
        package: "PACKAGE",
        desc: "Explore An Artist’s Estate & Stay In A Kathkuni Home Hidden In Manali's Forests | NORTH",
        place: "Manali",
        price: "Rs. 9850"
    },
    {
        image:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1653394847_nw_c2.jpg",
        package: "PACKAGE",
        desc: "Explore An Artist’s Estate & Stay In A Kathkuni Home Hidden In Manali's Forests | NORTH",
        place: "Manali",
        price: "Rs. 9850"
    }
]


data.forEach(function(ele){

    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = ele.image;

    let package = document.createElement("p");
    package.setAttribute("id","packageID")
    package.innerText = ele.package

    let desc = document.createElement("h4");
    desc.innerText = ele.desc

    // ---------------------------Div for DAY and NIGHT

    let day = document.createElement("div");
    day.setAttribute("id","day");

    // ---------------------------Div for location and image

    let locationDiv = document.createElement("div");
    locationDiv.setAttribute("id","locationDiv");

    let location = document.createElement("img")
    location.src = "https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png";

    let place = document.createElement("p");
    place.innerText = ele.place;

    let duration = document.createElement("p");
    duration.setAttribute("id","durationPara")
    duration.innerText = "3D - 2N"

    day.append(locationDiv,duration)

    locationDiv.append(location,place)

    // ------------------------End Location Div

    // --------------------Parent Div For Price and Button

    let priceDiv = document.createElement("div");
    priceDiv.setAttribute("id","priceDiv");

    let price = document.createElement("h3");
    price.innerText = ele.price;

    let Button = document.createElement("button");
    Button.innerText = "Book Now"

    priceDiv.append(price,Button)

    // -----------------------------End priceDiv

    let line = document.createElement("hr");

    // ----------------------LOGO Parent

    let logoImage = document.createElement("div");
    logoImage.setAttribute("id","logoImage")

    let logo = document.createElement("img");
    // logo.setAttribute("id","logoImage")
    logo.src = "https://static2.tripoto.com/media/filter/tst/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg"

    let logoName = document.createElement("p");
    logoName.innerText = "Tripoto's Mindful Retreats"

    logoImage.append(logo,logoName);


    div.append(image,package,desc,day,priceDiv,line,logoImage);

    document.getElementById("image-content").append(div);
})
