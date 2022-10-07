var button = document.querySelector("button");
//var para = document.createElement("h3");


button.addEventListener("click", function () {
    if (document.querySelector("input").value !== "") {
        document.querySelector(".list").appendChild(document.createElement("h5"));
        var myList=document.querySelectorAll("h5");
        myList[myList.length-1].innerText = "📝   "+document.querySelector("input").value;
        document.querySelector("input").value = "";
    }
    
});