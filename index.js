const  display = document.getElementById("display");
function addToDisplay(input){
    display.value += input;
} 
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}
function clearScreen(){
    display.value = "";
}
function clearSingleEntry(){
    display.value = display.value.slice(0,-1); 
}

document.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        calculate();
    }
});