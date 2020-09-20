//  let eMail = document.getElementById("email-input");
//  let password = document.getElementById("pass-input");
 
//  let emailValue;
//  let passValue;
//  let counter=0;


// let inputs=document.querySelectorAll(".top-container input");
// console.log(inputs);


//  document.getElementById("button").addEventListener("click",function(){
//         if(counter==0) {
//             emailValue=eMail.value;

//             if(emailValue != ""){ console.log(emailValue);
//                 // ide na sljedece polje
//                 eMail.classList.add("hidden");
//                 password.classList.remove("hidden");
//             }else{
//                 //ispisuje poruku error
//                 eMail.classList.add("error");
//                 counter--;
//             }        
//         }
//         else{
//             passValue=password.value;
//             console.log(passValue);
//         }
      

//         counter++;
        

// });


let counter=0;
let inputs=document.querySelectorAll(".top-container input");
let stepsCounter=inputs.length;
let stepInfo=document.getElementsByClassName("step-info")[0];
stepInfo.innerHTML="step " + (counter+1) +" of "+stepsCounter;

document.getElementById("button").addEventListener("click", function(){
    console.log(counter + 1, stepsCounter);
    if(counter + 1 >= stepsCounter){
        window.location.href = '/'; 
    }else{
        if(inputs[counter].value == ""){
            inputs[counter].classList.add("error");
        }else{
            inputs[counter].classList.add("hidden");
            inputs[counter+1].classList.remove("hidden");
            counter++;
            stepInfo.innerHTML= "step " + (counter+1) +" of "+stepsCounter;
        }
    }
})
