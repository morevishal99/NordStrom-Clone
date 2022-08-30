let arr = JSON.parse(localStorage.getItem("signIndetail"))||[]
    let form = document.querySelector("form");
    form.addEventListener("submit", function(e){
        e.preventDefault()
        let obj = {
            name:form.name.value,
            email: form.email.value,
            password: form.pass.value,
        }

        if(obj.name=="" ){
            alert("Fill in the Name to SignIN")
            return;
        } 
        else if(  obj.email==""){
            alert("Fill in the Email to SignIN")

        }
        else if( obj.password==""){
            alert("Fill in the Password to SignIN")

        }
        else{
            arr.push(obj)
        
        localStorage.setItem("signIndetail", JSON.stringify(arr))
        alert("Signin Succesfull")
        window.location.href="login.html"
        }
        
        
    });