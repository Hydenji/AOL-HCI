var isValid1 = false;

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
//     if(isValid1){
//         form.submit();
//         window.location.href = "home.html";
//       }
// });

function formValidation(e){
    e.preventDefault();

    var username = document.getElementById("username")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var confirmPassword = document.getElementById("confirm-password")
    var agreeCheckBox = document.getElementById("agree-checkbox")

    if(username.value.length < 8){
        alert("Username must contains more thn 8 characters!")
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("Email must ends with '@gmail.com'")
    }
    else if(password.value.length == 0){
        alert("Password must be filled!")
    }
    else if(confirmPassword.value != password.value){
        alert("Confirm password must match the inputted password")
    }
    else if(!agreeCheckBox.checked){
        alert("Please agree to the terms and condition")
    }
    else{
        alert("Your account has been successfully registered!")
        isValid1 = true;
        window.location.href = "home.html";
    }
}