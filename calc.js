console.log("...connected");

//function that displays value
function dis(val) { 
			document.getElementById("result").value += val 
} 

//Clear display
let clearButton = document.querySelector("#clearButton");
let calcKeys = document.getElementById("calculator-keys");

clearButton.addEventListener('click', () => {
    document.getElementById("result").value = "";
})

//Evalute the result 
function eql() {
   let text = document.getElementById("result").value;
   let total = eval(text);
   document.getElementById("result").value = total;
}

let equalButton = document.querySelector("#equalButton")
equalButton.addEventListener('click', eql);


