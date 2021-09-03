function check() {
    var fname = document.getElementById("fn").value.trim();
    var lname = document.getElementById("ln").value.trim();
    var name = document.getElementById("sun").value.trim();
    var pass = document.getElementById("spw").value.trim();
    var number = document.getElementById("number").value;
    var email = document.getElementById("semail").value;
    var sadd = document.getElementById("spa").value.trim();
    const phoneno = /^\d{10}$/
    const mailo = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
    var status = false;

    if (fname == "") {
        document.getElementById("ferr").innerHTML = "*Please Enter Your First Name";
        status = false;

    } else if (fname.length >= 3) {
        document.getElementById("ferr").innerHTML = "";
        status = false;

    } else if (fname.length <= 2) {
        document.getElementById("ferr").innerHTML = "*First Name Must be Above 2 char";
        status = false;
    }
    if (lname == "") {
        document.getElementById("lerr").innerHTML = "*Please Enter Your Last Name";
        status = false;
    } else if (lname.length >= 3) {
        document.getElementById("lerr").innerHTML = "";
        status = false;

    } else if (lname.length <= 2) {
        document.getElementById("lerr").innerHTML = "*Last Name Must be Above 2 char";
        status = false;
    }
    if (name == "") {
        document.getElementById("usererr").innerHTML = "*Please Enter Username";
        status = false;
    } else if (name.length >= 4) {
        document.getElementById("usererr").innerHTML = "";
        status = false;
    } else if (name.length <= 4) {
        document.getElementById("usererr").innerHTML = "*Please Enter The Valid Username";
        status = false;
    }
    if (pass == "") {
        document.getElementById("passerr").innerHTML = "*Please Enter The Password";
        status = false;
    } else if (pass.length <= 5) {
        document.getElementById("passerr").innerHTML = "*Please Enter The Valid Password";
        status = false;
    } else if (pass.length >= 6) {
        document.getElementById("passerr").innerHTML = "";
        status = false;
    }
    if (number == "") {
        document.getElementById("numbererr").innerHTML = "*Please Enter Phone Number";
        status = false;
    } else if (!(phoneno.test(number))) {
        document.getElementById("numbererr").innerHTML = "*invlid phone number";
        status = false;
    } else if (phoneno.test(number)) {
        document.getElementById("numbererr").innerHTML = "";
        status = false;
    }

    if (email == "") {
        document.getElementById("emailerr").innerHTML = "*Please Enter Email Id";
        status = false;
    } else if (!(mailo.test(email))) {
        document.getElementById("emailerr").innerHTML = "*invlid Email Id";
        status = false;
    } else if ((mailo.test(email))) {
        document.getElementById("emailerr").innerHTML = "";
        status = false;
    }
    if (sadd == "") {
        document.getElementById("adderr").innerHTML = "*Please Enter Your College Address";
        status = false;
    } else if (sadd.length <= 10) {
        document.getElementById("adderr").innerHTML = "*Please Enter The Valid Address";
        status = false;
    } else if (sadd.length >= 10) {
        document.getElementById("adderr").innerHTML = "";
        status = false;
    }

    if (fname.length >= 3 && lname.length >= 3 && name.length >= 4 && pass.length >= 6 && phoneno.test(number) && mailo.test(email) && sadd.length >= 10) {
        alert("Login Successfullly")
        status = true;
    }

    return status;
}