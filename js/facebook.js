

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '462443637609189',
      cookie     : true,
      xfbml      : true,
      version    : 'v5.0'
    });
      
  
     
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

var finished_rendering = function() {
  console.log("finished rendering plugins");
  var spinner = document.getElementById("spinner");
  spinner.removeAttribute("style");
  spinner.removeChild(spinner.childNodes[0]);
}



function facebookLogin(){
FB.getLoginStatus(function(response) {
    console.log(response);
    statusChangeCallback(response);
});
}

function statusChangeCallback(response){
  if (response.status === 'connected') {
    console.log(response.authResponse.accessToken);
    FB.api('/me',{fields: 'name,email'}, function(response) {
    console.log(JSON.stringify(response));
    setLogin(response);
});
  }else{
     FB.login(function(response) {
          console.log(response);
       statusChangeCallback(response);
         
     },{scope: 'email'});
  }
} 


function setLogin(data){
    var form = document.createElement("form");
     document.body.appendChild(form);
    form.method = "POST";
    form.action = "facebook_login.php"; 
   if (data.hasOwnProperty("id")) {  
var mi = document.createElement("input");
mi.setAttribute('type', 'text');
mi.setAttribute('value', ''+data.id);
mi.setAttribute('name', 'id');
form.appendChild(mi);
}
if (data.hasOwnProperty("name")) { 
var mi1 = document.createElement("input");
mi1.setAttribute('type', 'text');
mi1.setAttribute('value', ''+data.name);
mi1.setAttribute('name', 'name');
form.appendChild(mi1);
}
if (data.hasOwnProperty("email")) { 
    var mi2 = document.createElement("input");
mi2.setAttribute('type', 'email');
mi2.setAttribute('name', 'email');
mi2.setAttribute('value', ''+data.email);
form.appendChild(mi2);
}
   

    form.submit();
}