var siteNameInput = document.getElementById("name");
var siteUrlInput = document.getElementById("url");
var btnSub = document.getElementById("btnSub");
var btnClose = document.getElementById("btnClose");

var allSites = [];


if(localStorage.getItem("allSites") != null){
   allSites = JSON.parse(localStorage.getItem("allSites"));

   display();
}

function siteNameVaildation(){
    var regex = /^[A-Z][a-z]{3,20}$/
    if(regex.test(siteNameInput.value) == true){
        document.getElementById("layer").classList.add("d-none");
        return true
    }

    document.getElementById("layer").classList.remove("d-none");
    return false;

}

function siteUrlVaildation(){
    var regex = /^www.[a-z]{3,30}[0-9]*.com$/
    if(regex.test(siteUrlInput.value) == true){
        document.getElementById("layer").classList.add("d-none");
        return true
    }

    document.getElementById("layer").classList.remove("d-none");
    return false;
}

function add(){
  if(siteNameVaildation() == true && siteUrlVaildation() == true ){

     var site = {
         name: siteNameInput.value,
         url: siteUrlInput.value,
        }
        
        allSites.push(site);
        localStorage.setItem("allSites" , JSON.stringify(allSites));
        
        clear();
        display();
    }
}

function clear(){
    siteNameInput.value ="";
    siteUrlInput.value ="";
}

function display(){
    var cartoona = "";

    for(var i =0 ; i< allSites.length ; i++){
       cartoona += `
       <tr>
       <td>${i}</td>
       <td>${allSites[i].name}</td>
       <td>
           <a href="https://${allSites[i].url}" target="_blank">
               <button class="btn btn-success">
                       <i class="fa-solid fa-eye"></i>   Visit
              </button>
           </a>
       </td>
       <td>
           <button onclick="deleteData(${i})" class="btn btn-danger">
               <i class="fa-solid fa-trash-can"></i> Delete
           </button>
       </td>
    </tr>
       `
    }

    document.getElementById("tableData").innerHTML = cartoona;
}

function deleteData(index){
    allSites.splice(index , 1);
    display();
    localStorage.setItem("allSites" , JSON.stringify(allSites));
}

function exit(){
    document.getElementById("layer").classList.add("d-none");
}