function login(){

    let user =
    document.getElementById("name").value;

    let password =
    document.getElementById("password").value;


    if(user=="payyour666@gmail.com"
       &&
       password=="Wan@2002"){

        alert("Login Successful");
        console.log("yes");

    }

    else{

        alert("Wrong Username or Password");
        console.log("no");

    }

}