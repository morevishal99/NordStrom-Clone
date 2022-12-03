let menarr = JSON.parse(localStorage.getItem("allproducts")) || [];
mensData.forEach(function (elem) {
  let div = document.createElement("div");

  let img = document.createElement("img");
  img.setAttribute("src", elem.image_url);
  img.onclick = function () {
    localStorage.setItem("Single_products", JSON.stringify(elem));
    window.location.href = "productdesc.html";
  };

  let name = document.createElement("h5");
  name.innerText = elem.name;

  let price = document.createElement("p");
  price.innerText = "Rs" + elem.price + "/";

  let off = document.createElement("p");
  off.innerText = "Off% Rs" + elem.strikedoffprice;

  let btn = document.createElement("button");
  btn.addEventListener("click", function () {
    addtocart(elem);
  });
  btn.innerText = "Add to Bag";

  div.append(img, name, price, off, btn);
  document.querySelector("#container").append(div);
});

function addtocart(elem) {
  menarr.push(elem);
  alert("Product Added to Cart");
  localStorage.setItem("allproducts", JSON.stringify(menarr));
}
