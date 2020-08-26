/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



    function updateClass(cls,number){
     var i;
        var x = document.getElementsByClassName(cls);
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove('active');
        }
        var ss = document.getElementById(cls+number);
        ss.classList.add("active");   
    }
    
   
    
    
    function validation(field_name,field){
        console.log("field_name "+field_name+" field.value "+field.value);
        var xhttp = new XMLHttpRequest();
        var params = 'field=' + field_name + '&value=' + field.value+'&type=sign_up';
        xhttp.open("POST", "./validation.php", true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
                if(parseInt(this.responseText) === 0){
                if(field_name ==='name'){    
                 alert("username is already taken .please try a new one.");  
                }
               else {
                    alert(field_name+" is already registered"); 
                  
                }
                }
                
            }
        };
        xhttp.send(params);
    }
    
    function sendOTP(type,sender){
        try{
        type.style.pointerEvents = 'none'; 
        }catch(ex){
            
        }
        console.log(" field.value "+type+" sender "+sender);
        var xhttp = new XMLHttpRequest();
        var params = '&type=' + type+'&sender='+sender;
        xhttp.open("POST", "./OTPManager.php", true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
               
                
            }
        };
        xhttp.send(params);
    }
     function sendMobileOTP(type,sender){
        try{
        type.style.pointerEvents = 'none'; 
        }catch(ex){
            
        }
        console.log(" field.value "+type+" sender "+sender);
        var xhttp = new XMLHttpRequest();
        var params = '&type=' + type+'&sender='+sender;
        xhttp.open("POST", "./MobileOTPManager.php", true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
               
                
            }
        };
        xhttp.send(params);
    }
    
    
   
