var age = document.getElementById("age");
var btn = document.getElementById("agecheck");
var result = document.getElementById("result");
 function agecheck(){
    const birthDay=age.value;
   
    if(birthDay===""){
        alert("please enter your birhtday");
    }
    else{
        const age=ages(birthDay);

        result.innerHTML=  age + (0>1?" years":" year");
    }
   

}
function ages(birthDay){
    const currentDate= new Date();
    const birthDate= new Date(birthDay);
    let age=currentDate.getFullYear()-birthDate.getFullYear();
    const month=currentDate.getMonth()-birthDate.getMonth();
    if(month<0||(month===0 && currentDate.getDate()<birthDate.getDate())){
        age--;
    }
return age;

}
btn.addEventListener("click",agecheck);




