var alldata = document.querySelector("#allData");
var jsonObj, JSObj;

var xhrPhoto = new XMLHttpRequest();

xhrPhoto.onreadystatechange = function () {
    if (xhrPhoto.readyState == 4)
        if (xhrPhoto.status == 200) {
            jsonObj = xhrPhoto.responseText;
            JSObj = JSON.parse(jsonObj);
            console.log(JSObj["products"]);

            result = [];
            result.push(JSObj["products"]);
            console.log(result[0]);
            //createElement(result)
            for (var i = 0; i < result[0].length; i++) {
                alldata.innerHTML += `<div class ="col-md-4 mt-3"> <a href ="Details.html?id=${result[0][i]["id"]}"> 
                 <div class = "card"> <div class="card-header" >${result[0][i]["title"]} </div>
                 <div class ="card-body">  
                 <img src="${result[0][i]["images"][1]} "class="img-fluid" style="max-hight:100px ; width:250px ">
                 </div>
                 <div class="card-footer">
                 <span class="badg badg-secndary"> ${result[0][i]["price"]}$</span>
                 <button class="btn btn-sm float-right btn-info"> More Details</button>
                 <div>
                 </div> </a></div>`;
                console.log(result[0][i]);       
                
            }
        }
};
xhrPhoto.open("GET", "https://dummyjson.com/products", true);
xhrPhoto.send();

function createElement(result) {
    for (let i = 0; i < result.Length; i++) {
        // alldata.innerHTML += '<div class ="col-md-4"> <div class = "card"> <div class="card-header" >${result[1][0][0]} </div></div>  </div>'
        console.log(i);
    }
}
