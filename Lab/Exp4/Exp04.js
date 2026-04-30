function SubmitButtonClick(){

     event.preventDefault(); 


    let name = document.getElementById('name').value;
    let emailId = document.getElementById('emailId').value;
    let password = document.getElementById('password').value;

    //clear old message
    document.getElementById('nameError').innerHTML="";
    document.getElementById('emailIdError').innerHTML="";
    document.getElementById('passwordError').innerHTML="";
    document.getElementById('successMessage').innerHTML = "";


    let isValid = true;
    if(name === ""){
        document.getElementById(nameError.innerHTML = "name Field is required");
        isValid = false
    }

    if (emailId === "") {
        document.getElementById('emailIdError').innerHTML = "Email field is required";
        isValid = false;
    } else if (!emailId.includes("@")) {
        document.getElementById('emailIdError').innerHTML = "Email must contain @";
        isValid = false;
    }

    if (password === "") {
        document.getElementById('passwordError').innerHTML = "Password field is required";
        isValid = false;
    } else if (password.length <= 6) {
        document.getElementById('passwordError').innerHTML = "Password must be more than 6 characters";
        isValid = false;
    }

    if (isValid) {
        document.getElementById('successMessage').innerHTML = "Registered Successfully";
        console.log("Registered successfully!!");
    }
    
    return isValid;
}