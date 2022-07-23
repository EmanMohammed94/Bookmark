//to import inputs from html(all of the input not only its value)

var siteName=document.getElementById('siteName');
var siteURL=document.getElementById('siteURL');
var alertNamemessage= document.getElementById('alertNameMessage');
var alertUrlmessage= document.getElementById('alertUrlMessage');
//array to store new inputs
var arrayOfSites;

//to make sure that the user has old data or not
if(localStorage.getItem('mysite')!=null)
{
arrayOfSites=JSON.parse(localStorage.getItem('mysite'));
//to display old data without need to add new inputs(sites)
displaySite(arrayOfSites);

    
}
//if there is no new input display emoty array(nothing)
else{
    arrayOfSites=[];
}

//add new site
function addSite(){
   
//get the value of inputs

var emptName=siteName.value;
    var emptURL=siteURL.value;
    var site={
        name:siteName.value,
        url:siteURL.value
    };

   
    if(emptName==""&&emptURL==""){
        alertNamemessage.classList.replace('d-none','d-inline-block');
        alertUrlmessage.classList.replace('d-none','d-inline-block');
        
    }    

    else if(emptName==""||(emptName==""&&emptURL!="")){
   alertNamemessage.classList.replace('d-none','d-inline-block');
  


}
else if(emptURL==""||(emptURL==""&&emptName!="")){

    alertUrlmessage.classList.replace('d-none','d-inline-block');
  
}





else{
    alertNamemessage.classList.replace('d-inline-block','d-none');
   alertUrlmessage.classList.replace('d-inline-block','d-none');
  
   identicalInput();
  
  
    //add new element in the array
    arrayOfSites.push(site);
    
    //to save inputs ,stringfy=>to convert json to string
    localStorage.setItem('mysite',JSON.stringify(arrayOfSites));
    
    
    displaySite(arrayOfSites);
    siteClear();
   
    
}


}

//delete input every time
function siteClear(){



    siteName.value="";
    siteURL.value="";



}
//display inputs
function displaySite(){
var siteStorageContainer=``;

for(var i=0;i<arrayOfSites.length;i++){

siteStorageContainer+= ` <div class=" site-container   my-3  w-100 ">
<div class="d-flex  justify-content-between flex-row flex-wrap w-100  " >
<div  class="w-25">
<h3 >${arrayOfSites[i].name}</h3>
</div>
<div class="w-25 ">

<a class=" btn btn-primary btn-sm p-2" target="_blank" href=" ${arrayOfSites[i].url}">visit</a>
<button class=" btn btn-danger btn-sm p-2 " onclick="deleteSite(${i})">Delete</button>
</div>
<div>
</div>`;



}
document.getElementById('siteContainer').innerHTML=siteStorageContainer;

}



//delete any element of stored data
function deleteSite(deletedIndex){

//to delete one alement every time 
arrayOfSites.splice(deletedIndex,1);
//we must delete the item from array as well as localstorage(add=delete but by reverse)
localStorage.setItem('mysite',JSON.stringify(arrayOfSites));
//we must display after delete as well as adding
displaySite(arrayOfSites);

}



function identicalInput(){

    var emptName=siteName.value;
    var emptURL=siteURL.value;

    for(var i=0; i<arrayOfSites.length;i++)
    {
        
      
        if(emptName==arrayOfSites[i].name||emptURL==arrayOfSites[i].url){
    
            alertNamemessage.classList.replace('d-none','d-inline-block');
           
            document.getElementById("nameRequired").innerHTML="this name already exist";
            return false;
        }
       
    }
    

}





