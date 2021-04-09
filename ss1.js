function accept() {
    let $ten = document.getElementById('username').value;
    let $mk = document.getElementById('password').value;
    if($ten == "" && $mk == ""){
        alert("Input your Username and Input your Password");
    }
    else if($ten == ""){
        alert("Input your Username");
    }
    else if($mk == ""){
        alert("Input your Password");
    }
    else{
        alert("Sign in successfully");
    }

}