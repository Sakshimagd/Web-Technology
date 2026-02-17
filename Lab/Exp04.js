function fun1(){
    //get values using dom
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";

    let invalid = true;
    if(name == ""){
        document.getElementById(nameError.innerHTML = "Name field is required ");
        invalid = false;
    }

    //activity - for @ compulsion in email
    if(email == ""){
        document.getElementById(nameError.innerHTML = "Email field is required ");
        invalid = false;
    }
    
    if(password.length >= 8){
        document.getElementById(nameError.innerHTML = "password should contain 8 characters");
        invalid = false;
    }

}