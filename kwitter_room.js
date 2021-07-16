function logout(){
    window.location="index.html";
    localStorage.removeItem("username");
}
welcome_name=localStorage.getItem("username");
    document.getElementById("welcome").innerHTML="Welcome "+welcome_name+"!";