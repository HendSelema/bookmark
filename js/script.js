// id
var SiteName=document.getElementById('name');
var SiteUrl=document.getElementById('url');
var submitbtn=document.getElementById('subbtn');
var SiteList;

// submit-btn
submitbtn.onclick=function(){
    if(nameValid()===true && urlValid()===true){
        createSite();
        localStorage.setItem('website',JSON.stringify(SiteList));
        reset();
        display();

    }else{
        alert('Site Name or Url is not valid, Please follow the rules below :Site name must contain at least 3 characters and Site URL must be a valid one')
    }
}
// validation
function nameValid(){
    var nameregex=/^[A-Za-z]{3,}$/;
    var siteN =SiteName.value;
    if(nameregex.test(siteN) ){
        return true;
    }else{
        return false;
    }
}
function urlValid(){
    var urlregex=/^((ftp|http|https):\/\/)?www\.([a-zA-Z]+)\.[a-z]{2,}$/;
    var siteu =SiteUrl.value;
    if(urlregex.test(siteu)){
        return true;
    }else{
        return false;
    }
}
// localStorage
if (localStorage.getItem('website') ==  null){
    SiteList=[];
}else{
    SiteList=JSON.parse(localStorage.getItem('website'));
    display();
}

// create
function createSite(){
   var Site={
    Name:SiteName.value,
    Url:SiteUrl.value
    } 
    SiteList.push(Site);
    // localStorage.setItem('website',JSON.stringify(SiteList));
    // reset();
    // display();
    console.log(SiteList);
}

// reset data
function reset(){
    SiteName.value='';
    SiteUrl.value='';
}

// show data (display)
function display(){
    var dis=``;
    for(var i=0 ; i<SiteList.length ;i++){
        dis+=`
        <tr>
            <td>${i+1}</td>
            <td>${SiteList[i].Name}</td>
            <td ><a href="${SiteList[i].Url}"><button class=" visit btn btn-danger" ><i class="fa-solid fa-eye px-1"></i>Visit</button></a></td>
            <td><button class=" delete btn btn-danger " onclick="delte(${i})"><i class="fa-solid fa-trash-can px-1"></i>Delete</button></td>
        </tr>
     `
    }
document.getElementById("tableBody").innerHTML=dis
}

// delete... method ->splice
function delte(index){
    SiteList.splice(index,1);
    localStorage.setItem('website',JSON.stringify(SiteList));
    display();
}

