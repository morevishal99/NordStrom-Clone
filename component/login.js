let signIn = JSON.parse(localStorage.getItem("signIndetail")) || []

    let form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault()


        if (signIn.length===0){
            alert("No User Found")
            return
        }
     
        let obj = {
            email: form.email.value,
            password: form.pass.value,
        }
    
        
            
signIn.forEach(function(ele){
    if(ele.email==obj.email && ele.password==obj.password){
        alert("Login Success")
        localStorage.setItem("LogIndetail", JSON.stringify(signIn))
        window.location.href = "Navbar2.html"

    }else{
        alert("User Not Found")
    }

})
})

