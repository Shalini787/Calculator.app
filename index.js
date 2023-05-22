const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");
for (let i = 0; i< buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click",()=>{
    // text content se jo buttonsel k andr likha h vo milega
    const buttonValue =(buttonsEl[i].textContent);
    if(buttonValue==="C"){
        clearResult();
    }
    else if(buttonValue==="="){
        calculateResult();
    }
    else{
        appendValue(buttonValue);
    }
  });   
}
function clearResult(){
    inputFieldEl.value="";
}
function calculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue){
    // if + is not written here then the previous value would have been replaced by new value.
    inputFieldEl.value +=buttonValue;
}