function convert(){
    const inputValue = document.getElementById("userInput").value;
    const unit= document.getElementById("unit").value;
    const milesToKm = (unit == "milesToKm");
  
  result = 0;
  
  if (milesToKm == true) {
    result = inputValue * 1.60934;
  } else {
    result = inputValue / 1.60934;
  }
  
  const resultString = inputValue + " miles are " + result + "km";
  const resultElement = document.getElementById("resultElement");
  resultElement.innerHTML = resultString;
  console.log(resultString);
  }