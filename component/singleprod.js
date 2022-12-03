let user = JSON.parse(localStorage.getItem("signIndetail")) || [];

let userstatus = JSON.parse(localStorage.getItem("User"));
let alldata = JSON.parse(localStorage.getItem("allproducts")) || [];
let arr = JSON.parse(localStorage.getItem("Single_products")) || [];
console.log("arr: ", arr);
display(user);

function display(ele) {
  user.forEach(function (ele) {
    document.querySelector("#displayname").innerText = ele.name;
    document.querySelector("#UserName").innerText =
      "Welcome Back" + " " + ele.name + "!";
  });
}

let div = document.createElement("div");

let image = document.getElementById("image");
let img = document.createElement("img");
img.setAttribute("src", arr.image_url);
image.append(img);

let title = document.getElementById("title");
let name = document.createElement("h1");
name.innerText = arr.name;
title.append(name)

let price = document.getElementById("price");
let pri = document.createElement("h3");
price.innerText = "Rs" + arr.price + "/";
price.append(pri)

let offer = document.getElementById("offer");
let off = document.createElement("h3");
off.innerText = "Off% Rs" + arr.strikedoffprice;
offer.append(off)

let button = document.getElementById("side");
let btn = document.createElement("button");
btn.addEventListener("click", function () {
  addtocart(arr);
});
btn.innerText = "Add to Bag";
button.append(btn)

document.querySelector("#containercart").append(div);

function addtocart(arr) {
  alldata.push({ ...arr });
  alert("Product Added to Cart");
  localStorage.setItem("allproducts", JSON.stringify(alldata));
}
