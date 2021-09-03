/*function check(){

    var name=document.getElementById("username").value;
     
    if(name==""){
        document.getElementById("usererr").innerHTML="user not";
         //alert("1234");
    }
    else{
        alert("987");
    }
    e.preventDefault()
}
*/
function check() {
    var name = document.getElementById("username").value.trim();
    var pass = document.getElementById("password").value.trim();
    var status = false;


    if (name == "" || name == null) {
        document.getElementById("usererr").innerHTML = "*Please Enter The Valid Username";
        status = false;
    } else if (pass == "" || pass == null) {
        document.getElementById("usererr").innerHTML = "";
        document.getElementById("passerr").innerHTML = "*Please Enter The Valid Password";
        status = false;
    } else {
        document.getElementById("passerr").innerHTML = "";
        status = true;
        alert("Login Successfullly")

    }

    return status;
}