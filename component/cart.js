
let shiping =document.getElementById("shiping")
let ship=document.createElement("p")
ship=Math.floor(Math.random() * (99 - 10 + 1)) + 40


let arr = JSON.parse(localStorage.getItem("allproducts")) || [];
if (arr == "") {
  document.getElementById("text").innerText = "YOUR BAG IS EMPTY";
} else {
  shiping.append(ship)
  let fulltotal=0
  let total = 0;
  arr.forEach(function (elem, index) {
    total = total + Number(elem.price);
    let div = document.createElement("div");
    div.setAttribute("id", "div");
    let imagediv = document.createElement("div");

    let descdiv = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", elem.image_url);

    let name = document.createElement("h5");
    name.innerText = elem.name;

    let price = document.createElement("p");
    price.innerText = "Rs" + elem.price + "/";

    let off = document.createElement("p");
    off.innerText = "Off% Rs" + elem.strikedoffprice;

    let line = document.createElement("hr");
    let btn = document.createElement("button");
    btn.addEventListener("click", function () {
      deleteel(index);
    });
    btn.innerText = "Delete Item";
 
    

    totalpri = document.querySelector("#total");
    totalpri.innerText =  total;

    max= document.querySelector("#maxtotal");
    max.innerText = Number(total)+Number(ship);

    descdiv.append(img, name, price, off, btn);
    imagediv.append(img);
    div.append(imagediv, descdiv);
    document.querySelector("#containerss").append(div, line);
  });
}

function deleteel(index) {
  arr.splice(index, 1);

  localStorage.setItem("allproducts", JSON.stringify(arr));
  window.location.reload();
}

document.getElementById("checkout").addEventListener("click" ,function(){
  window.location.href="checkout.html"
  // alert("done bhenchod")
})
let user = JSON.parse(localStorage.getItem("signIndetail")) || [];
function display(ele) {
  user.forEach(function (ele) {
    document.querySelector("#displayname").innerText = ele.name ;
    document.querySelector("#UserName").innerText ="Welcome Back"+" " + ele.name+"!" ;
  });
}
display(user);