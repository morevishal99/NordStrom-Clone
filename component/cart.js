let arr = JSON.parse(localStorage.getItem("allproducts")) || []
if(arr==""){
    document.getElementById("text").innerText="Cart is Empty"
}
else{


    let total = 0
    arr.forEach(function (elem, index) {
        total = total + Number(elem.price)
        let div = document.createElement("div")

        let img = document.createElement("img");
        img.setAttribute("src", elem.image_url);

        let name = document.createElement("h5");
        name.innerText = elem.name;

        let price = document.createElement("p");
        price.innerText = "Rs" + elem.price + "/";

        let off = document.createElement("p");
        off.innerText = "Off% Rs" + elem.strikedoffprice


        let btn = document.createElement("button");
        btn.addEventListener("click", function () {
            deleteel(index)
        })
        btn.innerText = "Delete Item"

        totalpri = document.querySelector("#total")
        totalpri.innerText = total


        div.append(img, name, price, off, btn)
        document.querySelector("#containercart").append(div)
    })


}

    function deleteel(index) {
        arr.splice(index, 1)

        localStorage.setItem("allproducts", JSON.stringify(arr));
        window.location.reload()
    }



