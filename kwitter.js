function next(){
    username=document.getElementById("Input").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
}