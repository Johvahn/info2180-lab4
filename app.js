
function search(){
    var subbtn = document.querySelector("search-btn");
    console.log(subbtn);
    subbtn.addEventListener("click", function(event) {
        sup();
        event.preventDefault();
    });
}



function sup(){

    var user = document.querySelector("input").value;
    var str = document.getElementById("result");
    var http = new XMLHttpRequest();
    var url = `superheroes.php?query=${input}`;
    http.onreadystatechange = function(){
        if(http.readyState == XMLHttpRequest.DONE && http.status ==200){
                str.innerHTML = http.responseText;
        }
    }
    http.open('GET', url+user, true);
    http.send();  
}


window.addEventListener("DOMContentLoaded",function(){
    searchbtn();
})