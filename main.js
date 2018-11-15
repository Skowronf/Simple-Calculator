function calc() {
    const a = parseInt(document.querySelector("#value1").value);
    const b = parseInt(document.querySelector("#value2").value);
    const c = document.querySelector("#operator").value;
    var calculate;
    
    if  ( c === "add") {
        calculate = a + b;
    } else if ( c === "min") {
        calculate = a - b;
    } else if ( c === "div") {
        calculate = a / b;
    } else if ( c === "mul") {
        calculate = a * b;
    }
    
    console.log(calculate);
    document.querySelector("#result").innerHTML = calculate;
}