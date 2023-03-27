const form = document.querySelector("#form");
const username = document.querySelector("#username"); 
const email = document.querySelector("#email"); 
const password = document.querySelector("#password"); 
const rePassword = document.querySelector("#repassword"); 
var dogruluk = false;
var regexp = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;


document.querySelector(".form1").form.addEventListener('submit',function(e)
{
    e.preventDefault();
    message();

}  );

document.querySelector(".form2").form.addEventListener('reset',function(e)
{
    e.preventDefault();
    document.querySelectorAll(".form-control").forEach(function(item)
    {   
        item.value = "";
        duzelt(item);
    })

}  );

//hiçibir şey girilmediğinde hata yazdıran fonksiyon
function showError1(input, message)
{
    input.nextElementSibling.innerHTML = input.id+ " " + message;
    input.classList.add("kenarlik");

}

//username hatasını yazdıran fonksiyon
function showError2(input,message)
{
    input.nextElementSibling.innerHTML =  message;
    input.classList.add("kenarlik");
}

//uzunluk kontrol eden fonksiyon
function length(input)
{
    if(input.value.length < 5 || input.value.length > 10)
    {
        input.nextElementSibling.innerHTML ="5 ile 10 arası olmalı"
        input.classList.add("kenarlik");
        dogruluk = false;
    }
    else
    {
        duzelt(input)
        dogruluk = true;
    }
}

function checkPassword(inputRep,inputP)
{
 
//ikisinin doğruluğunu kontrol eder
    if(dogruluk ==true)
    {
        if(inputP.value != inputRep.value)
        {
            document.querySelectorAll(".divson").forEach(function(item)
            {
                item.innerHTML="Girdiğiniz paralo bilgileri aynı değil";
    
            })
            inputRep.classList.add("kenarlik");
            inputP.classList.add("kenarlik");
        }
    }
   
   
   
}



function duzelt(input)
{
    input.parentElement.lastElementChild.innerHTML = " ";
    input.classList.remove("kenarlik")
}




function message()
{

//username ve karakter girilip girlimediğinikontrol eder

    document.querySelectorAll(".form-control").forEach(function(item)
    {
       
        item.value == "" ? showError1(item,"giriniz"): duzelt(item)
          
        var length =item.value.length;
        
        if(item.id == "username"  && length >0 && (length < 4 || length > 15) )
        {
            showError2(item,"Username 5 ile 8 karakter arasında olmalı");
            
        }
        
    });

//password ve repassword kontrol

    if(password.value != "" && rePassword.value !="")
    {
        length(password);
        length(rePassword)
        if(dogruluk== true)
        {
            checkPassword(rePassword,password)
        }
       
    }

//email kontrol
    if(email.value != "" && regexp.test(email.value) != true )
    {
        email.nextElementSibling.innerHTML ="Geçerli bir mail adresi giriniz"
        email.classList.add("kenarlik")
    }
    else if(regexp == true)
    {
        duzelt(email)

    }

}
